import { Icons } from "@/components/icons";

type OnlyPercentage = { percentage: number; CGPA?: never };
type OnlyCGPA = { CGPA: number; percentage?: never };

type OnlyIcon = { icon: keyof typeof Icons; image?: never };
type OnlyImage = { image: string; icon?: never };

type BaseEducation = {
  college: string;
  stream: string;
  degree: string;
  university: string;
  location: string;
  locationUrl: string;
  startDate: string;
  endDate?: string;
  url: string;
};

export type Education = BaseEducation & (OnlyPercentage | OnlyCGPA) & (OnlyIcon | OnlyImage);

export const EDUCATION_DATA: Education[] = [
  {
    college: "Mithila Stack",
    stream: "Computer Science",
    degree: "Bachelor of Technology",
    university: "University of Delhi",
    location: "New Delhi, India",
    locationUrl: "https://www.udel.edu.in",
    startDate: "2023",
    endDate: "Present",
    url: "https://abhiarya.in",
    image: "/abhi-arya.webp",
    CGPA: 100,
  },
];
