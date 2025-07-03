import { Experience, EXPERIENCE_DATA } from "@/data/experience";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { ReadMore } from "@/components/read-more";

export default function ExperienceV2() {
  return (
    <>
      {EXPERIENCE_DATA.filter(experience => experience.featured).map(experience => (
        <ExperienceCard
          key={experience.company}
          company={experience.company}
          position={experience.position}
          location={experience.location}
          startDate={experience.startDate}
          endDate={experience.endDate}
          url={experience.url}
          github={experience.github}
          icon={experience.icon}
          image={experience.image}
          jobDescription={experience.jobDescription}
          tags={experience.tags}
        />
      ))}
    </>
  );
}

function ExperienceCard({
  company,
  position,
  location,
  startDate,
  endDate,
  url,
  github,
  icon,
  image,
  // jobDescription,
  // tags,
}: Experience) {
  const Icon = Icons[icon!];
  const GithubIcon = Icons.github;
  return (
    <Link href={url} target="_blank" rel="noopener">
      <Card className="group rounded-none border-none bg-transparent px-4 py-2 sm:rounded-lg">
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="flex w-full gap-2">
              {icon && (
                <Icon className="mr-3 h-11 w-11 shrink-0 transition-all group-hover:saturate-100 sm:saturate-0" />
              )}
              {image && (
                <Image
                  src={image}
                  width={64}
                  height={64}
                  alt={company}
                  className="mr-2 h-11 w-11 shrink-0 rounded-md transition-all group-hover:saturate-100 sm:saturate-0"
                />
              )}

              <div className="flex flex-grow flex-col justify-between">
                <div className="flex w-full items-center justify-between">
                  <h1 className="flex items-center gap-1 text-left text-lg leading-[1.3em] font-medium text-gray-300">
                    <span>{company}</span>
                    {github && (
                      <Link href={github} target="_blank" rel="noopener">
                        <GithubIcon className="size-4" />
                      </Link>
                    )}
                  </h1>
                  <p className="text-sm text-gray-300">{location}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-400">{position}</p>
                  <p className={`text-end font-mono text-[10px] leading-[1.3em] tracking-tighter text-neutral-400`}>
                    {`${startDate} - ${endDate}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* <hr /> */}
    </Link>
  );
}
