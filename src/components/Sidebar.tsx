import { ColorSchemeToggle } from "./ColorSchemeToggle";
import SidebarLink from "./SidebarLink";
import Image from "next/image";

export default function Sidebar() {
  return (
    <nav className="w-[68px] h-screen border-r-2 border-gray-400 dark:border-gray-100/10">
      <div className="flex items-center justify-center mt-1.5">
        <Image src="/images/favicon.png" width={34} height={34} alt="logo" />
      </div>
      <div className="flex flex-col gap-2 mt-1.5">
        <SidebarLink name={"About"} href={"/"} />
        <SidebarLink name={"Projects"} href={"/projects"} />
        <SidebarLink name={"Experience"} href={"/experience"} />
      </div>
      <div className="flex items-center justify-center mt-2">
        <ColorSchemeToggle />
      </div>
    </nav>
  );
}
