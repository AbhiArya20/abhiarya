"use client";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import SocialComponent from "@/components/socials";
import AvatarComponent from "@/components/avatar";
import { PERSONAL_DATA } from "@/data/personal";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function HeaderV1() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1 space-y-1.5">
        <motion.span variants={fadeDownChildVariants} className="flex self-start sm:hidden">
          <AvatarComponent className="size-36" />
        </motion.span>
        <motion.h1 variants={fadeDownChildVariants} className="text-2xl font-bold whitespace-nowrap">
          {PERSONAL_DATA.name}
          <span className="ml-1 hidden text-[10px] text-neutral-400 sm:inline dark:text-neutral-700">
            {"( " + PERSONAL_DATA.nickname + " )"}
          </span>
        </motion.h1>
        <motion.p
          variants={fadeDownChildVariants}
          className="text-muted-foreground font-mono text-sm text-pretty sm:max-w-md"
        >
          {PERSONAL_DATA.description}
        </motion.p>
        <motion.p
          variants={fadeDownChildVariants}
          className="text-muted-foreground font-mono text-xs text-pretty sm:max-w-md"
        >
          <Link
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:text-blue-400 hover:underline"
            target="_blank"
            href={PERSONAL_DATA.address.url}
            rel="noopener"
          >
            <MapPin className="size-3" />
            {`${PERSONAL_DATA.address.state}, ${PERSONAL_DATA.address.country}`}
          </Link>
        </motion.p>
        <motion.div variants={fadeDownChildVariants} className="mb-2">
          <SocialComponent />
        </motion.div>
      </div>
      <motion.span variants={fadeDownChildVariants} className="hidden sm:flex">
        <AvatarComponent className="size-36" />
      </motion.span>
    </div>
  );
}
