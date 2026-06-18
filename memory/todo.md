# Tactical Todo — Updated 2026-06-18 18:35Z (Thursday 2:35 PM ET)
*HARD_LOCK LIFTED. Market OPEN. Gross 75.7%. HOLD posture. Stops unchanged. No new orders.*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band)
- **HARD_LOCK:** LIFTED — normal execution resumes.
- **Live book:** VOO 2 ($1,375.89), AVGO 2 ($814.86), SOXX 1 ($638.91), QQQ 5 ($3,696.35), NVDA 1 ($210.37), GOOG 2 ($731.96)
- **Account equity / cash / buying power:** $9,865.44 / $2,397.10 / $30,499.75
- **Gross long exposure:** ~75.7% | **Net exposure:** ~75.7% | **Cash:** ~24.3%
- **Daytrade count:** 1/3 (verified live API)
- **Pattern day trader:** false
- **Open orders:** None.
- **24-hour cooldowns:** None active.
- **Market:** OPEN. SPY ~+1.20%, QQQ ~+2.29% intraday at $739.27, SOXX ~+6.53% intraday, AVGO ~+3.67% intraday.
- **Event detector:** NONE.

## Position Instructions — Thursday Jun 18 (18:40Z and 18:50Z Tactical Runs)

### VOO — HOLD
- Broad-market anchor. 13.9% weight. In profit.
- **DO NOT SELL VOO unless stop breached.**
- **DO NOT ADD VOO** — at 13.9%; adding 1 share would approach 20% cap.
- **Stop loss:** If VOO falls below $680.00, **SELL all VOO shares at market** on next tactical run.

### QQQ — HOLD — AT +3.2R
- Current position: 5 shares @ $732.16 avg, current $739.27 (+0.97% unrealized).
- 2 shares were filled Jun 17 at 09:56 ET @ $732.47. Overnight hold — not a same-day round trip.
- **Stop loss:** If QQQ falls below $730.00, **SELL all QQQ shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL QQQ if stop breached.
- **Do NOT sell QQQ today** except if stop is breached.
- **Do NOT add QQQ** — already at target weight (37.4%) near 35–40% target band. Cap is 45%.
- **Target:** $760.00.

### AVGO — HOLD — RAISED STOP
- Current position: 2 shares @ $387.89 avg, current $407.43 (+5.04% unrealized).
- Chip thesis intact. JPMorgan aggressive-buy upgrade. Intraday up +3.67%.
- **Stop loss:** If AVGO falls below $395.00, **SELL all AVGO shares at market** on next tactical run.
- **Do NOT sell AVGO today** unless stop is breached. Bought Jun 16 at 14:15 ET (>24h ago).
- **Do NOT add AVGO** — at target size (8.3%) near 8–10% target band.
- **Target:** $425.00.

### SOXX — HOLD — RAISED STOP
- Current position: 1 share @ $619.25, current $638.91 (+3.18% unrealized).
- Explosive +6.53% intraday. Chip ETF thesis intact.
- **Stop loss:** If SOXX falls below $620.00, **SELL all SOXX shares at market** on next tactical run.
- **Do NOT sell SOXX today** unless stop is breached. Bought Jun 16 at 14:23 ET (>24h ago).
- **Do NOT add SOXX** — illiquid and not at +1R with original stop.
- **Illiquidity warning:** Use limit orders only if trading.

### GOOG — HOLD — THRESHOLD HOLDING
- Current position: 2 shares @ $369.28 avg at 09:31 ET Jun 17. Current price $365.98.
- Only underwater position but holding above $365 threshold. Showing relative weakness but stable (+1.00% today).
- **Stop loss:** If GOOG falls below $350.00, **SELL all GOOG shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL GOOG if stop breached.
- **Do NOT sell GOOG today** except if stop is breached.
- **Do NOT add GOOG** — underwater; never average down.
- **Target:** $385.00.

### NVDA — HOLD
- Current position: 1 share @ $208.47 at 19:37Z Jun 16. Current price $210.37.
- **Stop loss:** If NVDA falls below $200.00, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT sell NVDA today** unless stop is breached. Bought Jun 16 (>24h ago).
- **Do NOT add NVDA** — not at +1R yet.
- **Target:** $225.00.

### META — AVOID
- Banned by `bannedSymbols`. No position.
- **DO NOT BUY META.**

### RKLB / GLD / EIS / SHLD / QTUM / ARKX / HOOD — AVOID
- No edge. No catalyst. Avoid.
- **DO NOT BUY RKLB / HOOD / GLD / EIS / SHLD / QTUM / ARKX.**

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - GOOG filled Jun 17 at 09:31 ET — DO NOT SELL GOOG today (unless stop breached, authorized above).
  - QQQ filled Jun 17 at 09:56 ET (2 shares) — DO NOT SELL those 2 QQQ shares today (unless stop breached, authorized above).
  - AVGO add filled Jun 16 at 14:15 ET — can sell today if stop breached.
  - SOXX add filled Jun 16 at 14:23 ET — can sell today if stop breached.
  - NVDA add filled Jun 16 at 19:37Z ($208.47) — can sell today if stop breached.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **Never average down.** Do not add to any position that is underwater from your average entry.
- **No new buys this cycle.** All add candidates require fresh hourly authorization.

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
1. **No fresh capital deployment authorized this cycle.**
2. **Hold current positions and let them run toward targets.**
3. **If QQQ pulls back to $730–$735 with volume confirmation, reassess at next hourly.**
4. **If AVGO pulls back to $400–$405 with volume confirmation, reassess at next hourly.**
5. All hourly directives for this cycle are complete. Hold positions.

## Current Book
- VOO 2 (~13.9%), AVGO 2 (~8.3%), SOXX 1 (~6.5%), QQQ 5 (~37.4%), NVDA 1 (~2.1%), GOOG 2 (~7.4%)
- Cash: ~$2,397 (~24.3%)
- Gross exposure: ~75.7%

## Next Hourly Preview — 19:35Z (3:35 PM ET)
- Review whether Iran-deal rally continues or stalls. If QQQ holds above $735, maintain stops. If reversal begins, be prepared to trim.
- Monitor GOOG relative strength. If GOOG holds above $365, thesis intact. If it breaks below $360 on heavy volume, consider cutting before $350 stop.
- If any position hits +1R from entry, reassess pyramiding add at next hourly.
- With 1/3 daytrades used, remain cautious on same-day reversals but protective exits are authorized.
