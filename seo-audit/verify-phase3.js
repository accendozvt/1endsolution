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

(async () => {
  const problems = [];

  // --- sitemap.xml ---
  const sitemap = await fetch("/sitemap.xml");
  if (sitemap.status !== 200) problems.push(`sitemap.xml: HTTP ${sitemap.status}`);
  const isWellFormedXml = /^<\?xml[\s\S]*<urlset[\s\S]*<\/urlset>\s*$/.test(sitemap.body.trim());
  if (!isWellFormedXml) problems.push("sitemap.xml: doesn't look like well-formed XML");

  const urlBlocks = [...sitemap.body.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  console.log(`sitemap.xml: ${urlBlocks.length} URL entries`);
  if (urlBlocks.length !== 26) problems.push(`sitemap.xml: expected 26 entries, found ${urlBlocks.length}`);

  const seenLocs = new Set();
  for (const block of urlBlocks) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    if (!loc) { problems.push("sitemap.xml: entry missing <loc>"); continue; }
    if (!loc.startsWith("https://1endsolution.com")) problems.push(`sitemap.xml: non-absolute/wrong-domain URL: ${loc}`);
    if (loc.includes("?")) problems.push(`sitemap.xml: query-string URL present: ${loc}`);
    if (loc.endsWith("/") && loc !== "https://1endsolution.com/") problems.push(`sitemap.xml: trailing-slash URL: ${loc}`);
    if (!lastmod) problems.push(`sitemap.xml: missing <lastmod> for ${loc}`);
    else if (!/^\d{4}-\d{2}-\d{2}/.test(lastmod)) problems.push(`sitemap.xml: <lastmod> not ISO 8601 for ${loc}: ${lastmod}`);
    if (block.includes("<priority>")) problems.push(`sitemap.xml: <priority> present (spec says omit) for ${loc}`);
    if (block.includes("<changefreq>")) problems.push(`sitemap.xml: <changefreq> present (spec says omit) for ${loc}`);
    if (seenLocs.has(loc)) problems.push(`sitemap.xml: duplicate URL: ${loc}`);
    seenLocs.add(loc);

    // resolves 200, no redirect
    const path = loc.replace("https://1endsolution.com", "") || "/";
    const check = await fetch(path);
    if (check.status !== 200) problems.push(`sitemap.xml: ${loc} resolves to HTTP ${check.status}`);
  }

  // --- robots.txt ---
  const robots = await fetch("/robots.txt");
  if (robots.status !== 200) problems.push(`robots.txt: HTTP ${robots.status}`);
  if (!/Sitemap:\s*https:\/\/1endsolution\.com\/sitemap\.xml/i.test(robots.body))
    problems.push("robots.txt: missing correct Sitemap: pointer");
  for (const bot of ["GPTBot", "ClaudeBot", "anthropic-ai", "PerplexityBot", "Google-Extended", "CCBot"]) {
    if (!robots.body.includes(bot)) problems.push(`robots.txt: missing AI crawler entry for ${bot}`);
  }
  if (!/User-Agent:\s*\*/i.test(robots.body)) problems.push("robots.txt: missing wildcard User-agent rule");

  // Cross-check: no sitemap URL is under a Disallow rule
  const disallows = [...robots.body.matchAll(/Disallow:\s*(\S+)/g)].map((m) => m[1]);
  for (const loc of seenLocs) {
    const path = loc.replace("https://1endsolution.com", "") || "/";
    for (const d of disallows) {
      if (d !== "/" && path.startsWith(d)) problems.push(`sitemap URL ${loc} is under robots.txt Disallow: ${d}`);
    }
  }

  // --- llms.txt ---
  const llms = await fetch("/llms.txt");
  if (llms.status !== 200) problems.push(`llms.txt: HTTP ${llms.status}`);
  if (!llms.body.startsWith("# One End Solution")) problems.push("llms.txt: doesn't start with '# One End Solution'");
  if (!llms.body.includes("## Pages")) problems.push("llms.txt: missing ## Pages section");
  if (!llms.body.includes("## Contact")) problems.push("llms.txt: missing ## Contact section");
  const llmsLinks = [...llms.body.matchAll(/\[([^\]]+)\]\((https:\/\/1endsolution\.com[^)]*)\)/g)];
  console.log(`llms.txt: ${llmsLinks.length} page links`);
  if (llmsLinks.length !== 26) problems.push(`llms.txt: expected 26 page links, found ${llmsLinks.length}`);

  // --- llms-full.txt ---
  const llmsFull = await fetch("/llms-full.txt");
  if (llmsFull.status !== 200) problems.push(`llms-full.txt: HTTP ${llmsFull.status}`);
  const h2Count = (llmsFull.body.match(/^## /gm) || []).length;
  console.log(`llms-full.txt: ${h2Count} page sections, ${(llmsFull.body.length / 1024).toFixed(1)}KB`);
  if (h2Count !== 26) problems.push(`llms-full.txt: expected 26 '## ' page headers, found ${h2Count}`);
  const qCount = (llmsFull.body.match(/^Q: /gm) || []).length;
  if (qCount !== 60) problems.push(`llms-full.txt: expected 60 FAQ Q&A pairs, found ${qCount}`);

  console.log();
  if (problems.length === 0) {
    console.log("ALL PHASE 3 CHECKS PASSED");
  } else {
    console.log(`${problems.length} PROBLEM(S) FOUND:\n`);
    problems.forEach((p) => console.log(" - " + p));
  }
})();
