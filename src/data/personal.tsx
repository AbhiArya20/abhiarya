import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
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
  githubAvatar?: string;
  title: string;
  address: Address;
  github?: string;
  portfolio: string;
  description: string;
  descriptionRaw: string;
  descriptionHtml: JSX.Element;
};

export const PERSONAL_DATA: Personal = {
  name: "Abhishek Kumar",
  nickname: "Abhi Arya",
  avatar: "/avatar.webp",
  githubAvatar: "https://avatars.githubusercontent.com/u/188953429?v=4",
  title: "Software Engineer",
  address: {
    state: "New Delhi",
    country: "India",
    url: "https://www.google.com/maps/place/new-delhi",
  },
  portfolio: "https://abhiarya.in",
  github: "AbhiArya20",
  description: `Full Stack Developer with a passion for building high-quality products.`,
  descriptionRaw: `Hi, I'm Abhishek Kumar from New Delhi, India. I work as a part-time Full-stack Developer at Mithila Stack. I love building websites with good UI/UX, and I'm also passionate about new technologies, open-source software, and contributing to the community.`,
  descriptionHtml: (
    <>
      Hi, I&apos;m Abhishek Kumar from India. I work as a part-time Full-stack Developer at{" "}
      <a
        href="https://hi-interns.com/"
        target="_blank"
        className="text-foreground decoration-muted-foreground font-medium whitespace-nowrap underline underline-offset-2"
      >
        Hi Interns
        {/* <Icons.arrowUpRight className="inline-block size-4" /> */}
      </a>
      . I love building websites with good UI/UX, and I&apos;m also passionate about new technologies, open-source
      software,{" "}
      <li>
        <Badge variant={"outline"} className="bg-accent/50 rounded-sm">
          <Icons.react className="mr-1.5 h-3 w-3 transition-all" />
          React
        </Badge>
      </li>{" "}
      and contributing to the community.
    </>
  ),
};
