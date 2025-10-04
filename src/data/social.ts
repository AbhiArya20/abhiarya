import { Icons } from "@/components/icons";

export type Social = {
  name: string;
  url: string;
  icon: keyof typeof Icons;
  username?: string;
  withText?: boolean;
};

export const SOCIAL_DATA: Social[] = [
  {
    name: "career.abhiarya@gmail.com",
    url: "mailto:career.abhiarya@gmail.com",
    icon: "email",
  },
  {
    name: "Phone",
    url: "tel:+919546458806",
    icon: "phone",
  },
  {
    name: "GitHub",
    url: "https://github.com/AbhiArya20",
    username: "AbhiArya20",
    icon: "github",
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/AbhiArya20",
    username: "AbhiArya20",
    icon: "leetcode",
  },
  {
    name: "X",
    url: "https://x.com/AbhiArya200",
    username: "AbhiArya200",
    icon: "x",
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1kyc47uffptmaDb_305eemX14j8ophm5M/view?usp=sharing",
    icon: "resume",
    withText: true,
  },
];
