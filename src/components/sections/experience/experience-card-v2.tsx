import { type Experience } from "@/data/experience";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Tags from "@/components/tags/tags";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceCardV2({
  company,
  position,
  shortPosition,
  location,
  startDate,
  endDate,
  url,
  github,
  icon,
  image,
  tags,
}: Experience) {
  const Icon = Icons[icon!];
  const GithubIcon = Icons.github;
  return (
    <Card className="group my-3 border-none bg-transparent py-0 sm:rounded-lg">
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-2">
          {icon && <Icon className="mr-2 h-10 w-10 shrink-0 transition-all group-hover:saturate-100 sm:saturate-0" />}
          {image && (
            <Image
              src={image}
              width={64}
              height={64}
              alt={company}
              className="mr-2 h-10 w-10 shrink-0 rounded-md transition-all group-hover:saturate-100 sm:saturate-0"
            />
          )}
          <div className="flex flex-grow flex-col justify-between">
            <div className="flex items-center justify-between">
              <h1 className="flex items-center gap-1 text-left text-sm font-semibold">
                <span>{company}</span>
                {github && (
                  <Link href={github} target="_blank" rel="noopener">
                    <GithubIcon className="text-muted-foreground size-4" />
                  </Link>
                )}
                {url && (
                  <Link href={url} target="_blank" rel="noopener">
                    <Link2 className="text-muted-foreground size-4" />
                  </Link>
                )}
              </h1>
              <p className="text-muted-frontend text-xs font-semibold">{location}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground hidden text-sm sm:inline">{position}</p>
              <p className="text-muted-foreground text-sm sm:hidden">{shortPosition}</p>
              <p className={`text-muted-foreground text-end font-mono text-[10px] leading-[1.3em] tracking-tighter`}>
                {`${startDate} - ${endDate}`}
              </p>
            </div>
          </div>
        </div>
        {tags && <Tags tags={tags} />}
      </div>
    </Card>
  );
}
