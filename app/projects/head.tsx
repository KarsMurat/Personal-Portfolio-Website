import { HeaderProjects } from "@/constants/header/projects";

export default function Head() {
  return (
    <>
      <title>{HeaderProjects.projects.title}</title>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link rel="icon" href={HeaderProjects.projects.icon} />
      <meta name="author" content={HeaderProjects.projects.author} />
      <meta
        name="description"
        content={HeaderProjects.projects.description}
      />
      <meta
        name="keywords"
        content={HeaderProjects.projects.keywords}
      />
    </>
  );
}
