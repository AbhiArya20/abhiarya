import { getGithubActivity } from "@/actions/get-github-activity";
import { getGithubPullRequest } from "@/actions/get-github-pull-request";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Header from "@/components/header/header";
import OpenSource from "@/components/open-source/open-source";

export default async function Home() {
  const activities = await getGithubActivity();
  const pullRequest = await getGithubPullRequest();

  return (
    <div className="flex flex-col gap-8">
      <Header />
      <About />
      <Experience />
      <OpenSource pullRequest={pullRequest} activities={activities} />
    </div>
  );
}
