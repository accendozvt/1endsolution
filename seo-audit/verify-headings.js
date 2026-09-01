const http = require("http");

function fetch(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:4500${path}`, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve(data));
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

(async () => {
  const problems = [];

  for (const p of PATHS) {
    const html = await fetch(p);
    // whole document, not just <main> — includes header/footer
    const headings = [...html.matchAll(/<(h[1-6])[^>]*>/g)].map((m) => Number(m[1][1]));

    const h1Count = headings.filter((h) => h === 1).length;
    if (h1Count !== 1) problems.push(`${p}: expected exactly 1 <h1>, found ${h1Count}`);
    if (headings[0] !== 1) problems.push(`${p}: first heading in the document is h${headings[0]}, not h1`);

    let maxSeen = 0;
    for (const h of headings) {
      if (h > maxSeen + 1) {
        problems.push(`${p}: heading skip — jumped to h${h} after max-seen h${maxSeen} (sequence: ${headings.join(",")})`);
        break;
      }
      maxSeen = Math.max(maxSeen, h);
    }
  }

  console.log(`Checked ${PATHS.length} pages (full document, header+main+footer).\n`);
  if (problems.length === 0) {
    console.log("ALL HEADING CHECKS PASSED");
  } else {
    console.log(`${problems.length} PROBLEM(S) FOUND:\n`);
    problems.forEach((p) => console.log(" - " + p));
  }
})();
