import ThemeSwitcherV3 from "@/components/theme-switcher/theme-switcher-v3";
import ThemeSwitcherV2 from "@/components/theme-switcher/theme-switcher-v2";
import ThemeSwitcherV1 from "@/components/theme-switcher/theme-switcher-v1";

export default function ThemeSwitcherComponent() {
  const themes = [ThemeSwitcherV1, ThemeSwitcherV2, ThemeSwitcherV3];
  const SelectedTheme = themes[0];
  return <SelectedTheme />;
}
