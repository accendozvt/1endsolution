import { execSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";

function gitLastModified(filePath: string): string {
  try {
    const date = execSync(`git log -1 --format=%cd --date=short -- "${filePath}"`, {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (date) return date;
  } catch {
    // git unavailable at build time (e.g. shallow/no-history checkout) — fall through
  }
  return new Date().toISOString().split("T")[0];
}

const CORE_PAGES = [
  { url: `${SITE_URL}/`, file: "app/page.tsx" },
  {
    url: `${SITE_URL}/the-best-professional-cleaning-service-in-kochi`,
    file: "app/the-best-professional-cleaning-service-in-kochi/page.tsx",
  },
  {
    url: `${SITE_URL}/residential-cleaning-in-kerala`,
    file: "app/residential-cleaning-in-kerala/page.tsx",
  },
  {
    url: `${SITE_URL}/commercial-cleaning-in-kerala`,
    file: "app/commercial-cleaning-in-kerala/page.tsx",
  },
  { url: `${SITE_URL}/contact`, file: "app/contact/page.tsx" },
  { url: `${SITE_URL}/blog`, file: "app/blog/page.tsx" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...CORE_PAGES.map(({ url, file }) => ({
      url,
      lastModified: gitLastModified(file),
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.publishedDate,
    })),
  ];
}
