# Tactical Todo — Updated 2026-06-17 18:35Z (Wednesday 2:35 PM ET)
*HARD_LOCK LIFTED. Market OPEN. Gross 75.5%. HOLD posture. No new orders.*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band)
- **HARD_LOCK:** LIFTED — normal execution resumes.
- **Live book:** VOO 2 ($1,374.30), AVGO 2 ($793.92), SOXX 1 ($612.34), QQQ 5 ($3,652.90), NVDA 1 ($206.08), GOOG 2 ($727.27)
- **Account equity / cash / buying power:** $9,763.08 / $2,397.11 / $30,213.16
- **Gross long exposure:** ~75.45% | **Net exposure:** ~75.45% | **Cash:** ~24.55%
- **Daytrade count:** 1/3 (verified live)
- **Pattern day trader:** false
- **Open orders:** None.
- **24-hour cooldowns:** None active.
- **Market:** OPEN. SPY ~flat, QQQ ~+0.10% intraday, SOXX ~+3.6% intraday, AVGO ~+5.4% intraday on JPMorgan upgrade.
- **Event detector:** NONE.

## Position Instructions — Wednesday Jun 17 (18:40Z and 18:50Z Tactical Runs)

### VOO — HOLD
- Broad-market anchor. 14.1% weight. In profit.
- **DO NOT SELL VOO unless stop breached.**
- **DO NOT ADD VOO** — at 14.1%; adding 1 share would exceed 20% cap.
- **Stop loss:** If VOO falls below $650.00, **SELL all VOO shares at market** on next tactical run.

### QQQ — HOLD
- Current position: 5 shares @ $732.16 avg, current $730.58 (flat).
- 2 shares were filled TODAY at 09:56 ET @ $732.47. Same-day round-trip prohibition applies to those 2 shares.
- **Stop loss:** If QQQ falls below $720.00, **SELL all QQQ shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL QQQ if stop breached.
- **Do NOT sell QQQ today** except if stop is breached.
- **Do NOT add QQQ** without fresh hourly note.
- **Target:** $760.00.

### AVGO — HOLD
- Current position: 2 shares @ $387.89 avg, current $396.96 (+2.3%).
- Chip thesis intact. JPMorgan aggressive-buy upgrade today. Intraday up +5.4%.
- **Stop loss:** If AVGO falls below $365.00, **SELL all AVGO shares at market** on next tactical run.
- **Do NOT sell AVGO today** unless stop is breached. Bought Jun 16 at 14:15 ET.
- **Do NOT add AVGO** — not at +1R yet per pyramiding rule.

### SOXX — HOLD
- Current position: 1 share @ $619.25, current $612.34 (-1.1%).
- Recovering +3.6% intraday. Chip ETF thesis intact.
- **Stop loss:** If SOXX falls below $590.00, **SELL all SOXX shares at market** on next tactical run.
- **Do NOT sell SOXX today** unless stop is breached. Bought Jun 16 at 14:23 ET.
- **Do NOT add SOXX** — currently underwater; never average down.
- **Illiquidity warning:** Use limit orders only if trading.

### GOOG — HOLD — FILLED TODAY
- **FILLED:** 2 shares @ $369.28 avg at 09:31 ET today (2026-06-17). Current price $363.64.
- **Stop loss:** If GOOG falls below $340.00, **SELL all GOOG shares at market** on next tactical run. AUTHORIZE SAME-DAY SELL GOOG if stop breached.
- **Do NOT sell GOOG today** except if stop is breached.
- **Do NOT add GOOG** — underwater; never average down.
- **Target:** $385.00.
- **Concentration cap check:** GOOG max 15% of equity = $1,464.46. Current 2 shares = $727 = 7.45%.

### NVDA — HOLD
- Current position: 1 share @ $208.47 at 19:37Z Jun 16. Current price $206.08.
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
- Surging +12.8% today, +26.3% this week. Too extended to chase.
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
- VOO 2 (~14.1%), AVGO 2 (~8.1%), SOXX 1 (~6.3%), QQQ 5 (~37.4%), NVDA 1 (~2.1%), GOOG 2 (~7.5%)
- Cash: ~$2,397 (~24.6%)
- Gross exposure: ~75.5%

## Next Hourly Preview — 19:35Z (3:35 PM ET)
- Review QQQ behavior. If extended further, no new adds.
- Monitor semi momentum (SOXX/AVGO). If continuation, maintain stops. If reversal, tighten.
- If GOOG or NVDA recover toward breakeven, reassess add potential next hour.
- With 1/3 daytrades used, full flexibility remains for protective exits.
