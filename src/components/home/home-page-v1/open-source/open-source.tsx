"use client";

// import { StarsChart } from "@/components/sections/open-source/stars-chart";
import PullRequestCardV1 from "@/components/pull-request-cards/pull-request-card-v1";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { GitPullRequestArrow, WifiOff } from "lucide-react";
import { ActionsReturn, PullRequest } from "@/types";
import { PERSONAL_DATA } from "@/data/personal";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import Link from "next/link";

// import { DATA } from "@/data/open-source";

// interface RepoDetails {
//   stargazers_count: number;
// }

// interface Stargazer {
//   starred_at: string;
// }

// async function getStargazersCount(repo: string): Promise<number> {
//   const url = `https://api.github.com/repos/${repo}`;
//   const response = await fetch(url, {
//     cache: "force-cache",
//     next: { revalidate: 5 * 60 }, // 5 minutes
//     headers: {
//       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//     },
//   });
//   const data: RepoDetails = await response.json();
//   return data.stargazers_count;
// }

// async function fetchStargazersPage(repo: string, page: number): Promise<Stargazer[]> {
//   const url = `https://api.github.com/repos/${repo}/stargazers?per_page=100&page=${page}`;
//   const response = await fetch(url, {
//     cache: "force-cache",
//     next: { revalidate: 5 * 60 }, // 5 minutes
//     headers: {
//       Accept: "application/vnd.github.v3.star+json",
//       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//     },
//   });
//   const data: Stargazer[] = await response.json();
//   return data;
// }

// async function getAllStargazers(repo: string): Promise<string[]> {
//   const stargazersCount = await getStargazersCount(repo);
//   const totalPages = Math.ceil(stargazersCount / 100);
//   let allStarredAtDates: string[] = [];

//   for (let page = 1; page <= totalPages; page++) {
//     const stargazers = await fetchStargazersPage(repo, page);
//     const starredAtDates = stargazers.map(stargazer => stargazer.starred_at);
//     allStarredAtDates = allStarredAtDates.concat(starredAtDates);
//   }

//   return allStarredAtDates;
// }
type TransformedEntry = {
  month: string;
  count: number;
};
export const transformData = (timestamps: string[]): TransformedEntry[] => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const lastEntries: { [key: string]: number } = {};
  const lastIndexForMonth: { [key: string]: number } = {};

  timestamps.forEach((timestamp, index) => {
    const date = new Date(timestamp);
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    const monthYear = `${monthNames[month]}/${year.toString().slice(2, 4)}`;

    lastIndexForMonth[monthYear] = index + 1;
  });

  Object.keys(lastIndexForMonth).forEach(monthYear => {
    lastEntries[monthYear] = lastIndexForMonth[monthYear];
  });

  return Object.keys(lastEntries).map(monthYear => ({
    month: monthYear,
    count: lastEntries[monthYear],
  }));
};

export default function OpenSourceSection({ pullRequest }: { pullRequest: ActionsReturn<PullRequest[]> }) {
  const { data, error } = pullRequest;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-end justify-between">
        <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
          Open source journey
        </motion.h2>
        <Link
          href={`https://github.com/pulls?q=is:pr+author:${PERSONAL_DATA.github}+archived:false+is:closed`}
          className="hover:text-blue-400"
          target="_blank"
          rel="noopener"
          onClick={() => track("see_all_open_source_pull_requests_clicked")}
        >
          <span className="sr-only">Github pull requests</span>
          <motion.div variants={fadeDownChildVariants} className="flex flex-row items-center justify-start gap-2">
            <div className="flex shrink-0 justify-start text-xs font-semibold">See More</div>
          </motion.div>
        </Link>
      </div>

      {error && (
        <div className="border-border rounded-lg border p-4 shadow-sm">
          <div className="text-destructive flex h-full items-center justify-center gap-4 py-16">
            <WifiOff className="size-5" /> <span>{error.message}</span>
          </div>
        </div>
      )}

      {data && data.length > 0 && (
        <>
          {data?.map(pr => (
            <PullRequestCardV1
              key={pr.id}
              id={pr.id}
              title={pr.title}
              url={pr.url}
              createdAt={pr.createdAt}
              state={pr.state}
              deletions={pr.deletions}
              additions={pr.additions}
              number={pr.number}
              commits={pr.commits}
              changedFiles={pr.changedFiles}
              closedAt={pr.closedAt}
              mergedAt={pr.mergedAt}
              author={pr.author}
              repository={pr.repository}
            />
          ))}
        </>
      )}

      {data && data.length === 0 && (
        <div className="border-border rounded-lg border p-4 shadow-sm">
          <div className="text-muted-foreground flex items-center justify-center gap-4 py-16">
            <GitPullRequestArrow className="size-5" /> <span>No Pull Requests found...</span>
          </div>
        </div>
      )}

      {/* <p className="text-muted-foreground">{DATA.openSource?.description}</p> */}
      {/* <div className="divide-y divide-solid">
          {DATA.openSource?.projects?.map(async (project, idx) => (
            <div key={idx} className="py-4">
              <StarsChart
                data={transformData(await getAllStargazers(project.repository))}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div> */}
    </div>
  );
}
