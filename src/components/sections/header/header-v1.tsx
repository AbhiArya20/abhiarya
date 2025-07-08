import AvatarComponent from "@/components/avatar/avatar-component";
import SocialComponent from "@/components/socials";
import { PERSONAL_DATA } from "@/data/personal";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function HeaderV1() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1 space-y-1.5">
        <span className="flex self-start sm:hidden">
          <AvatarComponent className="size-36" />
        </span>
        <h1 className="text-2xl font-bold whitespace-nowrap">
          {PERSONAL_DATA.name}
          <span className="ml-1 hidden text-[10px] text-neutral-400 sm:inline dark:text-neutral-700">
            {"( " + PERSONAL_DATA.nickname + " )"}
          </span>
        </h1>
        <p className="text-muted-foreground font-mono text-sm text-pretty sm:max-w-md">{PERSONAL_DATA.description}</p>
        <p className="text-muted-foreground font-mono text-xs text-pretty sm:max-w-md">
          <Link
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            target="_blank"
            href={PERSONAL_DATA.address.url}
            rel="noopener"
          >
            <MapPin className="size-3" />
            {`${PERSONAL_DATA.address.state}, ${PERSONAL_DATA.address.country}`}
          </Link>
        </p>
        <SocialComponent />
      </div>
      <span className="hidden sm:flex">
        <AvatarComponent className="size-36" />
      </span>
    </div>
  );
}
