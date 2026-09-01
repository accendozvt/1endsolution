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

const PATHS = [
  "/",
  "/the-best-professional-cleaning-service-in-kochi",
  "/residential-cleaning-in-kerala",
  "/commercial-cleaning-in-kerala",
  "/contact",
  "/blog",
  ...BLOG_SLUGS.map((s) => `/blog/${s}`),
];

const REQUIRED_OG = ["og:type", "og:site_name", "og:locale", "og:url", "og:title", "og:description"];

function extractAllMeta(html, attr) {
  const re = new RegExp(`<meta ${attr}="([^"]*)" content="([^"]*)"`, "g");
  const out = [];
  let m;
  while ((m = re.exec(html))) out.push({ key: m[1], value: m[2] });
  return out;
}

(async () => {
  const problems = [];
  const imageUrlsToCheck = new Set();

  for (const p of PATHS) {
    const { body } = await fetch(p);
    const ogTags = extractAllMeta(body, 'property');
    const twTags = extractAllMeta(body, 'name').filter((t) => t.key.startsWith("twitter:"));
    const ogKeys = ogTags.map((t) => t.key);

    for (const req of REQUIRED_OG) {
      if (!ogKeys.includes(req)) problems.push(`${p}: missing ${req}`);
    }

    // Most pages fall back to the site-wide OG image (webp+png, 2 entries).
    // Blog posts override with their own single generated image (1 entry).
    const ogImages = ogTags.filter((t) => t.key === "og:image");
    const isBlogPost = p.startsWith("/blog/") && p !== "/blog";
    const minImages = isBlogPost ? 1 : 2;
    if (ogImages.length < minImages)
      problems.push(`${p}: expected >=${minImages} og:image entries, found ${ogImages.length}`);
    ogImages.forEach((img) => imageUrlsToCheck.add(img.value));

    const imgWidths = ogTags.filter((t) => t.key === "og:image:width").map((t) => t.value);
    const imgHeights = ogTags.filter((t) => t.key === "og:image:height").map((t) => t.value);
    const imgAlts = ogTags.filter((t) => t.key === "og:image:alt").map((t) => t.value);
    const expectedWidths = isBlogPost ? ["1376"] : ["1200"];
    const expectedHeights = isBlogPost ? ["768"] : ["630"];
    if (!imgWidths.every((w) => expectedWidths.includes(w)))
      problems.push(`${p}: og:image:width not in ${expectedWidths}: ${imgWidths}`);
    if (!imgHeights.every((h) => expectedHeights.includes(h)))
      problems.push(`${p}: og:image:height not in ${expectedHeights}: ${imgHeights}`);
    if (imgAlts.some((a) => !a)) problems.push(`${p}: og:image:alt missing on one image`);

    const ogUrl = ogTags.find((t) => t.key === "og:url")?.value;
    if (ogUrl && !ogUrl.startsWith("https://1endsolution.com")) problems.push(`${p}: og:url not absolute: ${ogUrl}`);
    if (ogUrl && ogUrl.endsWith("/") && ogUrl !== "https://1endsolution.com/")
      problems.push(`${p}: og:url has trailing slash: ${ogUrl}`);

    const expectedType = p.startsWith("/blog/") && p !== "/blog" ? "article" : "website";
    const actualType = ogTags.find((t) => t.key === "og:type")?.value;
    if (actualType !== expectedType) problems.push(`${p}: og:type is "${actualType}", expected "${expectedType}"`);

    // Twitter Card
    const twKeys = twTags.map((t) => t.key);
    for (const req of ["twitter:card", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt"]) {
      if (!twKeys.includes(req)) problems.push(`${p}: missing ${req}`);
    }
    const twCard = twTags.find((t) => t.key === "twitter:card")?.value;
    if (twCard !== "summary_large_image") problems.push(`${p}: twitter:card is "${twCard}", expected summary_large_image`);
    if (twKeys.includes("twitter:site")) problems.push(`${p}: twitter:site present but no real X account exists`);
  }

  // Verify OG image URLs actually resolve
  for (const url of imageUrlsToCheck) {
    const path = url.replace("https://1endsolution.com", "");
    const { status } = await fetch(path);
    if (status !== 200) problems.push(`OG image ${url} returned ${status}`);
  }

  console.log(`Checked ${PATHS.length} pages, ${imageUrlsToCheck.size} unique OG image URLs.\n`);
  if (problems.length === 0) {
    console.log("ALL PHASE 2 CHECKS PASSED");
  } else {
    console.log(`${problems.length} PROBLEM(S) FOUND:\n`);
    problems.forEach((p) => console.log(" - " + p));
  }
})();
