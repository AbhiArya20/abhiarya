"use client";
import { motion } from "motion/react";

export default function FadeDown({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: -20,
        willChange: "opacity, transform",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.section>
  );
}
