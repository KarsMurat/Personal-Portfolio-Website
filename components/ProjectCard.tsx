import Image from "next/image";
import Link from "next/link";
import { Projects } from "@/constants/projectCard";
import { ExternalLinkIcon } from "@/ui/icon/extarnalLink";

const Divider = () => <div className="h-1 w-full rounded-full bg-zinc-800" />;

function ProjectCard() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-20">
      {Projects.map((project, index) => {
        const { title, desc, path, img, tools } = project;

        return (
          <section
            key={index}
            className="relative mx-4 flex max-h-fit max-w-md scale-95 cursor-default items-center overflow-visible rounded-xl bg-zinc-900 shadow-inner shadow-black ring-2 ring-zinc-800 duration-300 hover:scale-100 hover:shadow-lg hover:shadow-black hover:ring-white"
          >
            <article className="flex flex-col space-y-6 px-4 pb-4 pl-24">
              <nav>
                <Link
                  href={path}
                  className="absolute -top-5 -right-5 m-1 rounded-tl-lg rounded-br-lg bg-zinc-900 stroke-white stroke-2 p-1 duration-500 hover:scale-150 hover:bg-white hover:stroke-zinc-900 hover:ring-4 hover:ring-zinc-900"
                >
                  <ExternalLinkIcon />
                </Link>
              </nav>
              <Link
                href={path}
                className="absolute -left-24 top-16 h-44 w-44 skew-x-6 overflow-hidden rounded-2xl border-2 border-zinc-800 duration-700 hover:fixed hover:left-0 hover:top-20 hover:h-3/5 hover:w-10/12 hover:skew-x-0 hover:scale-150 hover:shadow-2xl hover:shadow-black hover:ring-2 hover:ring-white"
              >
                <Image
                  src={img}
                  alt={title}
                  height={300}
                  width={300}
                  className="h-full w-full rounded-2xl object-cover grayscale duration-700 hover:scale-105 hover:border-0 hover:object-cover hover:grayscale-0"
                />
              </Link>
              <header className="flex flex-col rounded-full bg-zinc-900 py-1 ring-1 ring-zinc-800">
                <strong className="flex justify-center text-sm font-medium text-slate-200">
                  {title}
                </strong>
              </header>
              <p className="indent-4 text-sm font-medium text-gray-500">
                {desc}
              </p>
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
