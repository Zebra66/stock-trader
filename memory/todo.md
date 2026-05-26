# Tactical Todo — Updated 2026-05-26 14:45Z (Tuesday 10:45 AM ET)
*HARD_LOCK LIFTED. Market OPEN. Execute authorized orders only. No chasing gap-ups.*

## Current State
- **Regime:** offensive catch-up (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1
- **Account equity / cash / buying power:** $10,167.05 / $2,244.52 / ~$11,484.57
- **Gross long exposure:** 77.92% | **Net exposure:** 77.92% | **Cash:** 22.08%
- **Daytrade count:** 1/3 (META round-trip from Thursday)
- **Pattern day trader:** false
- **Open orders:** 2 limit buys active — SOXX $555, GOOG $372

## Position Instructions — Valid for :50 and subsequent Tactical Runs until next hourly at 11:35 AM ET
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.13%, near 45% cap. Adding 1 share would breach cap.
- **HOLD GOOG 3 — DO NOT SELL.** Weight ~11.30%, within 15% cap. **GOOG limit buy $372 for 1 share is ACTIVE** (placed by hourly strategist). DO NOT place another GOOG buy. If the limit fills, position becomes 4 shares. The newly added share is a same-day buy — DO NOT SELL it today.
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.60%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap.
- **HOLD NVDA 2 — DO NOT SELL TODAY.** Weight ~4.26%. NVDA 1 share was bought TODAY at 10:40 AM ET ($216.71). Selling it today would be a same-day reversal and is PROHIBITED. The other share was bought earlier. **DO NOT BUY additional NVDA today.**
- **HOLD SOXX 1 — DO NOT SELL TODAY unless explicitly authorized by hourly note.** Weight ~5.62%. SOXX limit buy $555 for 1 share is ACTIVE (placed by hourly strategist). DO NOT place another SOXX buy. If the limit fills, position becomes 2 shares. The newly added share is a same-day buy — DO NOT SELL it today.
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 11:35 AM ET)
- **NO discretionary buys** without explicit hourly authorization.
- **NO market orders for new positions today.** Only limit orders at specified pullback levels.
- **No same-day reversals.** NVDA 1 share bought today — cannot sell today. If SOXX/GOOG limit fills, those shares bought today cannot be sold today.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry.
- **Do NOT add QQQ / VOO** — concentration caps would be breached.
- **Do NOT chase NVDA, SOXX, or GOOG** with market orders after gap-up.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced — Defense in Depth)
- `memory/.trading_lock.json` contains `bannedSymbols: ["AVGO", "META"]`.
- BUY orders for banned symbols are REJECTED by both `alpaca_cli.ts` and `alpaca_client_factory.ts` unless explicitly allowed via the `allowed` field.
- Additionally, both tools parse `memory/todo.md` for lines containing "DO NOT BUY" or "DO NOT RE-BUY" and extract symbols, rejecting BUY orders for those symbols automatically.
- Hourly strategist controls both mechanisms; tactical agent cannot override them.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin (26 trades, 709 vol last bar at 14:34Z). Limit orders only.
- **EIS:** Very low trade count / volume (2 trades, 200 vol last bar at 14:49Z May 22 — STALE).
- **SHLD:** Very low trade count / volume (3 trades, 200 vol last bar at 14:34Z).
- **QTUM:** Low trade count / volume (4 trades, 482 vol last bar at 14:34Z).
- **ARKX:** Low trade count / volume (2 trades, 600 vol last bar at 14:33Z).
- **GLD:** Very low trade count / volume (7 trades, 236 vol last bar at 14:33Z).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-26 14:45Z (Tuesday 10:45 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,167.05 | Cash $2,244.52 | Long $7,922.53 | Gross 77.92% | Daytrade 1/3.
- **NVDA buy FILLED:** 1 share limit $216.75 at $216.71. Position now 2 shares avg $220.20.
- **SOXX limit buy PENDING:** 1 share limit $555.
- **GOOG limit buy PENDING:** 1 share limit $372.
- **Holdings confirmed:** QQQ 6 ($4,385.22 @ 730.87), GOOG 3 ($1,149.39 @ 383.13), VOO 2 ($1,382.52 @ 691.26), NVDA 2 ($433.68 @ 216.84), SOXX 1 ($570.66 @ 570.66).
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** Iran peace prospects sustaining rally. Dow +300, oil tumbling. SOXX +6.20% intraday. Jensen Huang bullish NVDA headline. NVDA China restriction negative but market shrugging off.
- **Goal check:** Portfolio +1.67% since inception vs SPY +4.65%. Trailing by ~2.98 pp (narrowed from 3.38 pp).
- **Regime:** Offensive catch-up. Target gross exposure 60–80%.
- **Orders placed this cycle:** NVDA buy 1 limit $216.75 (FILLED), SOXX buy 1 limit $555 (PENDING), GOOG buy 1 limit $372 (PENDING).
- **Next expected action:** 11:35 AM ET hourly — reassess if rally holds or fades.

## Previous Cycle — 2026-05-26 13:37Z (Tuesday 9:37 AM ET)
- **HOLD_LOCK lifted.** No unauthorized trades.
- **Holdings:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1.
- **No new orders.** Limit orders set for pullbacks: GOOG $375, SOXX $545, NVDA $212.
- **Next expected action:** 10:35 AM ET hourly (now completed).
