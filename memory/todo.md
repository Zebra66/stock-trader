# Tactical Todo — Updated 2026-05-26 17:35Z (Tuesday 1:35 PM ET)
*HARD_LOCK LIFTED. Market OPEN. Iran escalation ACTIVE — Iran threatening retaliation after US strikes. Stay alert for volatility. Execute authorized orders only. No chasing gap-ups.*

## Current State
- **Regime:** offensive catch-up with ACTIVE DEFENSIVE WATCH (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1
- **Account equity / cash / buying power:** $10,129.32 / $2,244.52 / ~$11,608.84
- **Gross long exposure:** 77.84% | **Net exposure:** 77.84% | **Cash:** 22.16%
- **Daytrade count:** 1/3 (META round-trip from Thursday)
- **Pattern day trader:** false
- **Open orders:** 1 limit buy active — NVDA $210. SOXX $555 was **CANCELED** by hourly strategist at 1:35 PM ET due to Iran escalation risk.

## Position Instructions — Valid for :50 and subsequent Tactical Runs until next hourly at 2:35 PM ET
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.12%, near 45% cap. Adding 1 share would breach cap.
- **HOLD GOOG 3 — DO NOT SELL.** Weight ~11.32%, within 15% cap. **GOOG limit buy was CANCELED at 12:35 PM** — adding 1 share would breach 15% single-stock cap (4 shares @ ~$382 = 15.1%). DO NOT place another GOOG buy without explicit hourly authorization.
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.60%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap.
- **HOLD NVDA 2 — DO NOT SELL TODAY.** Weight ~4.22%. NVDA 1 share was bought TODAY at 10:40 AM ET ($216.71). Selling it today would be a same-day reversal and is PROHIBITED. The other share was bought earlier. **NVDA limit buy $210 for 1 share is ACTIVE** (placed by hourly strategist). DO NOT place another NVDA buy. If the limit fills, position becomes 3 shares. The newly added share is a same-day buy — DO NOT SELL it today.
- **HOLD SOXX 1 — DEFENSIVE TRIM AUTHORIZED.** Weight ~5.59%. **SOXX limit buy $555 was CANCELED** — do NOT place a new SOXX buy. If defensive trigger conditions are met (see below), SELL 1 share SOXX immediately. This is NOT a same-day reversal (SOXX bought May 22).
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Defensive Triggers (Execute Immediately if Conditions Met)
- **SELL 1 SOXX immediately** if ANY of the following occur:
  1. Credible news source (WaPo, Reuters, AP, Al Jazeera, BBC, major wire) confirms Iran has launched retaliation strikes.
  2. SPY drops below 745 (~0.5% below current level of ~749).
  3. SOXX drops below 540 (~4.6% below current ~566) on confirmed volume.
- **Rationale:** SOXX is the most extended and volatile position (+13.97% weekly, +6.00% today). In a risk-off escalation, it will fall hardest. Preserve capital. This sell is of the May 22 share, not same-day.
- **If defensive trigger fires:** Cancel the NVDA limit buy $210 immediately. Do NOT add new long exposure into a falling market.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 2:35 PM ET)
- **NO discretionary buys** without explicit hourly authorization.
- **NO market orders for new positions today.** Only limit orders at specified pullback levels.
- **No same-day reversals.** NVDA 1 share bought today — cannot sell today. If NVDA limit fills, that new share cannot be sold today.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry.
- **Do NOT add QQQ / VOO / GOOG** — concentration caps would be breached.
- **Do NOT chase NVDA or SOXX** with market orders after gap-up.
- **GEOPOLITICAL HARD STOP:** If Iran retaliatory strikes are confirmed or SPY drops >1.5% from current level (~749 to <738), cancel all pending limit buys and default to HOLD-ONLY. Do NOT add new long exposure into an escalating conflict.
- **IF NVDA LIMIT FILLS, gross exposure rises to ~79.9%.** In that case, DO NOT authorize any additional long exposure for the remainder of the session.

## Concentration Cap Guard (Code-Enforced — Defense in Depth)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts`, `alpaca_client_factory.ts`, and `concentration_guard.ts`.
- **GOOG cap note:** 4 shares @ current price ~$382 = $1,528 = 15.1% of equity. **Exceeds 15% cap.** Any new GOOG buy order will be rejected until equity rises or price drops materially.

## Symbol Ban Guard (Code-Enforced — Defense in Depth)
- `memory/.trading_lock.json` contains `bannedSymbols: ["AVGO", "META"]`.
- BUY orders for banned symbols are REJECTED by both `alpaca_cli.ts` and `alpaca_client_factory.ts` unless explicitly allowed via the `allowed` field.
- Additionally, both tools parse `memory/todo.md` for lines containing "DO NOT BUY" or "DO NOT RE-BUY" and extract symbols, rejecting BUY orders for those symbols automatically.
- Hourly strategist controls both mechanisms; tactical agent cannot override them.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin (3 trades, 85 vol last bar at 17:34Z). Limit orders only.
- **EIS:** Very low trade count / volume (1 trade, 100 vol last bar at 16:52Z).
- **SHLD:** Very low trade count / volume (2 trades, 257 vol last bar at 17:33Z).
- **QTUM:** Low trade count / volume (3 trades, 132 vol last bar at 17:30Z).
- **ARKX:** Low trade count / volume (1 trade, 300 vol last bar at 17:33Z).
- **GLD:** Very low trade count / volume (1 trade, 70 vol last bar at 17:34Z).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-26 17:35Z (Tuesday 1:35 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,129.32 | Cash $2,244.52 | Long $7,884.80 | Gross 77.84% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6 ($4,367.85 @ 727.98), GOOG 3 ($1,146.48 @ 382.16), VOO 2 ($1,377.20 @ 688.60), NVDA 2 ($427.30 @ 213.65), SOXX 1 ($566.00 @ 566.00).
- **Open limit buys:** NVDA $210 (PENDING).
- **Canceled limit buys:** SOXX $555 (canceled by hourly strategist at 1:35 PM due to Iran escalation risk). GOOG $372 (canceled at 12:35 PM).
- **No sells.** No unauthorized trades.
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** Iran situation has materially deteriorated since 12:35 PM. Iran threatening retaliation after US strikes. Ceasefire "hangs by a thread." Market orderly but vulnerable. SOXX pulled back from +6.2% to +5.36% intraday. NVDA still lagging (-0.78% today, -4.06% weekly).
- **Goal check:** Portfolio +1.29% since inception vs SPY +4.33%. Trailing by ~3.04 pp (narrowed from ~3.08 pp at 12:35 PM).
- **Regime:** Offensive catch-up with ACTIVE DEFENSIVE WATCH. Target gross exposure 60–80% (currently 77.84%).
- **Orders placed this cycle:** Canceled SOXX buy 1 limit $555.
- **Next expected action:** 2:35 PM ET hourly — reassess if Iran escalation accelerates or market stabilizes.

## Previous Cycle — 2026-05-26 16:35Z (Tuesday 12:35 PM ET)
- **NVDA limit buy PENDING:** 1 share limit $210.
- **SOXX limit buy PENDING:** 1 share limit $555 (later canceled at 1:35 PM).
- **GOOG limit buy PENDING:** 1 share limit $372 (canceled at 12:35 PM).
- **Regime:** Offensive catch-up.
- **Next expected action:** 1:35 PM ET hourly (now completed).
