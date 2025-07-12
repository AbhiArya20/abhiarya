import BadgeV1 from "@/components/badges/badge-v1";
import { Tag } from "./open-source";
import { JSX } from "react";

export type Address = {
  state: string;
  country: string;
  url: string;
};

export type Personal = {
  name: string;
  nickname: string;
  avatar: string;
  altAvatar: string;
  githubAvatar: string;
  title: string;
  address: Address;
  emails: string[];
  phones: string[];
  github: string;
  twitter: string;
  portfolio: string;
  olderPortfolio: string;
  description: string;
  descriptionRaw: string;
  descriptionHtml: JSX.Element;
};

const tags: Tag[] = [
  {
    name: "React",
    icon: "react",
    url: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: "react",
    url: "https://nextjs.org/",
  },
  {
    name: "Flutter",
    icon: "react",
    url: "https://flutter.dev/",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    url: "https://www.typescriptlang.org/",
  },
];

export const PERSONAL_DATA: Personal = {
  name: "Abhishek Kumar",
  nickname: "Abhi Arya",
  avatar: "/avatar.webp",
  altAvatar: "/abhi-arya.webp",
  githubAvatar: "https://avatars.githubusercontent.com/u/188953429?v=4",
  title: "Software Engineer",
  address: {
    state: "New Delhi",
    country: "India",
    url: "https://www.google.com/maps/place/new-delhi",
  },
  emails: ["career.abhiarya@gmail.com", "github.abhiarya@gmail.com", "self.abhiarya@gmail.com", ""],
  phones: ["+919546458806", "+919162388695"],
  portfolio: "https://abhiarya.in",
  olderPortfolio: "https://v1.abhiarya.in",
  github: "AbhiArya20",
  twitter: "AbhiArya200",
  description: `Full Stack Developer with a passion for building high-quality products.`,
  descriptionRaw: `Software Developer with over 1 year of experience in building web applications using React, Next.js, Node.js, TypeScript, and Flutter. Passionate about contributing to open-source software, working on personal projects, and continuous learning.`,
  descriptionHtml: (
    <>
      Software Developer with over 1 year of experience in building web applications using{" "}
      <span className="space-y-1.5 space-x-1.5 whitespace-pre-line">
        {tags.map(tag => {
          return <BadgeV1 {...tag} key={tag.name} className="text-muted-foreground"></BadgeV1>;
        })}
      </span>{" "}
      and contributing to the community.
    </>
  ),
};
