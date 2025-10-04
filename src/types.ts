import { Icons } from "@/components/icons";

export type Tag = {
  name: string;
  icon?: keyof typeof Icons;
  url?: string;
};
