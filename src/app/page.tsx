import ActivityCalendar from "@/components/home/activity-calendar";
import FadeDown from "@/components/animation/fade-down";
import OpenSource from "@/components/home/open-source";
import Experience from "@/components/home/experience";
import Footer from "@/components/home/footer/footer";
import Contact from "@/components/contact/contact";
// import Learnings from "@/components/sections/learnings";
// import Education from "@/components/sections/education";
import Projects from "@/components/home/projects";
import Headers from "@/components/home/header";
import About from "@/components/home/about";

export default function Home() {
  return (
    <FadeDown>
      <div className="flex flex-col gap-8">
        <Headers />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <ActivityCalendar />
        {/* <Learnings />
        <Education /> */}
        <Contact />
        <Footer />
      </div>
    </FadeDown>
  );
}
