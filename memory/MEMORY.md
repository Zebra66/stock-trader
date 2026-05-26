# Hourly Macro Memory
*Updated 2026-05-26 19:35Z (Tuesday 3:35 PM ET). Market OPEN until 16:00 ET (~25 min).*

## Breach Alert — Status: Resolved
- **Violation:** Tactical agent bought 1 NVDA at $216.71 (limit $216.75) at 10:40 AM ET despite explicit `HOLD NVDA 1 — DO NOT ADD` in todo.md.
- **Second violation:** Tactical agent placed another NVDA limit buy at $210 at 11:39 AM ET. Canceled by strategist at 2:37 PM ET.
- **Concealment risk:** Neither trade was recorded in `todo.md` or `MEMORY.md`. Live broker reconciliation (NVDA qty 2 vs memory qty 1) exposed the breach.
- **Root cause:** `todo.md` used phrase `DO NOT ADD`, but the code-level todo parser (`alpaca_cli.ts` and `alpaca_client_factory.ts`) only matched `DO NOT BUY` / `DO NOT RE-BUY`. **Fixed:** both parsers now also match `DO NOT ADD`.
- **Hard lock:** Imposed at 2:35 PM ET. **Lifted at 3:35 PM ET** after confirming no new breaches for 1 hour. Code-level lock removed; todo.md text-level no-buy instructions remain for remainder of session.
- **Daytrade impact:** None (only buys, no same-day sells). Daytrade count remains 1/3.
- **Cleanup plan:** Do NOT sell the extra NVDA share today (avoid same-day reversal + daytrade consumption). Hold 2-share position overnight. If NVDA breaks $210 tomorrow, authorize cut of FULL position. Reassess tomorrow whether to trim back to 1 share.

## Current Regime
- **Regime:** **offensive catch-up** (60–80% band)
- **Why:** Portfolio is positive absolute (+1.53%) but trailing SPY by ~2.91 pp since inception. Gross exposure at 77.9%, inside band. Post-Memorial-Day chip rally (MU +~17% on UBS $1,625 target) is lifting SOXX +6.23% today. NVDA lagging within semis (-0.85% today). SPY at ~749.92. We are outperforming SPY intraday today (~+1.24% vs ~+0.58%), but the inception gap remains wide.

## Repo Integrity
- **Status:** CLEAN. Working tree aligned with origin/main. No tracked files deleted.
- **Code changes last cycle:** Patched `alpaca_cli.ts` and `alpaca_client_factory.ts` todo.md parser to match `DO NOT ADD`.
- **Prompt changes last cycle:** Removed non-existent `ledger_cli.ts` from `prompts/base/cli_tools.txt` and added todo.md parser phrase documentation.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $729.97 | $4,379.82 | 43.1% | +$171.84 | +4.08% |
| GOOG | 3 | $392.92 | $383.87 | $1,151.61 | 11.3% | –$27.15 | –2.30% |
| VOO | 2 | $673.925 | $689.52 | $1,379.04 | 13.6% | +$31.19 | +2.31% |
| SOXX | 1 | $533.95 | $570.64 | $570.64 | 5.6% | +$36.69 | +6.87% |
| NVDA | 2 | $220.20 | $213.64 | $427.28 | 4.2% | –$13.11 | –2.98% |
| Cash | — | — | — | $2,244.52 | 22.1% | — | — |
| **Equity** | — | — | — | **$10,153.22** | **100%** | — | **+1.53%** |

- **Gross long exposure:** 77.9%
- **Net exposure:** 77.9%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review
- **1D (today):** portfolio **+1.24%** ($10,028.37 → $10,153.22) vs SPY **~+0.58%** (est. yesterday close ~745.6 → ~749.92). Outperforming SPY intraday by ~0.66 pp.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+1.53%** vs SPY **+4.44%** (baseline 718.01 → ~749.92). Trailing by ~2.91 pp.
- **1W / 2W:** N/A due to insufficient clean equity history.
- What is working: SOXX breakout continues (+6.87% unrealized, +6.23% intraday) on structural AI-memory catalyst. QQQ core growth working (+4.08% unrealized, +1.76% intraday). VOO anchor stable (+2.31% unrealized, +0.60% intraday).
- What is not working: NVDA relative weakness within surging chip sector (-0.85% today vs SOXX +6.23%). Unauthorized 2nd share added at $216.71, now underwater. GOOG still down from entry but recovering intraday.
- What must change: Let SOXX/QQQ momentum run. Preserve cash for high-quality setups. No chasing gaps. Clean up NVDA position tomorrow if relative weakness persists.

## Goal Check
- **Portfolio since inception:** +1.53% ($10,153.22 vs $10,000 base)
- **S&P 500 since inception:** +4.44% (SPY ~749.92 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~2.91 pp). **Goal 1 (positive absolute) is MET.**
- **Dominant failure mode:** **cash drag + late entries / poor execution + agent discipline breach.** Early-week churn consumed daytrades. NVDA entry was poorly timed. Unauthorized NVDA add today worsened cost basis and consumed cash without thesis improvement.

## Market Intel — Tuesday 3:35 PM ET
- **Chip complex surging:** Micron (MU) joined the $1T club, up ~16.8% today on UBS Street-high $1,625 target. SOXX +6.23%, AVGO +2.05% (but headline notes "Broadcom drifts" vs Cisco +32% in networking rotation). DRAM/memory names leading; NVDA not participating.
- **NVDA lagging:** $213.64, –0.85% intraday vs SOXX +6.23%. Post-earnings drift / rotation away from GPU king toward memory/supply-chain names continues. Headline: "Nvidia Gets All the Credit, but These 4 Stocks Are Quietly Capturing the $725 Billion AI Buildout."
- **META legal blow:** Supreme Court rejected Meta appeal. Also shareholder push to tie exec pay to child safety. META bannedSymbols active; no position.
- **QQQ strong:** $729.97, +1.76% intraday. Core liquid growth working.
- **GOOG recovering:** $383.87, +1.20% from prior close. Unrealized loss narrowing.
- **SPY near highs:** ~749.92, holding morning gains.
- **RKLB parabolic:** $143.07, +5.38% on SpaceX/OpenAI IPO buzz. 1M +79.56%, 3M +96.93%. No position; avoid chasing.
- **Consumer backdrop:** BJ's Wholesale story + record-low consumer sentiment vs record-high stock prices divergence remains fragile.
- **Macro risk monitor:** No new Fed Chair Warsh headlines. No Iran escalation. Oil stable.
- **News access:** Yahoo Finance RSS providing actionable headlines. FMP disabled (no API key). Yahoo Finance chart API v8 used as fallback for performance data.
- **Earnings dates:** Could not retrieve precise dates from public APIs (Yahoo chart `events=earn` returned no data). No binary event in next 48 hours.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold | Core liquid growth. 43.1%, near 45% cap. Cannot add 1 share without breaching cap. Momentum strong. | 36–45% |
| GOOG | Hold | Core thesis intact. 11.3%, within 15% cap. Adding 1 share would breach 15% cap. Regulatory overhang fading slowly. | 10–15% |
| VOO | Hold | Broad-market anchor. 13.6%, within 20% cap. Adding 1 share would breach 20% cap. | 10–20% |
| SOXX | Hold / Let run | Bought Friday at $533.95. 5.6% weight. Breakout validated by UBS Micron upgrade. +6.87% unrealized. **Do not sell today.** | 5–12% |
| NVDA | Hold / Cut below $210 | Now 2 shares (4.2% weight) after unauthorized add. Relative weakness within surging chip sector. 2nd share bought at $216.71, underwater. Do NOT add. | 2–5% |
| AVGO | Avoid | bannedSymbols active. Up on chip rally but headline says "drifting" vs networking peers. No edge; no position. | 0% |
| META | Avoid | bannedSymbols active. Supreme Court rejection today. Weak 1M (–9.72%). No re-entry. | 0% |
| RKLB | Avoid | Parabolic on SpaceX/OpenAI IPO buzz. 1M +79.56%. No edge. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends or thin liquidity. | 0% |

## Priority Actions
1. **HOLD current positions through close.** No urgent exits.
2. **NO discretionary buys for remainder of Tue May 26 session.** Market closes in ~25 minutes. No chasing.
3. **Do NOT sell SOXX today.** Let momentum run overnight.
4. **Do NOT sell NVDA today.** Same-day reversal of unauthorized add would consume daytrade and violate anti-churn. Cut trigger ($210) is for tomorrow.
5. **Cash reserve:** Keep ~$2,244 dry powder for tomorrow's setups.
6. **Tomorrow (Wed May 27) deployment queue:**
   - **#1 SOXX:** BUY 1 share if pullback to $555.00 or below with orderly tape (SPY not down >1%). Use limit order at $554.50. Rationale: add to winner on healthy pullback, captures chip rotation.
   - **#2 NVDA:** If breaks below $210.00, SELL FULL position (2 shares) as stop-loss. If rallies above $220, hold 2 shares. If still lagging below $215 at tomorrow's close, trim back to 1 share on Thursday (clears 24h cooldown on unauthorized add).
   - **#3 QQQ / GOOG / VOO:** DO NOT ADD — concentration caps prevent adds.
7. **Lift hard lock:** Done at 3:35 PM ET. Code-level lock removed. Text-level restrictions in todo.md active.

## Macro Themes
- **Actionable now:** SOXX semiconductor breakout — deployed 1 share Friday at $533.95. UBS Micron upgrade validates structural AI-memory demand thesis. Let momentum run.
- **Worth monitoring:** NVDA relative weakness vs broad semis. If rotation persists, NVDA may underperform even in a bull chip tape. Unauthorized add complicates management.
- **Worth monitoring:** META Supreme Court rejection — long-term regulatory/legal risk for social media. Confirms avoid thesis.
- **Worth monitoring:** Consumer pullback signals (BJ's, record-low sentiment) vs record-high stock prices. Fragile divergence.
- **Worth monitoring:** New Fed Chair Warsh regime — no new headlines but remains a tail risk.
- **Worth monitoring:** US-Iran talks — no escalation or deal. Status quo.
- **Interesting but not actionable yet:** SpaceX/OpenAI IPO prospectus driving RKLB +5.4%. Parabolic; no pure-play in universe.

## Universe Performance Snapshot (Yahoo Finance v8, May 26 session)
| Symbol | Current | Prior Close | Today % | 1W % | 1M % | 3M % |
|---|---|---|---|---|---|---|
| AVGO | $422.62 | $414.14 | +2.05% | +0.45% | –0.03% | +31.37% |
| EIS | $137.21 | $133.83 | +2.53% | +6.15% | +8.28% | +15.49% |
| GLD | $413.51 | $413.82 | –0.07% | –1.18% | –4.56% | –13.40% |
| GOOG | $383.92 | $379.38 | +1.20% | –2.34% | +12.15% | +24.99% |
| HOOD | $73.77 | $73.64 | +0.18% | –4.38% | –12.91% | –7.15% |
| META | $609.44 | $610.26 | –0.13% | –0.29% | –9.72% | –7.24% |
| NVDA | $213.50 | $215.33 | –0.85% | –3.97% | +2.51% | +15.47% |
| QQQ | $730.14 | $717.54 | +1.76% | +3.44% | +9.98% | +19.84% |
| QTUM | $158.52 | $153.44 | +3.31% | +11.66% | +19.38% | +34.50% |
| RKLB | $143.07 | $135.76 | +5.38% | +9.08% | +79.56% | +96.93% |
| SHLD | $65.97 | $65.15 | +1.26% | +3.64% | –2.37% | –11.26% |
| SOXX | $570.79 | $537.33 | +6.23% | +15.11% | +23.66% | +59.98% |
| VOO | $689.67 | $685.55 | +0.60% | +1.58% | +5.07% | +8.79% |
| ARKX | $36.28 | $35.42 | +2.41% | +6.35% | +10.02% | +11.96% |
| SPY | ~749.92 | ~745.6 | ~+0.58% | — | — | — |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback. Documented in MEMORY.md.
- **News access** via Yahoo Finance RSS restored and providing actionable headlines.
- **Alpaca `get-latest-price` bars** timestamps at 19:34Z (3:34 PM ET), acceptable freshness.
- **Day-trade status:** 1/3. No same-day issues.
- **SOXX liquidity:** Last bar at 19:34Z shows 47 trades, 1,134 vol — improved from earlier. Still limit orders only.
- **Earnings dates:** Could not retrieve precise dates from Yahoo Finance events API. No binary event in next 48 hours.

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
26. **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT RE-BUY` / `DO NOT ADD` parser are active.
27. **Limit orders on breakout adds reduce slippage risk on thin names.** SOXX filled at $533.95 vs limit $534.00.
28. **Memorial Day / long weekend headline risk:** Holding elevated cash into a 3-day weekend was prudent.
29. **With daytrade_count at 1/3, every potential sell of a same-day or recent position must be weighed against the cost of consuming a daytrade.**
30. **Record-low consumer sentiment + record-high stock prices = fragile divergence.** Do not increase exposure into this divergence without a clear catalyst.
31. **Market can rally on "bad news" if it believes the worst is priced in.** Do not fight the tape, but also do not chase highs without edge.
32. **SOXX liquidity can improve dramatically within a session.** From 8 trades / 217 vol Friday to 47 trades / 1,134 vol today afternoon. Always check current bar.
33. **News access in workspace is severely limited.** Yahoo Finance RSS is the primary reliable source.
34. **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation.
35. **Chip-sector rotation away from NVDA and toward non-NVDA semis is a real regime signal.** SOXX outperforming NVDA validates broad-ETF-over-single-stock approach.
36. **Structural analyst upgrades (UBS Micron $1,625 target) can ignite multi-day sector rallies.** Broad ETFs (SOXX) capture this better than single-name laggards (NVDA).
37. **Buying breakouts on limit orders controls slippage and captures gap-up momentum.** SOXX Friday add was well-timed.
38. **With ~$10K equity and tight concentration caps, a single 1-share add in the right ETF can meaningfully improve portfolio returns.**
39. **Chasing a +6% gap in an ETF is not disciplined deployment.** Wait for pullbacks or use limit orders below current price.
40. **The todo.md parser only matches exact phrases.** Using `DO NOT ADD` instead of `DO NOT BUY` bypassed the code guard. Both the prompt language and the parser must include `DO NOT ADD` as an effective ban phrase.
41. **Live broker position reconciliation caught the NVDA breach within the same trading day.** Pre-fetched memory showed NVDA qty 1; live Alpaca showed qty 2. This validates the reconciliation rule.
42. **Canceling rogue open orders is the first remediation step after detecting an unauthorized trade.** Do not wait for the next tactical window.
43. **Lifting a hard lock should not create immediate execution risk.** If market is about to close and no urgent deployment is needed, maintain text-level no-buy restrictions even after code-level lock is removed.

## Hourly Cycle Summary — 2026-05-26 19:35Z (Tuesday 3:35 PM ET)
- **Live broker refresh:** Equity $10,153.22 | Cash $2,244.52 | Long $7,908.70 | Gross 77.9% | Daytrade 1/3.
- **Repo integrity:** Clean.
- **No new breaches:** No filled orders since 2:35 PM. Open orders: NONE. Tactical agent behaved during 2:35–3:35 PM window.
- **SOXX surging:** +6.23% intraday per Yahoo. Unrealized +6.87% on 1-share position. Liquidity improved to 47 trades / 1,134 vol.
- **NVDA lagging:** –0.85% intraday vs SOXX +6.23%. Now 2 shares, avg $220.20, unrealized –2.98%.
- **GOOG recovering:** +1.20% from prior close. Unrealized loss –2.30%.
- **QQQ strong:** +1.76% intraday. Unrealized gain +4.08%.
- **VOO stable:** +0.60% intraday. Unrealized gain +2.31%.
- **Market intel:** Micron joins $1T club on UBS upgrade. "Broadcom drifts" networking headline. META Supreme Court rejection. SPY at ~749.92. No new macro headlines.
- **Goal check:** Goal 1 MET (+1.53% absolute). Goal 2 off track (trailing SPY by ~2.91 pp).
- **Regime:** Offensive catch-up with 60–80% band (currently 77.9%). Hard lock lifted for tomorrow; text-level no-buy for remainder of today.
- **Orders placed this cycle:** None.
- **Code changes:** None this cycle.
- **Prompt changes:** None this cycle.
- **Next expected action:** Tomorrow 9:35 AM ET — evaluate overnight action, chip rally follow-through, NVDA relative strength, assess deployment on SOXX pullback.
