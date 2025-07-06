import BadgeV1 from "@/components/badges/badge-v1";
import { Tag } from "@/data/open-source";

export default function BadgeComponent({ tag }: { tag: Tag }) {
  const badges = [BadgeV1];
  const SelectedBadge = badges[0];
  return <SelectedBadge {...tag} />;
}
