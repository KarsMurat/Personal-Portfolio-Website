"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "@/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="m-4 space-x-4 rounded-tr-md rounded-bl-md border-2 border-zinc-800 bg-zinc-800 p-2 px-6 text-xl font-semibold text-zinc-400 shadow-inner shadow-black">
      {Navigation.map((item) => {
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
    </nav>
  );
}
