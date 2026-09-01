import Image from "next/image";
import { WhatsAppIcon } from "./Header";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-widest text-brand">
      {children}
    </p>
  );
}

export function CtaBand({
  heading,
  buttonLabel,
  href,
}: {
  heading: string;
  buttonLabel: string;
  href: string;
}) {
  return (
    <section className="cta-band bg-brand">
      <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl">
          {heading}
        </h2>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand shadow-md transition hover:bg-ink hover:text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}

export function PromiseCard({
  icon,
  title,
}: {
  icon: string;
  title: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-mist transition hover:shadow-md">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-mist">
        <Image src={icon} alt="" width={48} height={48} className="h-12 w-12 object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
    </div>
  );
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        viewBox="0 0 24 24"
        className="mt-0.5 h-5 w-5 shrink-0 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="leading-7">{children}</span>
    </li>
  );
}
