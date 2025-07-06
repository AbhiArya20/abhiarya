"use server";

import { PERSONAL_DATA } from "@/data/personal";
import { Edges } from "@/types";
import axios from "axios";

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

export async function getGithubPullRequest() {
  try {
    const { data } = await axios.post(
      "https://api.github.com/graphql",
      {
        query: query,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    const pullRequest = data.data.search.edges.map((edge: Edges) => ({
      id: edge.node.id,
      title: edge.node.title,
      url: edge.node.url,
      createdAt: edge.node.createdAt,
      state: edge.node.state,
      deletions: edge.node.deletions,
      additions: edge.node.additions,
      commits: {
        totalCount: edge.node.commits.totalCount,
      },
      changedFiles: edge.node.changedFiles,
      closedAt: edge.node.closedAt,
      mergedAt: edge.node.mergedAt,
      author: {
        login: edge.node.author.login,
        avatarUrl: edge.node.author.avatarUrl,
        url: edge.node.author.url,
      },
      repository: {
        nameWithOwner: edge.node.repository.nameWithOwner,
        url: edge.node.repository.url,
        homepageUrl: edge.node.repository.homepageUrl,
        isPrivate: edge.node.repository.isPrivate,
        isInOrganization: edge.node.repository.isInOrganization,
      },
    }));

    return pullRequest;
  } catch (error) {
    console.error("Error fetching pull request:", error);
    throw new Error("Error fetching pull request");
  }
}
