"use client";

import ActivityCalendarLoading from "@/components/sections/activity-calendar/activity-calendar-loading";
import { ActivityCalendar, type Activity } from "react-activity-calendar";
import { GitPullRequestArrow, WifiOff } from "lucide-react";
import { use, useEffect, useRef, useState } from "react";
import { ActionsReturn } from "@/types";
import { useTheme } from "next-themes";

export default function ActivityCalendarComponentV1({
  activities,
}: {
  activities: Promise<ActionsReturn<Activity[]>>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const { data, error } = use(activities);

  useEffect(() => {
    const container = containerRef.current;
    if (!mounted) {
      setMounted(true);
    }
    if (!container) return;
    container.children[0].scrollBy({ left: container.children[0].scrollWidth, behavior: "smooth" });
  }, [data, mounted]);

  const { resolvedTheme } = useTheme();

  if (!mounted) return <ActivityCalendarLoading />;

  return (
    <>
      {error && (
        <div className="border-border rounded-lg border p-4 shadow-sm">
          <div className="text-destructive flex h-full items-center justify-center gap-4 py-16">
            <WifiOff className="size-5" /> <span>{error.message}</span>
          </div>
        </div>
      )}

      {data && data.length > 0 ? (
        <>
          <div className="block overflow-hidden">
            <ActivityCalendar
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
      ) : (
        <div className="border-border rounded-lg border p-4 shadow-sm">
          <div className="text-muted-foreground flex items-center justify-center gap-4 py-16">
            <GitPullRequestArrow className="size-5" /> <span>No contributions found...</span>
          </div>
        </div>
      )}
    </>
  );
}
