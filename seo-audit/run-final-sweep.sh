#!/bin/bash
set -e
cd "$(dirname "$0")"
OUTDIR="./final"
mkdir -p "$OUTDIR"

PAGES=(
  "/|home"
  "/the-best-professional-cleaning-service-in-kochi|deep-cleaning"
  "/residential-cleaning-in-kerala|residential"
  "/commercial-cleaning-in-kerala|commercial"
  "/contact|contact"
  "/blog|blog-listing"
)

while IFS= read -r slug; do
  PAGES+=("/blog/${slug}|blog-${slug}")
done < /tmp/blog-slugs.txt

echo "Total pages: ${#PAGES[@]}"

for entry in "${PAGES[@]}"; do
  IFS='|' read -r path name <<< "$entry"
  echo "=== $name ($path) ==="
  bash ./run-lighthouse.sh "$path" "$name" "$OUTDIR"
done

echo "Sweep complete."
