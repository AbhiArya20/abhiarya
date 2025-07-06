import OpenSourceV1 from "@/components/sections/open-source/open-source-v1";
import FadeDown from "@/components/animation/fade-down";

export default function OpenSource() {
  const openSource = [OpenSourceV1];
  const SelectedOpenSource = openSource[0];
  return (
    <FadeDown>
      <SelectedOpenSource />
    </FadeDown>
  );
}
