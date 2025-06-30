// import { getGithubActivity } from "@/actions/get-github-activity";
import { Activity } from "react-activity-calendar";
import { useQuery } from "@tanstack/react-query";
async function testing() {
  return new Promise<Activity[]>(resolve => {
    setTimeout(() => {
      resolve([
        {
          date: "2024-06-23",
          count: 24,
          level: 1,
        },
        {
          date: "2024-08-02",
          count: 16,
          level: 4,
        },
        {
          date: "2025-06-29",
          count: 11,
          level: 3,
        },
        {
          date: "2025-06-29",
          count: 11,
          level: 3,
        },
        {
          date: "2025-06-30",
          count: 11,
          level: 3,
        },
        {
          date: "2025-07-02",
          count: 11,
          level: 3,
        },
        {
          date: "2025-07-04",
          count: 1100,
          level: 3,
        },
      ]);
    }, 5000);
  });
}

export default function useGithubActivity() {
  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: ["github-activity"],
    queryFn: testing,
  });

  return { isPending, error, data };
}
