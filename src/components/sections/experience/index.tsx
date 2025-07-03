import ExperienceV1 from "@/components/sections/experience/experience-v1";
import FadeDown from "@/components/animation/fade-down";
import { PERSONAL_DATA } from "@/data/personal";
import { SOCIAL_DATA } from "@/data/social";
import ExperienceV2 from "./experience-v2";
import Link from "next/link";

export default function Experience() {
  const experience = [ExperienceV1, ExperienceV2];
  // const randomIndex = Math.floor(Math.random() * experience.length);
  const RandomExperience = experience[1];
  return (
    <FadeDown>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Experience</h2>
          <Link
            href={
              SOCIAL_DATA.find(social => social.name === "twitter")?.url ?? `https://github.com/${PERSONAL_DATA.github}`
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
        <RandomExperience />
      </div>
    </FadeDown>
  );
}
