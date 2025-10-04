import ProjectsPage from "@/components/pages/project-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated collection of projects that highlight my growth, creativity, and problem-solving skills — each reflecting my technical expertise and dedication to building innovative solutions.",
};

const ProjectPage = () => {
  return <ProjectsPage />;
};

export default ProjectPage;
