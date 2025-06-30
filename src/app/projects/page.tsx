import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProjectCard } from "@/components/sections/projects/projects-v1";
import { ModeToggle } from "@/components/theme-switcher/mode-toggle";
import Contact from "@/components/sections/contact/contact";
import { PROJECT_DATA } from "@/data/projects";
import Link from "next/link";

export const metadata = {
  title: "Projects",
};

const ProjectPage = () => {
  return (
    <div>
      <div className="flex items-start justify-between">
        <Breadcrumb className="mb-4 px-4">
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
        <ModeToggle />
      </div>
      <h1 className="scroll-m-20 px-4 text-4xl font-bold tracking-tight">All Projects</h1>
      <div className="space-y-3 pt-12">
        {PROJECT_DATA.map(project => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            icon={project.icon}
            image={project.image}
            url={project.url}
            tags={project.tags}
            github={project.github}
            featured={project.featured}
          />
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default ProjectPage;
