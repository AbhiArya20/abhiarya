import { getGithubPullRequest } from "@/actions/get-github-pull-request";
import { useQuery } from "@tanstack/react-query";

export default function useGithubPullRequest() {
  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: ["github-pull-request"],
    queryFn: getGithubPullRequest,
  });

  return { isPending, error, data };
}
