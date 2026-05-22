# Tactical Todo — Updated 2026-05-22 13:35Z (Friday 9:35 AM ET)
*HARD_LOCK LIFTED. Fresh Friday directives active. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 1
- **Account equity / cash / buying power:** $10,054.56 / $2,995.18 / ~$13,049.74
- **Gross long exposure:** ~70.2% | **Net exposure:** ~70.2% | **Cash:** ~29.8%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday)
- **Pattern day trader:** false
- **Open orders:** NONE

## Position Instructions — Valid for :40 and :50 Tactical Runs (9:40 AM, 9:50 AM ET)
- **HOLD SOXX 1 — DO NOT SELL.** Bought at $533.95 (limit $534.00 filled). Weight ~5.3%, within 20% non-QQQ ETF cap. Breakout above $525 confirmed. Let momentum run.
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~42.9%, within 45% cap. Adding 1 share would breach 45% cap.
- **HOLD GOOG 3 — DO NOT SELL.** Weight ~11.4%, within 15% cap. DO NOT ADD — adding 1 share would breach 15% cap (~15.2%).
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.7%, within 20% non-QQQ ETF cap. DO NOT ADD — adding 1 share would breach 20% cap (~20.3%).
- **HOLD NVDA 1 — DO NOT SELL.** Weight ~2.2%. Bought Thursday at 9:40 AM ET. Selling today = daytrade (#2). DO NOT ADD unless dip below $212 with hourly authorization.
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 10:35 AM ET)
- **NO discretionary buys** without explicit hourly authorization (except SOXX 1 share as authorized above).
- **No same-day reversals.** NVDA was bought Thursday; DO NOT SELL NVDA today.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry (anti-churn cooldown + weak trends + bannedSymbols).
- **Do NOT add QQQ / GOOG / VOO** — concentration caps would be breached.
- **Do NOT chase NVDA or SOXX** with market orders. SOXX requires limit orders.

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
- **SOXX:** Low trade count / volume on Alpaca (~20 trades, ~446 vol last bar). Limit orders only.
- **EIS:** Very low trade count / volume (1 trade, 100 vol last bar).
- **SHLD:** Very low trade count / volume (3 trades, 400 vol last bar).
- **QTUM:** Very low trade count / volume (8 trades, 1,422 vol last bar).
- **ARKX:** Low trade count / volume (2 trades, 119 vol last bar).
- **GLD:** Very low trade count / volume (8 trades, 421 vol last bar).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-22 13:35Z (Friday 9:35 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,054.56 | Cash $2,995.18 | Long $7,059.38 | Gross ~70.2% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6 ($4,317.90 @ 719.65), GOOG 3 ($1,147.83 @ 382.61), VOO 2 ($1,373.90 @ 686.95), NVDA 1 ($219.75 @ 219.75).
- **No open orders.**
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** SOXX breakout above $525 confirmed ($532–$535). SPY +0.68% to $747.76. US-Iran talks in "final stage" (de-escalation). Treasury yields falling. Dow at record highs. Risk-on tape intact.
- **Goal check:** Portfolio +0.55% since inception vs SPY +4.14%. Trailing by ~3.59 pp. Goal 1 (positive absolute) MET. Goal 2 (beat SPY) off track.
- **Regime:** Offensive catch-up. Target gross exposure 60–80% (currently 70.2%, after SOXX add ~75.5%).
- **Orders expected this cycle:** BUY SOXX 1 limit $534.00 (authorized by hourly strategist).
- **Next expected action:** 10:35 AM ET hourly — review SOXX fill, reassess NVDA/GOOG, monitor macro.

## Previous Cycle — 2026-05-21 19:37Z (Thursday 3:37 PM ET)
- **HARD_LOCK active.** No discretionary buys permitted.
- **BREACH DETECTED & CLEANED:** Unauthorized BUY META 1 share at $607.14 at 3:18 PM ET. Liquidated at 3:37 PM ET.
- **Holdings:** QQQ 6, GOOG 3, VOO 2, NVDA 1.
- **Next expected action:** Friday 9:35 AM ET hourly — lift hard lock if conditions warrant, reassess SOXX breakout and NVDA support.
