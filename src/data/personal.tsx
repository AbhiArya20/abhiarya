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
  address: Address;
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
  emails: ["career.abhiarya@gmail.com", "github.abhiarya@gmail.com", "self.abhiarya@gmail.com"],
  bio: `Software engineer passionate about building high-quality products and contributing to open-source.`,
  summary: `I&apos;m a software engineer experienced in building backend systems with tools like TypeScript, React, Node, Redis and Docker. Currently, I&apos;m building Currunt an open-source unified AI suite. When I&apos;m not writing code, you&apos;ll find me writing articles about my learnings.`,
  address: {
    state: "New Delhi",
    country: "India",
    url: "https://www.google.com/maps/place/new-delhi",
  },
};
