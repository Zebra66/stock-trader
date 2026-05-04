FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install git (needed by the Pi.dev agent for commit/push)
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Install dependencies first (cached layer)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy source (no .env — secrets arrive as Cloud Run env vars at runtime)
# .git/ is intentionally included (see .dockerignore) so the agent can commit & push
COPY . .

# Cloud Run injects PORT; default to 3000 for local docker runs
ENV PORT=3000
EXPOSE 3000

# Startup script: configure git credentials from GITHUB_PAT env var, then launch harness
RUN printf '#!/bin/sh\n\
set -e\n\
# Configure git identity for agent commits\n\
git config --global user.email "agent@auto-stock-trader"\n\
git config --global user.name "Auto Stock Agent"\n\
# Inject GITHUB_PAT into the HTTPS remote so git push works without SSH keys\n\
if [ -n "$GITHUB_PAT" ] && [ -n "$GITHUB_REPO" ]; then\n\
  git remote set-url origin "https://${GITHUB_PAT}@github.com/${GITHUB_REPO}.git"\n\
fi\n\
exec bun run src/harness.ts\n\
' > /usr/local/bin/start.sh && chmod +x /usr/local/bin/start.sh

CMD ["/usr/local/bin/start.sh"]
