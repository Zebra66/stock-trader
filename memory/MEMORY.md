# Hourly Macro Memory
*Updated 2026-06-29 21:05Z (Monday 5:05 PM ET). Market CLOSED. Next regular session: Tuesday Jun 30 09:30 AM ET.*

## Hourly Cycle Summary — 2026-06-29 21:05Z (Monday post-close review)
- **Status:** Market CLOSED at 20:00Z (4:00 PM ET).
- **Final live broker refresh:** Equity $9,548.47 | Cash $3,456.00 | Long $6,092.47 | Gross 63.8% | Daytrade 0/3.
- **Final holdings confirmed:** QQQ 5 ($3,615.00, +1.07% unrealized), VOO 2 ($1,361.80, +0.66% unrealized), AVGO 3 ($1,115.67, –0.02% unrealized).
- **Open orders:** NONE.
- **Filled trades since prior hourly (18:35Z):** NONE. Tactical agent held at :40, :50, :10, :20, :30 windows.
- **Universe compliance:** All 3 holdings in universe. No breach.
- **Rapid-exposure-drift guard:** No unauthorized drift.
- **Concurrent execution:** No race conditions. No unauthorized orders.
- **Daytrade status:** 0/3. Clean slate for Tuesday.
- **Code integrity:** Clean. No unauthorized source changes.
- **Branch:** Up to date with origin/main.
- **Freshness:** Live Alpaca data matches pre-fetch. Event detector at 19:35Z confirmed NONE.
- **News scan:** No material new headlines since 18:35Z. Fed Cook ruling already priced. Broad tape orderly into close.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $723.00 | $3,615.00 | 37.9% | +$38.10 | +1.07% |
| VOO | 2 | $676.46 | $680.90 | $1,361.80 | 14.3% | +$8.88 | +0.66% |
| AVGO | 3 | $371.95 | $371.89 | $1,115.67 | 11.7% | –$0.18 | –0.02% |
| Cash | — | — | — | $3,456.00 | 36.2% | — | — |
| **Equity** | — | — | — | **$9,548.47** | **100%** | — | **–4.52%** |

- **Gross long exposure:** 63.8%
- **Net exposure:** 63.8%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Portfolio heat (entry-to-stop):** $225.67 (2.36% of equity). Under 6% daily loss cap.
- **Open orders:** NONE

## Performance Review — Mon Jun 29 (End of Day)
- **1D (today):** Portfolio +0.5% ($9,501.67 → $9,548.47) vs SPY ~+1.32%. **Underperforming by ~0.8 pp.** Cash drag on gap-up open; positions rallied into close.
- **1W (Jun 22 → Jun 29):** Portfolio ~–0.8% (est. $9,626 → $9,548) vs SPY ~–0.8%. **Roughly flat vs SPY.**
- **2W (Jun 15 → Jun 29):** Portfolio ~–2.0% (est. $9,745 → $9,548) vs SPY ~–0.5%. **Underperforming by ~1.5 pp.** Turnover damage on Jun 23/Jun 26 whipsaws.
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–4.52%** ($9,548.47 vs $10,000) vs SPY **+2.78%** (SPY $737.94 vs baseline $718.01). **Trailing by ~7.3 pp.**
- What is working: QQQ and VOO finished profitable. AVGO recovered from –0.9% to flat. No churn today. Blackout protocol worked.
- What is not working: SPY gap-up head start. Cash drag at 36.2%.
- What must change: Hold current core through Tuesday. Only add new exposure on high-conviction setups with fresh hourly authorization.

## Goal Check
- **Portfolio since inception:** –4.52% ($9,548.47 vs $10,000 base)
- **S&P 500 since inception:** +2.78% (SPY $737.94 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.3 pp.
- **Dominant failure mode:** **excessive turnover / friction.** Whipsaw cycle in June cost ~$100+ in realized losses. The 09:35Z deployment today was the first clean limit-buy entry in over a week. We must hold this book.
- **Posture:** **neutral — hold-and-verify.** Gross exposure 63.8% is at the bottom of the offensive 60–90% band. The dominant issue is proving we can hold positions for >48 hours without churn. After 48 hours of clean holding, we can evaluate offensive adds.

## Market Intel — Monday Post-Close
- **Broad market:** SPY $737.94 (+1.32%), QQQ $723.00 (+2.33%), VOO $680.90 (+1.59%). All above 50-day MA. Orderly tape into close.
- **Semiconductor sector:** SOXX $606.93 (+1.6%), NVDA $193.02 (+1.1%). Chip rally continues. AVGO +1.88% from lastday.
- **Fed news:** Supreme Court ruled Lisa Cook can stay at Fed. Preserves independence. Mildly bullish. Already priced.
- **GOOG:** +4.76% on Dow inclusion news. ~$349.37. Below 50-day MA. Chasing here is poor R/R. Wait for pullback or reclaim.
- **RKLB:** +12% on $8B Iridium acquisition. ~$95.02. Post-gap-up; wait for base above $95.
- **HOOD:** +3.73%. ~$101.60. Above 50D, below 200D. Strong 1M (+20.3%) and 3M (+40.7%). Best 4th-position candidate.
- **QTUM:** +2.97%. ~$159.81. Very thin (3 trades in latest bar). Limit orders only if ever authorized.
- **Relative strength (today):** RKLB (+12%), GOOG (+4.8%), SOXX (+1.6%), HOOD (+3.7%).
- **Earnings dates:** No binary earnings for holdings in next 48 hours. AVGO ~Sep 3. NVDA ~Aug 26. GOOG/META ~Jul 23.
- **Illiquidity flags:** EIS (stale Jun 26), ARKX (1 trade), SHLD (6 trades), GLD (1 trade), QTUM (3 trades). Limit orders only if ever authorized.

## Multi-Timeframe Performance (Yahoo Finance v8)
*Fetched 2026-06-29 19:36Z. No material change in last hour.*

| Symbol | 1D | 1W | 2W | 1M | 3M | 6M | 1Y | Trend |
|---|---|---|---|---|---|---|---|---|
| SPY | +1.55% | –0.55% | –0.20% | –1.90% | +12.71% | +10.26% | +19.82% | Above 50D/200D |
| QQQ | +2.38% | –2.06% | +0.19% | –1.75% | +22.95% | +20.37% | +31.01% | Above 50D/200D |
| VOO | +1.58% | –0.83% | –0.23% | –1.95% | +12.34% | +10.21% | +19.78% | Above 50D/200D |
| AVGO | +2.67% | –4.43% | –1.91% | –12.15% | +17.55% | +14.95% | +35.96% | Below 50D, Above 200D |
| NVDA | +1.12% | –6.93% | –5.36% | –9.36% | +8.69% | +13.61% | +22.92% | Below 50D, Above 200D |
| META | +2.53% | +0.20% | –0.36% | –11.07% | –5.03% | –13.02% | –23.46% | Below 50D/200D |
| GOOG | +4.76% | +0.78% | –1.86% | –8.97% | +21.38% | +17.93% | +98.15% | Below 50D, Above 200D |
| HOOD | +3.73% | –3.46% | +9.51% | +20.29% | +40.69% | –11.87% | +9.00% | Above 50D, Below 200D |
| RKLB | +15.78% | –2.55% | –4.55% | –33.98% | +34.10% | +81.12% | +173.22% | Below 50D, Above 200D |
| GLD | –1.34% | –4.01% | –4.49% | –10.56% | –11.32% | –7.54% | +21.11% | Below 50D/200D |
| SOXX | +3.71% | –6.60% | +2.60% | +7.43% | +77.19% | +114.48% | +156.29% | Above 50D/200D |
| QTUM | +2.97% | –4.74% | –0.43% | +0.97% | +43.89% | +49.89% | +74.92% | Above 50D/200D |
| EIS | +1.37% | –1.35% | –8.08% | –13.16% | –0.79% | +10.41% | +25.91% | N/A |
| SHLD | +0.72% | –2.94% | –7.85% | –13.41% | –20.02% | –6.56% | –2.39% | N/A |
| ARKX | +3.60% | –0.84% | –2.07% | –12.35% | +6.44% | +21.26% | +36.92% | N/A |

## Position Map — Monday Jun 29 (Post-Close)
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. Closed +2.33% and +1.07% unrealized. Stop $690. No adds. | 35–45% |
| VOO | **HOLD** | S&P anchor. Closed +1.59% and +0.66% unrealized. Stop $660. No adds. | 10–20% |
| AVGO | **HOLD** | AI chip alpha. Recovered to flat from entry. Stop $350. No adds. | 5–15% |
| HOOD | **WATCH — top 4th-position candidate** | Above 50D, strong 1M/3M momentum. Buy on pullback to $98–$99, stop $95, target $115. R/R ~5.7:1. | 0–10% |
| GOOG | **WATCH** | +5% on Dow inclusion. Below 50D. Wait for reclaim of $355+ with volume, or pullback to $340–$345. | 0–10% |
| SOXX | Avoid / monitor | Chip-climax warning. Overlaps QQQ/AVGO. Volatile. | 0% |
| NVDA | Avoid | Below 50-day MA. Single-stock chip risk. No edge over AVGO. | 0% |
| META | Banned | `bannedSymbols` active. | 0% |
| RKLB | Watch only | +15.8% on acquisition. Chasing gap-up is poor R/R. Wait for base above $95 for 2+ sessions. | 0% |
| GLD | Avoid | Below 50D/200D. Defensive gold failing. | 0% |
| EIS / SHLD / QTUM / ARKX | Avoid | Thin liquidity or no edge. | 0% |

## Priority Actions (Tuesday Jun 30 Pre-Market)
1. **HOLD ALL CORE POSITIONS.** No new orders at Tuesday open unless a high-conviction setup is confirmed in the 09:35 AM ET hourly run.
2. **Do not sell on minor pullbacks.** QQQ and VOO are profitable. AVGO is flat. All stops are far away ($690, $660, $350). Any overnight gap down that does not breach stops = hold.
3. **Plan 4th position for Tuesday (Tue Jun 30).** With $3,456 cash and caps binding on existing positions, a new symbol is required to increase gross exposure. Top candidate: HOOD (10 shares on pullback to $98–$99, stop $95, target $115). Secondary: GOOG (4 shares on pullback to $340–$345, stop $325, target $370).
4. **Monitor chip volatility.** If SOXX reverses hard and AVGO breaches $350.00, protective sell authorized only during CRITICAL/MAJOR event per tactical override.
5. **Watch RKLB base.** If it holds above $95 for 2+ sessions post-acquisition, it may become a tactical long candidate.

## Macro Themes
- **Actionable now:** SPY/QQQ/VOO above 50-day MA = regime shift to offensive. Positions deployed. Now patience.
- **Worth monitoring:** Fed independence preserved (Cook stays). Reduces political tail risk.
- **Worth monitoring:** RKLB/Iridium $8B acquisition. Real space-sector M&A.
- **Worth monitoring:** Q2 earnings expectations "sky-high" (Yahoo Finance). Risk of buy-the-rumor, sell-the-news into July. Lighten before Jul 23 if portfolio is profitable.
- **Interesting but not actionable yet:** QTUM above 50D with +43% 3M and analyst Buy initiations. Quantum computing theme. Too thin to trade.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS + MarketWatch RSS active. No material news for holdings in this cycle.
- **Alpaca bars:** Timestamps at 19:34Z for most symbols; current.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Clean. No unauthorized source changes.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
