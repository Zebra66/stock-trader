#!/bin/bash
set -euo pipefail

# Ensure we are in the project root
cd "$(dirname "$0")/.."

echo "Building and deploying to Google Cloud Run..."

PROJECT_ID=$(gcloud config get-value project)
IMAGE_NAME="gcr.io/$PROJECT_ID/stock-trader"

# Build and push an amd64 image so Cloud Run can execute it.
docker buildx build \
  --platform linux/amd64 \
  -t $IMAGE_NAME \
  --push \
  .

# Deploy to Cloud Run
# Note: You should configure environment variables securely via the Cloud Console or Secret Manager.
DEPLOY_OUTPUT=$(gcloud run deploy stock-trader \
  --image $IMAGE_NAME \
  --platform managed \
  --allow-unauthenticated \
  --region us-central1 \
  --port 3000 \
  --memory 2Gi \
  --cpu 2 \
  2>&1)
echo "$DEPLOY_OUTPUT"

# ─── Post-Deployment Smoke Test ─────────────────────────────────────────────
SERVICE_URL=$(echo "$DEPLOY_OUTPUT" | sed -n 's/.*Service URL:[[:space:]]*\([^[:space:]]*\).*/\1/p' | head -n1)
if [ -z "$SERVICE_URL" ]; then
  SERVICE_URL=$(gcloud run services describe stock-trader \
    --platform managed \
    --region us-central1 \
    --format 'value(status.url)')
fi

echo ""
echo "Service deployed at: $SERVICE_URL"
echo ""

# 1) Health check — wait for container to be ready
echo "⏳ Waiting for health check..."
for i in $(seq 1 60); do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$SERVICE_URL/api/health" || echo "000")
  if [ "$STATUS" = "200" ]; then
    echo "✅ Health check passed (attempt $i)"
    break
  fi
  echo "   [Attempt $i/60] Status: $STATUS. Waiting..."
  if [ "$i" = "60" ]; then
    echo "❌ Health check timed out — deployment may be unhealthy"
    exit 1
  fi
  sleep 2
done

# 2) Pi.dev smoke test — trigger a dry-run tactical agent
echo ""
echo "🧪 Triggering Pi.dev dry-run smoke test (tactical)..."
if [ -z "${DEPLOY_API_KEY:-}" ]; then
  echo "⚠️  DEPLOY_API_KEY not set — skipping automated Pi.dev smoke test."
  echo "   Set DEPLOY_API_KEY in your environment to enable post-deploy verification."
  exit 0
fi

JOB_RESPONSE=$(curl -s -X POST \
  -H "Content-Type: application/json" \
  -H "X-Deploy-Key: $DEPLOY_API_KEY" \
  "$SERVICE_URL/api/test/tactical" || echo '{"error":"curl failed"}')

if echo "$JOB_RESPONSE" | grep -q '"error"'; then
  echo "❌ Failed to start smoke test job: $JOB_RESPONSE"
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
    echo "✅ Pi.dev smoke test PASSED"
    echo "   Exit code: $(echo "$JOB_RESULT" | grep -o '"exitCode":[0-9]*' | cut -d':' -f2)"
    echo "   Duration: $(echo "$JOB_RESULT" | grep -o '"completedAt":[0-9]*' | cut -d':' -f2) ms"
    break
  fi

  if [ "$JOB_STATUS" = "failed" ]; then
    echo ""
    echo "❌ Pi.dev smoke test FAILED"
    echo "$JOB_RESULT" | sed 's/^/   /'
    exit 1
  fi

  if [ "$i" = "60" ]; then
    echo ""
    echo "⚠️  Smoke test timed out after 10 minutes — job may still be running"
    echo "   Poll manually: curl -H \"X-Deploy-Key: ...\" $SERVICE_URL/api/test/jobs/$JOB_ID"
    exit 1
  fi

  echo "   ... status=$JOB_STATUS (${i}/60)"
  sleep 10
done

echo ""
echo "🚀 Deployment and smoke test complete!"
