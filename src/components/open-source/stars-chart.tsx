"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { type transformData } from "@/components/open-source/open-source-v1";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { track } from "@vercel/analytics";
import Link from "next/link";
import { JSX } from "react";

const chartConfig = {
  count: {
    label: "Stars",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface StarsChartProps {
  data: ReturnType<typeof transformData>;
  title: string;
  description: string | JSX.Element;
  link: string;
}

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
// type TransformedEntry = {
//   month: string;
//   count: number;
// };
// export const transformData = (timestamps: string[]): TransformedEntry[] => {
//   const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   const lastEntries: { [key: string]: number } = {};
//   const lastIndexForMonth: { [key: string]: number } = {};

//   timestamps.forEach((timestamp, index) => {
//     const date = new Date(timestamp);
//     const month = date.getUTCMonth();
//     const year = date.getUTCFullYear();
//     const monthYear = `${monthNames[month]}/${year.toString().slice(2, 4)}`;

//     lastIndexForMonth[monthYear] = index + 1;
//   });

//   Object.keys(lastIndexForMonth).forEach(monthYear => {
//     lastEntries[monthYear] = lastIndexForMonth[monthYear];
//   });

//   return Object.keys(lastEntries).map(monthYear => ({
//     month: monthYear,
//     count: lastEntries[monthYear],
//   }));
// };

{
  /* <p className="text-muted-foreground">{DATA.openSource?.description}</p> */
}
{
  /* <div className="divide-y divide-solid">
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
        </div> */
}

export default function StarsChart({ data, title, description, link }: StarsChartProps) {
  return (
    <Card className="border-none bg-transparent">
      <CardHeader className="px-0">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-base hover:text-blue-400">{title}</CardTitle>
            <CardDescription className="text-base">{description}</CardDescription>
          </div>
          <div>
            <TooltipProvider delayDuration={70}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild size={"icon"} variant={"ghost"} className="shrink-0">
                    <Link
                      href={link}
                      target="_blank"
                      aria-label="Visit Repository"
                      onClick={() => track("stars_chart_repository_link_clicked")}
                    >
                      {/* <Icons.externalLink className='size-4' /> */}
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  Visit Repository
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-2">
        <ChartContainer config={chartConfig} className="aspect-auto h-72">
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: -30,
              right: 4,
              top: 4,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis tickLine={false} axisLine={false} tickMargin={5} tickCount={4} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value}
              interval={"preserveStartEnd"}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="count" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-count)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-count)" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <Area
              dataKey="count"
              type="monotone"
              fill="url(#count)"
              fillOpacity={0.15}
              stroke="var(--color-primary)"
              stackId="a"
              dot={{ fillOpacity: 1, fill: "var(--color-count)" }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-muted-foreground items-center justify-between gap-4 px-0 pb-0 text-sm leading-3 sm:pb-6">
        <p className="pl-2">Repository star count since creation</p>
        <p className="flex items-center gap-1">
          <span>{data.at(-1)?.count}</span>
          {/* <Icons.star className='inline-block size-3.5' /> */}
        </p>
      </CardFooter>
    </Card>
  );
}
