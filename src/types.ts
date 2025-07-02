export type Node = {
  id: string;
  title: string;
  url: string;
  createdAt: string;
  state: string;
  deletions: number;
  additions: number;
  commits: {
    totalCount: number;
  };
  changedFiles: number;
  closedAt: string;
  mergedAt: string;
  author: {
    login: string;
    avatarUrl: string;
    url: string;
  };
  repository: {
    nameWithOwner: string;
    url: string;
    homepageUrl: string;
    isPrivate: boolean;
    isInOrganization: boolean;
  };
};

export type Edges = {
  node: Node;
};
