"use client";

import { track } from "@vercel/analytics";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import AvatarComponent from "@/components/avatar/avatar-component";
import Social from "@/components/socials/social";
import { PERSONAL_DATA } from "@/data/personal";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div className={cn("flex items-center justify-between gap-4")}>
      <div className="flex-1 space-y-1.5">
        <motion.span
          variants={fadeDownChildVariants}
          className="flex self-start sm:hidden"
        >
          <AvatarComponent className="size-36" />
        </motion.span>
        <motion.h1
          variants={fadeDownChildVariants}
          className="text-2xl font-bold whitespace-nowrap"
        >
          {PERSONAL_DATA.name}
        </motion.h1>
        <motion.p
          variants={fadeDownChildVariants}
          className="text-muted-foreground font-mono text-sm text-pretty sm:max-w-md"
        >
          {PERSONAL_DATA.bio}
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
            onClick={() => track("header_address_clicked")}
          >
            <MapPin className="size-3" />
            {`${PERSONAL_DATA.address.state}, ${PERSONAL_DATA.address.country}`}
          </Link>
        </motion.p>
        <motion.div variants={fadeDownChildVariants} className="mb-2">
          <Social />
        </motion.div>
      </div>
      <motion.span variants={fadeDownChildVariants} className="hidden sm:flex">
        <AvatarComponent className="size-36" />
      </motion.span>
    </div>
  );
}
