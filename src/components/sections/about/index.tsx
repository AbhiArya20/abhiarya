import AboutV4 from "@/components/sections/about/about-v4";
import AboutV3 from "@/components/sections/about/about-v3";
import AboutV2 from "@/components/sections/about/about-v2";
import AboutV1 from "@/components/sections/about/about-v1";
import FadeDown from "@/components/animation/fade-down";

export default function About() {
  const about = [AboutV1, AboutV2, AboutV3, AboutV4];
  const RandomAbout = about[3];
  return (
    <FadeDown>
      <RandomAbout />
    </FadeDown>
  );
}
