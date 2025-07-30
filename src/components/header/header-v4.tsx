"use client";

import ThemeSwitcherV2 from "@/components/theme-switcher/theme-switcher-v2";
import AvatarComponent from "@/components/avatar/avatar-component";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import SocialV3 from "@/components/socials/social-v3";
import { PERSONAL_DATA } from "@/data/personal";
import { motion } from "motion/react";

export default function HeaderV4() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.span variants={fadeDownChildVariants}>
            <AvatarComponent className="size-14" />
          </motion.span>
          <div>
            <motion.h1 className="font-semibold whitespace-nowrap" variants={fadeDownChildVariants}>
              {PERSONAL_DATA.name}
            </motion.h1>
            <motion.p className="text-muted-foreground mt-0.5 text-sm" variants={fadeDownChildVariants}>
              {PERSONAL_DATA.title}
            </motion.p>
          </div>
        </div>
        <motion.div className="hidden sm:block" variants={fadeDownChildVariants}>
          <ThemeSwitcherV2 />
        </motion.div>
      </div>
      <motion.div variants={fadeDownChildVariants} className="flex items-center">
        {PERSONAL_DATA.shortDescriptionHtml}
      </motion.div>
      <motion.div variants={fadeDownChildVariants} className="mb-2">
        <SocialV3 />
      </motion.div>
    </div>
  );
}
