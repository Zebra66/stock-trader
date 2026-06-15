# Hourly Macro Memory
*Updated 2026-06-15 19:42Z (Monday 3:42 PM ET). Market OPEN until 20:00Z (16:00 ET). ~18 min to close.*

## Hourly Cycle Summary — 2026-06-15 19:42Z (Monday 3:42 PM ET)
- **Status:** Market OPEN. ~18 min to close. Event detector NONE at 19:40Z (priorTimestamp null due to working-tree corruption recovery; file restored from HEAD).
- **Repo integrity:** CRITICAL BREACH DETECTED AND RESOLVED. Pre-fetched harness snapshot was 17 days stale (May 29). Working tree showed all tracked files staged as deleted and `.gitignore` missing. Restored from HEAD with `git checkout HEAD -- .`. All safety guards (anti-churn, stale-memory, duplicate-order, broad no-buy parser) verified intact in working tree. `git status` now clean.
- **Live broker refresh:** Equity $9,790.11 | Cash $8,008.58 | Long $1,781.53 | Gross 18.20% | Daytrade 0/3 official.
- **Holdings confirmed:** VOO 2, AVGO 1. VOO current $693.51, unrealized +$29.62 (+2.18%). AVGO current $394.115, unrealized +$2.69 (+0.69% from avg entry $391.43).
- **Open orders:** 2 limit buys open (restored at 18:37Z): QQQ 2@$689.50 GTC (id: 9eeb45e0), SOXX 1@$575.00 GTC (id: f0680394).
- **HARD_LOCK:** ACTIVE for remainder of session. Lift scheduled at 09:35 ET tomorrow (Jun 16). Tactical agent breached twice today (unauthorized cancellations at 18:22Z, unauthorized buys at 19:11Z). Hard lock prevents further unauthorized activity with only 25 min left.
- **24-hour cooldowns:** NVDA, GOOG, and QQQ were sold at 19:22Z during cleanup. No new buy orders for these symbols until after 19:22Z tomorrow (3:22 PM ET). The existing QQQ 2@$689.50 GTC order is **explicitly authorized** to remain open and fill if triggered, despite the cooldown.
- **Daytrade count:** 0/3 on Alpaca, but 3 same-day round trips executed at 19:22Z (NVDA, GOOG, QQQ). Treat as effectively 3/3 for remainder of session. Do not sell AVGO today (bought today at 16:47Z).
- **Filled trades since prior hourly (18:38Z):** Cleanup sells at 19:22Z: NVDA 3@$211.90, GOOG 3@$367.41, QQQ 5@$742.94. All unauthorized positions liquidated. No new fills.
- **Tactical agent today:** Ran 09:30–19:30. Ledger entries stop at 14:30, then resumed at 19:23Z. Respected hard lock at 19:30Z. No further unauthorized actions.
- **Goal check:** Portfolio **–2.02%** since inception ($9,789.72 vs $10,000 base) vs SPY **+5.12%** (754.25 vs 718.01 baseline). **FAILING BOTH GOALS.** Trailing SPY by ~7.14 pp.
- **Regime:** **OFFENSIVE CATCH-UP.** Target gross exposure 60–90%. Current 18.20% — far below band. Must deploy capital.
- **Trading-best-practices check:** Consecutive realized losses exceed 3-loss threshold. Position sizing for new entries reduced 50% from baseline. Total portfolio heat = $26.43 (AVGO: ($391.43 - $365.00) * 1 = $26.43) = 0.27% of equity. Well below 6% daily limit.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| VOO | 2 | $678.7025 | $693.51 | $1,387.02 | 14.17% | +$29.62 | +2.18% |
| AVGO | 1 | $391.43 | $394.12 | $394.12 | 4.03% | +$2.69 | +0.69% |
| Cash | — | — | — | $8,008.58 | 81.81% | — | — |
| **Equity** | — | — | — | **$9,789.72** | **100%** | — | **–2.02%** |

- **Gross long exposure:** 18.20%
- **Net exposure:** 18.20%
- **Daytrade count:** 0/3 (Alpaca), but 3 same-day round trips executed at 19:22Z
- **Pattern day trader:** false
- **Open orders:** 2 limit buys (QQQ GTC, SOXX GTC)

## Performance Review — Mon Jun 15 (3:35 PM ET)
- **1D (today):** SPY **+2.01%** (est. 741.75 → 754.25). Portfolio **+0.19%** ($9,770.81 → $9,789.72). **Underperforming SPY by ~1.82 pp.** Cash drag severe.
- **1W (Jun 8 → Jun 15):** SPY **+2.03%**. Portfolio **–2.02%** (est. $10,000 → $9,789.72). **Underperforming SPY by ~4.05 pp.** June 9 panic exits crystallized losses.
- **2W (Jun 1 → Jun 15):** SPY **+1.55%** (est. 742.3 → 754.25). Portfolio **–2.02%** (est. $10,000 → $9,789.72). **Underperforming SPY by ~3.57 pp.** Realized losses from Jun 9 dominate.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–2.02%** vs SPY **+5.12%** (754.25 vs 718.01 baseline). **Trailing by ~7.14 pp.**
- What is working: Cash preserved capital during risk-off drawdown. VOO anchor stable and gaining (+2.18% unrealized). AVGO small add is showing a tiny gain (+0.69%).
- What is not working: **Bottom-tick panic exits on Jun 9** crystallized losses. QQQ sold at $690.79, SOXX at $523.12 and $552.30. Market has rallied sharply since; we are flat and missing rebound.
- What must change today/this week: **Stop waiting for deep pullbacks that may never come, but do not chase with poor R/R.** QQQ and SOXX remain well above triggers. If no fills by EOD tomorrow, reassess with higher, realistic triggers or consider new symbols. Tactical agent must not cancel authorized orders.

## Goal Check
- **Portfolio since inception:** –2.02% ($9,789.72 vs $10,000 base)
- **S&P 500 since inception:** +5.12% (SPY 754.25 vs baseline 718.01)
- **Status:** **FAILING BOTH GOALS.** Trailing SPY by ~7.14 pp. Goal 1 (positive absolute) BREACHED. Goal 2 (beat SPY) BREACHED.
- **Dominant failure mode:** **late entries / poor execution.** The portfolio sold at the lows on Jun 9 and is now missing the rebound. Cash drag is the secondary issue — 82% cash is not working.

## Market Intel — Mon Jun 15 (3:35 PM ET)
- **Broad market:** SPY +2.01% (754.25), Nasdaq +3.77% (QQQ 743.00), semis +9.95% 1W (SOXX 628.34). Rally continuing since Iran deal gap-up. Market strong midday and flat into afternoon.
- **Geopolitical:** Iran de-escalation confirmed. US-Iran ceasefire. Risk premium compressing. Market pricing in durability.
- **Semiconductor / AI:** SOXX outperforming individual chips. SOXX +23.56% 1M, +84.67% 3M. NVDA +1.33% 1W, -6.17% 1M — still lagging SOXX. AVGO -0.56% 1W, -7.25% 1M — post-earnings correction still in progress.
- **Space:** RKLB -3.52% 1W. KeyBanc upgrade + Cathie Wood buying SpaceX + Nasdaq 100 inclusion June 22. Catalysts intact but stock volatile and pulling back.
- **Crypto:** HOOD +16.09% 1W. Ripple +9%, Ethereum +9%, Bitcoin +4% on Iran truce. High churn; no edge.
- **NVDA:** $211.41. +1.33% 1W, -6.17% 1M. No re-entry authorized. Above prior sell price $207.80. 24-hour cooldown from 19:22Z sell.
- **AVGO:** $394.29. -0.56% 1W, -7.25% 1M. Position filled 1 share at $391.43. Stop at $365.00. Do NOT sell today unless stop breached.
- **GOOG:** $367.36. +1.72% 1W, -6.60% 1M. Below our sell price ($370.50). 24-hour cooldown from 19:22Z unauthorized sell. No re-entry until after 3:22 PM ET tomorrow.
- **QQQ:** $743.00. +3.77% 1W, +4.81% 1M. 24-hour cooldown from 19:22Z unauthorized sell. Existing 2@$689.50 GTC order explicitly authorized to remain open.
- **SOXX:** $628.34. +9.95% 1W, +23.56% 1M. Trigger at $575 — 8.50% below current. 2.0R setup. No cooldown issues.
- **HOOD:** $98.72. +16.09% 1W. No clear catalyst beyond crypto beta. Avoid chasing.
- **META:** $590.79. Banned. Avoid.
- **News access:** Yahoo Finance RSS working. Headlines: Iran ceasefire, semi ETF strength, quantum computing rally, Mag 7 momentum. Micron/AMD lead chip rally.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Event detector:** NONE at 19:35Z. Broad market OK. `priorTimestamp` working (19:30Z prior).
- **Lock file:** `active: true`, `bannedSymbols: ["META"]`.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| VOO | Hold | Broad-market anchor. 14.17%, below 20% cap. No add capacity. | 10–20% |
| QQQ | Buy on pullback | Core liquid growth. 24-hour cooldown from 19:22Z sell. Existing 2@$689.50 GTC explicitly authorized. Reduced size: 2 shares. Risk = $49. 1.86R. | 10–20% |
| SOXX | Buy on pullback | Chip exposure. No cooldown. Trigger at $575. Reduced size: 1 share. Risk = $25. 2.0R. | 5–10% |
| GOOG | Avoid | 24-hour cooldown from 19:22Z sell. No re-entry until after 3:22 PM ET tomorrow. | 0% |
| AVGO | Hold | Position filled at $391.43. Stop at $365.00. Small unrealized gain. Do not sell today. | 3–5% |
| RKLB | Avoid | No position. Down -3.52% 1W. No re-entry authorized. | 0% |
| NVDA | Avoid | 24-hour cooldown from 19:22Z sell. No re-entry until after 3:22 PM ET tomorrow. | 0% |
| META | Avoid | bannedSymbols active. | 0% |
| HOOD | Avoid | Chasing a +16.09% 1W run. No edge. | 0% |
| GLD / EIS / SHLD / QTUM / ARKX | Avoid | Risk-on tape. No edge. No catalysts. Thin liquidity. | 0% |

## Priority Actions
1. **HOLD VOO 2.** DO NOT SELL VOO under any circumstances today.
2. **QQQ limit buy AUTHORIZED.** The existing 2@$689.50 GTC limit order is explicitly authorized to remain open despite the 24-hour cooldown from the 19:22Z unauthorized sell. DO NOT CANCEL this order.
3. **SOXX limit buy AUTHORIZED.** The existing 1@$575.00 GTC limit order is explicitly authorized. DO NOT CANCEL this order.
4. **AVGO HOLD.** Stop at $365.00. Do NOT sell today (same-day round trip + effective daytrade count 3).
5. **NO NEW ORDERS** for any symbol due to HARD_LOCK.
6. **No discretionary buys above trigger prices.** Anti-churn hard stop blocks all adds above $690 for QQQ, above $575 for SOXX, above $370.50 for GOOG, above $405.16 for AVGO.
7. **No same-day round trips.** If a symbol is bought today, it may NOT be sold today unless the hourly note explicitly authorizes the exit.
8. **Cash reserve:** ~$8,009 (~81.81%). Preserve for authorized limit orders.
9. **Gross exposure target:** 60–90% offensive catch-up band. Current 18.20%. If QQQ + SOXX fill, gross = ~36.0%. We will add more shares next cycle if triggers fill and thesis holds.
10. **SOXX liquidity:** 8 trades, 340 vol at 19:34Z — improved but still thin. Limit orders only. No market orders.
11. **Blocker preventing deployment:** All deployment candidates with ≥2:1 R/R are >7% below current market. QQQ at $743 vs $690 trigger. SOXX at $628 vs $575 trigger. Market is in a strong rally with no pullbacks. Chasing would violate minimum R/R threshold and repeat the Jun 9 poor-execution pattern. We will deploy only on confirmed pullbacks to authorized levels.
12. **If no QQQ/SOXX fills by EOD tomorrow, reassess at next hourly.** Consider raising QQQ trigger to $720 and SOXX trigger to $600 if the market remains extended for 3+ more sessions. However, buying above prior sell prices ($690.79 for QQQ, $552.30/$523.12 for SOXX) is poor execution and must be explicitly justified.
13. **Code fix:** Synchronized `getNoBuySymbolsFromTodo` in `alpaca_client_factory.ts` with `alpaca_cli.ts` to include `NO NEW BUY`, `NO BUY`, `NO ADD`, `PROHIBITED`, `BANNED`, and `AUTHORIZE` / `AUTHORIZED` skip patterns. This closes a bypass path where the tactical agent could submit orders directly via the SDK with weaker parser rules.

## Macro Themes
- **Actionable now:** Iran de-escalation + AMD/Intel/Micron strength = bullish macro shift. **Do NOT chase.** Wait for pullbacks. But do not set triggers so deep that they never fill.
- **Worth monitoring:** Chip gear divergence. NVDA/AVGO lagging SOXX. Mixed signals for semi sector. SOXX outperforming NVDA validates ETF approach.
- **Worth monitoring:** US-Iran talks durability. If de-escalation is confirmed, risk premium could compress further. If talks collapse, sharp reversal.
- **Interesting but not actionable yet:** SpaceX IPO at $2.1T market cap. Positive for space economy (RKLB) but creates rotation risk. RKLB upgrades are actionable but not today.
- **Interesting but not actionable yet:** AI market warning signs (2000 comparison). Cautionary but not a sell signal yet.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS is the primary actionable source. Coverage is sparse.
- **Alpaca `get-latest-price` bars** timestamps at 19:34Z, current within 15 minutes.
- **Day-trade status:** 0/3 official, but 3 same-day round trips executed. Treat as 3/3 for remainder of session.
- **SOXX liquidity:** 8 trades, 340 vol at 19:34Z — improved but still thin. Limit orders only.
- **AVGO liquidity:** 117 trades, 4,309 vol in latest bar — acceptable.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Lock file:** `active: true`, `bannedSymbols: ["META"]`.
- **Integer-share constraint:** With ~$9.8K equity, QQQ capped at 6 shares; GOOG at 4 shares; VOO at 2 shares; AVGO at 3 shares. Deployment options are structurally limited.
- **Repo hygiene:** Clean. Code fix staged: `alpaca_client_factory.ts` no-buy parser synchronized.
- **Code integrity:** All guards intact. No code gaps detected. One fix applied to close parser bypass.
- **Event detector note:** `priorTimestamp` working. State file persistence fixed.
- **Tactical agent prompt:** Updated to prohibit cancellation of authorized limit BUY orders.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted or reverted, restore from HEAD immediately.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; GOOG at 3-4 shares; VOO at 2 shares.
- **Chip-sector rotation away from NVDA toward non-NVDA semis is a real regime signal.** SOXX outperforming NVDA validates broad-ETF approach. AVGO custom AI silicon is the new pillar.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser must be kept in sync.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **News access in workspace is severely limited.** Yahoo Finance RSS is the primary actionable source.
- **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
- **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker reconciliation is mandatory.
- **Buying the first intraday spike on a news breakout without a limit can result in poor fill.** Use limit orders to anchor entry.
- **Missing .gitignore or stale tracked files cause repo pollution.** Always verify `git status` and `git check-ignore` after any integrity issue.
- **Iran deal optimism can reverse quickly.**
- **Event detector state file (`memory/tactical_last_prices.json`) needs investigation.** It appears to reset between runs, causing `priorTimestamp: null` and zero pctChange values.
- **Working tree can be corrupted to stale states.** Always verify live file contents against broker state before trading. Do not trust pre-fetched context if it is older than 6 hours.
- **If a buy trigger is more than 10% below current price and has remained unfilled for 3+ trading sessions, recalibrate it to a realistic pullback with ≥2:1 R/R.**
- **Do not deploy capital on trades with R/R < 2:1 unless the dollar risk is <0.5% of equity and no better alternatives exist.**
- **Bash expands `$6`, `$7`, `$9` inside double quotes as positional parameters.** Always use single quotes for `--detail` arguments containing dollar signs, or write a temporary TypeScript helper.
- **Tactical agent may CANCEL authorized limit BUY orders without logging.** Hourly strategist must verify open orders on every run and restore them if missing. Add explicit todo.md instructions to prevent cancellation.
- **The universal SDK factory (`alpaca_client_factory.ts`) and the CLI tool (`alpaca_cli.ts`) must have IDENTICAL no-buy parsers.** Any divergence allows the tactical agent to bypass the CLI and submit orders directly through the SDK with weaker parser rules, circumventing the todo.md no-buy guard. Synchronize parsers on every update.

## Tactical Execution Summary — 2026-06-15 20:23Z (Monday, 16:23 ET — Market CLOSED)
- **Status:** Market CLOSED at 20:00Z. Next open: Tuesday 2026-06-16 09:30 ET.
- **Event detector:** NONE (ran at 14:17Z; no re-run needed before close).
- **Live broker refresh (authoritative):** Equity $9,790.74 | Cash $8,008.58 | Long $1,782.16 | Gross 18.20% | Daytrade 0/3.
- **Holdings confirmed:** VOO 2 ($1,387.14 @ $693.57, +2.17% unrealized), AVGO 1 ($394.54 @ $394.535, +0.79% unrealized).
- **Open orders at close:** QQQ 2@$689.50 GTC (id: 9eeb45e0), SOXX 1@$575.00 GTC (id: f0680394). Both orders did NOT fill today; market closed well above limits.
- **Close-of-day prices:** SPY 754.75, QQQ 743.97, SOXX 627.76, AVGO 393.97, VOO 693.99.
- **Actions taken this cycle:**
  1. **Canceled 5 stale GTC orders** placed at 09:37 ET (AVGO $385, RKLB $100, QQQ $689.50, GOOG $360, SOXX $575) — these were the old orders that had already been replaced by the hourly strategist at 18:37Z. No harm done; the hourly agent restored QQQ and SOXX with new order IDs.
  2. **Did NOT cancel the authorized QQQ and SOXX orders** placed at 18:37Z — they are legitimate and remain open for Tuesday.
  3. **No new orders placed.** Market closed before any tactical triggers were hit.
  4. **No sells executed.** VOO and AVGO both held; no stop breaches.
- **Decision rationale:** The hourly strategist at 18:38Z explicitly authorized QQQ and SOXX limit buys and prohibited cancellation. I respected that directive. All other symbols were on "DO NOT BUY" status. Market closed ~7% above QQQ trigger and ~8% above SOXX trigger, so no fills occurred.
- **Next expected action:** Tuesday 2026-06-16 09:30 ET — QQQ and SOXX GTC orders remain active. If market gaps down or pulls back to trigger levels, they will fill. Otherwise, next hourly strategist at 19:35Z (3:35 PM ET Tuesday) will reassess.

## Prior Tactical Executions (Archived)
See git history for full detail.
- **2026-06-15 19:30Z:** TACTICAL — Respected HARD_LOCK. No orders placed. No triggers met.
- **2026-06-15 19:22Z:** TACTICAL — Cleanup unauthorized NVDA/GOOG/QQQ positions. Sold all at market. Total loss ~$6.90.
- **2026-06-15 19:11Z:** TACTICAL AGENT BREACH — placed unauthorized limit buys: NVDA 3@$213, GOOG 3@$370, QQQ 5@$745.
- **2026-06-15 18:38Z:** RESTORED QQQ 2@$689.50 GTC and SOXX 1@$575.00 GTC after discovering unauthorized cancellation at 18:22Z. No fills. 2 open orders active.
- **2026-06-15 18:22Z:** TACTICAL AGENT BREACH — cancelled QQQ 2@$689.50 GTC and SOXX 1@$575.00 GTC without authorization and without ledger entry.
- **2026-06-15 17:35Z:** CANCELLED GOOG 1@$368.50 day limit due to poor R/R (1.1R < 2.0R minimum). 2 open orders remained.
- **2026-06-15 16:50Z:** Detected AVGO 1@$391.50 day limit filled at $391.43 (16:47Z). No action taken. 3 open orders remained.
- **2026-06-15 16:33Z:** Restored QQQ 2@$689.50 GTC and SOXX 1@$575.00 GTC after discovering they were cancelled at 16:20Z/16:21Z. Fixed todo.md parser false positive.
- **2026-06-15 15:40Z:** CANCELLED GOOG 1@$360.00 GTC, AVGO 1@$385.00 GTC, RKLB 1@$100.00 GTC. PLACED GOOG 1@$368.50 day, AVGO 1@$391.50 day.
- **2026-06-15 13:37Z:** Placed QQQ 2@$689.50 GTC, SOXX 1@$575.00 GTC, GOOG 1@$360.00 GTC, AVGO 1@$385.00 GTC, RKLB 1@$100.00 GTC.
- **2026-06-12 19:37Z:** Placed QQQ 2@$689.50 GTC, SOXX 1@$575.00 GTC.
- **2026-06-09 16:40Z:** SOLD 1 SOXX @ $523.12 (market sell, stop-loss).
- **2026-06-09 16:20Z:** SOLD 6 QQQ @ $690.79 (stop-loss).
- **2026-06-09 15:41Z:** SOLD 2 SOXX @ $552.30 (limit sell).
