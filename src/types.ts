export type ContributionDays = {
  color: string;
  contributionCount: number;
  date: string;
};

export type Week = {
  contributionDays: ContributionDays[];
};

export type PullRequest = {
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
  node: PullRequest;
};

export type ActionsReturn<T> = {
  error?: {
    message: string;
  };
  data?: T;
};
