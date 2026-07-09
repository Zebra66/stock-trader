# Tactical Todo — Updated 2026-07-09 19:35Z (Thursday 3:35 PM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market open until 20:00Z (~25m).*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, AVGO 3, HOOD 5, VOO 2, SOXX 1
- **Account equity / cash / buying power:** $9,755.96 / $1,670.51 / $28,893.78
- **Gross long exposure:** 82.9% | **Net exposure:** 82.9% | **Cash:** 17.1%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders (GTC):** NVDA 1 share limit $198.50 (buy); HOOD 2 shares limit $114.50 (buy)
- **Market:** OPEN until 20:00Z. Next session: Fri Jul 10 9:30 AM ET.

## GTC Order Note — IMPORTANT
Both NVDA and HOOD limit buy orders were converted from day to GTC this cycle and will remain active for tomorrow's session. **Do NOT place duplicate orders.** Verify with `get-orders --status open` before any new order submission.

## Position Instructions — Thu Jul 9 (:40 and :50 Tactical Runs) & Fri Jul 10

### QQQ — HOLD 6 — NO SELLS OR ADDS AUTHORIZED
- Weight ~44.4%, within 45% cap. Adding 1 share would breach cap.
- Unrealized +0.85% from avg $716.47. Today +1.56%.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $700.00 with limit $699.50. Rationale: trim core on breakdown, keep 5 shares as anchor.
- Do NOT sell the remaining 5 shares unless hourly note explicitly authorizes.

### AVGO — HOLD 3 — NO ADDS AUTHORIZED — DO NOT SELL TODAY
- Position avg $371.95. Current price $401.36 (unrealized +7.91%). Today +3.26%.
- **ANTI-CHURN:** These 3 shares were bought on 2026-06-29. They are NOT same-day buys. However, DO NOT sell AVGO today unless stop is breached.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL all 3 AVGO shares if price drops below $385.00 with limit $384.50. Rationale: protect +7.91% unrealized gains.
- **Concentration blocker:** Adding 1 share would cost ~$401, pushing AVGO to ~$1,604 = 16.4% of equity, breaching 15% single-stock cap. NO ADDS AUTHORIZED.

### HOOD — HOLD 5 — DO NOT SELL TODAY — GTC ADD AUTHORIZED
- Position avg $101.50. Current price $115.46 (unrealized +13.75%). Today +1.70%.
- Best performer in book. Trump/crypto exchange momentum intact.
- **GTC add (HOUR EXPLICITLY AUTHORIZES):** BUY 2 shares at limit $114.50 if the price drops to $114.50 or below. Order is already active on the book. Do NOT place a duplicate. Do NOT chase at market.
- **If the GTC order fills today, DO NOT sell HOOD today.** Anti-churn applies.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL all 5 HOOD shares if price drops below $105.00 with limit $104.50. Rationale: protect winner from deep drawdown.
- Do NOT sell HOOD for any other reason today.

### VOO — HOLD 2 — NO SELLS OR ADDS AUTHORIZED
- Weight ~14.2%, within 20% non-QQQ ETF cap.
- Unrealized +2.06% from avg $676.46. Today +0.75%.
- **Concentration blocker:** Adding 1 share would cost ~$690, pushing VOO to ~$2,071 = 21.2% of equity, breaching 20% non-QQQ ETF cap. NO ADDS AUTHORIZED.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL all 2 VOO shares if price drops below $670.00 with limit $669.50. Rationale: protect anchor on broad-market breakdown.

### SOXX — HOLD 1 — DO NOT SELL TODAY
- Position avg $589.47. Current price $581.96 (unrealized -1.27%). Today +3.55%.
- **Status:** Limit buy filled today at $589.47 (10:51 AM ET).
- **Anti-churn:** Bought today. DO NOT sell SOXX today under any circumstances.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES for future sessions):** SELL if price drops below $540.00 with limit $539.50.

### NVDA — GTC ADD AUTHORIZED — LIMIT BUY ONLY
- Current price ~$203.73, down slightly today (-0.11% 1W). Lagging semis; rotation away from NVDA into custom silicon/ETF possible.
- **GTC order placed (HOUR EXPLICITLY AUTHORIZES):** BUY 1 share at limit $198.50. Order is active on the book. Do NOT place a duplicate. Do NOT chase at market.
- **If the GTC order fills today, DO NOT sell NVDA today.** Anti-churn applies.
- **Stop if filled:** SELL if price drops below $185.00 with limit $184.50 (future sessions only).
- NVDA — market orders prohibited; limit buy only.

### GOOG — DO NOT BUY — DO NOT RE-BUY
- Fully exited July 8 at $348.97. Realized loss ~$7.80. Today at $355.37.
- **24-HOUR COOLDOWN:** Do NOT buy GOOG within 24 hours of July 8 10:23 AM ET sale (i.e., not before July 9 10:23 AM ET — this has passed, but hourly still bans re-entry).
- **Earnings risk:** GOOG reports ~Jul 23. Q2 bill risk. Hourly explicitly bans re-entry until post-earnings or fresh hourly authorization.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB — DO NOT BUY
- Space sector damaged. Sold July 6 at $93.25, now $83.32. No re-entry planned.

### QTUM / SHLD / EIS / ARKX / GLD — DO NOT BUY
- Thin liquidity, weak relative trends, parabolic chase risk, or no clear catalyst.

## Hard Rules / No-Trade Conditions
- **No discretionary sells today** except stop-loss breaches explicitly authorized above.
- **No same-day round trips.** SOXX bought today — DO NOT sell SOXX today. NVDA / HOOD GTC orders: if they fill today, DO NOT sell those symbols today.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases only on lines where the symbol should truly be banned. For conditional buys, keep the ticker off lines containing those phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **If open orders exist from prior cycle, do NOT place duplicate orders.** Verify with `get-orders --status open`.
- **GTC order discipline:** GTC orders stay active across sessions. Before placing any new buy order, verify no existing GTC order for that symbol is already on the book.

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
1. **NVDA:** GTC limit buy 1 share at $198.50 — order active. Monitor for fill.
2. **HOOD:** GTC limit buy 2 shares at $114.50 — order active. Monitor for fill.
3. **No other buys authorized** for this cycle.

## Expected Book After Fills
- QQQ 6 (~44.4%), AVGO 3 (~12.3%), HOOD 5–7 (~5.9–8.3%), VOO 2 (~14.2%), SOXX 1 (~6.0%), NVDA 0–1 (~0–2.1%)
- Cash: ~$1,243–$1,472 (~12.7–15.1%)
- Gross exposure: ~85.0–87.4%

## Next Hourly Preview — Fri Jul 10 9:35 AM ET (13:35Z)
- Monitor NVDA and HOOD GTC fill status overnight and at open.
- Reassess limit levels if market gaps significantly. If NVDA opens above $210 or HOOD opens above $118, consider adjusting limits or canceling.
- Review AVGO momentum if it continues to run hard.
- If either GTC order fills, update todo.md to reflect the new position and anti-churn rules for that symbol.
- If no fills by Friday close, consider whether to keep GTC into the weekend or cancel and re-evaluate Monday.
