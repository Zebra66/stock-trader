FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install dependencies first (cached layer)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy source (no .env — secrets arrive as Cloud Run env vars at runtime)
COPY . .

# Cloud Run injects PORT; default to 3000 for local docker runs
ENV PORT=3000
EXPOSE 3000

CMD ["bun", "run", "src/harness.ts"]
