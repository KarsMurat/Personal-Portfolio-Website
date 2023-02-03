import Image from "next/image";
import Link from "next/link";
import {
  Avatar,
  Info,
  Name,
  SocialMedia,
  Title,
  SecretTitle,
} from "@/constants/personalCard";

const Divider = () => <div className="h-1 w-full rounded-full bg-zinc-800" />;

function PersonalCard() {
  return (
    <div className="m-4 grid w-56 cursor-default grid-cols-1 place-content-between justify-items-center space-y-7 rounded-3xl border-2 border-zinc-800 bg-zinc-900 p-4 text-white shadow-lg shadow-black ">
      <div className="grid grid-cols-1 place-content-between justify-items-center space-y-5">
        <Image
          className="rounded-3xl shadow-md shadow-black"
          src={Avatar}
          width={175}
          height={175}
          alt="img/myAvatar"
        />
        <div className="space-y-5">
          <div className="grid justify-items-center text-4xl">{Name}</div>
          <div className="group grid cursor-pointer grid-cols-1 -space-y-7 group-hover:last:-space-y-20 ">
            <div className="z-10 grid justify-items-center rounded-md bg-zinc-700 p-1 px-3 text-sm text-neutral-200 shadow-inner shadow-black">
              {SecretTitle}
            </div>
            <div className="z-20 grid justify-items-center rounded-md bg-zinc-800 p-1 px-3 text-sm text-neutral-200 shadow-md duration-500 group-hover:my-2 group-hover:shadow-black">
              {Title}
            </div>
            <div className="z-30 grid justify-items-center rounded-md bg-zinc-800 p-1 px-3 text-sm text-neutral-200 delay-300 group-hover:-z-10 group-hover:delay-100">
              Junior
            </div>
          </div>
        </div>
        <Divider />
      </div>
      <div className="grid grid-cols-1 space-y-3">
        {Info.map((item) => {
          const { title, desc, icon } = item;

          return (
            <div
              key={title}
              className="flex items-center justify-items-center space-x-3"
            >
              <Image
                className="rounded-md"
                src={icon}
                width={40}
                height={40}
                alt={icon}
              />
              <div className="flex flex-col">
                <p className="text-zinc-400">{title}</p>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Divider />
      <nav className="flex space-x-3">
        {SocialMedia.map((item) => {
          const { title, url, icon } = item;

          return (
            <Link key={title} href={url} target="_blank">
              <Image
                className="rounded-3xl"
                src={icon}
                width={20}
                height={20}
                alt={title}
              />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default PersonalCard;
