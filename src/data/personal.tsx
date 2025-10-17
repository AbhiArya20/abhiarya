import { Fragment, type JSX } from "react";
import Badges from "@/components/badges/badges";
import type { Tag } from "@/types";

export type Address = {
  state: string;
  country: string;
  url: string;
};

export type Personal = {
  name: string;
  nickname: string;
  avatar: string;
  alternateAvatar: string;
  githubAvatar: string;
  title: string;
  portfolio: string;
  github: string;
  twitter: string;
  linkedin: string;
  phones: string[];
  emails: string[];
  bio: string;
  summary: string;
  about: JSX.Element;
  address: Address;
};

const tags: Tag[] = [
  {
    name: "TypeScript",
    icon: "typescript",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Node",
    icon: "node",
    url: "https://nodejs.org/en",
  },
  {
    name: "Postgres",
    icon: "postgres",
    url: "https://www.postgresql.org",
  },
  {
    name: "Redis",
    icon: "redis",
    url: "https://redis.io",
  },
  {
    name: "Docker",
    icon: "docker",
    url: "https://www.docker.com",
  },
  {
    name: "Kafka",
    icon: "docker",
    url: "https://kafka.apache.org",
  },
  {
    name: "AWS",
    icon: "aws",
    url: "https://aws.amazon.com",
  },
];

const currentProjects: Tag[] = [
  {
    name: "Currunt",
    icon: "currunt",
    url: "https://currunt.in",
  },
];

const learnings: Tag[] = [
  {
    name: "learnings",
    icon: "typescript",
    url: "https://learnings.abhiarya.in",
  },
];

export const PERSONAL_DATA: Personal = {
  name: "Abhishek Kumar",
  nickname: "Abhi Arya",
  avatar: "/avatar.webp",
  alternateAvatar: "/abhi-arya.webp",
  githubAvatar: "https://avatars.githubusercontent.com/u/188953429?v=4",
  title: "Software Engineer",
  portfolio: "https://abhiarya.in",
  github: "AbhiArya20",
  twitter: "AbhiArya200",
  linkedin: "abhiarya20",
  phones: ["+919546458806", "+919162388695"],
  emails: [
    "career.abhiarya@gmail.com",
    "github.abhiarya@gmail.com",
    "self.abhiarya@gmail.com",
  ],
  bio: `Software engineer passionate about building high-quality products and contributing to open-source.`,
  summary: `Software engineer experienced in building scalable backend systems using TypeScript, Node, Redis, Kafka, Docker, AWS, and more. Currently building Currunt, while also contributing to open-source projects. When I'm not coding, I enjoy writing articles to share what I learn.`,
  about: (
    <>
      I&apos;m a software engineer experienced in building scalable backend
      systems using <TagList tags={tags} /> and more. Currently, I&apos;m
      building <TagList tags={currentProjects} /> while contributing to
      open-source projects. When I&apos;m not writing code, you&apos;ll find me
      writing articles about my <TagList tags={learnings} />
    </>
  ),
  address: {
    state: "New Delhi",
    country: "India",
    url: "https://www.google.com/maps/place/new-delhi",
  },
};

function TagList({
  tags,
  showAndBeforeLast = false,
}: {
  tags: Tag[];
  showAndBeforeLast?: boolean;
}) {
  return (
    <span className="space-y-1.5 space-x-1.5 whitespace-pre-line">
      {tags.map((tag, index) => (
        <Fragment key={tag.name}>
          <Badges {...tag} className="text-muted-foreground" />
          {showAndBeforeLast && index === tags.length - 2 && <span>and</span>}
        </Fragment>
      ))}
    </span>
  );
}
