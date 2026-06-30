# Hourly Macro Memory
*Updated 2026-06-30 14:46Z (Tuesday 10:46 AM ET). Market OPEN until 20:00Z (4:00 PM ET).*

## Tactical Cycle Summary — 2026-06-30 14:50Z
- **Status:** Market OPEN. Next hourly: 15:35Z (11:35 AM ET). Next tactical: 15:00Z.
- **Event detector:** NONE at 14:50Z. No protective action required.
- **Live broker refresh:** Equity $9,608.90 | Cash $2,440.99 | Long $7,167.91 | Gross 74.6% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5 ($731.73, +2.28% unrealized), VOO 2 ($683.80, +1.09% unrealized), AVGO 3 ($375.76, +1.02% unrealized), HOOD 10 ($101.425, -0.07% unrealized).
- **Open orders:** NONE. HOOD limit buy filled at 14:46Z.
- **Filled trades since prior hourly (13:35Z):** HOOD 10 shares @ $101.50 (order b423815a, filled 14:46:32Z).
- **Universe compliance:** All 4 holdings in universe. No breach.
- **Daily trade budget:** 1/3 filled orders used today (HOOD buy).

## Hourly Cycle Summary — 2026-06-30 14:46Z
- **Status:** Market OPEN. Next hourly: 15:35Z (11:35 AM ET). Next tactical: 14:50Z.
- **Repo integrity:** Working tree restored from HEAD at start of cycle (divergent memory/ledger.md and memory/tactical_last_prices.json). Clean now.
- **Live broker refresh:** Equity $9,621.82 | Cash $3,455.99 | Long $6,165.83 | Gross 64.1% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5 ($732.80, +2.44% unrealized), VOO 2 ($684.74, +1.22% unrealized), AVGO 3 ($377.56, +1.51% unrealized).
- **Open orders:** HOOD limit buy 10 @ $101.50 (pending, placed 14:45Z).
- **Filled trades since prior hourly (13:35Z):** NONE.
- **Universe compliance:** All 3 holdings in universe. No breach.
- **Rapid-exposure-drift guard:** No unauthorized drift.
- **Concurrent execution:** Canceled old HOOD limit at $99.50 (order 96f1de6f) and placed new limit at $101.50 (order b423815a). No race conditions.
- **Data quality note:** Pre-fetched multi-timeframe performance table from harness contained significant errors (e.g., QQQ 1W shown as -2.06% vs live +2.67%). Fresh Yahoo Finance v8 snapshot fetched at 14:35Z and used for all decisions.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $731.73 | $3,658.65 | 38.1% | +$81.75 | +2.28% |
| VOO | 2 | $676.46 | $683.80 | $1,367.60 | 14.2% | +$14.68 | +1.09% |
| AVGO | 3 | $371.95 | $375.76 | $1,127.28 | 11.7% | +$11.43 | +1.02% |
| HOOD | 10 | $101.50 | $101.425 | $1,014.25 | 10.6% | –$0.75 | –0.07% |
| Cash | — | — | — | $2,440.99 | 25.4% | — | — |
| **Equity** | — | — | — | **$9,608.90** | **100%** | — | **–4.07%** |

- **Gross long exposure:** 74.6%
- **Net exposure:** 74.6%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Portfolio heat (entry-to-stop):** $292.52 (3.04% of equity). Under 6% daily loss cap.
- **Open orders:** NONE

## Performance Review — Tue Jun 30 (Intraday, ~10:46 AM ET)
*Fresh Yahoo Finance data used for index benchmarks.*
- **1D (today):** Portfolio +0.69% ($9,555.76 → $9,621.82) vs SPY +0.52%. **Outperforming by +0.17 pp.** QQQ and AVGO leading; VOO tracking.
- **1W (5d, Jun 23 → Jun 30):** Portfolio est. +1.67% vs SPY +1.45%. **Roughly flat vs SPY.** Core positions recovering from late-June dip.
- **2W (10d, Jun 16 → Jun 30):** Portfolio est. –2.00% vs SPY –1.41%. **Underperforming by ~0.6 pp.** Churn from mid-June round trips still weighing.
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–3.78%** ($9,621.82 vs $10,000) vs SPY **+3.74%** (SPY $744.18 vs baseline $718.01). **Trailing by ~7.5 pp.**
- What is working: Holding core positions >24 hours without churn. All 3 positions now profitable. No daytrade consumed.
- What is not working: SPY baseline head start. Cash drag at 36%. June churn cycle destroyed ~$100+ equity.
- What must change: Deploy 4th position into a high-conviction setup with ≥2:1 R/R to lift gross exposure toward 75%. Avoid Mag 7 names (GOOG) due to rotation headwind. Do not chase gap-ups.

## Goal Check
- **Portfolio since inception:** –3.78% ($9,621.82 vs $10,000 base)
- **S&P 500 since inception:** +3.74% (SPY $744.18 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.5 pp.
- **Dominant failure mode:** **excessive turnover / friction + cash drag.** Whipsaw cycle in June cost ~$100+ in realized losses. Clean holding since Monday 09:35Z is the first step toward recovery.
- **Posture:** **offensive catch-up.** Gross exposure 64.1% is at the bottom of the 60–90% band. Market is orderly (NONE event). SPY/QQQ/VOO above 50-day MA. We must deploy fresh capital today on a confirmed setup.

## Market Intel — Tuesday 10:46 AM ET
- **Broad market:** SPY ~$744.18 (+0.52%), QQQ $732.80 (+1.20%), VOO $684.74 (+0.54%). All above 50-day MA. Orderly tape.
- **Semiconductor sector:** SOXX $635.43 (+3.48% today), SMH $652.92 (+0.63%). Chip rally continues. AVGO +1.36% intraday. "Chip stocks hit record 19.7% of S&P 500" validates AI capex thesis.
- **AVGO insider selling:** Co-founder’s quarterly stake sales topped $720M; stock heading for worst month in 7 years. Bearish signal but stock is above entry. Monitor closely. Stop remains $350.
- **GOOG / Mag 7 rotation:** $351.48 (+0.03% today after yesterday's +4.76% gap on Dow inclusion). Below 50D. "Magnificent Seven shed $2.3 trillion in June as AI spending comes under closer scrutiny" — durable headwind. Avoid GOOG.
- **HOOD:** $102.04 (+0.24% today). Intraday low $100.75. Consolidating after strong 1M (+8.2%) and 3M (+56.7%) run. Best 4th-position candidate outside Mag 7.
- **RKLB:** $98.99 (+1.00% today). Below 50D. Space sector damaged. Avoid.
- **NVDA:** $197.91 (+1.51% today but –6.27% 1M). Below 50D. No edge over AVGO/SOXX.
- **META:** Banned. Below 50D/200D. No re-entry.
- **GLD:** $371.77 (+0.87% today but –10.87% 1M). Below 50D/200D. Defensive gold failing. Avoid.
- **Fed / Macro:** Fed independence preserved (Cook stays). Reduces political tail risk. Inflation fears may be overblown per MarketWatch headline.
- **Earnings dates:** No binary earnings for holdings in next 48 hours. AVGO ~Sep 3. NVDA ~Aug 26. GOOG/META ~Jul 23. HOOD likely late Jul / early Aug.
- **Illiquidity flags:** EIS (stale Jun 26), ARKX (1 trade), GLD (3 trades), SHLD (1 trade). Limit orders only if ever authorized.

## Multi-Timeframe Performance (Yahoo Finance v8)
*Fresh snapshot fetched 2026-06-30 14:35Z.*

| Symbol | 1D | 1W (5d) | 2W (10d) | 1M (21d) | 3M (63d) | 6M (126d) | Trend |
|---|---|---|---|---|---|---|---|
| SPY | +0.52% | +1.45% | –1.41% | –1.55% | +12.71% | +10.26% | Above 50D/200D |
| QQQ | +1.20% | +2.67% | –1.51% | –0.83% | +31.15% | +17.48% | Above 50D/200D |
| VOO | +0.54% | +1.14% | –1.32% | –1.55% | +12.34% | +10.21% | Above 50D/200D |
| AVGO | +1.36% | –0.95% | –4.42% | –15.73% | +28.32% | +7.21% | Below 50D, Above 200D |
| NVDA | +1.51% | –1.06% | –6.84% | –6.27% | +19.82% | +3.87% | Below 50D, Above 200D |
| META | –1.39% | –1.32% | –6.52% | –12.29% | +3.43% | –16.36% | Below 50D/200D |
| GOOG | +0.03% | +1.53% | –4.28% | –6.65% | +28.64% | +11.56% | Below 50D, Above 200D |
| HOOD | +0.24% | –1.14% | +4.03% | +8.24% | +56.65% | –13.59% | Above 50D, Below 200D |
| RKLB | +1.00% | +4.07% | –9.39% | –31.01% | +72.52% | +40.11% | Below 50D, Above 200D |
| GLD | +0.87% | –1.47% | –6.25% | –10.87% | –10.33% | –10.79% | Below 50D/200D |
| SOXX | +3.48% | +5.36% | +1.16% | +11.71% | +105.22% | +107.73% | Above 50D/200D |
| QTUM | +2.20% | +0.62% | –2.20% | +2.88% | +60.87% | +47.38% | Above 50D/200D |
| EIS | +0.54% | +0.63% | –5.09% | –12.66% | +9.09% | +9.62% | N/A |
| SHLD | +1.45% | –1.67% | –5.89% | –11.82% | –12.81% | –9.76% | N/A |
| ARKX | +2.18% | +3.21% | –3.77% | –9.44% | +20.95% | +14.68% | N/A |

## Position Map — Tue Jun 30 (10:46 AM ET)
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. +2.44% unrealized. Stop $690. No adds (cap). | 35–45% |
| VOO | **HOLD** | S&P anchor. +1.22% unrealized. Stop $660. No adds (cap). | 10–20% |
| AVGO | **HOLD** | AI chip alpha. +1.51% unrealized. Stop $350. No adds (cap). Monitor insider selling. | 5–15% |
| HOOD | **BUY on pullback** | Top 4th-position candidate. Outside Mag 7 rotation. Strong 1M/3M momentum. Limit 10 shares at $101.50. Stop $95. Target $115. R/R ~2.08:1. Would use ~$1,015 cash and bring gross exposure to ~74.7%. | 5–12% |
| GOOG | **AVOID** | Dow inclusion catalyst offset by Mag 7 rotation ($2.3T shed in June). Below 50D. No edge. | 0% |
| SOXX | Avoid / monitor | Chip-climax warning. Overlaps QQQ/AVGO. Very extended (+105% 3M). No edge. | 0% |
| NVDA | Avoid | Below 50-day MA. Single-stock chip risk. No edge over AVGO. | 0% |
| META | Banned | `bannedSymbols` active. | 0% |
| RKLB | Avoid | Below 50D. Space sector damaged. | 0% |
| GLD | Avoid | Below 50D/200D. Defensive gold failing. | 0% |
| EIS / SHLD / QTUM / ARKX | Avoid | Thin liquidity or no edge. | 0% |

## Priority Actions (Tuesday Jun 30 Regular Session)
1. **HOLD ALL CORE POSITIONS.** QQQ, VOO, AVGO are profitable and held >24 hours. No same-day sells authorized unless hard stop breached AND event detector flags CRITICAL/MAJOR.
2. **Keep HOOD limit buy at $101.50.** Canceled unrealistic $99.50 limit. New limit is 1% below current price, above today's low, and maintains >2:1 R/R. Do NOT chase above $101.75.
3. **Do NOT add GOOG.** Mag 7 rotation is a durable headwind. GOOG below 50D with negative sentiment. No edge.
4. **Do not chase gap-ups.** SOXX and RKLB are extended. No adds unless a clear base forms.
5. **Monitor AVGO insider selling.** If AVGO reverses hard and breaches $350.00, protective sell authorized only during CRITICAL/MAJOR event per tactical override.
6. **Cash reserve:** $3,456 (35.9%). If HOOD fills, cash drops to ~$2,441 (25.4%). Still above defensive minimum. Reassess at 15:35Z if no fill.

## Macro Themes
- **Actionable now:** SPY/QQQ/VOO above 50-day MA = regime shift to offensive. Positions deployed. Now patience + selective deployment.
- **Actionable now:** AVGO chip thesis intact but co-founder selling $720M is a red flag. Record S&P 500 semiconductor weight validates capex cycle. Hold 3 shares with tight stop $350.
- **Worth monitoring:** Mag 7 rotation ($2.3T shed in June on AI spending scrutiny). Could pressure QQQ short-term but QQQ is above 50D/200D so hold.
- **Worth monitoring:** Fed independence preserved (Cook stays). Reduces political tail risk.
- **Worth monitoring:** AVGO insider selling — if it accelerates or is followed by other insiders, may force exit.
- **Interesting but not actionable yet:** QTUM above 50D with +60% 3M and thin volume. Quantum computing theme. Limit orders only if ever authorized.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no valid API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS working. Direct web search blocked (Google 429 CAPTCHA).
- **Alpaca bars:** Timestamps at 14:34Z for most symbols; current.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Restored divergent memory/ledger.md and memory/tactical_last_prices.json from HEAD at cycle start. No source code modifications detected.
- **Event detector:** NONE at 14:35Z. Prior timestamp 14:30Z.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.

## Standing Learnings (Key Reminders)
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted or reverted, restore from HEAD immediately.
- **Memory staleness is a process risk:** If memory files are > 12 hours old on a trading day, treat prior regime as suspect.
- **With ~$10K equity, concentration caps are extremely tight:** QQQ capped at 5-6 shares; GOOG at 3-4 shares; VOO at 2 shares. Deployment into new names is the only way to use cash.
- **Container restart can restore persistent volume snapshots that overwrite the working tree with stale memory and tampered code.** On this run, the harness restored May 29 state, overwriting June 30 committed state. **Always run `git diff HEAD` before reading any file and restore from HEAD if divergent.**
