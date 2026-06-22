# Tactical Todo — Updated 2026-06-22 13:35Z (Monday 9:35 AM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market OPEN until 16:00 ET.*
<!-- Autonomous override applied at 2026-06-22 13:40Z due to CRITICAL event -->
<!-- Event detector: SOXX +1.80% CRITICAL, GOOG -2.94% MAJOR, XLK +1.20% MAJOR, SMH +1.27% MAJOR -->
<!-- No stops breached. No trades executed. All 6 positions held. -->

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band)
- **HARD_LOCK:** LIFTED — normal execution resumes.
- **Live book:** QQQ 5 ($3,707.03), VOO 2 ($1,379.34), AVGO 2 ($808.13), SOXX 1 ($652.31), NVDA 1 ($213.77), GOOG 2 ($707.68)
- **Account equity / cash / buying power:** $9,865.36 / $2,397.10 / $30,499.53
- **Gross long exposure:** ~75.7% | **Net exposure:** ~75.7% | **Cash:** ~24.3%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** NONE
- **24-hour cooldowns:** None active. All positions held overnight from Jun 16–17.
- **Market:** OPEN. SPY +0.37%, QQQ +0.46% intraday.
- **Event detector:** NONE (priorTimestamp null bug persists).
- **Warning:** AVGO ex-dividend today ($0.65/share). GOOG negative headlines on AI talent exodus.

## Position Instructions — Monday Jun 22 (:40, :50 Tactical Runs)

### QQQ — HOLD 5 — DO NOT SELL OR ADD
- Weight ~37.6%, within 45% cap. Adding 1 share would breach ~45.1% cap.
- Unrealized +1.26% from avg $732.164. Current $741.405. Intraday +0.11%.
- **Stop loss:** If QQQ falls below $730.00, **SELL all QQQ shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL QQQ if stop breached.
- **Do NOT sell QQQ today** except if stop is breached.
- **Do NOT add QQQ** — already at target weight near 35–40% target band.
- **Target:** $760.00.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.0%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~20.9% cap.
- Broad-market anchor. In profit (+1.62% unrealized).
- **Stop loss:** If VOO falls below $680.00, **SELL all VOO shares at market** on next tactical run.
- **Do NOT sell VOO today** except if stop is breached.
- **Do NOT add VOO** — near cap.
- **Target:** $700.00.

### AVGO — HOLD 2 — DO NOT ADD — TIGHTENED STOP
- Position avg $387.885. Current $404.065 (unrealized +4.17%). Intraday –1.77% on ex-dividend ($0.65/share) + Google-MediaTek TPU v9 headline risk.
- J.P. Morgan defending AVGO against Google-rumor threats. TPU v9 is 2028-dated; current business intact.
- **Stop loss:** If AVGO falls below $390.00, **SELL all AVGO shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL AVGO if stop breached.
- **Do NOT sell AVGO today** unless stop is breached.
- **Do NOT add AVGO** — headline risk demands caution; wait for stabilization.
- **Target:** $425.00.

### SOXX — HOLD 1 — CONDITIONAL ADD ON PULLBACK
- Position avg $619.25. Current $652.31 (unrealized +5.34%). Intraday +2.01%.
- Strongest performer. Chip ETF thesis intact. BofA +22% upside call on megacap chip.
- **Stop loss:** If SOXX falls below $620.00, **SELL all SOXX shares at market** on next tactical run.
- **Do NOT sell SOXX today** except if stop is breached.
- **Conditional add:** BUY 1 share if SOXX pulls back to $640.00 or below with limit $639.50. Rationale: add to winner on dip, not chase. If triggered, weight becomes ~12.6% (within 20% cap).
- **Illiquidity warning:** Use limit orders only. Do not place market orders.
- **Target:** $670.00.

### GOOG — HOLD 2 — DO NOT ADD — DO NOT AVERAGE DOWN
- Position avg $369.28. Current $353.84 (unrealized –4.18%). Intraday –3.71%.
- Only underwater position. AI talent exodus headlines. Support $350–$355 being tested.
- **Stop loss:** If GOOG falls below $350.00, **SELL all GOOG shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL GOOG if stop breached.
- **Do NOT sell GOOG today** except if stop is breached.
- **Do NOT add GOOG** — underwater; never average down.
- **Target:** $385.00.

### NVDA — HOLD 1 — DO NOT ADD
- Position avg $208.47. Current $213.7664 (unrealized +2.54%). Intraday +1.46%.
- Chip rotation still favors SOXX/AVGO over NVDA. Small position.
- **Stop loss:** If NVDA falls below $200.00, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT sell NVDA today** except if stop is breached.
- **Do NOT add NVDA** — not at +1R yet.
- **Target:** $225.00.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX — DO NOT BUY
- No edge, weak relative trends, extended, or thin liquidity.
- Exception: HOOD +1.34% today but +44.67% 1M — extremely extended. No chase.

## Hard Rules / No-Trade Conditions
- **No discretionary buys this cycle.** Gross exposure is 75.7%; adding shares pushes toward 82% but headline risk for GOOG/AVGO makes adds low-conviction.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - All current positions were bought Jun 16–17 (>24h ago). Same-day sell only if stop breached.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **Never average down.** Do not add to any position that is underwater from your average entry.
- **Limit orders only for SOXX.** No market orders for thin symbols.

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
1. **No fresh capital deployment authorized this cycle.** Market mixed; negative headlines for GOOG and AVGO.
2. **Conditional add queue (requires explicit stop/pulback trigger):**
   - SOXX if pullback to $640 or below (limit $639.50).
   - NVDA if pullback to $208 or below (limit $207.50) — but only if chip rotation broadens.
   - QQQ add NOT authorized (would breach 45% cap).
   - VOO add NOT authorized (would breach 20% cap).
3. **All hourly directives for this cycle are complete. Hold positions.**

## Current Book
- QQQ 5 (~37.6%), VOO 2 (~14.0%), AVGO 2 (~8.2%), SOXX 1 (~6.6%), NVDA 1 (~2.2%), GOOG 2 (~7.2%)
- Cash: ~$2,397 (~24.3%)
- Gross exposure: ~75.7%

## Next Hourly Preview — 14:35Z (10:35 AM ET)
- Review whether GOOG stabilizes above $350 or breaks down.
- Monitor AVGO price action post-ex-dividend. Does JPM defense stabilize the stock above $390?
- Evaluate SOXX momentum. If it holds above $650, maintain conditional add on pullback.
- If any position hits stop, execute protective sell immediately.
- With 0/3 daytrades used, protective exits are fully authorized.
