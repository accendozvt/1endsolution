"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogCategory, BlogPost } from "@/lib/blog-posts";
import { readTimeMinutes } from "@/lib/blog-posts";

const CATEGORIES: Array<BlogCategory | "All"> = ["All", "Residential", "Commercial", "General"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<BlogCategory | "All">("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === cat
                ? "bg-brand text-white"
                : "bg-white text-ink ring-1 ring-mist hover:bg-mist"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-mist transition hover:shadow-md"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-mist px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
              {post.category}
            </span>
            <h2 className="mt-4 text-lg font-bold leading-snug text-ink transition group-hover:text-brand">
              {post.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-body">{post.excerpt}</p>
            <div className="mt-5 flex items-center justify-between text-xs text-body">
              <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
              <span>{readTimeMinutes(post.body)} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
