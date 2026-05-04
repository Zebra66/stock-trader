#!/bin/bash

# Fetch backend logs from Google Cloud Run (Auto Stock Trader)
# Usage: ./scripts/cloud_get_logs.sh [--tail] [--limit N] [--severity LEVEL] [--json]
#
# Examples:
#   ./scripts/cloud_get_logs.sh                       # last 50 log lines
#   ./scripts/cloud_get_logs.sh --limit 200           # last 200 log lines
#   ./scripts/cloud_get_logs.sh --tail                # stream live logs
#   ./scripts/cloud_get_logs.sh --severity ERROR      # only ERROR+ logs
#   ./scripts/cloud_get_logs.sh --json                # raw JSON (pipe to jq, etc.)

SERVICE_NAME="auto-stock-trader"
PROJECT_ID="stock-auto-trader-495209"
REGION="us-central1"

# Defaults
LIMIT=50
TAIL=false
SEVERITY=""   # e.g. DEFAULT, DEBUG, INFO, WARNING, ERROR, CRITICAL
JSON=false

# ─── Parse arguments ──────────────────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case $1 in
    --tail)
      TAIL=true
      shift
      ;;
    --limit)
      LIMIT="$2"
      shift 2
      ;;
    --severity)
      SEVERITY="$2"
      shift 2
      ;;
    --json)
      JSON=true
      shift
      ;;
    *)
      echo "Unknown option: $1"
      echo "Usage: $0 [--tail] [--limit N] [--severity LEVEL] [--json]"
      exit 1
      ;;
  esac
done

# ─── Build filter ─────────────────────────────────────────────────────────────
FILTER="resource.type=cloud_run_revision AND resource.labels.service_name=${SERVICE_NAME} AND resource.labels.location=${REGION}"

if [[ -n "$SEVERITY" ]]; then
  FILTER="${FILTER} AND severity>=${SEVERITY}"
fi

# ─── Output format ────────────────────────────────────────────────────────────
if [ "$JSON" = true ]; then
  FORMAT="json"
else
  FORMAT="table(timestamp, severity, textPayload)"
fi

echo "Service : $SERVICE_NAME"
echo "Project : $PROJECT_ID"
echo "Region  : $REGION"
[[ -n "$SEVERITY" ]] && echo "Severity: >=${SEVERITY}"
echo "----------------------------------------"

gcloud config set project "$PROJECT_ID" --quiet

if [ "$TAIL" = true ]; then
  # Stream logs in real-time
  gcloud logging tail "$FILTER" \
    --project="$PROJECT_ID" \
    --format="$FORMAT"
else
  # Fetch recent logs (newest first)
  gcloud logging read "$FILTER" \
    --project="$PROJECT_ID" \
    --limit="$LIMIT" \
    --format="$FORMAT" \
    --order="desc"
fi
