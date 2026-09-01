const http = require("http");

function fetch(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:4500${path}`, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve({ status: res.statusCode, body: data, redirected: res.statusCode >= 300 && res.statusCode < 400 }));
    }).on("error", reject);
  });
}

const BLOG_SLUGS = require("fs")
  .readFileSync("lib/blog-posts.ts", "utf-8")
  .match(/slug: "([^"]*)"/g)
  .map((m) => m.match(/slug: "([^"]*)"/)[1]);

const PATHS = [
  "/",
  "/the-best-professional-cleaning-service-in-kochi",
  "/residential-cleaning-in-kerala",
  "/commercial-cleaning-in-kerala",
  "/contact",
  "/blog",
  ...BLOG_SLUGS.map((s) => `/blog/${s}`),
];

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1] : null;
}

(async () => {
  const titles = new Map();
  const descriptions = new Map();
  const canonicals = new Map();
  const problems = [];

  for (const p of PATHS) {
    const { status, body } = await fetch(p);
    if (status !== 200) problems.push(`${p}: HTTP ${status} (expected 200)`);

    const charsetFirst = /^<!DOCTYPE html><html[^>]*><head><meta charSet="utf-8"/.test(body.replace(/\s+/g, ""));
    const viewport = extract(body, /<meta name="viewport" content="([^"]*)"/);
    const lang = extract(body, /<html lang="([^"]*)"/);
    const title = extract(body, /<title>([^<]*)<\/title>/);
    const description = extract(body, /<meta name="description" content="([^"]*)"/);
    const canonical = extract(body, /<link rel="canonical" href="([^"]*)"/);
    const robots = extract(body, /<meta name="robots" content="([^"]*)"/);
    const themeColor = extract(body, /<meta name="theme-color" content="([^"]*)"/);
    const clickHereCount = (body.match(/>Click here</g) || []).length;

    if (!viewport || viewport !== "width=device-width, initial-scale=1")
      problems.push(`${p}: bad viewport tag: ${viewport}`);
    if (lang !== "en-IN") problems.push(`${p}: lang is "${lang}", expected en-IN`);
    if (!title) problems.push(`${p}: missing <title>`);
    else if (title.length < 40 || title.length > 65)
      problems.push(`${p}: title length ${title.length} out of 50-60 comfortable range: "${title}"`);
    if (!description) problems.push(`${p}: missing meta description`);
    else if (description.length < 135 || description.length > 165)
      problems.push(`${p}: description length ${description.length} out of 140-160 range`);
    if (!canonical) problems.push(`${p}: missing canonical`);
    else if (canonical.endsWith("/") && canonical !== "https://1endsolution.com/")
      problems.push(`${p}: canonical has trailing slash: ${canonical}`);
    if (!robots || !robots.includes("index") || !robots.includes("follow"))
      problems.push(`${p}: bad robots meta: ${robots}`);
    if (!themeColor) problems.push(`${p}: missing theme-color meta`);
    if (clickHereCount > 0) problems.push(`${p}: still has ${clickHereCount} "Click here" link(s)`);

    if (title) {
      if (titles.has(title)) problems.push(`DUPLICATE TITLE: "${title}" on ${p} and ${titles.get(title)}`);
      titles.set(title, p);
    }
    if (description) {
      if (descriptions.has(description)) problems.push(`DUPLICATE DESCRIPTION on ${p} and ${descriptions.get(description)}`);
      descriptions.set(description, p);
    }
    if (canonical) {
      if (canonicals.has(canonical)) problems.push(`DUPLICATE CANONICAL: ${canonical} on ${p} and ${canonicals.get(canonical)}`);
      canonicals.set(canonical, p);
      // verify canonical doesn't redirect (self-reference check)
      const canonicalPath = canonical.replace("https://1endsolution.com", "");
      const check = await fetch(canonicalPath || "/");
      if (check.status !== 200) problems.push(`${p}: canonical URL ${canonical} does not resolve to 200 (got ${check.status})`);
    }
  }

  console.log(`Checked ${PATHS.length} pages.\n`);
  if (problems.length === 0) {
    console.log("ALL PHASE 1 CHECKS PASSED");
  } else {
    console.log(`${problems.length} PROBLEM(S) FOUND:\n`);
    problems.forEach((p) => console.log(" - " + p));
  }
})();
