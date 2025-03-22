import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { SimpleGrid } from "@mantine/core";

export default function Projects() {
  const items = projects.map((project) => (
    <ProjectCard key={project.title} {...project} />
  ));

  return (
    <>
      <PageHeader title="Projects" />
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" pb={44}>
        {items}
      </SimpleGrid>
    </>
  );
}
