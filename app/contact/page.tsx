import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SectionLabel } from "@/components/ui";
import { MailIcon, PhoneIcon } from "@/components/Header";
import { buildMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const PAGE_PATH = "/contact";
const PAGE_TITLE = "Contact Us in Kochi & Ernakulam | One End Solution";
const PAGE_DESCRIPTION =
  "Contact One End Solution, Panakkapadath Building, Vytilla, Ernakulam. Call +91 70343 79 777 or WhatsApp to book cleaning, housekeeping and maintenance.";

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

const webPageJsonLd = webPageSchema({ name: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: PAGE_PATH },
]);

const PERKS = ["Saves Your Time", "Cashlese Payment", "Seamless Communication"];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-24 text-center">
          <SectionLabel>Contact One End Solution</SectionLabel>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Contact Us &amp; Enjoy Your Time Off
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-brand-light">
            Call Us! We&rsquo;re The Dirt Busters!
          </h2>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-brand-light"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-mist p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
              <LocationIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">Address</h3>
            <p className="mt-2 leading-7">{ADDRESS}</p>
          </div>
          <div className="rounded-2xl bg-mist p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
              <MailIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">Mail Us</h3>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 inline-block leading-7 text-brand hover:underline"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Schedule a Cleaning
            </h2>
            <p className="mt-4 leading-8">
              Write to us for all kind of cleaning, housekeeping and maintenance
              service in kochi and all around kerala.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm min-h-96">
            <iframe
              src="https://maps.google.com/maps?q=one%20end%20solution&t=m&z=13&output=embed&iwloc=near"
              title="One End Solution location on Google Maps"
              className="h-full w-full min-h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {PERKS.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center gap-3 rounded-2xl bg-mist px-6 py-8"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-brand"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-lg font-semibold">{p}</h3>
            </div>
          ))}
        </div>
      </section>

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

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}
