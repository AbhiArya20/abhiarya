"use client";

import { GitPullRequestArrow, WifiOff } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { cloneElement, useEffect, useRef, useState } from "react";
import { type Activity, ActivityCalendar } from "react-activity-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ErrorCard from "@/components/error/error-card";
import { THEMES } from "@/components/open-source/themes";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import type { ActionsReturn } from "@/types";

export default function ActivityCalendarComponent({
  activities,
  color,
}: {
  activities: ActionsReturn<Activity[]>;
  color?: keyof typeof THEMES;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const { data, error } = activities;

  useEffect(() => {
    const container = containerRef.current;
    setMounted(true);
    if (!container) return;
    container.children[0].scrollBy({
      left: container.children[0].scrollWidth,
      behavior: "smooth",
    });
  }, []);

  const { resolvedTheme } = useTheme();

  const theme = color ? THEMES[color] : undefined;

  return (
    <motion.div variants={fadeDownChildVariants}>
      {error && (
        <ErrorCard
          message={error.message}
          icon={<WifiOff className="size-5" />}
          className="text-destructive"
        />
      )}

      {data && data.length > 0 && (
        <div className="flex justify-center overflow-hidden">
          <ActivityCalendar
            blockSize={11}
            fontSize={12}
            blockMargin={2}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
            theme={theme}
            colorScheme={
              mounted
                ? (resolvedTheme as "light" | "dark" | undefined)
                : undefined
            }
            data={data}
            ref={containerRef}
            renderBlock={(block, activity) =>
              cloneElement(block, {
                "data-tooltip-id": "react-tooltip",
                "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
              })
            }
          />
          <ReactTooltip id="react-tooltip" />
        </div>
      )}

      {data && data.length === 0 && (
        <ErrorCard
          message={"No contributions found..."}
          icon={<GitPullRequestArrow className="size-5" />}
          className="text-muted-foreground"
        />
      )}
    </motion.div>
  );
}
