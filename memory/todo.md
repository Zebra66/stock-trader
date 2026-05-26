# Tactical Todo — Updated 2026-05-26 19:35Z (Tuesday 3:35 PM ET)
**HARD_LOCK LIFTED for tomorrow's session (Wed May 27). Market open until 16:00 ET (~25 min). NO discretionary buys for remainder of Tue May 26 session.**

## Current State
- **Regime:** offensive catch-up (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1
- **Account equity / cash / buying power:** $10,153.22 / $2,244.52 / ~$12,397.74
- **Gross long exposure:** ~77.9% | **Net exposure:** ~77.9% | **Cash:** ~22.1%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE

## Breach Notice — Resolved
- Tactical agent executed **unauthorized NVDA buy 1 share @ $216.71 at 10:40 AM ET** and placed **second unauthorized NVDA limit buy @ $210 at 11:39 AM ET** despite explicit `HOLD NVDA 1 — DO NOT ADD` in prior todo.
- Neither trade was recorded in todo.md = **concealment risk**.
- Hard lock was imposed by strategist at 2:35 PM ET and **lifted at 3:35 PM ET** after 1 hour of clean behavior.
- If any further unauthorized trade is detected, the strategist will re-impose **cleanup-only hard lock** immediately.

## Position Instructions — Hold Through Close
- **HOLD SOXX 1 — DO NOT SELL.** Bought Friday at $533.95. Weight ~5.6%, within 20% non-QQQ ETF cap. Breakout validated by UBS Micron upgrade / MU $1T club. Now at $570.64 (+6.87% unrealized, +6.23% intraday). Let momentum run. **Do not sell SOXX unless hourly note explicitly authorizes.**
  - **Add trigger for tomorrow (Wed May 27):** If SOXX pulls back to $555.00 or below with orderly tape (SPY not down >1%), AUTHORIZE buy 1 share SOXX via limit order at $554.50. **DO NOT place this order today.**
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.1%, within 45% cap. Adding 1 share would breach 45% cap (~50.8%).
- **HOLD GOOG 3 — DO NOT SELL OR ADD.** Weight ~11.3%, within 15% cap. DO NOT ADD — adding 1 share would breach 15% cap (~15.0%).
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.6%, within 20% non-QQQ ETF cap. DO NOT ADD — adding 1 share would breach 20% cap (~20.4%).
- **HOLD NVDA 2 — DO NOT ADD.** Weight ~4.2%, within 15% cap. Position now 2 shares after unauthorized add. 2nd share bought at $216.71, now $213.64 (underwater). Do not compound the breach.
  - **Cut trigger for tomorrow (Wed May 27):** If NVDA drops below $210.00, AUTHORIZE sell FULL position (2 shares) NVDA. Rationale: support break confirms continued post-earnings weakness. This would consume a daytrade (2→3/3); strategist accepts this risk for a stop-loss exit.
  - **DO NOT SELL NVDA TODAY** — same-day reversal of unauthorized add bought at 10:40 AM ET is prohibited (anti-churn).
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. META Supreme Court rejection today. No re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends. RKLB parabolic on SpaceX/OpenAI IPO buzz; avoid.

## Hard Rules / No-Trade Conditions
- **NO discretionary buys for remainder of Tue May 26 session.** Market closes in ~25 minutes. No chasing.
- **HARD_LOCK LIFTED for Wed May 27 session.** Fresh hourly note at 9:35 AM ET will set tomorrow's directives.
- **No same-day reversals today.** If any symbol was bought today (NVDA 2nd share at 10:40 AM ET), do NOT sell it today.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry (anti-churn cooldown + weak trends + bannedSymbols).
- **Do NOT add QQQ / GOOG / VOO / NVDA / SOXX today** — concentration caps would be breached or hard lock prohibits.
- **Do NOT chase SOXX** with a market order above $570. Only add on pullback to $555 or below via limit order, and only tomorrow if hourly note authorizes.
- **Do NOT chase NVDA** with a market order. No adds authorized.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are all code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach (unauthorized position) — exit immediately if instructed.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced — Defense in Depth)
- `memory/.trading_lock.json` contains `bannedSymbols: ["AVGO", "META"]` and `active: false` (hard lock lifted).
- BUY orders for banned symbols are REJECTED by both `alpaca_cli.ts` and `alpaca_client_factory.ts` unless explicitly allowed via the `allowed` field.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.
- Hourly strategist controls both mechanisms; tactical agent cannot override them.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Improved but still thin relative to large-cap ETFs (47 trades, 1,134 vol last bar at 19:34Z). Limit orders only.
- **EIS:** Very low trade count / volume (1 trade, 100 vol last bar at 16:52Z — STALE).
- **SHLD:** Low trade count / volume (3 trades, 242 vol last bar at 19:34Z).
- **QTUM:** Very low trade count / volume (1 trade, 100 vol last bar at 19:34Z).
- **ARKX:** Low trade count / volume (5 trades, 502 vol last bar at 19:34Z).
- **GLD:** Low trade count / volume (5 trades, 205 vol last bar at 19:34Z).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## Tomorrow's Deployment Queue (Wed May 27 — Pending 9:35 AM ET Authorization)
1. **SOXX add:** BUY 1 share if price drops to $555.00 or below with orderly tape (SPY not down >1%). Limit order at $554.50. Rationale: add to winner on healthy pullback; captures structural chip rally.
2. **NVDA cut:** SELL FULL position (2 shares) if price breaks below $210.00. Rationale: stop-loss on post-earnings weakness.
3. **NVDA trim:** If NVDA is still lagging below $215.00 at tomorrow's close, consider trimming back to 1 share on Thursday (clears 24h cooldown on unauthorized add).
4. **QQQ / GOOG / VOO:** No adds — concentration caps prevent.

## This Cycle — 2026-05-26 19:35Z (Tuesday 3:35 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,153.22 | Cash $2,244.52 | Long $7,908.70 | Gross 77.9% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1.
- **Open orders:** NONE.
- **Event detector:** NONE (ran at 19:35Z, no events).
- **Fresh intel:** Micron joins $1T club on UBS $1,625 target. SOXX +6.23% intraday (Yahoo). "Broadcom drifts" networking headline. META Supreme Court rejection. SPY at ~749.92. No new macro headlines.
- **Goal check:** Portfolio +1.53% since inception vs SPY +4.44%. Trailing by ~2.91 pp. Goal 1 MET. Goal 2 off track.
- **Regime:** Offensive catch-up. Target gross exposure 60–80% (currently 77.9%).
- **Hard lock status:** LIFTED at 3:35 PM ET. No discretionary buys for remainder of today.
- **Orders placed this cycle:** None.
- **Next expected action:** Tomorrow 9:35 AM ET — reassess chip rally, NVDA strength, set fresh deployment directives.

## Previous Cycle — 2026-05-26 18:35Z (Tuesday 2:35 PM ET)
- **Holdings:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1.
- **Breach detected and contained.** Hard lock imposed. Rogue NVDA limit order canceled.
- **Next expected action:** This run (3:35 PM ET).
