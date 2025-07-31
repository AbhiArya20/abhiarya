import { getGithubPullRequest } from "@/actions/get-github-pull-request";
import { getGithubActivity } from "@/actions/get-github-activity";
import OpenSource from "@/components/open-source/open-source";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/projects-list";
import Learnings from "@/components/learnings/learnings";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";

export default async function HomePage() {
  const activities = await getGithubActivity();
  const pullRequest = await getGithubPullRequest();

  return (
    <div className="flex flex-col gap-8">
      <Header />
      <About />
      <Experience />
      <Projects />
      <OpenSource pullRequest={pullRequest} activities={activities} />
      <Learnings />
      <Contact />
      <Footer />
    </div>
  );
}
