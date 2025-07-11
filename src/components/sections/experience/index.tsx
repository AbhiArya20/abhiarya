import ExperienceCardV2 from "@/components/sections/experience/experience-card-v2";
import ExperienceCardV1 from "@/components/sections/experience/experience-card-v1";
import FadeDown from "@/components/animation/fade-down";
import { EXPERIENCE_DATA } from "@/data/experience";
import { PERSONAL_DATA } from "@/data/personal";
import { SOCIAL_DATA } from "@/data/social";
import Link from "next/link";

export default function Experience() {
  const experienceCards = [ExperienceCardV1, ExperienceCardV2];
  const SelectedExperienceCard = experienceCards[0];
  return (
    <FadeDown>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Experience</h2>
          <Link
            href={
              SOCIAL_DATA.find(social => social.name.toLowerCase() === "x")?.url ??
              `https://github.com/${PERSONAL_DATA.github}`
            }
            rel="noopener"
            target="_blank"
          >
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="size-2.5 flex-none overflow-hidden rounded-full bg-green-500 will-change-transform"></div>
              <div className="flex shrink-0 justify-start opacity-100">
                <p>
                  Available <span className="hidden sm:inline">for new opportunities</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
        {EXPERIENCE_DATA.filter(experience => experience.featured).map(experience => (
          <SelectedExperienceCard
            key={experience.company}
            company={experience.company}
            position={experience.position}
            shortPosition={experience.shortPosition}
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
      </div>
    </FadeDown>
  );
}
