"use client";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { type Experience } from "@/data/experience";
// import BadgeComponent from "@/components/badges";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Tags from "@/components/tags/tags";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import BadgeV1 from "@/components/badges/badge-v1";

export default function ExperienceCardV1({
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
  // type,
}: Experience) {
  const Icon = Icons[icon!];
  const GithubIcon = Icons.github;
  return (
    <motion.div variants={fadeDownChildVariants}>
      <Card className="group border-none p-4 sm:rounded-lg dark:bg-neutral-900">
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
                <h3 className="flex items-center gap-2 text-left text-sm font-semibold">
                  <Link href={url} target="_blank" rel="noopener" className="hover:text-blue-400">
                    {company}
                  </Link>
                  {/* <BadgeV1
                    tag={{
                      name: type as string,
                      icon: "x",
                      
                    }}
                  /> */}
                  {github && (
                    <Link href={github} target="_blank" rel="noopener">
                      <GithubIcon className="text-muted-foreground size-4 hover:text-blue-400" />
                      <span className="sr-only">Visit Repository</span>
                    </Link>
                  )}
                </h3>
                <p className="text-muted-frontend text-xs font-semibold">{location}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground hidden text-sm sm:inline">{position}</p>
                <p className="text-muted-foreground text-sm sm:hidden">{shortPosition} </p>
                <p className={`text-muted-foreground text-end font-mono text-[10px]`}>{`${startDate} - ${endDate}`}</p>
              </div>
            </div>
          </div>
          {tags && <Tags tags={tags} />}
        </div>
      </Card>
    </motion.div>
  );
}
