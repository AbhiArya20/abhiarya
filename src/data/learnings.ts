import { Icons } from "@/components/icons";
export type LEARNINGS = {
  title: string;
  description: string;
  date: string;
  url: string;
  image?: string;
  icon?: keyof typeof Icons;
};

export const LEARNINGS_DATA: LEARNINGS[] = [
  {
    title: "What is Operating System?",
    description: "An operating system is a software that manages computer hardware and software.",
    date: "Oct 2023",
    url: "https://mithilastack.com",
    image: "/mithilastack.webp",
  },
  {
    title: "What is Computer Network?",
    description: "A computer network is a collection of computers that are linked together.",
    date: "Oct 2023",
    url: "https://mithilastack.com",
    image: "/mithilastack.webp",
  },
];
