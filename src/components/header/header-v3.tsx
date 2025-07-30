"use client";
import ThemeSwitcherV3 from "@/components/theme-switcher/theme-switcher-v3";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import SocialV3 from "@/components/socials/social-v3";
import { PERSONAL_DATA } from "@/data/personal";
// import AvatarV2 from "../avatar/avatar-v2";
import { track } from "@vercel/analytics";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeaderV3() {
  return (
    <div className="flex flex-col gap-4">
      {/* <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.span variants={fadeDownChildVariants}>
            <AvatarV2 className="size-14" />
          </motion.span>
          <div>
            <motion.h1 className="font-semibold whitespace-nowrap" variants={fadeDownChildVariants}>
              {PERSONAL_DATA.name}
            </motion.h1>
            <motion.p className="text-muted-foreground mt-0.5 text-sm" variants={fadeDownChildVariants}>
              {PERSONAL_DATA.title}
            </motion.p>
          </div>
        </div>
        <motion.div className="hidden sm:block" variants={fadeDownChildVariants}>
          <ThemeSwitcherV3 />
        </motion.div>
      </div> */}
      <div className="flex items-center justify-between">
        <motion.h1
          variants={fadeDownChildVariants}
          className="flex w-full items-baseline justify-between text-xl font-medium tracking-tight"
        >
          <span>Hey, I&apos;m {PERSONAL_DATA.name.split(" ")[0]}</span>
          <ThemeSwitcherV3 />
        </motion.h1>
      </div>
      <motion.div variants={fadeDownChildVariants} className="flex items-center gap-4">
        <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
          Software Engineer from India. Open to work. Contact me below. Currently building{" "}
          <Link
            href="https://0.email"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 transition-colors hover:text-zinc-900 dark:text-zinc-100 dark:hover:text-zinc-100"
            onClick={() => track("zero_email_clicked")}
          >
            Zero
          </Link>{" "}
          and{" "}
          <Link
            href="https://oss.now"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 transition-colors hover:text-zinc-900 dark:text-zinc-100 dark:hover:text-zinc-100"
            onClick={() => track("oss.now_clicked")}
          >
            oss.now
          </Link>
          .
        </p>
      </motion.div>

      <motion.div variants={fadeDownChildVariants} className="mb-2">
        <SocialV3 />
      </motion.div>
    </div>
  );
}
