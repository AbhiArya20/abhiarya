"use client";

import { fadeDownChildVariants } from "@/lib/animation-variants";
import { formatDistanceToNow } from "date-fns";
import { Card } from "@/components/ui/card";
import { GitMerge } from "lucide-react";
import { motion } from "framer-motion";
import { PullRequest } from "@/types";
import Link from "next/link";

export default function OpenSourceCardV1({
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
}: PullRequest) {
  // const Icon = Icons[icon!];

  return (
    <motion.div variants={fadeDownChildVariants}>
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
    </motion.div>
  );
}
