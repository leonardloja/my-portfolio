import { Center, Image, List, ListItem, Text } from "@mantine/core";
import {
  IconInnerShadowBottomFilled,
  IconInnerShadowBottomLeftFilled,
} from "@tabler/icons-react";

interface ModalContentProps {
  description: string;
}

export default function ModalContent({ description }: ModalContentProps) {
  return (
    <>
      <Center>
        <Image
          radius="md"
          h={200}
          w="auto"
          fit="contain"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
          alt="project logo"
        />
      </Center>
      <Text c="dimmed" fz="sm" mt="md">
        {description}
      </Text>
      <List
        mt="md"
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
