"use client";

import { track } from "@vercel/analytics";
import { motion } from "motion/react";
import Link from "next/link";
import { ExperienceCard } from "@/components/experience/experience-card";
import { EXPERIENCE_DATA } from "@/data/experience";
import { PERSONAL_DATA } from "@/data/personal";
import { SOCIAL_DATA } from "@/data/social";
import { fadeDownChildVariants } from "@/lib/animation-variants";

export function Experience() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
          Experience
        </motion.h2>
        <Link
          href={
            SOCIAL_DATA.find((social) => social.name.toLowerCase() === "x")
              ?.url ?? `https://github.com/${PERSONAL_DATA.github}`
          }
          rel="noopener"
          target="_blank"
          className="hover:text-blue-400"
          onClick={() => track("available_for_new_opportunities_clicked")}
        >
          <motion.div
            variants={fadeDownChildVariants}
            className="flex flex-row items-center justify-start gap-1 hover:text-blue-400"
          >
            <div className="size-2 flex-none overflow-hidden rounded-full bg-green-500"></div>
            <div className="flex shrink-0 justify-start text-xs font-semibold">
              <p>
                Available{" "}
                <span className="hidden sm:inline">for new opportunities</span>
              </p>
            </div>
          </motion.div>
        </Link>
      </div>

      {EXPERIENCE_DATA.filter((experience) => experience.featured).map(
        (experience) => (
          <ExperienceCard
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
          />
        ),
      )}
    </div>
  );
}
