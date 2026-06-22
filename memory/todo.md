# Tactical Todo — Updated 2026-06-22 15:35Z (Monday 11:35 AM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market OPEN until 16:00 ET.*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band)
- **HARD_LOCK:** LIFTED — normal execution resumes.
- **Live book:** QQQ 5 ($3,683.10), VOO 2 ($1,372.80), AVGO 2 ($790.52), SOXX 1 ($648.69), NVDA 1 ($210.27)
- **Account equity / cash / buying power:** $9,801.20 / $3,095.62 / $31,158.10
- **Gross long exposure:** ~68.4% | **Net exposure:** ~68.4% | **Cash:** ~31.6%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** NONE
- **24-hour cooldowns:** GOOG (sold at 14:20Z, no re-buy until 2026-06-23 14:20Z)
- **Market:** OPEN. SPY –0.25%, QQQ –0.55% intraday.
- **Event detector:** NONE (classification: NONE, priorTimestamp working at 15:30:04Z).
- **Upcoming catalyst:** Micron earnings Wednesday June 24 (sector-wide binary event for semiconductors).
- **Warning:** AVGO ex-dividend today ($0.65/share). GOOG negative headlines on AI talent exodus + MediaTek chip partnership. HOOD $2B convertible notes offering.

## Position Instructions — Monday Jun 22 (:40, :50 Tactical Runs)

### QQQ — HOLD 5 — DO NOT SELL OR ADD
- Weight ~37.6%, within 45% cap. Adding 1 share would breach ~45.1% cap.
- Unrealized +0.61% from avg $732.164. Current $736.62. Intraday –0.55%.
- **Stop loss:** If QQQ falls below $730.00, **SELL all QQQ shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL QQQ if stop breached.
- **Do NOT sell QQQ today** except if stop is breached.
- **Do NOT add QQQ** — already at target weight near 35–40% target band.
- **Target:** $760.00.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.0%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~21.0% cap.
- Broad-market anchor. In profit (+1.13% unrealized).
- **Stop loss:** If VOO falls below $680.00, **SELL all VOO shares at market** on next tactical run.
- **Do NOT sell VOO today** except if stop is breached.
- **Do NOT add VOO** — near cap.
- **Target:** $700.00.

### AVGO — HOLD 2 — DO NOT ADD — TIGHTENED STOP
- Position avg $387.885. Current $395.26 (unrealized +1.90%). Intraday –3.90% on ex-dividend ($0.65/share) + Google-MediaTek TPU v9 headline risk.
- J.P. Morgan defending AVGO against Google-rumor threats (TradingView, 13:11 GMT today). TPU v9 is 2028-dated; current business intact.
- **Stop loss:** If AVGO falls below $390.00, **SELL all AVGO shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL AVGO if stop breached.
- **Do NOT sell AVGO today** unless stop is breached.
- **Do NOT add AVGO** — headline risk demands caution; wait for stabilization.
- **Target:** $425.00.

### SOXX — HOLD 1 — CONDITIONAL ADD ON PULLBACK
- Position avg $619.25. Current $648.69 (unrealized +4.75%). Intraday +1.42%.
- Strongest performer. Chip ETF thesis intact. Micron earnings Wednesday may catalyze further upside.
- **Stop loss:** If SOXX falls below $620.00, **SELL all SOXX shares at market** on next tactical run.
- **Do NOT sell SOXX today** except if stop is breached.
- **Conditional add:** BUY 1 share if SOXX pulls back to $640.00 or below with limit $639.50. Rationale: add to winner on dip, not chase. If triggered, weight becomes ~13.2% (within 20% cap).
- **Illiquidity warning:** Use limit orders only. Do not place market orders.
- **Target:** $670.00.

### GOOG — DO NOT RE-BUY — STOP EXECUTED
- **STOP EXECUTED:** Sold 2 shares at $349.26 on 2026-06-22 14:20Z. Stop $350.00 breached.
- **Realized loss:** ~$40.02 from avg entry $369.28.
- **DO NOT RE-BUY GOOG** for 24 hours (until 2026-06-23 14:20Z) unless hourly strategist explicitly authorizes re-entry.
- **Reason:** AI talent exodus headlines, support breakdown below $350.00. Capital preserved.
- **Target:** N/A — exited position.

### NVDA — HOLD 1 — DO NOT ADD
- Position avg $208.47. Current $210.27 (unrealized +0.86%). Intraday –0.22%.
- Chip rotation still favors SOXX/AVGO over NVDA. Small position.
- **Stop loss:** If NVDA falls below $200.00, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT sell NVDA today** except if stop is breached.
- **Do NOT add NVDA** — not at +1R yet.
- **Target:** $225.00.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX — DO NOT BUY
- No edge, weak relative trends, extended, or thin liquidity.
- **HOOD fresh negative catalyst:** $2B convertible senior notes offering. Dilution risk. Avoid.

## Hard Rules / No-Trade Conditions
- **No discretionary buys this cycle.** Gross exposure is 68.4%; within target band. Micron earnings Wednesday creates binary risk.
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
1. **No fresh capital deployment authorized this cycle.** Market mixed; Micron earnings Wednesday creates binary risk.
2. **Conditional add queue (requires explicit stop/pullback trigger):**
   - SOXX if pullback to $640 or below (limit $639.50).
   - NVDA if pullback to $208 or below (limit $207.50) — but only if chip rotation broadens.
   - QQQ add NOT authorized (would breach 45% cap).
   - VOO add NOT authorized (would breach 20% cap).
3. **All hourly directives for this cycle are complete. Hold positions.**

## Current Book
- QQQ 5 (~37.6%), VOO 2 (~14.0%), AVGO 2 (~8.1%), SOXX 1 (~6.6%), NVDA 1 (~2.1%)
- Cash: ~$3,095.62 (~31.6%)
- Gross exposure: ~68.4%

## Next Hourly Preview — 16:35Z (12:35 PM ET)
- Review whether AVGO stabilizes above $390 or approaches stop.
- Monitor SOXX momentum. If it holds above $650, maintain conditional add on pullback.
- Evaluate any new macro headlines from US-Iran talks or semiconductor sector.
- If any position hits stop, execute protective sell immediately.
- With 0/3 daytrades used, protective exits are fully authorized.
