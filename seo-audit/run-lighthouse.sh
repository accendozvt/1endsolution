#!/bin/bash
# Runs Lighthouse (mobile + desktop) against a given path on the local audit server
# Usage: run-lighthouse.sh <url-path> <output-name> <out-dir>
set -e
BASE="http://localhost:4500"
PATH_SEG="$1"
NAME="$2"
OUTDIR="$3"
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"

npx --yes lighthouse "${BASE}${PATH_SEG}" \
  --output=json --output-path="${OUTDIR}/${NAME}-mobile.json" \
  --chrome-path="$CHROME" \
  --form-factor=mobile --screenEmulation.mobile --throttling-method=simulate \
  --only-categories=performance,accessibility,best-practices,seo \
  --quiet --chrome-flags="--headless=new --no-sandbox" 2>>"${OUTDIR}/lh-errors.log"

npx --yes lighthouse "${BASE}${PATH_SEG}" \
  --output=json --output-path="${OUTDIR}/${NAME}-desktop.json" \
  --chrome-path="$CHROME" \
  --preset=desktop \
  --only-categories=performance,accessibility,best-practices,seo \
  --quiet --chrome-flags="--headless=new --no-sandbox" 2>>"${OUTDIR}/lh-errors.log"
