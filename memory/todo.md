# Tactical Todo — Updated 2026-05-26 16:35Z (Tuesday 12:35 PM ET)
*HARD_LOCK LIFTED. Market OPEN. Iran situation stable but tense — stay alert for volatility. Execute authorized orders only. No chasing gap-ups.*

## Current State
- **Regime:** offensive catch-up (60–80% band) — **elevated geopolitical watch**
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1
- **Account equity / cash / buying power:** $10,134.97 / $2,244.52 / ~$11,242.49
- **Gross long exposure:** 77.86% | **Net exposure:** 77.86% | **Cash:** 22.15%
- **Daytrade count:** 1/3 (META round-trip from Thursday)
- **Pattern day trader:** false
- **Open orders:** 2 limit buys active — SOXX $555, NVDA $210. GOOG $372 was **canceled** by hourly strategist to prevent 15% single-stock cap breach.

## Position Instructions — Valid for :50 and subsequent Tactical Runs until next hourly at 1:35 PM ET
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.13%, near 45% cap. Adding 1 share would breach cap.
- **HOLD GOOG 3 — DO NOT SELL.** Weight ~11.35%, within 15% cap. **GOOG limit buy was CANCELED** — adding 1 share would breach 15% single-stock cap (4 shares @ ~$383 = 15.1%). DO NOT place another GOOG buy without explicit hourly authorization.
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.61%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap.
- **HOLD NVDA 2 — DO NOT SELL TODAY.** Weight ~4.21%. NVDA 1 share was bought TODAY at 10:40 AM ET ($216.71). Selling it today would be a same-day reversal and is PROHIBITED. The other share was bought earlier. **NVDA limit buy $210 for 1 share is ACTIVE** (placed by hourly strategist). DO NOT place another NVDA buy. If the limit fills, position becomes 3 shares. The newly added share is a same-day buy — DO NOT SELL it today.
- **HOLD SOXX 1 — DO NOT SELL TODAY unless explicitly authorized by hourly note.** Weight ~5.57%. SOXX limit buy $555 for 1 share is ACTIVE (placed by hourly strategist). DO NOT place another SOXX buy. If the limit fills, position becomes 2 shares. The newly added share is a same-day buy — DO NOT SELL it today.
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 1:35 PM ET)
- **NO discretionary buys** without explicit hourly authorization.
- **NO market orders for new positions today.** Only limit orders at specified pullback levels.
- **No same-day reversals.** NVDA 1 share bought today — cannot sell today. If SOXX/NVDA limit fills, those shares bought today cannot be sold today.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry.
- **Do NOT add QQQ / VOO / GOOG** — concentration caps would be breached.
- **Do NOT chase NVDA or SOXX** with market orders after gap-up.
- **GEOPOLITICAL HARD STOP:** If Iran retaliatory strikes are confirmed or SPY drops >1.5% from current level (~749.8 to <738), cancel all pending limit buys and default to HOLD-ONLY. Do NOT add new long exposure into an escalating conflict.
- **IF BOTH NVDA AND SOXX LIMITS FILL, gross exposure rises to ~85%.** In that case, DO NOT authorize any additional long exposure for the remainder of the session.

## Concentration Cap Guard (Code-Enforced — Defense in Depth)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts`, `alpaca_client_factory.ts`, and `concentration_guard.ts`.
- **GOOG cap note:** 4 shares @ current price ~$383 = $1,532 = 15.1% of equity. **Exceeds 15% cap.** Any new GOOG buy order will be rejected until equity rises or price drops materially.

## Symbol Ban Guard (Code-Enforced — Defense in Depth)
- `memory/.trading_lock.json` contains `bannedSymbols: ["AVGO", "META"]`.
- BUY orders for banned symbols are REJECTED by both `alpaca_cli.ts` and `alpaca_client_factory.ts` unless explicitly allowed via the `allowed` field.
- Additionally, both tools parse `memory/todo.md` for lines containing "DO NOT BUY" or "DO NOT RE-BUY" and extract symbols, rejecting BUY orders for those symbols automatically.
- Hourly strategist controls both mechanisms; tactical agent cannot override them.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin (8 trades, 584 vol last bar at 16:34Z). Limit orders only.
- **EIS:** Very low trade count / volume (1 trade, 100 vol last bar at 15:54Z).
- **SHLD:** Very low trade count / volume (2 trades, 300 vol last bar at 16:34Z).
- **QTUM:** Low trade count / volume (10 trades, 1,070 vol last bar at 16:33Z).
- **ARKX:** Low trade count / volume (7 trades, 800 vol last bar at 16:34Z).
- **GLD:** Very low trade count / volume (1 trade, 40 vol last bar at 16:34Z).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-26 16:35Z (Tuesday 12:35 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,134.97 | Cash $2,244.52 | Long $7,890.45 | Gross 77.86% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6 ($4,371.00 @ 728.50), GOOG 3 ($1,149.24 @ 383.08), VOO 2 ($1,378.97 @ 689.485), NVDA 2 ($426.38 @ 213.19), SOXX 1 ($564.98 @ 564.98).
- **Open limit buys:** SOXX $555 (PENDING), NVDA $210 (PENDING).
- **Canceled limit buys:** GOOG $372 (canceled by hourly strategist to prevent 15% cap breach).
- **No sells.** No unauthorized trades.
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** Iran situation stable but tense. No new confirmed strikes since 11:35 AM. Market orderly. SOXX pulled back from +6.2% to +5.15% intraday. NVDA still lagging (-0.99% today, -4.06% weekly).
- **Goal check:** Portfolio +1.35% since inception vs SPY +4.43%. Trailing by ~3.08 pp (stable from ~3.06 pp at 11:35 AM).
- **Regime:** Offensive catch-up. Target gross exposure 60–80% (currently 77.86%).
- **Orders placed this cycle:** Canceled GOOG buy 1 limit $372.
- **Next expected action:** 1:35 PM ET hourly — reassess if Iran escalation accelerates or market stabilizes.

## Previous Cycle — 2026-05-26 15:35Z (Tuesday 11:35 AM ET)
- **NVDA limit buy PENDING:** 1 share limit $210.
- **SOXX limit buy PENDING:** 1 share limit $555.
- **GOOG limit buy PENDING:** 1 share limit $372 (later canceled at 12:35 PM).
- **Regime:** Offensive catch-up.
- **Next expected action:** 12:35 PM ET hourly (now completed).
