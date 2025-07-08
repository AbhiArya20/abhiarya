import { type Education, EDUCATION_DATA } from "@/data/education";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function EducationV1() {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold">Educations</h2>
      {EDUCATION_DATA.map(education => (
        <EducationCard key={education.degree} education={education} />
      ))}
    </div>
  );
}

function EducationCard({ education }: { education: Education }) {
  const { college, university, stream, degree, startDate, endDate, percentage, CGPA } = education;

  // const Icon = Icons[icon!];
  return (
    <Card className="group border-none p-4 sm:rounded-lg dark:bg-neutral-900">
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-2">
          {/* {icon && <Icon className="mr-3 h-11 w-11 shrink-0 transition-all group-hover:saturate-100 sm:saturate-0" />}
          {image && (
            <Image
              src={image}
              width={64}
              height={64}
              alt={college.name}
              className="mr-2 h-11 w-11 shrink-0 rounded-md transition-all group-hover:saturate-100 sm:saturate-0"
            />
          )} */}

          <div className="flex flex-grow flex-col justify-between">
            <div className="flex w-full items-center justify-between">
              <h1 className="flex items-center gap-1 text-left text-lg leading-[1.3em] font-medium text-gray-300">
                <span>{college.name}</span>
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
                    href={college.locationUrl}
                    rel="noopener"
                  >
                    <MapPin className="size-3" />
                    {`${university.name}, ${university.location}`}
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
    </Card>
  );
}
