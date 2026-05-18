# Harness And Cloud Run Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prevent tactical runs from blocking hourly runs and make dashboard log queries target the deployed Cloud Run service.

**Architecture:** Keep the existing harness scheduling model, but serialize work per mode instead of globally so `hourly` and `tactical` can run independently. Align Cloud Run service-name configuration in both runtime defaults and deployment scripts so observability targets the live service.

**Tech Stack:** Bun, TypeScript, Cloud Run, Bun test, bash deploy scripts

---

### Task 1: Isolate Harness Queues By Mode

**Files:**
- Modify: `src/harness.ts`
- Test: `src/harness.test.ts`

- [ ] Add per-mode serialization so `hourly` and `tactical` queue independently.
- [ ] Update tests to prove different modes no longer block each other while same-mode runs still serialize.

### Task 2: Align Cloud Run Service Identity

**Files:**
- Modify: `src/web/server.ts`
- Modify: `scripts/cloud_deploy.sh`
- Modify: `scripts/cloud_get_logs.sh`

- [ ] Set the runtime/default log target to `stock-trader`.
- [ ] Export explicit Cloud Run env vars during deploy so the dashboard does not rely on stale defaults.
- [ ] Update the helper log script to query the same live service by default.

### Task 3: Verify And Redeploy

**Files:**
- No code changes required beyond prior tasks.

- [ ] Run focused Bun tests for the harness scheduler.
- [ ] Redeploy with `./scripts/cloud_deploy.sh --service stock-trader`.
- [ ] Verify ready revision, service URL, and post-deploy logs.
