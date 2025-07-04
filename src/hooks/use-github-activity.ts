import { getGithubActivity } from "@/actions/get-github-activity";
import { useQuery } from "@tanstack/react-query";

export default function useGithubActivity() {
  const { isPending, error, data } = useQuery({
    queryKey: ["github-activity"],
    queryFn: getGithubActivity,
  });

  return { isPending, error, data };
}
