import Link from "next/link";

const NavbarItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <div className="m-4 space-x-4 rounded-md border-2 border-zinc-700 bg-zinc-800 p-1 px-3 text-zinc-400 shadow-md shadow-black">
      {NavbarItems.map((item) => (
        <Link href={item.path} key={item.name}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
