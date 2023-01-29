import { Header } from "@/constants/header";

export default function Head() {
  return (
    <>
      <title>{Header.contact.title}</title>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link rel="icon" href={Header.contact.icon} />
      <meta name="author" content={Header.contact.author} />
      <meta name="description" content={Header.contact.description} />
      <meta name="keywords" content={Header.contact.keywords} />
    </>
  );
}
