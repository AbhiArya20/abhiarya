"use client";

import { Icons } from "@/components/icons";
import { track } from "@vercel/analytics";
import { Tag } from "@/data/open-source";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BadgeV3({ icon, url, name, color }: Tag & { color: string }) {
  if (url)
    return (
      <Link href={url} target="_blank" rel="noopener" onClick={() => track(`tag_${name}_clicked`)}>
        <Badge icon={icon} name={name} color={color} />
      </Link>
    );
  return <Badge icon={icon} name={name} color={color} />;
}

function Badge({ icon, name, color }: Omit<Tag, "url"> & { color: string }) {
  if (icon) {
    const Icon = Icons[icon];
    return (
      <div className="bg-accent/40 flex w-full items-center gap-2 rounded-md p-3">
        <div className={cn("flex size-9 items-center justify-center rounded-md bg-blue-500/30", color)}>
          <Icon className="size-5" />
        </div>
        <p>{name}</p>
      </div>
    );
  }

  return (
    <div className="bg-accent/40 flex w-full items-center gap-2 rounded-md p-3">
      <p>{name}</p>
    </div>
  );
}
