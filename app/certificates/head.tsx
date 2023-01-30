import { HeaderCertificates } from "@/constants/header/certificates";

export default function Head() {
  return (
    <>
      <title>{HeaderCertificates.certificates.title}</title>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link rel="icon" href={HeaderCertificates.certificates.icon} />
      <meta
        name="author"
        content={HeaderCertificates.certificates.author}
      />
      <meta
        name="description"
        content={HeaderCertificates.certificates.description}
      />
      <meta
        name="keywords"
        content={HeaderCertificates.certificates.keywords}
      />
    </>
  );
}
