import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, OG_LOCALE } from "./site";

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
