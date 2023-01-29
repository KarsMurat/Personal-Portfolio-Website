import { Header } from "@/constants/header";

export default function Head() {
  return (
    <>
      <title>{Header.home.title}</title>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link rel="icon" href={Header.home.icon} />
      <meta name="author" content={Header.home.author} />
      <meta name="description" content={Header.home.description} />
      <meta name="keywords" content={Header.home.keywords} />
    </>
  );
}
