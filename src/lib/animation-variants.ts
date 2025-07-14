import { Variants } from "motion/react";

export const fadeDownParentVariants: Variants = {
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
      duration: 0.3,
    },
  },
};

export const fadeDownChildVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};
