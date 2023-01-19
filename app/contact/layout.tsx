export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function Divide() {
    return <div className="h-1 w-1/4 rounded-full bg-zinc-800" />;
  }

  return (
    <section>
      <div className="static">
        <div className="static -mt-3 -ml-3 text-3xl font-bold text-white">
          <p>Contact with me</p>
          <Divide />
        </div>
        <div className="mt-5 inline-block">{children}</div>
      </div>
    </section>
  );
}
