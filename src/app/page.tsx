import { Button, Stack, Text } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Stack>
      <Text size="80px">Hi, I&apos;m Leonard.</Text>
      <p>In progress... </p>
      <Button component={Link} href="/projects">
        PROCEED TO PROJECTS PAGE.
      </Button>
    </Stack>
  );
}
