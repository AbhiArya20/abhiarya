"use client";

import { fadeDownChildVariants } from "@/lib/animation-variants";
import SocialComponent from "@/components/socials";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mb-2">
      <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
        Get in touch
      </motion.h2>
      <motion.p variants={fadeDownChildVariants} className="text-muted-foreground leading-6">
        Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.
      </motion.p>
      <motion.div variants={fadeDownChildVariants}>
        <SocialComponent />
      </motion.div>
    </div>
  );
};

export default Contact;
