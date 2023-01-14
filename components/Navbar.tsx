import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <div>Projects</div>
          </Link>
        </li>
        <li>
          <Link href="/certificates">
            <div>Certificates</div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div>Contact</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
