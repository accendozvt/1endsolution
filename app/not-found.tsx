import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui";
import { WhatsAppIcon } from "@/components/Header";
import { PHONE_WA_PRIMARY, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | One End Solution",
  description:
    "The page you're looking for doesn't exist. Explore One End Solution's residential and commercial cleaning services in Kochi instead.",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Residential Cleaning", href: "/residential-cleaning-in-kerala" },
  { label: "Commercial Cleaning", href: "/commercial-cleaning-in-kerala" },
  { label: "Cleaning Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <SectionLabel>404 Error</SectionLabel>
        <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold text-white">
          Page Not Found
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/85">
          We couldn&rsquo;t find the page you were looking for. It may have
          been moved, or the link may be out of date. Here are a few places
          to pick back up:
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border-2 border-white/60 px-6 py-3 font-semibold text-white transition hover:border-brand-light hover:text-brand-light"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={waLink(PHONE_WA_PRIMARY)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-brand-light"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chat With Us on WhatsApp
        </a>
      </div>
    </section>
  );
}
