# Hourly Macro Memory
*Updated 2026-07-01 13:35Z (Wednesday 9:35 AM ET). Market OPEN. Next regular session hourly: 14:35Z (10:35 AM ET).*

## Hourly Cycle Summary — 2026-07-01 13:35Z (Wednesday 9:35 AM ET)
- **Status:** Market OPEN. Tape orderly but mildly risk-off. SPY -0.52%, QQQ -1.39%.
- **Critical process breach resolved:** Container restart restored May 31 persistent volume state, reverting `memory/MEMORY.md`, `memory/todo.md`, `memory/ledger.md`, `memory/standing_learnings.md`, and `src/tools/*.ts` to stale/corrupted versions (learning 64). All tracked files restored from git HEAD before any trading analysis.
- **Live broker refresh:** Equity $9,564.28 | Cash $2,440.98 | Long $7,123.30 | Gross 74.5% | Daytrade 0/3.
- **Final holdings confirmed:** QQQ 5 ($3,631.33, +1.52% unrealized), VOO 2 ($1,365.64, +0.94%), AVGO 3 ($1,111.70, -0.37%), HOOD 10 ($1,014.05, -0.09%).
- **Open orders:** RKLB 5 shares limit buy at $98.00, GTC, submitted 2026-06-30 18:39Z, status NEW, unfilled.
- **Filled trades since prior hourly (Jun 30 14:35Z):** HOOD 10 shares filled Jun 30 14:46Z at $101.50. Tactical agent canceled $99.50 limit and resubmitted $101.50 limit, which filled immediately.
- **Universe compliance:** All 4 holdings + open order in universe. No breach.
- **Rapid-exposure-drift guard:** Gross moved from 64.0% to 74.5% via HOOD fill. Authorized by Jun 30 deployment queue. No unauthorized drift.
- **Concurrent execution:** No race conditions detected.
- **Code integrity:** Restored. All safety guards (anti-churn, stale-memory, duplicate-order, blackout verification) are back in HEAD.
- **Branch:** Up to date with origin/main (0 ahead, 0 behind).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $726.27 | $3,631.33 | 38.0% | +$54.43 | +1.52% |
| VOO | 2 | $676.46 | $682.82 | $1,365.64 | 14.3% | +$12.72 | +0.94% |
| AVGO | 3 | $371.95 | $370.57 | $1,111.70 | 11.6% | –$4.15 | –0.37% |
| HOOD | 10 | $101.50 | $101.41 | $1,014.05 | 10.6% | –$0.95 | –0.09% |
| Cash | — | — | — | $2,440.98 | 25.5% | — | — |
| **Equity** | — | — | — | **$9,564.28** | **100%** | — | **–4.36%** |

- **Gross long exposure:** 74.5%
- **Net exposure:** 74.5%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Trading blocked:** false
- **Account blocked:** false
- **Portfolio heat (entry-to-stop):** $228.30 (2.39% of equity). Under 6% daily loss cap.
- **Open orders:** RKLB 5 @ $98.00 limit (GTC)

## Performance Review — Wed Jul 1 (First Hourly)
- **1D (prior close → now):** Portfolio ~–0.71% ($9,632.65 → $9,564.28) vs SPY ~–0.52% ($746.74 → $742.86). **Underperforming by ~0.2 pp.** QQQ/AVGO/VOO all down; HOOD up slightly.
- **1W (Jun 24 → Jul 1):** N/A — exact Jun 24 equity unavailable due to midweek churn. Estimated ~flat vs SPY ~+1.3%.
- **2W (Jun 17 → Jul 1):** N/A — insufficient reliable equity history due to Jun 23/Jun 26 liquidations.
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–4.36%** ($9,564.28 vs $10,000) vs SPY **+3.46%** ($742.86 vs baseline $718.01). **Trailing by ~7.8 pp.**
- What is working: QQQ core still profitable (+1.52% unrealized). VOO anchor steady (+0.94%). Holding these through the dip is the right posture.
- What is not working: Absolute return is negative. The Jun 15–Jun 26 churn cycle destroyed ~$300–$400 of equity via realized losses and friction. AVGO is slightly underwater again.
- What must change: **ZERO CHURN.** We cannot afford another whipsaw cycle. Hold the 4 core positions. Let RKLB limit fill on pullback if the setup remains valid. Do NOT add a 6th position today. Prove we can hold 4 positions through a down day before expanding.

## Goal Check
- **Portfolio since inception:** –4.36% ($9,564.28 vs $10,000 base)
- **S&P 500 since inception:** +3.46% (SPY $742.86 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.8 pp. Need ~+12% outperformance over remaining ~2 months to close gap.
- **Dominant failure mode:** **excessive turnover / friction.** The Jun 15–Jun 26 period saw same-day round trips (QQQ/GOOG/NVDA Jun 15), panic liquidations (Jun 23, Jun 26), and rapid re-entries. Every market sell order locked in losses + SEC/FINRA fees. Cash drag was only part of the problem; the bigger problem was destroying capital via churn.
- **Posture:** **offensive catch-up.** Gross exposure 74.5% is within 60–90% band but at the lower bound. We must hold current positions and add RKLB if it fills to reach ~80% gross.

## Market Intel — Wednesday 9:35 AM ET
- **Broad market:** SPY -0.52% ($742.86), QQQ -1.39% ($726.15), VOO -0.60% ($682.71). Mild risk-off ahead of Fed Chair Warsh's international debut. Pre-bell futures were lower.
- **Semiconductor sector:** Weak. SOXX -4.78% ($610.14), NVDA -3.02% ($194.05). AVGO holding better at -1.90% but still dragged down by sector tone. The "single $1 trillion question" headline suggests uncertainty about AI capex sustainability.
- **META:** +7.80% ($607.24) on AI cloud business launch plan. Strongest name in Mag 7 today. Banned from our book.
- **HOOD:** +1.70% ($101.99) despite "Robinhood Markets Fell on Weak Core Earnings" headline. Price action is diverging from headline negativity — market may be looking past earnings at user growth or international expansion. Hold.
- **GOOG:** +0.87% ($356.40) despite €1.7B PriceRunner fine headline. Not in portfolio. No re-entry planned.
- **RKLB:** -1.46% ($100.17). Launch scrubbed for Japan QPS satellite — temporary operational delay, not fundamental. $8B Iridium acquisition thesis intact. Limit buy at $98.00 is 2.2% below market; may fill on further sector weakness.
- **QTUM:** -2.18% ($161.78). Quantum theme extended; no entry.
- **Fed / Macro:** Warsh debut = potential volatility. No new policy yet. Watch for any hawkish rhetoric that could pressure multiples.
- **Relative strength today:** META (+7.8%), HOOD (+1.7%), GLD (+1.0%). Weakness: SOXX (-4.8%), NVDA (-3.0%), QTUM (-2.2%), AVGO (-1.9%).
- **Earnings dates:** AVGO expected Sep 3; NVDA ~Aug 26; GOOG/META ~Jul 23; HOOD ~Jul 29. No binary events in next 48 hours. Exact dates unconfirmed via Yahoo API today; will re-verify next cycle.
- **Illiquidity flags:** HOOD (13 trades latest bar), ARKX (1 trade), SHLD (3 trades), EIS (1 trade), GLD (5 trades), QTUM (stale Jun 30). Limit orders only for any authorized trades.

## Multi-Timeframe Performance (Yahoo Finance v8, Jul 1 ~9:30 AM ET)
| Symbol | Price | 1D | 1W | 1M | 3M | Trend |
|---|---|---|---|---|---|---|
| SPY | $742.86 | –0.52% | +1.31% | –2.07% | +13.37% | Above 50D/200D |
| QQQ | $726.15 | –1.39% | +2.19% | –2.23% | +24.27% | Above 50D/200D |
| VOO | $682.71 | –0.60% | +1.04% | –2.09% | +13.35% | Above 50D/200D |
| AVGO | $369.63 | –2.15% | –3.26% | –19.64% | +17.91% | Below 50D, Above 200D |
| NVDA | $194.05 | –3.02% | –2.49% | –13.51% | +10.41% | Below 50D, Above 200D |
| META | $607.24 | +7.80% | +8.89% | +1.13% | +4.84% | Above 50D/200D |
| GOOG | $356.40 | +0.87% | +3.29% | –4.34% | +20.85% | Below 50D, Above 200D |
| HOOD | $101.99 | +1.70% | +4.93% | +12.40% | +45.46% | Above 50D, Below 200D |
| RKLB | $100.17 | –1.46% | +17.28% | –18.16% | +52.88% | Below 50D, Above 200D |
| GLD | $372.11 | +1.01% | +1.69% | –9.52% | –15.01% | Below 50D/200D |
| SOXX | $610.14 | –4.78% | +1.44% | +6.68% | +80.23% | Above 50D/200D |
| QTUM | $161.78 | –2.18% | +1.18% | –0.67% | +48.03% | Above 50D/200D |
| EIS | $121.16 | +0.37% | +0.63% | –9.54% | +2.23% | N/A |
| SHLD | $60.89 | +1.98% | +3.41% | –7.21% | –17.13% | N/A |
| ARKX | $33.91 | –0.61% | +5.38% | –6.80% | +13.38% | N/A |

## Position Map — Wednesday Jul 1
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. +1.52% unrealized. Stop $690. No adds (45% cap binding). | 35–45% |
| VOO | **HOLD** | S&P anchor. +0.94% unrealized. Stop $660. No adds (20% cap binding). | 10–20% |
| AVGO | **HOLD** | AI chip alpha. Slightly underwater but thesis intact. Anthropic ban lift positive. Stop $350. No adds (15% cap binding). | 5–15% |
| HOOD | **HOLD** | 4th position. Weak earnings headline but price holding up. Stop $95. Do NOT add today. | 8–12% |
| RKLB | **BUY on pullback** | 5th position candidate. Limit 5 @ $98.00 GTC already open. Iridium deal thesis intact; launch scrub is temporary. Stop $90. If filled, weight ~5.1%. | 0–8% |
| META | Banned | `bannedSymbols` active. No re-entry. | 0% |
| GOOG | Avoid | €1.7B fine headline; below 50D. No edge. | 0% |
| SOXX | Avoid | Down -4.78% today. Volatile overlap with QQQ/AVGO. No entry while falling. | 0% |
| NVDA | Avoid | Below 50D. No edge over AVGO. | 0% |
| GLD | Avoid | Below 50D/200D. Defensive not needed. | 0% |
| EIS / SHLD / QTUM / ARKX | Avoid | Thin or no edge. | 0% |

## Priority Actions (Wednesday Jul 1)
1. **HOLD ALL 4 CURRENT POSITIONS.** No sells on a mild down day. Hard stops are far away.
2. **KEEP RKLB LIMIT ORDER OPEN.** 5 shares @ $98.00 GTC. If filled, gross rises to ~79.6% and cash drops to ~20.4%. Do NOT modify the limit up or down today.
3. **NO NEW DISCRETIONARY BUYS.** The only authorized add is the pre-existing RKLB limit. Do not chase SOXX, NVDA, or GOOG on this dip.
4. **NO ADDS TO EXISTING POSITIONS.** Concentration caps binding for QQQ (38% → 45.8% if +1), VOO (14.3% → 21.4% if +1), AVGO (11.6% → 15.5% if +1).
5. **ANTI-CHURN CRITICAL:** Do NOT sell any position that was bought Jun 29–Jun 30 without explicit hourly authorization. QQQ/VOO/AVGO bought Jun 29. HOOD bought Jun 30. Same-day round trip is prohibited.
6. **Monitor Warsh debut headlines.** If hawkish surprise emerges, evaluate whether to tighten stops for next cycle. Do NOT react preemptively.
7. **Event detector note:** `priorTimestamp` null bug fixed in HEAD code. Today's null was because snapshot was written after detector run. Next tactical run should show normal pctChange.

## Macro Themes
- **Actionable now:** Q3 begins. Earnings season ~3 weeks away. Hold profitable core positions into the pre-earnings run-up. Do not lighten into strength unless SPY breaches 50D.
- **Worth monitoring:** Fed Chair Warsh international debut today. Any hawkish rhetoric could pressure tech multiples. Watch QQQ reaction closely.
- **Worth monitoring:** Semiconductor volatility (SOXX -4.78%). Is this a normal pullback within an uptrend or start of deeper correction? AVGO and NVDA both below 50D. If SOXX closes below $600, reassess chip exposure.
- **Interesting but not actionable yet:** META AI cloud business plan. Strong rally but banned from book.
- **Process risk (learning 64):** Container restart restoring stale persistent volumes is a real threat. Working tree must be verified against HEAD on every run.

## Data / Process Notes
- **Alpaca CLI** working. All concentration cap, anti-churn, stale-memory, duplicate-order, and universe guards restored to HEAD.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS feeds active. HOOD, GOOG, META, RKLB headlines obtained.
- **Alpaca bars:** Timestamps at 13:34Z; current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Restored from critical breach. `.gitignore` verified. `node_modules` properly ignored.
- **Code integrity:** All tracked source files restored from HEAD. Anti-churn, stale-memory, duplicate-order, and blackout guards are active.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive. Critical reminder: learning 64 — container restart can overwrite working tree with stale persistent volume snapshots. Always `git diff HEAD` on startup.
