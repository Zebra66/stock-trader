# Tactical Todo — Updated 2026-06-17 17:35Z (Wednesday 1:35 PM ET)
*HARD_LOCK LIFTED. Market OPEN. Gross 75.5%. HOLD posture. No new orders.*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band)
- **HARD_LOCK:** LIFTED — normal execution resumes.
- **Live book:** VOO 2 ($1,377.73), AVGO 2 ($791.55), SOXX 1 ($611.21), QQQ 5 ($3,660.30), NVDA 1 ($207.23), GOOG 2 ($725.54)
- **Account equity / cash / buying power:** $9,770.67 / $2,397.11 / $30,234.41
- **Gross long exposure:** ~75.47% | **Net exposure:** ~75.47% | **Cash:** ~24.53%
- **Daytrade count:** 0/3 (verified live; prior memory misreported 1/3)
- **Pattern day trader:** false
- **Open orders:** None.
- **24-hour cooldowns:** None active.
- **Market:** OPEN. SPY ~flat, QQQ ~+0.35% intraday, SOXX ~+3.5% intraday, AVGO ~+5.2% intraday.
- **Event detector:** NONE.

## Position Instructions — Wednesday Jun 17 (17:40Z and 17:50Z Tactical Runs)

### VOO — HOLD
- Broad-market anchor. 14.1% weight. In profit.
- **DO NOT SELL VOO unless stop breached.**
- **DO NOT ADD VOO** — at 14.1%; adding 1 share would exceed 20% cap.
- **Stop loss:** If VOO falls below $650.00, **SELL all VOO shares at market** on next tactical run.

### QQQ — HOLD — DO NOT SELL TODAY
- Current position: 5 shares @ $732.16 avg, current $732.06 (flat).
- 2 shares were filled TODAY at 09:56 ET @ $732.47. Same-day round-trip prohibition applies to those 2 shares.
- **Stop loss:** If QQQ falls below $720.00, **SELL all QQQ shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL QQQ if stop breached.
- **Do NOT sell QQQ today** except if stop is breached.
- **Do NOT add QQQ** without fresh hourly note.
- **Target:** $760.00.

### AVGO — HOLD
- Current position: 2 shares @ $387.89 avg, current $395.78 (+2.0%).
- Chip thesis intact. Intraday up +5.2%.
- **Stop loss:** If AVGO falls below $365.00, **SELL all AVGO shares at market** on next tactical run.
- **Do NOT sell AVGO today** unless stop is breached. Bought Jun 16 at 14:15 ET.
- **Do NOT add AVGO** — not at +1R yet per pyramiding rule.

### SOXX — HOLD
- Current position: 1 share @ $619.25, current $611.21 (-1.3%).
- Recovering +3.5% intraday. Chip ETF thesis intact.
- **Stop loss:** If SOXX falls below $590.00, **SELL all SOXX shares at market** on next tactical run.
- **Do NOT sell SOXX today** unless stop is breached. Bought Jun 16 at 14:23 ET.
- **Do NOT add SOXX** — currently underwater; never average down.
- **Illiquidity warning:** Use limit orders only if trading.

### GOOG — HOLD — FILLED TODAY
- **FILLED:** 2 shares @ $369.28 avg at 09:31 ET today (2026-06-17). Current price $362.77.
- **Stop loss:** If GOOG falls below $340.00, **SELL all GOOG shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL GOOG if stop breached.
- **Do NOT sell GOOG today** except if stop is breached.
- **Do NOT add GOOG** — underwater; never average down.
- **Target:** $385.00.
- **Concentration cap check:** GOOG max 15% of equity = $1,465.60. Current 2 shares = $726 = 7.43%.

### NVDA — HOLD
- Current position: 1 share @ $208.47 at 19:37Z Jun 16. Current price $207.23.
- **Stop loss:** If NVDA falls below $195.00, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT sell NVDA today** under any circumstances unless stop breached. Bought yesterday (Jun 16).
- **Do NOT add NVDA** — flat/underwater; never average down.
- **Target:** $225.00.

### META — AVOID
- Banned by `bannedSymbols`. No position.
- **DO NOT BUY META.**

### RKLB / GLD / EIS / SHLD / QTUM / ARKX — AVOID
- No edge. No catalyst. Avoid.
- **DO NOT BUY RKLB / HOOD / GLD / EIS / SHLD / QTUM / ARKX.**

### HOOD — WATCH ONLY
- Surging +12% today, +25% this week. Too extended to chase.
- **DO NOT BUY HOOD today.** If pullback to ~$100–$102 with volume confirmation, reassess next hourly.

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - GOOG filled Jun 17 at 09:31 ET — DO NOT SELL GOOG today (unless stop breached).
  - QQQ filled Jun 17 at 09:56 ET (2 shares) — DO NOT SELL QQQ today (unless stop breached).
  - AVGO add filled Jun 16 at 14:15 ET — DO NOT SELL AVGO today (unless stop breached).
  - SOXX add filled Jun 16 at 14:23 ET — DO NOT SELL SOXX today (unless stop breached).
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
1. **All authorized adds are complete.** QQQ 2-share GTC filled at $732.47; GOOG 2-share GTC filled at $369.28.
2. **No fresh hourly authorization for new buys this cycle.**
3. **If QQQ pulls back to $725.00 with volume confirmation, reassess at next hourly.**
4. All hourly directives for this cycle are complete. Hold positions.

## Current Book
- VOO 2 (~14.1%), AVGO 2 (~8.1%), SOXX 1 (~6.3%), QQQ 5 (~37.5%), NVDA 1 (~2.1%), GOOG 2 (~7.4%)
- Cash: ~$2,397 (~24.5%)
- Gross exposure: ~75.5%

## Next Hourly Preview — 18:35Z (2:35 PM ET)
- Review QQQ behavior. If extended further, no new adds.
- Monitor semi momentum (SOXX/AVGO). If continuation, maintain stops. If reversal, tighten.
- If GOOG or NVDA recover toward breakeven, reassess add potential next hour.
