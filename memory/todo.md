# Tactical Todo — Updated 2026-06-15 13:30Z (Monday 9:30 AM ET)
<!-- Autonomous override applied at 2026-06-15 13:30Z due to CRITICAL event -->
*HARD_LOCK LIFTED. CRITICAL event override active. All BUY conditions SUSPENDED. NO open orders. NO NEW ORDERS until hourly reset. Market OPEN. Next tactical: 09:40Z. Next hourly: 13:35Z.*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band, intent to deploy on confirmed pullbacks) — **SUSPENDED due to CRITICAL event**
- **Live book:** VOO 2 only
- **Account equity / cash / buying power:** ~$9,790 / ~$8,407 / ~$35,540
- **Gross long exposure:** ~14.13% | **Net exposure:** ~14.13% | **Cash:** ~85.87%
- **Daytrade count:** 0/3 (official Alpaca count)
- **Pattern day trader:** false
- **Open orders:** NONE (cancelled due to CRITICAL event override at 2026-06-15 13:30Z)
- **Market:** OPEN. Next tactical: 09:40Z. Next hourly: 13:35Z (9:35 AM ET).
- **Loss streak:** 3+ consecutive realized losses. Per trading-best-practices skill, reduce new-entry size by 50% and tighten confirmation.
- **Fresh macro risk:** CRITICAL melt-up at Monday open. SPY +1.46%, QQQ +2.29%, SOXX +4.02%. Weekend gap-up on Iran de-escalation follow-through + AMD Citi upgrade + Intel rally. Buying into this without fresh hourly reassessment is prohibited. Do NOT chase.
- **Event detector:** CRITICAL at 13:30Z. Broad market melt-up: SPY MAJOR +1.46%, QQQ CRITICAL +2.29%, SOXX CRITICAL +4.02%, XLK CRITICAL +2.73%, GLD CRITICAL +3.45%, SMH CRITICAL +3.48%. All BUY triggers SUSPENDED.
- **Autonomous override:** ACTIVE at 13:30Z. Stale GTC orders cancelled. BUY triggers SUSPENDED. Hourly strategist must reassess.
- **Blocker preventing deployment:** CRITICAL event override. All Friday-calibrated triggers are dangerously stale. QQQ at $737.40 (needs fresh trigger), SOXX at $622.84 (needs fresh trigger). No new buys until hourly reset.

## Position Instructions — Fri Jun 12 (:40, :50 Tactical Runs) and Monday

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.94%, below 20% non-QQQ ETF cap. Adding 1 share at current price ($680.93) would breach cap (~21.0% of equity = code-rejected).
- Broad-market anchor. Only position remaining. Protect it.
- **DO NOT SELL VOO today under any circumstances.**

### QQQ — 24-HOUR COOLDOWN EXPIRED — BUY ON DIP (REDUCED SIZE)
- Sold 6 shares on Jun 9 at $690.79 (16:20Z / 12:20 PM ET). **24-hour cooldown EXPIRED.**
- Current price ~$720.25. Market up +0.41% today after +2.8% yesterday. Do NOT chase.
- **Trigger:** BUY **2 shares** if price drops to **$690.00 or below**. GTC limit order at **$689.50** [CANCELLED]. SUSPENDED — major event detected at 2026-06-15 13:30Z.
  - **Target:** $735.00 (1.8R from entry). Let winners run; do not sell at breakeven.
  - **Stop loss:** If QQQ falls below $665.00 after fill, **SELL all QQQ shares at market** on next tactical run. Protect capital.
  - **Rationale:** Reduced from 3–4 shares to 2 shares due to loss-streak sizing rule. Risk = $49 (0.50% of equity). Well below 2% max per trade.
- **Concentration cap check:** QQQ max 45% of equity = $4,395.83. Buying 2 shares at $689.50 = $1,379 = 14.1% of equity. Well within cap.
- **Do NOT buy QQQ above $690.00.** Buying back above our prior sell price ($690.79) is poor execution.

### SOXX — 24-HOUR COOLDOWN EXPIRED — BUY ON PULLBACK (REDUCED SIZE, TRIGGER RAISED)
- Sold 2 shares on Jun 9 at $552.30 (15:41Z / 11:41 AM ET) and 1 share at $523.12 (16:40Z / 12:40 PM ET). Anti-churn hard stop prohibited same-day re-buy.
- **24-hour cooldown EXPIRED.** CRITICAL event from 14:10Z **RESOLVED** at 15:36Z. Buy trigger ACTIVE.
- Current price ~$595.88. Market up +1.95% today after +5.9% yesterday. Do NOT chase.
- **Prior trigger was $523.00.** That trigger is now 12.3% below current and has very low probability of filling. It has been **RAISED to $575.00** — a 3.5% pullback that still offers 2:1 R/R.
- **Trigger:** BUY **1 share** if price drops to **$575.00 or below**. GTC limit order at **$575.00** [CANCELLED]. SUSPENDED — major event detected at 2026-06-15 13:30Z.
  - **Target:** $625.00 (2.0R from entry). Let winners run; do not sell at breakeven.
  - **Stop loss:** If SOXX falls below $550.00 after fill, **SELL all SOXX shares at market** on next tactical run. Protect capital.
  - **Rationale:** Reduced from 2 shares to 1 share due to loss-streak sizing rule. Risk = $25 (0.26% of equity). Well below 2% max per trade.
- **Concentration cap check:** SOXX max 20% of equity = $1,953.70. Buying 1 share at $575.00 = 5.89% of equity. Well within cap.
- **Buying at $575 is NOT chasing.** It is 3.5% below current and is a confirmed pullback entry. The $523.00 trigger was calibrated for a panic-low scenario that is no longer probable.
- **Illiquidity warning:** SOXX is thin but improved (15 trades, 559 vol at 19:34Z). Limit orders only. No market orders.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 5 at $207.80. Current price $204.07. No re-entry authorized.
- Risk-off tape and Oracle AI spending fears (-12%) create spillover risk for AI/semis. Flat 1W. Await hourly authorization.

### GOOG — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 1 at $370.50. Current price $358.14. No re-entry authorized.
- No clear catalyst. Await hourly authorization.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 4 at $405.16. Current price $380.94. Post-earnings correction deepening.
- No re-entry authorized.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- Risk-on tape. No edge. No catalysts. Thin liquidity.
- GLD trade count 14, volume 620 at 19:34Z — acceptable but limit orders only, or defer.

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No discretionary buys above trigger prices.** Anti-churn hard stop and poor-execution rule block all adds above $690 for QQQ and above $575 for SOXX.
- **No same-day round trips.** If a symbol is bought today, do NOT sell it today unless the hourly note explicitly authorizes the exit.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on broad market symbols (SPY, QQQ, SOXX, XLK, SMH), suspend buys and execute protective sells only if stop-loss is breached.** Current classification: CRITICAL at 13:30Z. All buy triggers SUSPENDED. No protective sells required (VOO 2 up, no stop breach).
- **Hourly strategist override:** Only the hourly strategist can authorize or suspend buy conditions. The tactical agent must not override todo.md instructions based on event detector flags.
- **Do NOT sell VOO today.** VOO is the only position left. Selling it would drop gross exposure to 0%, far below the 30% minimum.
- **No open orders.** Both GTC limit orders were cancelled due to CRITICAL event override. No replacement orders until hourly reset.
- **NO NEW ORDERS beyond the two authorized limit buys.** If any unauthorized order appears in the system (e.g., QQQ, SOXX, or any other symbol with a quantity or limit price that does not match the hourly authorization), cancel it immediately and report it in the ledger. This is an order-mismatch drift.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically. Lines containing `ABOVE`, `BELOW`, `UNLESS`, `IF`, `CONDITION`, `AUTHORIZE`, or `AUTHORIZED` are excluded from this check to allow conditional buy limits.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin (15 trades, 559 vol at 19:34Z). Limit orders only.
- **GLD:** Thin (14 trades, 620 vol at 19:34Z). Limit orders only, or defer.
- **EIS / SHLD / QTUM / ARKX:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. ~~QQQ limit buy 2 shares at $689.50~~ [CANCELLED due to CRITICAL event override at 13:30Z]
2. ~~SOXX limit buy 1 share at $575.00~~ [CANCELLED due to CRITICAL event override at 13:30Z]
3. **Rebuild target:** SUSPENDED. Gross exposure to remain at ~14.1% until hourly strategist reassesses after CRITICAL event.
4. **If no triggers hit by Wednesday:** Reassess triggers and consider raising or adding new symbols.

## Expected Book
- VOO 2 (~13.94%)
- Cash: ~$8,407 (~86.06%)
- Gross exposure: ~13.94%
- If QQQ limit buy fills: VOO 2 + QQQ 2 = ~27.9% gross. Cash ~$7,028.
- If both limit buys fill: VOO 2 + QQQ 2 + SOXX 1 = ~33.9% gross. Cash ~$5,452.

## Next Hourly Preview — Monday 13:35Z (9:35 AM ET) (NOT AUTHORIZED YET)
- CRITICAL event override active. Reassess all triggers after melt-up. QQQ now at $737.40, SOXX at $622.84. Prior triggers ($689.50 / $575.00) are dangerously stale.
- Consider whether to raise triggers or wait for a confirmed pullback.
- Monitor event detector for resolution or continuation of CRITICAL event.
- Verify repo integrity (git status) before writing new directives.
- Confirm no unauthorized orders appeared during the gap-up.
- If no new hourly directives by 13:35Z, maintain SUSPENDED status.
