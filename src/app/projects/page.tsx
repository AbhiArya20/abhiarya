import FadeDown from "@/components/animation/fade-down";
import ProjectsPage from "@/components/projects";

export const metadata = {
  title: "Projects",
  description:
    "A collection of projects I’ve built and am proud of, including Coderoom, Meeting-Room, and more, each reflecting my growth, creativity, and problem-solving skills.",
};

const ProjectPage = () => {
  return (
    <FadeDown>
      <ProjectsPage />
    </FadeDown>
  );
};

export default ProjectPage;
