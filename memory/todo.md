# Tactical Todo — Updated 2026-07-09 14:20Z (Thursday 10:20 AM ET)
*HARD_LOCK LIFTED. Event detector: MAJOR (SOXX/SMH). GOOG stop executed. No open orders. Execute authorized orders only.*

<!-- Autonomous override applied at 2026-07-09T14:20Z due to MAJOR event on SOXX/SMH -->

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, AVGO 3, HOOD 5, VOO 2 (GOOG exited)
- **Account equity / cash / buying power:** ~$9,677 / ~$2,260 / ~$29,807 (margin)
- **Gross long exposure:** ~76.6% | **Net exposure:** ~76.6% | **Cash:** ~23.4%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET. Next tactical: 9:40, 9:50, 10:00, 10:10…

## Position Instructions — Thu Jul 9 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT ADD
- Weight ~44.4%, near 45% cap. Adding 1 share would breach cap.
- Unrealized +0.34% from avg $716.47. Today +1.16%. 1W –0.76%.
- Core liquid growth. 50D support at ~$700 held firmly through melt-up.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $700.00 with limit $699.50. Rationale: protect capital on breakdown below 50D support and round number.
- **Anti-churn / PDT:** QQQ 1 share bought July 6 at $721.94. Selling 1 share uses FIFO from June 29 lot ($715.38) = NOT a daytrade. Do NOT sell 2+ QQQ shares today.
- Do NOT sell QQQ for any other reason today unless a MAJOR/CRITICAL event detector flag on QQQ explicitly justifies it.

### AVGO — HOLD 3 — DO NOT ADD
- Weight ~12.4%, within 15% cap. Adding 1 share would breach ~16.2% cap (code-rejected).
- Unrealized +8.04% from avg $371.95. Today +3.66% on continued Apple-deal momentum.
- **Profit stop (HOUR EXPLICITLY AUTHORIZES — RAISED):** SELL all 3 shares if price drops below $385.00 with limit $384.50. Rationale: protect Apple-deal gains if chip rally reverses (Reuters warning Jul 9). Still locks in ~$39 profit vs avg $371.95.
- Do NOT add AVGO today.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.1%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~21.3% cap.
- Broad-market anchor. No action required.
- **Note:** Alpaca bar shows anomalously low trade count — this is a data glitch. VOO is among the most liquid ETFs globally. Ignore illiquidity warning for VOO.

### HOOD — HOLD 5 — CONDITIONAL ADD 1 ON PULLBACK
- Weight ~5.8%, within 15% cap.
- Unrealized +11.58% from avg $101.50. Today flat (–0.09%).
- **Conditional add (HOUR EXPLICITLY AUTHORIZES):** BUY 1 share if price drops to $112.50 or lower with limit $112.50. Rationale: add to momentum name on pullback, not chase. Cost ~$112.50. Would take weight to ~7.0%.
- **Momentum trim (HOUR EXPLICITLY AUTHORIZES):** SELL 2 shares if price drops below $105.00 with limit $104.50. Rationale: lock in profits on momentum breakdown.
- Do NOT add HOOD above $112.50 today. If price never reaches $112.50, no action.
- **Anti-churn:** HOOD shares bought June 30. Any sell today is NOT a daytrade.

### GOOG — EXITED 1 — DO NOT RE-BUY
- **Stop executed:** SOLD 1 share at limit ~$348.90 on MAJOR event breach of $350.00 stop. Realized loss ~$7.85 vs avg $356.77.
- **DO NOT RE-BUY GOOG.** Q2 bill uncertainty (Seeking Alpha Jul 8) ahead of Jul 23 earnings creates asymmetric downside risk. No re-entry until post-earnings or charge is quantified and priced in. 24-hour cooldown also applies.
- **Anti-churn:** Jul 8 buy, Jul 9 sell. New session sale permitted. No same-day round trip.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Not held. $203.25, down –0.43% today. Still below $210 reclaim level.
- Michael Burry betting against NVDA/Tesla — bearish counter-signal.
- Re-entry deferred to future hourly authorization. Monitor $210 reclaim with volume > 5,000 and TradeCount > 40, and holds for 30+ minutes.

### SOXX — DO NOT BUY
- Up +5.37% today on melt-up. Reuters warns chip rally flashing warning signs.
- Avoid chasing gap-up. Re-entry deferred until pullback with volume confirmation.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, or thin liquidity.
- RKLB sold Jul 6 at $93.25; now $84.90. Avoid.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - QQQ: 1 share bought July 6. Selling 1 share is OK (FIFO from June 29). Selling 2+ shares creates a daytrade. Do NOT sell 2+ QQQ shares today.
  - HOOD shares bought June 30. Any sell today is NOT a daytrade.
  - AVGO shares bought June 29. Any sell today is NOT a daytrade.
  - GOOG: bought July 8, sold July 9. Anti-churn expired with new session. Sale was permitted.
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
- **GOOG:** TradeCount ~35, Volume ~2,142 in latest 10-min bar. Limit orders only.
- **HOOD:** TradeCount ~25, Volume ~1,988. Limit orders preferred for large moves.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.
- **VOO data glitch note:** Alpaca bar shows very low trades/vol. This is anomalous. VOO is among the most liquid ETFs globally. Do not treat VOO as illiquid.

## Thursday's Deployment Queue
1. **HOOD 1 share** at limit $112.50 if price drops to that level. **ONLY add on pullback; do not chase.**
2. **GOOG — DO NOT ADD.** Q2 bill uncertainty into Jul 23 earnings.
3. **NVDA — DO NOT ADD.** Below $210 reclaim.
4. **SOXX — DO NOT ADD.** Reuters chip rally warning; avoid chasing +5.37% gap.
5. **Cash reserve target:** Maintain at least $1,400 cash after any fill. Do not deploy below $1,400 cash unless hourly note explicitly authorizes.

## Expected Book Into Close (if no stops trigger and no fills)
- QQQ 6 (~44.4%), AVGO 3 (~12.4%), VOO 2 (~14.1%), HOOD 5 (~5.8%)
- Cash: ~$2,260 (~23.4%)
- Gross exposure: ~76.6%
- **Open orders:** NONE

## Current Hourly Window — Thu Jul 9 9:35 AM ET
- **Event override LIFTED.** Event detector downgraded to NONE. Fresh buys permitted per todo instructions.
- Reassess GOOG price action; protective stop at $350 is active. Do NOT add GOOG.
- Monitor AVGO momentum post-Apple deal. Stop raised to $385.
- Monitor QQQ support ($700 / 50D MA). Currently $718.94, well above stop.
- Evaluate HOOD strength; add 1 share only on pullback to $112.50 or lower.
- If stops trigger (QQQ < $700, AVGO < $385, HOOD < $105, GOOG < $350), execute authorized sells.
