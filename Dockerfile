FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install git (needed by the Pi.dev agent for commit/push)
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Install dependencies first (cached layer)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy source (no .env — secrets arrive as Cloud Run env vars at runtime)
COPY . .

# Cloud Run injects PORT; default to 3000 for local docker runs
ENV PORT=3000
EXPOSE 3000

# Startup script:
#  1. If .git/ is missing (Cloud Build strips it), clone the repo fresh using GITHUB_PAT.
#  2. Configure git identity and inject PAT into the remote URL for agent pushes.
#  3. Launch the harness.
RUN cat > /usr/local/bin/start.sh << 'STARTSCRIPT'
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
STARTSCRIPT

RUN chmod +x /usr/local/bin/start.sh

CMD ["/usr/local/bin/start.sh"]
