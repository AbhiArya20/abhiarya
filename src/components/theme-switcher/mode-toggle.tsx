"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const Sun = Icons.sun;
  const Moon = Icons.moon;

  return (
    <Button
      variant="outline"
      className="text-muted-foreground hover:text-foreground size-10 bg-transparent p-0 transition-colors duration-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="size-[1.5rem] scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-[1.5rem] scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
