# Hourly Macro Memory
*Updated 2026-07-02 16:35Z (Thursday 12:35 PM ET). Market OPEN until 20:00Z. Next tactical: :40/:50 windows. Next hourly: 17:35Z (1:35 PM ET).*

## Critical Process Note — Repo Integrity
- **2026-07-02 15:10Z:** Working-tree `memory/MEMORY.md`, `memory/todo.md`, `src/tools/*.ts`, and `prompts/*.txt` were reverted to **May 29** content while `git HEAD` contained current July 2 commits.
- **Root cause:** Concurrent agent or harness pre-fetch overwrote working-tree files with stale snapshots.
- **Resolution:** `git restore .` from HEAD restored all tracked files. Branch confirmed up to date with origin/main (0 ahead/0 behind). `.gitignore` verified effective.
- **Lesson:** Pre-fetched context can be stale even when git HEAD is current. Always verify working-tree files against `git show HEAD:<file>` before acting.

---

## Live Book (Alpaca) — TRUE STATE — 16:35Z
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $711.46 | $3,557.30 | 37.1% | –$19.60 | –0.55% |
| VOO | 2 | $676.46 | $682.67 | $1,365.34 | 14.2% | +$12.42 | +0.92% |
| AVGO | 3 | $371.95 | $359.25 | $1,077.75 | 11.2% | –$38.10 | –3.41% |
| HOOD | 5 | $101.50 | $111.325 | $556.63 | 5.8% | +$49.13 | +9.68% |
| RKLB | 5 | $98.00 | $99.92 | $499.60 | 5.2% | +$9.60 | +1.96% |
| Cash | — | — | — | $2,523.52 | 26.3% | — | — |
| **Equity** | — | — | — | **$9,581.80** | **100%** | — | **–4.18%** |

- **Gross long exposure:** 73.7%
- **Net exposure:** 73.7%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Portfolio heat (entry-to-stop):** $298.17 (3.11% of equity). Under 6% daily loss cap.
- **Account health:** trading_blocked=false, account_blocked=false, pattern_day_trader=false. All green.

## Tactical Cycle Execution — 2026-07-02 16:30Z (Thursday 12:30 PM ET)
- **Status:** Market OPEN. Event detector **NONE** at 16:35Z.
- **Action taken:** No action. All holds remain authorized.
- **Tactical notes:** Tactical agent at 16:10Z, 16:20Z, 16:30Z logged "Hold all, no triggers met." No unauthorized trades. No concealment risk.
- **Current open orders:** NONE.
- **Holdings unchanged:** QQQ 5, VOO 2, AVGO 3, HOOD 5, RKLB 5.
- **Gross exposure:** 73.7%.
- **Daytrade count:** 0/3 (clean slate).
- **Anti-churn:** No same-day round trips.

## Hourly Cycle Summary — 2026-07-02 15:35Z (Thursday 11:35 AM ET)
- **Status:** Market OPEN. Tape bouncing back from MAJOR event at 15:10Z. Tech/semis stabilizing. RKLB recovered from sharp pullback.
- **Live broker refresh:** Equity **$9,667.18** | Cash **$1,950.97** | Long **$7,715.37** | Gross **79.81%** | Daytrade **0/3**.
- **Holdings confirmed:** QQQ 5 ($3,592.43, +0.43%), VOO 2 ($1,372.02, +1.41%), AVGO 3 ($1,099.19, –1.49%), HOOD 10 ($1,143.20, +12.63%), RKLB 5 ($508.53, +3.78%).
- **Open orders:** HOOD limit SELL 5 @ $114.50 (order `b07a3040-8f50-4a14-a4c2-c615b12f7644`, status `new`, day order).
- **Filled trades since prior hourly (Jul 2 15:15Z):** NONE at 15:35Z. HOOD limit sell at $114.50 **filled at 15:38Z** at $114.51.
- **Universe compliance:** All 5 holdings in universe. No breach.
- **Branch:** Up to date with origin/main.

---

## Performance Review — Thu Jul 2 (12:35 PM ET)
- **1D (prior close → now):** Portfolio **–0.63%** ($9,581.80 vs $9,642.61 last equity). SPY **–0.58%** ($742.70 vs prior close est. $747.00). **Matching SPY, slightly underperforming by ~0.05 pp on the day.**
- **1W:** Portfolio estimated **+2.5%** (blend of holdings vs blended entries). SPY **+1.14%**. **Outperforming by ~1.4 pp.**
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–4.18%** ($9,581.80 vs $10,000) vs SPY **+3.44%** ($742.70 vs baseline $718.01). **Trailing by ~7.62 pp.**
- What is working: HOOD +9.68% unrealized, +2.46% today; VOO anchor +0.92%; RKLB +1.96% unrealized.
- What is not working: AVGO –3.41% unrealized, semis weak; QQQ –0.55% unrealized, tech faded –1.89% today.
- What must change: **Preserve capital on weak days.** No new risk until tape stabilizes or a clear high-conviction setup appears. Let HOOD run to $125. Let RKLB run to $115. Keep AVGO stop at $350. If semis continue to selloff, reassess at next hourly.

## Goal Check
- **Portfolio since inception:** –4.18% ($9,581.80 vs $10,000 base)
- **S&P 500 since inception:** +3.44% (SPY $742.70 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.62 pp. Need ~+8-10% outperformance over remaining ~1 month to close gap.
- **Dominant failure mode:** **excessive turnover / friction.** The Jun 15–Jun 26 period saw same-day round trips, panic liquidations, and rapid re-entries. Every market sell order locked in losses + SEC/FINRA fees.
- **Posture:** **offensive catch-up** with elevated selectivity. Gross exposure 73.7% is within 60–90% band. Cash 26.3% is defensive reserve.

## Market Intel — Thursday 12:35 PM ET
- **Broad market:** SPY $742.70 (–0.58% today), QQQ $711.08 (–1.89% today), VOO $682.70 (–0.35% today). Tech faded from morning "bad news is good news" jobs-report rally.
- **Semiconductor sector — WEAK:** SOXX $563.87 (–2.8% on day). Chips stocks drowning Nasdaq again. Sandisk slides 10%. Asia selloff in Samsung/SK Hynix dragging global chip names.
- **AVGO:** $359.25. Down –3.41% unrealized but well above hard stop $350. Showing relative strength vs SOXX on daily/weekly (AVGO 1W -5.31% vs SOXX -9.81%).
- **HOOD:** $111.33. Hit intraday high $120.05 earlier, pulled back to ~$111.33. Still +2.46% on day, +9.68% unrealized. Positive news: perpetual futures in Europe, AI trading platform, global expansion push. R-multiple: +1.51R (stop $95, risk $6.50/share). Trim already completed at +2R = $114.51. Let remaining 5 shares run to $125.
- **RKLB:** $99.92. Hit intraday high $106.99, pulled back sharply to ~$99.33, now stable at $99.92. Stop $90. At +0.49R. Hold.
- **META:** $586.05, down –2.3% today. Banned from book. Validates ban.
- **GOOG:** $351.72, flat/down. Below 50D. No edge. Not held.
- **Relative strength today:** HOOD (+2.46%), RKLB (flat). Weakness: SOXX (–2.8%), QQQ (–1.89%), AVGO (–2.73%).
- **Earnings dates:** AVGO expected Sep 3; NVDA ~Aug 26; GOOG/META ~Jul 23; HOOD ~Jul 29. No binary events in next 48 hours.
- **Illiquidity flags (Alpaca 16:34Z bars):** HOOD 32 trades, QQQ 16 trades, AVGO 28 trades, SOXX 16 trades, VOO 2 trades, RKLB 15 trades. Liquidity acceptable for limit orders. VOO slightly thin.
- **News highlights:**
  - HOOD: Robinhood launched perpetual futures in Europe, introduced blockchain and AI trading platform, global expansion push (positive).
  - RKLB: CEO Peter Beck bet $8B on Iridium acquisition; stock up 16% weekly since deal (positive).
  - Semis: AI chip stocks fall after Asia selloff; Sandisk down 10% (negative).
  - Mag 7: Lost $2.3T in June, largest monthly loss ever. AI fear driving June selloff (negative but may be peaking).
- **Jobs report:** June payrolls rose only 57K (weak). Initially rallied markets on Fed-cut hopes, but tech faded. "Bad news is good news" trade failed to sustain in semis.

## Multi-Timeframe Performance (Yahoo Finance v8, Jul 2 ~12:35 PM ET)
| Symbol | Price | 1W | 1M | 3M | Trend |
|---|---|---|---|---|---|
| SPY | $742.70 | +1.14% | –2.22% | +13.35% | Above 50D/200D |
| QQQ | $711.08 | –0.74% | –4.70% | +21.70% | Above 50D/200D |
| VOO | $682.70 | +1.03% | –2.23% | +13.35% | Above 50D/200D |
| AVGO | $358.80 | –5.31% | –25.49% | +14.45% | Below 50D, Above 200D |
| NVDA | $193.32 | –1.24% | –13.24% | +10.00% | Below 50D, Above 200D |
| META | $586.05 | +7.95% | –1.94% | +1.18% | Above 50D/200D |
| GOOG | $351.72 | +2.79% | –1.86% | +19.27% | Below 50D, Above 200D |
| HOOD | $111.28 | +19.05% | +26.22% | +58.71% | Above 50D, Below 200D |
| RKLB | $99.78 | +23.65% | –19.09% | +52.28% | Below 50D, Above 200D |
| GLD | $376.72 | +1.97% | –8.55% | –13.95% | Below 50D/200D |
| SOXX | $563.87 | –9.81% | –6.80% | +66.56% | Above 50D/200D |
| QTUM | $154.79 | –3.40% | –8.28% | +41.63% | Above 50D/200D |
| ARKX | $33.73 | +5.67% | –7.99% | +12.77% | Above 50D/200D |

*EIS/SHLD excluded due to thin liquidity / no decision relevance.*

## Position Map — Thursday Jul 2 (12:35 PM ET)
| Symbol | Bias | Rationale | Hard Stop | Profit Target |
|---|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. Breakeven $715.38. Slight unrealized loss. No adds (45% cap binding). | $690.00 | $750.00 |
| VOO | **HOLD** | S&P anchor. +0.92% unrealized. No adds (20% cap binding). | $660.00 | $700.00 |
| AVGO | **HOLD** | AI chip alpha. –3.41% unrealized. Relative strength vs SOXX on weekly. Stop $350 is tight ($9.25 away). | $350.00 | $400.00 |
| HOOD | **HOLD** | Trim complete at $114.51. 5 shares remain. +9.68% unrealized. Target $125. Stop $95. | $95.00 | $125.00 |
| RKLB | **HOLD** | Space-sector thesis ($8B Iridium deal). +1.96% unrealized. Not at +2R yet. Stop $90. | $90.00 | $115.00 |
| META | Banned | `bannedSymbols` active. No re-entry. | — | — |
| GOOG / SOXX / NVDA / GLD / EIS / SHLD / QTUM / ARKX | Avoid | Weak trends, thin liquidity, below 50D, or no edge. | — | — |

## Priority Actions (Thursday Jul 2, 12:35 PM ET → 1:35 PM ET)
1. **HOLD ALL POSITIONS.** Tape is weak but orderly (event detector NONE). No hard stops breached.
2. **NO NEW DISCRETIONARY BUYS.** Market in tech-led selloff. Preserve cash for exceptional setup.
3. **NO ADDS TO EXISTING POSITIONS.** Concentration caps binding for QQQ, VOO, AVGO. RKLB/HOOD not at +2R.
4. **MONITOR AVGO $350.** If AVGO breaches $350.00 AND event detector is CRITICAL/MAJOR, authorize same-day sell of all 3 shares.
5. **MONITOR SOXX $560.** If SOXX breaks below $560 on volume, reassess chip exposure (AVGO stop may not be enough).
6. **ANTI-CHURN CRITICAL:** Do NOT sell any position that was bought Jun 29–Jul 1 without explicit hourly authorization.
7. **Let HOOD run to $125.** Remaining 5 shares are house money. Positive news catalysts in play.
8. **Let RKLB run to $115.** Space thesis intact. Hold through pullback.

## Macro Themes
- **Actionable now:** Market weak but orderly. HOOD and RKLB are relative strength leaders with positive idiosyncratic news. The only action is hold and let winners run.
- **Worth monitoring:** Semiconductor sector weakness. SOXX down -2.8% today, -9.81% this week. Asia selloff in Samsung/SK Hynix is dragging global chips. If SOXX holds $560, the rout may be contained. If not, AVGO stop at $350 may be tested.
- **Worth monitoring:** RKLB space momentum. Hit $107, pulled back to ~$99.33, stable at $99.92. Hold remaining position; target $115. Stop $90.
- **Interesting but not actionable yet:** Mag 7 lost $2.3T in June. AI fear is real but may be peaking. If AI stocks stabilize in July, QQQ/AVGO could rebound sharply.
- **Interesting but not actionable yet:** META tanking. Good thing it's banned. Validates ban.

## Data / Process Notes
- **Alpaca CLI** working. All concentration cap, anti-churn, stale-memory, duplicate-order, and universe guards active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS accessible. Google Search CAPTCHA-blocked.
- **Alpaca bars:** Timestamps at 16:34Z; current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Clean. No divergence from HEAD. Only memory files modified by tactical agent.
- **Event detector:** Working correctly. NONE classification at 16:35Z.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
