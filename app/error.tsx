"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui";
import { WhatsAppIcon } from "@/components/Header";
import { PHONE_WA_PRIMARY, waLink } from "@/lib/site";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <SectionLabel tone="onDark">Something Went Wrong</SectionLabel>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
          We Hit a Snag
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/85">
          Something unexpected happened while loading this page. Please try
          again, or head back home.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-brand-light"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full border-2 border-white/60 px-7 py-3.5 font-semibold text-white transition hover:border-brand-light hover:text-brand-light"
          >
            Back to Home
          </Link>
        </div>

        <a
          href={waLink(PHONE_WA_PRIMARY)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-light hover:text-brand-light"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Chat With Us on WhatsApp
        </a>
      </div>
    </section>
  );
}
