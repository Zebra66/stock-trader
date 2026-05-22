# Hourly Macro Memory
*Updated 2026-05-22 16:35Z (Friday 12:35 PM ET). Market OPEN until 16:00 ET; CLOSED Monday May 26 (Memorial Day).*

## Current Regime
- **Regime:** **offensive catch-up** (60–80% band)
- **Why:** Portfolio is positive absolute (+0.54%) but trailing SPY by ~3.5 pp since inception. Gross exposure at 75.5%, inside the band. QQQ and SOXX holding relative strength, but NVDA and GOOG drifting lower. Fresh macro risks emerged at midday (new Fed Chair Warsh, $100+ oil, record-low consumer sentiment). Memorial Day weekend adds 3 days of headline risk. No forced deployment required.

## Repo Integrity
- **Status:** CLEAN. Working tree aligned with origin/main. No tracked files deleted or reverted. `memory/user_prompts.json` has staged additions (test prompt executed) — will be committed this cycle.

## Live Book (Alpaca)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $719.72 | $4,318.32 | 42.9% | +$110.34 | +2.62% |
| GOOG | 3 | $392.92 | $381.83 | $1,145.49 | 11.4% | –$33.27 | –2.82% |
| VOO | 2 | $673.925 | $686.91 | $1,373.82 | 13.7% | +$25.97 | +1.93% |
| NVDA | 1 | $223.68 | $216.83 | $216.83 | 2.2% | –$6.86 | –3.07% |
| SOXX | 1 | $533.95 | $538.59 | $538.59 | 5.4% | +$4.64 | +0.87% |
| Cash | — | — | — | $2,461.23 | 24.5% | — | — |
| **Equity** | — | — | — | **$10,054.27** | **100%** | — | **+0.54%** |

- **Gross long exposure:** 75.5%
- **Net exposure:** 75.5%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review
- **1D (today):** portfolio **+0.36%** ($10,017.84 → $10,054.27) vs SPY **+0.73%** (est. ~$741.70 → $747.15). Lagging SPY intraday due to GOOG/NVDA drag.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+0.54%** vs SPY **+4.06%** (baseline 718.01 → 747.15). Trailing by ~3.52 pp.
- **1W / 2W:** N/A due to insufficient clean history (high churn, no exact May 15 snapshot).
- What is working: QQQ relative strength (+2.62% unrealized, +0.73% intraday), VOO stable anchor (+1.93% unrealized, +0.59% intraday), SOXX breakout add holding gains (+0.87% unrealized, +2.65% intraday).
- What is not working: GOOG sentiment softening further (-2.82% unrealized, -0.43% intraday), NVDA post-earnings drift accelerating (-3.07% unrealized, -1.22% intraday).
- What must change: Continue to avoid churn. Let QQQ/SOXX momentum run. If NVDA breaks below $210, consider cutting on Tuesday (no daytrade if held overnight). Cash is appropriate for long-weekend macro risk.

## Goal Check
- **Portfolio since inception:** +0.54% ($10,054.27 vs $10,000 base)
- **S&P 500 since inception:** +4.06% (SPY 747.15 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~3.52 pp). **Goal 1 (positive absolute) is MET but marginally.**
- **Dominant failure mode:** **cash drag + late entries / poor execution.** NVDA entry at $223.68 was premature; now $216.83 (-3.07%). Early-week churn consumed daytrades and generated friction. Current composition is sound; discipline is to hold and let winners run.

## Market Intel — Friday 12:35 PM ET
- **SOXX breakout holding:** Current $538.59, +2.65% intraday from prior close $524.71. Breakout intact but volume thinning (2 trades, 98 vol last Alpaca bar at 16:34Z). Filled 1 share today at 9:47 AM ET at $533.95. **Cannot sell today** (anti-churn hard stop).
- **NVDA weakening:** $216.83, -1.22% intraday (worse than -0.70% at 11:35 AM). Fresh Yahoo Finance headline (Fri 12:19 PM ET): *"Former Goldman Sachs Executive Says NVDA Stock Lacks 'Oomph' Because SpaceX, OpenAI, Anthropic Mega-IPOs Are Stealing The Thunder."* This adds near-term sentiment headwind. Holding 1 share at 2.2% weight. No add. Cut candidate if breaks $210.
- **GOOG:** $381.83, -0.43% intraday. Core AI/cloud thesis intact but sentiment softening. Last bought May 20 at $383.60. Selling today would NOT be a same-day reversal, but small position and daytrade cost not worth it.
- **Macro regime shift — New Fed Chair Kevin Warsh:** MarketWatch midday headlines confirm Warsh is installed as Fed Chair (Fri 12:09–12:27 PM ET). Historically hawkish-leaning; "new-Fed-chair curse" + $100+ oil already testing markets. Treasury yields had been falling but could reverse if Warsh signals hawkishness.
- **Consumer sentiment all-time low:** May consumer sentiment hit fresh record low (Fri 12:05 PM ET headline). With stocks at record highs, this divergence is fragile. Could be politically driven, but still a recession-warning signal.
- **Oil $100+:** Inflationary pressure could constrain Fed easing even if growth slows.
- **US-Iran talks:** Still in "final stage" per Trump. Unresolved ahead of 3-day weekend.
- **SPY:** $747.15, near record highs, +0.73% today.
- **Memorial Day:** Markets closed Monday May 26. Next session open Tuesday 9:30 AM ET.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold | Core liquid growth. 42.9%, near 45% cap. Cannot add 1 share without breaching cap. | 36–45% |
| GOOG | Hold | Core thesis intact but sentiment soft. 3 shares / 11.4%. Adding 1 share would breach 15% cap (~15.2%). | 10–15% |
| VOO | Hold | Broad-market anchor. 13.7%. Adding 1 share would breach 20% non-QQQ ETF cap (~20.5%). | 10–20% |
| SOXX | Hold / Let run | Bought today at $533.95. 1 share / 5.4%. Strongest momentum in universe. **Do not sell today.** | 5–10% |
| NVDA | Hold / Cut below $210 | Post-earnings drift accelerating on fresh sentiment headwind. High conviction long-term but short-term weak. 1 share / 2.2%. **No add.** | 2–5% |
| AVGO | Avoid | bannedSymbols active. Weak 1W (-2.71%). No edge. | 0% |
| META | Avoid | bannedSymbols active. Weak 1M (-9.83%). No re-entry. | 0% |
| RKLB | Avoid | Parabolic +8.51% 1W. No edge. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends or thin liquidity. | 0% |

## Priority Actions
1. **HOLD current positions** through today's close and the Memorial Day weekend. Let SOXX breakout run.
2. **Do NOT add NVDA** — fresh sentiment headwind; no dip-buy without hourly authorization.
3. **Do NOT add QQQ / GOOG / VOO** — concentration caps would be breached.
4. **Do NOT add SOXX** at current price ($538+). Already extended; adding would push gross exposure to ~81% (above 80% band ceiling). Wait for pullback to $525–$528 on Tuesday.
5. **Cash reserve:** With ~$2,460 remaining and elevated macro risk (new Fed chair, $100 oil, record-low sentiment, Iran talks), cash serves as a hedge. Deployment Tuesday if tape is orderly.
6. **Tactical agent discipline:** SOXX was bought today. The tactical agent must NOT sell SOXX today under any circumstances.
7. **Reassess NVDA Tuesday:** If it opens below $210, authorize a cut. If it stabilizes, hold.

## Macro Themes
- **Actionable now:** SOXX semiconductor breakout — deployed 1 share today. Let momentum run. No further action before Tuesday.
- **Worth monitoring:** NVDA post-earnings drift + fresh IPO-thunder headline — support level near $212–$210. Break below $210 = potential cut on Tuesday.
- **Worth monitoring:** New Fed Chair Warsh regime — watch for hawkish signals that could spike yields and pressure tech multiples. If Warsh sounds dovish/moderate, risk-on rally could extend.
- **Worth monitoring:** $100+ oil + record-low consumer sentiment — stagflation-lite risk. If yields rise and growth fears intensify, shift to defensive band (30–50%) on Tuesday.
- **Worth monitoring:** US-Iran final-stage talks — if deal announced over weekend, risk-on rally could continue; if talks break down, oil spike and risk-off gap-down Tuesday.
- **Worth monitoring:** GOOG capex / AI monetization — sentiment soft despite durable fundamentals.
- **Interesting but not actionable yet:** AI-driven power demand. No pure-play in universe.
- **Interesting but not actionable yet:** Mega-IPO pipeline (SpaceX, OpenAI, Anthropic) — could divert tech capital but also signal risk appetite. No direct exposure.

## Universe Performance Snapshot (Yahoo Finance v8 as of ~12:35 PM ET May 22)
| Symbol | Latest | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|---|
| AVGO | 413.67 | –2.71% | –2.13% | +24.35% | +9.45% | +79.44% |
| EIS | 134.07 | +3.13% | +5.31% | +9.21% | +31.30% | +65.34% |
| GLD | 415.11 | –0.52% | –4.63% | –11.42% | +9.18% | +36.95% |
| GOOG | 381.94 | –2.89% | +13.09% | +21.29% | +19.93% | +122.08% |
| HOOD | 74.60 | –3.29% | –15.64% | –1.98% | –35.11% | +15.18% |
| META | 608.41 | –0.95% | –9.83% | –7.21% | –0.76% | –4.42% |
| NVDA | 216.82 | –3.77% | +7.07% | +14.22% | +18.77% | +63.23% |
| QQQ | 719.82 | +1.54% | +9.88% | +18.23% | +18.95% | +40.04% |
| QTUM | 154.51 | +7.99% | +18.63% | +31.74% | +47.52% | +77.76% |
| RKLB | 135.39 | +8.51% | +50.37% | +91.07% | +218.94% | +424.36% |
| SHLD | 65.10 | +4.43% | –7.38% | –13.73% | +6.53% | +18.28% |
| SOXX | 538.58 | +5.91% | +24.74% | +49.84% | +90.51% | +161.76% |
| VOO | 686.96 | +1.11% | +5.06% | +8.35% | +11.71% | +28.16% |
| ARKX | 35.35 | +4.46% | +4.71% | +8.60% | +32.20% | +73.45% |
| SPY | 747.15 | +1.08% | +5.05% | +8.37% | +11.73% | +28.14% |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback for performance snapshots.
- **News search** via Yahoo Finance RSS + MarketWatch RSS (Bing News / Google News RSS blocked in workspace). Coverage sufficient for macro pulse.
- **Alpaca `get-latest-price` bars** timestamps at 16:35Z (12:35 PM ET), acceptable freshness.
- **Day-trade status:** 1/3. SOXX bought today at 9:47 AM ET — **must not sell today.**
- **SOXX liquidity:** Alpaca last bar shows 2 trades, 98 vol at 16:34Z. Very thin; limit orders only.
- **Earnings dates:** Could not retrieve precise dates from Yahoo Finance API (crumb required). NVDA reported May 20; others likely July/August. No binary event in next 48 hours.

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
15. **Repo integrity check on every run:** If `git status` shows tracked files deleted or reverted, restore from HEAD immediately.
16. **Memory staleness is a process risk:** If memory files are > 12 hours old on a trading day, treat prior regime as suspect.
17. **Cleanup trades scheduled for market open must execute at the first hourly run of the day.**
18. **String-matching `HARD_LOCK` in todo.md is dangerous:** Use explicit regex parsing to avoid false positives.
19. **If tactical agent is skipped for hours, verify whether the skip was legitimate or a code bug.**
20. **Geopolitical semi risk is real:** U.S.-China summit failures + Samsung strike + US-Iran talks all create headline volatility.
21. **With ~$10K equity, concentration caps are extremely tight:** QQQ at ~$720 allows max 6 shares; GOOG at ~$382 allows max 3 shares; VOO at ~$688 allows max 2 shares. Deployment into new names requires either equity growth or selling existing positions.
22. **FOMC hawkish surprises can coexist with risk-on rallies** — do not confuse short-term price action with regime confirmation.
23. **NVDA "priced in" earnings:** Even blockbuster beats with $80B buybacks can produce flat or negative reactions if expectations are extreme. Entry timing matters.
24. **File reversion / workspace corruption is a recurring process risk:** Always verify file freshness against broker data before acting.
25. **Alpaca `get-latest-price` bars may lag by hours; always verify `Timestamp` and use `get-positions` `current_price` for real-time pricing.**
26. **Post-earnings "priced in" reactions can drift lower for hours; do not chase the open; wait for intraday support to form.**
27. **Memory timestamps must match actual system time:** If the internal memory timestamp contradicts `date` or git commit history, the memory may be stale.
28. **Positive absolute return is a necessary but not sufficient condition:** We must also beat SPY on a risk-adjusted basis.
29. **Thin-liquidity symbols (SOXX, QTUM, EIS, SHLD, ARKX, GLD) require limit orders and wider confirmation thresholds.**
30. **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
31. **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker position reconciliation is mandatory on every hourly run.
32. **Prompt-level "NO <SYMBOL>" directives in todo.md are NOT automatically code-enforced.** Both `bannedSymbols` array and todo.md parser must be kept in sync.
33. **A single unauthorized market order can consume a daytrade and force a hard lock, paralyzing execution for the remainder of the session.** Prevention is cheaper than cleanup.
34. **Pre-fetched context can be stale even when git HEAD is current.** Use `git show HEAD:<file>` or `git pull` for authoritative state.
35. **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md no-buy parser are active.
36. **Unit tests for code guards must account for ALL active defense layers.**
37. **Repo integrity restoration via `git pull` is preferred over manual file reconstruction** when remote has correct commits.
38. **Limit orders on breakout adds reduce slippage risk on thin names.** SOXX filled at $533.95 vs limit $534.00.
39. **Adding to a position that was bought the same session is a same-day round trip and is prohibited.** SOXX bought today → no sell today.
40. **Memorial Day / long weekend headline risk:** Holding elevated cash into a 3-day weekend with unresolved geopolitical talks is prudent risk management.
41. **MarketWatch headline risk is real-time sentiment:** A 10:40 AM ET bearish macro headline on NVDA/tech can pressure the tape within the same session. Factor into intraday decisions but do not overreact to single articles.
42. **With daytrade_count at 1/3, every potential sell of a same-day or recent position must be weighed against the cost of consuming a daytrade.** Small positions (e.g., NVDA at 2.2%) are rarely worth a daytrade to exit.
43. **New Fed Chair regime shifts can reprice the entire tape within hours.** Monitor Warsh's first communications closely; adjust band Tuesday if hawkish surprise emerges.
44. **Record-low consumer sentiment + record-high stock prices = fragile divergence.** Do not increase exposure into this divergence without a clear catalyst.

## Hourly Cycle Summary — 2026-05-22 16:35Z (Friday 12:35 PM ET)
- **Live broker refresh:** Equity $10,054.27 | Cash $2,461.23 | Long $7,593.04 | Gross 75.5% | Daytrade 1/3.
- **Repo integrity:** Clean. `memory/user_prompts.json` staged with executed test prompt.
- **No unauthorized trades.** Positions unchanged since 9:47 AM ET: QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1.
- **SOXX add confirmed:** Bought 1 share at $533.95 at 9:47 AM ET. Now at $538.59 (+0.87% unrealized). **Anti-churn rule applies — cannot sell today.**
- **Market intel:** SOXX breakout intact (+2.65% intraday). NVDA weakening further ($216.83, -1.22% intraday) on fresh Goldman exec headline. GOOG drifting ($381.83, -0.43%). SPY near record highs ($747.15). New macro risks emerged midday: Kevin Warsh installed as Fed Chair, oil >$100, consumer sentiment all-time low. Memorial Day weekend ahead.
- **Goal check:** Goal 1 MET (+0.54% absolute). Goal 2 off track (trailing SPY by ~3.52 pp).
- **Regime:** Offensive catch-up with 60–80% band (currently 75.5%).
- **Orders placed this cycle:** NONE.
- **No code changes. No prompt changes.**
- **Next expected action:** 13:35 PM ET hourly — reassess macro risk (Warsh, oil, sentiment), monitor NVDA support, watch for any late-day selling into the weekend.
