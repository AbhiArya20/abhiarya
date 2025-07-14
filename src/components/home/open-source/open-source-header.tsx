"use client";

import { fadeDownChildVariants } from "@/lib/animation-variants";
import { PERSONAL_DATA } from "@/data/personal";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OpenSourceHeader() {
  return (
    <div className="flex items-end justify-between">
      <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
        Open source journey
      </motion.h2>
      <Link
        href={`https://github.com/pulls?q=is:pr+author:${PERSONAL_DATA.github}+archived:false+is:closed`}
        className="hover:text-blue-400"
        target="_blank"
        rel="noopener"
      >
        <motion.div variants={fadeDownChildVariants} className="flex flex-row items-center justify-start gap-2">
          <div className="flex shrink-0 justify-start text-xs font-semibold">See More</div>
        </motion.div>
      </Link>
    </div>
  );
}
