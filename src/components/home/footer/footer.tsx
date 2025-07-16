"use client";

import ThemeSwitcherComponent from "@/components/theme-switcher";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { PERSONAL_DATA } from "@/data/personal";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.div variants={fadeDownChildVariants} className="flex items-end justify-between">
      <div className="flex flex-col gap-2 text-xs">
        <span>
          Designed &amp; Made with <span className="bg-muted-foreground bg-clip-text">❤️</span>
        </span>
        <span className="text-muted-foreground">{`@ ${year} ${PERSONAL_DATA.nickname}. All rights reserved.`}</span>
        <span className="text-muted-foreground">
          Missing something?{" "}
          <Link
            className="text-muted-foreground hover:text-blue-400"
            target="_blank"
            rel="noopener"
            href={PERSONAL_DATA.olderPortfolio}
          >
            Old Portfolio?
          </Link>
        </span>
      </div>
      <ThemeSwitcherComponent />
    </motion.div>
  );
}
