import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { Tag } from "@/data/open-source";
import React from "react";

export default function Tags({ tags }: { tags: Tag[] }) {
  return (
    <div className="mt-2">
      <ul className="flex flex-wrap gap-1">
        {tags.map(tag => {
          const Icon = Icons[tag.icon];
          return (
            <li key={tag.name}>
              <Badge variant={"outline"}>
                <Icon className="mr-1 h-2 w-2 transition-all group-hover:saturate-100 sm:saturate-0" /> {tag.name}
              </Badge>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
