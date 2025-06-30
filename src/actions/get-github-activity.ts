"use server";

import { PERSONAL_DATA } from "@/data/personal";
import axios from "axios";

const query = `
query {
  user(login: "${PERSONAL_DATA.github}") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

type ContributionDays = {
  color: string;
  contributionCount: number;
  date: string;
};

type Week = {
  contributionDays: ContributionDays[];
};

function getLevel(count: number) {
  if (count === 0) return 0;
  if (count <= 5) return 1;
  if (count <= 10) return 2;
  if (count <= 20) return 3;
  return 4;
}

export async function getGithubActivity() {
  try {
    const { data } = await axios.post(
      "https://api.github.com/graphql",
      {
        query: query,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    const contributions = data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap((week: Week) =>
      week.contributionDays.map(day => ({
        date: day.date,
        count: day.contributionCount,
        level: getLevel(day.contributionCount),
      }))
    );

    return contributions;
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    throw new Error("Error fetching GitHub activity");
  }
}
