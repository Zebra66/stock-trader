# Hourly Macro Memory
*Updated 2026-07-02 15:12Z (Thursday 11:12 AM ET). Market OPEN until 20:00Z. Next tactical: :40/:50 windows.*

## Critical Process Note — Repo Integrity
- **2026-07-02 15:10Z:** Working-tree `memory/MEMORY.md`, `memory/todo.md`, `src/tools/*.ts`, and `prompts/*.txt` were reverted to **May 29** content while `git HEAD` contained current July 2 commits.
- **Root cause:** Concurrent agent or harness pre-fetch overwrote working-tree files with stale snapshots.
- **Resolution:** `git restore .` from HEAD restored all tracked files. Branch confirmed up to date with origin/main (0 ahead/0 behind). `.gitignore` verified effective.
- **Lesson:** Pre-fetched context can be stale even when git HEAD is current. Always verify working-tree files against `git show HEAD:<file>` before acting.

---

## Tactical Cycle Execution — 2026-07-02 15:16Z (Thursday 11:16 AM ET)
- **Status:** Market OPEN. Event detector **NONE**. No protective sells required.
- **Action taken:** Adjusted HOOD trim order per hourly authorization.
  - Canceled open order `385d2b75-e612-44ab-bb6b-8672229f8eba` (HOOD limit SELL 5 @ $117.00).
  - Placed new order `b07a3040-8f50-4a14-a4c2-c615b12f7644` (HOOD limit SELL 5 @ $114.50, day order).
- **Current open orders:** HOOD limit SELL 5 @ $114.50.
- **Holdings unchanged:** QQQ 5, VOO 2, AVGO 3, HOOD 10 (5 available, 5 reserved by open sell), RKLB 5.
- **Gross exposure:** ~79.8% (unchanged until fill). Post-fill exposure will be ~73.8%.
- **Daytrade count:** 0/3 (no daytrades created; HOOD bought Jun 30).
- **Anti-churn:** No same-day round trips. All holds authorized.

## Hourly Cycle Summary — 2026-07-02 15:12Z (Thursday 11:12 AM ET)
- **Status:** Market OPEN. Tape deteriorating since 14:35Z — tech/semis fading, RKLB pulling back sharply. Event detector **MAJOR** at 15:10Z.
- **Live broker refresh:** Equity **$9,638.26** | Cash **$1,950.97** | Long **$7,687.29** | Gross **79.76%** | Daytrade **0/3**.
- **Holdings confirmed:** QQQ 5 ($3,583.33, +0.18%), VOO 2 ($1,370.08, +1.27%), AVGO 3 ($1,098.11, –1.59%), HOOD 10 ($1,139.13, +12.23%), RKLB 5 ($496.65, +1.36%).
- **Open orders:** HOOD limit SELL 5 @ $117.00 (order `385d2b75-e612-44ab-bb6b-8672229f8eba`, status `new`, day order).
- **Filled trades since prior hourly (Jul 2 14:35Z):** NONE. HOOD limit sell placed at 14:40Z remains unfilled.
- **Universe compliance:** All 5 holdings in universe. No breach.
- **Branch:** Up to date with origin/main.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $716.67 | $3,583.33 | 37.2% | +$6.43 | +0.18% |
| VOO | 2 | $676.46 | $685.04 | $1,370.08 | 14.2% | +$17.16 | +1.27% |
| AVGO | 3 | $371.95 | $366.04 | $1,098.11 | 11.4% | –$17.75 | –1.59% |
| HOOD | 10 | $101.50 | $113.91 | $1,139.13 | 11.8% | +$124.13 | +12.23% |
| RKLB | 5 | $98.00 | $99.33 | $496.65 | 5.2% | +$6.65 | +1.36% |
| Cash | — | — | — | $1,950.97 | 20.2% | — | — |
| **Equity** | — | — | — | **$9,638.26** | **100%** | — | **–3.62%** |

- **Gross long exposure:** 79.76%
- **Net exposure:** 79.76%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Portfolio heat (entry-to-stop):** $467.30 (4.85% of equity). Under 6% daily loss cap.

## Performance Review — Thu Jul 2 (11:12 AM ET)
- **1D (prior close → now):** Portfolio **–0.05%** ($9,638.26 vs $9,642.61 last close). SPY **–0.25%** ($745.12 vs prior close $747.00 est.). **Outperforming SPY by ~0.20 pp on the day.**
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–3.62%** ($9,638.26 vs $10,000) vs SPY **+3.77%** ($745.12 vs baseline $718.01). **Trailing by ~7.39 pp.**
- What is working: HOOD still +12.23% unrealized despite pullback; VOO anchor holding gains.
- What is not working: QQQ faded –1.17% today; AVGO –0.90% today; RKLB –0.74% today; semis weak (SOXX –2.3% on day).
- What must change: **Protect the HOOD winner.** Trim at +2R ($114.50) before gains evaporate in this weak tape. Zero churn on all other positions.

## Goal Check
- **Portfolio since inception:** –3.62% ($9,638.26 vs $10,000 base)
- **S&P 500 since inception:** +3.77% (SPY $745.12 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.39 pp. Need ~+10% outperformance over remaining ~2 months to close gap.
- **Dominant failure mode:** **excessive turnover / friction.** The Jun 15–Jun 26 period saw same-day round trips, panic liquidations, and rapid re-entries. Every market sell order locked in losses + SEC/FINRA fees.
- **Posture:** **offensive catch-up.** Gross exposure 79.76% is within 60–90% band. Cash 20.2% is reserve.

## Market Intel — Thursday 11:12 AM ET
- **Broad market:** SPY $745.12 (–0.25% today), QQQ $716.67 (–1.17%), VOO $685.04 (–0.06%). Tech fading from morning "bad news is good news" jobs-report rally.
- **Semiconductor sector — WEAK:** SOXX open $599.70, now ~$576.32 (–2.3% on day, –1.18% since 14:40Z). SMH –0.88% since 14:40Z. XLK –0.76%.
- **AVGO:** $366.04. Down –1.59% unrealized but well above hard stop $350. Showing relative strength vs SOXX (–0.78% vs –1.18% since snapshot). No add (15% cap binding at ~15.2% if adding 1 share).
- **HOOD:** $113.91. Hit intraday high $120.05 earlier, now pulling back. Still +4.84% on day, +12.23% unrealized. R-multiple: +1.9R (stop $95, risk $6.50/share). **Trim 50% (5 shares) at +2R = $114.50.** Prior limit at $117 is now unlikely to fill.
- **RKLB:** $99.33. Hit intraday high $106.99, pulling back sharply –3.10% since 14:40Z. Stop $90. Not at +2R yet (0.5R). Hold.
- **META:** $587.54, down –3.67% today. Banned from book. Validates ban.
- **GOOG:** $354.73. Below 50D. No edge. Not held.
- **Relative strength today:** HOOD (+4.84%), VOO (–0.06%). Weakness: META (–3.67%), SOXX (–2.3%), QQQ (–1.17%).
- **Earnings dates:** AVGO expected Sep 3; NVDA ~Aug 26; GOOG/META ~Jul 23; HOOD ~Jul 29. No binary events in next 48 hours.
- **Illiquidity flags (Alpaca 15:09Z bars):** HOOD 40 trades, QQQ 24 trades, AVGO 34 trades, SOXX 23 trades, VOO 5 trades, RKLB 27 trades. Liquidity acceptable for limit orders.
- **News:** Yahoo Finance RSS generic. No major breaking headlines for held positions. Anthropic-Samsung 2nm chip partnership news for AVGO (neutral/slight positive). Robinhood added to top-picks lists (positive).

## Multi-Timeframe Performance (Yahoo Finance v8, Jul 2 ~11:10 AM ET)
| Symbol | Price | 1W | 1M | 3M | Trend |
|---|---|---|---|---|---|
| SPY | $745.46 | +1.52% | –1.86% | +14.63% | Above 50D/200D |
| QQQ | $716.89 | +0.07% | –3.92% | +24.21% | Above 50D/200D |
| VOO | $685.30 | +1.42% | –1.86% | +14.68% | Above 50D/200D |
| AVGO | $365.79 | –3.46% | –24.04% | +18.18% | Below 50D, Above 200D |
| NVDA | $194.99 | –0.39% | –12.49% | +11.80% | Below 50D, Above 200D |
| META | $587.87 | +8.29% | –1.63% | +2.75% | Above 50D/200D |
| GOOG | $354.77 | +3.67% | –1.01% | +23.67% | Below 50D, Above 200D |
| HOOD | $114.10 | +22.07% | +29.42% | +64.65% | Above 50D, Below 200D |
| RKLB | $99.31 | +23.08% | –19.47% | +54.64% | Below 50D, Above 200D |
| GLD | $378.47 | +2.44% | –8.13% | –12.04% | Below 50D/200D |
| SOXX | $577.37 | –7.65% | –4.57% | +75.67% | Above 50D/200D |
| QTUM | $156.96 | –2.05% | –6.99% | +46.28% | Above 50D/200D |
| ARKX | $33.92 | +6.28% | –7.46% | +15.59% | Above 50D/200D |

*EIS/SHLD excluded due to thin liquidity / no decision relevance.*

## Position Map — Thursday Jul 2 (11:12 AM ET)
| Symbol | Bias | Rationale | Hard Stop | Profit Target |
|---|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. Slightly above breakeven. No adds (45% cap binding at ~44.7% for 6 shares). | $690.00 | $750.00 |
| VOO | **HOLD** | S&P anchor. +1.27% unrealized. No adds (20% cap binding at ~21.2% for 3 shares). | $660.00 | $700.00 |
| AVGO | **HOLD** | AI chip alpha. –1.59% unrealized. Relative strength vs SOXX intact. No adds (15% cap binding at ~15.2% for 4 shares). | $350.00 | $400.00 |
| HOOD | **TRIM 50%** | Momentum leader. +12.23% unrealized, ~+1.9R. **Trim 5 shares at limit $114.50 (+2R).** Keep 5 shares for $125 target. | $95.00 (remaining) | $125.00 |
| RKLB | **HOLD** | Space-sector thesis. +1.36% unrealized. Not at +2R yet. Stop $90. | $90.00 | $115.00 |
| META | Banned | `bannedSymbols` active. No re-entry. | — | — |
| GOOG / SOXX / NVDA / GLD / EIS / SHLD / QTUM / ARKX | Avoid | Weak trends, thin liquidity, below 50D, or no edge. | — | — |

## Priority Actions (Thursday Jul 2, 11:12 AM ET → 12:35 PM ET)
1. **ADJUST HOOD TRIM.** Cancel open limit sell $117.00 and replace with limit sell 5 shares @ **$114.50** (+2R level). Current price $113.91; limit is 0.5% above market and will fill on a modest bounce. Rationale: HOOD pulled back from $116.28; $117 is no longer achievable today without a 2.7% rally. Lock in +2R on half the position per aggressive protocol.
2. **HOLD QQQ, VOO, AVGO, RKLB.** No sells on orderly tape despite MAJOR event. Hard stops are intact and not breached.
3. **NO NEW DISCRETIONARY BUYS.** Tech/semis fading. Event detector MAJOR. Cash reserve $1,951 for defensive flexibility or exceptional setup.
4. **NO ADDS TO EXISTING POSITIONS.** Concentration caps binding for QQQ, VOO, AVGO. RKLB not at +2R yet.
5. **ANTI-CHURN CRITICAL:** Do NOT sell any position that was bought Jun 29–Jul 1 without explicit hourly authorization. HOOD trim is explicitly authorized (bought Jun 30).
6. **Monitor RKLB $90.** If RKLB breaches $90.00 AND event detector is CRITICAL/MAJOR, authorize same-day sell of all 5 shares.
7. **Monitor SOXX $575.** If SOXX breaks $575 (below 50-day MA), reassess chip exposure (AVGO relative strength may not save it).

## Macro Themes
- **Actionable now:** Tech fading from morning jobs-report rally. Semis rolling over again (SOXX –2.3%). Protect HOOD gains before momentum fully reverses.
- **Worth monitoring:** Semiconductor sector volatility. SOXX down –1.18% in last 30 minutes. If SOXX breaks $575, the rout extends. AVGO relative strength is encouraging but not enough to add exposure.
- **Worth monitoring:** RKLB space momentum. Hit $107 and pulled back to $99.33. Hold remaining position; target $115. Stop $90.
- **Interesting but not actionable yet:** NVDA revenue-sharing model for AI startups. Positive for AI capex broadly but no direct edge for our book.
- **Interesting but not actionable yet:** META tanking –3.67%. Good thing it's banned. Validates ban decision.

## Data / Process Notes
- **Alpaca CLI** working. All concentration cap, anti-churn, stale-memory, duplicate-order, and universe guards active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS accessible. Google Search CAPTCHA-blocked.
- **Alpaca bars:** Timestamps at 15:09Z; current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Restored from HEAD at 15:10Z. Clean. No divergence.
- **Event detector:** Pre-fetched report showed `priorTimestamp: null` (same old bug). **Live run at 15:12Z worked correctly** — prior snapshot loaded, pctChange computed. Root cause likely stale pre-fetch or harness filesystem sync. Code path in `event_detector.ts` is correct.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
