import Image from "next/image";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import SidebarLink from "./SidebarLink";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="h-screen w-[68px] border-r-2 border-gray-400 dark:border-gray-100/10">
      <div className="mt-1.5 flex items-center justify-center">
        <Link href={"/"}>
          <Image src="/images/favicon.png" width={34} height={34} alt="logo" />
        </Link>
      </div>
      <div className="mt-1.5 flex flex-col">
        <SidebarLink name={"About"} href={"/"} />
        <SidebarLink name={"Projects"} href={"/projects"} />
        <SidebarLink name={"Experience"} href={"/experience"} />
      </div>
      <div className="mt-2 flex items-center justify-center">
        <ColorSchemeToggle />
      </div>
    </nav>
  );
}
