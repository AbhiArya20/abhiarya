"use client";

import ProjectCardV1 from "@/components/projects/project-cards/projects-card-v1";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { PROJECT_DATA } from "@/data/projects";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsV1() {
  const projects = PROJECT_DATA.filter(project => project.featured);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-end justify-between">
        <motion.h2 variants={fadeDownChildVariants} className="font-semibold">
          Featured Projects
        </motion.h2>
        <Link href={"/projects"} className="hover:text-blue-400" onClick={() => track("see_all_projects_clicked")}>
          <span className="sr-only">See all projects</span>
          <motion.div variants={fadeDownChildVariants} className="flex flex-row items-center justify-start gap-2">
            <div className="flex shrink-0 justify-start text-xs font-semibold">See More</div>
          </motion.div>
        </Link>
      </div>
      {projects.map(project => (
        <ProjectCardV1
          key={project.name}
          name={project.name}
          description={project.description}
          icon={project.icon}
          image={project.image}
          url={project.url}
          tags={project.tags}
          github={project.github}
          featured={project.featured}
          screenshot={project.screenshot}
        />
      ))}
    </div>
  );
}
