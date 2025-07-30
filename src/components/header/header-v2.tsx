"use client";

import ThemeSwitcherV3 from "@/components/theme-switcher/theme-switcher-v3";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import SocialV1 from "@/components/socials/social-v1";
import AvatarV2 from "@/components/avatar/avatar-v2";
import { EXPERIENCE_DATA } from "@/data/experience";
import { PERSONAL_DATA } from "@/data/personal";
import { track } from "@vercel/analytics";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeaderV2() {
  const currentCompany = EXPERIENCE_DATA.find(experience => experience.endDate?.toLocaleLowerCase() === "present");
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.span variants={fadeDownChildVariants}>
            <AvatarV2 className="size-14" />
          </motion.span>
          <div className="space-y-0.5">
            <motion.h1 className="font-semibold whitespace-nowrap" variants={fadeDownChildVariants}>
              {PERSONAL_DATA.name}
            </motion.h1>
            <motion.p className="text-muted-foreground text-sm" variants={fadeDownChildVariants}>
              {PERSONAL_DATA.title}
              {currentCompany && (
                <Link
                  href={currentCompany.url}
                  target="_blank"
                  rel="noopener"
                  className="text-xs hover:text-sky-500"
                  onClick={() => track(`header_current_company_${currentCompany.shortName}_clicked`)}
                >
                  {` @${currentCompany.shortName}`}
                </Link>
              )}
            </motion.p>
          </div>
        </div>
        <motion.div className="hidden sm:block" variants={fadeDownChildVariants}>
          <ThemeSwitcherV3 />
        </motion.div>
      </div>
      <motion.div variants={fadeDownChildVariants}>
        <SocialV1 />
      </motion.div>
    </div>
  );
}
