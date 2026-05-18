#!/bin/bash
# Auto Stock Trader - Production Deployment Script
# Builds with Google Cloud Build and deploys to Google Cloud Run.
# Targets ONLY the primary production URL: https://auto-stock-trader-pxeqygrzga-uc.a.run.app/
# Pulls secrets securely from GCP Secret Manager.

set -euo pipefail

# Ensure we are in the project root
cd "$(dirname "$0")/.."

# ─── Colors ──────────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Trap errors – macOS desktop notification on failure
if command -v osascript &>/dev/null && [ -z "${CI:-}" ]; then
  trap 'osascript -e "display notification \"Deployment failed. Check terminal for details.\" with title \"Auto Stock Trader Deployment\" sound name \"Basso\"" && exit 1' ERR
fi

# ─── Configuration ────────────────────────────────────────────────────────────
PROJECT_ID="stock-auto-trader-495209"
REGION="us-central1"
SERVICE_NAME="auto-stock-trader"
IMAGE="gcr.io/$PROJECT_ID/$SERVICE_NAME"
STEP_TOTAL=6
CURRENT_STEP=1

log_step() {
  local message="$1"
  echo -e "\n${BLUE}[${CURRENT_STEP}/${STEP_TOTAL}] $message${NC}"
  CURRENT_STEP=$((CURRENT_STEP + 1))
}

echo -e "${BLUE}╔═══════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║    Auto Stock Trader - Production Deploy      ║${NC}"
echo -e "${BLUE}║   Target: https://auto-stock-trader...        ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}→ GCP Project:  $PROJECT_ID${NC}"
echo -e "${GREEN}→ Region:       $REGION${NC}"
echo -e "${GREEN}→ Service Name: $SERVICE_NAME${NC}"
echo -e "${GREEN}→ Container:    $IMAGE${NC}"
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
  echo -e "\n${YELLOW}Run ./scripts/setup_secrets.sh to create/upload them.${NC}"
  exit 1
fi

# Warn about optional secrets
[ -z "$GEMINI_API_KEY" ]  && echo -e "${YELLOW}⚠ gemini-api-key not found — Gemini model will be unavailable${NC}"
[ -z "$OPENAI_API_KEY" ]  && echo -e "${YELLOW}⚠ openai-api-key not found — OpenAI model will be unavailable${NC}"
[ -z "$FMP_API_KEY" ]     && echo -e "${YELLOW}⚠ fmp-api-key not found — FMP market data will be unavailable${NC}"
[ -z "$ALPACA_LIVE_API_KEY" ] && echo -e "${YELLOW}⚠ alpaca-live-api-key not found — live trading disabled (defaulting to Paper)${NC}"
[ -z "$GITHUB_PAT" ]      && echo -e "${YELLOW}⚠ github-pat not found — commit history panel will be unavailable${NC}"

echo -e "${GREEN}✓ Secrets verified${NC}"

# ─── Step 4: Build Docker image via Cloud Build ───────────────────────────────
log_step "Building Docker image via Cloud Build..."
set +e
gcloud builds submit --tag "$IMAGE" --project="$PROJECT_ID" 2>&1 | tee /tmp/stock_trader_build.log
BUILD_EXIT_CODE=${PIPESTATUS[0]}
set -e

if [ $BUILD_EXIT_CODE -ne 0 ]; then
  echo -e "${YELLOW}⚠ Build command exited with code $BUILD_EXIT_CODE — verifying via description API...${NC}"
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
  echo -e "${GREEN}✓ Build completed successfully${NC}"
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
  --memory 2Gi \
  --cpu 2 \
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
  --set-env-vars="GCP_PROJECT=${PROJECT_ID}" \
  --set-env-vars="CLOUD_RUN_SERVICE=${SERVICE_NAME}" \
  --set-env-vars="CLOUD_RUN_REGION=${REGION}" \
  --set-env-vars="GITHUB_PAT=${GITHUB_PAT}" \
  --set-env-vars="GITHUB_REPO=${GITHUB_REPO}"

# Force routing of 100% of traffic to the latest revision
echo "Routing 100% of traffic to the latest revision..."
gcloud run services update-traffic "$SERVICE_NAME" --region "$REGION" --to-latest

SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" --region "$REGION" --format 'value(status.url)')
echo -e "${GREEN}✓ Container deployed and active at: $SERVICE_URL${NC}"

# ─── Step 6: Post-Deployment Smoke Test ───────────────────────────────────────
log_step "Running health check & post-deployment smoke tests..."

# 1) Health check — wait for container to be ready
echo "⏳ Waiting for health check..."
for i in $(seq 1 60); do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$SERVICE_URL/api/health" || echo "000")
  if [ "$STATUS" = "200" ]; then
    echo -e "${GREEN}✅ Health check passed (attempt $i)${NC}"
    break
  fi
  echo "   [Attempt $i/60] Status: $STATUS. Waiting..."
  if [ "$i" = "60" ]; then
    echo -e "${RED}❌ Health check timed out — deployment may be unhealthy${NC}"
    exit 1
  fi
  sleep 2
done

# 2) Pi.dev smoke test — trigger a dry-run tactical agent
echo ""
echo -e "${BLUE}🧪 Triggering Pi.dev dry-run smoke test (tactical)...${NC}"
DEPLOY_API_KEY=$(fetch_secret "deploy-api-key")

if [ -z "${DEPLOY_API_KEY}" ]; then
  echo -e "${YELLOW}⚠️  deploy-api-key not found in Secret Manager — skipping automated smoke test.${NC}"
else
  JOB_RESPONSE=$(curl -s -X POST \
    -H "Content-Type: application/json" \
    -H "X-Deploy-Key: $DEPLOY_API_KEY" \
    "$SERVICE_URL/api/test/tactical" || echo '{"error":"curl failed"}')

  if echo "$JOB_RESPONSE" | grep -q '"error"'; then
    echo -e "${RED}❌ Failed to start smoke test job: $JOB_RESPONSE${NC}"
    exit 1
  fi

  JOB_ID=$(echo "$JOB_RESPONSE" | grep -o '"jobId":"[^"]*"' | cut -d'"' -f4)
  echo "   Job ID: $JOB_ID"

  # Poll for completion (max ~10 min)
  for i in $(seq 1 60); do
    JOB_RESULT=$(curl -s \
      -H "X-Deploy-Key: $DEPLOY_API_KEY" \
      "$SERVICE_URL/api/test/jobs/$JOB_ID" || echo '{"status":"unknown"}')

    JOB_STATUS=$(echo "$JOB_RESULT" | grep -o '"status":"[^"]*"' | cut -d'"' -f4)

    if [ "$JOB_STATUS" = "completed" ]; then
      echo ""
      echo -e "${GREEN}✅ Pi.dev smoke test PASSED${NC}"
      echo "   Exit code: $(echo "$JOB_RESULT" | grep -o '"exitCode":[0-9]*' | cut -d':' -f2)"
      echo "   Duration: $(echo "$JOB_RESULT" | grep -o '"completedAt":[0-9]*' | cut -d':' -f2) ms"
      break
    fi

    if [ "$JOB_STATUS" = "failed" ]; then
      echo ""
      echo -e "${RED}❌ Pi.dev smoke test FAILED${NC}"
      echo "$JOB_RESULT" | sed 's/^/   /'
      exit 1
    fi

    if [ "$i" = "60" ]; then
      echo ""
      echo -e "${YELLOW}⚠️  Smoke test timed out after 10 minutes — job may still be running${NC}"
      echo "   Poll manually: curl -H \"X-Deploy-Key: ...\" $SERVICE_URL/api/test/jobs/$JOB_ID"
      exit 1
    fi

    echo "   ... status=$JOB_STATUS (${i}/60)"
    sleep 10
  done
fi

echo -e "\n${GREEN}╔═══════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║        Deployment Complete! 🚀               ║${NC}"
echo -e "${GREEN}╚═══════════════════════════════════════════════╝${NC}"
echo -e "\n${BLUE}Service URL:${NC} ${GREEN}$SERVICE_URL${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. Test the dashboard at: ${SERVICE_URL}"
echo ""

if command -v osascript &>/dev/null && [ -z "${CI:-}" ]; then
  osascript -e "display notification \"$SERVICE_URL\" with title \"Auto Stock Trader Deployed! ✅\" sound name \"Glass\""
fi
