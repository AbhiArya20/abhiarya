import { motion } from "motion/react";

export default function FadeUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      className="flex items-center justify-between"
      initial={{
        opacity: 0,
        y: 20,
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
      {children}
    </motion.section>
  );
}
