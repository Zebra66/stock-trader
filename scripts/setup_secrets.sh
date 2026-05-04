#!/bin/bash

# Auto Stock Trader - One-Time Secret Manager Setup
# Run this ONCE to populate all secrets from your local .env file.
# After this you can rotate secrets individually via:
#   echo -n "NEW_VALUE" | gcloud secrets versions add SECRET_NAME --data-file=-

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="$REPO_ROOT/.env"

PROJECT_ID_DEFAULT="stock-auto-trader-495209"
PROJECT_ID="${1:-$PROJECT_ID_DEFAULT}"

echo -e "${BLUE}╔═══════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Auto Stock Trader - Secret Manager Setup   ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}→ Project: $PROJECT_ID${NC}"
echo -e "${GREEN}→ Reading values from: $ENV_FILE${NC}"
echo ""

if [ ! -f "$ENV_FILE" ]; then
  echo -e "${RED}✗ .env file not found at $ENV_FILE${NC}"
  exit 1
fi

gcloud config set project "$PROJECT_ID"
gcloud services enable secretmanager.googleapis.com 2>/dev/null || true

# ─── Helper: create or update a secret ────────────────────────────────────────
upsert_secret() {
  local secret_name="$1"
  local secret_value="$2"

  if [ -z "$secret_value" ]; then
    echo -e "${YELLOW}⚠ Skipping $secret_name (empty value)${NC}"
    return
  fi

  if gcloud secrets describe "$secret_name" &>/dev/null; then
    echo -n "$secret_value" | gcloud secrets versions add "$secret_name" --data-file=-
    echo -e "${GREEN}✓ Updated: $secret_name${NC}"
  else
    echo -n "$secret_value" | gcloud secrets create "$secret_name" --data-file=- --replication-policy="automatic"
    echo -e "${GREEN}✓ Created: $secret_name${NC}"
  fi
}

# ─── Parse .env file ──────────────────────────────────────────────────────────
get_env_value() {
  local key="$1"
  # Strip comments, handle quoted values, match key exactly
  grep -E "^${key}=" "$ENV_FILE" | head -1 | sed "s/^${key}=//" | sed 's/^"//' | sed 's/"$//' | sed "s/^'//" | sed "s/'$//" | sed 's/ #.*//'
}

echo -e "${BLUE}Upserting secrets...${NC}"

upsert_secret "gemini-api-key"              "$(get_env_value GEMINI_API_KEY)"
upsert_secret "openai-api-key"              "$(get_env_value OPENAI_API_KEY)"
upsert_secret "alpaca-paper-api-key"        "$(get_env_value ALPACA_PAPER_API_KEY)"
upsert_secret "alpaca-paper-api-secret"     "$(get_env_value ALPACA_PAPER_API_SECRET)"
upsert_secret "alpaca-live-api-key"         "$(get_env_value ALPACA_LIVE_API_KEY)"
upsert_secret "alpaca-live-api-secret"      "$(get_env_value ALPACA_LIVE_API_SECRET)"
upsert_secret "fmp-api-key"                 "$(get_env_value FMP_API_KEY)"
upsert_secret "google-oauth-client-id"      "$(get_env_value GOOGLE_OAUTH_CLIENT_ID)"
upsert_secret "google-oauth-client-secret"  "$(get_env_value GOOGLE_OAUTH_CLIENT_SECRET)"
upsert_secret "allowed-user-email"          "$(get_env_value ALLOWED_USER_EMAIL)"

echo ""
echo -e "${GREEN}✓ All secrets uploaded to Secret Manager.${NC}"
echo -e "${YELLOW}You can now safely deploy with: ./scripts/cloud_deploy.sh -p $PROJECT_ID${NC}"
echo ""
echo -e "${BLUE}To rotate a secret later:${NC}"
echo -e "  echo -n 'NEW_VALUE' | gcloud secrets versions add SECRET_NAME --data-file=-"
