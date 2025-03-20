"use client";

import { Carousel, CarouselSlide } from "@mantine/carousel";
import {
  Anchor,
  Card,
  CardSection,
  Group,
  Image,
  List,
  ListItem,
  Modal,
  RingProgress,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconInnerShadowBottomFilled,
  IconInnerShadowBottomLeftFilled,
  IconLink,
  IconTools,
} from "@tabler/icons-react";

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
            height={350}
            mb="md"
            slideGap="sm"
            loop
            align="center"
            slideSize="80%"
          >
            {images.map((image, idx) => {
              console.log(image);
              return (
                <CarouselSlide key={image + idx}>
                  <Image
                    src={image}
                    alt="project image preview"
                    mb="md"
                    onClick={open}
                  />
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
                  <IconLink stroke={1.5} />
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

function ModalHeader({ title }: { title: string }) {
  return (
    <Text
      variant="gradient"
      gradient={{ from: "blue", to: "cyan", deg: 90 }}
      fw="bold"
      fz="h2"
    >
      {title}
    </Text>
  );
}

function ModalContent({ description }: { description: string }) {
  return (
    <>
      <Group justify="space-between" mb="xs"></Group>
      <Text c="dimmed" fz="sm" mb="md">
        {description}
      </Text>
      <List
        spacing="xs"
        size="sm"
        center
        icon={<IconInnerShadowBottomLeftFilled size={14} />}
      >
        <ListItem>Test 1</ListItem>
        <List
          mt={10}
          withPadding
          spacing="xs"
          size="sm"
          center
          listStyleType="disc"
          icon={<IconInnerShadowBottomFilled size={14} />}
        >
          <ListItem>Test 1</ListItem>
          <ListItem>Test 1</ListItem>
          <ListItem>Test 1</ListItem>
        </List>
        <ListItem>Test 1</ListItem>
      </List>
    </>
  );
}
