import type { Metadata } from "next";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { CtaBand, CheckItem, SectionLabel } from "@/components/ui";
import FaqSection from "@/components/FaqSection";
import { RESIDENTIAL_FAQS, faqPageSchema } from "@/lib/faqs";
import { SITE_URL, PHONE_WA_BOOKING, waLink } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/residential-cleaning-in-kerala`;
const PAGE_TITLE = "Residential Cleaning in Kerala | One End Solution";
const PAGE_DESCRIPTION =
  "Contact us to book the best residential cleaning in Kerala. Our deep cleaning experts use eco-friendly methods to keep your home spotless and comfortable.";

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
    images: [{ url: `${SITE_URL}/images/IMG-20220309-WA0084.jpg` }],
  },
};

function TrustedIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.6-3 8.7-7 10-4-1.3-7-5.4-7-10V6l7-3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ProductsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 4h-2a1 1 0 0 0-1 1v1.6L9.4 8.2A2 2 0 0 0 9 9.6V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9.6a2 2 0 0 0-.4-1.4L15 6.6V5a1 1 0 0 0-1-1Z" />
      <path strokeLinecap="round" d="M9 13h6M17 7l3-3M18 4h2v2" />
    </svg>
  );
}

function PaymentIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path strokeLinecap="round" d="M3 10h18M7 15h4" />
    </svg>
  );
}

const FEATURES = [
  { Icon: TrustedIcon, label: "Trusted Cleaners" },
  { Icon: ProductsIcon, label: "Best Products" },
  { Icon: PaymentIcon, label: "Easy Payments" },
];

const COVERAGE = [
  "Office Cleaning",
  "Club House and Halls",
  "Eateries and Kitchens",
  "Initial Clean Up",
  "Deep Cleaning",
  "Sparkle Clean",
  "Washroom Floors",
  "Common Floors",
  "Courtyard Cleaning",
  "Common Restrooms",
  "Trash Clean up",
  "Containment Area Cleaning",
];

const GALLERY = [
  { src: "/images/IMG-20231124-WA0001.jpg", width: 520, height: 1156 },
  { src: "/images/IMG-20231124-WA0002.jpg", width: 520, height: 1156 },
  { src: "/images/IMG-20231124-WA0007.jpg", width: 520, height: 1156 },
  { src: "/images/IMG-20231127-WA0024.jpg", width: 520, height: 1156 },
  { src: "/images/IMG-20231127-WA0028.jpg", width: 577, height: 1280 },
  { src: "/images/IMG-20231128-WA0002.jpg", width: 719, height: 1600 },
  { src: "/images/IMG-20231128-WA0003.jpg", width: 719, height: 1600 },
  { src: "/images/IMG-20231128-WA0004.jpg", width: 719, height: 1600 },
  { src: "/images/IMG-20231128-WA0024.jpg", width: 520, height: 1156 },
  { src: "/images/IMG-20231128-WA0025.jpg", width: 520, height: 1156 },
  { src: "/images/IMG-20231202-WA0055.jpg", width: 868, height: 1156 },
  { src: "/images/IMG-20231211-WA0008.jpg", width: 900, height: 1600 },
  { src: "/images/IMG-20231211-WA0012.jpg", width: 900, height: 1600 },
  { src: "/images/IMG-20231211-WA0015.jpg", width: 900, height: 1600 },
  { src: "/images/IMG-20231213-WA0027.jpg", width: 900, height: 1600 },
  { src: "/images/IMG-20231213-WA0028.jpg", width: 900, height: 1600 },
  { src: "/images/IMG-20231213-WA0032.jpg", width: 900, height: 1600 },
  { src: "/images/IMG-20231213-WA0033.jpg", width: 900, height: 1600 },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/IMG-20220309-WA0084.jpg"
          alt="Residential cleaning in Kerala by One End Solution"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-28 text-center">
          <SectionLabel>Residential Cleaning</SectionLabel>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            We Service To Make Your Place Shine
          </h1>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-6 backdrop-blur"
              >
                <f.Icon className="h-12 w-12 text-white" />
                <h5 className="font-semibold text-white text-center text-lg">{f.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>We Cover All Your Needs</SectionLabel>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold leading-snug">
              Residential Cleaning in Kerala
            </h1>
            <p className="mt-5 leading-8">
              When it comes to residential cleaning in Kerala, One End Solution
              redefine cleanliness and comfort in your home. Our team of deep
              cleaning experts is committed to transforming every corner of your
              living space into a sparkling, hygienic, and serene environment.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
              {COVERAGE.map((c) => (
                <CheckItem key={c}>{c}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/IMG-20220309-WA0084.jpg"
              alt="Deep house cleaning in Kochi"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          <CheckItem>
            Deep Cleaning Services Kochi: We delve deep into the cleaning
            process, covering every aspect of your home, including hard-to-reach
            areas, ensuring a thorough clean from top to bottom.
          </CheckItem>
          <CheckItem>
            Professional Deep Cleaning Kochi: Our team is equipped with the
            latest cleaning techniques and tools
          </CheckItem>
        </ul>
      </section>

      {/* Why choose */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold leading-snug">
            Why Choose One End Solution for Residential Cleaning in Kerala?
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center leading-8">
            Welcome to One End Solution, where we redefine cleanliness and
            comfort in your home with our exceptional residential cleaning
            services in Kochi. Our team of deep cleaning experts is committed to
            transforming every corner of your living space into a sparkling,
            hygienic, and serene environment.
          </p>
          <ul className="mx-auto mt-10 max-w-3xl space-y-4">
            <CheckItem>
              Expert Deep Cleaning Services: Leveraging years of experience in
              Kochi, our skilled professionals specialize in deep cleaning,
              ensuring every area of your home is immaculately cleaned.
            </CheckItem>
            <CheckItem>
              Eco-Friendly Approach: We employ eco-friendly deep cleaning
              techniques, prioritizing your health and the well-being of the
              environment.
            </CheckItem>
            <CheckItem>
              Customized Solutions: Understanding that every home is unique, we
              tailor our cleaning services to meet your specific needs and
              preferences.
            </CheckItem>
          </ul>
        </div>
      </section>

      <CtaBand
        heading="Book Cleaning Now"
        buttonLabel="Send Request"
        href={waLink(PHONE_WA_BOOKING)}
      />

      {/* Includes */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">
          Our Residential Cleaning in Kerala Include:
        </h2>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
          <CheckItem>
            Deep House Cleaning: Our comprehensive deep cleaning covers every
            nook and cranny, leaving your home spotless and inviting.
          </CheckItem>
          <CheckItem>
            Professional Upholstery and Carpet Cleaning: We specialize in deep
            cleaning of upholstery and carpets, removing dirt, allergens, and
            stains to rejuvenate your furnishings.
          </CheckItem>
          <CheckItem>
            Kitchen and Bathroom Deep Clean: Our team focuses on these critical
            areas, ensuring they are hygienic and sparkling clean.
          </CheckItem>
          <CheckItem>
            Post-Renovation and Move-In/Out Cleaning: We provide thorough
            cleaning services for newly renovated spaces, move-in/move-out
            situations, ensuring a fresh start in a pristine environment.
          </CheckItem>
          <CheckItem>
            Customized Regular Cleaning: From bi-monthly to monthly deep clean
            services, we offer regular cleaning schedules to maintain the
            cleanliness and comfort of your home throughout the year.
          </CheckItem>
        </ul>
      </section>

      {/* Gallery */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
              Residential Cleaning in Action
            </h2>
          </div>
          <div className="mt-10">
            <Carousel
              items={GALLERY}
              alt="Residential cleaning work by One End Solution in Kerala"
              aspect="portrait"
            />
          </div>
        </div>
      </section>

      {/* Commitment + Book */}
      <section className="mx-auto max-w-4xl px-4 py-20 space-y-14">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Commitment</h2>
          <p className="mt-5 leading-8">
            At One End Solution, we are dedicated to providing top-notch
            residential cleaning services that meet the highest standards of
            quality and customer satisfaction. Our experienced team, equipped
            with the best tools and eco-friendly cleaning products, is here to
            ensure that your home is a clean, safe, and peaceful place to live.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Book Our Services</h2>
          <div className="mt-5 space-y-5 leading-8 text-left sm:text-center">
            <p>
              Ready for a cleaner, healthier home? Contact us to book our
              residential cleaning services in Kochi. Let One End Solution take
              care of the cleanliness while you enjoy the comfort of your
              immaculately maintained home.
            </p>
            <p>
              We bring a new standard of cleanliness to Kochi with our
              exceptional range of cleaning services. Nestled in the heart of the
              city, we are renowned for our deep cleaning services, offering
              meticulous attention to every corner of your space. Whether
              you&rsquo;re searching for &lsquo;house cleaning services near
              me&rsquo; or &lsquo;deep cleaning services near me&rsquo;, One End
              Solution is your nearest and most reliable choice.
            </p>
            <p>
              Our expertise in house cleaning services in Kochi is unmatched. We
              specialize in transforming residential spaces into sparkling,
              hygienic havens, where every surface shines and every room breathes
              purity. Our team, equipped with the latest tools and eco-friendly
              cleaning agents, delivers a thorough cleanse that rejuvenates your
              living spaces.
            </p>
            <p>
              For those busy professionals and families in Kochi, our cleaning
              services provide the perfect solution to maintain a clean and
              healthy home without the hassle. We understand the dynamics of
              modern-day living and tailor our services to fit your schedule,
              ensuring minimal disruption to your daily routine.
            </p>
            <p>
              At One End Solution, we are more than just a cleaning company; we
              are your partners in fostering a clean, safe, and comfortable
              environment. Our commitment to quality and customer satisfaction
              sets us apart, making us the top choice for cleaning services in
              Kochi. Trust us to take care of your cleaning needs, and experience
              the peace of mind that comes with a spotlessly clean home.
            </p>
          </div>
        </div>
      </section>

      <FaqSection faqs={RESIDENTIAL_FAQS} idPrefix="residential" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(RESIDENTIAL_FAQS)) }}
      />
    </>
  );
}
