import AvatarComponent from "@/components/avatar/avatar-component";
import ModeToggle from "@/components/theme-switcher/mode-toggle";
import { EXPERIENCE_DATA } from "@/data/experience";
import SocialComponent from "@/components/socials";
import { PERSONAL_DATA } from "@/data/personal";
import Link from "next/link";

export default function HeaderV2() {
  const currentCompany = EXPERIENCE_DATA.find(experience => experience.endDate?.toLocaleLowerCase() === "present");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <AvatarComponent className="size-14" />
          <div>
            <h1 className="font-semibold whitespace-nowrap">
              {PERSONAL_DATA.name}
              <span className="ml-1 hidden text-[10px] text-neutral-400 sm:inline dark:text-neutral-700">
                {"( " + PERSONAL_DATA.nickname + " )"}
              </span>
            </h1>
            <p className="text-muted-foreground mt-0.5 text-sm">
              {PERSONAL_DATA.title}
              {currentCompany && (
                <Link href={currentCompany.url} target="_blank" rel="noopener" className="text-xs text-sky-400">
                  {` @${currentCompany.shortName}`}
                </Link>
              )}
            </p>
          </div>
        </div>
        <div className="hidden sm:block">
          <ModeToggle />
        </div>
      </div>
      <SocialComponent />
    </div>
  );
}
