#!/bin/sh
set -e

# ── Git setup ────────────────────────────────────────────────────────────────
git config --global user.email "agent@auto-stock-trader" || true
git config --global user.name "Auto Stock Agent" || true
git config --global init.defaultBranch main || true

# Wrap all git setup in a non-fatal subshell — a git failure (expired PAT,
# network blip, etc.) must NOT prevent the web server from starting.
(
  if [ -n "$GITHUB_PAT" ] && [ -n "$GITHUB_REPO" ]; then
    REMOTE_URL="https://${GITHUB_PAT}@github.com/${GITHUB_REPO}.git"

    if [ ! -d ".git" ]; then
      # Cloud Build stripped .git/ — reconstruct git metadata without touching working tree.
      # We init, fetch, then point HEAD at the latest commit without changing any files.
      echo "[start.sh] .git not found — initializing git metadata..."
      git init
      git remote add origin "$REMOTE_URL"
      git fetch origin main --depth=50 --quiet
      git update-ref HEAD FETCH_HEAD
      git branch -M main
      git branch --set-upstream-to=origin/main main
    else
      # .git exists — just update the remote URL with the PAT
      git remote set-url origin "$REMOTE_URL"
    fi
  else
    echo "[start.sh] GITHUB_PAT or GITHUB_REPO not set — git push will not work"
  fi
) || echo "[start.sh] WARNING: git setup failed — agent commits/pulls will not work, but app will start"

# ── Launch app ───────────────────────────────────────────────────────────────
exec bun run src/harness.ts
