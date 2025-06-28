import { Icons } from "@/components/icons";

export type Social = {
	name: string;
	url: string;
	icon: keyof typeof Icons;
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
		icon: "github",
	},
	{
		name: "X",
		url: "https://x.com/AbhiArya200",
		icon: "x",
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/AbhiArya20",
		icon: "linkedin",
	},
	{
		name: "Resume",
		url: "https://drive.google.com/file/d/1b2a3c45d6e7f8g9h0i1j2k3l4m5n6o7/view?usp=sharing",
		icon: "resume",
		withText: true,
	},
];
