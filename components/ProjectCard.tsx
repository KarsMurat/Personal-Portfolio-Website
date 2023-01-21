import Image from "next/image";
import Link from "next/link";
import myAvatar from "../public/img/myAvatar.png";

const ProjectsPath = "projects";
const Projects = [
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat asperiores magnam, distinctio, explicabo cumque nobis commodi rerum soluta eum eius fugit consequatur totam cupiditate quam quaerat quasi. Ipsum, eum quo!",
    path: `${ProjectsPath}/1`,
    link: [
      {
        name: "Github",
        icon: myAvatar,
        url: "https://github.com/KarsMurat",
      },
      {
        name: "Website",
        icon: myAvatar,
        url: "https://www.muratkars.live",
      },
    ],
    img: myAvatar,
    tools: [
      {
        name: "React",
        icon: myAvatar,
      },
      { name: "Babel", icon: myAvatar },
      { name: "TypeScript", icon: myAvatar },
      { name: "Webpack", icon: myAvatar },
      { name: "NPM", icon: myAvatar },
      { name: "Lerna", icon: myAvatar },
      { name: "Monaco Editor", icon: myAvatar },
    ],
  },
  {
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate praesentium alias magnam nam doloribus! Odio distinctio enim eum vero voluptatibus iste atque recusandae ratione, beatae, possimus assumenda eaque. Molestias.",
    path: `${ProjectsPath}/2`,
    link: [
      {
        name: "Github",
        icon: myAvatar,
        url: "https://github.com/KarsMurat",
      },
      {
        name: "Website",
        icon: myAvatar,
        url: "https://www.muratkars.live",
      },
    ],
    img: myAvatar,
    tools: [
      {
        name: "React",
        icon: myAvatar,
      },
      { name: "TypeScript", icon: myAvatar },
      { name: "NPM", icon: myAvatar },
      { name: "Lerna", icon: myAvatar },
      { name: "Monaco Editor", icon: myAvatar },
    ],
  },
  {
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est, aperiam laudantium cumque reiciendis dolorem eaque adipisci unde autem, magni totam sequi praesentium architecto esse voluptatum aspernatur minima, illo ullam!",
    path: `${ProjectsPath}/3`,
    link: [
      {
        name: "Github",
        icon: myAvatar,
        url: "https://github.com/KarsMurat",
      },
      {
        name: "Website",
        icon: myAvatar,
        url: "https://www.muratkars.live",
      },
    ],
    img: myAvatar,
    tools: [
      {
        name: "Webpack",
        icon: myAvatar,
      },
      { name: "NPM", icon: myAvatar },
      { name: "Lerna", icon: myAvatar },
      { name: "Monaco Editor", icon: myAvatar },
    ],
  },
  {
    title: "Project 4",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi libero qui autem cumque necessitatibus mollitia laudantium dicta porro impedit! Ullam provident ab quaerat et officiis, omnis maiores consectetur dignissimos quos.",
    path: `${ProjectsPath}/4`,
    link: [
      {
        name: "Github",
        icon: myAvatar,
        url: "https://github.com/KarsMurat",
      },
      {
        name: "Website",
        icon: myAvatar,
        url: "https://www.muratkars.live",
      },
    ],
    img: myAvatar,
    tools: [
      {
        name: "React",
        icon: myAvatar,
      },
      { name: "Webpack", icon: myAvatar },
      { name: "Monaco Editor", icon: myAvatar },
    ],
  },
  {
    title: "Project 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat asperiores magnam, distinctio, explicabo cumque nobis commodi rerum soluta eum eius fugit consequatur totam cupiditate quam quaerat quasi. Ipsum, eum quo!",
    path: `${ProjectsPath}/5`,
    link: [
      {
        name: "Github",
        icon: myAvatar,
        url: "https://github.com/KarsMurat",
      },
      {
        name: "Website",
        icon: myAvatar,
        url: "https://www.muratkars.live",
      },
    ],
    img: myAvatar,
    tools: [
      {
        name: "React",
        icon: myAvatar,
      },
      { name: "Babel", icon: myAvatar },
      { name: "Monaco Editor", icon: myAvatar },
      { name: "Lerna", icon: myAvatar },
    ],
  },
];

export default function ProjectCard() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-6 p-6">
      {Projects.map((project, index) => {
        const { title, desc, path, img, tools } = project;

        return (
          <div
            key={index}
            className="relative mx-auto flex max-h-fit max-w-md items-center overflow-visible rounded-xl bg-zinc-900 shadow-md shadow-black
              ring-2 ring-zinc-800 duration-300 hover:scale-95 hover:ring-1 hover:ring-white"
          >
            <Link
              href={path}
              className="absolute -left-16 h-36 w-36 skew-x-6 overflow-hidden rounded-3xl border-2 border-zinc-800 duration-700 hover:skew-x-0 hover:scale-150 hover:border-0 hover:ring-1 hover:ring-white"
            >
              <Image
                src={img}
                alt={title}
                className="rounded-2xl shadow-sm shadow-black duration-700 hover:scale-150 hover:grayscale"
              />
            </Link>
            <div className="flex flex-col space-y-6 p-4 pl-24">
              <strong className="flex justify-center text-sm font-medium text-slate-200">
                {title}
              </strong>
              <span className="text-sm font-medium text-gray-500">
                {desc}
              </span>
              <div className="flex flex-wrap justify-center gap-1">
                {tools.map((project, index) => {
                  const { name, icon } = project;
                  return (
                    <div
                      key={index}
                      className="flex space-x-1 rounded-sm bg-zinc-700 px-2 py-1"
                    >
                      <span className="text-xs text-black">
                        {name}
                      </span>
                      <Image
                        src={icon}
                        alt={name}
                        height={20}
                        width={20}
                        className="rounded-full"
                      />
                    </div>
                  );
                })}
              </div>
              <span className="text-sm font-medium text-cyan-700">
                <div className="flex justify-end space-x-2">
                  {project.link.map((project, index) => {
                    const { icon, name, url } = project;

                    return (
                      <div
                        key={index}
                        className="flex space-x-1 rounded-full bg-zinc-800 px-2 py-1"
                      >
                        <Image
                          src={icon}
                          alt={name}
                          height={20}
                          width={20}
                          className="rounded-full"
                        />
                        <Link href={url}>{name}</Link>
                      </div>
                    );
                  })}
                </div>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
