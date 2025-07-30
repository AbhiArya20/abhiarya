"use client";

import ExperienceCardV1 from "@/components/experience-cards/experience-card-v1";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { EXPERIENCE_DATA } from "@/data/experience";
import { PERSONAL_DATA } from "@/data/personal";
import { SOCIAL_DATA } from "@/data/social";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExperienceV1() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
          Experience
        </motion.h2>
        <Link
          href={
            SOCIAL_DATA.find(social => social.name.toLowerCase() === "x")?.url ??
            `https://github.com/${PERSONAL_DATA.github}`
          }
          rel="noopener"
          target="_blank"
          className="hover:text-blue-400"
          onClick={() => track("see_all_experience_clicked")}
        >
          <motion.div
            variants={fadeDownChildVariants}
            className="flex flex-row items-center justify-start gap-2 font-semibold hover:text-blue-400"
          >
            <div className="size-2 flex-none overflow-hidden rounded-full bg-green-500"></div>
            <div className="flex shrink-0 justify-start text-xs font-semibold">
              <p>
                Available <span className="hidden sm:inline">for new opportunities</span>
              </p>
            </div>
          </motion.div>
        </Link>
      </div>

      {EXPERIENCE_DATA.filter(experience => experience.featured).map(experience => (
        <ExperienceCardV1
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
          headingTags={experience.headingTags}
        />
      ))}
    </div>
  );
}
