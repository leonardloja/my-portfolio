"use client";

import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <nav className="hidden h-screen min-w-[68px] border-r-1 border-gray-300 sm:block dark:border-gray-100/20">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="mt-1.5 flex items-center justify-center">
              <Link href={"/"}>
                <Image
                  src="/images/favicon.png"
                  width={34}
                  height={34}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="mt-1.5 flex flex-col">
              <SidebarLink name={"About"} href={"/"} />
              <SidebarLink name={"Projects"} href={"/projects"} />
              <SidebarLink name={"Experience"} href={"/experience"} />
              <SidebarLink name={"Books"} href={"/books"} />
            </div>
          </div>

          <div className="mb-1 flex items-center justify-center">
            <ColorSchemeToggle />
          </div>
        </div>
      </nav>
      {/* Mobile */}
      <nav className="scroll-smoothi flex items-center justify-between p-2 sm:hidden">
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <Image
              src="/images/favicon.png"
              width={34}
              height={34}
              alt="logo"
            />
          </Link>
        </div>
        <div className="cursor-pointer">
          <Burger
            opened={opened}
            onClick={open}
            size="md"
            lineSize={2}
            aria-label="Toggle navigation"
            className="text-red-500"
          />
        </div>
      </nav>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        title={<ColorSchemeToggle />}
        size="xs"
        transitionProps={{
          transition: "rotate-right",
          duration: 150,
          timingFunction: "linear",
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <SidebarLink name={"About"} href={"/"} />
          <SidebarLink name={"Projects"} href={"/projects"} />
          <SidebarLink name={"Experience"} href={"/experience"} />
          <SidebarLink name={"Books"} href={"/books"} />
        </div>
      </Drawer>
    </>
  );
}
