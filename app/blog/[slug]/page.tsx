import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownBody from "@/components/MarkdownBody";
import { SectionLabel } from "@/components/ui";
import { WhatsAppIcon } from "@/components/Header";
import { BLOG_POSTS, readTimeMinutes } from "@/lib/blog-posts";
import { SITE_URL, PHONE_WA_PRIMARY, waLink } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}/`;
  return {
    title: `${post.title} - One End Solution`,
    description: post.metaDescription,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url,
      publishedTime: post.publishedDate,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}/`;
  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      "@type": "Organization",
      name: "One End Solution",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "One End Solution",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/one-end-logo-1-Small-Copy-Copy.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:py-20 text-center">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
          </nav>
          <SectionLabel>{post.category} Cleaning</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight text-white">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3 text-sm text-white/70">
            <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
            <span>·</span>
            <span>{readTimeMinutes(post.body)} min read</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <MarkdownBody body={post.body} />

        <div className="mt-14 rounded-2xl bg-mist p-8 text-center">
          <h2 className="text-xl font-bold">Need this handled by professionals?</h2>
          <p className="mt-2 leading-7">
            One End Solution brings 20+ years of experience to homes and
            businesses across Kochi and Ernakulam.
          </p>
          <a
            href={waLink(PHONE_WA_PRIMARY)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-light"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat With Us on WhatsApp
          </a>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-cloud py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-bold text-center">
              More {post.category} Cleaning Guides
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-mist transition hover:shadow-md"
                >
                  <h3 className="font-bold leading-snug text-ink transition group-hover:text-brand">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-body">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
