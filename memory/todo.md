# Tactical Todo — Updated 2026-05-26 15:35Z (Tuesday 11:35 AM ET)
*HARD_LOCK LIFTED. Market OPEN. Iran ceasefire hopes fading — stay alert for volatility. Execute authorized orders only. No chasing gap-ups.*

## Current State
- **Regime:** offensive catch-up (60–80% band) — **elevated geopolitical watch**
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1
- **Account equity / cash / buying power:** $10,131.58 / $2,244.52 / ~$11,449.10
- **Gross long exposure:** 77.89% | **Net exposure:** 77.89% | **Cash:** 22.11%
- **Daytrade count:** 1/3 (META round-trip from Thursday)
- **Pattern day trader:** false
- **Open orders:** 3 limit buys active — SOXX $555, GOOG $372, NVDA $210

## Position Instructions — Valid for :50 and subsequent Tactical Runs until next hourly at 12:35 PM ET
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.22%, near 45% cap. Adding 1 share would breach cap.
- **HOLD GOOG 3 — DO NOT SELL.** Weight ~11.31%, within 15% cap. **GOOG limit buy $372 for 1 share is ACTIVE** (placed by hourly strategist). DO NOT place another GOOG buy. If the limit fills, position becomes 4 shares. The newly added share is a same-day buy — DO NOT SELL it today.
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.61%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap.
- **HOLD NVDA 2 — DO NOT SELL TODAY.** Weight ~4.24%. NVDA 1 share was bought TODAY at 10:40 AM ET ($216.71). Selling it today would be a same-day reversal and is PROHIBITED. The other share was bought earlier. **NVDA limit buy $210 for 1 share is ACTIVE** (placed by hourly strategist). DO NOT place another NVDA buy. If the limit fills, position becomes 3 shares. The newly added share is a same-day buy — DO NOT SELL it today.
- **HOLD SOXX 1 — DO NOT SELL TODAY unless explicitly authorized by hourly note.** Weight ~5.57%. SOXX limit buy $555 for 1 share is ACTIVE (placed by hourly strategist). DO NOT place another SOXX buy. If the limit fills, position becomes 2 shares. The newly added share is a same-day buy — DO NOT SELL it today.
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 12:35 PM ET)
- **NO discretionary buys** without explicit hourly authorization.
- **NO market orders for new positions today.** Only limit orders at specified pullback levels.
- **No same-day reversals.** NVDA 1 share bought today — cannot sell today. If SOXX/GOOG/NVDA limit fills, those shares bought today cannot be sold today.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry.
- **Do NOT add QQQ / VOO** — concentration caps would be breached.
- **Do NOT chase NVDA, SOXX, or GOOG** with market orders after gap-up.
- **GEOPOLITICAL HARD STOP:** If Iran retaliatory strikes are confirmed or SPY drops >1.5% from current level (~749.5 to <738), cancel all pending limit buys and default to HOLD-ONLY. Do NOT add new long exposure into an escalating conflict.

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
- **SOXX:** Thin (14 trades, 335 vol last bar at 15:34Z). Limit orders only.
- **EIS:** Very low trade count / volume (4 trades, 200 vol last bar at 15:01Z).
- **SHLD:** Very low trade count / volume (4 trades, 154 vol last bar at 15:34Z).
- **QTUM:** Low trade count / volume (8 trades, 735 vol last bar at 15:34Z).
- **ARKX:** Low trade count / volume (2 trades, 400 vol last bar at 15:32Z).
- **GLD:** Very low trade count / volume (4 trades, 194 vol last bar at 15:33Z).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-26 15:35Z (Tuesday 11:35 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,131.58 | Cash $2,244.52 | Long $7,887.06 | Gross 77.89% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6 ($4,369.59 @ 728.265), GOOG 3 ($1,145.58 @ 381.86), VOO 2 ($1,378.78 @ 689.39), NVDA 2 ($429.14 @ 214.57), SOXX 1 ($563.98 @ 563.975).
- **Open limit buys:** SOXX $555 (PENDING), GOOG $372 (PENDING), NVDA $210 (PENDING).
- **No sells.** No unauthorized trades.
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** Iran ceasefire hopes fading fast. US launched new strikes on Iran missile sites/boats (BBC, Reuters, Al Jazeera, NPR). Iran threatens retaliation. Market fading from morning highs — orderly pullback so far. SOXX pulled back from +6.2% to +4.96% intraday. NVDA still lagging.
- **Goal check:** Portfolio +1.32% since inception vs SPY +4.38%. Trailing by ~3.06 pp (widened slightly from ~2.98 pp at 10:45 AM).
- **Regime:** Offensive catch-up. Target gross exposure 60–80% (currently 77.89%).
- **Orders placed this cycle:** NVDA buy 1 limit $210 (PENDING).
- **Next expected action:** 12:35 PM ET hourly — reassess if Iran escalation accelerates or market stabilizes.

## Previous Cycle — 2026-05-26 14:45Z (Tuesday 10:45 AM ET)
- **NVDA buy FILLED:** 1 share limit $216.75 at $216.71. Position now 2 shares avg $220.20.
- **SOXX limit buy PENDING:** 1 share limit $555.
- **GOOG limit buy PENDING:** 1 share limit $372.
- **Regime:** Offensive catch-up.
- **Next expected action:** 11:35 AM ET hourly (now completed).
