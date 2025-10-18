"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  fadeDownChildVariants,
  fadeDownParentVariants,
} from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

type ErrorProps = {
  status: number;
  message: string;
  btn: string;
};

export function ErrorPage({ status, message, btn }: ErrorProps) {
  return (
    <motion.section
      className="flex min-h-[calc(100vh-2rem)] w-full flex-1 flex-col items-center justify-center p-4 text-center sm:min-h-[calc(100vh-8rem)]"
      variants={fadeDownParentVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={fadeDownChildVariants}
        className={cn(
          "text-7xl font-extrabold sm:text-9xl",
          status >= 500 ? "text-destructive" : "",
        )}
      >
        {status}
      </motion.h1>
      <motion.p
        variants={fadeDownChildVariants}
        className="text-muted-foreground mt-2 mb-6 text-lg"
      >
        {message}
      </motion.p>
      <motion.div variants={fadeDownChildVariants}>
        <Link href="/" passHref>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/80 flex items-center justify-center gap-2"
            aria-label="go-to-home"
          >
            <span>
              {btn} <ArrowRight />
            </span>
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
