"use client";

import { fadeDownChildVariants } from "@/lib/animation-variants";
import { PERSONAL_DATA } from "@/data/personal";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="space-y-2">
      <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
        About me
      </motion.h2>
      <motion.p variants={fadeDownChildVariants} className="text-muted-foreground font-mono text-sm leading-6">
        {PERSONAL_DATA.descriptionHtml}
      </motion.p>
    </div>
  );
}
