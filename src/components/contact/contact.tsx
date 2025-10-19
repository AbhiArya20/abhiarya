"use client";

import { motion } from "motion/react";
import { Social } from "@/components/socials/social";
import { fadeDownChildVariants } from "@/lib/animation-variants";

export function Contact() {
  return (
    <div className="mb-2">
      <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
        Get in touch
      </motion.h2>
      <motion.p
        variants={fadeDownChildVariants}
        className="text-muted-foreground leading-6"
      >
        Feel free to reach out if you want to collaborate on a project, have a
        question, or just want to connect.
      </motion.p>
      <motion.div className="mb-2" variants={fadeDownChildVariants}>
        <Social />
      </motion.div>
    </div>
  );
}
