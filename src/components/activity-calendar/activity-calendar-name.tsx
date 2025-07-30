"use client";

import { Activity, ActivityCalendar, DayIndex } from "react-activity-calendar";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { THEMES } from "@/components/activity-calendar/themes";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function ActivityCalendarName({ color }: { color?: keyof typeof THEMES }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    setMounted(true);
    if (!container) return;
    container.children[0].scrollBy({ left: container.children[0].scrollWidth, behavior: "smooth" });
  }, [mounted]);

  const { resolvedTheme } = useTheme();

  const theme = color ? THEMES[color] : undefined;

  function generateWeeklyData(days: number[]) {
    const date = new Date();
    const data: Activity[] = [];
    for (let i = 0; i < 7 * 52; i++) {
      data.push({
        date: date.toISOString().split("T")[0],
        level: days.includes(i) ? 1 : 0,
        count: days.includes(i) ? 1 : 0,
      });
      date.setDate(date.getDate() + 1);
    }
    return data;
  }

  // TODO: Add for AbhiArya
  const data = generateWeeklyData([
    3, 4, 5, 6, 9, 15, 21, 29, 37, 45, 46, 47, 48, 11, 18, 25, 32, 39, 56, 57, 58, 59, 60, 61, 62, 63, 69, 70, 76, 78,
    79, 81, 82, 73, 66,
  ]);

  const day: DayIndex = new Date().getDay() as DayIndex;

  return (
    <motion.div variants={fadeDownChildVariants}>
      <div className="block overflow-hidden">
        <ActivityCalendar
          blockSize={11}
          blockMargin={2}
          blockRadius={100}
          hideColorLegend
          hideMonthLabels
          hideTotalCount
          theme={theme}
          weekStart={day}
          maxLevel={1}
          fontSize={0}
          colorScheme={mounted ? (resolvedTheme as "light" | "dark" | undefined) : undefined}
          data={data}
          ref={containerRef}
        />
      </div>
    </motion.div>
  );
}
