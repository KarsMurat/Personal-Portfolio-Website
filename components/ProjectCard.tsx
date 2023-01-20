import Image from "next/image";
import Link from "next/link";
import myAvatar from "../public/img/myAvatar.png";

const ProjectsPath = "projects";
const Projects = [
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat asperiores magnam, distinctio, explicabo cumque nobis commodi rerum soluta eum eius fugit consequatur totam cupiditate quam quaerat quasi. Ipsum, eum quo!",
    path: `${ProjectsPath}/1`,
    url: "https://www.muratkars.live",
    img: myAvatar,
  },
  {
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate praesentium alias magnam nam doloribus! Odio distinctio enim eum vero voluptatibus iste atque recusandae ratione, beatae, possimus assumenda eaque. Molestias.",
    path: `${ProjectsPath}/2`,
    url: "https://www.muratkars.live",
    img: myAvatar,
  },
  {
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est, aperiam laudantium cumque reiciendis dolorem eaque adipisci unde autem, magni totam sequi praesentium architecto esse voluptatum aspernatur minima, illo ullam!",
    path: `${ProjectsPath}/3`,
    url: "https://www.muratkars.live",
    img: myAvatar,
  },
  {
    title: "Project 4",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi libero qui autem cumque necessitatibus mollitia laudantium dicta porro impedit! Ullam provident ab quaerat et officiis, omnis maiores consectetur dignissimos quos.",
    path: `${ProjectsPath}/4`,
    url: "https://www.muratkars.live",
    img: myAvatar,
  },
];

export default function ProjectCard() {
  return (
    <div className="flex h-auto flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        {Projects.map((item, index) => {
          const { title, desc, path, url, img } = item;

          return (
            <div key={index} className="w-1/4">
              <div className="h-1/4 overflow-hidden rounded-xl border-zinc-500 bg-cover transition duration-1000 hover:scale-95 hover:border-2">
                <Link href={path}>
                  <Image
                    className="transform rounded-xl transition 
            duration-700 hover:scale-150 hover:grayscale"
                    src={img}
                    alt={title}
                  />
                </Link>
              </div>
              <div>{desc}</div>
              <Link href={url}>{url}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
