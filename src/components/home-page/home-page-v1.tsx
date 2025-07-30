import ActivityCalendarV2 from "@/components/activity-calendar/activity-calendar-v2";
import ProjectsV1 from "@/components/projects/projects-list/projects-list-v1";
import { getGithubPullRequest } from "@/actions/get-github-pull-request";
import OpenSourceV1 from "@/components/open-source/open-source-v1";
import { getGithubActivity } from "@/actions/get-github-activity";
import ExperienceV1 from "@/components/experience/experience-v1";
import LearningsV1 from "@/components/learnings/learnings-v1";
import EducationV1 from "@/components/education/education-v1";
import ContactV1 from "@/components/contact/contact-v1";
import HeaderV1 from "@/components/header/header-v1";
import FooterV1 from "@/components/footer/footer-v1";
import AboutV3 from "@/components/about/about-v3";

export default async function HomePageV1() {
  const activities = await getGithubActivity();
  const pullRequest = await getGithubPullRequest();

  return (
    <div className="flex flex-col gap-8">
      <HeaderV1 />
      <AboutV3 />
      <ExperienceV1 />
      <ProjectsV1 />
      <OpenSourceV1 pullRequest={pullRequest} />
      <ActivityCalendarV2 activities={activities} />
      <LearningsV1 />
      <EducationV1 />
      <ContactV1 />
      <FooterV1 />
    </div>
  );
}
