import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PromiseCard, CheckItem, SectionLabel } from "@/components/ui";
import { WhatsAppIcon } from "@/components/Header";
import { SITE_URL, PHONE_WA_BOOKING, waLink } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/the-best-professional-cleaning-service-in-kochi/`;

export const metadata: Metadata = {
  title: "The Best Professional Cleaning Service in Kochi - 1End Solution",
  description:
    "Looking for a Professional Cleaning Service in Kochi? One End Solution offers top-tier cleaning for business and residential spaces.",
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "The Best Professional Cleaning Service in Kochi - 1End Solution",
    description:
      "Looking for a Professional Cleaning Service in Kochi? One End Solution offers top-tier cleaning for business and residential spaces.",
    url: PAGE_URL,
    images: [{ url: `${SITE_URL}/images/IMG-20220526-WA0086.jpg` }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/IMG-20220526-WA0082.jpg"
          alt="The cleaner team of One End Solution"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-5"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-28 text-center">
          <SectionLabel>About One End Solution</SectionLabel>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            The Cleaner Team
          </h1>
        </div>
      </section>

      {/* Founder message */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative mx-auto aspect-[9/16] max-w-sm overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/IMG-20220526-WA0086.jpg"
                alt="One End Solution professional cleaner at work"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3 space-y-5 leading-8">
            <h6 className="text-sm font-semibold uppercase tracking-widest text-brand">
              Message from the founder
            </h6>
            <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
              One End Solution: Your Trusted Partner in Professional Cleaning
              Services in Ernakulam
            </h2>
            <p>
              Welcome to One End Solution, a name synonymous with excellence and
              reliability in professional cleaning service in Kochi. Our journey
              began with a simple yet powerful vision: to redefine the standards
              of cleanliness and hygiene in Kerala through our comprehensive
              range of cleaning services.
            </p>
            <p>
              At One End Solution, we are more than just a cleaning service
              provider; we are your partners in maintaining clean, healthy, and
              beautiful spaces. Our commitment to quality, customer satisfaction,
              and eco-friendly practices sets us apart as the leading
              professional cleaning service in Kochi. Trust us to take care of
              your cleaning needs, so you can focus on what truly matters to you.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">
            Why Choose One End Solution?
          </h2>
          <div className="mx-auto mt-10 max-w-4xl space-y-5 leading-8">
            <p>
              <strong className="text-ink">Expertise in Professional Cleaning:</strong>{" "}
              With years of experience under our belt, we bring an unmatched
              level of expertise and knowledge to every cleaning project, big or
              small.
            </p>
            <p>
              <strong className="text-ink">Tailored Services:</strong> We understand that
              each client has unique needs. That&rsquo;s why our services are
              customized to fit the specific requirements of your space, whether
              it&rsquo;s a corporate office, a retail shop, or a cozy home.
            </p>
            <p>
              <strong className="text-ink">Advanced Techniques and Tools:</strong> Our team
              uses the latest in cleaning technology and methods, ensuring a
              thorough and efficient cleaning process that leaves your space
              immaculate.
            </p>
            <p>
              <strong className="text-ink">Eco-Friendly Approach:</strong> In line with our
              commitment to sustainability, we employ eco-friendly cleaning
              practices that are safe for both the environment and the occupants
              of your space.
            </p>
            <p>
              <strong className="text-ink">Trained Professionals:</strong> Our staff is not
              only highly skilled but also trained in customer service to ensure
              a smooth, respectful, and hassle-free experience for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Promise cards */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-center text-3xl sm:text-4xl font-bold leading-snug">
          We Promise You the the Best Professional Cleaning Service in Kochi
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <PromiseCard
            icon="/images/online-booking.png"
            title="Professional Quality Guarantee"
          />
          <PromiseCard
            icon="/images/easy-payment.png"
            title="Easy and Affordable Payments"
          />
          <PromiseCard
            icon="/images/certificate-guarantee.png"
            title="Best Service Guarantee"
          />
        </div>
        <p className="mx-auto mt-12 max-w-4xl text-center leading-8">
          In the dynamic city of Kochi, where professionalism is paramount, One
          End Solution stands as a beacon of excellence in cleaning services.
          Our commitment to providing top-tier professional cleaning service in
          Kochi sets us apart, offering businesses and residents all over
          kerala, a superior standard of cleanliness and hygiene.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-brand">
        <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <h4 className="text-2xl sm:text-3xl font-bold text-white">
            Schedule Cleaning Now &amp; Get Free Estimate
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waLink(PHONE_WA_BOOKING)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand shadow-md transition hover:bg-ink hover:text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Contact Us Now
            </a>
            <Link
              href="/residential-cleaning-in-kerala"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-brand"
            >
              Residential Cleaning
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">
            Our Company Policy
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-10 shadow-sm ring-1 ring-mist">
              <h6 className="text-sm font-semibold uppercase tracking-widest text-brand">
                Our Mission
              </h6>
              <h6 className="mt-2 text-xl font-bold text-ink">
                Deliver Unparalleled Professional Cleaning
              </h6>
              <p className="mt-4 leading-8">
                At One End Solution, our mission is to deliver unparalleled
                professional cleaning services that exceed expectations in both
                quality and efficiency. We are dedicated to creating clean, safe,
                and healthy environments for our clients, whether in their homes,
                offices, or commercial spaces. Through our expertly trained
                staff, eco-friendly practices, and commitment to customer
                satisfaction, we aim to transform the standard of cleanliness and
                hygiene in every project we undertake. Our focus remains
                steadfast on being a reliable and trusted partner in maintaining
                immaculate spaces, contributing to the well-being and comfort of
                our clients and their communities.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-10 shadow-sm ring-1 ring-mist">
              <h6 className="text-sm font-semibold uppercase tracking-widest text-brand">
                Our Vision
              </h6>
              <h6 className="mt-2 text-xl font-bold text-ink">
                Recognized Leading Professional Cleaners
              </h6>
              <p className="mt-4 leading-8">
                Our vision is to be recognized as the leading provider of
                professional cleaning service in Kochi and beyond, setting the
                benchmark for excellence and innovation in the industry. We
                aspire to revolutionize the cleaning sector with our eco-friendly
                and sustainable approaches, while continuously adapting to the
                evolving needs of our clients. We envision a future where every
                space we service becomes a testament to our unwavering dedication
                to quality, environmental responsibility, and exceptional
                service. We aim to inspire positive change in the communities we
                serve, making them cleaner, healthier, and more vibrant places to
                live and work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning experts */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/IMG-20220626-WA0024.jpg"
              alt="Our cleaning experts at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Cleaning Experts
            </h2>
            <ul className="mt-8 space-y-4">
              <CheckItem>
                Comprehensive Office Cleaning: From regular office maintenance to
                deep cleaning, we ensure your workplace is a beacon of
                cleanliness and professionalism.
              </CheckItem>
              <CheckItem>
                Residential Cleaning: We offer thorough cleaning services for
                homes of all sizes in Kochi, focusing on creating a clean,
                healthy, and inviting living environment.
              </CheckItem>
              <CheckItem>
                Specialized Cleaning Solutions: Whether it&rsquo;s deep carpet
                cleaning, upholstery cleaning, or water tank cleaning, our team
                is equipped to handle specialized cleaning tasks with ease.
              </CheckItem>
              <CheckItem>
                Post-Construction and Move-In Cleaning: We provide detailed
                cleaning services for newly constructed or renovated spaces,
                ensuring they are ready for occupancy.
              </CheckItem>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience the difference */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Experience the One End Solution Difference
          </h2>
          <p className="mt-6 leading-8">
            Choosing One End Solution for your professional cleaning service in
            Kochi means selecting a partner committed to excellence. Our
            attention to detail, customer-focused approach, and relentless
            pursuit of perfection ensure that your space is not just clean but
            truly transformed. Ready to experience a new level of cleanliness?
            Reach out to One End Solution for all your professional cleaning
            needs in Kochi. Contact us today to schedule a service or to learn
            more about how we can make a difference in your space.
          </p>
          <a
            href={waLink(PHONE_WA_BOOKING)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-brand-light"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Contact Us Now
          </a>
        </div>
      </section>
    </>
  );
}
