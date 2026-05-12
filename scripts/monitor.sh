#!/bin/bash
set -euo pipefail

# ── Config ───────────────────────────────────────────────────────────────────
DEFAULT_PROJECT_ID="stock-auto-trader-495209"
DEFAULT_SERVICE="auto-stock-trader"
DEFAULT_REGION="us-central1"
DEFAULT_URL="https://auto-stock-trader-pxeqygrzga-uc.a.run.app"

PROJECT_ID="${GCP_PROJECT:-$DEFAULT_PROJECT_ID}"
SERVICE_NAME="${CLOUD_RUN_SERVICE:-$DEFAULT_SERVICE}"
REGION="${CLOUD_RUN_REGION:-$DEFAULT_REGION}"
URL="${MONITOR_URL:-$DEFAULT_URL}"

# ── Colors ────────────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# ── Helpers ───────────────────────────────────────────────────────────────────
usage() {
  cat <<EOF
Usage: ./scripts/monitor.sh [command] [options]

Commands:
  health          Check service health endpoint (default)
  logs            Fetch recent Cloud Run logs
  errors          Fetch recent ERROR/CRITICAL logs only
  metrics         Show Cloud Run request metrics (last 1h)
  status          Show full service status and revision info
  all             Run health, metrics, and errors (full report)
  setup-alerts    Create a Cloud Monitoring uptime check (one-time)

Options:
  --url <url>     Override service URL
  --lines <n>     Number of log lines (default: 50)
  --help          Show this help

Environment:
  GCP_PROJECT         GCP project ID
  CLOUD_RUN_SERVICE   Service name
  CLOUD_RUN_REGION    GCP region
  MONITOR_URL         Service URL to ping
EOF
}

print_header() {
  echo -e "${CYAN}══════════════════════════════════════════════════════════════${NC}"
  echo -e "${CYAN}  $1${NC}"
  echo -e "${CYAN}══════════════════════════════════════════════════════════════${NC}"
}

check_health() {
  print_header "HEALTH CHECK"
  local status code response_time
  response_time=$(curl -s -o /tmp/monitor_health.json -w "%{time_total}" "$URL/api/status" || true)
  code=$(curl -s -o /dev/null -w "%{http_code}" "$URL/" || true)

  if [ "$code" = "200" ]; then
    echo -e "  Root path:     ${GREEN}HTTP $code${NC}"
    echo -e "  Response time: ${GREEN}${response_time}s${NC}"
    if [ -f /tmp/monitor_health.json ]; then
      status=$(cat /tmp/monitor_health.json)
      echo -e "  /api/status:   ${GREEN}$status${NC}"
    fi
  else
    echo -e "  Root path:     ${RED}HTTP $code${NC}"
    echo -e "  Response time: ${YELLOW}${response_time}s${NC}"
  fi
  rm -f /tmp/monitor_health.json
}

fetch_logs() {
  local lines="${1:-50}"
  local severity="${2:-}"
  print_header "RECENT LOGS (last $lines lines)"

  local filter="resource.type=\"cloud_run_revision\" AND resource.labels.service_name=\"${SERVICE_NAME}\" AND resource.labels.location=\"${REGION}\""
  if [ -n "$severity" ]; then
    filter="$filter AND severity>=$severity"
  fi

  gcloud logging read "$filter" \
    --project "$PROJECT_ID" \
    --limit "$lines" \
    --order=desc \
    --format='table(timestamp,severity,textPayload)' 2>/dev/null || echo "  (Failed to fetch logs — check gcloud auth)"
}

fetch_errors() {
  print_header "ERROR / CRITICAL LOGS"
  fetch_logs 25 "ERROR"
}

show_metrics() {
  print_header "CLOUD RUN METRICS (last 1 hour)"
  local end_time=$(date -u +%Y-%m-%dT%H:%M:%SZ)
  local start_time=$(date -u -v-1H +%Y-%m-%dT%H:%M:%SZ 2>/dev/null || date -u -d '1 hour ago' +%Y-%m-%dT%H:%M:%SZ)

  echo "  Time range: $start_time → $end_time"
  echo ""

  # Request count
  echo "  Request count:"
  gcloud monitoring metrics list --filter='metric.type="run.googleapis.com/request_count"' --format='value(metric.type)' >/dev/null 2>&1 || true
  gcloud monitoring metrics list >/dev/null 2>&1 || true

  # Use gcloud logging insights for quick request stats
  local filter="resource.type=\"cloud_run_revision\" AND resource.labels.service_name=\"${SERVICE_NAME}\" AND resource.labels.location=\"${REGION}\" AND timestamp>=\"$start_time\""
  local count=$(gcloud logging read "$filter" --project "$PROJECT_ID" --limit=1000 --format='value(timestamp)' 2>/dev/null | wc -l | tr -d ' ')
  echo "    Total log entries (1h): $count"

  # Error count
  local err_filter="resource.type=\"cloud_run_revision\" AND resource.labels.service_name=\"${SERVICE_NAME}\" AND resource.labels.location=\"${REGION}\" AND severity>=ERROR AND timestamp>=\"$start_time\""
  local err_count=$(gcloud logging read "$err_filter" --project "$PROJECT_ID" --limit=1000 --format='value(timestamp)' 2>/dev/null | wc -l | tr -d ' ')
  if [ "$err_count" = "0" ]; then
    echo -e "    Errors (1h):            ${GREEN}$err_count${NC}"
  else
    echo -e "    Errors (1h):            ${RED}$err_count${NC}"
  fi
}

show_status() {
  print_header "CLOUD RUN SERVICE STATUS"
  gcloud run services describe "$SERVICE_NAME" \
    --region "$REGION" \
    --project "$PROJECT_ID" \
    --format='table(
      metadata.name,
      status.conditions[0].status,
      status.conditions[0].message,
      status.trafficPercent,
      metadata.creationTimestamp
    )' 2>/dev/null || echo "  (Failed to fetch status)"

  echo ""
  echo "  Latest revision:"
  gcloud run revisions list \
    --service "$SERVICE_NAME" \
    --region "$REGION" \
    --project "$PROJECT_ID" \
    --limit=1 \
    --format='table(
      metadata.name,
      status.conditions[0].status,
      status.logUrl,
      metadata.creationTimestamp
    )' 2>/dev/null || true
}

setup_alerts() {
  print_header "SETTING UP CLOUD MONITORING UPTIME CHECK"
  local display_name="auto-stock-trader-uptime"

  # Check if already exists
  local existing=$(gcloud monitoring uptime list --format='value(name)' --filter="displayName='$display_name'" 2>/dev/null || true)
  if [ -n "$existing" ]; then
    echo "  Uptime check '$display_name' already exists."
    return 0
  fi

  echo "  Creating uptime check for $URL ..."
  gcloud monitoring uptime create "$display_name" \
    --type="http" \
    --protocol="https" \
    --resource-type="cloud-run-revision" \
    --resource-labels="service_name=$SERVICE_NAME,location=$REGION" \
    --path="/" \
    --period="60" \
    --timeout="10" \
    --project "$PROJECT_ID" 2>/dev/null || {
      echo "  ${YELLOW}Note:${NC} Could not create uptime check automatically."
      echo "  You can create one manually in the GCP Console:"
      echo "    https://console.cloud.google.com/monitoring/uptime"
    }
}

# ── Main ──────────────────────────────────────────────────────────────────────
CMD="${1:-health}"
LINES=50

shift || true
while [[ $# -gt 0 ]]; do
  case "$1" in
    --url)
      URL="$2"; shift 2 ;;
    --lines)
      LINES="$2"; shift 2 ;;
    --help)
      usage; exit 0 ;;
    *)
      echo "Unknown option: $1" >&2; usage >&2; exit 1 ;;
  esac
done

case "$CMD" in
  health)   check_health ;;
  logs)     fetch_logs "$LINES" ;;
  errors)   fetch_errors ;;
  metrics)  show_metrics ;;
  status)   show_status ;;
  all)
    check_health
    show_metrics
    fetch_errors
    show_status
    ;;
  setup-alerts)
    setup_alerts
    ;;
  *)
    echo "Unknown command: $CMD" >&2
    usage >&2
    exit 1
    ;;
esac
