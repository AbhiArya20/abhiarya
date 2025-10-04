"use client";

import ErrorCard from "@/components/error/error-card";
import ActivityCalendarComponent from "@/components/open-source/activity-calendar";
import PullRequestCard from "@/components/open-source/pull-request-card";
import { PERSONAL_DATA } from "@/data/personal";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { ActionsReturn, PullRequest } from "@/types";
import { track } from "@vercel/analytics";
import { GitPullRequestArrow, WifiOff } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Activity } from "react-activity-calendar";

export default function OpenSource({
  pullRequest,
  activities,
}: {
  pullRequest: ActionsReturn<PullRequest[]>;
  activities: ActionsReturn<Activity[]>;
}) {
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

      <ActivityCalendarComponent activities={activities} />

      <motion.div variants={fadeDownChildVariants}>
        {error && (
          <ErrorCard message={error.message} icon={<WifiOff className="size-5" />} className="text-destructive" />
        )}
      </motion.div>

      {data && data.length > 0 && (
        <>
          {data?.map(pr => (
            <PullRequestCard
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

      <motion.div variants={fadeDownChildVariants}>
        {data && data.length === 0 && (
          <ErrorCard
            message={"No Pull Requests found..."}
            icon={<GitPullRequestArrow className="size-5" />}
            className="text-muted-foreground"
          />
        )}
      </motion.div>
    </div>
  );
}
