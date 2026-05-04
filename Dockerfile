FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install git (needed by the Pi.dev agent for commit/push)
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

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
