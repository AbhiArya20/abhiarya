import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Tag } from "@/types";
import Link from "next/link";

export default function Badges({ name, icon, url, className }: Tag & { className?: string }) {
  if (!url) return <BadgeWithoutLink name={name} icon={icon} />;
  return (
    <Link href={url} target="_blank" rel="noopener">
      <BadgeWithoutLink name={name} icon={icon} className={className} />
    </Link>
  );
}

function BadgeWithoutLink({ name, icon, className }: Omit<Tag, "url"> & { className?: string }) {
  if (icon) {
    const Icon = Icons[icon];
    return (
      <Badge
        variant={"outline"}
        className={cn("bg-accent/50 border-muted-foreground rounded-sm border-dashed", className)}
      >
        <Icon className="mr-1.5 h-3 w-3" /> {name}
      </Badge>
    );
  }

  return (
    <Badge
      variant={"outline"}
      className={cn("bg-accent/50 border-muted-foreground rounded-sm border-dashed", className)}
    >
      {name}
    </Badge>
  );
}
