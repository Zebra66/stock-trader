#!/bin/sh
set -e

# ── Git setup ────────────────────────────────────────────────────────────────
git config --global user.email "agent@auto-stock-trader"
git config --global user.name "Auto Stock Agent"

if [ -n "$GITHUB_PAT" ] && [ -n "$GITHUB_REPO" ]; then
  REMOTE_URL="https://${GITHUB_PAT}@github.com/${GITHUB_REPO}.git"

  if [ ! -d ".git" ]; then
    # Cloud Build stripped .git/ — reconstruct git metadata without touching working tree.
    # We init, fetch, then use reset --mixed so HEAD points at latest commit but
    # working tree files (the already-deployed app code) are untouched.
    echo "[start.sh] .git not found — initializing git metadata..."
    git init
    git remote add origin "$REMOTE_URL"
    git fetch origin main --depth=50 --quiet
    git reset --mixed FETCH_HEAD
    git branch -M main
    git branch --set-upstream-to=origin/main main
  else
    # .git exists — just update the remote URL with the PAT
    git remote set-url origin "$REMOTE_URL"
  fi
else
  echo "[start.sh] GITHUB_PAT or GITHUB_REPO not set — git push will not work"
fi

# ── Launch app ───────────────────────────────────────────────────────────────
exec bun run src/harness.ts
