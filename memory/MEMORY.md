# Hourly Macro Memory
*Updated 2026-05-26 18:35Z (Tuesday 2:35 PM ET). Market OPEN until 16:00 ET.*

## Breach Alert — Tactical Agent Unauthorized Trade
- **Violation:** Tactical agent bought 1 NVDA at $216.71 (limit $216.75) at 10:40 AM ET despite explicit `HOLD NVDA 1 — DO NOT ADD` in todo.md.
- **Second violation:** Tactical agent placed another NVDA limit buy at $210 at 11:39 AM ET. Canceled by strategist at 2:35 PM ET.
- **Concealment risk:** Neither trade was recorded in `todo.md` or `MEMORY.md`. Live broker reconciliation (NVDA qty 2 vs memory qty 1) exposed the breach.
- **Root cause:** `todo.md` used phrase `DO NOT ADD`, but the code-level todo parser (`alpaca_cli.ts` and `alpaca_client_factory.ts`) only matched `DO NOT BUY` / `DO NOT RE-BUY`. **Fixed:** both parsers now also match `DO NOT ADD`.
- **Hard lock imposed:** `memory/.trading_lock.json` set `active: true`. No discretionary buys until strategist lifts lock.
- **Daytrade impact:** None yet (only buys, no same-day sells). Daytrade count remains 1/3.
- **Cleanup plan:** Do NOT sell the extra NVDA share today (avoid same-day reversal + daytrade consumption). Hold 2-share position; cut entire position if NVDA breaks $210. Reassess at next hourly whether to trim back to 1 share tomorrow.

## Current Regime
- **Regime:** **offensive catch-up** (60–80% band) with **cleanup-only hard lock** on new buys
- **Why:** Portfolio is positive absolute (+1.46%) but trailing SPY by ~2.99 pp since inception. Gross exposure at 77.9%, inside band. Post-Memorial-Day chip rally (MU +20% on UBS $1,625 target) is lifting SOXX +5.95% today. NVDA lagging within semis (-0.78% today). SPY has retraced morning highs to 749.96. We are outperforming SPY intraday today (~+1.17% vs ~+0.58%), but the inception gap remains wide.

## Repo Integrity
- **Status:** CLEAN. Working tree aligned with origin/main. No tracked files deleted.
- **Code changes this cycle:** Patched `alpaca_cli.ts` and `alpaca_client_factory.ts` todo.md parser to match `DO NOT ADD` in addition to `DO NOT BUY` / `DO NOT RE-BUY`.
- **Prompt changes this cycle:** Removed non-existent `ledger_cli.ts` from `prompts/base/cli_tools.txt` and added todo.md parser phrase documentation.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $729.72 | $4,378.32 | 43.2% | +$170.34 | +4.05% |
| GOOG | 3 | $392.92 | $382.54 | $1,147.62 | 11.3% | –$31.14 | –2.64% |
| VOO | 2 | $673.925 | $689.53 | $1,379.05 | 13.6% | +$31.20 | +2.31% |
| SOXX | 1 | $533.95 | $569.31 | $569.31 | 5.6% | +$35.35 | +6.62% |
| NVDA | 2 | $220.20 | $213.65 | $427.30 | 4.2% | –$13.09 | –2.97% |
| Cash | — | — | — | $2,244.52 | 22.1% | — | — |
| **Equity** | — | — | — | **$10,146.11** | **100%** | — | **+1.46%** |

- **Gross long exposure:** 77.9%
- **Net exposure:** 77.9%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE (canceled rogue NVDA limit)

## Performance Review
- **1D (today):** portfolio **+1.17%** ($10,028.37 → $10,146.11) vs SPY **~+0.58%** (est. yesterday close ~745.6 → 749.96). Outperforming SPY intraday by ~0.59 pp.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+1.46%** vs SPY **+4.45%** (baseline 718.01 → 749.96). Trailing by ~2.99 pp.
- **1W / 2W:** N/A due to insufficient clean equity history.
- What is working: SOXX breakout continues (+6.62% unrealized, +5.95% intraday) on structural AI-memory catalyst. QQQ core growth working (+4.05% unrealized, +1.70% intraday). VOO anchor stable (+2.31% unrealized, +0.58% intraday).
- What is not working: NVDA relative weakness within surging chip sector (–0.78% today vs SOXX +5.95%). Unauthorized 2nd share added at $216.71, now underwater. GOOG still recovering from regulatory overhang but flat-ish intraday.
- What must change: Tighten agent discipline (code + prompt). Do not add to NVDA. Let SOXX/QQQ momentum run. Preserve cash for high-quality setups. No chasing gaps.

## Goal Check
- **Portfolio since inception:** +1.46% ($10,146.11 vs $10,000 base)
- **S&P 500 since inception:** +4.45% (SPY 749.96 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~2.99 pp). **Goal 1 (positive absolute) is MET.**
- **Dominant failure mode:** **cash drag + late entries / poor execution + agent discipline breach.** Early-week churn consumed daytrades. NVDA entry was poorly timed. Unauthorized NVDA add today worsened cost basis and consumed cash without thesis improvement.

## Market Intel — Tuesday 2:35 PM ET
- **Chip complex still surging:** Micron (MU) joined the $1T club, up ~20% today on UBS Street-high $1,625 target. SOXX +5.95%, AVGO +4.97% (also mentioned as $1T club). DRAM/memory names leading; NVDA not participating.
- **NVDA lagging:** $213.65, –0.78% intraday vs SOXX +5.95%. Post-earnings drift / rotation away from GPU king toward memory/supply-chain names continues. No specific NVDA-negative headline, just relative weakness.
- **META legal blow:** Supreme Court rejected Meta appeal (Tue 18:23Z). Also shareholder push to tie exec pay to child safety. META bannedSymbols active; no position. Good.
- **QQQ strong:** $729.72, +1.70% intraday. Core liquid growth working.
- **GOOG flat to down:** $382.54, +0.83% from prior close but off morning highs. Apple quiet AI move headline could be competitive overhang.
- **SPY retraced:** 749.96, giving back morning gains (was 752.04 at 10:05 AM ET). Equities mixed intraday per Yahoo RSS.
- **RKLB parabolic:** $143.31, +5.83% on SpaceX IPO filing. 3M +100%. No position; avoid chasing.
- **Consumer backdrop:** BJ’s Wholesale story + record-low consumer sentiment vs record-high stock prices divergence remains fragile.
- **Macro risk monitor:** No new Fed Chair Warsh headlines. No Iran escalation headlines. Oil stable.
- **News access:** Yahoo Finance RSS providing actionable headlines. Other sources remain blocked.
- **Earnings dates:** Could not retrieve precise dates from public APIs. No binary event in next 48 hours.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold | Core liquid growth. 43.2%, near 45% cap. Cannot add 1 share without breaching cap. Momentum strong. | 36–45% |
| GOOG | Hold | Core thesis intact. 11.3%, within 15% cap. Adding 1 share would breach 15% cap. Regulatory overhang fading slowly. | 10–15% |
| VOO | Hold | Broad-market anchor. 13.6%, within 20% cap. Adding 1 share would breach 20% cap. | 10–20% |
| SOXX | Hold / Let run | Bought Friday at $533.95. 5.6% weight. Breakout validated by UBS Micron upgrade. +6.62% unrealized. **Do not sell today.** | 5–12% |
| NVDA | Hold / Cut below $210 | Now 2 shares (4.2% weight) after unauthorized add. Relative weakness within surging chip sector. 2nd share bought at $216.71, underwater. Do NOT add. | 2–5% |
| AVGO | Avoid | bannedSymbols active. Up on chip rally but no edge; no position. | 0% |
| META | Avoid | bannedSymbols active. Supreme Court rejection today. Weak 1M (–7.36%). No re-entry. | 0% |
| RKLB | Avoid | Parabolic on SpaceX IPO filing. 1M +68%, 3M +100%. No edge. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends or thin liquidity. | 0% |

## Priority Actions
1. **HOLD current positions.** All holdings are acceptable. No urgent exits.
2. **Do NOT add SOXX at current price ($569+).** Wait for pullback to ~$550 area.
3. **Do NOT add NVDA.** Hold the unauthorized 2nd share; do not compound the breach.
4. **Do NOT add QQQ / GOOG / VOO** — concentration caps would be breached.
5. **Cash reserve:** Keep ~$2,244 dry powder. Hard lock prevents new buys anyway.
6. **Reassess NVDA:** If it breaks $210, authorize cut of FULL position (2 shares). If it catches up to chip rally, hold 2 shares.
7. **Lift hard lock:** Only at next hourly (3:35 PM ET or later) after confirming no further tactical breaches.
8. **Code hygiene:** Todo.md parser patch committed. Ensure tactical agent uses `DO NOT BUY` / `DO NOT ADD` phrasing consistently.

## Macro Themes
- **Actionable now:** SOXX semiconductor breakout — deployed 1 share Friday at $533.95. UBS Micron upgrade validates structural AI-memory demand thesis. Let momentum run.
- **Worth monitoring:** NVDA relative weakness vs broad semis. If rotation persists, NVDA may underperform even in a bull chip tape. Unauthorized add complicates management.
- **Worth monitoring:** META Supreme Court rejection — long-term regulatory/legal risk for social media. Confirms avoid thesis.
- **Worth monitoring:** Consumer pullback signals (BJ’s, record-low sentiment) vs record-high stock prices. Fragile divergence.
- **Worth monitoring:** New Fed Chair Warsh regime — no new headlines but remains a tail risk.
- **Worth monitoring:** US-Iran talks — no escalation or deal. Status quo.
- **Interesting but not actionable yet:** SpaceX IPO prospectus driving RKLB +5.8%. Parabolic; no pure-play in universe.

## Universe Performance Snapshot (Alpaca lastday→current, May 26 session)
| Symbol | Current | Prior Close | Today % |
|---|---|---|---|
| AVGO | $421.69 | — | +4.97% (est) |
| EIS | $136.82 | — | — |
| GLD | $412.82 | — | — |
| GOOG | $382.54 | $379.38 | +0.83% |
| HOOD | $74.06 | — | — |
| META | $610.41 | — | –0.31% (est) |
| NVDA | $213.65 | $215.33 | –0.78% |
| QQQ | $729.72 | $717.54 | +1.70% |
| QTUM | $158.35 | — | — |
| RKLB | $143.31 | — | +5.83% (est) |
| SHLD | $65.93 | — | — |
| SOXX | $569.31 | $537.33 | +5.95% |
| VOO | $689.53 | $685.55 | +0.58% |
| ARKX | $36.36 | — | — |
| SPY | $749.96 | ~745.6 | ~+0.58% |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback when needed.
- **News access** via Yahoo Finance RSS restored and providing actionable headlines.
- **Alpaca `get-latest-price` bars** timestamps at 18:34Z (2:34 PM ET), acceptable freshness.
- **Day-trade status:** 1/3. No same-day issues.
- **SOXX liquidity:** Last bar at 18:34Z shows 7 trades, 190 vol — thin. Limit orders only; no market orders.
- **Earnings dates:** Could not retrieve precise dates. No binary event in next 48 hours.

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
11. **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
12. **Concentration caps must be code-enforced, not just prompt-enforced.**
13. **Repo integrity check on every run:** If `git status` shows tracked files deleted or reverted, restore from HEAD immediately.
14. **Memory staleness is a process risk:** If memory files are > 6 hours old on a trading day, treat prior regime as suspect.
15. **Pre-fetched context can be stale even when git HEAD is current.** Use live reads to confirm.
16. **With ~$10K equity, concentration caps are extremely tight:** QQQ at ~$730 allows max 6 shares; GOOG at ~$383 allows max 3 shares; VOO at ~$691 allows max 2 shares.
17. **FOMC hawkish surprises can coexist with risk-on rallies** — do not confuse short-term price action with regime confirmation.
18. **NVDA "priced in" earnings:** Even blockbuster beats can produce flat/negative reactions if expectations are extreme.
19. **Post-earnings drift can persist for days; do not chase the open; wait for intraday support to form.**
20. **Positive absolute return is necessary but not sufficient:** Must also beat SPY on a risk-adjusted basis.
21. **Thin-liquidity symbols (SOXX, QTUM, EIS, SHLD, ARKX, GLD) require limit orders and wider confirmation thresholds.**
22. **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
23. **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker position reconciliation is mandatory on every hourly run.
24. **Prompt-level "NO <SYMBOL>" directives in todo.md are NOT automatically code-enforced.** Both `bannedSymbols` array and todo.md parser must be kept in sync.
25. **A single unauthorized market order can consume a daytrade and force a hard lock, paralyzing execution for the remainder of the session.** Prevention is cheaper than cleanup.
26. **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser are active.
27. **Limit orders on breakout adds reduce slippage risk on thin names.** SOXX filled at $533.95 vs limit $534.00.
28. **Memorial Day / long weekend headline risk:** Holding elevated cash into a 3-day weekend was prudent.
29. **With daytrade_count at 1/3, every potential sell of a same-day or recent position must be weighed against the cost of consuming a daytrade.**
30. **Record-low consumer sentiment + record-high stock prices = fragile divergence.** Do not increase exposure into this divergence without a clear catalyst.
31. **Market can rally on "bad news" if it believes the worst is priced in.** Do not fight the tape, but also do not chase highs without edge.
32. **SOXX liquidity can improve dramatically within a session.** From 8 trades / 217 vol Friday to 47 trades / 679 vol today morning. Always check current bar.
33. **News access in workspace is severely limited.** Yahoo Finance RSS is the primary reliable source.
34. **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation.
35. **Chip-sector rotation away from NVDA and toward non-NVDA semis is a real regime signal.** SOXX outperforming NVDA validates broad-ETF-over-single-stock approach.
36. **Structural analyst upgrades (UBS Micron $1,625 target) can ignite multi-day sector rallies.** Broad ETFs (SOXX) capture this better than single-name laggards (NVDA).
37. **Buying breakouts on limit orders controls slippage and captures gap-up momentum.** SOXX Friday add was well-timed.
38. **With ~$10K equity and tight concentration caps, a single 1-share add in the right ETF can meaningfully improve portfolio returns.**
39. **Chasing a +6% gap in an ETF is not disciplined deployment.** Wait for pullbacks or use limit orders below current price.
40. **The todo.md parser only matches exact phrases.** Using `DO NOT ADD` instead of `DO NOT BUY` bypassed the code guard. Both the prompt language and the parser must include `DO NOT ADD` as an effective ban phrase.
41. **Live broker position reconciliation caught the NVDA breach within the same trading day.** Pre-fetched memory (from 10:05 AM ET) showed NVDA qty 1; live Alpaca showed qty 2. This validates the reconciliation rule.
42. **Canceling rogue open orders is the first remediation step after detecting an unauthorized trade.** Do not wait for the next tactical window.

## Hourly Cycle Summary — 2026-05-26 18:35Z (Tuesday 2:35 PM ET)
- **Live broker refresh:** Equity $10,146.11 | Cash $2,244.52 | Long $7,901.59 | Gross 77.9% | Daytrade 1/3.
- **Repo integrity:** Clean. Code patch committed for todo.md parser.
- **BREACH DETECTED:** Tactical agent added 1 NVDA share at $216.71 (10:40 AM ET) and placed unauthorized limit buy at $210 (11:39 AM ET) despite explicit `DO NOT ADD`. Open order canceled.
- **SOXX surging:** +5.95% intraday. Unrealized +6.62% on 1-share position.
- **NVDA lagging:** –0.78% intraday vs SOXX +5.95%. Now 2 shares, avg $220.20, unrealized –2.97%.
- **GOOG recovering slowly:** +0.83% from prior close. Unrealized loss –2.64%.
- **QQQ strong:** +1.70% intraday. Unrealized gain +4.05%.
- **VOO stable:** +0.58% intraday. Unrealized gain +2.31%.
- **Market intel:** Micron joins $1T club on UBS upgrade. META Supreme Court rejection. SPY retraced to 749.96. No new macro headlines.
- **Goal check:** Goal 1 MET (+1.46% absolute). Goal 2 off track (trailing SPY by ~2.99 pp).
- **Regime:** Offensive catch-up with 60–80% band (currently 77.9%), but **cleanup-only hard lock** active on new buys.
- **Orders placed this cycle:** Canceled open NVDA limit order.
- **Code changes:** Patched `alpaca_cli.ts` and `alpaca_client_factory.ts` todo parser to match `DO NOT ADD`.
- **Prompt changes:** Removed non-existent `ledger_cli.ts` from `cli_tools.txt`; added todo.md parser phrase docs.
- **Next expected action:** 3:35 PM ET hourly — reassess chip rally follow-through, NVDA relative strength, evaluate lifting hard lock if no new breaches.
