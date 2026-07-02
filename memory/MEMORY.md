# Hourly Macro Memory
*Updated 2026-07-02 13:35Z (Thursday 9:35 AM ET). Market OPEN (closes 20:00Z). Next regular session hourly: 2026-07-02 14:35Z (Thursday 10:35 AM ET).*

## Tactical Autonomous Override — 2026-07-02 13:30Z (Thursday 9:30 AM ET)
- **[AUTONOMOUS_OVERRIDE]** Event detector classification: **CRITICAL** (GLD up +1.51%).
- **Held positions evaluated:** AVGO MINOR (-1.85%), HOOD MAJOR (+4.28% up), QQQ OK (-0.27%), RKLB OK (-0.32%), VOO OK (+0.14%).
- **Protective sells:** NONE executed. No position breached its authorized hard stop.
- **Buy suspensions:** No active BUY triggers to suspend; all symbols already blocked with `DO NOT BUY` in todo.md.
- **Exposure:** Gross long exposure 79.9%, unchanged. No new positions opened.
- **Resolved at 13:35Z:** Event detector upgraded to NONE. CRITICAL window was brief (~5 min).

## Hourly Cycle Summary — 2026-07-02 13:35Z (Thursday 9:35 AM ET)
- **Status:** Market OPEN. Tape orderly on 5-min timeframe. Event detector **NONE** at 13:35Z.
- **Pre-first-hourly tactical validation:** `get-orders --status open` returned NONE. `get-orders --status closed` shows most recent fill was RKLB on Jul 1 14:58Z. **No pre-hourly drift.** Daily trade budget 0/3.
- **Live broker refresh:** Equity $9,749.16 | Cash $1,950.97 | Long $7,798.19 | Gross 80.0% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5 ($3,629.30, +1.47%), VOO 2 ($1,375.74, +1.69%), AVGO 3 ($1,108.32, -0.68%), HOOD 10 ($1,174.15, +15.68%), RKLB 5 ($517.15, +5.54%).
- **Open orders:** NONE.
- **Filled trades since prior hourly (Jul 1 19:35Z):** NONE.
- **Universe compliance:** All 5 holdings in universe. No breach.
- **Code integrity:** All tracked source files match HEAD. No divergence.
- **Branch:** Up to date with origin/main (0 ahead, 0 behind).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $725.86 | $3,629.30 | 37.2% | +$52.40 | +1.47% |
| VOO | 2 | $676.46 | $687.87 | $1,375.74 | 14.1% | +$22.82 | +1.69% |
| AVGO | 3 | $371.95 | $369.44 | $1,108.32 | 11.4% | -$7.53 | -0.68% |
| HOOD | 10 | $101.50 | $117.42 | $1,174.15 | 12.0% | +$159.15 | +15.68% |
| RKLB | 5 | $98.00 | $103.43 | $517.15 | 5.3% | +$27.15 | +5.54% |
| Cash | — | — | — | $1,950.97 | 20.0% | — | — |
| **Equity** | — | — | — | **$9,749.16** | **100%** | — | **–2.51%** |

- **Gross long exposure:** 80.0%
- **Net exposure:** 80.0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Trading blocked:** false
- **Account blocked:** false
- **Portfolio heat (entry-to-stop):** $330.67 (3.39% of equity). Under 6% daily loss cap.
- **Portfolio heat (current-to-stop):** $584.71 (6.00% of equity). Elevated due to HOOD unrealized gains; entry-to-stop is the authorized risk metric.

## Performance Review — Thu Jul 2 (9:35 AM ET)
- **1D (prior close → now):** Portfolio **+1.10%** ($9,749.16 vs $9,642.61 last close). SPY **+0.34%** (~$748.28 vs prior close $745.76 per Yahoo). **Outperforming by ~0.76 pp on the day.**
- **1W (Jun 25 → Jul 2):** N/A — exact Jun 25 equity unavailable due to midweek churn.
- **2W (Jun 18 → Jul 2):** N/A — insufficient reliable equity history.
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–2.51%** ($9,749.16 vs $10,000) vs SPY **+4.22%** (~$748.28 vs baseline $718.01). **Trailing by ~6.73 pp.**
- What is working: HOOD surging +8.07% intraday, +15.68% unrealized. RKLB +3.36% intraday, +5.54% unrealized. VOO anchor +1.69%.
- What is not working: AVGO still -0.68% unrealized. QQQ only +1.47% unrealized despite core growth status.
- What must change: **ZERO CHURN.** Hold the 5 core positions. The gap to SPY narrowed by ~0.5 pp overnight. Do NOT interrupt the recovery with unnecessary trades.

## Goal Check
- **Portfolio since inception:** –2.51% ($9,749.16 vs $10,000 base)
- **S&P 500 since inception:** +4.22% (SPY ~$748.28 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~6.73 pp. Need ~+10% outperformance over remaining ~2 months to close gap.
- **Dominant failure mode:** **excessive turnover / friction.** The Jun 15–Jun 26 period saw same-day round trips, panic liquidations, and rapid re-entries. Every market sell order locked in losses + SEC/FINRA fees.
- **Posture:** **offensive catch-up.** Gross exposure 80.0% is within 60–90% band. Cash 20.0% is reserve. We must hold current positions and let winners run.

## Market Intel — Thursday 9:35 AM ET
- **Broad market:** SPY ~$748.28 (+0.34%), QQQ +0.26% ($725.86), VOO +0.42% ($687.87). Tape orderly on 5-min timeframe.
- **Jobs report:** June nonfarm payrolls came in weaker than expected. Market is rallying on "bad news is good news" rate-cut hopes. Growth/tech leading.
- **Semiconductor sector — STABILIZED:** SOXX prior close $599.33; current ~$598.73 (flat). Yesterday's -5.23% flush has not extended. AVGO showing slight relative strength vs SOXX over 2 days.
- **AVGO:** $369.44. Down -0.68% unrealized but well above hard stop $350. No add (15% cap binding at ~15.2% if adding 1 share).
- **HOOD:** $117.42. Up +8.07% intraday, +15.68% unrealized. New profit target raised to $125. Stop $95 far away. Momentum intact. Do NOT add today.
- **RKLB:** $103.43. Up +3.36% intraday. Space-sector momentum continues. Wedbush/SpaceX headlines validate. Stop $90. Profit target $115.
- **META:** $600.54, down -2.02% today. Still banned from book.
- **GOOG:** $357.09, up modestly. Below 50D. No edge.
- **Relative strength today:** HOOD (+8.07%), RKLB (+3.36%), VOO (+0.42%). Weakness: META (-2.02%), AVGO flat.
- **Earnings dates:** AVGO expected Sep 3; NVDA ~Aug 26; GOOG/META ~Jul 23; HOOD ~Jul 29. No binary events in next 48 hours.
- **Illiquidity flags (Alpaca 13:34Z bars):** HOOD 89 trades, QQQ 35 trades, AVGO 48 trades, SOXX 25 trades, VOO 19 trades, RKLB 24 trades. Liquidity acceptable for limit orders. Limit orders still preferred.

## Multi-Timeframe Performance (Yahoo Finance v8, Jul 2 ~9:35 AM ET)
| Symbol | Price | 1D | 1W | 1M | 3M | Trend |
|---|---|---|---|---|---|---|
| SPY | ~$748.28 | +0.34% | +2.00% | –1.30% | +17.60% | Above 50D/200D |
| QQQ | $725.86 | +0.26% | +2.91% | –2.19% | +24.43% | Above 50D/200D |
| VOO | $687.87 | +0.42% | +2.70% | –0.43% | +14.49% | Above 50D/200D |
| AVGO | $369.44 | +0.20% | +1.39% | –22.65% | +17.84% | Below 50D, Above 200D |
| NVDA | $198.35 | +0.39% | +3.02% | –7.53% | +11.95% | Below 50D, Above 200D |
| META | $600.54 | –2.02% | +9.14% | –3.51% | +4.64% | Above 50D/200D |
| GOOG | $357.09 | –0.22% | +6.69% | +0.46% | +21.34% | Below 50D, Above 200D |
| HOOD | $117.42 | +8.07% | +19.81% | +42.72% | +71.61% | Above 50D, Below 200D |
| RKLB | $103.43 | +3.36% | +23.59% | –8.91% | +54.27% | Below 50D, Above 200D |
| GLD | $379.34 | +2.36% | +1.53% | –6.99% | –11.66% | Below 50D/200D |
| SOXX | $598.73 | –0.16% | +1.49% | –2.71% | +76.38% | Above 50D/200D |
| QTUM | $161.35 | +0.62% | +3.45% | –3.66% | +46.98% | Above 50D/200D |
| EIS | N/A | N/A | N/A | N/A | N/A | N/A |
| SHLD | $63.71 | +4.10% | +9.46% | +0.96% | –13.58% | N/A |
| ARKX | $34.52 | +2.03% | +8.10% | –3.70% | +13.84% | N/A |

## Position Map — Thursday Jul 2 (9:35 AM ET)
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. +1.47% unrealized. Stop $690. Profit target $750. No adds (45% cap binding at ~44.7% for 6 shares). | 35–45% |
| VOO | **HOLD** | S&P anchor. +1.69% unrealized. Stop $660. Profit target $700. No adds (20% cap binding at ~21.1% for 3 shares). | 10–20% |
| AVGO | **HOLD** | AI chip alpha. –0.68% unrealized. Semis stabilized. Stop $350. Profit target $400. No adds (15% cap binding at ~15.2% for 4 shares). | 5–15% |
| HOOD | **HOLD** | Momentum leader. +15.68% unrealized. Stop $95. **New profit target $125.** Do NOT add today. | 8–15% |
| RKLB | **HOLD** | Space-sector thesis. Wedbush validates. +5.54% unrealized. Stop $90. Profit target $115. | 5–10% |
| META | Banned | `bannedSymbols` active. No re-entry. | 0% |
| GOOG | Avoid | €1.7B fine overhang; below 50D. No edge. | 0% |
| SOXX | Avoid / Monitor | Stabilized after –5.23% yesterday. Do NOT enter today. Have AVGO/QQQ exposure. Watch $600. | 0% |
| NVDA | Avoid | Below 50D. No edge over AVGO. | 0% |
| GLD | Avoid | Rallying on macro fears but below 50D/200D. Not a defensive regime. | 0% |
| EIS / SHLD / QTUM / ARKX | Avoid | Thin liquidity or no edge. | 0% |

## Priority Actions (Thursday Jul 2, 9:35 AM ET → 10:35 AM ET)
1. **HOLD ALL 5 CURRENT POSITIONS.** No sells on an orderly tape. Hard stops are far away.
2. **NO NEW DISCRETIONARY BUYS.** Cash 20.0% is reserve. Do not chase into the morning rally.
3. **NO ADDS TO EXISTING POSITIONS.** Concentration caps binding for QQQ, VOO, AVGO. HOOD and RKLB adds not authorized while surging.
4. **ANTI-CHURN CRITICAL:** Do NOT sell any position that was bought Jun 29–Jul 1 without explicit hourly authorization.
5. **Monitor HOOD $125.** If it approaches $125 on volume, next hourly will evaluate tiered trim. If it reverses below $110, reassess momentum.
6. **Event detector:** Classification NONE. No protective sells required.

## Macro Themes
- **Actionable now:** Weak jobs data fueling rate-cut hopes. Growth/tech rallying. Hold profitable core positions. Do not lighten into strength unless SPY breaches 50D (~$720 area).
- **Worth monitoring:** Semiconductor sector volatility. SOXX flat today after yesterday's flush. If SOXX holds $590–$600, the rout was a one-day event. AVGO relative strength confirms our chip thesis is intact.
- **Worth monitoring:** RKLB space momentum. Dan Ives Wedbush SpaceX call validates sector. Hold.
- **Interesting but not actionable yet:** NVDA revenue-sharing model for AI startups. Positive for AI capex broadly but no direct edge for our book.
- **Interesting but not actionable yet:** META AI cloud business plan. Rallying but banned from book.

---

## Tactical Autonomous Override — 2026-07-02 14:30Z (Thursday 10:30 AM ET)
- **[AUTONOMOUS_OVERRIDE]** Event detector classification: **CRITICAL** (SOXX -1.91%, SMH -1.52%, XLK -1.13%, QQQ -0.80%).
- **Held positions evaluated:** AVGO OK (-0.74%), HOOD MINOR (-2.46%), QQQ OK (-0.80%), RKLB MINOR (-2.26%), VOO OK (-0.35%).
- **Protective sells:** NONE executed. No position breached its authorized hard stop. No position classified CRITICAL or MAJOR in heldPositions array.
- **Buy suspensions:** All symbols already blocked with `DO NOT BUY` in todo.md. No active BUY triggers to suspend.
- **Exposure:** Gross long exposure ~80%, unchanged. No new positions opened.
- **Next hourly:** 14:35Z. Hourly strategist should reassess semiconductor/tech posture given SOXX break below $590.

## Data / Process Notes
- **Alpaca CLI** working. All concentration cap, anti-churn, stale-memory, duplicate-order, and universe guards restored to HEAD.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS accessible. Google Search CAPTCHA-blocked. Key headline: June jobs report weaker than expected; market climbing on rate-cut hopes.
- **Alpaca bars:** Timestamps at 13:30–13:34Z; current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Clean. No divergence in source. Tactical last-prices JSON updated to 13:35Z snapshot.
- **Code integrity:** All tracked source files match HEAD.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
