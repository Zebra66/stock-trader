#!/bin/bash

# Auto Stock Trader - Google Cloud Run Deployment Script
# Pulls secrets from Secret Manager; never reads from .env at deploy time.

set -e

# Trap errors – macOS desktop notification on failure
if command -v osascript &>/dev/null && [ -z "$CI" ]; then
  trap 'osascript -e "display notification \"Deployment failed. Check terminal for details.\" with title \"Auto Stock Trader Deployment\" sound name \"Basso\"" && exit 1' ERR
fi

# ─── Colors ──────────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# ─── Defaults ─────────────────────────────────────────────────────────────────
PROJECT_ID_DEFAULT="stock-auto-trader-495209"
REGION_DEFAULT="us-central1"
SERVICE_NAME="auto-stock-trader"

PROJECT_ID="$PROJECT_ID_DEFAULT"
REGION="$REGION_DEFAULT"
STEP_TOTAL=6
CURRENT_STEP=1

# ─── Helpers ──────────────────────────────────────────────────────────────────
log_step() {
  local message="$1"
  echo -e "\n${BLUE}[${CURRENT_STEP}/${STEP_TOTAL}] $message${NC}"
  CURRENT_STEP=$((CURRENT_STEP + 1))
}

usage() {
  cat <<EOF
Usage: ./scripts/cloud_deploy.sh [options]

Options:
  -p, --project-id ID    Google Cloud project ID (default: $PROJECT_ID_DEFAULT)
  -r, --region REGION    Cloud Run region (default: $REGION_DEFAULT)
      --service NAME     Cloud Run service name (default: $SERVICE_NAME)
  -h, --help             Show this help message
EOF
}

# ─── Parse arguments ──────────────────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case "$1" in
    -p|--project-id) PROJECT_ID="$2"; shift 2 ;;
    -r|--region) REGION="$2"; shift 2 ;;
    --service) SERVICE_NAME="$2"; shift 2 ;;
    -h|--help) usage; exit 0 ;;
    *) echo -e "${RED}Unknown option: $1${NC}"; usage; exit 1 ;;
  esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

IMAGE="gcr.io/$PROJECT_ID/$SERVICE_NAME"

echo -e "${BLUE}╔═══════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Auto Stock Trader - Cloud Run Deployment   ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}→ Project:  $PROJECT_ID${NC}"
echo -e "${GREEN}→ Region:   $REGION${NC}"
echo -e "${GREEN}→ Service:  $SERVICE_NAME${NC}"
echo -e "${GREEN}→ Image:    $IMAGE${NC}"
echo ""

# ─── Step 1: Set active project ───────────────────────────────────────────────
log_step "Setting active GCP project..."
gcloud config set project "$PROJECT_ID"

# ─── Step 2: Enable required APIs ─────────────────────────────────────────────
log_step "Enabling required GCP APIs..."
gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com \
  containerregistry.googleapis.com \
  artifactregistry.googleapis.com \
  secretmanager.googleapis.com \
  logging.googleapis.com 2>/dev/null || true
echo -e "${GREEN}✓ APIs enabled${NC}"

# ─── Step 3: Retrieve secrets from Secret Manager ─────────────────────────────
log_step "Retrieving secrets from Secret Manager..."

fetch_secret() {
  local name="$1"
  gcloud secrets versions access latest --secret="$name" 2>/dev/null || echo ""
}

GEMINI_API_KEY=$(fetch_secret "gemini-api-key")
OPENAI_API_KEY=$(fetch_secret "openai-api-key")
ALPACA_PAPER_API_KEY=$(fetch_secret "alpaca-paper-api-key")
ALPACA_PAPER_API_SECRET=$(fetch_secret "alpaca-paper-api-secret")
ALPACA_LIVE_API_KEY=$(fetch_secret "alpaca-live-api-key")
ALPACA_LIVE_API_SECRET=$(fetch_secret "alpaca-live-api-secret")
FMP_API_KEY=$(fetch_secret "fmp-api-key")
GOOGLE_OAUTH_CLIENT_ID=$(fetch_secret "google-oauth-client-id")
GOOGLE_OAUTH_CLIENT_SECRET=$(fetch_secret "google-oauth-client-secret")
ALLOWED_USER_EMAIL=$(fetch_secret "allowed-user-email")
GITHUB_PAT=$(fetch_secret "github-pat")
GITHUB_REPO="Zebra66/stock-trader"

# Validate required secrets
MISSING=()
[ -z "$ALPACA_PAPER_API_KEY" ]   && MISSING+=("alpaca-paper-api-key")
[ -z "$ALPACA_PAPER_API_SECRET" ] && MISSING+=("alpaca-paper-api-secret")
[ -z "$GOOGLE_OAUTH_CLIENT_ID" ] && MISSING+=("google-oauth-client-id")
[ -z "$GOOGLE_OAUTH_CLIENT_SECRET" ] && MISSING+=("google-oauth-client-secret")
[ -z "$ALLOWED_USER_EMAIL" ]     && MISSING+=("allowed-user-email")

if [ ${#MISSING[@]} -gt 0 ]; then
  echo -e "${RED}✗ Missing required secrets in Secret Manager:${NC}"
  for s in "${MISSING[@]}"; do
    echo -e "${YELLOW}    echo -n 'VALUE' | gcloud secrets create $s --data-file=-${NC}"
  done
  echo -e "\n${YELLOW}Run ./scripts/setup_secrets.sh to create them interactively.${NC}"
  exit 1
fi

# Warn about optional secrets
[ -z "$GEMINI_API_KEY" ]  && echo -e "${YELLOW}⚠ gemini-api-key not found — Gemini model will be unavailable${NC}"
[ -z "$OPENAI_API_KEY" ]  && echo -e "${YELLOW}⚠ openai-api-key not found — OpenAI model will be unavailable${NC}"
[ -z "$FMP_API_KEY" ]     && echo -e "${YELLOW}⚠ fmp-api-key not found — FMP market data will be unavailable${NC}"
[ -z "$ALPACA_LIVE_API_KEY" ] && echo -e "${YELLOW}⚠ alpaca-live-api-key not found — live trading disabled${NC}"
[ -z "$GITHUB_PAT" ]      && echo -e "${YELLOW}⚠ github-pat not found — commit history panel will be unavailable${NC}"

echo -e "${GREEN}✓ Secrets retrieved${NC}"

# ─── Step 4: Build Docker image via Cloud Build ───────────────────────────────
log_step "Building Docker image via Cloud Build..."
set +e
gcloud builds submit --tag "$IMAGE" --project="$PROJECT_ID" 2>&1 | tee /tmp/stock_trader_build.log
BUILD_EXIT_CODE=${PIPESTATUS[0]}
set -e

if [ $BUILD_EXIT_CODE -ne 0 ]; then
  echo -e "${YELLOW}⚠ Build command exited with code $BUILD_EXIT_CODE — verifying via API...${NC}"
  BUILD_ID=$(grep -oE 'builds/[a-f0-9-]+' /tmp/stock_trader_build.log | head -1 | cut -d'/' -f2 || echo "")

  if [ -n "$BUILD_ID" ]; then
    BUILD_STATUS=$(gcloud builds describe "$BUILD_ID" --format="value(status)" 2>/dev/null || echo "UNKNOWN")
    echo -e "${BLUE}Build ID: $BUILD_ID  |  Status: $BUILD_STATUS${NC}"

    if [ "$BUILD_STATUS" = "SUCCESS" ]; then
      echo -e "${GREEN}✓ Build succeeded (verified via API)${NC}"
    elif [ "$BUILD_STATUS" = "WORKING" ] || [ "$BUILD_STATUS" = "QUEUED" ]; then
      echo -e "${YELLOW}⚠ Build still in progress, streaming logs...${NC}"
      gcloud builds log "$BUILD_ID" --stream 2>/dev/null || true
      BUILD_STATUS=$(gcloud builds describe "$BUILD_ID" --format="value(status)" 2>/dev/null || echo "UNKNOWN")
      [ "$BUILD_STATUS" = "SUCCESS" ] || { echo -e "${RED}✗ Build failed: $BUILD_STATUS${NC}"; exit 1; }
      echo -e "${GREEN}✓ Build succeeded${NC}"
    else
      echo -e "${RED}✗ Build failed: $BUILD_STATUS${NC}"
      echo -e "${YELLOW}  View logs: gcloud builds log $BUILD_ID${NC}"
      exit 1
    fi
  else
    # Fallback — check registry
    if gcloud container images describe "${IMAGE}:latest" --format="value(digest)" >/dev/null 2>&1; then
      echo -e "${GREEN}✓ Image verified in registry${NC}"
    else
      echo -e "${RED}✗ Build failed — image not found in registry${NC}"
      exit 1
    fi
  fi
else
  echo -e "${GREEN}✓ Build completed${NC}"
fi

# ─── Step 5: Deploy to Cloud Run ──────────────────────────────────────────────
log_step "Deploying to Cloud Run..."

# Determine ALPACA_PAPER value
ALPACA_PAPER_VALUE="true"
[ -n "$ALPACA_LIVE_API_KEY" ] && ALPACA_PAPER_VALUE="false"

gcloud run deploy "$SERVICE_NAME" \
  --image "$IMAGE" \
  --platform managed \
  --region "$REGION" \
  --allow-unauthenticated \
  --port 3000 \
  --memory 1Gi \
  --cpu 1 \
  --timeout 3600 \
  --min-instances 1 \
  --max-instances 3 \
  --set-env-vars="GEMINI_API_KEY=${GEMINI_API_KEY}" \
  --set-env-vars="OPENAI_API_KEY=${OPENAI_API_KEY}" \
  --set-env-vars="ALPACA_PAPER_API_KEY=${ALPACA_PAPER_API_KEY}" \
  --set-env-vars="ALPACA_PAPER_API_SECRET=${ALPACA_PAPER_API_SECRET}" \
  --set-env-vars="ALPACA_LIVE_API_KEY=${ALPACA_LIVE_API_KEY}" \
  --set-env-vars="ALPACA_LIVE_API_SECRET=${ALPACA_LIVE_API_SECRET}" \
  --set-env-vars="ALPACA_PAPER=${ALPACA_PAPER_VALUE}" \
  --set-env-vars="FMP_API_KEY=${FMP_API_KEY}" \
  --set-env-vars="GOOGLE_OAUTH_CLIENT_ID=${GOOGLE_OAUTH_CLIENT_ID}" \
  --set-env-vars="GOOGLE_OAUTH_CLIENT_SECRET=${GOOGLE_OAUTH_CLIENT_SECRET}" \
  --set-env-vars="ALLOWED_USER_EMAIL=${ALLOWED_USER_EMAIL}" \
  --set-env-vars="GITHUB_PAT=${GITHUB_PAT}" \
  --set-env-vars="GITHUB_REPO=${GITHUB_REPO}"

SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" --region "$REGION" --format 'value(status.url)')
echo -e "${GREEN}✓ Deployed at: $SERVICE_URL${NC}"

# ─── Step 6: Summary ──────────────────────────────────────────────────────────
log_step "Done!"
echo -e "\n${GREEN}╔═══════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║        Deployment Complete! 🚀               ║${NC}"
echo -e "${GREEN}╚═══════════════════════════════════════════════╝${NC}"
echo -e "\n${BLUE}Service URL:${NC} ${GREEN}$SERVICE_URL${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. Update Google OAuth redirect URIs:"
echo -e "     ${SERVICE_URL}/auth/google/callback"
echo -e "  2. Test the dashboard at: ${SERVICE_URL}"
echo ""

if command -v osascript &>/dev/null && [ -z "$CI" ]; then
  osascript -e "display notification \"$SERVICE_URL\" with title \"Auto Stock Trader Deployed! ✅\" sound name \"Glass\""
fi
