import { Header } from "@/constants/header";

export default function Head() {
  return (
    <>
      <title>{Header.certificates.title}</title>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link rel="icon" href={Header.certificates.icon} />
      <meta name="author" content={Header.certificates.author} />
      <meta
        name="description"
        content={Header.certificates.description}
      />
      <meta name="keywords" content={Header.certificates.keywords} />
    </>
  );
}
