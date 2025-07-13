"use client";

import { fadeDownChildVariants } from "@/lib/animation-variants";
import { PERSONAL_DATA } from "@/data/personal";
import { SOCIAL_DATA } from "@/data/social";
import { motion } from "framer-motion";
import Link from "next/link";

type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
        {title}
      </motion.h2>
      <Link
        href={
          SOCIAL_DATA.find(social => social.name.toLowerCase() === "x")?.url ??
          `https://github.com/${PERSONAL_DATA.github}`
        }
        rel="noopener"
        target="_blank"
      >
        <motion.div variants={fadeDownChildVariants} className="flex flex-row items-center justify-start gap-2">
          <div className="size-2.5 flex-none overflow-hidden rounded-full bg-green-500 will-change-transform"></div>
          <div className="flex shrink-0 justify-start opacity-100">
            <p>
              Available <span className="hidden sm:inline">for new opportunities</span>
            </p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
