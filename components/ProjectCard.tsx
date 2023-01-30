import Image from "next/image";
import Link from "next/link";
import { Projects } from "@/constants/project";

const Divider = () => <div className="h-1 w-full rounded-full bg-zinc-800" />;

function ProjectCard() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-6">
      {Projects.map((project, index) => {
        const { title, desc, path, img, tools } = project;

        return (
          <section
            key={index}
            className="relative mx-auto flex max-h-fit max-w-md cursor-default items-center overflow-visible rounded-xl bg-zinc-900 shadow-md shadow-black ring-2 ring-zinc-800 duration-300 hover:scale-95 hover:ring-white"
          >
            <nav>
              <Link
                href={path}
                className="group absolute -top-5 -right-5 m-1 rounded-tl-lg rounded-br-lg bg-zinc-900 stroke-white p-1 text-zinc-300 duration-200 hover:scale-150 hover:bg-white hover:stroke-zinc-900 hover:ring-4 hover:ring-zinc-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link fill-none"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </Link>
            </nav>
            <Link
              href={path}
              className="absolute -left-16 h-36 w-36 skew-x-6 overflow-hidden rounded-3xl border-2 border-zinc-800 duration-700 hover:skew-x-0 hover:scale-150 hover:border-0 hover:ring-1 hover:ring-white"
            >
              <Image
                src={img}
                alt={title}
                height={300}
                width={300}
                className="rounded-2xl shadow-sm shadow-black duration-700 hover:scale-150 hover:grayscale"
              />
            </Link>
            <article className="flex flex-col space-y-6 p-4 pl-24">
              <header className="flex flex-col rounded-full bg-zinc-900 py-1 ring-1 ring-zinc-800">
                <strong className="flex justify-center text-sm font-medium text-slate-200">
                  {title}
                </strong>
              </header>
              <p className="text-sm font-medium text-gray-500">{desc}</p>
              <div className="flex flex-wrap justify-center gap-1">
                {tools.map((project, index) => {
                  const { name, icon } = project;
                  return (
                    <div
                      key={index}
                      className="flex space-x-1 rounded-sm bg-zinc-700 px-2 py-1"
                    >
                      <span className="text-xs text-zinc-400">{name}</span>
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
              <Divider />
              <span className="text-sm font-medium text-cyan-600">
                <nav className="flex justify-end space-x-2">
                  {project.link.map((project, index) => {
                    const { icon, name, url } = project;

                    return (
                      <Link
                        key={index}
                        href={url}
                        target="_blank"
                        className="flex space-x-1 rounded-full bg-zinc-800 px-2 py-1 hover:bg-zinc-700"
                      >
                        <Image
                          src={icon}
                          alt={name}
                          height={20}
                          width={20}
                          className="rounded-full"
                        />
                        <div>{name}</div>
                      </Link>
                    );
                  })}
                </nav>
              </span>
            </article>
          </section>
        );
      })}
    </div>
  );
}

export default ProjectCard;
