import ProjectsCardV1 from "@/components/sections/projects/projects-card-v1";
import FadeDown from "@/components/animation/fade-down";
import { PROJECT_DATA } from "@/data/projects";

export default function Projects() {
  const projectCards = [ProjectsCardV1];
  const SelectedProjectCard = projectCards[0];
  const projects = PROJECT_DATA.filter(project => project.featured);

  return (
    <FadeDown>
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold">Featured Projects</h2>
        {projects.map(project => (
          <SelectedProjectCard
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
    </FadeDown>
  );
}
