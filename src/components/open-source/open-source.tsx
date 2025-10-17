"use client";

import { track } from "@vercel/analytics";
import { motion } from "motion/react";
import Link from "next/link";
import type { Activity } from "react-activity-calendar";
import ActivityCalendarComponent from "@/components/open-source/activity-calendar";
import PullRequestComponent from "@/components/open-source/pull-request";
import { PERSONAL_DATA } from "@/data/personal";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import type { ActionsReturn, PullRequest } from "@/types";

export default function OpenSource({
  pullRequest,
  activities,
}: {
  pullRequest: ActionsReturn<PullRequest[]>;
  activities: ActionsReturn<Activity[]>;
}) {
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
          <motion.div
            variants={fadeDownChildVariants}
            className="flex shrink-0 justify-start text-xs font-semibold"
          >
            See More
          </motion.div>
        </Link>
      </div>
      <ActivityCalendarComponent activities={activities} />
      <PullRequestComponent pullRequest={pullRequest} />
    </div>
  );
}
