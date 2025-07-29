"use client";

import { fadeDownChildVariants } from "@/lib/animation-variants";
import SocialV1 from "@/components/socials/social-v1";
import { motion } from "framer-motion";

const ContactV1 = () => {
  return (
    <div className="mb-2">
      <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
        Get in touch
      </motion.h2>
      <motion.p variants={fadeDownChildVariants} className="text-muted-foreground leading-6">
        Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.
      </motion.p>
      <motion.div className="mb-2" variants={fadeDownChildVariants}>
        <SocialV1 />
      </motion.div>
    </div>
  );
};

export default ContactV1;
