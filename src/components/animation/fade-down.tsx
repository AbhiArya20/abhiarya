"use client";

import { fadeDownParentVariants } from "@/lib/animation-variants";
import { motion } from "motion/react";

export default function FadeDown({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeDownParentVariants} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}
