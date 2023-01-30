"use client";

import { HeaderHome } from "@/constants/header";
import { usePathname } from "next/navigation";

export default function Head() {
  const pathname = usePathname();
  return (
    <>
      <title>{HeaderHome.home.title}</title>

      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="description"
        content={HeaderHome.home.description}
      />
      <meta name="author" content={HeaderHome.home.author} />
      <meta name="keywords" content={HeaderHome.home.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      <link rel="icon" href={HeaderHome.home.icon} />
      <link rel="canonical" href={HeaderHome.home.canonical} />
      <link
        rel="alternate"
        href={`${HeaderHome.home.canonical}/en`}
        hrefLang="en"
      />
      <link
        rel="alternate"
        href={`${HeaderHome.home.canonical}/ja`}
        hrefLang="ja"
      />
      <link
        rel="alternate"
        href={`${HeaderHome.home.canonical}/tr`}
        hrefLang="tr"
      />

      <meta property="og:title" content={HeaderHome.home.title} />
      <meta
        property="og:site_name"
        content={HeaderHome.home.og_site_name}
      />
      <meta
        property="og:url"
        content={HeaderHome.home.canonical + pathname}
      />
      <meta
        property="og:description"
        content={HeaderHome.home.description}
      />
      <meta property="og:type" content={HeaderHome.home.og_type} />
      <meta property="og:locale" content="en" />
      <meta property="og:locale:alternate" content="ja" />
      <meta property="og:locale:alternate" content="tr" />
      <meta property="og:image" content={HeaderHome.home.og_image} />

      <meta
        name="twitter:site"
        content={HeaderHome.home.canonical + pathname}
      />
      <meta name="twitter:title" content={HeaderHome.home.title} />
      <meta
        name="twitter:description"
        content={HeaderHome.home.description}
      />
      <meta
        name="twitter:creator"
        content={HeaderHome.home.twitter_creator}
      />
      <meta
        name="twitter:card"
        content={HeaderHome.home.twitter_card}
      />
      <meta
        name="twitter:image"
        content={HeaderHome.home.twitter_image}
      />
      <meta
        name="twitter:image:alt"
        content={HeaderHome.home.twitter_image_alt}
      />
    </>
  );
}
