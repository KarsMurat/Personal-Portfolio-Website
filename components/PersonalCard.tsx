import Image from "next/image";
import Link from "next/link";

const loremIconInfo = "https://picsum.photos/100";
const loremIconSocial = "https://picsum.photos/90";

const Info = [
  { title: "Mail", desc: "mail@mail.com", icon: loremIconInfo },
  { title: "Location", desc: "Istanbul", icon: loremIconInfo },
  {
    title: "Local Time",
    desc: "19:59 (UTC +03:00)",
    icon: loremIconInfo,
  },
];

const SocialMedia = [
  {
    title: "Github",
    url: "https://www.muratkars.live/",
    icon: loremIconSocial,
  },
  {
    title: "LinkedIn",
    url: "https://www.muratkars.live/",
    icon: loremIconSocial,
  },
  {
    title: "Twitter",
    url: "https://www.muratkars.live/",
    icon: loremIconSocial,
  },
];

const Divider = () => (
  <div className="h-1 w-full rounded-full bg-zinc-800" />
);

function PersonalCard() {
  return (
    <div className="m-4 grid w-56 grid-cols-1 place-content-between justify-items-center space-y-7 rounded-3xl border-2 border-zinc-800 bg-zinc-900 p-4 text-white shadow-lg shadow-black ">
      <div className="grid grid-cols-1 place-content-between justify-items-center space-y-5">
        <Image
          className="rounded-3xl shadow-md shadow-black"
          src={"/img/myAvatar.png"}
          width={175}
          height={175}
          alt="img/myAvatar"
        />
        <div className="space-y-5">
          <div className="grid justify-items-center text-4xl">
            Murat Kars
          </div>
          <div className="group grid cursor-pointer grid-cols-1 -space-y-7">
            <div className="z-10 grid justify-items-center rounded-md bg-zinc-700 p-1 px-3 text-sm text-neutral-200 shadow-inner shadow-black">
              Fullstack Learner
            </div>
            <div className="z-20 grid justify-items-center rounded-md bg-zinc-800 p-1 px-3 text-sm text-neutral-200 shadow-md duration-500 group-hover:my-1 group-hover:shadow-black">
              Junior Web Developer
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
      <div className="flex space-x-3">
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
      </div>
    </div>
  );
}

export default PersonalCard;
