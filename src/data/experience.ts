import { Icons } from "@/components/icons";
import { Tag } from "@/data/open-source";

export type Experience = {
  company: string;
  shortName?: string;
  position: string;
  shortPosition?: string;
  location: string;
  startDate: string;
  endDate?: string;
  url: string;
  github?: string;
  image?: string;
  jobDescription: string[];
  tags?: Tag[];
  icon?: keyof typeof Icons;
  type: "full-time" | "part-time" | "freelance" | "internship";
  featured?: boolean;
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Mithila Stack",
    shortName: "Mithilastack",
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
    type: "full-time",
  },
  {
    company: "Aaensa Tech",
    position: "Software Development Engineer",
    shortPosition: "SDE",
    location: "Gurugram",
    startDate: "Jun 2023",
    endDate: "Sep 2023",
    url: "https://aaensa.com",
    image: "/aaensa.webp",
    featured: true,
    jobDescription: [],
    type: "internship",
  },
];
