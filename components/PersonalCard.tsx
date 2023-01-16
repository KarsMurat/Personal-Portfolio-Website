import Image from "next/image";
import Link from "next/link";

export default function PersonalCard() {
  return (
    <div className="bg-zinc-800 m-4 p-4 rounded-3xl text-white justify-items-center space-y-7 place-content-between grid grid-cols-1 shadow-sm shadow-black ">
      <div className="grid grid-cols-1 space-y-5 py-4 px-8 place-content-between justify-items-center">
        <Image
          className="rounded-3xl shadow-md shadow-black"
          src={"/myAvatar.png"}
          width={175}
          height={175}
          alt="myAvatar"
        />
        <div className="text-4xl">Murat Kars</div>
        <div className="bg-zinc-600 shadow-inner shadow-black p-1 px-3 rounded-md text-sm text-neutral-200">
          Junior Web Developer
        </div>
      </div>
      <div className="grid grid-cols-1 space-y-3">
        <div className="flex space-x-3">
          <Image
            className="rounded-md"
            src={"/myAvatar.png"}
            width={20}
            height={20}
            alt="myAvatar"
          />
          <div className="grid grid-cols-1">
            <p className="text-zinc-400">Mail</p>
            <p>mail@mail.com</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Image
            className="rounded-md"
            src={"/myAvatar.png"}
            width={20}
            height={20}
            alt="myAvatar"
          />
          <div className="grid grid-cols-1">
            <p className="text-zinc-400">Location</p>
            <p>Istanbul</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-3">
        <Link href={"https://www.linkedin.com/in/KarsMurat/"}>
          <Image
            className="rounded-3xl "
            src={"/myAvatar.png"}
            width={20}
            height={20}
            alt="myAvatar"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/KarsMurat/"}>
          <Image
            className="rounded-3xl "
            src={"/myAvatar.png"}
            width={20}
            height={20}
            alt="myAvatar"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/KarsMurat/"}>
          <Image
            className="rounded-3xl "
            src={"/myAvatar.png"}
            width={20}
            height={20}
            alt="myAvatar"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/KarsMurat/"}>
          <Image
            className="rounded-3xl "
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
