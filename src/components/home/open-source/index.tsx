import OpenSourceSection from "@/components/home/open-source/open-source";
import { getGithubPullRequest } from "@/actions/get-github-pull-request";

export default async function OpenSource() {
  const pullRequest = await getGithubPullRequest();
  return <OpenSourceSection pullRequest={pullRequest} />;
}
