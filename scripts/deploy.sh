#!/bin/bash

# Ensure we are in the project root
cd "$(dirname "$0")/.."

echo "Building and deploying to Google Cloud Run..."

PROJECT_ID=$(gcloud config get-value project)
IMAGE_NAME="gcr.io/$PROJECT_ID/stock-trader"

# Build the container
docker build -t $IMAGE_NAME .

# Push the container
docker push $IMAGE_NAME

# Deploy to Cloud Run
# Note: You should configure environment variables securely via the Cloud Console or Secret Manager.
gcloud run deploy stock-trader \
  --image $IMAGE_NAME \
  --platform managed \
  --allow-unauthenticated \
  --region us-central1 \
  --port 3000
