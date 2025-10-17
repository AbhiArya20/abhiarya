import { track } from "@vercel/analytics";
import Link from "next/link";
import { icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import type { Tag } from "@/types";

export function Tags({ tags }: { tags: Tag[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        return (
          <li key={tag.name}>
            {tag.url ? (
              <Link
                href={tag.url}
                target="_blank"
                rel="noopener"
                onClick={() => track(`tag_${tag.name}_clicked`)}
              >
                <BadgeWithoutLink name={tag.name} icon={tag.icon} />
              </Link>
            ) : (
              <BadgeWithoutLink name={tag.name} icon={tag.icon} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function BadgeWithoutLink({ name, icon }: Omit<Tag, "url">) {
  if (icon) {
    const Icon = icons[icon];
    return (
      <Badge
        variant={"outline"}
        className="bg-accent/50 border-muted-foreground/50 rounded-sm border-dashed"
      >
        <Icon className="mr-1.5 h-3 w-3 transition-all group-hover:saturate-100 sm:saturate-0" />{" "}
        {name}
      </Badge>
    );
  }

  return (
    <Badge
      variant={"outline"}
      className="bg-accent/50 border-muted-foreground/50 rounded-sm border-dashed"
    >
      {name}
    </Badge>
  );
}
