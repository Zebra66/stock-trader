# Tactical Todo — Updated 2026-05-26 14:05Z (Tuesday 10:05 AM ET)
*HARD_LOCK LIFTED. Market open. Valid until next hourly update at 11:35 AM ET.*

## Current State
- **Regime:** offensive catch-up (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1
- **Account equity / cash / buying power:** $10,147.02 / $2,461.23 / ~$12,608.25
- **Gross long exposure:** ~75.7% | **Net exposure:** ~75.7% | **Cash:** ~24.3%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE

## Position Instructions
- **HOLD SOXX 1 — DO NOT SELL.** Bought Friday at $533.95 (limit $534.00 filled). Weight ~5.6%, within 20% non-QQQ ETF cap. Breakout validated by UBS Micron upgrade. Now at $565.23 (+5.86% unrealized, +5.19% intraday). Let momentum run. **Do not sell SOXX unless hourly note explicitly authorizes.**
  - **Add trigger:** If SOXX pulls back to $550.00 or below with orderly tape (SPY not down >1%), AUTHORIZE buy 1 share SOXX via limit order at $549.50. Rationale: add to winning theme on dip, not chase at gap highs.
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.1%, within 45% cap. Adding 1 share would breach 45% cap (~50.8%).
- **HOLD GOOG 3 — DO NOT SELL OR ADD.** Weight ~11.4%, within 15% cap. DO NOT ADD — adding 1 share would breach 15% cap (~15.2%).
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.6%, within 20% non-QQQ ETF cap. DO NOT ADD — adding 1 share would breach 20% cap (~20.5%).
- **HOLD NVDA 1 — DO NOT ADD.** Weight ~2.1%. Underperforming broad chip rally. Now $216.03 (+0.65% intraday vs SOXX +6.23%).
  - **Cut trigger:** If NVDA drops below $210.00, AUTHORIZE sell 1 share NVDA. Rationale: support break confirms continued post-earnings weakness.
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. AVGO up 4.97% today on chip rally but no edge; META down 0.31% intraday. No re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends. RKLB is parabolic on SpaceX news; avoid.

## Hard Rules / No-Trade Conditions (Valid until 11:35 AM ET hourly)
- **NO discretionary buys** without explicit hourly authorization.
- **No same-day reversals.** If any symbol is bought today, do NOT sell it today.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry (anti-churn cooldown + weak trends + bannedSymbols).
- **Do NOT add QQQ / GOOG / VOO** — concentration caps would be breached.
- **Do NOT chase SOXX** with a market order above $565. Only add on pullback to $550 or below via limit order.
- **Do NOT chase NVDA** with a market order. No adds authorized.
- **Code guard committed:** `HARD_LOCK` regex matches bullet-formatted lines in `todo.md`. Defense-in-depth active.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless the event is an exchange halt or system outage, in which case hold). The exception: if a compliance breach is detected (unauthorized position), exit immediately.

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
- **SOXX:** Acceptable for limit orders (47 trades, 679 vol last bar at 14:00Z). Do NOT use market orders.
- **EIS:** Very low trade count / volume (2 trades, 200 vol last bar at 14:49Z Friday — STALE).
- **SHLD:** Low trade count / volume (7 trades, 1900 vol last bar at 14:00Z).
- **QTUM:** Very low trade count / volume (3 trades, 114 vol last bar at 13:59Z).
- **ARKX:** Low trade count / volume (2 trades, 101 vol last bar at 14:00Z).
- **GLD:** Low trade count / volume (7 trades, 480 vol last bar at 13:59Z).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-26 14:05Z (Tuesday 10:05 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,147.02 | Cash $2,461.23 | Long $7,685.79 | Gross 75.7% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1.
- **No open orders.**
- **Event detector:** NONE.
- **Fresh intel:** UBS raised Micron target to $1,625 (Street-high), citing AI structurally changing memory market. Chip complex surging: MU +14%, AMD +5%, AVGO +4.97%, SOXX +5.19%. NVDA flat (+0.65%). SPY +0.86%. No new macro headlines on Warsh or Iran.
- **Goal check:** Portfolio +1.47% since inception vs SPY +4.56%. Trailing by ~3.09 pp (improved from 3.56 pp Friday). Goal 1 MET. Goal 2 off track.
- **Regime:** Offensive catch-up. Target gross exposure 60–80% (currently 75.7%).
- **Orders placed this cycle:** NONE.
- **Next expected action:** 11:35 AM ET hourly — reassess chip rally follow-through, NVDA relative strength, SOXX pullback opportunity.

## Previous Cycle — 2026-05-22 20:09Z (Friday 4:09 PM ET — POST-CLOSE)
- **HOLD_LOCK lifted.** No unauthorized trades.
- **Holdings:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1.
- **No new orders.**
- **Next expected action:** Tuesday 9:35 AM ET (this run).
