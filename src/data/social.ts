import { Icons } from "@/components/icons";

export type Social = {
  name: string;
  url: string;
  username: string;
  icon: keyof typeof Icons;
  withText?: boolean;
};

export const SOCIAL_DATA: Social[] = [
  {
    name: "career.abhiarya@gmail.com",
    url: "mailto:career.abhiarya@gmail.com",
    username: "career.abhiarya@gmail.com",
    icon: "email",
  },
  {
    name: "Phone",
    url: "tel:+919546458806",
    username: "+919546458806",
    icon: "phone",
  },
  {
    name: "GitHub",
    url: "https://github.com/AbhiArya20",
    username: "AbhiArya20",
    icon: "github",
  },
  {
    name: "X",
    url: "https://x.com/AbhiArya200",
    username: "AbhiArya200",
    icon: "x",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/AbhiArya20",
    username: "AbhiArya20",
    icon: "linkedin",
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1kyc47uffptmaDb_305eemX14j8ophm5M/view?usp=sharing",
    username: "abhiarya",
    icon: "resume",
    withText: true,
  },
];
