"use client";

import { MonitorIcon, MoonStarIcon, SunIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { type JSX, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function ThemeOption({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  value: string;
  isActive?: boolean;
  onClick: (value: string) => void;
}) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: shadcn rule
    // biome-ignore lint/a11y/useButtonType: shadcn rule
    <button
      className={cn(
        "relative flex size-8 cursor-pointer items-center justify-center rounded-full transition-all [&_svg]:size-4",
        isActive
          ? "text-accent-foreground "
          : "text-accent-foreground/50 hover:text-accent-foreground",
      )}
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
    >
      {icon}
      {isActive && (
        <motion.div
          layoutId="theme-option"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className="absolute inset-0 rounded-full border-2 border-accent"
        />
      )}
    </button>
  );
}

const THEME_OPTIONS = [
  {
    icon: <MonitorIcon />,
    value: "system",
  },
  {
    icon: <SunIcon />,
    value: "light",
  },
  {
    icon: <MoonStarIcon />,
    value: "dark",
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className="inline-flex items-center overflow-hidden rounded-full ring-2 ring-accent ring-inset"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </motion.div>
  );
}
