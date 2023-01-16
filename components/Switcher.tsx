export default function Switcher() {
  return (
    <div className="absolute bottom-0 right-0 animate-pulse cursor-pointer">
      <div
        className="h-0 w-0 rounded-tr-3xl rounded-bl-3xl
      border-l-[75px] border-b-[75px] border-r-[0px]
border-l-transparent border-b-zinc-700
border-r-transparent
"
      />
    </div>
  );
}
