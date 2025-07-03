import { ProjectsV2 } from "@/components/sections/projects/projects-v2";
import { ProjectsV1 } from "@/components/sections/projects/projects-v1";
import FadeDown from "@/components/animation/fade-down";

export default function Projects() {
  const projects = [ProjectsV1, ProjectsV2];
  const randomIndex = Math.floor(Math.random() * projects.length);
  const RandomProjects = projects[0];
  return (
    <FadeDown>
      <RandomProjects />
    </FadeDown>
  );
}
