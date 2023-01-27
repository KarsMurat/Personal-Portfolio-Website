export default function CertificatesLayout({
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
          <p>My certificates</p>
          <Divide />
        </div>
        <div className="mt-5 inline-block h-full w-full py-5">
          {children}
        </div>
      </div>
    </section>
  );
}
