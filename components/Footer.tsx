export default function Footer() {
  function Divide() {
    return <div className="h-1 w-full rounded-full bg-zinc-800" />;
  }

  return (
    <div className="w-full text-zinc-400">
      <Divide />
      <div className="mt-6 grid justify-center text-zinc-400">
        Copyright
      </div>
    </div>
  );
}
