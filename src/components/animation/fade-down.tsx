"use client";

import { motion } from "motion/react";
import { fadeDownParentVariants } from "@/lib/animation-variants";

export default function FadeDown({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeDownParentVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}
