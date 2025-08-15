"use client";

import AvatarComponent from "@/components/avatar/avatar-component";
import Social from "@/components/socials/social";
import { PERSONAL_DATA } from "@/data/personal";
import { track } from "@vercel/analytics";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header({ image }: { image?: "left" | "right" }) {
  return (
    <div className={cn("flex items-center justify-between gap-4", image === "left" && "sm:flex-row-reverse")}>
      <div className="flex-1 space-y-1.5">
        <span className="flex self-start sm:hidden">
          <AvatarComponent className="size-36" />
        </span>
        <h1 className="text-2xl font-bold whitespace-nowrap">{PERSONAL_DATA.name}</h1>
        <p className="text-muted-foreground font-mono text-sm text-pretty sm:max-w-md">{PERSONAL_DATA.description}</p>
        <p className="text-muted-foreground font-mono text-xs text-pretty sm:max-w-md">
          <Link
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:text-blue-400 hover:underline"
            target="_blank"
            href={PERSONAL_DATA.address.url}
            rel="noopener"
            onClick={() => track("header_address_clicked")}
          >
            <MapPin className="size-3" />
            {`${PERSONAL_DATA.address.state}, ${PERSONAL_DATA.address.country}`}
          </Link>
        </p>
        <div className="mb-2">
          <Social />
        </div>
      </div>
      <span className="hidden sm:flex">
        <AvatarComponent className="size-36" />
      </span>
    </div>
  );
}
