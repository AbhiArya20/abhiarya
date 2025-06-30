import { ModeToggle } from "@/components/theme-switcher/mode-toggle";
import AvatarComponent from "@/components/avatar-component";
import SocialComponent from "@/components/socials";
import { DATA } from "@/data";

export default function HeaderV2() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <AvatarComponent className="size-14" />
          <div>
            <h1 className="font-semibold">{DATA.name}</h1>
            <p className="text-muted-foreground mt-0.5 text-sm">{DATA.title}</p>
          </div>
        </div>
        <ModeToggle />
      </div>
      <SocialComponent />
    </div>
  );
}
