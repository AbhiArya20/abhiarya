import ProjectsPageV1 from "@/components/projects/project-page-v1";

export default function ProjectsPage() {
  const projectCards = [ProjectsPageV1];
  const SelectedProjectPage = projectCards[0];

  return <SelectedProjectPage />;
}
