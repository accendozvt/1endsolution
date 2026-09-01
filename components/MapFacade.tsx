"use client";

import { useState } from "react";

export default function MapFacade({
  src,
  title,
  address,
}: {
  src: string;
  title: string;
  address: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={src}
        title={title}
        className="h-full w-full min-h-96 border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative flex h-full min-h-96 w-full flex-col items-center justify-center gap-3 bg-ink px-6 text-center"
      aria-label={`Load interactive map for ${address}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 text-brand-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      </svg>
      <span className="text-sm text-white/70">{address}</span>
      <span className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition group-hover:bg-brand-light">
        Load Interactive Map
      </span>
    </button>
  );
}
