#!/bin/bash

HELP="Usage: ./scripts/run_local.sh [options]

Options:
  --force-run  Pass through to src/harness.ts and run even when market is closed
  --help       Show this help message"

force_run=false

for arg in "$@"; do
  case "$arg" in
    --force-run)
      force_run=true
      ;;
    --help)
      echo "$HELP"
      exit 0
      ;;
    *)
      echo "Unknown option: $arg"
      echo
      echo "$HELP"
      exit 1
      ;;
  esac
done

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

if [ "$force_run" = true ]; then
  bun run src/harness.ts --force-run
else
  bun run src/harness.ts
fi
