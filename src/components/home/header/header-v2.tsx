"use client";
import ThemeSwitcherV1 from "@/components/theme-switcher/theme-switcher-v1";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import CircularAvatar from "@/components/avatar/avatar-v1";
import { EXPERIENCE_DATA } from "@/data/experience";
import SocialComponent from "@/components/socials";
import { PERSONAL_DATA } from "@/data/personal";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeaderV2() {
  const currentCompany = EXPERIENCE_DATA.find(experience => experience.endDate?.toLocaleLowerCase() === "present");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.span variants={fadeDownChildVariants}>
            <CircularAvatar className="size-14" />
          </motion.span>
          <div>
            <motion.h1 className="font-semibold whitespace-nowrap" variants={fadeDownChildVariants}>
              {PERSONAL_DATA.name}
              <span className="ml-1 hidden text-[10px] text-neutral-400 sm:inline dark:text-neutral-700">
                {"( " + PERSONAL_DATA.nickname + " )"}
              </span>
            </motion.h1>
            <motion.p className="text-muted-foreground mt-0.5 text-sm" variants={fadeDownChildVariants}>
              {PERSONAL_DATA.title}
              {currentCompany && (
                <Link
                  href={currentCompany.url}
                  target="_blank"
                  rel="noopener"
                  className="text-xs text-sky-400 hover:text-sky-500"
                >
                  {` @${currentCompany.shortName}`}
                </Link>
              )}
            </motion.p>
          </div>
        </div>
        <motion.div className="hidden sm:block" variants={fadeDownChildVariants}>
          <ThemeSwitcherV1 />
        </motion.div>
      </div>
      <motion.div variants={fadeDownChildVariants}>
        <SocialComponent />
      </motion.div>
    </div>
  );
}
