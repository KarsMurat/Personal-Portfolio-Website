export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function Divide() {
    return <div className="h-1 w-auto rounded-full bg-zinc-800" />;
  }

  return (
    <section>
      <div className="static">
        <div className="static -mt-3 -ml-3 text-3xl text-zinc-400">
          <p>My projects</p>
          <Divide />
        </div>
        <div className="mt-5 inline-block">{children}</div>
      </div>
    </section>
  );
}
