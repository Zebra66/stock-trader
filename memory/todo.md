# Tactical Todo — Updated 2026-05-26 23:55Z (Tuesday 7:55 PM ET)
**Next session: Wed May 27 09:30 ET. HARD_LOCK LIFTED.**

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1
- **Account equity / cash / buying power:** $10,164.90 / $2,244.52 / ~$12,409.42
- **Gross long exposure:** ~77.9% | **Net exposure:** ~77.9% | **Cash:** ~22.1%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE

## Position Instructions — Wed May 27
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.1%, within 45% cap. Adding 1 share would breach 45% cap (~50.8%). Let momentum run.
- **HOLD GOOG 3 — DO NOT SELL OR ADD.** Weight ~11.3%, within 15% cap. DO NOT ADD — adding 1 share would breach 15% cap (~15.0%).
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.6%, within 20% non-QQQ ETF cap. DO NOT ADD — adding 1 share would breach 20% cap (~20.4%).
- **HOLD SOXX 1 — DO NOT SELL.** Weight ~5.6%, within 20% non-QQQ ETF cap. Breakout validated. Let momentum run.
  - **Add trigger:** BUY 1 share SOXX if price drops to $565.00 or below with orderly tape (SPY not down >1%). Use limit order at $564.50. Rationale: add to winner on healthy pullback; captures structural chip rally. DO NOT chase above $570 with a market order.
- **HOLD NVDA 2 — DO NOT ADD.** Weight ~4.2%, within 15% cap. 2nd share from unauthorized add at $216.71, now ~$214.67 (underwater).
  - **Cut trigger:** SELL FULL position (2 shares) NVDA if price breaks below $210.00. Rationale: stop-loss on post-earnings weakness / relative underperformance vs SOXX. This would consume a daytrade (2→3/3); strategist accepts this risk for a stop-loss exit.
  - **Trim trigger:** If NVDA is still lagging below $215.00 at tomorrow's close, consider trimming back to 1 share on Thursday (clears 24h cooldown on unauthorized add).
- **BUY AVGO 1 share — DO NOT ADD MORE.** Rebuild quality AI/networking exposure. Earnings catalyst June 3. Citi top semi pick for 2026. Use limit order at $420.00 or market if opens near that level. Weight after add: ~4.1% (well within 15% single-stock cap). Rationale: quality name lagging within surging chip sector; catch-up play with defined catalyst.
- **NO META — DO NOT BUY.** bannedSymbols active. Supreme Court rejection + weak 1M trend. No re-entry.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge, weak relative trends, or parabolic chase risk. RKLB +74% 1M is too extended.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
- **No new short sales** under any circumstances.
- **Do NOT chase SOXX** with a market order above $570. Only add on pullback to $565 or below via limit order.
- **Do NOT chase NVDA** with a market order. No adds authorized.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin relative to large-cap ETFs. Limit orders only.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Tomorrow's Deployment Queue (Wed May 27 — Execution Priority)
1. **AVGO add:** BUY 1 share at limit $420.00 or market if near that level. Highest priority — rebuild quality name with earnings catalyst.
2. **SOXX add:** BUY 1 share if price drops to $565.00 or below with orderly tape. Limit $564.50. Second priority — add to winner on pullback.
3. **NVDA cut:** SELL FULL position (2 shares) if price breaks below $210.00. Defensive priority — stop-loss.

## This Cycle — 2026-05-26 23:55Z (Tuesday 7:55 PM ET)
- **Market status:** CLOSED. Next open Wed May 27 09:30 ET.
- **Live broker refresh:** Equity $10,164.90 | Cash $2,244.52 | Long $7,920.38 | Gross 77.9% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1.
- **Open orders:** NONE.
- **Event detector:** NONE (no events after market close).
- **Fresh intel:** SOXX +6.23% intraday on UBS Micron upgrade. NVDA -0.85% intraday lagging within semis. SPY at ~750.46. AVGO +2.05% but "drifting" vs networking peers — relative laggard, good catch-up candidate.
- **Goal check:** Portfolio +1.65% since inception vs SPY +4.52%. Trailing by ~2.9 pp. Goal 1 MET. Goal 2 off track.
- **Regime:** Offensive catch-up. Target gross exposure 80–90% (currently 77.9%).
- **Hard lock status:** LIFTED. No restrictions for Wed May 27 session.
- **Orders placed this cycle:** None (market closed).
- **Code changes:** Resolved `alpaca_cli.ts` merge conflict — restored missing imports and fixed client references.
- **Lock file changes:** Removed AVGO from bannedSymbols; kept META banned.
- **Next expected action:** Wed May 27 09:35 ET — execute AVGO rebuild and SOXX add-on-dip if conditions met. Monitor NVDA stop at $210.
