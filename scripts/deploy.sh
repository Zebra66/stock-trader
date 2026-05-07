#!/bin/bash

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
gcloud run deploy stock-trader \
  --image $IMAGE_NAME \
  --platform managed \
  --allow-unauthenticated \
  --region us-central1 \
  --port 3000
