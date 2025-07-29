import OpenSourceSection from "@/components/home/home-page-v1/open-source/open-source";
import { getGithubPullRequest } from "@/actions/get-github-pull-request";

export default async function OpenSource() {
  const pullRequest = await getGithubPullRequest();
  return <OpenSourceSection pullRequest={pullRequest} />;
}
