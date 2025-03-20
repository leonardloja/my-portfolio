import { Text } from "@mantine/core";

export default function ModalHeader({ title }: { title: string }) {
  return (
    <Text
      variant="gradient"
      gradient={{ from: "blue", to: "cyan", deg: 90 }}
      fw="bold"
      className="text-4xl"
    >
      {title}
    </Text>
  );
}
