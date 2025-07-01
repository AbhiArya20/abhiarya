import { type Education, EDUCATION_DATA } from "@/data/education";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EducationV1() {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold">Educations</h2>
      {EDUCATION_DATA.map(education => (
        <EducationCard
          key={education.college}
          college={education.college}
          stream={education.stream}
          degree={education.degree}
          university={education.university}
          location={education.location}
          locationUrl={education.locationUrl}
          startDate={education.startDate}
          endDate={education.endDate}
          url={education.url}
          percentage={education.percentage}
          CGPA={education.CGPA}
          icon={education.icon}
          image={education.image}
        />
      ))}
    </div>
  );
}

function EducationCard({
  college,
  stream,
  degree,
  university,
  location,
  locationUrl,
  startDate,
  endDate,
  url,
  percentage,
  CGPA,
  icon,
  image,
}: Education) {
  const Icon = Icons[icon!];
  return (
    <Link href={url} target="_blank" rel="noopener">
      <Card className="group rounded-none border-none from-neutral-800/10 p-4 sm:rounded-lg dark:bg-neutral-900 dark:hover:bg-gradient-to-bl">
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
                  alt={college}
                  className="mr-2 h-11 w-11 shrink-0 rounded-md transition-all group-hover:saturate-100 sm:saturate-0"
                />
              )}

              <div className="flex flex-grow flex-col justify-between">
                <div className="flex w-full items-center justify-between">
                  <h1 className="flex items-center gap-1 text-left text-lg leading-[1.3em] font-medium text-gray-300">
                    <span>{college}</span>
                  </h1>
                  {percentage && <p className="text-sm text-gray-300">{percentage + " %"} </p>}
                  {CGPA && <p className="text-sm text-gray-300">{CGPA + " CGPA"} </p>}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">{`${degree} in ${stream}`}</p>
                    <p className="text-muted-foreground font-mono text-xs text-pretty sm:max-w-md">
                      <Link
                        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                        target="_blank"
                        href={locationUrl}
                        rel="noopener"
                      >
                        <MapPin className="size-3" />
                        {`${university}, ${location}`}
                      </Link>
                    </p>
                  </div>
                  <p className={`text-end font-mono text-[10px] leading-[1.3em] tracking-tighter text-neutral-400`}>
                    {`${startDate} - ${endDate}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
