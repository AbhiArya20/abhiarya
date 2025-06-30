import FadeDown from "@/components/animation/fade-down";
import ProjectsV1 from "./projects-v1";

export default function Projects() {
  const projects = [ProjectsV1];
  const randomIndex = Math.floor(Math.random() * projects.length);
  const RandomProjects = projects[randomIndex];
  return (
    <FadeDown>
      <RandomProjects />
    </FadeDown>
  );
}
