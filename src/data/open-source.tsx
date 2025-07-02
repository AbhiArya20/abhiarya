import { Icons } from "@/components/icons";
import { JSX } from "react";

export type Tag = {
  name: string;
  icon: keyof typeof Icons;
  url: string;
};

export type OpenSourceProject = {
  repository: string;
  description: string | JSX.Element;
  title: string;
  link: string;
};

export type OpenSource = {
  description?: string;
  projects?: OpenSourceProject[];
};

export type Data = {
  openSource?: OpenSource;
};

export const DATA: Data = {
  openSource: {
    description:
      "I have contributed to various open-source projects, including Astro, TailwindCSS, shadcn/ui, and more. I also made a few open-source projects that did benefit the community.",
    projects: [
      {
        repository: "AbhiArya20/coderoom",
        title: "coderoom",
        link: "https://www.github.com/AbhiArya20/coderoom",
        description: (
          <>
            A theme for Clerk components that syncs with any shadcn/ui configuration. Got excited when I had my first{" "}
            <a
              href="https://github.com/AbhiArya20/coderoom/issues?q="
              target="_blank"
              className="deco text-foreground decoration-muted-foreground font-medium whitespace-nowrap underline underline-offset-2"
            >
              issue
              {/* <Icons.arrowUpRight className='inline-block size-4' /> */}
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/AbhiArya20/coderoom/pulls?q="
              target="_blank"
              className="deco text-foreground decoration-muted-foreground font-medium whitespace-nowrap underline underline-offset-2"
            >
              PR
              {/* <Icons.arrowUpRight className='inline-block size-4' /> */}
            </a>{" "}
            from the community!
          </>
        ),
      },
      {
        repository: "AbhiArya20/coderoom",
        description:
          "A modern SaaS landing page template with 12 themes, designed to collect emails for a waitlist. I made this when Linear-like websites were trending so I made one too.",
        title: "SaaSStellar",
        link: "AbhiArya20/coderoom",
      },
    ],
  },
};
