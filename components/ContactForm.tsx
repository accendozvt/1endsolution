"use client";

import { useState } from "react";
import { PHONE_WA_PRIMARY, waLink } from "@/lib/site";

const inputCls =
  "w-full rounded-lg border border-mist bg-white px-4 py-3 text-sm text-ink placeholder:text-body/60 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    residential: false,
    commercial: false,
  });

  const set = (k: string, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const services =
      [form.residential && "Residential Cleaning", form.commercial && "Commercial Cleaning"]
        .filter(Boolean)
        .join(", ") || "Not specified";
    const msg = [
      "Hi, I'd like to schedule a cleaning.",
      `Name: ${form.name}`,
      `Contact Number: ${form.phone}`,
      `Email: ${form.email}`,
      `Address: ${form.address}`,
      `Service: ${services}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(waLink(PHONE_WA_PRIMARY, msg), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          className={inputCls}
        />
        <input
          type="tel"
          required
          placeholder="Contact Number"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          className={inputCls}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          className={inputCls}
        />
        <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) => set("address", e.target.value)}
          className={inputCls}
        />
      </div>
      <fieldset className="flex flex-wrap gap-6">
        <legend className="sr-only">Service type</legend>
        <label className="flex items-center gap-2 text-sm font-medium text-ink">
          <input
            type="checkbox"
            checked={form.residential}
            onChange={(e) => set("residential", e.target.checked)}
            className="h-4 w-4 accent-[#00ac97]"
          />
          Residential Cleaning
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-ink">
          <input
            type="checkbox"
            checked={form.commercial}
            onChange={(e) => set("commercial", e.target.checked)}
            className="h-4 w-4 accent-[#00ac97]"
          />
          Commercial Cleaning
        </label>
      </fieldset>
      <textarea
        rows={4}
        placeholder="Message"
        value={form.message}
        onChange={(e) => set("message", e.target.value)}
        className={inputCls}
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-brand-light"
      >
        Send Request
      </button>
    </form>
  );
}
