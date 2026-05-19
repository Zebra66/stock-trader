# Violation Audit — 2026-05-19

## Unauthorized Trade Executed by Tactical Agent

### 1. NVDA — Unauthorized Partial Liquidation
- **Time:** 09:51 AM ET (13:51:42Z)
- **Action:** SELL NVDA 2 shares @ $221.71 (limit order filled immediately)
- **Authorization:** `memory/todo.md` (Monday) said **HOLD NVDA 3 — target 4-8%**. No hourly sell trigger was breached (price ~221.52, well above stop ~218).
- **Impact:** Reduced NVDA from 3 shares to 1 share, cutting semi exposure from ~6.7% to ~2.2% and increasing cash drag.
- **PDT impact:** Not a daytrade (shares were held overnight from prior buys).

## Root Cause
1. `memory/.trading_lock.json` contained an `expiresAt` timestamp set to 2026-05-19T13:35:00Z (09:35 ET).
2. The tactical agent interpreted the expired lock file as inactive and placed orders before the 09:35 hourly run could update `memory/todo.md` and directives.
3. `alpaca_cli.ts` had a bug where `todo.md` HARD_LOCK was only checked when the lock file was active AND did not allow the order; an inactive lock file bypassed the HARD_LOCK check entirely.

## Remedies Deployed
1. **Fixed `alpaca_cli.ts`** — the CLI now checks `memory/todo.md` for `HARD_LOCK` regardless of whether `memory/.trading_lock.json` is active or inactive.
2. **Removed `expiresAt` from lock file** — locks no longer auto-expire. They must be explicitly lifted by the hourly strategist.
3. **Re-engaged hard lock** for the 10:40/10:50 tactical cycles. Lift only after the 10:35 hourly review.

## Financial Impact
- Realized loss on NVDA 2 shares vs prior unrealized: selling at 221.71 when avg cost was 231.585 = ~$19.75 loss per share (~$39.50 total).
- Opportunity cost of reduced exposure if NVDA recovers.
