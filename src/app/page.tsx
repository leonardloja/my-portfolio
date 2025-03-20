import { learningIcons, techIcons } from "@/data/icons";
import {
  Button,
  Center,
  Grid,
  GridCol,
  Image,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  const icon = <IconChevronRight />;
  return (
    <div className="flex h-full flex-col items-center justify-start pt-2 md:justify-center md:pt-0">
      <Grid
        className="bg-amber-200- gap-[100px]"
        justify="center"
        gutter={{ base: 50, md: 0 }}
        align="center"
      >
        <GridCol span="auto" order={{ base: 2, md: 1 }} pr={50}>
          <Text
            fw={700}
            variant="gradient"
            gradient={{ from: "blue", to: "teal", deg: 90 }}
            className="text-6xl md:text-7xl"
          >
            Hi, I&apos;m Leonard.
          </Text>
          <div className="mt-1.5 space-y-1.5">
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo rem
              vel repellat rerum pariatur quam praesentium neque repellendus
              autem mollitia. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Animi earum maxime temporibus nulla rerum unde.
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo rem
              vel repellat rerum pariatur quam praesentium neque repellendus
              autem mollitia. Lorem ipsum dolor sit amet.
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo rem
              vel repellat rerum pariatur quam praesentium neque repellendus
              autem mollitia.
            </Text>
          </div>
          <Button
            component={Link}
            href="/projects"
            rightSection={icon}
            variant="light"
            className="mt-2"
          >
            Explore My Projects
          </Button>
          <div className="mt-3 flex flex-col md:hidden">
            <Technologies />
          </div>
        </GridCol>
        <GridCol span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
          <Center>
            <Image
              className="rotate-2"
              radius="md"
              h="auto"
              w={{ base: 500, md: 900 }}
              fit="contain"
              // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
              src="/images/avatar.png"
              alt="project logo"
            />
          </Center>
          <div className="mt-3 hidden flex-col md:flex">
            <Technologies />
          </div>
        </GridCol>
      </Grid>
    </div>
  );
}

function Technologies() {
  return (
    <>
      <Text className="text-lg font-medium tracking-widest uppercase">
        Technologies
      </Text>
      <div className="mt-0.5 flex flex-wrap gap-0.5">
        {techIcons.map(({ label, icon: Icon }) => (
          <Tooltip label={label} color="teal" withArrow key={label}>
            <Icon size={40} stroke={1} className="hover:translate-y-[2px]" />
          </Tooltip>
        ))}
      </div>
      <Text className="mt-2 text-lg font-medium tracking-widest uppercase">
        Learning
      </Text>
      <div className="mt-0.5 flex">
        {learningIcons.map(({ label, icon: Icon }) => (
          <Tooltip label={label} color="teal" withArrow key={label}>
            <Icon size={40} stroke={1} className="hover:translate-y-[2px]" />
          </Tooltip>
        ))}
      </div>
    </>
  );
}
