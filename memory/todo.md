# Tactical Todo — Updated 2026-07-08 16:38Z (Wednesday 12:38 PM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market closes at 16:00 ET (~3.5 hours).*

## Current State
- **Regime:** neutral (70–80% band)
- **Live book:** QQQ 6, AVGO 3, HOOD 5, VOO 2
- **Account equity / cash / buying power:** ~$9,601 / ~$2,268 / ~$29,604 (margin)
- **Gross long exposure:** ~76.4% | **Net exposure:** ~76.4% | **Cash:** ~23.6%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET. Next tactical runs: 12:40, 12:50, 13:10, 13:20, 13:30, 13:40, 13:50 ET.

## Position Instructions — Wed Jul 8 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT ADD
- Weight ~44.1%, near 45% cap. Adding 1 share would breach cap (~49.1%).
- Unrealized –1.39% from avg $716.47. Today –0.46% (Alpaca). 1W –4.10%.
- Core liquid growth but testing 50D support. Iran risk-off pressuring tech.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $700.00 with limit $699.50. Rationale: protect capital on breakdown below 50D support and round number.
- **Anti-churn / PDT:** QQQ 1 share bought July 6 at $721.94. Selling 1 share uses FIFO from June 29 lot ($715.38) = NOT a daytrade. Do NOT sell 2+ QQQ shares today — the 2nd share would come from July 6 lot and count as a daytrade.
- Do NOT sell QQQ for any other reason today unless a MAJOR/CRITICAL event detector flag on QQQ explicitly justifies it.

### AVGO — HOLD 3 — DO NOT ADD
- Weight ~12.2%, within 15% cap. Adding 1 share would breach ~16.3% cap (code-rejected).
- Unrealized +5.46% from avg $371.95. Today +5.72% on Apple $30B+ chip deal.
- **Profit stop (HOUR EXPLICITLY AUTHORIZES):** SELL all 3 shares if price drops below $370.00 with limit $369.50. Rationale: protect Apple-deal gains if momentum reverses.
- Do NOT add AVGO today.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.2%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~21.4% cap.
- Broad-market anchor. No action required.
- **Note:** Alpaca bar shows anomalously low trade count — this is a data glitch. VOO is among the most liquid ETFs globally. Ignore illiquidity warning for VOO.

### HOOD — HOLD 5 — DO NOT ADD
- Weight ~5.7%, within 15% cap.
- Unrealized +8.72% from avg $101.50. Today –2.36% on Bitcoin drop after Iran news.
- **Momentum trim (HOUR EXPLICITLY AUTHORIZES):** SELL 2 shares if price drops below $105.00 with limit $104.50. Rationale: lock in profits on momentum breakdown; crypto sensitivity to geopolitical risk.
- Do NOT add HOOD today. Hourly does NOT authorize new HOOD buys this cycle.
- **Anti-churn:** HOOD shares were bought June 30. Any sell today is NOT a daytrade.

### GOOG — DO NOT BUY — WATCH ONLY
- Not held. Hourly does NOT authorize a buy this cycle.
- Potential add candidate if Iran risk stabilizes and price dips to $355–$358.
- Re-entry requires explicit hourly authorization.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Not held. Weak 1M (–2.97%). No clear catalyst.
- Re-entry deferred to future hourly authorization.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### SOXX / RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, or thin liquidity.
- SOXX down –13.25% 1W. Avoid catching falling knife without hourly authorization.
- RKLB sold Jul 6 at $93.25; now $81.62. Avoid.

## Hard Rules / No-Trade Conditions
- **No discretionary buys this cycle.** Gross exposure is 76.4%; within 70-80% neutral band. Blocker: "Iran ceasefire declared over by Trump; oil +7%. Waiting for tape stabilization before deploying above 80%."
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - QQQ: 1 share bought July 6. Selling 1 share is OK (FIFO from June 29). Selling 2+ shares creates a daytrade. Do NOT sell 2+ QQQ shares today.
  - HOOD shares bought June 30. Any sell today is NOT a daytrade.
  - AVGO shares bought June 29. Any sell today is NOT a daytrade.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately** unless the hourly note explicitly authorizes the protective stop and the price has breached the stop level in the todo. Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.

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
- **GOOG:** TradeCount ~13, Volume ~616 in latest 10-min bar. Limit orders only.
- **HOOD:** TradeCount ~16, Volume ~1,081. Acceptable but prefer limit orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.
- **VOO data glitch note:** Alpaca bar shows very low trades/vol. This is anomalous. VOO is among the most liquid ETFs globally. Do not treat VOO as illiquid.

## Today's Deployment Queue
1. **No new buys authorized** for this cycle. Exposure band is 70–80%; current 76.4%.
2. **Conditional add queue (requires explicit hourly authorization AND tape stabilization):**
   - GOOG 1 share if dip to $355–$358 with limit order.
   - HOOD 1–2 shares if crypto stabilizes and price holds $108+.
   - SOXX 1 share only if it reclaims $560 with volume.
3. **Blocker:** Iran ceasefire declared over by Trump; oil +7%. Waiting for tape stabilization before deploying above 80%.

## Expected Book Into Close (if no stops trigger)
- QQQ 6 (~44.1%), AVGO 3 (~12.2%), VOO 2 (~14.2%), HOOD 5 (~5.7%)
- Cash: ~$2,268 (~23.6%)
- Gross exposure: ~76.4%

## Next Hourly Preview — 13:35 PM ET (NOT AUTHORIZED YET)
- Reassess QQQ support ($700 / 50D MA).
- Monitor AVGO momentum post-Apple deal.
- Evaluate Iran headline impact on oil prices and broader tape.
- If stops trigger (QQQ < $700, AVGO < $370, HOOD < $105), execute authorized sells and evaluate redeployment in next hourly.
