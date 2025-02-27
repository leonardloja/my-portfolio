import ProjectCard, { Project } from "@/components/ProjectCard";
import { Divider, SimpleGrid, Text } from "@mantine/core";

const projects: Project[] = [
  {
    title: "Podcastify",
    description:
      "llorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    techStack: ["Next.js", "Typescript", "Mantine"],
    link: "https://www.google.com",
    completed: false,
  },
  {
    title: "My Portfolio",
    description:
      "llorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    techStack: ["Next.js", "Typescript", "Mantine", "Tailwind"],
    link: "https://www.google.com",
    completed: false,
  },
  {
    title: "Filio",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor silorem ipsum dolor sit amet lorem ipsum dolor sit amet t amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    techStack: ["VB.NET", "Winforms", "Guna Framework", "MySQL"],
    link: "https://www.google.com",
    completed: true,
  },
  {
    title: "Animeo",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor silorem ipsum dolor sit amet lorem ipsum dolor sit amet t amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    techStack: ["Flutter", "Dart", "GetX", "SQLite"],
    link: "https://github.com/leonardloja/animeo",
    completed: true,
  },
  {
    title: "EasyTask",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor silorem ipsum dolor sit amet lorem ipsum dolor sit amet t amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    techStack: ["Angular", "PrimeNG"],
    link: "https://www.google.com",
    completed: true,
  },
  {
    title: "Barangay Management System",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor silorem ipsum dolor sit amet lorem ipsum dolor sit amet t amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    techStack: ["VB.NET", "Winforms", "Guna Framework", "MySQL"],
    link: "https://www.google.com",
    completed: true,
  },
  {
    title: "Dwello (web)",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor silorem ipsum dolor sit amet lorem ipsum dolor sit amet t amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    techStack: ["Next.js", "Typescript", "Clerk Auth", "Supabase"],
    link: "https://www.google.com",
    completed: true,
  },
  {
    title: "Dwello (mobile)",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor silorem ipsum dolor sit amet lorem ipsum dolor sit amet t amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    techStack: ["VB.NET", "Winforms"],
    link: "https://www.google.com",
    completed: true,
  },
  {
    title: "Copra Classifier",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor silorem ipsum dolor sit amet lorem ipsum dolor sit amet t amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    techStack: ["Flutter", "Pytorch Lite"],
    link: "https://www.google.com",
    completed: true,
  },
];

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
