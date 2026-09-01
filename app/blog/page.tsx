import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui";
import BlogGrid from "@/components/BlogGrid";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/blog`;
const PAGE_TITLE = "Cleaning Tips & Guides for Kochi | One End Solution";
const PAGE_DESCRIPTION =
  "Expert cleaning tips, checklists, and guides for homes and offices in Kochi and Ernakulam — covering deep cleaning, monsoon prep, pest control, and more.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
  },
};

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
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedDate,
  })),
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-24 text-center">
          <SectionLabel>One End Solution Blog</SectionLabel>
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
    </>
  );
}
