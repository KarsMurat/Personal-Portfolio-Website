export default function Switcher() {
  return (
    <div className="absolute -bottom-8 -right-8 m-4 animate-pulse cursor-pointer p-4">
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
