"use client";

import { track } from "@vercel/analytics";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/components/icons";
import { Card } from "@/components/ui/card";
import type { Experience } from "@/data/experience";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

export default function ExperienceCard({
  company,
  position,
  shortPosition,
  location,
  startDate,
  endDate,
  url,
  github,
  icon,
  image,
  className,
}: Experience & { className?: string }) {
  // TODO: Remove this when we marked icon as non-nullable in Experience type
  // biome-ignore lint/style/noNonNullAssertion: Let's keep it simple for now
  const Icon = icons[icon!];
  const GithubIcon = icons.github;
  return (
    <motion.div variants={fadeDownChildVariants}>
      <Card
        className={cn(
          "group border-none p-4 sm:rounded-lg bg-sidebar",
          className,
        )}
      >
        <div className="flex w-full gap-2">
          {icon && (
            <Icon className="mr-2 size-10 shrink-0 transition-all group-hover:saturate-100 sm:saturate-0" />
          )}
          {image && (
            <Image
              src={image}
              width={64}
              height={64}
              alt={company}
              className="mr-2 size-10 shrink-0 rounded-md transition-all group-hover:saturate-100 sm:saturate-0"
            />
          )}
          <div className="flex flex-grow flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between gap-2">
              <h3 className="flex items-center gap-2 overflow-hidden text-left text-sm font-semibold">
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="truncate hover:text-blue-400"
                  onClick={() => track(`experience_${company}_clicked`)}
                >
                  {company}
                </Link>
                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener"
                    onClick={() =>
                      track(`experience_${company}_github_clicked`)
                    }
                  >
                    <GithubIcon className="text-muted-foreground size-4 hover:text-blue-400" />
                    <span className="sr-only">{company} Github</span>
                  </Link>
                )}
              </h3>
              <p className="text-muted-frontend text-xs font-semibold">
                {location}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-muted-foreground hidden text-sm sm:inline">
                {position}
              </p>
              <p className="text-muted-foreground text-sm sm:hidden">
                {shortPosition}{" "}
              </p>
              <p
                className={`text-muted-foreground text-end font-mono text-xs text-[10px] truncate`}
              >{`${startDate} - ${endDate}`}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
