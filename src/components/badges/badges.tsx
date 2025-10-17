"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Tag } from "@/types";

export function Badges({
  name,
  icon,
  url,
  className,
}: Tag & { className?: string }) {
  if (!url) return <BadgeWithoutLink name={name} icon={icon} />;
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener"
      onClick={() => track(`${name}_badge_clicked`)}
    >
      <BadgeWithoutLink name={name} icon={icon} className={className} />
    </Link>
  );
}

function BadgeWithoutLink({
  name,
  icon,
  className,
}: Omit<Tag, "url"> & { className?: string }) {
  if (icon) {
    const Icon = icons[icon];
    return (
      <Badge
        variant={"outline"}
        className={cn(
          "bg-accent/50 border-muted-foreground rounded-sm border-dashed [&>svg]:size-3",
          className,
        )}
      >
        <Icon className="mr-0.5" /> {name}
      </Badge>
    );
  }

  return (
    <Badge
      variant={"outline"}
      className={cn(
        "bg-accent/50 border-muted-foreground rounded-sm border-dashed",
        className,
      )}
    >
      {name}
    </Badge>
  );
}
