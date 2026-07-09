# Tactical Todo — Updated 2026-07-09 15:37Z (Thursday 11:37 AM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market open until 16:00 ET (~4h 23m).*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, AVGO 3, HOOD 5, VOO 2, SOXX 1
- **Account equity / cash / buying power:** $9,749.34 / $1,670.51 / $29,073.77
- **Gross long exposure:** 82.9% | **Net exposure:** 82.9% | **Cash:** 17.1%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** HOOD 2 shares limit $114.50 (buy) — placed 14:48Z, still open
- **Market:** OPEN until 16:00 ET.

## Position Instructions — Thu Jul 9 (:50 Tactical Run, and next runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.4%, within 45% cap. Adding 1 share would breach cap.
- Unrealized +0.66% from avg $716.47. Today +1.38%.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $700.00 with limit $699.50. Rationale: trim core on breakdown, keep 5 shares as anchor.
- Do NOT sell the remaining 5 shares unless hourly note explicitly authorizes.

### AVGO — HOLD 3 — DO NOT ADD — DO NOT SELL TODAY
- Position avg $371.95. Current price $400.53 (unrealized +7.68%). Today +3.08%.
- **ANTI-CHURN:** These 3 shares were bought on 2026-06-29. They are NOT same-day buys. However, DO NOT sell AVGO today unless stop is breached.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL all 3 AVGO shares if price drops below $385.00 with limit $384.50. Rationale: protect +7.7% unrealized gains.
- **Concentration blocker:** Adding 1 share would cost ~$400, pushing AVGO to ~$1,602 = 16.4% of equity, breaching 15% single-stock cap. DO NOT ADD AVGO.

### HOOD — HOLD 5 — DO NOT SELL TODAY — CONDITIONAL ADD AUTHORIZED
- Position avg $101.50. Current price $116.28 (unrealized +14.60%). Today +2.39%.
- Best performer in book. Trump/crypto exchange momentum intact.
- **Conditional add (HOUR EXPLICITLY AUTHORIZES):** BUY 2 shares at limit $114.50 if the price drops to $114.50 or below. Rationale: add to winner on pullback, not chase. If price never hits $114.50, DO NOT buy.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL all 5 HOOD shares if price drops below $105.00 with limit $104.50. Rationale: protect winner from deep drawdown.
- Do NOT sell HOOD for any other reason today.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.1%, within 20% non-QQQ ETF cap.
- Unrealized +1.87% from avg $676.46. Today +0.56%.
- **Concentration blocker:** Adding 1 share would cost ~$689, pushing VOO to ~$2,067 = 21.2% of equity, breaching 20% non-QQQ ETF cap. DO NOT ADD VOO.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL all 2 VOO shares if price drops below $670.00 with limit $669.50. Rationale: protect anchor on broad-market breakdown.

### SOXX — HOLD 1 — DO NOT SELL TODAY
- Position avg $589.47. Current price $590.17 (unrealized +0.12%). Today +4.96%.
- **Status:** Limit buy filled today at $589.47 (10:51 AM ET).
- **Anti-churn:** Bought today. DO NOT sell SOXX today under any circumstances.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES for future sessions):** SELL if price drops below $540.00 with limit $539.50.

### NVDA — CONDITIONAL ADD AUTHORIZED — BUY ON PULLBACK ONLY
- Current price ~$201.27, down -1.29% today. Lagging semis; rotation away from NVDA into custom silicon/ETF possible.
- **Conditional add (HOUR EXPLICITLY AUTHORIZES):** BUY 1 share at limit $198.50 if price drops to $198.50 or below. Rationale: add AI chip leader on relative weakness, diversify chip exposure. Do NOT chase at market.
- Do NOT buy NVDA at market price.

### GOOG — DO NOT BUY — DO NOT RE-BUY
- Fully exited July 8 at $348.97. Realized loss ~$7.80. Today down -2.20% to $350.82.
- **24-HOUR COOLDOWN:** Do NOT buy GOOG within 24 hours of July 8 10:23 AM ET sale (i.e., not before July 9 10:23 AM ET — this has passed, but hourly still bans re-entry).
- **Earnings risk:** GOOG reports ~Jul 23. Q2 bill risk. Hourly explicitly bans re-entry until post-earnings or fresh hourly authorization.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB — DO NOT BUY
- Space sector damaged. Sold July 6 at $93.25, now ~$84.72. No re-entry planned.

### QTUM / SHLD / EIS / ARKX / GLD — DO NOT BUY
- Thin liquidity, weak relative trends, parabolic chase risk, or no clear catalyst.

## Hard Rules / No-Trade Conditions
- **No discretionary sells today** except stop-loss breaches explicitly authorized above.
- **No same-day round trips.** SOXX bought today — DO NOT sell SOXX today.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **If open orders exist from prior cycle, do NOT place duplicate orders.** Verify with `get-orders --status open`.

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

## Today's Deployment Queue
1. **NVDA:** BUY 1 share at limit $198.50 on pullback. Place limit order now.
2. **HOOD:** BUY 2 shares at limit $114.50 on pullback. Order already open.
3. **No other buys authorized** for this cycle.

## Expected Book After Fills
- QQQ 6 (~44.4%), AVGO 3 (~12.3%), HOOD 5–7 (~6.0–8.2%), VOO 2 (~14.1%), SOXX 1 (~6.1%), NVDA 0–1 (~0–2.0%)
- Cash: ~$1,243–$1,472 (~12.7–15.1%)
- Gross exposure: ~84.9–87.3%

## Next Hourly Preview — 12:35 PM ET
- Monitor NVDA and HOOD limit fill status.
- Reassess AVGO momentum if it continues to run hard.
- Verify event detector snapshot is persisting correctly (bug fixed this cycle).
- If no fills by 12:35, evaluate whether to adjust limit prices or stay patient.
