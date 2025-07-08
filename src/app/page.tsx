import ActivityCalendarComponent from "@/components/sections/activity-calendar";
import Contact from "@/components/sections/contact/contact";
import OpenSource from "@/components/sections/open-source";
import Experience from "@/components/sections/experience";
// import Footer from "@/components/sections/footer/footer";
// import Learnings from "@/components/sections/learnings";
// import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Headers from "@/components/sections/header";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Headers />
      <About />
      <Experience />
      <ActivityCalendarComponent />
      <Projects />
      <OpenSource />
      <Contact />
      {/* 
      <Education />
      <Footer />
      <Learnings /> 
      */}
    </div>
  );
}
