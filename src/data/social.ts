import type { Icons } from "@/components/icons";

export type Social = {
  name: string;
  url: string;
  username: string;
  icon: Icons;
  withText: boolean;
};

export const SOCIAL_DATA: Social[] = [
  {
    name: "career.abhiarya@gmail.com",
    url: "mailto:career.abhiarya@gmail.com",
    username: "career.abhiarya@gmail.com",
    icon: "email",
    withText: false,
  },
  {
    name: "Phone",
    url: "tel:+919546458806",
    username: "+919546458806",
    icon: "phone",
    withText: false,
  },
  {
    name: "GitHub",
    url: "https://github.com/AbhiArya20",
    username: "AbhiArya20",
    icon: "github",
    withText: false,
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/AbhiArya20",
    username: "AbhiArya20",
    icon: "leetcode",
    withText: false,
  },
  {
    name: "X",
    url: "https://x.com/AbhiArya200",
    username: "AbhiArya200",
    icon: "x",
    withText: false,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/abhiarya20",
    username: "abhiarya20",
    icon: "linkedin",
    withText: false,
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1kyc47uffptmaDb_305eemX14j8ophm5M/view?usp=sharing",
    username: "abhiarya",
    icon: "resume",
    withText: true,
  },
];
