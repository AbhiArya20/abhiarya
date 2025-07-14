import ActivityCalendarComponentV1 from "@/components/home/activity-calendar/activity-calendar-v1";
import { getGithubActivity } from "@/actions/get-github-activity";

export default async function ActivityCalendarComponent() {
  const activities = await getGithubActivity();

  return <ActivityCalendarComponentV1 activities={activities} />;
}
