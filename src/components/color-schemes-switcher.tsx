"use client";

import { useMantineColorScheme, Button, Group } from "@mantine/core";

export function ColorSchemesSwitcher() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme("light")}>Light</Button>
      <Button onClick={() => setColorScheme("dark")}>Dark</Button>
    </Group>
  );
}
