import Image from "next/image";
import Link from "next/link";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  return (
    <nav className="min-h-screen min-w-[68px] border-r-1 border-gray-300 dark:border-gray-100/20">
      <div className="flex flex-col justify-between h-full">
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
          </div>
        </div>

        <div className="mb-1 flex items-center justify-center">
          <ColorSchemeToggle />
        </div>
      </div>
    </nav>
  );
}
