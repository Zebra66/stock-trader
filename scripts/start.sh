#!/bin/sh
set -e

# ── Git setup ────────────────────────────────────────────────────────────────
git config --global user.email "agent@auto-stock-trader"
git config --global user.name "Auto Stock Agent"

if [ -n "$GITHUB_PAT" ] && [ -n "$GITHUB_REPO" ]; then
  REMOTE_URL="https://${GITHUB_PAT}@github.com/${GITHUB_REPO}.git"

  if [ ! -d ".git" ]; then
    # Cloud Build stripped .git/ from the build context — init and fetch it now
    echo "[start.sh] .git not found — cloning repo history..."
    git init
    git remote add origin "$REMOTE_URL"
    git fetch origin main --depth=50
    git checkout -B main FETCH_HEAD
  else
    # .git exists — just update the remote URL with the PAT
    git remote set-url origin "$REMOTE_URL"
  fi
else
  echo "[start.sh] GITHUB_PAT or GITHUB_REPO not set — git push will not work"
fi

# ── Launch app ───────────────────────────────────────────────────────────────
exec bun run src/harness.ts
