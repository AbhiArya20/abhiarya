import OpenSourceV1 from "@/components/sections/open-source/open-source-v1";
import FadeDown from "@/components/animation/fade-down";

export default function OpenSource() {
  const openSource = [OpenSourceV1];
  const randomIndex = Math.floor(Math.random() * openSource.length);
  const RandomOpenSource = openSource[randomIndex];
  return (
    <FadeDown>
      <RandomOpenSource />
    </FadeDown>
  );
}
