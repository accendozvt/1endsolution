const http = require("http");

function fetch(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:4500${path}`, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve({ status: res.statusCode, body: data }));
    }).on("error", reject);
  });
}

const BLOG_SLUGS = require("fs")
  .readFileSync("lib/blog-posts.ts", "utf-8")
  .match(/slug: "([^"]*)"/g)
  .map((m) => m.match(/slug: "([^"]*)"/)[1]);

// path -> the @type values that MUST appear among the page's JSON-LD blocks
const EXPECTATIONS = {
  "/": ["WebSite", "WebPage", "FAQPage"],
  "/the-best-professional-cleaning-service-in-kochi": ["WebSite", "WebPage", "BreadcrumbList"],
  "/residential-cleaning-in-kerala": ["WebSite", "WebPage", "BreadcrumbList", "Service", "FAQPage"],
  "/commercial-cleaning-in-kerala": ["WebSite", "WebPage", "BreadcrumbList", "Service", "FAQPage"],
  "/contact": ["WebSite", "WebPage", "BreadcrumbList"],
  "/blog": ["WebSite", "WebPage", "BreadcrumbList", "Blog"],
};
for (const slug of BLOG_SLUGS) {
  EXPECTATIONS[`/blog/${slug}`] = ["WebSite", "WebPage", "BreadcrumbList", "BlogPosting"];
}
// Organization/LocalBusiness is emitted site-wide via the root layout
const GLOBAL_TYPES = ["GeneralContractor", "LocalBusiness"];

const REQUIRED_FIELDS = {
  WebSite: ["name", "url"],
  WebPage: ["name", "description", "url", "isPartOf", "inLanguage"],
  BreadcrumbList: ["itemListElement"],
  Service: ["name", "description", "provider", "areaServed"],
  FAQPage: ["mainEntity"],
  BlogPosting: ["headline", "datePublished", "dateModified", "author", "publisher", "image"],
  Blog: ["name", "url", "blogPost"],
  Organization: ["name", "url"],
  LocalBusiness: ["name", "url", "address"],
};

function typesOf(node) {
  const t = node["@type"];
  return Array.isArray(t) ? t : [t];
}

(async () => {
  const problems = [];

  for (const [path, expectedTypes] of Object.entries(EXPECTATIONS)) {
    const { status, body } = await fetch(path);
    if (status !== 200) { problems.push(`${path}: HTTP ${status}`); continue; }

    const blocks = [...body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
      (m) => m[1]
    );

    const parsed = [];
    for (const raw of blocks) {
      try {
        parsed.push(JSON.parse(raw));
      } catch (e) {
        problems.push(`${path}: malformed JSON-LD block — ${e.message}`);
      }
    }

    const foundTypes = new Set();
    for (const node of parsed) {
      for (const t of typesOf(node)) foundTypes.add(t);
      for (const t of typesOf(node)) {
        const required = REQUIRED_FIELDS[t];
        if (!required) continue;
        for (const field of required) {
          if (!(field in node)) problems.push(`${path}: ${t} node missing required field "${field}"`);
        }
      }
      if (!node["@context"]) problems.push(`${path}: a JSON-LD node is missing @context`);
    }

    for (const t of expectedTypes) {
      if (!foundTypes.has(t)) problems.push(`${path}: expected @type "${t}" not found`);
    }
    for (const t of GLOBAL_TYPES) {
      if (!foundTypes.has(t)) problems.push(`${path}: expected global @type "${t}" not found`);
    }
  }

  console.log(`Checked ${Object.keys(EXPECTATIONS).length} pages for JSON-LD structure.\n`);
  if (problems.length === 0) {
    console.log("ALL PHASE 4 CHECKS PASSED");
  } else {
    console.log(`${problems.length} PROBLEM(S) FOUND:\n`);
    problems.forEach((p) => console.log(" - " + p));
  }
})();
