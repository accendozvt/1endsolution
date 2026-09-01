import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PromiseCard, CheckItem, SectionLabel } from "@/components/ui";
import { WhatsAppIcon, FacebookIcon, InstagramIcon, PhoneIcon } from "@/components/Header";
import FaqSection from "@/components/FaqSection";
import { HOME_FAQS, faqPageSchema } from "@/lib/faqs";
import { buildMetadata } from "@/lib/seo";
import {
  PHONE_DISPLAY,
  PHONE_WA_PRIMARY,
  PHONE_WA_BOOKING,
  SOCIALS,
  CORE_SERVICES,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "One End Solution — Best Deep Cleaning Service in Kochi",
  description:
    "Discover the best deep cleaning service in Kochi, specializing in both commercial and residential cleaning, offer cleaning, maintenance & sanitization services.",
  path: "/",
});

const GALLERY = [
  "IMG-20220626-WA0027",
  "IMG-20220626-WA0024",
  "IMG-20220626-WA0022",
  "IMG-20220626-WA0021",
  "IMG-20220526-WA0089",
  "IMG-20220526-WA0088",
  "IMG-20220526-WA0086",
  "IMG-20220309-WA0089",
  "IMG-20220309-WA0090",
  "IMG-20220309-WA0092",
  "IMG-20220526-WA0062",
  "IMG-20220526-WA0063",
  "IMG-20220309-WA0070",
  "IMG-20220309-WA0068",
  "IMG-20220526-WA0082",
  "IMG-20220309-WA0084",
  "IMG-20211016-WA0099",
  "IMG-20211016-WA0095",
  "IMG-20211016-WA0101",
  "IMG-20211016-WA0003-1",
  "IMG-20211016-WA0008-1",
  "IMG-20211016-WA0009-1",
  "IMG-20211016-WA0010-1",
  "IMG-20211016-WA0027-1",
  "IMG-20211016-WA0090",
  "IMG-20211016-WA0050",
  "IMG-20211016-WA0044",
  "IMG-20211016-WA0092",
  "IMG-20220526-WA0079",
  "IMG-20211016-WA0008",
  "IMG-20211016-WA0098",
  "IMG-20211016-WA0093",
  "IMG-20211016-WA0039",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/IMG-20220626-WA0021.jpg"
          alt="One End Solution professional cleaning team at work in Kochi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:py-36">
          <div className="max-w-3xl">
            <SectionLabel>One End Solution · Kochi, Kerala</SectionLabel>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Professional Housekeeping &amp; Best Deep Cleaning Service{" "}
              <span className="text-brand-light">in Kochi, Kerala.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Welcome to One End Solutions, your premier choice for the best deep
              cleaning service in Kochi. Strategically located in Vytilla,
              Ernakulam, we are a leading integrated facility management service
              provider known for our comprehensive range of services including
              expert cleaning, repairs &amp; maintenance, disinfection,
              sanitizing, and fumigation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waLink(PHONE_WA_BOOKING)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-brand-light"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Book In Less Than 60 Sec
              </a>
              <a
                href={waLink(PHONE_WA_PRIMARY)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 font-semibold text-white transition hover:border-brand-light hover:text-brand-light"
              >
                <PhoneIcon className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline strip */}
      <div className="bg-brand py-3.5 text-center text-sm sm:text-base font-medium text-white px-4">
        Most Reliable Deep Cleaning Services in Kochi: Enhance the Hygiene of
        Your Space
      </div>

      {/* Welcome / intro */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 leading-8">
            <SectionLabel>Welcome to One End Solutions</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Two Decades of Facility Management Experience
            </h2>
            <p>
              At One End Solutions, we bring over two decades of dynamic
              experience in facility management to the table. Our skilled and
              experienced team, reinforced by a strong backup workforce, is
              dedicated to executing each task with utmost precision and
              professionalism. We take immense pride in our ability to provide
              both residential and commercial clients with top-tier cleaning
              services that are not only effective but also environmentally
              responsible.
            </p>
            <p>
              Our commitment to excellence is reflected in our approach. We
              ensure that our staff is thoroughly trained and certified,
              equipping them with the necessary skills to meet the highest
              standards of deep cleaning. Whether it&rsquo;s your home or business
              space, we understand the importance of a clean and healthy
              environment. That&rsquo;s why we employ the most advanced techniques
              and eco-friendly products to deliver a service that&rsquo;s both
              trustworthy and of the highest quality.
            </p>
            <p>
              Choose One End Solutions for a spotless, hygienic, and inviting
              space in Kochi. Our deep cleaning service is tailored to meet your
              specific needs, ensuring your utmost satisfaction. Contact us today
              to experience the best in cleanliness and care.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <h2 className="text-2xl font-bold">Call Us!</h2>
              <a
                href={waLink(PHONE_WA_PRIMARY)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-brand"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/IMG-20220626-WA0024.jpg"
                alt="Deep cleaning service in Kochi by One End Solution"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-brand px-8 py-6 text-white shadow-lg">
              <p className="text-3xl font-extrabold">20+</p>
              <p className="text-sm font-medium">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <SectionLabel>Testimonials from Clients</SectionLabel>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Our Promise</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <PromiseCard
              icon="/images/certificate-guarantee.png"
              title={
                <>
                  Guaranteed Professional
                  <br />
                  Quality
                </>
              }
            />
            <PromiseCard
              icon="/images/easy-payment.png"
              title={
                <>
                  Easy and Affordable
                  <br />
                  Service Cost
                </>
              }
            />
            <PromiseCard
              icon="/images/online-booking.png"
              title={
                <>
                  Guaranteed
                  <br />
                  Solution &amp; Service
                </>
              }
            />
          </div>
          <div className="mx-auto mt-14 max-w-4xl space-y-5 leading-8 text-center">
            <p>
              At One End Solution, we redefine cleanliness with our outstanding
              deep cleaning service, acknowledged as the best in Kochi. Our
              reputation is built on a foundation of extensive expertise,
              customized solutions, and an unwavering commitment to detail.
              Utilizing advanced techniques and state-of-the-art equipment, our
              highly trained staff deliver unparalleled cleaning services
              tailored to meet your specific needs.
            </p>
            <p>
              We understand the importance of flexibility, which is why we offer
              scheduling options designed to seamlessly fit into your busy
              lifestyle. Our focus on quality assurance, combined with
              exceptional customer service, ensures that your experience with us
              is nothing short of excellent. Our reliability and dedication to
              superior cleaning standards set us apart in the commercial cleaning
              industry and make us a top choice for residential cleaning needs.
              By choosing One End Solution, you&rsquo;re not just opting for a
              clean space; you&rsquo;re choosing a hygienic, welcoming environment
              that leaves a lasting impression on clients, employees, and all who
              visit.
            </p>
            <p>
              Whether it&rsquo;s your office, retail space, or home, trust One End
              Solution to deliver a deep cleaning experience that goes beyond the
              surface. Let us transform your space into a spotless sanctuary that
              reflects your commitment to quality and wellness.
            </p>
            <a
              href={waLink(PHONE_WA_BOOKING)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-brand-light"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book In Less Than 60 Sec
            </a>
          </div>
        </div>
      </section>

      {/* Competitive edge */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Why We Stand Out</SectionLabel>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold leading-snug">
              Our Competitive Edge with Best Deep Cleaning Service in Kochi
            </h2>
            <p className="mt-5 leading-8">
              We offers a wide range of comprehensive cleaning service in Kochi
              and all over Kerala tailored to meet the unique needs of
              residential and commercial clients. From deep cleaning of homes and
              offices to specialized cleaning for carpets, upholstery, and more,
              they have all your cleaning requirements covered.
            </p>
            <ul className="mt-7 space-y-4">
              <CheckItem>
                Our professional cleaning system is designed to cater our
                clients&rsquo; customized needs to achieve their budget based
                requirements.
              </CheckItem>
              <CheckItem>
                Our experienced technical staff and trained technicians ensure
                delivery of high-quality cleaning services.
              </CheckItem>
              <CheckItem>
                We manage employee welfare such as ESI, EPF, LWF, Bonus, Leave,
                etc.
              </CheckItem>
              <CheckItem>
                Our modern methods together with the right cleaning
                equipment&rsquo;s and kin eye of choosing eco-friendly cleaning
                agents used in executing our task enable us to ensure quality
                finishing
              </CheckItem>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/IMG-20220526-WA0088.jpg"
                alt="One End Solution cleaning professional"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:mt-10">
              <Image
                src="/images/IMG-20220526-WA0089.jpg"
                alt="Deep cleaning in progress"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residential / Commercial cards */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-mist">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/IMG-20220129-WA0030.jpg"
                  alt="Residential cleaning and maintenance in Ernakulam"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold">
                  Residential Cleaning &amp; Maintenance
                </h4>
                <p className="mt-4 leading-7">
                  One End Solution stands out as the best choice for residential
                  cleaning services around Ernakulam, delivering exceptional
                  quality and unmatched customer satisfaction. Choosing One End
                  Solution guarantees a residential cleaning experience that
                  exceeds expectations and transforms homes into pristine,
                  inviting, and enjoyable spaces to live in.
                </p>
                <Link
                  href="/residential-cleaning-in-kerala"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-light"
                >
                  Explore Residential Cleaning
                  <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-mist">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/IMG-20220526-WA0079.jpg"
                  alt="Commercial cleaning and maintenance in Kerala"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold">
                  Commercial Cleaning &amp; Maintenance
                </h4>
                <p className="mt-4 leading-7">
                  One End Solution has established itself as the best provider of
                  commercial cleaning services, setting the standard for
                  excellence in the industry. Choosing One End Solution ensures a
                  clean, hygienic, and welcoming commercial space that leaves a
                  lasting impression on clients, employees, and provide you a
                  revitalized office environment.
                </p>
                <Link
                  href="/commercial-cleaning-in-kerala"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-light"
                >
                  Explore Commercial Cleaning
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Schedule Your Cleaning Now & Get Free Estimate"
        buttonLabel="WhatsApp Us"
        href={waLink(PHONE_WA_PRIMARY)}
      />

      {/* Core services */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Our Core Services
          </h2>
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 leading-8">
            <p>
              we redefine the standards of cleanliness with our exceptional
              professional cleaning service in Kochi. Our commitment is to
              provide you with clean, safe, and healthy environments, be it at
              work or home. We pride ourselves on delivering fast, personalized,
              and consistently high-quality services at competitive prices.
            </p>
            <p>
              Understanding the importance of a pristine business environment,
              One End Solution specializes in enhancing your corporate image and
              employee well-being. Our commercial cleaning service are designed
              to offer a worry-free solution for maintaining a professional
              atmosphere in your workspace.
            </p>
            <p>
              Let us take the burden of cleaning off your shoulders, allowing you
              to focus more on what matters most &ndash; your business. Whether
              your needs are for daily, weekly, or monthly office cleaning
              service, One End Solution tailors its approach to fit your unique
              requirements. We cater to a diverse range of businesses including
              banks, corporate offices, showrooms, hospitals, and malls, ensuring
              that each space we touch is left spotless and inviting.
            </p>
            <p>
              Choose One End Solution for a cleaning experience that goes beyond
              the surface. Trust us to provide a cleaner, healthier environment
              for you and those around you.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2 content-start">
            {CORE_SERVICES.map((s) => (
              <CheckItem key={s}>{s}</CheckItem>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
              A Glimpse of Our Cleaning in Action
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {GALLERY.map((name) => (
              <div
                key={name}
                className="relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={`/images/${name}.jpg`}
                  alt="One End Solution cleaning work in Kochi"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                  className="object-cover transition duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find us on */}
      <section className="mx-auto max-w-7xl px-4 py-14 text-center">
        <h4 className="text-2xl font-bold">Find Us On</h4>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-ink transition hover:bg-brand hover:text-white"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-ink transition hover:bg-brand hover:text-white"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </section>

      <FaqSection faqs={HOME_FAQS} idPrefix="home" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(HOME_FAQS)) }}
      />
    </>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6M5 12h14" />
    </svg>
  );
}
