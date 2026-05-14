#!/bin/bash
set -euo pipefail

# ── Config ───────────────────────────────────────────────────────────────────
cd "$(dirname "$0")/.."

PROJECT_ID=$(gcloud config get-value project 2>/dev/null || true)
if [[ -z "${PROJECT_ID:-}" ]]; then
  echo "❌ ERROR: No GCP project configured. Run: gcloud config set project <PROJECT_ID>"
  exit 1
fi

COMMIT_SHA=$(git rev-parse --short HEAD)
if [[ -z "${COMMIT_SHA:-}" ]]; then
  echo "❌ ERROR: Not a git repository or no commits found."
  exit 1
fi

IMAGE_BASE="gcr.io/$PROJECT_ID/stock-trader"
IMAGE_TAG="$IMAGE_BASE:$COMMIT_SHA"
SERVICE_NAME="${CLOUD_RUN_SERVICE:-auto-stock-trader}"
REGION="${CLOUD_RUN_REGION:-us-central1}"
HEALTH_CHECK_URL="${HEALTH_CHECK_URL:-/}"
HEALTH_CHECK_TIMEOUT="${HEALTH_CHECK_TIMEOUT:-60}"

echo "🚀 Deploying $SERVICE_NAME (commit $COMMIT_SHA) to Cloud Run ($REGION) in project $PROJECT_ID..."

# ── Build & Push ───────────────────────────────────────────────────────────
echo "📦 Building Docker image (linux/amd64)…"
if ! docker buildx build \
  --platform linux/amd64 \
  -t "$IMAGE_TAG" \
  -t "$IMAGE_BASE:latest" \
  --push \
  .; then
  echo "❌ ERROR: Docker build or push failed. Check your network and Docker daemon."
  exit 1
fi

# Resolve the exact digest we just pushed
PUSHED_DIGEST=$(docker inspect "$IMAGE_TAG" --format='{{index .RepoDigests 0}}' 2>/dev/null || echo "")
if [[ -z "$PUSHED_DIGEST" ]]; then
  echo "⚠️  WARNING: Could not resolve pushed image digest. Falling back to tag reference."
  DEPLOY_IMAGE="$IMAGE_TAG"
else
  echo "✅ Image pushed: $PUSHED_DIGEST"
  DEPLOY_IMAGE="$PUSHED_DIGEST"
fi

# ── Deploy to Cloud Run ────────────────────────────────────────────────────
echo "☁️ Deploying to Cloud Run…"
DEPLOY_OUTPUT=$(gcloud run deploy "$SERVICE_NAME" \
  --image "$DEPLOY_IMAGE" \
  --platform managed \
  --allow-unauthenticated \
  --region "$REGION" \
  --port 3000 \
  --memory 4Gi \
  --cpu 2 \
  --no-cpu-throttling \
  --format 'value(status.url)' 2>&1) || {
  echo "❌ ERROR: gcloud run deploy failed."
  echo "$DEPLOY_OUTPUT"
  exit 1
}

SERVICE_URL=$(echo "$DEPLOY_OUTPUT" | tail -n 1 | tr -d '[:space:]')
if [[ -z "$SERVICE_URL" ]]; then
  echo "❌ ERROR: Could not determine deployed service URL."
  exit 1
fi

echo "✅ Deployed to $SERVICE_URL"

# ── Verify revision is actually serving traffic ────────────────────────────
echo "⏳ Waiting for revision to become ready and checking traffic routing…"
for i in $(seq 1 30); do
  SERVICE_JSON=$(gcloud run services describe "$SERVICE_NAME" \
    --region="$REGION" \
    --format='json' 2>/dev/null || echo '{}')

  READY=$(echo "$SERVICE_JSON" | jq -r '.status.conditions[0].status // "Unknown"')
  TRAFFIC_REV=$(echo "$SERVICE_JSON" | jq -r '.spec.traffic[0].revisionName // ""')
  TRAFFIC_PCT=$(echo "$SERVICE_JSON" | jq -r '.spec.traffic[0].percent // 0')

  if [[ "$READY" == "True" && "$TRAFFIC_PCT" == "100" && -n "$TRAFFIC_REV" ]]; then
    echo "✅ Service is Ready and routing 100% traffic to revision $TRAFFIC_REV"
    break
  fi

  echo "   ($i/30) Ready=$READY Traffic=$TRAFFIC_PCT%→$TRAFFIC_REV …"
  sleep 2
done

if [[ "$READY" != "True" ]]; then
  echo "❌ ERROR: Service did not become ready within 60 seconds."
  echo "   Check logs: gcloud logging read \"resource.type=cloud_run_revision AND resource.labels.service_name=$SERVICE_NAME\" --limit=20"
  exit 1
fi

if [[ "$TRAFFIC_PCT" != "100" || -z "$TRAFFIC_REV" ]]; then
  echo "❌ ERROR: Traffic is not routed 100% to a single revision."
  echo "   Current traffic: $TRAFFIC_PCT% → $TRAFFIC_REV"
  exit 1
fi

# Verify the serving revision uses the expected image digest
SERVING_IMAGE=$(gcloud run revisions describe "$TRAFFIC_REV" \
  --region="$REGION" \
  --format='value(spec.containers[0].image)' 2>/dev/null || echo "")

if [[ -n "$PUSHED_DIGEST" && "$SERVING_IMAGE" != "$PUSHED_DIGEST" ]]; then
  echo "❌ ERROR: Serving revision does NOT use the expected image!"
  echo "   Expected: $PUSHED_DIGEST"
  echo "   Actual:   $SERVING_IMAGE"
  echo "   This usually means Cloud Run cached an old image for the tag."
  echo "   Fix: update traffic to a revision with the correct image."
  exit 1
fi

echo "✅ Serving revision $TRAFFIC_REV uses the correct image"

# ── Health Check ─────────────────────────────────────────────────────────────
HEALTH_URL="${SERVICE_URL%/}$HEALTH_CHECK_URL"
echo "🩺 Health checking $HEALTH_URL …"

HTTP_CODE=""
for i in $(seq 1 $((HEALTH_CHECK_TIMEOUT / 2))); do
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$HEALTH_URL" 2>/dev/null || echo "000")
  if [[ "$HTTP_CODE" == "200" || "$HTTP_CODE" == "302" ]]; then
    echo "✅ Health check passed (HTTP $HTTP_CODE)"
    break
  fi
  echo "   ($i/$((HEALTH_CHECK_TIMEOUT / 2))) HTTP $HTTP_CODE …"
  sleep 2
done

if [[ "$HTTP_CODE" != "200" && "$HTTP_CODE" != "302" ]]; then
  echo "❌ ERROR: Health check failed. Service returned HTTP $HTTP_CODE."
  echo "   Service URL: $SERVICE_URL"
  echo "   Check logs: gcloud logging read \"resource.type=cloud_run_revision AND resource.labels.service_name=$SERVICE_NAME\" --limit=20"
  exit 1
fi

# ── Verify deployed content sanity ─────────────────────────────────────────
echo "🔍 Verifying deployed HTML content…"
if curl -s "$SERVICE_URL" | grep -q "Auto Stock"; then
  echo "✅ Deployed page contains expected content"
else
  echo "⚠️  WARNING: Deployed page does not contain expected content 'Auto Stock'."
  echo "   This may indicate a deployment issue."
fi

echo ""
echo "🎉 Deployment successful!"
echo "   URL:      $SERVICE_URL"
echo "   Revision: $TRAFFIC_REV"
echo "   Image:    $SERVING_IMAGE"
