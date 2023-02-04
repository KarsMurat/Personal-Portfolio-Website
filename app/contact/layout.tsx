import { HeaderContact } from "@/constants/header/contact";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function Divide() {
    return <div className="h-1 w-1/4 rounded-full bg-zinc-800" />;
  }

  return (
    <div className="static">
      <header className="static -ml-3 text-3xl font-bold text-white">
        <h1>{HeaderContact.contact.header}</h1>
        <Divide />
      </header>
      <main className="mt-5 inline-block h-full w-full py-5">{children}</main>
    </div>
  );
}
