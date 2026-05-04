FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install system utilities needed by the Pi.dev agent at runtime:
#   git        — commit/push operations
#   curl       — HTTP requests in bash scripts
#   wget       — alternative HTTP downloader
#   python3    — scripting fallback (agents may write inline python)
#   ripgrep    — fast code search (rg command)
#   jq         — JSON processing in bash
RUN apt-get update && apt-get install -y \
      git \
      curl \
      wget \
      python3 \
      python3-pip \
      ripgrep \
      jq \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies first (cached layer)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy source (no .env — secrets arrive as Cloud Run env vars at runtime)
COPY . .

# Make the startup script executable
RUN chmod +x scripts/start.sh

# Cloud Run injects PORT; default to 3000 for local docker runs
ENV PORT=3000
EXPOSE 3000

# start.sh: sets up git credentials, clones .git if missing, then launches harness
CMD ["scripts/start.sh"]
