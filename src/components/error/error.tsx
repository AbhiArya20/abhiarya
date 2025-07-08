"use client";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ErrorProps = {
  status: number;
  message: string;
  btn: string;
};

export default function PageErrorComponent({ status, message, btn }: ErrorProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        startTime: 5,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <motion.section
      className="flex min-h-[calc(100vh-2rem)] w-full flex-1 flex-col items-center justify-center p-4 text-center sm:min-h-[calc(100vh-8rem)]"
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={child}
        className={cn("text-7xl font-extrabold sm:text-9xl", status >= 500 ? "text-destructive" : "")}
      >
        {status}
      </motion.h1>
      <motion.p variants={child} className="text-muted-foreground mt-2 mb-6 text-lg">
        {message}
      </motion.p>
      <motion.div variants={child}>
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
