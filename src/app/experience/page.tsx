import PageHeader from "@/components/PageHeader";
import { Text, Timeline, TimelineItem } from "@mantine/core";
import {
  IconBriefcase2,
  IconPointerQuestion,
  IconSearch,
} from "@tabler/icons-react";

export default function Experience() {
  return (
    <>
      <PageHeader title="Experience" position="left" />

      <div className="mt-3 flex justify-center md:max-w-[85%]">
        <Timeline
          active={1}
          reverseActive
          bulletSize={32}
          lineWidth={4}
          className="text-xl"
        >
          <TimelineItem bullet={<IconPointerQuestion size={16} />} title="...">
            <Text c="dimmed" size="lg" fs="italic">
              Company
            </Text>

            <Text c="dimmed" size="md" mt={4}>
              description
            </Text>
            <Text size="sm" mt={4}>
              Year
            </Text>
          </TimelineItem>

          <TimelineItem
            bullet={<IconSearch size={16} />}
            title="Looking for a Job"
          >
            <Text c="dimmed" size="lg" fs="italic">
              Company
            </Text>

            <Text c="dimmed" size="md" mt={4}>
              description
            </Text>
            <Text size="sm" mt={4}>
              2025
            </Text>
          </TimelineItem>

          <TimelineItem
            bullet={<IconBriefcase2 size={16} />}
            title="Software Developer Intern"
          >
            <Text c="dimmed" size="lg" fs="italic">
              Provincial Government of Davao del Norte
            </Text>

            <Text c="dimmed" size="md" mt={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias
              quod velit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolore, iusto?
            </Text>
            <Text size="sm" mt={4}>
              2024
            </Text>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}
