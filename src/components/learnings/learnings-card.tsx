"use client";

import { Icons } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { type LEARNINGS } from "@/data/learnings";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function LearningCard({
  title,
  description,
  date,
  url,
  icon,
  image,
  className,
}: LEARNINGS & { className?: string }) {
  const Icon = Icons[icon!];
  return (
    <motion.div variants={fadeDownChildVariants}>
      <Card className={cn("group border-none p-4 sm:rounded-lg dark:bg-neutral-900", className)}>
        <div className="flex flex-col gap-2">
          <div className="flex w-full gap-2">
            {icon && <Icon className="mr-2 h-10 w-10 shrink-0 transition-all group-hover:saturate-100 sm:saturate-0" />}
            {image && (
              <Image
                src={image}
                width={64}
                height={64}
                alt={title}
                className="mr-2 h-10 w-10 shrink-0 rounded-md transition-all group-hover:saturate-100 sm:saturate-0"
              />
            )}
            <div className="flex flex-grow flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                <h3 className="flex justify-start overflow-hidden text-left text-sm font-semibold">
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener"
                    className="truncate hover:text-blue-400"
                    onClick={() => track(`learnings_${title.split(" ").join("_")}_clicked`)}
                  >
                    {title}
                  </Link>
                </h3>
                <p className="text-muted-frontend text-xs font-semibold whitespace-nowrap">{date}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
