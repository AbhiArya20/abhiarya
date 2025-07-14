import AboutV4 from "@/components/home/about/about-v4";
import AboutV3 from "@/components/home/about/about-v3";
import AboutV2 from "@/components/home/about/about-v2";
import AboutV1 from "@/components/home/about/about-v1";

export default function About() {
  const about = [AboutV1, AboutV2, AboutV3, AboutV4];
  const SelectedAbout = about[0];
  return <SelectedAbout />;
}
