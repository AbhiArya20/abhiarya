"use client";

import ThemeSwitcher from "@/components/theme-switcher/theme-switcher";
import { PERSONAL_DATA } from "@/data/personal";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { motion } from "motion/react";

// import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.div variants={fadeDownChildVariants} className="flex items-end justify-between">
      <div className="flex flex-col gap-2 text-xs">
        <span>
          Designed &amp; Made with <span className="bg-muted-foreground bg-clip-text">❤️</span>
        </span>
        <span className="text-muted-foreground">{`@ ${year} ${PERSONAL_DATA.nickname}. All rights reserved.`}</span>
      </div>
      <ThemeSwitcher />
    </motion.div>
  );
}
