"use server";

import { ActionsReturn, Edges, PullRequest } from "@/types";
import { PERSONAL_DATA } from "@/data/personal";

const query = `
query {
  search(query: "is:pr author:${PERSONAL_DATA.github} archived:false is:merged ", type: ISSUE, first: 10) {
    edges {
      node {
        ... on PullRequest {
          id
          title
          url
          createdAt
          state
          deletions
          additions
          commits {
            totalCount
          }
          changedFiles
          closedAt
          mergedAt
          author {
            login
            avatarUrl
            url
          }
          repository {
            nameWithOwner
            url
            homepageUrl
            isPrivate
            isInOrganization
          }
        }
      }
    }
  }
}
`;

export async function getGithubPullRequest(): Promise<ActionsReturn<PullRequest[]>> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) {
    return { error: { message: "Unable to fetch GitHub pull requests." } };
  }

  const { data } = await res.json();

  if (!data?.search?.edges) {
    return {
      error: {
        message: "GitHub response is missing expected data.",
      },
    };
  }

  const pullRequest: PullRequest[] = data.search.edges.map((edge: Edges) => edge.node);

  return { data: pullRequest };
}
