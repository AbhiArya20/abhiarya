"use client";

import { GitPullRequestArrow, Loader2, WifiOff } from "lucide-react";
import useGithubActivity from "@/hooks/use-github-activity";
import { ActivityCalendar } from "react-activity-calendar";
import FadeDown from "@/components/animation/fade-down";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function ActivityCalendarComponent() {
  // TODO: remove this to make this server component
  const { isPending, error, data } = useGithubActivity();

  const { resolvedTheme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.children[0].scrollBy({ left: container.scrollWidth });
  }, [data]);

  return (
    <FadeDown>
      <div className="border-border rounded-lg border p-4 shadow-sm">
        {isPending && (
          <div className="text-muted-foreground flex items-center justify-center gap-4 py-20">
            <Loader2 className="size-5 animate-spin" /> <span>Loading Github contributions...</span>
          </div>
        )}

        {!isPending && error && (
          <div className="text-destructive flex h-full items-center justify-center gap-4 py-20">
            <WifiOff className="size-5" /> <span>Something went wrong...</span>
          </div>
        )}

        {!isPending && !error && data && data.length === 0 && (
          <div className="text-muted-foreground flex items-center justify-center gap-4 py-20">
            <GitPullRequestArrow className="size-5" /> <span>No contributions found...</span>
          </div>
        )}

        {!isPending && !error && data && data.length > 0 && (
          <>
            <div className="block overflow-hidden">
              <ActivityCalendar
                hideMonthLabels
                fontSize={12}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
                colorScheme={resolvedTheme as "light" | "dark" | undefined}
                theme={{
                  light: ["#eff2f5", "#aceebb", "#4ac26b", "#2da44e", "#116329"],
                  dark: ["#151b23", "#033a16", "#196c2e", "#2ea043", "#56d364"],
                }}
                data={data}
                ref={containerRef}
              />
            </div>
            <div className="mt-2 text-center">
              <p className="text-muted-foreground text-xs">← Scroll to view older contributions</p>
            </div>
          </>
        )}
      </div>
    </FadeDown>
  );
}
