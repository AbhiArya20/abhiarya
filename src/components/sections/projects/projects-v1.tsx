import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PROJECT_DATA, type Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsV1 = ({ onlyFeatured = false }: { onlyFeatured?: boolean }) => {
  const projects = onlyFeatured ? PROJECT_DATA.filter(project => project.featured) : PROJECT_DATA;

  return (
    <div className="animate-slide-from-down-and-fade-3 flex flex-col gap-3">
      <h2 className="font-semibold">Featured Projects</h2>
      {projects.map(project => (
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
  );
};

export const ProjectCard = ({ name, icon, description, image, url, tags, github }: Project) => {
  const Icon = Icons[icon!];
  return (
    <Card className="group bg-accent/60 rounded-none border-none from-neutral-800/10 p-4 sm:rounded-lg dark:bg-neutral-900 dark:hover:bg-gradient-to-bl">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-2">
            {icon && <Icon className="h-12 w-12 shrink-0 transition-all group-hover:saturate-100 sm:saturate-0" />}
            {image && (
              <Image
                src={image}
                width={64}
                height={64}
                alt="fds"
                className="h-12 w-auto shrink-0 transition-all group-hover:saturate-100 sm:saturate-0"
              />
            )}
            <div>
              <h3>{name}</h3>
              {description.length > 0 && <p className="text-muted-foreground text-sm">{description[0]}</p>}
            </div>
          </div>
        </div>
        <div>
          {tags && (
            <ul className="mt-2 flex flex-wrap gap-1">
              {tags.map((tag, idx) => {
                const Icon = Icons[tag.icon];
                return (
                  <li key={idx}>
                    <Badge variant={"outline"}>
                      <Icon className="mr-1.5 h-3 w-3 transition-all group-hover:saturate-100 sm:saturate-0" />{" "}
                      {tag.name}
                    </Badge>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectsV1;
