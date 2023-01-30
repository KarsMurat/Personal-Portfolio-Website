import { HeaderContact } from "@/constants/header/contact";

export default function Head() {
  return (
    <>
      <title>{HeaderContact.contact.title}</title>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link rel="icon" href={HeaderContact.contact.icon} />
      <meta name="author" content={HeaderContact.contact.author} />
      <meta
        name="description"
        content={HeaderContact.contact.description}
      />
      <meta
        name="keywords"
        content={HeaderContact.contact.keywords}
      />
    </>
  );
}
