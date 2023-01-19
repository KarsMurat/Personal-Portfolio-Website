"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="m-4 space-x-4 rounded-tr-md rounded-bl-md border-2 border-zinc-800 bg-zinc-800 p-1 px-3 text-xl font-semibold text-zinc-400 shadow-inner shadow-black">
      {NavbarItems.map((item) => {
        const { name, path } = item;

        return (
          <Link
            href={path}
            key={name}
            className={`${pathname === path ? "text-white" : ""}`}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
