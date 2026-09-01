#!/bin/bash
set -e
cd "$(dirname "$0")"
OUTDIR="./final"

PAGES=(
  "/blog/sofa-carpet-cleaning-stains-allergens|blog-sofa-carpet-cleaning-stains-allergens"
  "/blog/eco-friendly-cleaning-products-effectiveness|blog-eco-friendly-cleaning-products-effectiveness"
  "/blog/office-cleaning-schedule-daily-weekly-monthly|blog-office-cleaning-schedule-daily-weekly-monthly"
  "/blog/how-often-deep-clean-home-kerala-climate|blog-how-often-deep-clean-home-kerala-climate"
  "/blog/auditorium-event-venue-cleaning-kochi|blog-auditorium-event-venue-cleaning-kochi"
  "/blog/monsoon-cleaning-tips-kerala|blog-monsoon-cleaning-tips-kerala"
)

for entry in "${PAGES[@]}"; do
  IFS='|' read -r path name <<< "$entry"
  echo "=== $name ($path) ==="
  tries=0
  until bash ./run-lighthouse.sh "$path" "$name" "$OUTDIR"; do
    tries=$((tries+1))
    if [ $tries -ge 3 ]; then
      echo "FAILED after 3 tries: $name"
      exit 1
    fi
    echo "retry $tries for $name after transient error"
    sleep 3
  done
done

echo "Remainder sweep complete."
