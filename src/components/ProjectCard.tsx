"use client";

import { Carousel, CarouselSlide } from "@mantine/carousel";
import {
  Anchor,
  Card,
  CardSection,
  Group,
  Modal,
  Paper,
  RingProgress,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLink, IconTools } from "@tabler/icons-react";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";

export interface Project {
  images: string[];
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  completed: boolean;
}

export default function ProjectCard({
  images,
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
        size="lg"
        opened={opened}
        onClose={close}
        title={<ModalHeader title={title} />}
        overlayProps={{ backgroundOpacity: 0.45, blur: 3 }}
        centered
        padding="lg"
      >
        <ModalContent description={description} />
      </Modal>

      {/* Card */}
      <Card withBorder padding="lg" className={""}>
        <CardSection>
          <Carousel
            mb="md"
            loop
            align="center"
            slideSize={{ base: "100%", sm: "70%", md: "80%" }}
            slideGap="sm"
          >
            {images.map((image, idx) => {
              console.log(image);
              return (
                <CarouselSlide key={image + idx}>
                  <Paper
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                    onClick={open}
                    className="h-24 bg-contain bg-center bg-no-repeat"
                  ></Paper>
                </CarouselSlide>
              );
            })}
          </Carousel>
        </CardSection>
        <Group align="center" justify="space-between" mb="md">
          <Group gap="xs" justify="center">
            <Text c="" fz="h3">
              {title}
            </Text>
            {link && (
              <div className="flex items-center justify-center">
                <a href={link} target="_blank">
                  <IconLink stroke={1.5} className="text-teal-500" />
                </a>
              </div>
            )}
          </Group>

          {completed || (
            <Group gap={5}>
              <Text fz="sm" c="dimmed">
                In progress
              </Text>
              <RingProgress
                size={22}
                thickness={2}
                sections={[{ value: 40, color: "teal" }]}
              />
            </Group>
          )}
        </Group>
        <Text
          component="span"
          mb="md"
          c=""
          fz="sm"
          lineClamp={3}
          className="flex-1"
        >
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
