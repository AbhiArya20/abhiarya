import { ModeToggle } from "@/components/theme-switcher/mode-toggle";
import AvatarComponent from "@/components/avatar-component";
import SocialComponent from "@/components/socials";
import { PERSONAL_DATA } from "@/data/personal";

export default function HeaderV2() {
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
            <p className="text-muted-foreground mt-0.5 text-sm">{PERSONAL_DATA.title}</p>
          </div>
        </div>
        <ModeToggle />
      </div>
      <SocialComponent />
    </div>
  );
}
