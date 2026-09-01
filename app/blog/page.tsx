import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui";
import BlogGrid from "@/components/BlogGrid";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { buildMetadata, absoluteUrl, webPageSchema, breadcrumbSchema } from "@/lib/seo";

const PAGE_PATH = "/blog";
const PAGE_URL = absoluteUrl(PAGE_PATH);
const PAGE_TITLE = "Cleaning Tips & Guides for Kochi | One End Solution";
const PAGE_DESCRIPTION =
  "Expert cleaning tips, checklists, and guides for homes and offices in Kochi and Ernakulam — covering deep cleaning, monsoon prep, pest control, and more.";

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

const webPageJsonLd = webPageSchema({ name: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: PAGE_PATH },
]);

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${PAGE_URL}#blog`,
  name: "One End Solution Cleaning Blog",
  url: PAGE_URL,
  description:
    "Expert cleaning tips, checklists, and local guides for homes and businesses in Kochi and Ernakulam, Kerala.",
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.publishedDate,
  })),
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-24 text-center">
          <SectionLabel tone="onDark">One End Solution Blog</SectionLabel>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Cleaning Tips &amp; Guides for Kochi
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Practical, locally-tested advice on deep cleaning, monsoon prep, pest
            control, and workspace hygiene for homes and businesses across Kochi
            and Ernakulam.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <BlogGrid posts={BLOG_POSTS} />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
