"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faqs";
import { SectionLabel } from "./ui";

function FaqItem({ faq, id }: { faq: Faq; id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white ring-1 ring-mist">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-semibold text-ink">{faq.question}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 shrink-0 text-brand transition-transform ${open ? "rotate-45" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" d="M12 5v14M5 12h14" />
        </svg>
      </button>
      {open && (
        <div id={id} className="px-5 pb-4 leading-7 text-body">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FaqSection({
  faqs,
  heading = "Frequently Asked Questions",
  idPrefix,
}: {
  faqs: Faq[];
  heading?: string;
  idPrefix: string;
}) {
  const half = Math.ceil(faqs.length / 2);
  const columnOne = faqs.slice(0, half);
  const columnTwo = faqs.slice(half);

  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <SectionLabel>Got Questions?</SectionLabel>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{heading}</h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            {columnOne.map((faq, i) => (
              <FaqItem key={i} faq={faq} id={`${idPrefix}-faq-${i}`} />
            ))}
          </div>
          <div className="space-y-4">
            {columnTwo.map((faq, i) => (
              <FaqItem key={i} faq={faq} id={`${idPrefix}-faq-${half + i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
