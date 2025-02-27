"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  name: string;
  href: string;
}

export default function SidebarLink({ name, href }: SidebarLinkProps) {
  const currentPath = usePathname();

  return (
    <Link
      className={`flex items-center justify-center border-r-3 py-1 hover:border-r-3 hover:border-blue-700 hover:bg-gray-200 hover:dark:bg-gray-200/20 ${currentPath === href ? "border-blue-700 bg-gray-200 dark:bg-gray-200/20" : "border-transparent"}`}
      href={href}
    >
      <span className="text-md tracking-wide [writing-mode:sideways-lr]">
        {name}
      </span>
    </Link>
  );
}
