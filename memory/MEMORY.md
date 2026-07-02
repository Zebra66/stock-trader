# Hourly Macro Memory
*Updated 2026-07-02 15:35Z (Thursday 11:35 AM ET). Market OPEN until 20:00Z. Next tactical: :40/:50 windows.*

## Critical Process Note — Repo Integrity
- **2026-07-02 15:10Z:** Working-tree `memory/MEMORY.md`, `memory/todo.md`, `src/tools/*.ts`, and `prompts/*.txt` were reverted to **May 29** content while `git HEAD` contained current July 2 commits.
- **Root cause:** Concurrent agent or harness pre-fetch overwrote working-tree files with stale snapshots.
- **Resolution:** `git restore .` from HEAD restored all tracked files. Branch confirmed up to date with origin/main (0 ahead/0 behind). `.gitignore` verified effective.
- **Lesson:** Pre-fetched context can be stale even when git HEAD is current. Always verify working-tree files against `git show HEAD:<file>` before acting.

---

## Tactical Cycle Execution — 2026-07-02 15:35Z (Thursday 11:35 AM ET)
- **Status:** Market OPEN. Event detector **MINOR** (recovered from MAJOR at 15:10Z).
- **Action taken:** No action. HOOD limit SELL 5 @ $114.50 remains open (unfilled since 15:16Z).
- **Tactical notes:** Tactical agent at 15:20Z and 15:30Z logged "Hold all, HOOD trim pending." No unauthorized trades. No concealment risk.
- **Current open orders:** HOOD limit SELL 5 @ $114.50 (order `b07a3040-8f50-4a14-a4c2-c615b12f7644`, status `new`, day order).
- **Holdings unchanged:** QQQ 5, VOO 2, AVGO 3, HOOD 10 (5 available, 5 reserved by open sell), RKLB 5.
- **Gross exposure:** ~79.8% (unchanged until fill). Post-fill exposure will be ~73.8%.
- **Daytrade count:** 0/3 (no daytrades created).
- **Anti-churn:** No same-day round trips. All holds authorized.

## Hourly Cycle Summary — 2026-07-02 15:35Z (Thursday 11:35 AM ET)
- **Status:** Market OPEN. Tape bouncing back from MAJOR event at 15:10Z. Tech/semis stabilizing. RKLB recovered from sharp pullback.
- **Live broker refresh:** Equity **$9,667.18** | Cash **$1,950.97** | Long **$7,715.37** | Gross **79.81%** | Daytrade **0/3**.
- **Holdings confirmed:** QQQ 5 ($3,592.43, +0.43%), VOO 2 ($1,372.02, +1.41%), AVGO 3 ($1,099.19, –1.49%), HOOD 10 ($1,143.20, +12.63%), RKLB 5 ($508.53, +3.78%).
- **Open orders:** HOOD limit SELL 5 @ $114.50 (order `b07a3040-8f50-4a14-a4c2-c615b12f7644`, status `new`, day order).
- **Filled trades since prior hourly (Jul 2 15:15Z):** NONE. HOOD limit sell at $114.50 remains unfilled.
- **Universe compliance:** All 5 holdings in universe. No breach.
- **Branch:** Up to date with origin/main.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $718.49 | $3,592.43 | 37.2% | +$15.53 | +0.43% |
| VOO | 2 | $676.46 | $686.01 | $1,372.02 | 14.2% | +$19.10 | +1.41% |
| AVGO | 3 | $371.95 | $366.40 | $1,099.19 | 11.4% | –$16.67 | –1.49% |
| HOOD | 10 | $101.50 | $114.32 | $1,143.20 | 11.8% | +$128.20 | +12.63% |
| RKLB | 5 | $98.00 | $101.71 | $508.53 | 5.3% | +$18.53 | +3.78% |
| Cash | — | — | — | $1,950.97 | 20.2% | — | — |
| **Equity** | — | — | — | **$9,667.18** | **100%** | — | **–3.33%** |

- **Gross long exposure:** 79.81%
- **Net exposure:** 79.81%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Portfolio heat (entry-to-stop):** $330.67 (3.42% of equity). Under 6% daily loss cap.

## Performance Review — Thu Jul 2 (11:35 AM ET)
- **1D (prior close → now):** Portfolio **+0.25%** ($9,667.18 vs $9,642.61 last close). SPY **–0.14%** ($745.99 vs prior close $747.00 est.). **Outperforming SPY by ~0.39 pp on the day.**
- **1W:** Portfolio estimated **+3.6%** (blend of holdings vs blended entries). SPY **+1.52%**. **Outperforming by ~2.1 pp.**
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–3.33%** ($9,667.18 vs $10,000) vs SPY **+3.90%** ($745.99 vs baseline $718.01). **Trailing by ~7.23 pp.**
- What is working: HOOD +12.63% unrealized, +5.2% today; RKLB recovered to +3.78%; VOO anchor +1.41%.
- What is not working: AVGO –1.49% unrealized, semis weak; QQQ faded –0.9% today from morning highs.
- What must change: **Lock in HOOD +2R trim.** That single trade adds ~$65 realized P&L (+0.67% of equity) and reduces heat. Zero churn on all other positions.

## Goal Check
- **Portfolio since inception:** –3.33% ($9,667.18 vs $10,000 base)
- **S&P 500 since inception:** +3.90% (SPY $745.99 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.23 pp. Need ~+10% outperformance over remaining ~2 months to close gap.
- **Dominant failure mode:** **excessive turnover / friction.** The Jun 15–Jun 26 period saw same-day round trips, panic liquidations, and rapid re-entries. Every market sell order locked in losses + SEC/FINRA fees.
- **Posture:** **offensive catch-up.** Gross exposure 79.81% is within 60–90% band. Cash 20.2% is reserve.

## Market Intel — Thursday 11:35 AM ET
- **Broad market:** SPY $745.99 (–0.14% today), QQQ $717.86 (–0.9% today), VOO $685.72 (–0.04% today). Tech faded from morning "bad news is good news" jobs-report rally but stabilizing.
- **Semiconductor sector — RECOVERING:** SOXX $578.67 (–2.3% on day but +0.70% since 15:30Z). SMH +0.56% since 15:30Z. The MAJOR event at 15:10Z has resolved to MINOR.
- **AVGO:** $366.40. Down –1.49% unrealized but well above hard stop $350. Showing relative strength vs SOXX on the recovery.
- **HOOD:** $114.32. Hit intraday high $120.05 earlier, pulled back to $113.67 at 15:30Z, now bouncing. Still +5.2% on day, +12.63% unrealized. R-multiple: +1.97R (stop $95, risk $6.50/share). **Trim 50% (5 shares) at +2R = $114.50.** Limit is 16 cents above market and will fill on modest bounce.
- **RKLB:** $101.71. Hit intraday high $106.99, pulled back sharply to ~$99.33, now recovered to $101.71. Stop $90. Not at +2R yet (0.57R). Hold.
- **META:** $588.32, down –3.6% today. Banned from book. Validates ban.
- **GOOG:** $354.27, below 50D. No edge. Not held.
- **Relative strength today:** HOOD (+5.2%), RKLB (+1.6%). Weakness: META (–3.6%), SOXX (–2.3%), QQQ (–0.9%).
- **Earnings dates:** AVGO expected Sep 3; NVDA ~Aug 26; GOOG/META ~Jul 23; HOOD ~Jul 29. No binary events in next 48 hours.
- **Illiquidity flags (Alpaca 15:34Z bars):** HOOD 27 trades, QQQ 24 trades, AVGO 45 trades, SOXX 32 trades, VOO 3 trades, RKLB 7 trades. Liquidity acceptable for limit orders. VOO/RKLB slightly thin.
- **News:**
  - HOOD: Added to Mizuho Securities top picks list for July (positive).
  - AVGO: Anthropic exploring Samsung 2nm chip partnership — competitive pressure on NVDA, neutral/slight positive for AVGO as AI infrastructure diversify.
  - QQQ/Mag 7: Lost $2.3T market cap in June, largest monthly loss ever. AI fear driving June selloff. Nasdaq still heading for best quarter since 2020.
- **Jobs report:** June payrolls rose only 57K (weak). Initially rallied markets on Fed-cut hopes, but tech faded. "Bad news is good news" trade failed to sustain in semis.

## Multi-Timeframe Performance (Yahoo Finance v8, Jul 2 ~11:35 AM ET)
| Symbol | Price | 1W | 1M | 3M | Trend |
|---|---|---|---|---|---|
| SPY | $745.99 | +1.52% | –1.86% | +14.63% | Above 50D/200D |
| QQQ | $717.86 | +0.07% | –3.92% | +24.21% | Above 50D/200D |
| VOO | $685.72 | +1.42% | –1.86% | +14.68% | Above 50D/200D |
| AVGO | $366.40 | –3.46% | –24.04% | +18.18% | Below 50D, Above 200D |
| NVDA | $195.44 | –0.39% | –12.49% | +11.80% | Below 50D, Above 200D |
| META | $588.32 | +8.29% | –1.63% | +2.75% | Above 50D/200D |
| GOOG | $354.27 | +3.67% | –1.01% | +23.67% | Below 50D, Above 200D |
| HOOD | $114.32 | +22.07% | +29.42% | +64.65% | Above 50D, Below 200D |
| RKLB | $101.71 | +23.08% | –19.47% | +54.64% | Below 50D, Above 200D |
| GLD | $378.91 | +2.44% | –8.13% | –12.04% | Below 50D/200D |
| SOXX | $578.67 | –7.65% | –4.57% | +75.67% | Above 50D/200D |
| QTUM | $157.00 | –2.05% | –6.99% | +46.28% | Above 50D/200D |
| ARKX | $34.01 | +6.28% | –7.46% | +15.59% | Above 50D/200D |

*EIS/SHLD excluded due to thin liquidity / no decision relevance.*

## Position Map — Thursday Jul 2 (11:35 AM ET)
| Symbol | Bias | Rationale | Hard Stop | Profit Target |
|---|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. Slightly above breakeven. No adds (45% cap binding at ~44.6% for 6 shares). | $690.00 | $750.00 |
| VOO | **HOLD** | S&P anchor. +1.41% unrealized. No adds (20% cap binding at ~21.2% for 3 shares). | $660.00 | $700.00 |
| AVGO | **HOLD** | AI chip alpha. –1.49% unrealized. Relative strength vs SOXX intact. No adds (15% cap binding at ~15.1% for 4 shares). | $350.00 | $400.00 |
| HOOD | **TRIM 50%** | Momentum leader. +12.63% unrealized, ~+1.97R. **Trim 5 shares at limit $114.50 (+2R).** Keep 5 shares for $125 target. | $95.00 (remaining) | $125.00 |
| RKLB | **HOLD** | Space-sector thesis. +3.78% unrealized. Not at +2R yet. Stop $90. | $90.00 | $115.00 |
| META | Banned | `bannedSymbols` active. No re-entry. | — | — |
| GOOG / SOXX / NVDA / GLD / EIS / SHLD / QTUM / ARKX | Avoid | Weak trends, thin liquidity, below 50D, or no edge. | — | — |

## Priority Actions (Thursday Jul 2, 11:35 AM ET → 12:35 PM ET)
1. **HOLD HOOD TRIM AT $114.50.** Current price $114.32; limit is 16 cents above market and will fill on modest bounce. Do NOT lower the limit. The +2R level is the systematic profit target. Discipline > chasing.
2. **HOLD QQQ, VOO, AVGO, RKLB.** No sells on orderly tape despite earlier MAJOR event. Hard stops intact and not breached.
3. **NO NEW DISCRETIONARY BUYS.** Tape recovering but still fragile. Cash reserve $1,951 for defensive flexibility or exceptional setup.
4. **NO ADDS TO EXISTING POSITIONS.** Concentration caps binding for QQQ, VOO, AVGO. RKLB not at +2R yet.
5. **ANTI-CHURN CRITICAL:** Do NOT sell any position that was bought Jun 29–Jul 1 without explicit hourly authorization. HOOD trim is explicitly authorized (bought Jun 30).
6. **Monitor RKLB $90.** If RKLB breaches $90.00 AND event detector is CRITICAL/MAJOR, authorize same-day sell of all 5 shares.
7. **Monitor SOXX $575.** If SOXX breaks below $575 again on volume, reassess chip exposure (AVGO relative strength may not save it).
8. **Monitor HOOD $113.00.** If HOOD drops below $113.00 before trim fills, cancel limit and wait for next hourly authorization.

## Macro Themes
- **Actionable now:** Market bouncing back from MAJOR event. HOOD trim at +2R is the only authorized trade. Let the trim fill.
- **Worth monitoring:** Semiconductor sector recovery. SOXX bounced +0.70% from lows. If SOXX holds $575, the rout may be contained. AVGO relative strength is encouraging.
- **Worth monitoring:** RKLB space momentum. Hit $107, pulled back to ~$99, recovered to $101.71. Hold remaining position; target $115. Stop $90.
- **Interesting but not actionable yet:** Mag 7 lost $2.3T in June. AI fear is real but may be peaking. If AI stocks stabilize in July, QQQ/AVGO could rebound sharply.
- **Interesting but not actionable yet:** META tanking –3.6%. Good thing it's banned. Validates ban decision.

## Data / Process Notes
- **Alpaca CLI** working. All concentration cap, anti-churn, stale-memory, duplicate-order, and universe guards active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS accessible. Google Search CAPTCHA-blocked.
- **Alpaca bars:** Timestamps at 15:34Z; current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Restored from HEAD at 15:10Z. Clean. No divergence.
- **Event detector:** Working correctly. MINOR classification at 15:35Z (recovered from MAJOR at 15:10Z).
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
