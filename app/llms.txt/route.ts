import { NextResponse } from "next/server";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_URL, SITE_NAME, ADDRESS, EMAIL, PHONE_DISPLAY, CORE_SERVICES } from "@/lib/site";

export const dynamic = "force-static";

const CORE_PAGES = [
  {
    title: "One End Solution — Best Deep Cleaning Service in Kochi",
    path: "/",
    summary:
      "Homepage covering residential and commercial deep cleaning services, the full core service list, and a company overview.",
  },
  {
    title: "Professional Cleaning Service in Kochi",
    path: "/the-best-professional-cleaning-service-in-kochi",
    summary:
      "About One End Solution — founder message, mission and vision, and why customers choose the company.",
  },
  {
    title: "Residential Cleaning in Kerala",
    path: "/residential-cleaning-in-kerala",
    summary:
      "Home deep cleaning services across Kerala, including kitchen, bathroom, and move-in/move-out cleaning.",
  },
  {
    title: "Commercial Cleaning in Kerala",
    path: "/commercial-cleaning-in-kerala",
    summary: "Office, showroom, and commercial space cleaning services across Kerala.",
  },
  {
    title: "Contact Us in Kochi & Ernakulam",
    path: "/contact",
    summary: "Contact details, address, and booking form for scheduling cleaning services.",
  },
  {
    title: "Cleaning Tips & Guides for Kochi",
    path: "/blog",
    summary: "Blog index of cleaning tips and local guides for homes and businesses.",
  },
];

function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${SITE_NAME}`);
  lines.push("");
  lines.push(
    "> Discover the best deep cleaning service in Kochi, specializing in both commercial and residential cleaning, offer cleaning, maintenance & sanitization services."
  );
  lines.push("");
  lines.push(
    "One End Solution is a facility management and deep cleaning company based in Vytilla, Ernakulam, Kerala, with over 20 years of experience serving homes and businesses across Kochi and the wider Kerala region. The company provides residential and commercial deep cleaning, housekeeping, maintenance, disinfection, and pest control, working with private homes as well as offices, banks, showrooms, hospitals, and malls. One End Solution also publishes a cleaning-tips blog covering practical, Kochi-specific advice on deep cleaning, monsoon preparation, and workplace hygiene."
  );
  lines.push("");

  lines.push("## Pages");
  for (const p of CORE_PAGES) {
    lines.push(`- [${p.title}](${SITE_URL}${p.path === "/" ? "" : p.path}): ${p.summary}`);
  }
  for (const post of BLOG_POSTS) {
    lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`);
  }
  lines.push("");

  lines.push("## Products / Services");
  lines.push("- Residential Cleaning: Deep cleaning for homes, flats, and villas across Kerala.");
  lines.push("- Commercial Cleaning: Cleaning for offices, showrooms, banks, hospitals, and malls across Kerala.");
  for (const s of CORE_SERVICES) {
    lines.push(`- ${s}`);
  }
  lines.push("");

  lines.push("## Contact");
  lines.push(`- Website: ${SITE_URL}`);
  lines.push(`- Email: ${EMAIL}`);
  lines.push(`- Phone: ${PHONE_DISPLAY}`);
  lines.push(`- Location: ${ADDRESS}`);
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new NextResponse(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
