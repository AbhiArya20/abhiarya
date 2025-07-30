import { cn } from "@/lib/utils";
import React from "react";

export default function ActivityCalendarError({
  message,
  icon,
  className,
}: {
  message: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="border-border rounded-lg border p-4 shadow-sm">
      <div className={cn("flex h-full items-center justify-center gap-4 py-16", className)}>
        {icon}
        <span>{message}</span>
        {/* <WifiOff className="size-5" /> <span>{error.message}</span> */}
      </div>
    </div>
  );
}
