import ActivityCalendarComponentV1 from "@/components/sections/activity-calendar/activity-calendar-v1";
import { getGithubActivity } from "@/actions/get-github-activity";
import FadeDown from "@/components/animation/fade-down";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

// TODO: Figure out why above solution does not works
// By the way - this solution works but it has issue of flashing and flickering

export default async function ActivityCalendarComponent() {
  const activities = getGithubActivity();

  return (
    <FadeDown>
      <div className="border-border rounded-lg border p-4 shadow-sm">
        <Suspense fallback={<ActivityCalendarLoading />}>
          <ActivityCalendarComponentV1 activities={activities} />
        </Suspense>
      </div>
    </FadeDown>
  );
}

function ActivityCalendarLoading() {
  return (
    <div className="border-border rounded-lg border p-4 shadow-sm">
      <div className="text-muted-foreground flex items-center justify-center gap-4 py-16">
        <Loader2 className="size-5 animate-spin" /> <span>Loading Github contributions...</span>
      </div>
    </div>
  );
}
