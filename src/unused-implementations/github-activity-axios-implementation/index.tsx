import ActivityCalendarComponentV1 from "@/unused-implementations/github-activity-axios-implementation/activity-calendar-v1";
import FadeDown from "@/components/animation/fade-down";

export default async function ActivityCalendarComponent() {
  return (
    <FadeDown>
      <div className="border-border rounded-lg border p-4 shadow-sm">
        <ActivityCalendarComponentV1 />
      </div>
    </FadeDown>
  );
}
