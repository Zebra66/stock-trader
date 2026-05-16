---
name: verify-cloud-run-deployment
description: Verify that a Google Cloud Run deployment actually succeeded and the active revision reflects recent code changes, not a silently cached old revision.
---

# Verify Cloud Run Deployment

## When to Use
- The deployed application behavior does not match recent local code changes
- A deployment was attempted but it is unclear whether it actually took effect
- You suspect a Docker push timeout or Cloud Run mutable-tag caching issue
- Debugging production issues where the code "should" behave differently

## Procedure

### 1. Check the Active Revision Timestamp

Before debugging application code, verify the Cloud Run service is actually running the revision you expect:

```bash
gcloud run revisions list \
  --service auto-stock-trader \
  --region us-central1 \
  --format='table(REVISION_NAME,CREATE_TIME,STATUS)'
```

Compare `CREATE_TIME` against the timestamp of the recent git commit that was supposed to deploy. If the revision is significantly older than the commit, the deploy did not take effect.

### 2. Check for Silent Deploy Failures

Common causes of a stale revision:

| Cause | Symptom | Fix |
|---|---|---|
| Docker push timeout | Build succeeds, push hangs, script exits without error | Re-run deploy; verify image digest in registry |
| Cloud Run mutable-tag caching | New image pushed to same tag, Cloud Run does not pull it | Use immutable tags (digests) or force a new revision |
| Build failure swallowed by CI | Pipeline shows green but deploy step skipped | Inspect full CI logs for the deploy stage |

### 3. Verify the Image Digest (Reliable Deploy)

For critical deployments, verify the exact digest:

```bash
# Get the active revision's image digest
gcloud run services describe auto-stock-trader \
  --region us-central1 \
  --format='value(spec.template.spec.containers[0].image)'

# Compare against the digest in Artifact Registry
gcloud artifacts docker images list us-central1-docker.pkg.dev/PROJECT_ID/REPO/IMAGE \
  --include-tags \
  --format='table(DIGEST,TAGS,UPDATE_TIME)'
```

If the digests do not match, the service is not running the image you built.

### 4. Force a Fresh Revision

If caching or tagging issues are suspected, deploy with an immutable reference:

```bash
# Deploy using the full digest instead of a mutable tag
gcloud run deploy auto-stock-trader \
  --image=us-central1-docker.pkg.dev/PROJECT_ID/REPO/IMAGE@sha256:DIGEST \
  --region=us-central1
```

## Pitfalls
- Do not spend time debugging application bugs when the deploy itself never took effect.
- Cloud Run's mutable-tag caching behavior means pushing `:latest` repeatedly does not guarantee a new revision if the digest hasn't changed.
- CI scripts that do not fail on Docker push timeouts will silently leave the old revision active.

## Verification
- [ ] `gcloud run revisions list` shows a revision created at or after the expected deploy time
- [ ] The active revision's image digest matches the recently built image
- [ ] Application behavior in production matches the code in the deployed commit