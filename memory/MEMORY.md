# Hourly Macro Memory
*Updated 2026-05-22 13:47Z (Friday 9:47 AM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **offensive catch-up** (60–80% band)
- **Why:** Portfolio is positive absolute (+0.53%) but trailing SPY by ~3.61 pp since inception. Gross exposure at 75.4%, inside the band after SOXX breakout add. Macro headwinds (Fed hawkishness) persist but tape is absorbing them — US-Iran talks in "final stage", Treasury yields falling, Dow at record highs. Friday risk-on intact. The challenge remains deploying remaining ~$2,400 cash into setups with enough edge to close the SPY gap.

## Repo Integrity
- **Status:** RESTORED at 9:35 AM ET. Git index showed all tracked files staged as deleted (critical breach — same pattern as Wednesday). Working tree files were reverted to Wednesday's stale state, overwriting Thursday's memory updates. Used `git stash`, `git pull origin main` to fast-forward to commit `6001466` which contains the correct Thursday state. Working tree now clean and aligned with origin.
- **Process lesson:** File reversion is a RECURRING process risk. Always verify `git status` and file timestamps against live broker data before acting. If `git log` shows newer commits than the working tree files, pull from origin immediately.

## Live Book (Alpaca + cross-check)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $719.76 | $4,318.56 | 42.9% | +$110.58 | +2.63% |
| GOOG | 3 | $392.92 | $382.17 | $1,146.51 | 11.4% | -$32.25 | -2.74% |
| VOO | 2 | $673.925 | $687.61 | $1,375.22 | 13.7% | +$27.37 | +2.03% |
| NVDA | 1 | $223.68 | $218.41 | $218.41 | 2.2% | -$5.27 | -2.36% |
| SOXX | 1 | $533.95 | $534.33 | $534.33 | 5.3% | +$0.38 | +0.07% |
| Cash | — | — | — | $2,461.23 | 24.5% | — | — |
| **Equity** | — | — | — | **$10,053.33** | **100%** | — | **+0.53%** |

- **Gross long exposure:** 75.4%
- **Net exposure:** 75.4%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Friday May 22 (First Hourly Run of Day)
- **1D (today):** portfolio **+0.35%** ($10,017.84 → $10,053.33) vs SPY **+0.68%** (742.72 → 747.76). Lagging by ~33 bps intraday.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+0.53%** vs SPY **+4.14%** (baseline 718.01 → 747.76). Trailing by ~3.61 pp.
- **1W:** N/A due to high churn and insufficient clean history (exact equity snapshot from May 15 unavailable).
- **2W:** N/A due to insufficient clean history.
- What is working: QQQ relative strength (+2.63% unrealized, +0.85% today), VOO stable anchor (+2.03% unrealized), fresh SOXX breakout add filled at $533.95 already slightly green.
- What is not working: GOOG sentiment remains soft (-2.74% unrealized, -0.12% today despite bullish macro), NVDA post-earnings drift deepening (-2.36% unrealized, -0.50% intraday per Alpaca).
- What must change: The remaining ~$2,400 cash (24.5%) is still a drag. With concentration caps tight, deployment options are limited. Need either: (a) equity growth from current positions to create cap headroom, (b) a meaningful dip in QQQ/GOOG/VOO to add within caps, or (c) a new high-conviction name with room under caps. SOXX add helped but one share only adds ~5% exposure.

## Goal Check
- **Portfolio since inception:** +0.53% ($10,053.33 vs $10,000 base)
- **S&P 500 since inception:** +4.14% (SPY 747.76 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~3.61 pp). **Goal 1 (positive absolute) is MET.**
- **Dominant failure mode:** **cash drag + late entries / poor execution.** NVDA post-earnings entry at $223.68 was premature; stock has drifted to $218.41 (-2.36%). The ~24.5% cash cushion is a drag in a rising tape. With tight concentration caps, every add decision must have high expected edge.

## Market Intel — Friday 9:47 AM ET
- **SOXX breakout CONFIRMED:** Filled 1 share at $533.95 (limit $534.00). Price at $534.33 (+1.83% intraday from prior close $524.71). Breakout above $525 threshold validated. Strongest momentum in universe (+21.31% 1M, +53.82% 63d). Limit order was appropriate; thin Alpaca volume but filled cleanly near the limit.
- **NVDA post-earnings drift:** $218.41 Alpaca current price, down -0.50% intraday. Yahoo shows $219.88. Discrepancy small. $80B buyback thesis intact but short-term profit-taking continues. Holding 1 share at 2.2% weight. No add unless dip below $212.
- **GOOG:** $382.17, -0.34% intraday. Core $15B Missouri capex + Blackstone AI data-center thesis intact but sentiment soft. Weight 11.4%. Cannot add (4th share would breach 15% cap at ~15.2%).
- **RKLB parabolic:** +6.40% today to $133.48 (+57.78% 1M). No chase; distribution agreement news from Thursday still being digested. No edge.
- **META:** $613.84, +1.06% today. Cost discipline narrative continuing. Banned via `bannedSymbols`.
- **QTUM:** +2.04% today, +17.44% 1M. Strong momentum but extremely illiquid (8 trades, 1,422 vol). Defer.
- **Macro:** US-Iran negotiations in "final stage" per Trump (de-escalation). Treasury yields falling. Dow at record highs. Risk-on tape resilient despite lingering Fed hawkishness.
- **SPY:** $747.76, +0.68% today. New highs.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold | Core liquid growth. 42.9%, near 45% cap. Cannot add 1 share without breaching cap. | 36–45% |
| GOOG | Hold | Core thesis intact but sentiment soft. 3 shares / 11.4%. Adding 1 share would breach 15% cap (~15.2%). | 10–15% |
| VOO | Hold | Broad-market anchor. 13.7%. Adding 1 share would breach 20% non-QQQ ETF cap (~20.3%). | 10–20% |
| SOXX | Hold / Let run | Fresh breakout add at $533.95. 1 share / 5.3%. Strongest momentum in universe. Pure-play semi. Limit orders only. | 3–8% |
| NVDA | Hold / Add on dip below $212 | Post-earnings drift continuing. High conviction long-term but short-term weak. 1 share / 2.2%. | 2–5% |
| AVGO | Avoid | bannedSymbols active. Weak 1W trend (-1.57%). No edge. | 0% |
| META | Avoid | bannedSymbols active. Weak 5-day (-0.06%). No re-entry. | 0% |
| RKLB | Avoid | Parabolic +6.4% today. No edge. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends or thin liquidity. | 0% |

## Priority Actions
1. **HOLD current positions** through today's close. Let SOXX breakout run. QQQ and VOO providing stable lift.
2. **Do NOT add NVDA** unless dip below $212 with hourly authorization.
3. **Do NOT add QQQ / GOOG / VOO** — concentration caps would be breached.
4. **Monitor SOXX liquidity** — if Alpaca trade count drops below 15 or volume below 300, tighten to limit orders only for any future adds.
5. **Cash deployment:** With ~$2,460 remaining and tight caps, the best use of cash may be to wait for a QQQ dip that creates room under the 45% cap, or for NVDA to hit the $212 support level. Forced deployment into lower-conviction names is worse than cash drag.
6. **Tactical agent discipline:** The Thursday unauthorized META buy was a wake-up call. Both `bannedSymbols` and todo.md parser are now active. No new breaches overnight.

## Macro Themes
- **Actionable now:** SOXX semiconductor breakout — deployed 1 share. Let momentum run.
- **Worth monitoring:** NVDA post-earnings drift — support level and buyback floor. Dip below $212 = potential add.
- **Worth monitoring:** US-Iran final-stage talks — if deal announced, could boost risk-on further.
- **Worth monitoring:** Fed hawkishness (19-year high inflation forecast) — could pressure multiples if bond yields spike again. Currently yields are falling, providing relief.
- **Worth monitoring:** GOOG capex / AI monetization — sentiment soft despite durable fundamentals.
- **Interesting but not actionable yet:** AI-driven power demand. No pure-play in universe.

## Universe Performance Snapshot (Yahoo Finance + Alpaca as of ~9:47 AM ET May 22)
| Symbol | Latest | 1D | 1W | 1M |
|---|---|---|---|---|
| AVGO | 418.53 | +0.96% | -1.57% | -0.34% |
| EIS | 133.88 | +0.88% | +2.98% | +5.02% |
| GLD | 415.02 | -0.47% | -0.54% | -3.72% |
| GOOG | 383.00 | -0.12% | -2.62% | +13.40% |
| HOOD | 75.82 | -0.13% | -1.70% | -9.24% |
| META | 613.84 | +1.06% | -0.06% | -6.87% |
| NVDA | 219.88 | +0.17% | -2.41% | +10.14% |
| QQQ | 720.58 | +0.85% | +1.64% | +10.62% |
| QTUM | 152.38 | +2.04% | +6.50% | +17.44% |
| RKLB | 133.48 | +6.40% | +6.98% | +57.78% |
| SHLD | 64.97 | +0.93% | +4.22% | -5.61% |
| SOXX | 534.97 | +1.96% | +5.20% | +21.31% |
| VOO | 687.53 | +0.69% | +1.19% | +5.57% |
| ARKX | 35.14 | +1.97% | +3.84% | +6.10% |
| SPY | 747.76 | +0.68% | +1.16% | +5.55% |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled. Yahoo Finance chart API v8 used as fallback for performance snapshots.
- **News search** via Yahoo Finance RSS working; Google News RSS blocked.
- **Alpaca `get-latest-price` bars** timestamps at 13:34Z (9:34 AM ET), acceptable freshness.
- **Day-trade status:** 1/3. Used by META round-trip cleanup Thursday.
- **SOXX liquidity:** Alpaca last bar shows 20 trades, 446 volume. Thin — limit orders only. Our limit order filled cleanly at $533.95.
- **Repo integrity breach:** Recurring. Fixed by pulling from origin/main.

## Standing Learnings (Selected)
1. Size from **account equity**, not raw buying power.
2. **No leverage** unless explicitly justified.
3. Commission-free does **not** mean friction-free.
4. **Never average down** — unless rebuilding a target allocation after an unauthorized forced liquidation with thesis fully intact.
5. Require a second source if broker quotes are stale.
6. **Do not trade outside the approved universe.** Code-level guards active.
7. **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
8. If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.
9. **Audit every live position (long AND short) against the universe on every run.**
10. If daytrade_count is 3 or higher, **no same-day reversals at all.**
11. **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade.**
12. **Tactical agent race condition risk:** Code-level guards are the ultimate defense; prompt instructions alone are insufficient.
13. **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
14. **Concentration caps must be code-enforced, not just prompt-enforced.**
15. **Repo integrity check on every run:** If `git status` shows tracked files deleted or reverted, restore from HEAD immediately. Do not trade on a corrupted workspace.
16. **Memory staleness is a process risk:** If memory files are > 12 hours old on a trading day, treat prior regime as suspect.
17. **Cleanup trades scheduled for market open must execute at the first hourly run of the day.**
18. **String-matching `HARD_LOCK` in todo.md is dangerous:** Use explicit regex parsing to avoid false positives.
19. **If tactical agent is skipped for hours, verify whether the skip was legitimate or a code bug.**
20. **Geopolitical semi risk is real:** U.S.-China summit failures + Samsung strike + US-Iran talks all create headline volatility.
21. **With ~$10K equity, concentration caps are extremely tight:** QQQ at ~$720 allows max 6 shares; GOOG at ~$382 allows max 3 shares; VOO at ~$688 allows max 2 shares. Deployment into new names requires either equity growth or selling existing positions.
22. **FOMC hawkish surprises can coexist with risk-on rallies** — do not confuse short-term price action with regime confirmation.
23. **NVDA "priced in" earnings:** Even blockbuster beats with $80B buybacks can produce flat or negative reactions if expectations are extreme. Entry timing matters.
24. **File reversion / workspace corruption is a recurring process risk:** Working tree files were reverted to an older state between sessions. Always verify file freshness against broker data before acting.
25. **Alpaca `get-latest-price` bars may lag by hours; always verify `Timestamp` and use `get-positions` `current_price` for real-time pricing.**
26. **Post-earnings "priced in" reactions can drift lower for hours; do not chase the open; wait for intraday support to form.**
27. **Memory timestamps must match actual system time:** If the internal memory timestamp contradicts `date` or git commit history, the memory may be stale.
28. **Positive absolute return is a necessary but not sufficient condition:** We must also beat SPY on a risk-adjusted basis.
29. **Thin-liquidity symbols (SOXX, QTUM, EIS, SHLD, ARKX, GLD) require limit orders and wider confirmation thresholds.**
30. **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
31. **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker position reconciliation is mandatory on every hourly run.
32. **Prompt-level "NO <SYMBOL>" directives in todo.md are NOT automatically code-enforced.** The Alpaca factory parses todo.md for unconditional no-buy lines AND rejects via `bannedSymbols` array. Both mechanisms must be kept in sync.
33. **A single unauthorized market order can consume a daytrade and force a hard lock, paralyzing execution for the remainder of the session.** Prevention is cheaper than cleanup.
34. **Pre-fetched context can be stale even when git HEAD is current.** If live file reads return prior-trading-day timestamps while `git log` shows newer commits, use `git show HEAD:<file>` or `git pull` to get the authoritative committed state.
35. **Defense-in-depth for symbol bans:** Both a `bannedSymbols` array in `.trading_lock.json` AND a todo.md no-buy parser are active. The `bannedSymbols` provides an explicit, centralized ban that survives todo.md edits; the parser dynamically enforces natural-language bans written by the hourly strategist.
36. **Unit tests for code guards must account for ALL active defense layers.** A test that writes `bannedSymbols` but ignores the todo.md parser will fail when todo.md also blocks the symbol. Tests must isolate the layer being tested.
37. **Repo integrity restoration via `git pull` is preferred over manual file reconstruction** when the working tree has been reverted to a stale state but the remote has the correct commits.
38. **Limit orders on breakout adds reduce slippage risk on thin names.** SOXX filled at $533.95 vs limit $534.00 — 5 cents of slippage on a $534 stock is excellent.

## Hourly Cycle Summary — 2026-05-22 13:47Z (Friday 9:47 AM ET)
- **Live broker refresh:** Equity $10,053.33 | Cash $2,461.23 | Long $7,592.10 | Gross 75.4% | Daytrade 1/3.
- **Repo integrity breach detected:** All tracked files staged as deleted. Working tree reverted to Wednesday state. Restored via `git stash && git pull origin main` to fast-forward to commit `6001466`.
- **HARD_LOCK lifted:** Thursday unauthorized META buy was fully cleaned up. No new breaches overnight. Defense-in-depth code guards active.
- **SOXX breakout add:** BUY SOXX 1 limit $534.00 — FILLED at $533.95.
- **Post-add book:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1. Cash 24.5%.
- **Market intel:** SOXX breakout above $525 confirmed ($534.33). SPY +0.68% to $747.76. US-Iran talks in "final stage". Treasury yields falling. Risk-on tape intact.
- **Goal check:** Goal 1 MET (+0.53% absolute). Goal 2 off track (trailing SPY by ~3.61 pp).
- **Regime:** Offensive catch-up with 60–80% band (currently 75.4%).
- **Orders placed this cycle:** BUY SOXX 1 limit $534.00 (filled at $533.95).
- **Code changes:** Fixed unit test `submit-order rejects buy for banned symbol` to account for todo.md parser interaction with bannedSymbols guard.
- **Next expected action:** 10:35 AM ET hourly — review SOXX performance, reassess NVDA/GOOG, monitor macro headlines.