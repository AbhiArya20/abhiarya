import ActivityCalendarV1 from "@/components/activity-calendar/activity-calendar-v1";
import OpenSource from "@/components/home/home-page-v1/open-source";
import Experience from "@/components/home/home-page-v1/experience";
import { getGithubActivity } from "@/actions/get-github-activity";
// import Learnings from "@/components/sections/learnings";
// import Education from "@/components/sections/education";
import Projects from "@/components/home/home-page-v1/projects";
import FadeDown from "@/components/animation/fade-down";
import ContactV1 from "@/components/contact/contact-v1";
import HeaderV1 from "@/components/header/header-v1";
import FooterV1 from "@/components/footer/footer-v1";
import AboutV3 from "@/components/about/about-v3";

export default async function HomePageV1() {
  const activities = await getGithubActivity();

  return (
    <FadeDown>
      <div className="flex flex-col gap-8">
        <HeaderV1 />
        <AboutV3 />
        <Experience />
        <Projects />
        <OpenSource />
        <ActivityCalendarV1 activities={activities} />
        {/* <Learnings />
        <Education /> */}
        <ContactV1 />
        <FooterV1 />
      </div>
    </FadeDown>
  );
}
