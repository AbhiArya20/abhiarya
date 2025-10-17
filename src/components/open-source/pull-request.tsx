"use client";

import { GitPullRequestArrow, WifiOff } from "lucide-react";
import { motion } from "motion/react";
import { ErrorCard } from "@/components/error/error-card";
import { PullRequestCard } from "@/components/open-source/pull-request-card";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import type { ActionsReturn, PullRequest } from "@/types";

export function PullRequestComponent({
  pullRequest,
}: {
  pullRequest: ActionsReturn<PullRequest[]>;
}) {
  const { data, error } = pullRequest;

  return (
    <>
      <motion.div variants={fadeDownChildVariants}>
        {error && (
          <ErrorCard
            message={error.message}
            icon={<WifiOff className="size-5" />}
            className="text-destructive"
          />
        )}
      </motion.div>

      {data &&
        data.length > 0 &&
        data?.map((pr) => (
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

      <motion.div variants={fadeDownChildVariants}>
        {data && data.length === 0 && (
          <ErrorCard
            message={"No Pull Requests found..."}
            icon={<GitPullRequestArrow className="size-5" />}
            className="text-muted-foreground"
          />
        )}
      </motion.div>
    </>
  );
}
