"use client";

import { Carousel, CarouselSlide } from "@mantine/carousel";
import {
  Anchor,
  Card,
  CardSection,
  Group,
  Image,
  Modal,
  RingProgress,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title={title}
        overlayProps={{ backgroundOpacity: 0.45, blur: 3 }}
        centered
      >
        <Group justify="space-between" mb="xs">
          <Text fz="md" fw={500}>
            Detailed Description
          </Text>
        </Group>
        <Text c="dimmed" fz="sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          quas, tempore eaque totam error maxime cum deleniti ipsum perspiciatis
          similique soluta, recusandae nihil inventore facilis! Aperiam, magni
          porro commodi maiores, excepturi veniam, obcaecati quia laudantium
          nemo id minus. Voluptate, maiores?
        </Text>
      </Modal>

      {/* Card */}
      <Card withBorder padding="lg" className={""}>
        <CardSection>
          <Carousel
            height={350}
            mb="md"
            slideGap="sm"
            loop
            align="center"
            slideSize="80%"
          >
            <CarouselSlide>
              <Image
                src="https://placehold.co/100"
                alt="Running challenge"
                mb="md"
                onClick={open}
              />
            </CarouselSlide>
            <CarouselSlide>
              <Image
                src="https://placehold.co/100"
                alt="Running challenge"
                mb="md"
                onClick={open}
              />
            </CarouselSlide>{" "}
            <CarouselSlide>
              <Image
                src="https://placehold.co/100"
                alt="Running challenge"
                mb="md"
                onClick={open}
              />
            </CarouselSlide>
            {/* ...other slides */}
          </Carousel>
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
                  sections={[{ value: 40, color: "teal" }]}
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
        <Text component="span" mb="md" c="" fz="sm" lineClamp={3}>
          {description}
        </Text>
        <Anchor mb="md" onClick={open}>
          Learn more &rarr;
        </Anchor>
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
