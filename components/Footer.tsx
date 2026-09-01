import Link from "next/link";
import Image from "next/image";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  ADDRESS,
  SOCIALS,
} from "@/lib/site";
import CallbackForm from "./CallbackForm";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "./Header";

const QUICK_LINKS = [
  { label: "Cleaning Solutions For You", href: "/" },
  { label: "Who We Are", href: "/the-best-professional-cleaning-service-in-kochi" },
  { label: "Our Residential Services", href: "/residential-cleaning-in-kerala" },
  { label: "Our Commercial Services", href: "/commercial-cleaning-in-kerala" },
  { label: "Cleaning Blog", href: "/blog" },
  { label: "Book Cleaning online", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="rounded-lg bg-white px-4 py-3 inline-block">
            <Image
              src="/images/one-end-logo-1-Copy-2.png"
              alt="One End Solution"
              width={180}
              height={45}
              sizes="144px"
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-4 text-sm leading-6">{ADDRESS}</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand transition"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand transition"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-brand-light transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h3 className="text-white font-semibold text-lg">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-brand-light">
                <PhoneIcon className="h-4 w-4 text-brand-light" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-brand-light">
                <MailIcon className="h-4 w-4 text-brand-light" />
                {EMAIL}
              </a>
            </li>
            <li className="leading-6">
              Business Hours:
              <br />
              8:00 AM – 6:00 PM
              <br />7 Days a Week
            </li>
          </ul>
        </div>

        {/* Callback form */}
        <div>
          <h3 className="text-white font-semibold text-lg">Request A Callback</h3>
          <CallbackForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60">
          Copyright © 1 End Solution Pvt Ltd | Powered by Accendoz
        </div>
      </div>
    </footer>
  );
}
