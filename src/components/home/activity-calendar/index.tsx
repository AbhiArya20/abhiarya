import ActivityCalendarComponent from "@/components/home/activity-calendar/activity-calendar";
import { getGithubActivity } from "@/actions/get-github-activity";

export default async function ActivityCalendar() {
  const activities = await getGithubActivity();

  return <ActivityCalendarComponent activities={activities} />;
}
