# Tactical Todo — Updated 2026-06-17 13:35Z (Wednesday 9:35 AM ET)
*HARD_LOCK LIFTED. Market OPEN. Post-Fed. GOOG filled this morning.*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band)
- **HARD_LOCK:** LIFTED — normal execution resumes.
- **Live book:** VOO 2 ($1,380.36), AVGO 2 ($770.94), SOXX 1 ($608.39), QQQ 3 ($2,199.75), NVDA 1 ($208.40), GOOG 2 ($736.06)
- **Account equity / cash / buying power:** $9,765.95 / $3,862.05 / $31,979.11
- **Gross long exposure:** ~60.45% | **Net exposure:** ~60.45% | **Cash:** ~39.55%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** None.
- **24-hour cooldowns:** None active.
- **Market:** OPEN. ~22 minutes until close. SPY ~flat, QQQ ~+0.47%, SOXX ~+3.09%, AVGO ~+2.08%.
- **Event detector:** NONE.

## Position Instructions — Wednesday Jun 17 (14:10Z and 14:20Z Tactical Runs)

### VOO — HOLD
- Broad-market anchor. 14.1% weight. In profit.
- **DO NOT SELL VOO unless stop breached.**
- **DO NOT ADD VOO** — at 14.1%; adding 1 share would exceed 20% cap.
- **Stop loss:** If VOO falls below $650.00, **SELL all VOO shares at market** on next tactical run.

### QQQ — BUY — AUTHORIZED ADD
- Current position: 3 shares @ $731.96 avg, current $733.25 (+0.18%).
- **AUTHORIZED BUY:** Limit BUY 2 shares QQQ @ $732.50 GTC.
  - Rationale: Core growth position. Best SPY catch-up vehicle. In profit.
  - Post-add target MV: ~$3,665 = 37.5% of equity (under 45% cap).
  - Post-add gross exposure: ~75.5%.
- **Stop loss:** If QQQ falls below $720.00, **SELL all QQQ shares at market** on next tactical run.
- **Do NOT sell QQQ today** under any circumstances unless stop breached.
- **Do NOT add QQQ beyond the authorized 2 shares** without fresh hourly note.
- **Target:** $760.00.

### AVGO — HOLD
- Current position: 2 shares @ $387.89 avg, current $385.47 (-0.62%).
- Recovering +2.08% today. Chip thesis intact.
- **Stop loss:** If AVGO falls below $365.00, **SELL all AVGO shares at market** on next tactical run.
- **Do NOT sell AVGO today** unless stop is breached. Bought yesterday (Jun 16).
- **Do NOT add AVGO** — currently underwater; never average down.

### SOXX — HOLD
- Current position: 1 share @ $619.25, current $608.39 (-1.76%).
- Recovering +3.09% today. Chip ETF thesis intact.
- **Stop loss:** If SOXX falls below $590.00, **SELL all SOXX shares at market** on next tactical run.
- **Do NOT sell SOXX today** unless stop is breached. Bought yesterday (Jun 16).
- **Do NOT add SOXX** — currently underwater; never average down.
- **Illiquidity warning:** Use limit orders only if trading.

### GOOG — HOLD — FILLED TODAY
- **FILLED:** 2 shares @ $369.28 avg at 09:31 ET today (2026-06-17). Current price $368.03.
- **Stop loss:** If GOOG falls below $340.00, **SELL all GOOG shares at market** on next tactical run.
- **Do NOT sell GOOG today** under any circumstances. Bought today at 09:31 ET.
- **Do NOT add GOOG** — slightly underwater; never average down.
- **Target:** $385.00.
- **Concentration cap check:** GOOG max 15% of equity = $1,464.89. Current 2 shares = $736 = 7.5%.

### NVDA — HOLD
- Current position: 1 share @ $208.47 avg at 19:37Z Jun 16. Current price $208.40.
- **Stop loss:** If NVDA falls below $195.00, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT sell NVDA today** under any circumstances unless stop breached. Bought yesterday (Jun 16).
- **Do NOT add NVDA** — flat; no confirmation of winner status.
- **Target:** $225.00.

### META — AVOID
- Banned by `bannedSymbols`. No position.
- **DO NOT BUY META.**

### RKLB / HOOD / GLD / EIS / SHLD / QTUM / ARKX — AVOID
- No edge. No catalyst. Avoid.
- **DO NOT BUY RKLB / HOOD / GLD / EIS / SHLD / QTUM / ARKX.**

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - GOOG filled Jun 17 at 09:31 ET — DO NOT SELL GOOG today.
  - AVGO add filled Jun 16 at 14:15 ET — DO NOT SELL AVGO today (unless stop breached).
  - SOXX add filled Jun 16 at 14:23 ET — DO NOT SELL SOXX today (unless stop breached).
  - QQQ add filled Jun 16 at 19:37Z ($731.96) — DO NOT SELL QQQ today (unless stop breached).
  - NVDA add filled Jun 16 at 19:37Z ($208.47) — DO NOT SELL NVDA today (unless stop breached).
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **Never average down.** Do not add to any position that is underwater from your average entry.

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
1. **AUTHORIZED:** QQQ 2 shares limit GTC @ $732.50. Expected fill ~$1,465.
2. **Gross exposure after QQQ fill:** ~75.5%. Pause further adds and reassess.
3. **If QQQ limit does not fill:** Carry into tomorrow. Reassess trigger on next hourly.

## Expected Book Into Close (after QQQ fill)
- VOO 2 (~14.1%), AVGO 2 (~7.9%), SOXX 1 (~6.2%), QQQ 5 (~37.5%), NVDA 1 (~2.1%), GOOG 2 (~7.5%)
- Cash: ~$2,397 (~24.5%)
- Gross exposure: ~75.5%

## Next Hourly Preview — 14:35Z (10:35 AM ET)
- Review QQQ fill status.
- If QQQ filled, gross ~75.5%. Pause new adds unless compelling setup emerges.
- If QQQ did not fill, reassess limit price. Current ~$733.25; $732.50 may need adjustment.
- Monitor semi momentum (SOXX/AVGO). If continuation, maintain stops. If reversal, tighten.
