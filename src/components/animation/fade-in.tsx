"use client";
import { motion } from "motion/react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{
        // opacity: 0,
        filter: "blur(5px)",
      }}
      animate={{
        // opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.section>
  );
}
