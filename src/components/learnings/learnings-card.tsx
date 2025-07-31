"use client";

import { fadeDownChildVariants } from "@/lib/animation-variants";
import { type LEARNINGS } from "@/data/learnings";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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
      <Card className={cn("group p-4 sm:rounded-lg dark:bg-neutral-900", className)}>
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
            <div className="flex flex-grow flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="flex flex-wrap items-center gap-2 text-left text-sm font-semibold">
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener"
                    className="whitespace-nowrap hover:text-blue-400"
                    onClick={() => track(`learnings_${title}_clicked`)}
                  >
                    {title}
                  </Link>
                </h3>
                <p className="text-muted-frontend text-xs font-semibold">{date}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
