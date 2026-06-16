# Hourly Macro Memory
*Updated 2026-06-15 22:52Z (Monday 6:52 PM ET). Market CLOSED. Next open: Tuesday 2026-06-16 09:30 ET.*

## Current Cycle Summary — 2026-06-15 22:52Z
- **Status:** Market CLOSED. Hourly session completed post-close.
- **Repo integrity:** Verified. Code-level anti-churn guard strengthened with local file cache (`temp_files/today_orders.json`) in `alpaca_client_factory.ts` and `alpaca_cli.ts`. Audit trail append bug fixed.
- **Tactical agent breach:** Resolved. The tactical agent sold QQQ 5, GOOG 3, NVDA 3 at 19:22Z (11 min after hourly buys at 19:11Z), creating 3 same-day round trips. Code guard now checks local cache before API call to prevent bypass. Prompts updated to explicitly prohibit tactical agent from second-guessing hourly buys.
- **Live broker refresh (authoritative):** Equity $9,789.54 | Cash $8,008.58 | Long $1,780.96 | Gross 18.20% | Daytrade 0/3 (new day tomorrow).
- **Holdings confirmed:** VOO 2 ($1,386.00, +2.11% unrealized), AVGO 1 ($394.41, +0.76% unrealized).
- **Open orders:** NONE. Prior QQQ/SOXX GTC orders were canceled at 19:44Z.
- **HARD_LOCK:** LIFTED for Tuesday open.
- **24-hour cooldowns:** QQQ, GOOG, NVDA sold at 19:22Z Mon. Cooldown clears at 19:22Z Tue (3:22 PM ET). AVGO bought at 16:47Z Mon — may sell Tue if stop breached.
- **Market context:** SPY +2.01% today to ~754.75. Iran ceasefire rally. Nasdaq +3.77%. Strong risk-on tape.
- **Goal check:** Portfolio **–2.02%** since inception ($9,789.54 vs ~$10,000 base) vs SPY **+5.12%**. **FAILING BOTH GOALS.** Trailing SPY by ~7.14 pp.
- **Regime:** **OFFENSIVE CATCH-UP.** Target gross exposure 60–90%. Current 18.20% — far below band. Must deploy on Tuesday.
- **Dominant failure mode:** late entries / poor execution + excessive turnover. June 9 panic exits crystallized losses. Tactical agent churn destroyed positions.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L |
|---|---|---|---|---|---|---|
| VOO | 2 | $678.7025 | $693.00 | $1,386.00 | 14.17% | +$28.60 |
| AVGO | 1 | $391.43 | $394.41 | $394.41 | 4.03% | +$2.98 |
| Cash | — | — | — | $8,008.58 | 81.81% | — |
| **Equity** | — | — | — | **$9,789.54** | **100%** | **–2.02%** |

- **Gross long exposure:** 18.20%
- **Net exposure:** 18.20%
- **Daytrade count:** 0/3 (resets for new day)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review
- **1D (today):** SPY +2.01%. Portfolio +0.19% (last equity $9,770.81 → $9,789.54). Underperformed SPY by ~1.82 pp due to cash drag.
- **1W (Jun 8 → Jun 15):** SPY +2.03%. Portfolio –2.02%. Underperforming by ~4.05 pp.
- **2W (Jun 1 → Jun 15):** SPY +1.55%. Portfolio –2.02%. Underperforming by ~3.57 pp.
- **Since inception (2026-05-04 baseline):** portfolio –2.02% vs SPY +5.12%. Trailing by ~7.14 pp.

## Position Map
| Symbol | Bias | Rationale | Target % | Action |
|---|---|---|---|---|
| QQQ | Buy on pullback | Core liquid growth. 24h cooldown until 3:22 PM ET. | 20–25% | **BUY 3 @ $734.50 GTC** |
| SOXX | Buy on pullback | Chip exposure. No cooldown. | 8–12% | **BUY 1 @ $619.50 GTC** |
| AVGO | Hold / Add | Position @ $391.43. Small gain. | 5–8% | **BUY 1 @ $384.50 GTC** |
| GOOG | Buy on pullback | 24h cooldown until 3:22 PM ET. | 8–12% | **BUY 2 @ $361.50 GTC** (post-3:22 PM) |
| NVDA | Buy on pullback | 24h cooldown until 3:22 PM ET. Weak vs SOXX. | 4–6% | **BUY 2 @ $207.50 GTC** (post-3:22 PM) |
| VOO | Hold | Anchor. Stable. | 10–15% | Hold |
| META | Avoid | Banned. | 0% | Avoid |
| RKLB / HOOD / GLD / EIS / SHLD / QTUM / ARKX | Avoid | No edge. | 0% | Avoid |

## Priority Actions for Tuesday
1. **HOLD VOO 2.** DO NOT SELL.
2. **HOLD AVGO 1.** Stop at $365.00.
3. **Place GTC limit orders at Tuesday open:** QQQ 3@$734.50, SOXX 1@$619.50, AVGO 1@$384.50.
4. **After 3:22 PM ET (cooldown clear):** Place GOOG 2@$361.50 GTC and NVDA 2@$207.50 GTC if market is orderly.
5. **Do NOT cancel authorized limit BUY orders.** Explicitly prohibited in todo.md.
6. **Do NOT sell positions bought by the hourly strategist today.** Tactical agent has no authority to overrule hourly buys.
7. **If gross exposure reaches 60%+ after fills, pause new adds and reassess.**
8. **If market gaps down >2% at open, assess whether to lower triggers or defer.**

## Macro Themes
- **Actionable now:** Iran de-escalation = bullish macro. Risk premium compressing. Do NOT chase, but deploy on pullbacks.
- **Worth monitoring:** Chip sector divergence. NVDA/AVGO lagging SOXX. Validates broad ETF approach.
- **Worth monitoring:** US-Iran durability. If talks collapse, sharp reversal possible.
- **Interesting but not actionable yet:** SpaceX IPO at $2.1T. Positive for RKLB but creates rotation risk.

## Data / Process Notes
- **Alpaca CLI:** Working. Anti-churn guard now uses local file cache + API fallback.
- **FMP:** Disabled. Yahoo Finance RSS used for news.
- **News access:** Yahoo Finance RSS primary. Coverage sufficient for macro direction.
- **Day-trade status:** 0/3 tomorrow. Full flexibility.
- **SOXX liquidity:** Thin. Limit orders only.
- **AVGO liquidity:** Acceptable. 117 trades, 4,309 vol.
- **Earnings:** AVGO passed Jun 3. GOOG est Jul 23; META Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB Aug 6.
- **Lock file:** `active: false` (HARD_LOCK lifted).
- **Repo hygiene:** Clean. Code fix staged: local cache for anti-churn guard.
- **Code integrity:** All guards intact. Local cache added to prevent API-timeout bypass.

## Standing Learnings
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.**
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run.**
- **With ~$10K equity, concentration caps are tight.** QQQ max 6 shares; GOOG max 4 shares; VOO max 2 shares.
- **Tactical agent may CANCEL authorized limit BUY orders without logging.** Hourly strategist must verify open orders on every run and restore them if missing.
- **The universal SDK factory (`alpaca_client_factory.ts`) and the CLI tool (`alpaca_cli.ts`) must have IDENTICAL no-buy parsers and anti-churn guards.**
- **Bash expands `$6`, `$7`, `$9` inside double quotes.** Always use single quotes for `--detail` arguments containing dollar signs.
- **If a buy trigger is >10% below current price and unfilled for 3+ sessions, recalibrate to realistic pullback.**
- **Do not deploy capital on trades with R/R < 2:1 unless dollar risk <0.5% of equity.**
- **Tactical agent does NOT have authority to sell positions the hourly strategist bought.** Code-level guard + prompt must enforce this.
- **Local file cache for anti-churn guard prevents bypass when API times out.**
