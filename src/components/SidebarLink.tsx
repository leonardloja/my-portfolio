import Link from "next/link";

interface SidebarLinkProps {
  name: string;
  href: string;
}

export default function SidebarLink({ name, href: path }: SidebarLinkProps) {
  return (
    <div className="flex items-center justify-center border-r-3 border-transparent hover:border-r-3 hover:border-purple-300 py-1">
      <Link className="[writing-mode:sideways-lr]" href={path}>
        {name}
      </Link>
    </div>
  );
}
