import { Text, Divider } from "@mantine/core";

interface PageProps {
  title: string;
  position?: "left" | "right";
}

export default function PageHeader({ position = "right", title }: PageProps) {
  return (
    <Divider
      mb="xl"
      size="md"
      labelPosition={position}
      label={
        <Text fw="bold" c="blue.5" className="text-5xl md:text-6xl">
          {title}
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
  );
}
