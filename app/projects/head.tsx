import { Header } from "@/constants/header";

export default function Head() {
  return (
    <>
      <title>{Header.projects.title}</title>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link rel="icon" href={Header.projects.icon} />
      <meta name="author" content={Header.projects.author} />
      <meta
        name="description"
        content={Header.projects.description}
      />
      <meta name="keywords" content={Header.projects.keywords} />
    </>
  );
}
