import ActivityCalendarLoading from "@/components/sections/activity-calendar/activity-calendar-loading";
import ActivityCalendarComponentV1 from "@/components/sections/activity-calendar/activity-calendar-v1";
import { getGithubActivity } from "@/actions/get-github-activity";
import FadeDown from "@/components/animation/fade-down";
import { Suspense } from "react";

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
