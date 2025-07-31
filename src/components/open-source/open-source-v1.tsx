"use client";

import PullRequestCardV1 from "@/components/open-source/pull-request-cards/pull-request-card-v1";
import ActivityCalendarV1 from "@/components/open-source/activity-calendar/activity-calendar-v1";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import ErrorCard from "@/components/shared/error/error-card";
import { GitPullRequestArrow, WifiOff } from "lucide-react";
import { ActionsReturn, PullRequest } from "@/types";
import { Activity } from "react-activity-calendar";
import { PERSONAL_DATA } from "@/data/personal";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OpenSourceV1({
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

      <ActivityCalendarV1 activities={activities} />

      {error && (
        <ErrorCard message={error.message} icon={<WifiOff className="size-5" />} className="text-destructive" />
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
        <ErrorCard
          message={"No Pull Requests found..."}
          icon={<GitPullRequestArrow className="size-5" />}
          className="text-muted-foreground"
        />
      )}
    </div>
  );
}
