const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "final");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));

const pages = {};
for (const f of files) {
  const m = f.match(/^(.*)-(mobile|desktop)\.json$/);
  if (!m) continue;
  const [, name, form] = m;
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
  const cats = data.categories;
  pages[name] = pages[name] || {};
  pages[name][form] = {
    performance: Math.round(cats.performance.score * 100),
    accessibility: Math.round(cats.accessibility.score * 100),
    bestPractices: Math.round(cats["best-practices"].score * 100),
    seo: Math.round(cats.seo.score * 100),
  };
}

const names = Object.keys(pages).sort();
let out = "| Page | Mobile Perf | Mobile A11y | Mobile BP | Mobile SEO | Desktop Perf | Desktop A11y | Desktop BP | Desktop SEO |\n";
out += "|---|---|---|---|---|---|---|---|---|\n";
let allPerfect = true;
const notPerfect = [];
for (const name of names) {
  const m = pages[name].mobile;
  const d = pages[name].desktop;
  if (!m || !d) {
    out += `| ${name} | MISSING DATA |\n`;
    continue;
  }
  out += `| ${name} | ${m.performance} | ${m.accessibility} | ${m.bestPractices} | ${m.seo} | ${d.performance} | ${d.accessibility} | ${d.bestPractices} | ${d.seo} |\n`;
  for (const [scope, scores] of [["mobile", m], ["desktop", d]]) {
    for (const [cat, val] of Object.entries(scores)) {
      if (val !== 100) {
        allPerfect = false;
        notPerfect.push(`${name} / ${scope} / ${cat} = ${val}`);
      }
    }
  }
}

fs.writeFileSync(path.join(__dirname, "final-scores-table.md"), out);
console.log(out);
console.log("\nAll perfect:", allPerfect);
if (!allPerfect) {
  console.log("\nNot-100 entries:");
  notPerfect.forEach((l) => console.log(" -", l));
}
