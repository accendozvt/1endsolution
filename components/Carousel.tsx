"use client";

import { useRef } from "react";
import Image from "next/image";

type Item = { src: string; width: number; height: number };

export default function Carousel({
  items,
  alt,
  aspect = "landscape",
}: {
  items: Item[];
  alt: string;
  aspect?: "landscape" | "portrait";
}) {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={track}
        className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 px-1 py-2"
      >
        {items.map((it) => (
          <div
            key={it.src}
            className={`relative shrink-0 snap-start overflow-hidden rounded-xl bg-mist ${
              aspect === "portrait"
                ? "h-96 w-56 sm:h-[28rem] sm:w-64"
                : "h-56 w-80 sm:h-64 sm:w-[26rem]"
            }`}
          >
            <Image
              src={it.src}
              alt={alt}
              fill
              quality={70}
              sizes="(max-width: 640px) 60vw, 420px"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => scrollBy(-1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-md hover:bg-brand hover:text-white transition"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scrollBy(1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-md hover:bg-brand hover:text-white transition"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
