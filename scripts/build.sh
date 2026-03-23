#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
REPO_NAME="ConfTide"
BASE_PATH="/${REPO_NAME}"
DIST_DIR="${PROJECT_ROOT}/dist"

rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

echo "==> Building first-cti-2026..."
npx @slidev/cli build \
  talks/first-cti-2026/slides.md \
  --base "${BASE_PATH}/first-cti-2026/" \
  --out "${DIST_DIR}/first-cti-2026" || true

echo "==> Copying landing page..."
cp landing/index.html "$DIST_DIR/index.html"

echo "==> Build complete! Output in ${DIST_DIR}/"
