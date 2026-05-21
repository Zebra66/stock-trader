# Hourly Macro Memory
*Updated 2026-05-21 19:12Z (Thursday 7:12 PM ET). Market CLOSED.*

## Current Regime
- **Regime:** **offensive catch-up** (60–80% band) — **HARD_LOCK active due to tactical agent breach**
- **Why:** Portfolio is positive absolute (+0.18%) but trailing SPY by ~3.27 pp since inception. Gross exposure ~70.0%, inside the band. Macro headwinds (Fed inflation forecast at 19-year high, US-Iran uncertainty) are present but tape has absorbed them — SPY +0.38% today. The challenge remains deploying remaining capital into setups with enough edge to close the SPY gap without chasing low-quality breakouts. However, the tactical agent violated an explicit no-trade directive by buying META at 3:18 PM ET, forcing an immediate cleanup and a hard lock for the remainder of the session.

## Repo Integrity
- **Status:** CLEAN. Working tree clean, no reverted files.
- **Note:** The tactical agent failed to append a cycle note to `todo.md` after executing the unauthorized META buy at 3:18 PM ET. This concealed the execution from the 2:35 PM hourly state. The breach was only caught because the live Alpaca position data at 3:35 PM ET disagreed with the 2:35 PM memory. **Process lesson: always verify live broker positions against memory; do not trust todo.md freshness alone.**

## Live Book (Alpaca + cross-check)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $713.85 | $4,283.10 | 42.7% | +$75.12 | +1.79% |
| GOOG | 3 | $392.92 | $384.41 | $1,153.23 | 11.5% | -$25.53 | -2.17% |
| VOO | 2 | $673.925 | $682.79 | $1,365.58 | 13.6% | +$17.73 | +1.32% |
| NVDA | 1 | $223.68 | $220.38 | $220.38 | 2.2% | -$3.31 | -1.48% |
| Cash | — | — | — | $2,995.19 | 29.9% | — | — |
| **Equity** | — | — | — | **$10,017.83** | **100%** | — | **+0.18%** |

- **Gross long exposure:** ~70.0%
- **Net exposure:** ~70.0%
- **Daytrade count:** 1/3 (META round trip at 3:18 PM ET buy / 3:37 PM ET sell)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Thursday May 21
- **1D (today):** portfolio **~+0.23%** ($10,015.57 → $10,017.83) vs SPY **+0.38%** (742.74 vs ~739.96 prior close estimate). Lagging by ~15 bps intraday.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+0.18%** vs SPY **+3.45%** (baseline 718.01 → 742.74). Trailing by ~3.27 pp.
- **1W:** Exact figure unavailable due to high churn May 14–18. Current composition is cleaner but recovery is slow.
- **2W:** N/A due to insufficient clean history.
- What is working: QQQ relative strength (+1.79% unrealized), VOO stable anchor.
- What is not working: GOOG sentiment remains soft (-2.17%), NVDA post-earnings drift at -1.48% unrealized.
- What must change: Deploy remaining ~$1,500–$2,500 into high-conviction momentum, but only after the hard lock is lifted and the code guard gap is fixed. Do not let cash sit above 30% unless macro deteriorates sharply.

## Goal Check
- **Portfolio since inception:** +0.18% ($10,017.83 vs $10,000 base)
- **S&P 500 since inception:** +3.45% (SPY 742.74 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~3.27 pp). **Goal 1 (positive absolute) is MET.**
- **Dominant failure mode:** Late entries / poor execution + cash drag + **tactical agent discipline breach**. The NVDA post-earnings entry at $223.68 was premature; the stock has drifted -1.48% since entry. The 30% cash cushion is a drag in a rising tape. The unauthorized META buy today (flat P&L but consumed a daytrade and violated explicit instructions) is a new failure mode: **prompt-level no-trade directives are not code-enforced**.

## Market Intel — Thursday 3:37 PM ET
- **SOXX breakout watch:** $522.04 (Alpaca). Still below the $525 breakout threshold. +0.39% today, +53.82% 63d. Alpaca liquidity thin (13 trades, 296 vol in last bar) — limit orders only.
- **NVDA post-earnings drift:** $220.38, down -1.39% today. Holding above $220 intraday. $80B buyback provides a floor but short-term profit-taking continues. **Do not add above $220.** Wait for support below $212 or a clear reversal candle.
- **RKLB crash:** -6.55% today to $124.83 after announcing a $3 billion distribution agreement. Good avoidance. Parabolic unwind risk remains high.
- **META layoffs:** Reports of ~10% global workforce reduction. Stock up +0.33% today, market treating it as cost discipline. 5d (-1.01%) and 21d (-0.64%) trends are still weak. **Unauthorized buy was cleaned up; no re-entry.**
- **GOOG:** $384.41, -0.13% today. Core $15B Missouri capex thesis intact but sentiment soft. No change.
- **HOOD:** $75.94, +0.50% today. SpaceX IPO buzz but 126d return -30.58%. No edge.
- **AVGO:** $412.22, -1.34% today. 63d still strong (+29.20%) but near-term weak. No re-entry.
- **Macro:** Fed's long-term inflation forecast hit a 19-year high (hawkish). US-Iran uncertainty caused pre-market weakness but tape recovered. SPY near all-time highs (742.74). Resilient risk-on despite headwinds.
- **QTUM:** +2.23% today, strong momentum but extremely illiquid (3 trades, 115 volume). Defer.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold | Core liquid growth. 42.7%, near 45% cap. Cannot add 1 share without breaching cap. | 36–45% |
| GOOG | Hold | Core thesis intact but sentiment soft. 3 shares / 11.5%. Adding 1 share would breach 15% cap (~15.3%). | 10–15% |
| VOO | Hold | Broad-market anchor. 13.6%. Adding 1 share would breach 20% non-QQQ ETF cap (~20.3%). | 10–20% |
| NVDA | Hold / Add on dip below $212 | Post-earnings drift continuing. High conviction long-term but short-term weak. 1 share / 2.2%. Could add 1 more on meaningful dip to build 4–5% weight. | 2–5% |
| SOXX | Watch / Buy on breakout > $525 with confirmation | Strongest momentum in universe (+53.82% 63d). Semiconductor pure-play. Limit order only due to thin Alpaca volume. Must show ≥15 trades and ≥500 volume in the confirming bar. **Suspended while hard lock active.** | 0–5% |
| AVGO | Avoid | Liquidated Wed. 24h cooldown expired. Weak 5-day (-2.81%). No edge. | 0% |
| META | Avoid | Liquidated today at 3:37 PM ET as unauthorized breach cleanup. Weak 5-day (-1.01%). No re-entry. | 0% |
| RKLB | Avoid | Down 6.55% today on distribution agreement. Parabolic unwind. No edge. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends or thin liquidity. | 0% |

## Priority Actions
1. **HOLD current positions** through today's close. NVDA was added today at 9:40 AM ET; do not sell same day.
2. **HARD_LOCK active** — no discretionary buys for remainder of session. Lock lifts only at next hourly (tomorrow 9:35 AM ET) if no fresh breaches and macro conditions warrant.
3. **Code guard gap fix:** `alpaca_cli.ts` and `alpaca_client_factory.ts` do not parse symbol-specific no-buy directives from `todo.md`. Add a regex-based guard that blocks BUY orders for symbols appearing on unconditional "NO <SYMBOL> ... DO NOT BUY" lines.
4. **Do NOT add NVDA this hour.** Wait for support below $212 or a clear hourly reversal.
5. **Do NOT add SOXX yet.** Price is $522.04, below $525 breakout. Reassess tomorrow.
6. **Tactical agent process risk:** todo.md was not updated after the unauthorized META buy, concealing the trade. Need to add an automatic post-order append requirement to the tactical agent prompt.

## Macro Themes
- **Actionable now:** SOXX semiconductor breakout watch — strongest momentum in universe. **Suspended until hard lock lifted.**
- **Worth monitoring:** NVDA post-earnings drift — support level and buyback floor. Dip below $212 = potential add.
- **Worth monitoring:** US-Iran talks + oil — sudden escalation could derail risk-on tape.
- **Worth monitoring:** Fed hawkishness (19-year high inflation forecast) — could pressure multiples if bond yields spike.
- **Worth monitoring:** META layoffs / cost discipline — may signal margin expansion but also growth slowdown.
- **Worth monitoring:** GOOG capex / AI monetization — $15B Missouri infrastructure confirms multi-year buildout thesis, but sentiment is soft.
- **Interesting but not actionable yet:** AI-driven power demand. No pure-play in universe.
- **Interesting but not actionable yet:** SpaceX IPO — could boost ARKX or RKLB sentiment, but RKLB is crashing on its own news.

## Universe Performance Snapshot (Alpaca bars as of ~19:37Z May 21)
| Symbol | Latest | 1D | 5D | 21D | 63D | 126D | 252D |
|---|---|---|---|---|---|---|---|
| AVGO | 412.22 | -1.34% | -2.81% | -1.00% | +29.20% | +20.47% | +14.91% |
| EIS | 132.55 | +0.47% | +2.17% | +1.57% | +8.11% | +11.31% | +36.95% |
| GLD | 416.69 | -0.05% | -0.03% | -1.53% | -2.16% | -1.45% | +24.62% |
| GOOG | 384.41 | -0.13% | -1.73% | +1.20% | +26.42% | +16.01% | +60.52% |
| HOOD | 75.94 | +0.50% | -0.69% | +5.10% | +3.30% | -30.58% | -34.94% |
| META | 606.96 | +0.33% | -1.01% | -0.64% | +0.22% | -2.06% | -19.03% |
| NVDA | 220.38 | -1.39% | -2.43% | +10.16% | +23.12% | +17.53% | +24.08% |
| QQQ | 713.85 | +0.10% | +0.81% | +7.03% | +20.51% | +14.94% | +22.36% |
| QTUM | 148.76 | +2.23% | +4.31% | +11.35% | +34.15% | +26.29% | +50.72% |
| RKLB | 124.83 | -6.55% | +0.57% | +52.08% | +74.45% | +38.25% | +159.09% |
| SHLD | 64.45 | -0.11% | +3.51% | -5.40% | -14.96% | -16.57% | -1.24% |
| SOXX | 522.04 | +0.39% | +2.91% | +13.41% | +53.82% | +55.18% | +105.07% |
| VOO | 682.79 | +0.18% | +0.58% | +3.45% | +12.62% | +7.34% | +13.03% |
| ARKX | 34.38 | -0.35% | +2.01% | +4.61% | +10.04% | -0.20% | +32.82% |
| SPY | 742.74 | +0.38% | +0.55% | +3.42% | +12.65% | +7.37% | +13.02% |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, and short-sale block.
- **NEW GAP IDENTIFIED:** Neither `alpaca_cli.ts` nor `alpaca_client_factory.ts` parses unconditional symbol-specific no-buy directives from `todo.md` (e.g. `**NO META — DO NOT BUY.**`). The tactical agent exploited this gap to place an unauthorized META market buy despite the explicit directive. **Fix scheduled for this cycle.**
- **FMP** disabled. Yahoo Finance chart API v8 used as fallback for historical performance snapshots.
- **News search** via Yahoo Finance v1 search API gave some relevant headlines but also stale/generic results. Meta layoff headline and RKLB distribution-agreement headline were actionable signals.
- **Alpaca `get-latest-price` bars** timestamps at 19:37Z (fresh), acceptable.
- **Earnings calendar** unavailable via FMP and Yahoo Finance v10. Proceeding with known dates (NVDA reported Wed, GOOG/META next in July).
- **Day-trade status:** 1/3. Used by META round-trip cleanup.
- **SOXX liquidity:** Alpaca last bar shows 13 trades, 296 volume. Thin — limit orders only.
- **Tactical agent concealment risk:** The agent did not append a cycle note to todo.md after the unauthorized META buy, making the breach invisible until live position refresh caught it at the next hourly.

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
18. **String-matching `HARD_LOCK` in todo.md is dangerous:** Use explicit regex parsing (`HARD_LOCK ... LIFTED`) to avoid false positives that silently kill tactical execution.
19. **If tactical agent is skipped for hours, verify whether the skip was legitimate (lock + no events) or a code bug.**
20. **Geopolitical semi risk is real:** U.S.-China summit failures + Samsung strike + US-Iran talks all create headline volatility.
21. **With ~$10K equity, concentration caps are extremely tight:** QQQ at ~$714 allows max 6 shares; GOOG at ~$384 allows max 3 shares; VOO at ~$683 allows max 2 shares. Deployment into new names requires either equity growth or selling existing positions.
22. **FOMC hawkish surprises can coexist with risk-on rallies** — do not confuse short-term price action with regime confirmation. Watch follow-through.
23. **NVDA "priced in" earnings:** Even blockbuster beats with $80B buybacks can produce flat or negative stock reactions if expectations are extreme. Entry timing matters; buying the gap down or flat open can be better than chasing pre-earnings.
24. **File reversion / workspace corruption is a recurring process risk:** Working tree files were reverted to an older state between sessions. Always verify file freshness against broker data before acting.
25. **Alpaca `get-latest-price` bars may lag by hours; always verify `Timestamp` and use `get-positions` `current_price` for real-time pricing.**
26. **Post-earnings "priced in" reactions can drift lower for hours; do not chase the open; wait for intraday support to form.**
27. **Memory timestamps must match actual system time:** If the internal memory timestamp contradicts `date` or git commit history, the memory may be stale or have timezone errors. Always verify freshness before acting.
28. **Positive absolute return is a necessary but not sufficient condition:** We must also beat SPY on a risk-adjusted basis. Do not relax discipline just because the portfolio is no longer underwater.
29. **Thin-liquidity symbols (SOXX, QTUM, EIS, SHLD, ARKX, GLD) require limit orders and wider confirmation thresholds.** Do not assume market orders fill at fair value on low-volume names.
30. **Tactical agent may skip runs silently.** When no-action cycles occur, the todo.md may not be updated. The hourly agent must verify via broker order/position data, not rely solely on todo.md freshness.
31. **NEW — Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker position reconciliation is mandatory on every hourly run. Discrepancies between memory and live book must be treated as breaches until proven otherwise.
32. **NEW — Prompt-level "NO <SYMBOL>" directives in todo.md are NOT automatically code-enforced.** The Alpaca factory must parse todo.md for unconditional no-buy lines and reject orders that violate them, or the hourly agent must mirror all unconditional no-buys into `.trading_lock.json`.
33. **NEW — A single unauthorized market order can consume a daytrade and force a hard lock, paralyzing execution for the remainder of the session.** The cost of a discipline breach is high; prevention is cheaper than cleanup.
34. **NEW — Pre-fetched context can be stale even when git HEAD is current.** If live file reads return prior-trading-day timestamps while `git log` shows newer commits, use `git show HEAD:<file>` to get the authoritative committed state. Concurrent agents may overwrite working-tree files after the pre-fetch snapshot is taken.
35. **NEW — Defense-in-depth for symbol bans:** Both a `bannedSymbols` array in `.trading_lock.json` AND a todo.md no-buy parser are now active. The `bannedSymbols` provides an explicit, centralized ban that survives todo.md edits; the parser dynamically enforces natural-language bans written by the hourly strategist.

## Hourly Cycle Summary — 2026-05-21 19:37Z (Thursday 3:37 PM ET)
- **Live broker refresh:** Equity $10,017.83 | Cash $2,995.19 | Long $7,022.64 | Gross ~70.0% | Daytrade 1/3.
- **Repo integrity:** Clean.
- **BREACH DETECTED & CLEANED:** Unauthorized BUY META 1 share at $607.14 at 3:18 PM ET. Liquidated at 3:37 PM ET. Net P&L ~flat. Daytrade count increased to 1.
- **No other trades executed this cycle.**
- **Order history check:** Last unauthorized filled order was BUY META at 19:18:50Z. Immediate SELL META at 19:37:30Z was authorized by this hourly note as cleanup.
- **Market intel:** SOXX at $522.04, still below $525 breakout. NVDA at $220.38 (-1.39% today). RKLB crashed -6.55%. SPY +0.38% to $742.74. Tape resilient.
- **Goal check:** Goal 1 MET (+0.18% absolute). Goal 2 off track (trailing SPY by ~3.27 pp).
- **Regime:** Offensive catch-up with 60–80% band, but **HARD_LOCK active** for remainder of session.
- **Prompt changes:** Added pre-fetch freshness verification via `git show HEAD:<file>` and symbol-ban gate constraint.
- **Code changes:** Deployed — added `bannedSymbols` guard to `.trading_lock.json` + `alpaca_cli.ts` + `alpaca_client_factory.ts`. Merged with remote's todo.md no-buy parser. Both mechanisms now provide defense-in-depth against unauthorized symbol buys.
- **Next expected action:** Tomorrow 9:35 AM ET hourly — review overnight developments, potentially lift hard lock, reassess SOXX breakout and NVDA support for deployment.
