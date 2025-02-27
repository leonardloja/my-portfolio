import {
  Card,
  CardSection,
  Group,
  Image,
  RingProgress,
  Text,
} from "@mantine/core";
import { IconLink, IconTools } from "@tabler/icons-react";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  completed: boolean;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  link,
  completed,
}: Project) {
  return (
    <>
      <Card withBorder padding="lg" className={""}>
        <CardSection>
          <Image
            src="https://placehold.co/100"
            alt="Running challenge"
            mb="md"
          />
        </CardSection>

        <Group align="center" justify="space-between" mb="md">
          <Text c="" fz="h3">
            {title}
          </Text>
          <Group justify="space-between">
            {completed || (
              <Group gap={5}>
                <Text fz="xs" c="dimmed">
                  In progress
                </Text>
                <RingProgress
                  size={18}
                  thickness={2}
                  sections={[{ value: 40, color: "blue" }]}
                />
              </Group>
            )}
            <div className="flex items-center justify-center">
              <a href={link} target="_blank">
                <IconLink stroke={1.5} />
              </a>
            </div>
          </Group>
        </Group>

        <Text mb="md" c="" fz="sm">
          {description}...Learn more
        </Text>
        <CardSection withBorder p="lg">
          <Group>
            <IconTools stroke={1.5} />
            {techStack.map((tech) => (
              <Text fz="sm" c="dimmed" key={tech}>
                {tech}
              </Text>
            ))}
          </Group>
        </CardSection>
      </Card>
    </>
  );
}
