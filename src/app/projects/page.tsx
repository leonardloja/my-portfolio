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
          <Text fw="bold" c="blue.5" className="text-5xl md:text-6xl">
            Projects
            <Text
              component="span"
              fw="bold"
              c="teal.5"
              className="text-4xl sm:text-5xl md:text-6xl"
            >
              .
            </Text>
          </Text>
        }
      />
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        {items}
      </SimpleGrid>
    </>
  );
}
