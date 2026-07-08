# Tactical Todo — Updated 2026-07-08 17:38Z (Wednesday 1:38 PM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market closes at 16:00 ET (~2.4 hours).*

## Current State
- **Regime:** offensive catch-up (80–85% band)
- **Live book:** QQQ 6, AVGO 3, HOOD 5, VOO 2
- **Account equity / cash / buying power:** ~$9,638 / ~$2,268 / ~$29,708 (margin)
- **Gross long exposure:** ~76.5% | **Net exposure:** ~76.5% | **Cash:** ~23.5%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET. Next tactical runs: 13:40, 13:50, 14:10, 14:20, 14:30, 14:40, 14:50 ET.

## Position Instructions — Wed Jul 8 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT ADD
- Weight ~44.2%, near 45% cap. Adding 1 share would breach cap (~51.6%).
- Unrealized –0.84% from avg $716.47. Today +0.20% (Yahoo). 1W –3.47%.
- Core liquid growth. 50D support at ~$700 held firmly on recovery from Iran headline.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $700.00 with limit $699.50. Rationale: protect capital on breakdown below 50D support and round number.
- **Anti-churn / PDT:** QQQ 1 share bought July 6 at $721.94. Selling 1 share uses FIFO from June 29 lot ($715.38) = NOT a daytrade. Do NOT sell 2+ QQQ shares today — the 2nd share would come from July 6 lot and count as a daytrade.
- Do NOT sell QQQ for any other reason today unless a MAJOR/CRITICAL event detector flag on QQQ explicitly justifies it.

### AVGO — HOLD 3 — DO NOT ADD
- Weight ~12.2%, within 15% cap. Adding 1 share would breach ~16.3% cap (code-rejected).
- Unrealized +5.59% from avg $371.95. Today +6.08% on Apple $30B+ chip deal.
- **Profit stop (HOUR EXPLICITLY AUTHORIZES):** SELL all 3 shares if price drops below $370.00 with limit $369.50. Rationale: protect Apple-deal gains if momentum reverses.
- Do NOT add AVGO today.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.2%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~21.3% cap.
- Broad-market anchor. No action required.
- **Note:** Alpaca bar shows anomalously low trade count — this is a data glitch. VOO is among the most liquid ETFs globally. Ignore illiquidity warning for VOO.

### HOOD — HOLD 5 — DO NOT ADD THIS CYCLE
- Weight ~5.8%, within 15% cap.
- Unrealized +10.17% from avg $101.50. Today –0.81% (recovered from morning –2.36% low).
- **Momentum trim (HOUR EXPLICITLY AUTHORIZES):** SELL 2 shares if price drops below $105.00 with limit $104.50. Rationale: lock in profits on momentum breakdown; crypto sensitivity to geopolitical risk.
- Do NOT add HOOD today. Hourly does NOT authorize new HOOD buys this cycle. Re-evaluation in next hourly.
- **Anti-churn:** HOOD shares were bought June 30. Any sell today is NOT a daytrade.

### GOOG — BUY 1 SHARE — LIMIT ORDER ONLY
- Not held. Hourly **EXPLICITLY AUTHORIZES** 1-share add.
- Rationale: high-quality AI/cloud name down on macro (Iran), not micro. 1Y +103%. Diversifies away from QQQ/semi concentration. Price at $356.93 (Alpaca) is within target dip zone.
- **Order:** BUY 1 share GOOG with limit price **$357.00** (day order, regular hours only). Do NOT use market order.
- **Illiquidity note:** GOOG TradeCount ~17, Volume ~803 in latest 10-min bar. Limit order mandatory.
- **Anti-churn:** If GOOG is bought today, do NOT sell it today under any circumstances.
- **Post-buy concentration check:** 1 share at $357 = 3.7% of equity. Well within 15% single-stock cap.
- **Post-buy exposure check:** Gross exposure will rise to ~80.2% ($7,727 / $9,638), within the 80–85% offensive-catch-up band.
- **Earnings:** Estimated Jul 23 (~15 days). No binary event in next 48 hours.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Not held. Up +3.39% today on BofA upgrade. 1M –0.73%.
- Re-entry deferred to future hourly authorization. Monitor $210 reclaim.

### SOXX / RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, or thin liquidity.
- SOXX reclaimed $560 but volume anemic (TradeCount 3). Avoid without volume confirmation.
- RKLB sold Jul 6 at $93.25; now $82.26. Avoid.

## Hard Rules / No-Trade Conditions
- **GOOG buy is the ONLY discretionary buy authorized** for this cycle. Execute only if price is at or below $357.00 with limit order. If price gaps above $358, defer and wait for next hourly.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - QQQ: 1 share bought July 6. Selling 1 share is OK (FIFO from June 29). Selling 2+ shares creates a daytrade. Do NOT sell 2+ QQQ shares today.
  - HOOD shares bought June 30. Any sell today is NOT a daytrade.
  - AVGO shares bought June 29. Any sell today is NOT a daytrade.
  - GOOG: if bought today, DO NOT sell today.
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
- **GOOG:** TradeCount ~17, Volume ~803 in latest 10-min bar. Limit orders only.
- **HOOD:** TradeCount ~22, Volume ~1,724. Acceptable but prefer limit orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.
- **VOO data glitch note:** Alpaca bar shows very low trades/vol. This is anomalous. VOO is among the most liquid ETFs globally. Do not treat VOO as illiquid.

## Today's Deployment Queue
1. **BUY 1 GOOG** at limit $357.00 — highest priority. Execute now if price ≤ $357.00.
2. **No other buys authorized** for this cycle.
3. **Conditional add queue (requires explicit hourly authorization):**
   - HOOD 1–2 shares if crypto stabilizes and price holds $112+ with volume.
   - NVDA 1 share if it reclaims $210 with volume and holds for 30+ minutes.
   - SOXX 1 share only if it reclaims $560 with TradeCount > 20 and volume > 1,000.
4. **Blocker removed:** Iran panic has faded; tape is orderly. Cash deployment authorized into GOOG.

## Expected Book Into Close (if no stops trigger and GOOG fills)
- QQQ 6 (~44.2%), AVGO 3 (~12.2%), VOO 2 (~14.2%), HOOD 5 (~5.8%), GOOG 1 (~3.7%)
- Cash: ~$1,911 (~19.8%)
- Gross exposure: ~80.2%

## Next Hourly Preview — 14:35 PM ET (NOT AUTHORIZED YET)
- Reassess GOOG fill and price action.
- Monitor QQQ support ($700 / 50D MA) — currently holding well at $710.
- Evaluate AVGO momentum post-Apple deal.
- Evaluate HOOD crypto stabilization for potential add.
- If stops trigger (QQQ < $700, AVGO < $370, HOOD < $105), execute authorized sells and evaluate redeployment in next hourly.
