#!/bin/bash

# Ensure we are in the project root
cd "$(dirname "$0")/.."

# Check if .env exists
if [ ! -f .env ]; then
  echo "Error: .env file not found. Please copy .env.example to .env and fill in the values."
  exit 1
fi

echo "Stopping existing Web Server instances..."
pkill -f "bun.*src/web/server.ts" || true

echo "Starting Web Dashboard Server locally with hot-reload..."
bun run --hot src/web/server.ts
