"use client";

import { track } from "@vercel/analytics";
import { formatDistanceToNow } from "date-fns";
import { GitMerge } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import type { PullRequest } from "@/types";

export default function PullRequestCard({
  title,
  url,
  deletions,
  additions,
  number,
  mergedAt,
  author,
  repository,
}: PullRequest) {
  return (
    <motion.div variants={fadeDownChildVariants}>
      <Card className="border-none p-4 sm:rounded-lg bg-sidebar">
        <div className="flex items-start gap-2">
          <GitMerge className="mt-2 size-5 shrink-0 text-violet-400" />
          <div className="flex-1 overflow-hidden">
            <h3 className="flex justify-start gap-2">
              <Link
                href={repository.url}
                target="_blank"
                rel="noopener"
                className="text-muted-foreground truncate hover:text-blue-400"
                onClick={() =>
                  track(`open_source_pr_${repository.nameWithOwner}_clicked`)
                }
              >
                {repository.nameWithOwner}
              </Link>
              <Link
                href={url}
                target="_blank"
                rel="noopener"
                className="inline-block truncate hover:text-blue-400"
                onClick={() =>
                  track(
                    `open_source_pr_#${number}_${repository.nameWithOwner}_clicked`,
                  )
                }
              >
                {title}
              </Link>
            </h3>
            <div className="flex items-center justify-between gap-2">
              <p className="text-muted-foreground truncate text-xs whitespace-nowrap">
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-blue-400"
                  onClick={() =>
                    track(
                      `open_source_pr_#${number}_${repository.nameWithOwner}_clicked`,
                    )
                  }
                >
                  {`#${number}`}
                </Link>
                {" by "}
                <Link
                  href={author.url}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-blue-400"
                  onClick={() => track(`open_source_${author.login}_clicked`)}
                >
                  {author.login}
                </Link>
                {" was merged "}
                {formatDistanceToNow(new Date(mergedAt), { addSuffix: true })}
              </p>
              <p className="text-muted-foreground flex items-center justify-between gap-1 text-xs font-semibold whitespace-nowrap">
                <span className="text-green-700 dark:text-green-500">{`+${additions}`}</span>
                <span className="text-red-700 dark:text-red-500">{`-${deletions}`}</span>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
