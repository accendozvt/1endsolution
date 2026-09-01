import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, OG_LOCALE, LOCALE } from "./site";

export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const OG_IMAGE_ALT = "One End Solution — best deep cleaning service in Kochi, Kerala";
export const OG_IMAGE_WEBP = `${SITE_URL}/assets/opengraph/preview.webp`;
export const OG_IMAGE_PNG = `${SITE_URL}/assets/opengraph/preview.png`;

export function absoluteUrl(path: string): string {
  return path === "/" || path === "" ? SITE_URL : `${SITE_URL}${path}`;
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
};

/**
 * Every field Google/social crawlers expect, in one place, so a page can't
 * silently lose og:locale/siteName/type the way per-page openGraph objects
 * did before — Next.js replaces the whole nested object on override, it
 * doesn't deep-merge with the root layout's defaults.
 */
export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);

  const openGraph = {
    type,
    siteName: SITE_NAME,
    locale: OG_LOCALE,
    url,
    title,
    description,
    images: [
      { url: OG_IMAGE_WEBP, width: 1200, height: 630, alt: OG_IMAGE_ALT, type: "image/webp" },
      { url: OG_IMAGE_PNG, width: 1200, height: 630, alt: OG_IMAGE_ALT, type: "image/png" },
    ],
    ...(type === "article" && publishedTime ? { publishedTime } : {}),
  } as Metadata["openGraph"];

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: OG_IMAGE_WEBP, alt: OG_IMAGE_ALT }],
    },
  };
}

/** Site-wide WebSite entity. Render once (root layout), referenced by every page's WebPage via isPartOf. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: LOCALE,
  publisher: { "@id": ORGANIZATION_ID },
};

type WebPageSchemaInput = {
  name: string;
  description: string;
  path: string;
};

/** Per-page WebPage entity — every public page should render one of these. */
export function webPageSchema({ name, description, path }: WebPageSchemaInput) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: LOCALE,
  };
}

type BreadcrumbItem = { name: string; path: string };

/** BreadcrumbList matching the page's real nav path — pass Home first. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  areaServed: string[];
};

/** Service schema for the Residential/Commercial cleaning pages — no `offers`, since no real fixed price exists to publish. */
export function serviceSchema({ name, description, path, areaServed }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed,
  };
}
