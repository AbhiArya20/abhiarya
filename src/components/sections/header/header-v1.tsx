"use client";
import AvatarComponent from "@/components/avatar-component";
import SocialComponent from "@/components/socials";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { DATA } from "@/data";
import Link from "next/link";

export default function HeaderV1() {
  return (
    <motion.section
      className="flex items-center justify-between"
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
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold">
          {DATA.name}{" "}
          <span className="text-[10px] text-neutral-400 dark:text-neutral-700">{"( " + DATA.nickname + " )"}</span>
        </h1>
        <p className="text-muted-foreground max-w-md font-mono text-sm text-pretty print:text-[12px]">
          {DATA.description}
        </p>
        <p className="text-muted-foreground max-w-md items-center font-mono text-xs text-pretty">
          <Link
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            target="_blank"
            href={DATA.address.url}
            rel="noopener"
          >
            <MapPin className="size-3" />
            {DATA.address.state}
          </Link>
        </p>
        <SocialComponent />
      </div>
      <span className="relative flex size-36 shrink-0 overflow-hidden rounded-full">
        <AvatarComponent className="aspect-square h-full w-full" />
      </span>
    </motion.section>
  );
}
