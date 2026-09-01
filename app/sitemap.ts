import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/the-best-professional-cleaning-service-in-kochi`, priority: 0.8 },
    { url: `${SITE_URL}/residential-cleaning-in-kerala`, priority: 0.8 },
    { url: `${SITE_URL}/commercial-cleaning-in-kerala`, priority: 0.8 },
    { url: `${SITE_URL}/contact`, priority: 0.7 },
    { url: `${SITE_URL}/blog`, priority: 0.7 },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.publishedDate,
      priority: 0.6,
    })),
  ];
}
