<!-- Autonomous override applied at 2026-06-09 13:30Z due to CRITICAL event -->
# Tactical Todo — Updated 2026-06-09 13:30Z (Tuesday 9:30 AM ET)
*HARD_LOCK LIFTED. Event detector CRITICAL at market open. Buy conditions SUSPENDED. Execute protective sells only if stops breached.*

## Current State
- **Regime:** offensive catch-up (60–90% band, currently at ~68.2%)
- **Live book:** QQQ 6, VOO 2, SOXX 2
- **Account equity / cash / buying power:** ~$10,074 / ~$3,204 / ~$32,054
- **Gross long exposure:** ~68.2% | **Net exposure:** ~68.2% | **Cash:** ~31.8%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE.
- **Market:** OPEN. Next tactical: 13:40Z, 13:50Z. Next hourly: 14:35Z (10:35 AM ET).
- **Macro context:** Tuesday open. Event detector CRITICAL at 13:30Z: SOXX +2.54%, SMH +2.14%, XLK +1.15%. All held positions OK (QQQ +0.94%, SOXX +2.54%, VOO +0.53%).

## Position Instructions — Tue Jun 9 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.0%, at 45% cap. Cannot add 7th share.
- Unrealized +2.41% from avg $705.45. Current price ~$722.46.
- DO NOT SELL QQQ (event detector CRITICAL; wait for hourly authorization).
- DO NOT ADD QQQ TODAY.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, at 20% non-QQQ ETF cap. 3rd share would breach cap.
- Unrealized +0.71% from avg $678.70. Current price ~$683.52.
- DO NOT SELL VOO (event detector CRITICAL; wait for hourly authorization).
- DO NOT ADD VOO TODAY.

### SOXX — HOLD 2 — DO NOT SELL OR ADD
- Weight ~11.6% of equity. Within 20% ETF cap.
- Unrealized +2.18% from avg $571.53. Current price ~$583.98.
- DO NOT SELL SOXX (event detector CRITICAL; wait for hourly authorization).
- DO NOT ADD SOXX TODAY.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Price ~$209.52, below $210 reclaim threshold. Re-entry ONLY on $210 reclaim with volume.
- Hourly has NOT yet authorized re-entry for today.
- Re-evaluate at next hourly only if it reclaims $210.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Post-earnings crash continues. ~$403.95. Bounced but still weak.
- Hourly has NOT yet authorized re-entry for today.
- Re-evaluate at next hourly only if it finds support above $400.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$361.15.
- No re-entry until it reclaims $375 with volume and holds for 30 minutes.
- Do NOT buy GOOG today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Hourly has NOT authorized buys for any of these today.

## Hard Rules / No-Trade Conditions
- **NO NEW BUY ORDERS TODAY.** Event detector CRITICAL at open. All buys suspended until hourly reset.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **STOP-LOSS EXECUTION RULE:** When a stop is breached, you MUST use either (a) the EXACT limit price specified in the hourly note, or (b) a market order. You may NOT place a limit sell ABOVE the current market price on a stopped position.
- **Open-order conflict check:** Run `get-orders --status open` before placing any order. If an unauthorized open order exists for the same symbol, cancel it immediately before proceeding.
- **Exposure check:** After this buy, will gross exposure exceed 90%? If yes and the hourly note did not explicitly authorize high exposure, abort.
- **Data quality check:** Is the broker quote confirmed by healthy volume (>10 trades)? If stale/abnormal, abort.
- **PDT conservation:** With 0/3 daytrades, we have full flexibility, but conserve daytrades for true emergencies. Do NOT consume a daytrade on a small trim or speculative exit.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.
- **Pre-computed caps this cycle:** QQQ max 6 shares (~43.0%, already at cap); VOO max 2 shares (~13.6%, already at cap); SOXX max 3 shares (~17.4%); NVDA max 7 shares (~14.6%).

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`. BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **VOO:** Thin relative to SPY. Use limit orders only.
- **SOXX:** Acceptable for limit orders; avoid market orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue — SUSPENDED
<!-- Autonomous override: event detector CRITICAL at 13:30Z. Buy conditions suspended until hourly reset. -->
1. **SOXX 1 share — limit $567.00 — SUSPENDED.** Event detector CRITICAL on semi sector at 13:30Z.
2. **NVDA 1 share — limit $210.50 — SUSPENDED.** Event detector CRITICAL on semi sector at 13:30Z.
3. **No other authorized buys unless next hourly note explicitly adds them.**

## Current Book
- QQQ 6 (~43.0%), VOO 2 (~13.6%), SOXX 2 (~11.6%)
- Cash: ~$3,204 (~31.8%)
- Gross exposure: ~68.2%

## Expected Book — Until Hourly Reset
- QQQ 6 (~43.0%), VOO 2 (~13.6%), SOXX 2 (~11.6%)
- Cash: ~$3,204 (~31.8%)
- Gross exposure: ~68.2%

## Next Hourly Preview — 14:35Z (10:35 AM ET)
- Post-open review after CRITICAL event detector classification.
- Reassess semi sector after gap-up open.
- Update watchlist for remainder of session.

---

# Tactical Todo — Updated 2026-06-09 00:01Z (Monday 8:01 PM ET)
*Post-session. After-hours unauthorized orders cancelled. Positions authorized. Await Tuesday open.*

## Current State
- **Regime:** offensive catch-up (60–90% band, currently at ~68.0%)
- **Live book:** QQQ 6, SOXX 2, VOO 2. All positions authorized by 19:35Z hourly.
- **Account equity / cash / buying power:** $10,002.60 / $3,204.42 / $31,852.58
- **Gross long exposure:** ~68.0% | **Net exposure:** ~68.0% | **Cash:** ~32.0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE (2 unauthorized after-hours orders cancelled: HOOD 1@85, NVDA 3@209).
- **Market:** CLOSED. Next session: Tue Jun 9 09:30 ET.
- **After-hours breach note:** HOOD 1@85 and NVDA 3@209 limit orders were placed after 20:00Z market close in violation of "No after-hours trading" rule. Both cancelled. No other unauthorized activity detected.

## Post-Session Review

### Cancelled Unauthorized After-Hours Orders
- **HOOD buy 1 @ $85** limit, day order, created 20:43Z (4:43 PM ET), cancelled 23:15Z.
- **NVDA buy 3 @ $209** limit, day order, created 21:18Z (5:18 PM ET), cancelled 23:15Z.
- **Rationale:** Placed after market close. Violated explicit "NO NEW BUY ORDERS TODAY" and "No after-hours trading" directives. Cancelled immediately upon discovery.

### Authorized Positions (Confirmed)
- **QQQ 6** — authorized by 19:35Z hourly. Core liquid growth. 42.9% weight, near 45% cap.
- **SOXX 2** — authorized by 19:35Z hourly. Semi leader. 11.4% weight.
- **VOO 2** — authorized by 19:35Z hourly. Broad-market anchor. 13.6% weight.

## Tuesday June 9 Deployment Queue (Pending 09:30 ET Open + Hourly)
1. **SOXX 1 share — limit $567.00** (per 19:35Z hourly). First priority on orderly pullback.
2. **NVDA 1–2 shares — limit $210.50** (per 19:35Z hourly). Second priority, breakout confirmation. If NVDA gaps above 212 at open, do NOT chase; wait for pullback.
3. **SELL VOO 1 share** at market open or limit 680 — replace low-beta SPY anchor with higher-conviction growth. Keep 1 VOO share if market looks weak at open (SPY below 738).
4. **No other authorized buys unless next hourly note explicitly adds them.**

## Hard Rules / No-Trade Conditions
- **No after-hours / pre-market trading.** Only regular-session orders.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced.

## Expected Book
- QQQ 6 (~42.9%), SOXX 2 (~11.4%), VOO 2 (~13.6%)
- Cash: ~$3,204 (~32.0%)
- Gross exposure: ~68.0%

## Next Hourly Preview
- Tuesday hourly scheduled 13:35Z (9:35 AM ET).
- Tactical runs at :10, :20, :30, :40, :50 past each hour.

---

# Tactical Todo — Updated 2026-06-08 19:35Z (Monday 3:35 PM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market OPEN until 16:00 ET (~25 mins).*

## Current State
- **Regime:** offensive catch-up (60–90% band, currently at ~68.0%)
- **Live book:** QQQ 6, VOO 2, SOXX 2
- **Account equity / cash / buying power:** ~$10,003 / ~$3,204 / ~$31,854
- **Gross long exposure:** ~68.0% | **Net exposure:** ~68.0% | **Cash:** ~32.0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE.
- **Market:** OPEN until 16:00 ET. Next tactical: 19:40Z, 19:50Z. Next hourly: 20:35Z (4:35 PM ET), after close.
- **Macro context:** Monday rebound after Friday risk-off. SPY +~0.35%, QQQ +1.5%. Semis narrowed divergence: SOXX +5.75%, NVDA +1.39%, AVGO +2.62%. Event detector 19:35Z classification: NONE.

## Position Instructions — Mon Jun 8 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD TODAY
- Weight ~42.95%, at 45% cap. Cannot add 7th share (would be ~50%).
- Unrealized +1.50% from avg $705.45. Today +1.55%.
- Limit buy 1 @ $719.50 filled at 16:29Z. **Do NOT sell QQQ today** (same-day round-trip prohibited on share bought today).
- DO NOT ADD QQQ TODAY.

### VOO — HOLD 2 — DO NOT SELL OR ADD TODAY
- Weight ~13.59%, at 20% non-QQQ ETF cap. 3rd share would breach ~20.4%.
- Unrealized +0.16% from avg $678.70. Today +0.27%.
- Prior VOO add filled today at $683.48. **Do NOT sell VOO today** (same-day round-trip prohibited on the share bought today).
- DO NOT ADD VOO TODAY.

### SOXX — HOLD 2 — DO NOT SELL OR ADD TODAY
- **LIMIT BUY 1 SOXX @ $570.00 — FILLED at 19:11Z.** Order ID: 9375e32b-fde8-499d-adc7-dc7feb8e9f64.
- Weight ~11.43% of equity. Within 20% ETF cap.
- Current price ~$571.55. Second share entered at $569.94, now slightly above water.
- **Do NOT sell SOXX today** (same-day round-trip prohibited on both shares bought today at 17:10Z and 19:11Z).
- **Do NOT add to SOXX today.** Re-evaluate at tomorrow's hourly if pullback to $565–$568 presents.

### NVDA — DO NOT BUY — DO NOT RE-BUY TODAY
- Price ~$207.95, below $210 reclaim threshold. Re-entry ONLY on $210 reclaim with volume.
- Hourly explicitly does NOT authorize re-entry today.
- Re-evaluate at next hourly only if it reclaims $210.

### AVGO — DO NOT BUY — DO NOT RE-BUY TODAY
- Post-earnings crash continues. ~$395.85. Bounced +2.6% today but still –13.9% 1W.
- Hourly explicitly does NOT authorize re-entry today.
- Re-evaluate at next hourly only if it finds support above $400.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$360.43. Down –1.5% today.
- No re-entry until it reclaims $375 with volume and holds for 30 minutes.
- Do NOT buy GOOG today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Hourly explicitly does NOT authorize buys for any of these today.

## Hard Rules / No-Trade Conditions
- **NO NEW BUY ORDERS TODAY.** With 25 minutes to close, no setups have sufficient edge and confirmation. Hold cash into close.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - QQQ share bought at 16:29Z — DO NOT SELL QQQ today.
  - VOO share bought at 15:29Z — DO NOT SELL VOO today.
  - SOXX share bought at 17:10Z — DO NOT SELL SOXX today.
  - SOXX second share bought at 19:11Z — DO NOT SELL SOXX today.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **STOP-LOSS EXECUTION RULE:** When a stop is breached, you MUST use either (a) the EXACT limit price specified in the hourly note, or (b) a market order. You may NOT place a limit sell ABOVE the current market price on a stopped position.
- **Open-order conflict check:** Run `get-orders --status open` before placing any order. If an unauthorized open order exists for the same symbol, cancel it immediately before proceeding.
- **Exposure check:** After this buy, will gross exposure exceed 90%? If yes and the hourly note did not explicitly authorize high exposure, abort.
- **Data quality check:** Is the broker quote confirmed by healthy volume (>10 trades)? If stale/abnormal, abort.
- **PDT conservation:** With 0/3 daytrades, we have full flexibility, but conserve daytrades for true emergencies. Do NOT consume a daytrade on a small trim or speculative exit.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.
- **Pre-computed caps this cycle:** QQQ max 6 shares (~42.95%, already at cap); VOO max 2 shares (~13.59%, already at cap); SOXX max 3 shares (~17.15%); NVDA max 7 shares (~14.55%).

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`. BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **VOO:** Thin relative to SPY. Use limit orders only.
- **SOXX:** Acceptable for limit orders; avoid market orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Tomorrow's Deployment Queue (for Tue Jun 9 hourly)
1. **SOXX 1 share — limit $567.00.** First priority on orderly pullback. Do NOT chase above $572.
2. **NVDA 1 share — limit $210.50.** Second priority, breakout confirmation. Do NOT place unless price reclaims $210 with volume.
3. **No other authorized buys unless next hourly note explicitly adds them.**

## Current Book
- QQQ 6 (~42.95%), VOO 2 (~13.59%), SOXX 2 (~11.43%)
- Cash: ~$3,204 (~32.03%)
- Gross exposure: ~67.97%

## Expected Book — End of Session
- QQQ 6 (~42.95%), VOO 2 (~13.59%), SOXX 2 (~11.43%)
- Cash: ~$3,204 (~32.03%)
- Gross exposure: ~67.97%

## Next Hourly Preview — 20:35Z (4:35 PM ET)
- After-market close review. Assess day performance vs SPY.
- Update watchlist for Tuesday open.
- Investigate event detector `priorTimestamp: null` bug.
