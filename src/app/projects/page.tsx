import { SimpleGrid, Skeleton, Text } from "@mantine/core";

const PRIMARY_COL_HEIGHT = "300px";

export default function Projects() {
  return (
    <>
      <Text mb={20}>Projects</Text>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      </SimpleGrid>
    </>
  );
}
