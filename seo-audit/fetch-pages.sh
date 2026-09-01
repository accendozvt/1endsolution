#!/bin/bash
set -e
cd "$(dirname "$0")"
OUTDIR="./html-snapshot"
rm -rf "$OUTDIR"
mkdir -p "$OUTDIR"
BASE="http://localhost:4500"

PATHS=(
  "/|home"
  "/the-best-professional-cleaning-service-in-kochi|deep-cleaning"
  "/residential-cleaning-in-kerala|residential"
  "/commercial-cleaning-in-kerala|commercial"
  "/contact|contact"
  "/blog|blog-listing"
)
while IFS= read -r slug; do
  PATHS+=("/blog/${slug}|blog-${slug}")
done < /tmp/blog-slugs.txt

for entry in "${PATHS[@]}"; do
  IFS='|' read -r path name <<< "$entry"
  curl -s "${BASE}${path}" -o "${OUTDIR}/${name}.html"
done

echo "Fetched ${#PATHS[@]} pages to $OUTDIR"
