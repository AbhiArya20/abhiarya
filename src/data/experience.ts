import { Icons } from "@/components/icons";
import { Tag } from "@/types";

export type Experience = {
  company: string;
  position: string;
  shortPosition?: string;
  location: string;
  startDate: string;
  endDate?: string;
  url: string;
  github?: string;
  image?: string;
  icon?: keyof typeof Icons;
  tags?: Tag[];
  jobDescription: string[];
  featured?: boolean;
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Mithila Stack",
    position: "Software Development Engineer",
    shortPosition: "SDE",
    location: "Remote",
    startDate: "Oct 2023",
    endDate: "Sep 2024",
    url: "https://mithilastack.com",
    github: "https://github.com/mithilastack",
    image: "/mithilastack.webp",
    featured: true,
    jobDescription: [],
  },
  {
    company: "Aaensa Tech",
    position: "Software Development Engineer Intern",
    shortPosition: "SDE Intern",
    location: "Gurugram",
    startDate: "Jun 2023",
    endDate: "Sep 2023",
    url: "https://aaensa.com",
    image: "/aaensa.webp",
    featured: true,
    jobDescription: [],
  },
];
