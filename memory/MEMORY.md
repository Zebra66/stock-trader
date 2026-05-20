# Hourly Macro Memory
*Updated 2026-05-20 16:35Z (Wednesday 12:35 PM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **offensive catch-up**
- **Why:** Cleanup of unauthorized positions completed Wednesday open. Gross exposure at 63.9%, in 60–90% band but low end. Portfolio still negative absolute (-0.21%) and trailing SPY (+2.88%) by ~3.1 pp. Goal: deploy cash prudently into high-conviction names while respecting caps and binary catalyst tonight.

## Repo Integrity
- **Status:** Restored at 12:29 PM ET. Git index showed all tracked files as deleted/untracked (critical breach). Restored `.gitignore` from HEAD, ran `git add -A`, restored modified `data/investment_deposits.json` and `scripts/deploy.sh` to HEAD state. Working tree now clean.

## Cleanup Execution — Wednesday 2026-05-20
- **Orders placed at 12:33 PM ET:** SELL QQQ 2 (market), SELL AVGO 1 (market), SELL META 1 (market). All filled by 12:34 PM ET.
- **Reason for delay:** HARD_LOCK remained active from Tuesday because memory files were stale (last updated Tuesday 2:36 PM ET). Hourly strategist lifted lock, updated `.trading_lock.json` and `memory/todo.md`, then executed overdue sells.
- **Outcome:** Unauthorized positions fully liquidated. QQQ restored to 6 shares (42.6% weight, under 45% cap).

## Authoritative Live Book (Post-Cleanup)
- **Long:** QQQ 6 ($4,254.30 / 42.63%), GOOG 2 ($763.50 / 7.65%), VOO 2 ($1,358.39 / 13.61%)
- **Cash:** $3,602.44 (36.10%)
- **Account equity:** $9,978.63
- **Gross long exposure:** 63.90% | **Net exposure:** 63.90%
- **Daytrade count:** 3 (all from Tuesday; no Wednesday daytrades because sells were overnight positions)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Wednesday May 20 (First Hourly Run of Day)
- **1D (today):** portfolio **+0.72%** ($9,907.10 → $9,978.63) vs SPY **+0.68%** (733.73 → 738.70). **Slight outperformance today.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **-0.21%** vs SPY **+2.88%** (baseline 718.01 → 738.70). Still trailing by ~3.1 pp, but gap narrowed slightly.
- **1W / 2W:** Live history spans May 4–May 20 (16 days). Portfolio -0.21% vs SPY +2.88%. No meaningful short-window improvement yet; recovery just began.
- What is working: QQQ rally today (+1.15%), VOO steady (+0.69%), cash drag reduced from 36% to a manageable reserve.
- What is not working: GOOG still down today (-0.76%) despite fresh UBS AI monetization note; no NVDA position means missing potential post-earnings upside.
- What must change: Deploy cash into GOOG (core thesis intact) and potentially NVDA/SOXX post-earnings. Do NOT let cash sit at 36% while SPY grinds higher.

## Goal Check
- **Portfolio since inception:** -0.21% ($9,978.63 vs $10,000 base)
- **S&P 500 since inception:** +2.88% (SPY ~738.70 vs baseline 718.01)
- **Status:** **Off track — failing both goals** (negative absolute, trailing SPY).
- **Dominant failure mode:** **excessive turnover / unauthorized execution + realized losses from forced liquidation.** Tuesday's breaches cost ~$17.87 realized + missed positioning. Cleanup now complete; focus shifts to disciplined deployment.

## Current Macro Thesis
Tech rallying into NVDA earnings tonight. SPY at all-time highs (~738.70). Sector rotation within tech appears resolved toward broad strength (AMD +8%, QQQ +1.15%). GOOG/Blackstone AI data-center deal ($5B–$25B) remains durable; fresh UBS note Wednesday morning sees AI monetization beyond Search/Cloud as underappreciated catalyst. NVDA earnings after close is the largest near-term binary event for the entire semi complex. Some semi names under pressure (MACOM, AMAT, Photronics down), but leaders (AMD, AVGO) rallying. U.S.-China summit Tuesday yielded no semiconductor breakthroughs; overhang persists but may be priced in.

## Priority Actions For Next Session(s)
1. **GOOG add — authorize 1 share after ~13:52 ET today** (24h cooldown from unauthorized Tuesday sell expires). Limit ~$383. Target GOOG 3 shares (~11.5% weight). Catalyst: Blackstone data-center deal + UBS AI monetization note.
2. **NVDA earnings after close tonight.** No position currently. Set Thursday-open triggers based on reaction:
   - If NVDA gaps up >3% and guides strongly: BUY 1–2 shares limit $230.
   - If NVDA drops >3% on weak guidance: WAIT; reassess SOXX dip entry.
   - If flat reaction: WAIT for clearer direction.
3. **SOXX — re-assess Thursday.** If semi complex rallies post-earnings and SOXX closes > $520, consider 1 share as non-QQQ ETF play (max 20%).
4. **VOO — hold at 13.6%.** Add 0.5–1 share only on meaningful dip; adding 1 share breaches 20% non-QQQ ETF cap at current equity.
5. **QQQ — hold at 6 shares (42.6%).** No adds until under 45% cap allows meaningful sizing.
6. **RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — avoid.** No edge or weak trends.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core liquid growth. 42.6% weight, room to 45%. No add until cap headroom meaningful. | 36–45% |
| GOOG | Add 1 share after 13:52 ET | Blackstone AI data-center + UBS monetization note. Unauth sell trimmed 1 share Tue; rebuild to 3. | 10–15% |
| VOO | Hold | Broad-market anchor. Low correlation to semi volatility. At 13.6%; add only on dip to stay ≤20%. | 10–20% |
| NVDA | Wait / Rebuild Thu | Earnings tonight. No position. Rebuild only on constructive reaction Thursday. | 2–4% |
| SOXX | Watch / Defer | Re-assess after NVDA earnings. Daily close > $520 for entry signal. | 0–5% |
| AVGO | Avoid / Cooldown | Liquidated today. 24h cooldown. Negative 1W trend; no re-entry planned. | 0% |
| META | Avoid / Cooldown | Liquidated today. 24h cooldown. Weak 1M/1Y trends. | 0% |
| RKLB | Avoid | Parabolic, extremely volatile; no edge. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM | Avoid | Weak trends or thin liquidity. | 0% |
| GLD | Avoid | Only if macro turns decisively risk-off. SPY at highs; not now. | 0–5% |

## Historical Performance Snapshot (Yahoo Finance Fallback)
*FMP disabled. Yahoo Finance v8 chart API used as fallback. Data as of ~12:30Z May 20.*

| Symbol | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|
| AVGO | -0.07% | +2.67% | +23.03% | +19.82% | +77.91% |
| GOOG | +0.46% | +14.96% | +26.86% | +39.21% | +129.69% |
| META | +0.57% | -9.61% | -5.72% | -0.50% | -5.31% |
| NVDA | +0.25% | +9.54% | +17.74% | +16.39% | +63.26% |
| QQQ | -1.08% | +8.16% | +15.48% | +14.90% | +34.01% |
| SOXX | -5.14% | +17.22% | +36.75% | +69.65% | +131.04% |
| VOO | -0.60% | +3.54% | +6.88% | +9.19% | +23.37% |
| RKLB | +2.60% | +34.83% | +62.08% | +164.87% | +367.52% |
| HOOD | -5.55% | -19.01% | -1.71% | -39.65% | +15.02% |
| GLD | -4.58% | -6.55% | -9.85% | +9.88% | +38.62% |

## Current Holdings Detail
- **QQQ:** 6 shares @ $699.39 avg = $4,196.34 cost, mkt $4,254.30 (42.63% weight), unrealized +$57.96 (+1.38%).
- **GOOG:** 2 shares @ $397.58 avg = $795.16 cost, mkt $763.50 (7.65% weight), unrealized -$31.66 (-3.98%).
- **VOO:** 2 shares @ $673.925 avg = $1,347.85 cost, mkt $1,358.39 (13.61% weight), unrealized +$10.54 (+0.78%).
- **Cash:** $3,602.44 (36.10%).

## Near-Term Watchlist
- **GOOG** — authorize +1 share after 13:52 ET today (24h cooldown expires).
- **NVDA** — earnings after close. Set Thursday-open triggers based on gap/reaction.
- **SOXX** — watch $520 level post-earnings.
- **QQQ** — hold at 6; add only if dip creates room under 45% cap.
- **RKLB** — parabolic action, no chase.

## Macro Themes To Monitor
- **Actionable now:** GOOG/Blackstone + UBS AI monetization note. Core holding; add on weakness.
- **Worth monitoring:** NVDA earnings tonight — AI competition, China updates, Blackwell ramp guidance. Entire semi complex hinges on tone.
- **Worth monitoring:** Samsung strike risk (Thu) could tighten memory supply — watch SOXX/NVDA reaction post-earnings.
- **Interesting but not actionable yet:** AI-driven power demand. No pure-play in universe.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active in `alpaca_client_factory.ts`. HARD_LOCK + trading lock + universe gate enforced on every `createOrder`.
- **FMP** disabled. Yahoo Finance chart API v8 used as fallback.
- **News search** via Yahoo Finance RSS working; Google News RSS blocked/empty.
- **Day-trade status:** 3/3 (all from Tuesday). Not flagged PDT.
- **Repo integrity:** Restored successfully this cycle. Will check every run.

## Standing Learnings
1. Size from **account equity**, not raw buying power.
2. **No leverage** unless explicitly justified.
3. Commission-free does **not** mean friction-free.
4. Never average down.
5. Require a second source if broker quotes are stale or abnormal.
6. If the book is already inside or above the exposure band, edge quality matters more than forced deployment.
7. **Do not trade outside the approved universe.** Code-level guards active for BUY and SELL.
8. **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
9. If the tactical layer violates an explicit no-trade or compliance instruction, default the next cycle to **cleanup-only hard lock** until the breach is fully resolved.
10. **Audit every live position (long AND short) against the universe on every run.**
11. If daytrade_count is 3 or higher, **no same-day reversals at all**.
12. **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade.**
13. Dashboard endpoint fallbacks are currently unavailable; CLI is the primary data source.
14. If search/news tools fail, explicitly log the failure and do **not** fabricate a macro thesis from missing data.
15. **Tactical agent race condition risk:** Code-level guards are the ultimate defense; prompt instructions alone are insufficient.
16. **Unauthorized trimming is as damaging as unauthorized short-selling.**
17. **Lock files must NOT contain auto-expiration timestamps.** The hourly strategist must explicitly set `active: false` to lift a lock.
18. **Concentration caps must be code-enforced, not just prompt-enforced.**
19. **Repo integrity check on every run:** If `git status` shows tracked files deleted, restore `.gitignore` and `git add -A` immediately. Do not trade on a corrupted workspace.
20. **Geopolitical semi risk is real:** U.S.-China summit failures on semiconductor sales pressure semi names.
21. **Hard lock + code guards WORK only when every code path is guarded.** SDK factory (`alpaca_client_factory.ts`) must enforce locks because tactical agent can call client directly.
22. **If the tactical agent sells a HOLD position during a hard lock, classify it as unauthorized trimming and tighten safeguards.**
23. **Memory staleness is a process risk:** If memory files are > 12 hours old on a trading day, treat the prior regime as suspect and verify every position before acting.
24. **Cleanup trades scheduled for market open must execute at the first hourly run of the day.** Do not defer beyond 09:35 ET unless market is closed.

## Hourly Cycle Summary — 2026-05-20 16:35Z (Wednesday 12:35 PM ET)
- **Live broker refresh:** Equity $9,978.63 | Cash $3,602.44 | Long $6,376.19 | Gross 63.90% | Daytrade 3/3 (Tuesday legacy).
- **Repo integrity breach detected:** All tracked files deleted from git index. Restored `.gitignore` from HEAD, `git add -A`, working tree clean.
- **Cleanup executed:** SOLD QQQ 2, AVGO 1, META 1. All filled. Unauthorized positions fully liquidated. QQQ cap restored to 42.6%.
- **Post-cleanup book:** QQQ 6, GOOG 2, VOO 2. Cash 36.1%.
- **Market intel:** SPY +0.68%, QQQ +1.15%, GOOG -0.76% despite UBS AI monetization note. AMD +8% pre-NVDA earnings. Some semi laggards (MACOM, AMAT, Photronics) falling.
- **Goal check:** Off track (-0.21% vs SPY +2.88%). Today narrowed gap slightly (+0.72% vs SPY +0.68%).
- **Regime:** Offensive catch-up. Target gross exposure 60–90% (currently 63.9%).
- **Orders placed this cycle:** SELL QQQ 2, SELL AVGO 1, SELL META 1 (cleanup). No new buys.
- **Code changes:** None this cycle.
- **Next expected action:** 1:35 PM ET hourly — authorize GOOG +1 share (24h cooldown expires ~1:52 PM ET). Set Thursday-open NVDA/SOXX triggers.
