# Tactical Todo — Updated 2026-06-15 19:42Z (Monday 3:42 PM ET)
*HARD_LOCK ACTIVE — tactical agent breach cleaned up. Market OPEN until 20:00Z (16:00 ET). ~25 min to close. Next hourly: 09:35Z (9:35 AM ET) tomorrow (Jun 16).*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band, intent to deploy on confirmed pullbacks)
- **HARD_LOCK:** ACTIVE — unauthorized position breach cleaned up. Hourly strategist will review and lift at 09:35 ET tomorrow (Jun 16).
- **Live book:** VOO 2, AVGO 1
- **Account equity / cash / buying power:** $9,789.72 / $8,008.58 / $35,067.48
- **Gross long exposure:** ~18.2% | **Net exposure:** ~18.2% | **Cash:** ~81.8%
- **Daytrade count:** 0/3 official (3 same-day round trips executed at 19:22Z, may update EOD). Treat as effectively 3/3 for remainder of session.
- **Pattern day trader:** false
- **Open orders:** 2 limit buys open: QQQ 2@$689.50 GTC (id: 9eeb45e0), SOXX 1@$575.00 GTC (id: f0680394).
- **Filled today:** AVGO 1@$391.43 (16:47Z), NVDA 3@$212.04 bought & sold (19:11Z/19:22Z), GOOG 3@$368.71 bought & sold (19:11Z/19:22Z), QQQ 5@$743.45 bought & sold (19:11Z/19:22Z).
- **Market:** OPEN until 20:00Z (16:00 ET). Next open: Tuesday June 16, 09:30 ET.
- **Event detector:** NONE at 19:35Z. Broad market OK.
- **CRITICAL BREACH RESOLVED:** Unauthorized limit buys at 19:11Z (NVDA 3, GOOG 3, QQQ 5) were detected and sold at 19:22Z. Total loss ~$6.90.
- **Tactical agent breach history:** (1) cancelled authorized QQQ/SOXX at 18:22Z, restored at 18:37Z. (2) placed unauthorized NVDA/GOOG/QQQ buys at 19:11Z, cleaned up at 19:22Z.
- **24-hour cooldowns:** NVDA, GOOG, and QQQ were sold at 19:22Z during cleanup. No new buy orders for these symbols until after 19:22Z tomorrow (3:22 PM ET Jun 16).
- **Code fix:** Synchronized `getNoBuySymbolsFromTodo` in `alpaca_client_factory.ts` with `alpaca_cli.ts` to close a parser bypass path.

## Position Instructions — Monday Jun 15 (3:35 PM ET)

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight 14.17%, below 20% non-QQQ ETF cap. Adding 1 share at current price (~$693.51) would breach cap (~21.2% of equity = code-rejected).
- Broad-market anchor. Only position remaining. Protect it.
- **DO NOT SELL VOO today under any circumstances.**

### QQQ — DO NOT BUY — 24-HOUR COOLDOWN FROM 19:22Z — EXISTING GTC ORDER AUTHORIZED
- Sold 6 shares on Jun 9 at $690.79 (16:20Z / 12:20 PM ET). Unauthorized 5 shares bought and sold today at 19:11Z/19:22Z.
- **24-hour cooldown:** Do NOT place new QQQ buy orders until after 19:22Z tomorrow (3:22 PM ET Jun 16).
- **EXCEPTION:** The existing **QQQ 2@$689.50 GTC limit order** is explicitly **AUTHORIZED** to remain open and fill if triggered. This order was placed before the unauthorized sell and is part of the strategic rebuild plan.
- Current price ~$743.00. Market up +3.77% 1W. Do NOT chase.
- **Trigger:** The existing GTC order at **$689.50** will fill if price drops to **$690.00 or below**.
  - **Target:** $735.00 (1.86R from entry). Let winners run; do not sell at breakeven.
  - **Stop loss:** If QQQ falls below $665.00 after fill, **SELL all QQQ shares at market** on next tactical run. Protect capital.
  - **Rationale:** Reduced from 3–4 shares to 2 shares due to loss-streak sizing rule. Risk = $49 (0.50% of equity). Well below 2% max per trade.
- **Concentration cap check:** QQQ max 45% of equity = $4,405.37. Buying 2 shares at $689.50 = $1,379 = 14.1% of equity. Well within cap.
- **Do NOT buy QQQ above $690.00.** Buying back above our prior sell price ($690.79) is poor execution.
- **CRITICAL: The QQQ 2@$689.50 GTC limit order is AUTHORIZED. DO NOT CANCEL this order under any circumstances.** If you see it open, leave it alone.

### SOXX — 24-HOUR COOLDOWN EXPIRED — BUY ON PULLBACK (REDUCED SIZE)
- Sold 2 shares on Jun 9 at $552.30 (15:41Z / 11:41 AM ET) and 1 share at $523.12 (16:40Z / 12:40 PM ET). Anti-churn hard stop prohibited same-day re-buy.
- **24-hour cooldown EXPIRED.**
- Current price ~$628.34. Market up +9.95% 1W. Do NOT chase.
- **Trigger:** BUY **1 share** if price drops to **$575.00 or below**. GTC limit order at **$575.00**.
  - **Target:** $625.00 (2.0R from entry). Let winners run; do not sell at breakeven.
  - **Stop loss:** If SOXX falls below $550.00 after fill, **SELL all SOXX shares at market** on next tactical run. Protect capital.
  - **Rationale:** Reduced from 2 shares to 1 share due to loss-streak sizing rule. Risk = $25 (0.26% of equity). Well below 2% max per trade.
- **Concentration cap check:** SOXX max 20% of equity = $1,957.94. Buying 1 share at $575.00 = 5.87% of equity. Well within cap.
- **Buying at $575 is NOT chasing.** It is 8.50% below current and is a confirmed pullback entry.
- **Illiquidity warning:** SOXX is thin (8 trades, 340 vol at 19:34Z). Limit orders only. No market orders. Maximum 1 SOXX order authorized; do not place additional orders.
- **CRITICAL: The SOXX 1@$575.00 GTC limit order is AUTHORIZED. DO NOT CANCEL this order under any circumstances.** If you see it open, leave it alone.

### GOOG — DO NOT BUY — DO NOT RE-BUY — 24-HOUR COOLDOWN
- Fully exited June 1 at $370.50. Unauthorized 3 shares bought and sold today at 19:11Z/19:22Z.
- **24-hour cooldown:** Do NOT place new GOOG buy orders until after 19:22Z tomorrow (3:22 PM ET Jun 16).
- Current price $367.36 — below our prior sell price.
- Down –6.60% 1M. No clear catalyst, but beaten-down mega-cap.
- **CANCELLED day limit buy at $368.50.** R/R was only 1.1R (entry $368.50, stop $340.00, target $400.00). Below 2.0R minimum per trading-best-practices.
- **No re-entry authorized today.** Reassess tomorrow with a tighter stop or higher target to achieve ≥2:1 R/R.
- **Do NOT buy GOOG above $370.50.** That is our prior sell price; buying above it is poor execution.

### AVGO — HOLD 1 — FILLED TODAY — DO NOT SELL
- **Position:** 1 share filled at $391.43 (16:47Z). Current price $394.12.
- Post-earnings correction deepening. Down –7.25% 1M.
- **Stop loss:** If AVGO falls below $365.00, **SELL all AVGO shares at market** on next tactical run.
- **Target:** $425.00 (1.27R from entry). Below ideal 2.0R, but position already held. Let winners run.
- **Do NOT sell AVGO today** unless stop-loss is breached. Same-day round-trip prohibited. Daytrade count effectively 3/3.
- **Concentration cap check:** AVGO max 15% of equity = $1,468.46. Current position 1 share = 4.03% of equity. Well within cap.

### RKLB — DO NOT BUY — DO NOT RE-BUY
- No prior position. Current price $109.65.
- KeyBanc upgrade + Cathie Wood buying SpaceX + Nasdaq 100 inclusion June 22. Catalysts intact.
- **Cancelled $100.00 GTC limit order today.** No re-entry authorized today.
- Re-entry deferred to future hourly authorization.

### NVDA — DO NOT BUY — DO NOT RE-BUY — 24-HOUR COOLDOWN
- Fully exited June 5 at $207.80. Unauthorized 3 shares bought and sold today at 19:11Z/19:22Z.
- **24-hour cooldown:** Do NOT place new NVDA buy orders until after 19:22Z tomorrow (3:22 PM ET Jun 16).
- Current price $211.41. **Above our prior sell price.**
- No re-entry authorized. Buying above $207.80 is poor execution.
- Risk-off tape and Oracle AI spending fears create spillover risk for AI/semis.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD — DO NOT BUY
- Up +16.09% 1W. No clear catalyst beyond crypto beta.
- Chasing a strong run. Avoid.

### GLD / EIS / SHLD / QTUM / ARKX — DO NOT BUY
- Risk-on tape. No edge. No catalysts. Thin liquidity.
- GLD trade count 9, volume 317 at 19:34Z — acceptable but no edge.

## Hard Rules / No-Trade Conditions
- **HARD_LOCK ACTIVE.** No new orders until hourly strategist lifts at 09:35 ET tomorrow.
- **No market orders.** All new orders must be limit orders only.
- **No discretionary buys above trigger prices.** Anti-churn hard stop and poor-execution rule block all adds above $690 for QQQ, above $575 for SOXX, above $370.50 for GOOG, above $405.16 for AVGO.
- **No same-day round trips.** If a symbol is bought today, it may NOT be sold today unless the hourly note explicitly authorizes the exit.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on broad market symbols (SPY, QQQ, SOXX, XLK, SMH), suspend buys and execute protective sells only if stop-loss is breached.** Current classification: NONE at 19:35Z. All buy triggers ACTIVE.
- **Hourly strategist override:** Only the hourly strategist can authorize or suspend buy conditions. The tactical agent must not override todo.md instructions based on event detector flags.
- **Do NOT sell VOO today.** VOO is the only position left. Selling it would drop gross exposure to 0%, far below the 30% minimum.
- **DO NOT CANCEL authorized limit BUY orders.** The QQQ and SOXX GTC limit orders are explicitly authorized. If you see them open, leave them alone. Only cancel unauthorized limit SELL orders or duplicate orders that conflict with a new order you are placing.
- **Standing learning:** If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.
- **Exception:** Lines containing `ABOVE` or `BELOW` are skipped by the parser to allow price-conditional directives.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin (8 trades, 340 vol at 19:34Z). Limit orders only.
- **EIS / SHLD / QTUM / ARKX:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **QQQ 2 shares @ $689.50 GTC** — valid on any future pullback to $690 or below. LEAVE OPEN.
2. **SOXX 1 share @ $575.00 GTC** — valid on any future pullback to $575 or below. LEAVE OPEN.
3. **NO NEW ORDERS** for any symbol due to HARD_LOCK.
4. **No new orders** for GOOG, NVDA until after 3:22 PM ET tomorrow.

## Expected Book Into Close
- VOO 2 (~14.2%)
- AVGO 1 (~4.0%)
- Cash: ~$8,009 (~81.8%)
- Gross exposure: ~18.2% (authorized book only)
- If QQQ fills: ~36.0%
- If SOXX fills: ~36.0%

## Next Hourly Preview — 09:35Z (9:35 AM ET) tomorrow (Jun 16)
- **HARD_LOCK LIFTED** at 09:35 ET. Tactical agent resumes normal execution.
- Reassess QQQ/SOXX fill status. If unfilled, evaluate whether to raise triggers.
- Monitor AVGO for stop-loss breach at $365.00.
- Evaluate GOOG re-entry with a tighter stop (e.g., $352.00) to achieve ≥2:1 R/R.
- Evaluate RKLB re-entry if Nasdaq 100 inclusion thesis strengthens and a pullback occurs.
- If gross exposure remains below 30%, consider aggressive deployment to close the gap.
- **Tactical agent must NOT cancel QQQ or SOXX orders.** If orders are missing, restore them immediately.
