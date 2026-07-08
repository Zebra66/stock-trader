# Tactical Todo — Updated 2026-07-08 19:35Z (Wednesday 3:35 PM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market closes at 16:00 ET (~25 minutes).*

## Current State
- **Regime:** offensive catch-up (80–85% band)
- **Live book:** QQQ 6, AVGO 3, HOOD 5, VOO 2, GOOG 1
- **Account equity / cash / buying power:** ~$9,634 / ~$1,911 / ~$29,268 (margin)
- **Gross long exposure:** ~80.2% | **Net exposure:** ~80.2% | **Cash:** ~19.8%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET. Final tactical runs today: 15:40, 15:50 ET.

## Position Instructions — Wed Jul 8 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT ADD
- Weight ~44.2%, near 45% cap. Adding 1 share would breach cap.
- Unrealized –0.95% from avg $716.47. Today flat (+0.05%). 1W –3.61%.
- Core liquid growth. 50D support at ~$700 held firmly.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $700.00 with limit $699.50. Rationale: protect capital on breakdown below 50D support and round number.
- **Anti-churn / PDT:** QQQ 1 share bought July 6 at $721.94. Selling 1 share uses FIFO from June 29 lot ($715.38) = NOT a daytrade. Do NOT sell 2+ QQQ shares today.
- Do NOT sell QQQ for any other reason today unless a MAJOR/CRITICAL event detector flag on QQQ explicitly justifies it.

### AVGO — HOLD 3 — DO NOT ADD
- Weight ~12.1%, within 15% cap. Adding 1 share would breach ~16.2% cap (code-rejected).
- Unrealized +4.74% from avg $371.95. Today +4.98% on Apple $30B+ chip deal.
- **Profit stop (HOUR EXPLICITLY AUTHORIZES):** SELL all 3 shares if price drops below $370.00 with limit $369.50. Rationale: protect Apple-deal gains if momentum reverses.
- Do NOT add AVGO today.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.2%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~21.3% cap.
- Broad-market anchor. No action required.
- **Note:** Alpaca bar shows anomalously low trade count — this is a data glitch. VOO is among the most liquid ETFs globally. Ignore illiquidity warning for VOO.

### HOOD — HOLD 5 — DO NOT ADD THIS CYCLE
- Weight ~5.9%, within 15% cap.
- Unrealized +12.42% from avg $101.50. Today +0.99% (recovered from morning –1.8% low).
- **Momentum trim (HOUR EXPLICITLY AUTHORIZES):** SELL 2 shares if price drops below $105.00 with limit $104.50. Rationale: lock in profits on momentum breakdown.
- Do NOT add HOOD today. Hourly does NOT authorize new HOOD buys this cycle. Re-evaluation in next hourly (tomorrow 9:35 AM ET).
- **Anti-churn:** HOOD shares bought June 30. Any sell today is NOT a daytrade.

### GOOG — HOLD 1 — DO NOT SELL TODAY — DO NOT ADD
- **Filled:** Order `dd4d999c` filled at ~$356.77 during 13:40–13:50 tactical window. 1 share now held; avg entry ~$356.77.
- Rationale: high-quality AI/cloud name down on macro (Iran), not micro. 1Y +102.50%. Diversifies away from QQQ/semi concentration.
- Unrealized –0.24% from avg ~$356.77. Current price $355.91. Nearly flat.
- **Anti-churn:** GOOG bought today; do NOT sell it today under any circumstances.
- **Concentration check:** 1 share at ~$356 = 3.7% of equity. Well within 15% single-stock cap.
- **GOOG protective stop (for TOMORROW only, NOT today):** If in tomorrow's session price drops below $350.00 with limit $349.50, evaluate SELL 1 share. Today: hold only.
- **Earnings:** Estimated Jul 23 (~15 days). No binary event in next 48 hours.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Not held. Up +3.92% today but price $204.65, still below $210 reclaim level.
- Michael Burry betting against NVDA/Tesla — bearish counter-signal.
- Re-entry deferred to future hourly authorization. Monitor $210 reclaim with volume > 5,000 and TradeCount > 40, and holds for 30+ minutes.

### SOXX / RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, or thin liquidity.
- SOXX reclaimed $560 but volume anemic (TradeCount 4, Volume 219). Avoid without volume confirmation.
- RKLB sold Jul 6 at $93.25; now $82.76. Avoid.

## Hard Rules / No-Trade Conditions
- **No discretionary buys authorized** for the remainder of today's session. Hold all positions into close.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - QQQ: 1 share bought July 6. Selling 1 share is OK (FIFO from June 29). Selling 2+ shares creates a daytrade. Do NOT sell 2+ QQQ shares today.
  - HOOD shares bought June 30. Any sell today is NOT a daytrade.
  - AVGO shares bought June 29. Any sell today is NOT a daytrade.
  - GOOG: bought today; DO NOT sell today.
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
- **GOOG:** TradeCount ~24, Volume ~500 in latest 10-min bar. Limit orders only.
- **HOOD:** TradeCount ~71, Volume ~8,348. Acceptable liquidity; limit orders preferred for large moves.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.
- **VOO data glitch note:** Alpaca bar shows very low trades/vol. This is anomalous. VOO is among the most liquid ETFs globally. Do not treat VOO as illiquid.

## Today's Deployment Queue
1. ~~BUY 1 GOOG at limit $357.00~~ — **FILLED at ~$356.77 during 13:40–13:50 window.**
2. **No other buys authorized** for remainder of today.
3. **Conditional add queue (requires explicit hourly authorization tomorrow):**
   - HOOD 1–2 shares if price holds $113+ with volume and crypto stable.
   - GOOG 1 share if price breaks above $360.00 with TradeCount > 20 and volume > 500.
   - NVDA 1 share if it reclaims $210 with volume > 5,000 and TradeCount > 40, and holds for 30+ minutes.
   - SOXX 1 share only if it reclaims $560 with TradeCount > 20 and volume > 1,000.
4. **Blocker:** Only 25 minutes to close. No new entries into the bell.

## Expected Book Into Close (if no stops trigger)
- QQQ 6 (~44.2%), AVGO 3 (~12.1%), VOO 2 (~14.2%), HOOD 5 (~5.9%), GOOG 1 (~3.7%)
- Cash: ~$1,911 (~19.8%)
- Gross exposure: ~80.2%
- **Open orders:** NONE

## Next Hourly Preview — Thu Jul 9 9:35 AM ET (NOT AUTHORIZED YET)
- Reassess GOOG price action and set protective stop if needed.
- Monitor QQQ support ($700 / 50D MA).
- Evaluate AVGO momentum post-Apple deal.
- Evaluate NVDA $210 reclaim and volume for potential add.
- Evaluate HOOD strength post-Trump Accounts launch; consider add if $113+ holds.
- If stops trigger (QQQ < $700, AVGO < $370, HOOD < $105), execute authorized sells and evaluate redeployment.
