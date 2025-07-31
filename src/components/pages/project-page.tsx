"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ThemeSwitcherCompact from "@/components/theme-switcher/theme-switcher-compact";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import ProjectCard from "@/components/projects/projects-card";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import { PROJECT_DATA } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
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
        <ThemeSwitcherCompact />
      </motion.div>
      <div className="flex flex-col gap-8">
        <motion.h1 variants={fadeDownChildVariants} className="scroll-m-20 text-4xl font-bold tracking-tight">
          All Projects
        </motion.h1>
        <div className="space-y-3 py-4">
          {PROJECT_DATA.map(project => (
            <ProjectCard
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
              className="bg-transparent dark:bg-transparent"
            />
          ))}
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}
