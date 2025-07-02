import HeaderV2 from "@/components/sections/header/header-v2";
import HeaderV1 from "@/components/sections/header/header-v1";
import FadeDown from "@/components/animation/fade-down";

export default function Header() {
  const headers = [HeaderV1, HeaderV2];
  // const randomIndex = Math.floor(Math.random() * headers.length);
  const RandomHeader = headers[1];
  return (
    <FadeDown>
      <RandomHeader />
    </FadeDown>
  );
}
