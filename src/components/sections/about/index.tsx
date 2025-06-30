import AboutV2 from "@/components/sections/about/about-v2";
import AboutV1 from "@/components/sections/about/about-v1";
import FadeDown from "@/components/animation/fade-down";

export default function About() {
  const headers = [AboutV1, AboutV2];
  // const randomIndex = Math.floor(Math.random() * headers.length);
  const RandomAbout = headers[1];
  return (
    <FadeDown>
      <RandomAbout />
    </FadeDown>
  );
}
