import Social from "@/components/socials/social";
import ThemeSwitcher from "@/components/theme-switcher/theme-switcher";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-full justify-center items-center flex-col gap-4">
      <ThemeSwitcher />
      <Social />
    </div>
  );
}
