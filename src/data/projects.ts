import { Icons } from "@/components/icons";
import { Tag } from "@/types";

export type Project = {
  name: string;
  description: string[];
  url: string;
  tags: Tag[];
  github?: string;
  featured?: boolean;
  icon?: keyof typeof Icons;
  image?: string;
  preview?: string;
  screenshot: string;
};

export const PROJECT_DATA: Project[] = [
  {
    name: "Currunt",
    icon: "currunt",
    screenshot: "/abhi-arya.webp",
    description: ["A modern CDE for everything you need to run your app. You can run any app on Coderoom."],
    url: "https://currunt.abhiarya.in",
    github: "https://github.com/AbhiArya20/currunt",
    featured: true,
    tags: [
      { name: "Next", icon: "next", url: "https://next.js" },
      { name: "Better Auth", icon: "better-auth", url: "https://www.better-auth.com" },
      { name: "Tailwind", icon: "tailwindcss", url: "https://tailwindcss.com" },
      { name: "Drizzle", icon: "drizzle", url: "https://drizzle.org" },
      { name: "Postgres", icon: "postgres", url: "https://www.postgresql.org" },
      { name: "Redis", icon: "redis", url: "https://redis.io" },
      { name: "AI SDK", icon: "vercel", url: "https://ai-sdk.dev" },
    ],
  },
  {
    name: "Portfolio",
    image: "/abhi-arya.webp",
    preview: "/abhi-arya.webp",
    screenshot: "/abhi-arya.webp",
    description: ["A modern CDE for everything you need to run your app."],
    url: "https://coderoom.abhiarya.in/",
    github: "https://github.com/AbhiArya20/coderoom",
    featured: true,
    tags: [
      { name: "Next", icon: "next", url: "https://remix.run" },
      { name: "Tailwind", icon: "tailwindcss", url: "https://tailwindcss.com" },
    ],
  },
];
