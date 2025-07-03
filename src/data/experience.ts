import { Icons } from "@/components/icons";
import { Tag } from "@/data/open-source";

type OnlyIcon = { icon: keyof typeof Icons; image?: never };
type OnlyImage = { image: string; icon?: never };

type BaseExperience = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  url: string;
  github?: string;
  featured?: boolean;
  jobDescription?: string[];
  tags?: Tag[];
};

export type Experience = BaseExperience & (OnlyIcon | OnlyImage);

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Mithila Stack",
    position: "SDE",
    location: "New Delhi, India",
    startDate: "2023",
    endDate: "Present",
    url: "https://abhiarya.in",
    github: "https://github.com/AbhiArya20",
    image: "/abhi-arya.webp",
    featured: true,
    jobDescription: ["Build and maintain the backend of the website", "Design and develop the frontend"],
    tags: [{ name: "Remix", icon: "react", url: "https://remix.run" }],
  },
  {
    company: "Mithila Stack -1",
    position: "SDE",
    location: "New Delhi, India",
    startDate: "2023",
    endDate: "Present",
    url: "https://abhiarya.in",
    github: "https://github.com/AbhiArya20",
    image: "/abhi-arya.webp",
    featured: true,
    jobDescription: ["Build and maintain the backend of the website", "Design and develop the frontend"],
    tags: [{ name: "Remix", icon: "react", url: "https://remix.run" }],
  },
];
