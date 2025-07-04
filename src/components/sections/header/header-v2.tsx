import AvatarComponent from "@/components/avatar/avatar-component";
import ModeToggle from "@/components/theme-switcher/mode-toggle";
import { EXPERIENCE_DATA } from "@/data/experience";
import SocialComponent from "@/components/socials";
import { PERSONAL_DATA } from "@/data/personal";
import Link from "next/link";

export default function HeaderV2() {
  let currentCompany = `${EXPERIENCE_DATA.find(experience => experience.endDate?.toLocaleLowerCase() === "present")
    ?.company.split(" ")
    .join("")
    .toLocaleLowerCase()}`;
  currentCompany = "@" + currentCompany.charAt(0).toUpperCase() + currentCompany.slice(1);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <AvatarComponent className="size-14" />
          <div>
            <h1 className="font-semibold">
              {PERSONAL_DATA.name}
              <span className="ml-1 text-[10px] text-neutral-400 dark:text-neutral-700">
                {"( " + PERSONAL_DATA.nickname + " )"}
              </span>
            </h1>
            <p className="text-muted-foreground mt-0.5 text-sm">
              {PERSONAL_DATA.title} {/* TODO: Fixed the color of the link */}
              <Link href={PERSONAL_DATA.portfolio} target="_blank" rel="noopener" className="text-sky-400">
                {currentCompany}
              </Link>
            </p>
          </div>
        </div>
        <ModeToggle />
      </div>
      <SocialComponent />
    </div>
  );
}
