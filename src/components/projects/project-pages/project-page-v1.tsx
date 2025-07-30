"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProjectCardV1 from "@/components/projects/project-cards/projects-card-v1";
import ThemeSwitcherV1 from "@/components/theme-switcher/theme-switcher-v1";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import FadeDown from "@/components/animation/fade-down";
import ContactV1 from "@/components/contact/contact-v1";
import FooterV1 from "@/components/footer/footer-v1";
import { PROJECT_DATA } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPageV1() {
  return (
    <FadeDown>
      <motion.div variants={fadeDownChildVariants} className="flex items-start justify-between">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <ThemeSwitcherV1 />
      </motion.div>
      <div className="flex flex-col gap-8">
        <motion.h1 variants={fadeDownChildVariants} className="scroll-m-20 text-4xl font-bold tracking-tight">
          All Projects
        </motion.h1>
        <div className="space-y-3 py-4">
          {PROJECT_DATA.map(project => (
            <ProjectCardV1
              key={project.name}
              name={project.name}
              description={project.description}
              icon={project.icon}
              image={project.image}
              screenshot={project.screenshot}
              url={project.url}
              tags={project.tags}
              github={project.github}
              featured={project.featured}
            />
          ))}
        </div>
        <ContactV1 />
        <FooterV1 />
      </div>
    </FadeDown>
  );
}
