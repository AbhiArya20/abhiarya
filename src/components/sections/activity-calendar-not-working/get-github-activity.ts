"use server";

import { Activity } from "react-activity-calendar";
import { PERSONAL_DATA } from "@/data/personal";
import { ActionsReturn, Week } from "@/types";

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

function getLevel(count: number) {
  if (count === 0) return 0;
  if (count <= 5) return 1;
  if (count <= 10) return 2;
  if (count <= 20) return 3;
  return 4;
}

export async function getGithubActivity(): Promise<ActionsReturn<Activity[]>> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) {
    return { error: { message: "Unable to fetch GitHub activity." } };
  }

  const { data } = await res.json();

  if (!data?.user?.contributionsCollection?.contributionCalendar?.weeks) {
    return { error: { message: "GitHub response is missing expected data." } };
  }

  const contributions = data.user.contributionsCollection.contributionCalendar.weeks.flatMap((week: Week) =>
    week.contributionDays.map(day => ({
      date: day.date,
      count: day.contributionCount,
      level: getLevel(day.contributionCount),
    }))
  );

  return { data: contributions as Activity[] };
}
