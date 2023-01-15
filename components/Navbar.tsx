import Link from "next/link";

const NavbarItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <div>
      {NavbarItems.map((item) => (
        <Link href={item.path} key={item.name}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
