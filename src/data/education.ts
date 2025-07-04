import { Icons } from "@/components/icons";

export type Education = {
  college: string;
  stream: string;
  degree: string;
  university: string;
  location: string;
  locationUrl: string;
  startDate: string;
  endDate?: string;
  url: string;
  percentage?: number;
  CGPA?: number;
  icon?: keyof typeof Icons;
  image?: string;
};

export const EDUCATION_DATA: Education[] = [
  {
    college: "Darbhanga College of Engineering",
    stream: "Computer Science Engineering",
    degree: "B.Tech",
    university: "BEU",
    location: "Darbhanga, India",
    locationUrl: "https://www.udel.edu.in",
    startDate: "2023",
    endDate: "Present",
    url: "https://abhiarya.in",
    image: "/abhi-arya.webp",
    CGPA: 100,
  },
];
