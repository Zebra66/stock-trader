# Tactical Todo — Updated 2026-06-05 19:35Z (Friday 3:35 PM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only.*

## Current State
- **Regime:** defensive (30–50% band, currently at ~42.3%)
- **Live book:** QQQ 5, VOO 1. NVDA 0 (sold). SOXX 0, AVGO 0, GOOG 0.
- **VOO stop executed:** Sold 1 VOO @ $679.66 (market) at 18:50Z after price breached $680.00.
- **Account equity / cash / buying power:** ~$9,970 / ~$5,750 / ~$31,441
- **Gross long exposure:** ~42.3% | **Net exposure:** ~42.3% | **Cash:** ~57.7%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET. ~25m to close. Next hourly: Monday June 8, 13:35Z (9:35 AM ET).
- **Macro context:** May jobs report (+172K, unemployment 4.3%) came in strong at 8:30 AM ET. Headlines confirm hawkish Fed fears. Tech/growth selling off. GOOG cloud layoffs reported. NVDA "Cisco bubble warning" headline. Nasdaq on pace for worst day since March. Rotation out of tech/AI semis into blue chips is the dominant theme.

## Position Instructions — Fri Jun 5 (:40, :50 Tactical Runs — FINAL RUNS OF WEEK)

### QQQ — HOLD 5 — DO NOT ADD — DO NOT SELL TODAY
- Weight ~35.5%, within 45% cap.
- Intraday ~–4.40%. Core liquid growth. Prior defensive stop $720.00 triggered and executed at 16:11Z.
- **NO new intraday stop today.** Hourly explicitly does NOT authorize a QQQ sell today. Rationale: avoid Friday close whipsaw in a risk-off tape. Core position still profitable (+0.97% unrealized).
- Do NOT add QQQ today. Below target allocation; hourly will reassess Monday.

### VOO — HOLD 1 — DO NOT ADD — DO NOT SELL TODAY
- Weight ~6.8%, within 20% non-QQQ ETF cap.
- Broad-market anchor already trimmed from 2 to 1 share on breakdown. Defensive stop executed at 18:50Z.
- **NO VOO stop today.** Hourly explicitly does NOT authorize a VOO sell today. Rationale: remaining 1 share is small; let it ride into weekend.
- Do NOT add VOO today. 2 shares would breach ~20.5% cap at current prices.

### NVDA — DO NOT BUY — DO NOT RE-BUY TODAY
- STOPPED OUT at 15:38Z. Sold 2 @ $207.80 limit.
- 24-hour cooldown ACTIVE until ~15:38Z Monday June 8.
- Even after cooldown expiry, re-entry requires EXPLICIT Monday hourly authorization.
- Do NOT buy NVDA today under any circumstances.

### AVGO — DO NOT BUY — DO NOT RE-BUY TODAY
- Fully exited June 4 at $405.16. 24-hour cooldown EXPIRED at ~13:45Z today (June 5).
- Even after cooldown expiry, hourly explicitly does NOT authorize re-entry today.
- Post-earnings freefall to ~$389.66. Hawkish jobs report adds macro headwind. Too early to catch knife.
- Defer re-entry evaluation to Monday June 8 hourly.

### SOXX — DO NOT BUY — DO NOT RE-BUY TODAY
- Fully exited June 4 (last fill ~15:19Z). 24-hour cooldown EXPIRED at ~15:19Z today (June 5).
- Even after cooldown expiry, hourly explicitly does NOT authorize re-entry today.
- Sector down ~9% today. Wait for stabilization.
- Defer re-entry evaluation to Monday June 8 hourly.

### GOOG — DO NOT BUY
- Support $375–$380 broken. Price ~$361.95. Cloud division layoffs reported (negative catalyst).
- No re-entry until it reclaims $375 with volume and holds for at least 30 minutes.
- Do NOT buy GOOG today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Exception: None. Hourly explicitly does NOT authorize buys for any of these today.

## Hard Rules / No-Trade Conditions
- **No discretionary buys this cycle.** Gross exposure is 42.3%; market is in risk-off rotation post-jobs report. No add candidate meets quality threshold today.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **Anti-churn critical:** Adding to a position that was bought the same session is a same-day round trip and is prohibited.
- **STOP-LOSS EXECUTION RULE:** When a stop is breached, you MUST use either (a) the EXACT limit price specified in the hourly note, or (b) a market order. You may NOT place a limit sell ABOVE the current market price on a stopped position. Doing so reserves shares and blocks the exit.

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
- **VOO:** TradeCount 11, Volume 198 at 19:34Z — thin. Use limit orders only.
- **SOXX:** Thin relative to large-cap ETFs. Limit orders only.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Expected Book Into Close
- QQQ 5 (~35.5%), VOO 1 (~6.8%)
- Cash: ~$5,750 (~57.7%)
- Gross exposure: ~42.3%

## Next Hourly Preview — Monday June 8, 13:35Z (9:35 AM ET)
- Reassess QQQ 5 and VOO 1 after weekend news.
- Evaluate whether semi-sector weakness has stabilized.
- Review NVDA 24h cooldown status (expires ~15:38Z Mon).
- Deploy cash if tape stabilizes and high-probability setup emerges.
- Monday deployment queue (requires explicit hourly authorization):
  1. QQQ if it reclaims $720 with volume.
  2. VOO if it stabilizes above $680 with broad-market breadth improvement.
  3. NVDA only after 24h cooldown expires AND if it reclaims $210 with volume.
  4. SOXX if it stabilizes above $550 with sector breadth improvement.
  5. AVGO if it finds support above $385 and stops falling.
  6. GOOG only if it reclaims $375 with volume.
