"use client";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

import { IconMoon, IconSun } from "@tabler/icons-react";

export const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      aria-label="Toggle color scheme"
      className="border-none bg-transparent"
    >
      <IconSun className="hidden h-2.5 w-2.5 dark:block" stroke={1.5} />
      <IconMoon className="block h-2.5 w-2.5 dark:hidden" stroke={1.5} />
    </ActionIcon>
  );
};
