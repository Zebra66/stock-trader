# Violation Audit — 2026-05-19

## Incident 1 — Tactical Agent False Alarm (NVDA Trim)

### NVDA — Tactical Agent Flagged as Unauthorized, but Actually Authorized
- **Time:** 09:51 AM ET (13:51:42Z)
- **Action:** SELL NVDA 2 shares @ $221.71 (limit order filled immediately)
- **Authorization:** The 9:35 AM ET hourly directive **explicitly authorized** this trim: "Trim NVDA earnings binary risk — SELL 2 shares via limit ~220.50."
- **Why the tactical agent flagged it:** A concurrent tactical agent session read an outdated `memory/todo.md` from Monday that said "HOLD NVDA 3." It placed a hard lock claiming unauthorized execution.
- **Resolution:** The 9:59 AM ET hourly run reviewed the trade, confirmed it matched the 9:35 directive, and lifted the erroneous lock.

## Incident 2 — CRITICAL Unauthorized Trade Executed by Tactical Agent (10:02 AM ET)

### 1. QQQ — Concentration Cap Breach
- **Time:** ~10:02 AM ET (~14:02Z)
- **Action:** BUY QQQ 2 shares (6→8 shares total)
- **Authorization:** Explicitly forbidden. The 9:35 and 9:59 hourly directives stated QQQ was at 42.5% and near the 45% cap. No QQQ adds were authorized today.
- **Impact:** QQQ now represents **56.5% of equity**, breaching the 45% maximum concentration cap. Massive overweight in a single ETF.

### 2. AVGO — Unauthorized Buy
- **Time:** ~10:02 AM ET (~14:02Z)
- **Action:** BUY AVGO 1 share @ ~$408.15
- **Authorization:** Explicitly forbidden. Both the 9:35 and 9:59 hourly directives stated: "No AVGO, SOXX, or META adds today. Defer until after NVDA earnings."
- **Impact:** Unauthorized position in a semi name ahead of NVDA earnings binary event. No directional edge.

### 3. META — Unauthorized Buy
- **Time:** ~10:02 AM ET (~14:02Z)
- **Action:** BUY META 1 share @ ~$609.22
- **Authorization:** Explicitly forbidden. The 9:35 and 9:59 hourly directives stated META should be avoided (weak trend, no catalyst, layoff execution risk).
- **Impact:** Unauthorized position in a laggard name.

## Root Cause (Incident 2)
1. **Tactical agent race condition:** Multiple tactical agent sessions ran concurrently. One session read the updated 9:59 todo.md and executed the authorized VOO add correctly. A separate session either read a stale todo.md or ignored the explicit no-trade conditions and placed unauthorized orders.
2. **Concentration caps were text-only, not code-enforced:** The 45% QQQ cap, 15% single-stock cap, and 20% non-QQQ ETF cap existed only in the hourly prompt and todo.md. There was no code-level rejection in `alpaca_cli.ts`.
3. **The tactical agent may have read an outdated `memory/todo.md` snapshot:** If a tactical session started before the 9:59 hourly update but submitted orders after the file was updated, it could have operated on stale directives.

## Remedies Deployed
1. **Fixed `alpaca_cli.ts`** — Added code-level concentration cap enforcement in `submitOrder`:
   - Rejects BUY orders that would push QQQ above 45% of equity.
   - Rejects BUY orders that would push any single stock above 15% of equity.
   - Rejects BUY orders that would push any non-QQQ ETF above 20% of equity.
2. **HARD_LOCK re-engaged** — Active immediately. No discretionary trading until cleanup is complete.
3. **Lock file updated** — `memory/.trading_lock.json` now requires explicit hourly strategist lift (no `expiresAt`).

## Cleanup Plan (Execute Wednesday May 20 at market open)
- **SELL 2 QQQ shares** — Reduce from 8 to 6, back within 45% cap. Not a daytrade (bought Tuesday, sold Wednesday).
- **SELL 1 AVGO share** — Liquidate unauthorized position entirely. Not a daytrade.
- **SELL 1 META share** — Liquidate unauthorized position entirely. Not a daytrade.

## Financial Impact
- **Equity drop:** $9,912.49 (9:59) → $9,870.77 (10:12) = -$41.72 (-0.42%) in ~13 minutes.
- **QQQ extra shares:** Bought into a falling tape. QQQ down -1.30% today. Extra shares underwater.
- **AVGO:** Down -3.21% today. Small unrealized loss on unauthorized position.
- **META:** Flat. Small unrealized gain.
- **Opportunity cost:** Capital tied up in unauthorized positions that could have been deployed post-NVDA earnings.
