import Link from "next/link";

const NavbarItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <div className="space-x-4 bg-zinc-500 m-4 p-1 px-3 rounded-md">
      {NavbarItems.map((item) => (
        <Link href={item.path} key={item.name}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
