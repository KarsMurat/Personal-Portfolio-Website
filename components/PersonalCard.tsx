import Image from "next/image";
import Link from "next/link";

function Divide() {
  return <div className="h-1 w-full rounded-full bg-zinc-900" />;
}

function PersonalCard() {
  return (
    <div className="m-4 grid grid-cols-1 place-content-between justify-items-center space-y-7 rounded-3xl bg-zinc-800 p-4 text-white shadow-sm shadow-black ">
      <div className="grid grid-cols-1 place-content-between justify-items-center space-y-5 py-2 px-8">
        <Image
          className="rounded-3xl shadow-md shadow-black"
          src={"/myAvatar.png"}
          width={175}
          height={175}
          alt="myAvatar"
        />
        <div className="space-y-5">
          <div className="text-4xl">Murat Kars</div>
          <div className="rounded-md bg-zinc-600 p-1 px-3 text-sm text-neutral-200 shadow-inner shadow-black">
            Junior Web Developer
          </div>
        </div>
      </div>
      <Divide />
      <div className="grid grid-cols-1 space-y-3">
        <div className="flex-col-2 flex items-center justify-items-center space-x-3">
          <Image
            className="rounded-md"
            src={"/myAvatar.png"}
            width={40}
            height={40}
            alt="myAvatar"
          />
          <div className="flex flex-col">
            <p className="text-zinc-400">Mail</p>
            <p>mail@mail.com</p>
          </div>
        </div>
        <div className="flex-col-2 flex items-center justify-items-center space-x-3">
          <Image
            className="rounded-md"
            src={"/myAvatar.png"}
            width={40}
            height={40}
            alt="myAvatar"
          />
          <div className="flex flex-col">
            <p className="text-zinc-400">Location</p>
            <p>Istanbul</p>
          </div>
        </div>
        <div className="flex-col-2 flex items-center justify-items-center space-x-3">
          <Image
            className="rounded-md"
            src={"/myAvatar.png"}
            width={40}
            height={40}
            alt="myAvatar"
          />
          <div className="flex flex-col">
            <p className="text-zinc-400">Local Time</p>
            <p>19:59 (UTC +03:00)</p>
          </div>
        </div>
      </div>
      <Divide />
      <div className="flex space-x-3">
        <Link href={"https://www.linkedin.com/in/KarsMurat/"}>
          <Image
            className="rounded-3xl"
            src={"/myAvatar.png"}
            width={20}
            height={20}
            alt="myAvatar"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/KarsMurat/"}>
          <Image
            className="rounded-3xl"
            src={"/myAvatar.png"}
            width={20}
            height={20}
            alt="myAvatar"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/KarsMurat/"}>
          <Image
            className="rounded-3xl"
            src={"/myAvatar.png"}
            width={20}
            height={20}
            alt="myAvatar"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/KarsMurat/"}>
          <Image
            className="rounded-3xl"
            src={"/myAvatar.png"}
            width={20}
            height={20}
            alt="myAvatar"
          />
        </Link>
      </div>
    </div>
  );
}
export default PersonalCard;
