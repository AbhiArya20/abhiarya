"use client";

import { fadeDownChildVariants } from "@/lib/animation-variants";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function ActivityCalendarLoading() {
  return (
    <motion.div variants={fadeDownChildVariants} className="border-border rounded-lg border p-4 shadow-sm">
      <div className="border-border rounded-lg border p-4 shadow-sm">
        <div className="text-muted-foreground flex items-center justify-center gap-4 py-16">
          <Loader2 className="size-5 animate-spin" /> <span>Loading Github contributions...</span>
        </div>
      </div>
    </motion.div>
  );
}
