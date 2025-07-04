import { Icons } from "@/components/icons";
import { Tag } from "@/data/open-source";

export type Project = {
  name: string;
  description: string[];
  url: string;
  tags: Tag[];
  github?: string;
  featured?: boolean;
  icon?: keyof typeof Icons;
  image?: string;
};

export const PROJECT_DATA: Project[] = [
  {
    name: "Coderoom",
    image: "/abhi-arya.webp",
    description: ["A modern CDE."],
    url: "https://coderoom.abhiarya.in/",
    github: "https://github.com/AbhiArya20/coderoom",
    featured: true,
    tags: [{ name: "Remix", icon: "react", url: "https://remix.run" }],
  },
];
