import { Fragment, type JSX } from "react";
import Badges from "@/components/badges/badges";
import type { Icons } from "@/components/icons";

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
  githubAvatar: string; // High priority over avatar
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

export type Tag = {
  name: string;
  icon?: Icons;
  url?: string;
};

const tags: Tag[] = [
  {
    name: "TypeScript",
    icon: "typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: "react",
    url: "https://reactjs.org/",
  },
  {
    name: "Node",
    icon: "node",
    url: "https://nodejs.org/en",
  },
  {
    name: "Redis",
    icon: "redis",
    url: "https://bun.sh",
  },
  {
    name: "Docker",
    icon: "docker",
    url: "https://bun.sh",
  },
];

const currentProject: Tag = {
  name: "Currunt",
  icon: "currunt",
  url: "https://currunt.abhiarya.in",
};

const learnings: Tag = {
  name: "learnings",
  icon: "typescript",
  url: "https://learnings.abhiarya.in",
};

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
      I&apos;m a software engineer experienced in building backend systems with
      tools like{" "}
      <span className="space-y-1.5 space-x-1.5 whitespace-pre-line">
        {tags.map((tag, index) => (
          <Fragment key={tag.name}>
            <Badges {...tag} className="text-muted-foreground" />
            {index === tags.length - 2 && <span>and</span>}
          </Fragment>
        ))}{" "}
      </span>{" "}
      and actively contributing to open-source projects. Currently, I&apos;m
      building{" "}
      <span className="space-y-1.5 space-x-1.5 whitespace-pre-line">
        <Badges {...currentProject} className="text-muted-foreground" />
      </span>{" "}
      a unified AI suite. When I&apos;m not writing code, you&apos;ll find me
      writing articles about my{" "}
      <Badges {...learnings} className="text-muted-foreground" />
    </>
  ),
  address: {
    state: "New Delhi",
    country: "India",
    url: "https://www.google.com/maps/place/new-delhi",
  },
};
