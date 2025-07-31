"use client";

import ThemeSwitcherV2 from "@/components/shared/theme-switcher/theme-switcher-v2";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import SocialV3 from "@/components/shared/socials/social-v3";
import { PERSONAL_DATA } from "@/data/personal";
import { motion } from "motion/react";

export default function HeaderV3() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <motion.h1 variants={fadeDownChildVariants} className="text-2xl font-medium tracking-tight">
          Hey, I&apos;m {PERSONAL_DATA.name.split(" ")[0]}
        </motion.h1>
        <ThemeSwitcherV2 />
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
