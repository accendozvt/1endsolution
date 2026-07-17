"use client";

import { useState } from "react";
import { PHONE_WA_PRIMARY, waLink } from "@/lib/site";

export default function CallbackForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'd like to request a callback.\nName: ${name}\nNumber: ${number}`;
    window.open(waLink(PHONE_WA_PRIMARY, msg), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={submit} className="mt-4 space-y-3">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full rounded-md bg-white/10 border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-brand-light"
      />
      <input
        type="tel"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Contact Number"
        className="w-full rounded-md bg-white/10 border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-brand-light"
      />
      <button
        type="submit"
        className="w-full rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-light transition"
      >
        Send Request
      </button>
    </form>
  );
}
