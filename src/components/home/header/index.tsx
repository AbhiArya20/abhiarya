import HeaderV2 from "@/components/home/header/header-v2";
import HeaderV1 from "@/components/home/header/header-v1";

export default function Header() {
  const headers = [HeaderV1, HeaderV2];
  const SelectedHeader = headers[0];
  return <SelectedHeader />;
}
