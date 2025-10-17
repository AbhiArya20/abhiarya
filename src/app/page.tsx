import AvatarComponent from "@/components/avatar/avatar-component";
import Badges from "@/components/badges/badges";
import Social from "@/components/socials/social";
import ThemeSwitcher from "@/components/theme-switcher/theme-switcher";
import { PERSONAL_DATA } from "@/data/personal";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-full justify-center items-center flex-col gap-4">
      <ThemeSwitcher />
      <Social />
      <AvatarComponent />
      <Badges name="React" icon="react" url="https://reactjs.org" />
      <div className="">{PERSONAL_DATA.about}</div>
    </div>
  );
}
