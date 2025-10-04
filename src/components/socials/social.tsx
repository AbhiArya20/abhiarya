"use client";

import { Icons } from "@/components/icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SOCIAL_DATA } from "@/data/social";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import Link from "next/link";

export default function Social() {
  return (
    <div className="text-muted-foreground flex gap-1 pt-1 font-mono text-sm">
      <TooltipProvider>
        {SOCIAL_DATA.map(social => {
          const Icon = Icons[social.icon];
          return (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={social.name}
                  className={cn(
                    "focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 rounded-md border text-sm font-medium whitespace-nowrap shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
                    social.withText ? "px-2" : "h-8 w-8"
                  )}
                  onClick={() => track(`social_${social.name}_clicked`)}
                >
                  <Icon className={social.icon === "github" ? "size-5" : "size-4"} />
                  <span className="hidden">{social.name}</span>
                  {social.withText && <span className="hidden sm:inline">{social.name}</span>}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                {social.name}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </div>
  );
}
