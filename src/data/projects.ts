import { Icons } from "@/components/icons";
import { Tag } from "@/data";

type OnlyIcon = { icon: keyof typeof Icons; image?: never };
type OnlyImage = { image: string; icon?: never };

type BaseProject = {
  name: string;
  description: string[];
  url: string;
  tags: Tag[];
  github?: string;
  featured?: boolean;
};

export type Project = BaseProject & (OnlyIcon | OnlyImage);

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
