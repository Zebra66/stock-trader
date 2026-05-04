#!/bin/bash

# Ensure we are in the project root
cd "$(dirname "$0")/.."

# Check if .env exists
if [ ! -f .env ]; then
  echo "Error: .env file not found. Please copy .env.example to .env and fill in the values."
  exit 1
fi

# ── Session timestamp ─────────────────────────────────────────────────────────
# All child processes (harness, agent) inherit this variable so that every log
# line from every module lands in the SAME timestamped log file for the session.
export SESSION_TIMESTAMP="$(date +%Y%m%d_%H%M%S)"
export LOG_FILE="temp_files/logs/${SESSION_TIMESTAMP}_session.log"

mkdir -p temp_files/logs

echo "Starting Autonomous Stock Trader (Local Mode)..."
echo "Session log: ${LOG_FILE}"

bun run src/harness.ts
