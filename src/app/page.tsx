import ActivityCalendarComponent from "@/components/sections/activity-calendar";
import Contact from "@/components/sections/contact/contact";
import OpenSource from "@/components/sections/open-source";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Headers from "@/components/sections/header";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* <div className="from-accent to-background text-muted-foreground flex aspect-video flex-col items-center justify-center gap-1 rounded-3xl bg-linear-to-t via-25%">
        <h1 className="text-5xl font-bold">Abhishek Kumar</h1>
        <p className="text-xl font-medium">Software Developer</p>
      </div> */}
      <Headers />
      <About />
      <Experience />
      <Projects />
      <Education />
      <ActivityCalendarComponent />
      <OpenSource />
      <Contact />
    </div>
  );
}
