#!/bin/bash
set -euo pipefail

DEFAULT_LINES=50
PROJECT_ID="${GCP_PROJECT:-stock-auto-trader-495209}"
SERVICE_NAME="${CLOUD_RUN_SERVICE:-auto-stock-trader}"
REGION="${CLOUD_RUN_REGION:-us-central1}"
LINES="$DEFAULT_LINES"

usage() {
  cat <<EOF
Usage: ./scripts/get_cloud_logs.sh [options]

Fetch recent Cloud Run logs for the stock trader service.

Options:
  --lines <number>  Number of log lines to fetch (default: ${DEFAULT_LINES})
  --help            Show this help message

Environment overrides:
  GCP_PROJECT         Default: ${PROJECT_ID}
  CLOUD_RUN_SERVICE   Default: ${SERVICE_NAME}
  CLOUD_RUN_REGION    Default: ${REGION}

Examples:
  ./scripts/get_cloud_logs.sh
  ./scripts/get_cloud_logs.sh --lines 100
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --lines)
      if [[ $# -lt 2 ]]; then
        echo "Error: --lines requires a value." >&2
        usage >&2
        exit 1
      fi
      LINES="$2"
      shift 2
      ;;
    --help)
      usage
      exit 0
      ;;
    *)
      echo "Error: unknown option: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
done

if ! [[ "$LINES" =~ ^[0-9]+$ ]] || [[ "$LINES" -le 0 ]]; then
  echo "Error: --lines must be a positive integer." >&2
  exit 1
fi

FILTER="resource.type=\"cloud_run_revision\" AND resource.labels.service_name=\"${SERVICE_NAME}\" AND resource.labels.location=\"${REGION}\""

gcloud logging read "$FILTER" \
  --project "$PROJECT_ID" \
  --limit "$LINES" \
  --order=desc \
  --format='value(timestamp,textPayload)'
