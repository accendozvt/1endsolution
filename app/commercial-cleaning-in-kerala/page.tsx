import type { Metadata } from "next";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { CtaBand, CheckItem, SectionLabel } from "@/components/ui";
import FaqSection from "@/components/FaqSection";
import { COMMERCIAL_FAQS, faqPageSchema } from "@/lib/faqs";
import { buildMetadata, webPageSchema, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { PHONE_WA_PRIMARY, waLink } from "@/lib/site";

const PAGE_PATH = "/commercial-cleaning-in-kerala";
const PAGE_TITLE = "Commercial Cleaning in Kerala | One End Solution";
const PAGE_DESCRIPTION =
  "One End Solution offers top-tier commercial cleaning in Kerala, specializing in office cleaning, shop and showroom cleaning, and more in Ernakulam.";

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

const webPageJsonLd = webPageSchema({ name: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Commercial Cleaning", path: PAGE_PATH },
]);
const serviceJsonLd = serviceSchema({
  name: "Commercial Cleaning",
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  areaServed: ["Kochi", "Ernakulam", "Kerala"],
});

const GALLERY = [
  { src: "/images/IMG-20220626-WA0027.jpg", width: 1599, height: 720 },
  { src: "/images/IMG-20220526-WA0065.jpg", width: 1599, height: 720 },
  { src: "/images/IMG-20220526-WA0062.jpg", width: 1152, height: 519 },
  { src: "/images/IMG-20220309-WA0092.jpg", width: 1280, height: 576 },
  { src: "/images/IMG-20220309-WA0089.jpg", width: 1152, height: 519 },
  { src: "/images/IMG-20211016-WA0099.jpg", width: 1600, height: 777 },
  { src: "/images/IMG-20220309-WA0071.jpg", width: 1152, height: 519 },
  { src: "/images/IMG-20211016-WA0009.jpg", width: 1032, height: 502 },
  { src: "/images/IMG-20211016-WA0010-1.jpg", width: 1032, height: 502 },
  { src: "/images/IMG-20211016-WA0027-1.jpg", width: 1032, height: 502 },
  { src: "/images/IMG-20211016-WA0093.jpg", width: 1280, height: 576 },
  { src: "/images/IMG-20211016-WA0050.jpg", width: 1280, height: 576 },
  { src: "/images/IMG-20211016-WA0092.jpg", width: 1280, height: 576 },
  { src: "/images/IMG-20211016-WA0090.jpg", width: 1280, height: 576 },
  { src: "/images/IMG-20211016-WA0044.jpg", width: 1280, height: 576 },
  { src: "/images/IMG-20211016-WA0049.jpg", width: 1280, height: 576 },
  { src: "/images/IMG-20211016-WA0101.jpg", width: 1280, height: 577 },
  { src: "/images/IMG-20211016-WA0008.jpg", width: 1032, height: 502 },
  { src: "/images/IMG-20220526-WA0079.jpg", width: 1599, height: 720 },
];

function OfficeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="4" y="3" width="11" height="18" rx="1" />
      <rect x="15" y="9" width="5" height="12" rx="1" />
      <path strokeLinecap="round" d="M7 7h2M11 7h1M7 11h2M11 11h1M7 15h2M11 15h1M17 13h1M17 17h1" />
    </svg>
  );
}

function ShowroomIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 9l1.2-4.5A1 1 0 0 1 6.2 4h11.6a1 1 0 0 1 1 .8L20 9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 20v-5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v5" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="6" width="9" height="15" rx="1" />
      <rect x="12" y="2" width="9" height="19" rx="1" />
      <path strokeLinecap="round" d="M6 9h3M6 12h3M6 15h3M15 5h3M15 8h3M15 11h3M15 14h3M15 17h3" />
    </svg>
  );
}

const AREAS = [
  { Icon: OfficeIcon, label: "Office Cleaning" },
  { Icon: ShowroomIcon, label: "Shop & Showroom" },
  { Icon: BuildingIcon, label: "Building Maintenance" },
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/IMG-20220526-WA0079.jpg"
          alt="Commercial cleaning in Kerala by One End Solution"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-28 text-center">
          <SectionLabel>Commercial Cleaning</SectionLabel>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            We Service To Make Your Place Shine
          </h1>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-4">
            {AREAS.map((a) => (
              <div
                key={a.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-6 backdrop-blur"
              >
                <a.Icon className="h-12 w-12 text-white" />
                <h5 className="font-semibold text-white text-center text-lg">{a.label}</h5>
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
              Your Premier Destination for Commercial Cleaning in Kerala
            </h1>
            <p className="mt-5 leading-8">
              In the bustling business landscape of Kerala, maintaining a clean
              and inviting commercial space is paramount. One End Solution, a
              leader in commercial cleaning services, is here to ensure your
              spaces are not only clean but also reflect the professionalism and
              quality of your business.
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/IMG-20220309-WA0090.jpg"
              alt="Office cleaning service in Ernakulam"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services included */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">
            Our Commercial Cleaning in Kerala Includes:
          </h2>
          <ul className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
            <CheckItem>
              Office Cleaning: We specialize in comprehensive office cleaning,
              ensuring a productive and healthy environment for your employees
              and clients. Our meticulous approach covers everything from
              workstations to communal areas.
            </CheckItem>
            <CheckItem>
              Shop and Showroom Cleaning: First impressions matter in retail.
              Our shop and showroom cleaning services are designed to make your
              space welcoming and appealing to customers, highlighting your
              products and services.
            </CheckItem>
            <CheckItem>
              Commercial Space Cleaning: Whether it&rsquo;s a business center or
              a corporate hub, we provide tailored cleaning solutions for all
              types of commercial spaces, big or small.
            </CheckItem>
            <CheckItem>
              Auditorium and Theatre Cleaning: Our team is equipped to handle the
              unique challenges of cleaning auditoriums and theatres, ensuring
              every seat, aisle, and stage is pristine for your next big event.
            </CheckItem>
            <CheckItem>
              Building Cleaning: From the façade to the lobby, our building
              cleaning services encompass a complete top-to-bottom approach,
              maintaining the aesthetics and longevity of your property.
            </CheckItem>
            <CheckItem>
              Water Tank Cleaning Services: Understanding the importance of
              water hygiene, we offer specialized water tank cleaning services.
            </CheckItem>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Commercial Cleaning in Action
          </h2>
        </div>
        <div className="mt-10">
          <Carousel items={GALLERY} alt="Commercial cleaning work by One End Solution in Kerala" />
        </div>
      </section>

      <CtaBand
        heading="Book Cleaning Now"
        buttonLabel="Book Now"
        href={waLink(PHONE_WA_PRIMARY)}
      />

      {/* Why choose */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">
          Why Choose One End Solution?
        </h2>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
          <CheckItem>
            Expertise in Ernakulam: Based in Ernakulam, we bring local knowledge
            and expertise, ensuring our services are tailored to the specific
            needs of businesses in Kerala.
          </CheckItem>
          <CheckItem>
            Customized Solutions: Recognizing that each business has unique
            cleaning requirements, we provide customized cleaning plans to match
            your specific needs.
          </CheckItem>
          <CheckItem>
            Advanced Techniques: Utilizing the latest in cleaning technology and
            methods, we ensure efficient and thorough cleaning of your
            commercial spaces.
          </CheckItem>
          <CheckItem>
            Eco-friendly Approach: Committed to sustainability, we use
            eco-friendly cleaning products and practices, contributing to a
            healthier environment for your staff and clients.
          </CheckItem>
          <CheckItem>
            Trained Professionals: Our team of cleaning experts is trained to
            the highest standards, delivering exceptional service with attention
            to detail.
          </CheckItem>
        </ul>
      </section>

      {/* Commitment + Get in touch */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-4xl px-4 space-y-14">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Commitment to Quality and Reliability
            </h2>
            <p className="mt-5 leading-8">
              At One End Solution, we&rsquo;re not just about cleaning;
              we&rsquo;re about creating environments that enhance your business
              image. Our commitment to quality and reliability has made us a
              trusted name in commercial cleaning in Kerala. We take pride in our
              ability to exceed expectations, ensuring your spaces are not just
              clean but a showcase of your commitment to excellence.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
            <p className="mt-5 leading-8">
              Ready to transform your commercial space with top-notch cleaning
              services? Contact One End Solution today and discover the
              difference we can make. Whether it&rsquo;s office cleaning,
              showroom sprucing, or comprehensive building maintenance,
              we&rsquo;re here to provide the ultimate cleaning experience in
              Kerala. For inquiries or to schedule our services, please reach out
              to us. Let us be your partner in maintaining a pristine,
              professional, and welcoming commercial environment.
            </p>
          </div>
        </div>
      </section>

      {/* Experience the difference */}
      <section className="mx-auto max-w-4xl px-4 py-20 space-y-5 leading-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">
          Experience the One End Solution Difference
        </h2>
        <p>
          Join the many satisfied businesses that have chosen One End Solution
          for their commercial cleaning needs in Kerala. With our focus on
          quality, customization, and eco-friendly practices, we&rsquo;re not
          just cleaning your space; we&rsquo;re enhancing your business image.
          Let&rsquo;s work together to create clean, healthy, and impressive
          commercial spaces that stand out in Kerala&rsquo;s dynamic business
          environment.
        </p>
        <p>
          <strong className="text-ink">Customization to Fit Your Needs:</strong> We
          understand that every business space has unique cleaning requirements.
          Whether it&rsquo;s a cozy shop in the heart of Kochi or a sprawling
          corporate office in Ernakulam, we tailor our cleaning services to meet
          your specific needs. Our flexibility allows us to adapt to your
          schedule, ensuring minimal disruption to your operations.
        </p>
        <p>
          <strong className="text-ink">Advanced Cleaning Techniques:</strong> Leveraging
          the latest in cleaning technology, we ensure that every inch of your
          space receives the utmost care. From deep floor cleaning to thorough
          sanitation of high-touch areas, we employ advanced techniques that
          guarantee a deeper, longer-lasting clean.
        </p>
        <p>
          <strong className="text-ink">Eco-Friendly Practices:</strong> Our commitment to
          the environment is reflected in our use of eco-friendly cleaning
          products and methods. We prioritize the health and safety of your
          employees and clients, while also caring for the planet.
        </p>
        <p>
          <strong className="text-ink">Trained and Trusted Professionals:</strong> Our team
          comprises highly trained professionals who share our ethos of quality
          and attention to detail. They are not only skilled in various cleaning
          techniques but also trained in customer service to ensure a smooth and
          pleasant experience. Our staff undergoes regular training to stay
          updated with the latest cleaning advancements, ensuring top-tier
          service every time.
        </p>
        <p>
          <strong className="text-ink">Quality Assurance and Reliability:</strong> At One
          End Solution, we believe in consistency and reliability. Our quality
          assurance processes are stringent, ensuring that every cleaning job
          meets our high standards. We conduct regular inspections and solicit
          feedback to continually improve our services.
        </p>
        <p>
          <strong className="text-ink">A Partnership Approach:</strong> We view our
          relationship with clients as a partnership. Understanding your
          business&rsquo;s unique needs and adapting our services accordingly is
          paramount. Our team works closely with you to ensure that every aspect
          of our cleaning service aligns with your expectations and business
          ethos.
        </p>
        <p>
          <strong className="text-ink">Lasting Impressions:</strong> Our ultimate goal is
          to create lasting impressions. A clean and well-maintained commercial
          space speaks volumes about your business, and we are here to ensure
          that message is one of professionalism and excellence.
        </p>
        <p>
          <strong className="text-ink">
            Experience the One End Solution Difference Today:
          </strong>{" "}
          Choose One End Solution for your commercial cleaning needs in Kerala
          and experience a service that goes beyond mere cleaning. Contact us to
          learn more about how we can help make your commercial space shine.
          Let&rsquo;s create a cleaner, healthier, and more welcoming environment
          for your business together.
        </p>
      </section>

      <FaqSection faqs={COMMERCIAL_FAQS} idPrefix="commercial" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(COMMERCIAL_FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
