// Generates public/llms-full.txt by fetching the real rendered <main> content
// of every public page from a running local server and stripping it to plain
// text. Run against a `next start` server (see seo-audit/run-lighthouse.sh
// for how the audit server is started) so the content matches production
// exactly. Re-run after any content change.
//
// Usage: SERVER=http://localhost:4500 node seo-audit/scripts/generate-llms-full.js

const fs = require("fs");
const path = require("path");
const http = require("http");

const SERVER = process.env.SERVER || "http://localhost:4500";
const ROOT = path.resolve(__dirname, "..", "..");
const OUT_FILE = path.join(ROOT, "public", "llms-full.txt");

function fetch(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function htmlToPlainText(html) {
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  let content = mainMatch ? mainMatch[1] : html;
  content = content.replace(/<script[\s\S]*?<\/script>/g, "");
  content = content.replace(/<style[\s\S]*?<\/style>/g, "");
  content = content.replace(/<svg[\s\S]*?<\/svg>/g, "");
  // Use a marker distinct from the "## <Page title>" section boundaries
  // this script inserts between pages, so the two structural levels don't
  // collide when the file is scanned for page headers.
  content = content.replace(/<(h[1-6])[^>]*>/g, "\n\n### ");
  content = content.replace(/<\/(h[1-6])>/g, "\n");
  content = content.replace(/<li[^>]*>/g, "\n- ");
  content = content.replace(/<\/(p|div|section|li|ul)>/g, "\n");
  content = content.replace(/<[^>]+>/g, " ");
  content = content
    .replace(/&amp;/g, "&")
    .replace(/&rsquo;/g, "'")
    .replace(/&ndash;/g, "-")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"');
  content = content.replace(/[ \t]+/g, " ");
  content = content.replace(/\n{3,}/g, "\n\n");
  content = content
    .split("\n")
    .map((l) => l.trim())
    .filter((l, i, arr) => l.length > 0 || (arr[i - 1] && arr[i - 1].length > 0))
    .join("\n");
  return content.trim();
}

const CORE_PAGES = [
  { title: "One End Solution — Best Deep Cleaning Service in Kochi", path: "/", faqConst: "HOME_FAQS" },
  {
    title: "Professional Cleaning Service in Kochi",
    path: "/the-best-professional-cleaning-service-in-kochi",
  },
  {
    title: "Residential Cleaning in Kerala",
    path: "/residential-cleaning-in-kerala",
    faqConst: "RESIDENTIAL_FAQS",
  },
  {
    title: "Commercial Cleaning in Kerala",
    path: "/commercial-cleaning-in-kerala",
    faqConst: "COMMERCIAL_FAQS",
  },
  { title: "Contact Us in Kochi & Ernakulam", path: "/contact" },
  { title: "Cleaning Tips & Guides for Kochi", path: "/blog" },
];

// The FAQ accordion only renders each answer into the DOM once expanded
// (client-side state), so a plain HTML fetch never sees the answer text.
// Parse it straight from the source data instead, and append it explicitly.
function parseFaqArray(source, constName) {
  const arrStart = source.indexOf(`export const ${constName}`);
  if (arrStart === -1) return [];
  const arrEnd = source.indexOf("\n];", arrStart);
  const block = source.slice(arrStart, arrEnd);
  const faqs = [];
  const re = /question:\s*"((?:[^"\\]|\\.)*)"\s*,\s*answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(block))) {
    faqs.push({ question: m[1], answer: m[2] });
  }
  return faqs;
}

function faqSection(faqs) {
  if (!faqs.length) return "";
  const lines = ["\n\nFrequently Asked Questions (full answers):"];
  for (const f of faqs) {
    lines.push(`\nQ: ${f.question}\nA: ${f.answer}`);
  }
  return lines.join("\n");
}

async function getBlogSlugs() {
  const xml = await fetch(`${SERVER}/sitemap.xml`);
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return locs
    .filter((u) => /\/blog\/[^/]+$/.test(u))
    .map((u) => u.split("/blog/")[1]);
}

async function main() {
  const sections = [];
  const faqsSource = fs.readFileSync(path.join(ROOT, "lib", "faqs.ts"), "utf-8");

  for (const p of CORE_PAGES) {
    const html = await fetch(`${SERVER}${p.path}`);
    let text = htmlToPlainText(html);
    if (p.faqConst) {
      const faqs = parseFaqArray(faqsSource, p.faqConst);
      text += faqSection(faqs);
    }
    sections.push(`## ${p.title}\n\n${text}`);
  }

  const slugs = await getBlogSlugs();
  for (const slug of slugs) {
    const html = await fetch(`${SERVER}/blog/${slug}`);
    const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
    const title = h1Match ? h1Match[1].trim() : slug;
    sections.push(`## ${title}\n\n${htmlToPlainText(html)}`);
  }

  const out = sections.join("\n\n---\n\n") + "\n";
  fs.writeFileSync(OUT_FILE, out, "utf-8");
  console.log(`Wrote ${OUT_FILE} (${(out.length / 1024).toFixed(1)}KB, ${CORE_PAGES.length + slugs.length} pages)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
