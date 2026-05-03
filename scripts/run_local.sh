#!/bin/bash

# Ensure we are in the project root
cd "$(dirname "$0")/.."

# Check if .env exists
if [ ! -f .env ]; then
  echo "Error: .env file not found. Please copy .env.example to .env and fill in the values."
  exit 1
fi

echo "Starting Autonomous Stock Trader (Local Mode)..."
bun run src/harness.ts
