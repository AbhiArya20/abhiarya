"use client";

import LearningCard from "@/components/learnings/learnings-card";
import { LEARNINGS_DATA } from "@/data/learnings";
import { track } from "@vercel/analytics";
import Link from "next/link";

export default function Learnings() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-end justify-between">
        <h2 className="font-semibold">Recent Learnings</h2>
        <Link
          href={`https://learnings.abhiarya.in`}
          className="hover:text-blue-400"
          target="_blank"
          rel="noopener"
          onClick={() => track("blog_more_clicked")}
        >
          <span className="sr-only">Recent Learnings</span>
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="flex shrink-0 justify-start text-xs font-semibold">See More</div>
          </div>
        </Link>
      </div>

      {LEARNINGS_DATA.map(experience => (
        <LearningCard
          key={experience.title}
          title={experience.title}
          description={experience.description}
          date={experience.date}
          url={experience.url}
          image={experience.image}
          icon={experience.icon}
        />
      ))}
    </div>
  );
}
