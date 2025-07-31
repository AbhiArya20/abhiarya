"use client";

import LearningCard from "@/components/learnings/learnings-card";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { EXPERIENCE_DATA } from "@/data/experience";
import { track } from "@vercel/analytics";
import { motion } from "motion/react";
import Link from "next/link";

export default function Learnings() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-end justify-between">
        <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
          Recent Learnings
        </motion.h2>
        <Link
          href={`https://learnings.abhiarya.in`}
          className="hover:text-blue-400"
          target="_blank"
          rel="noopener"
          onClick={() => track("blog_more_clicked")}
        >
          <span className="sr-only">Recent Learnings</span>
          <motion.div variants={fadeDownChildVariants} className="flex flex-row items-center justify-start gap-2">
            <div className="flex shrink-0 justify-start text-xs font-semibold">See More</div>
          </motion.div>
        </Link>
      </div>

      {EXPERIENCE_DATA.filter(experience => experience.featured).map(experience => (
        <LearningCard
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
  );
}
