import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { Tag } from "@/data/open-source";
import Link from "next/link";

export default function BadgeV1({ name, icon, url }: Tag) {
  if (!url) return <BadgeWithoutLink name={name} icon={icon} />;
  return (
    <Link href={url} target="_blank" rel="noopener">
      <BadgeWithoutLink name={name} icon={icon} />
    </Link>
  );
}

function BadgeWithoutLink({ name, icon }: Omit<Tag, "url">) {
  const Icon = Icons[icon];
  return (
    <Badge variant={"outline"} className="bg-accent/50 rounded-sm">
      <Icon className="mr-1.5 h-3 w-3" /> {name}
    </Badge>
  );
}
