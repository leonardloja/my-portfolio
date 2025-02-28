import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Divider, SimpleGrid, Text } from "@mantine/core";

export default function Projects() {
  const items = projects.map((project) => (
    <ProjectCard key={project.title} {...project} />
  ));
  return (
    <>
      <Divider
        mb="xl"
        size="md"
        labelPosition="right"
        label={
          <Text fw="bold" c="teal.5" size="64px">
            Projects
            <Text component="span" fw="bold" c="blue.5" size="64px">
              .
            </Text>
          </Text>
        }
      />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {items}
      </SimpleGrid>
    </>
  );
}
