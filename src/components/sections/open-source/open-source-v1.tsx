// import { StarsChart } from "@/components/sections/open-source/stars-chart";
import { getGithubPullRequest } from "@/actions/get-github-pull-request";
import { formatDistanceToNow } from "date-fns";
import { Card } from "@/components/ui/card";
// import { DATA } from "@/data/open-source";
import { GitMerge } from "lucide-react";
import { PullRequest } from "@/types";
import Link from "next/link";

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

const OpenSourceV1 = async () => {
  const pullRequest = await getGithubPullRequest();

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold">Open source journey</h2>
      {pullRequest?.data?.map(pr => (
        <OpenSourceCard
          key={pr.id}
          id={pr.id}
          title={pr.title}
          url={pr.url}
          createdAt={pr.createdAt}
          state={pr.state}
          deletions={pr.deletions}
          additions={pr.additions}
          commits={pr.commits}
          changedFiles={pr.changedFiles}
          closedAt={pr.closedAt}
          mergedAt={pr.mergedAt}
          author={pr.author}
          repository={pr.repository}
        />
      ))}

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
};

export default OpenSourceV1;

export const OpenSourceCard = ({
  title,
  url,
  // createdAt,
  // state,
  // deletions,
  // additions,
  // commits,
  // changedFiles,
  // closedAt,
  mergedAt,
  author,
  repository,
}: PullRequest) => {
  // const Icon = Icons[icon!];

  return (
    <Card className="border-none p-4 sm:rounded-lg dark:bg-neutral-900">
      <div className="flex items-start gap-2">
        <GitMerge className="mt-2 size-5 shrink-0 text-violet-400" />
        <div className="overflow-hidden">
          <h3 className="flex justify-center gap-2">
            <Link href={url} target="_blank" rel="noopener" className="text-muted-foreground truncate">
              {repository.nameWithOwner}
            </Link>
            <Link href={url} target="_blank" rel="noopener" className="inline-block truncate">
              {title}
            </Link>
          </h3>
          <p className="text-muted-foreground text-xs">{`#21 by ${author.login} was merged ${formatDistanceToNow(new Date(mergedAt), { addSuffix: true })}`}</p>
        </div>
      </div>
    </Card>
  );
};
