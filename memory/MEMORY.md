# Hourly Macro Memory
*Updated 2026-06-30 14:35Z (Tuesday 10:35 AM ET). Market OPEN until 20:00Z (4:00 PM ET).*

## Hourly Cycle Summary — 2026-06-30 14:35Z
- **Status:** Market OPEN. Next hourly: 15:35Z (11:35 AM ET). Next tactical: 14:40Z, 14:50Z.
- **Repo integrity:** **CRITICAL BREACH RESOLVED.** Working tree was reverted to stale May 29 state. All tracked files restored from HEAD. `.gitignore` restored. `node_modules` not tracked. `git status` clean.
- **Live broker refresh:** Equity $9,603.51 | Cash $3,455.99 | Long $6,147.52 | Gross 64.0% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5 ($730.61, +2.13% unrealized), VOO 2 ($683.12, +0.99% unrealized), AVGO 3 ($376.35, +1.18% unrealized).
- **Open orders:** HOOD limit buy 10 @ $99.50 (pending, placed 13:40Z).
- **Filled trades since prior hourly (13:35Z):** NONE.
- **Universe compliance:** All 3 holdings in universe. No breach.
- **Rapid-exposure-drift guard:** No unauthorized drift.
- **Concurrent execution:** Tactical agent placed HOOD limit at 13:40Z per 13:35Z hourly directive. No race conditions.
- **Code integrity:** Source files restored from HEAD. Verified `event_detector.ts` has `await Bun.file(path).text()` fix. Tests pass (151/154; 3 Alpaca network timeouts).
- **News scan:** Yahoo Finance RSS working. Key headline: **"Magnificent Seven shed $2.3 trillion in June as AI spending comes under closer scrutiny"** — bearish for Mag 7 mega-caps including GOOG/META. AVGO/SOXX chip headlines remain bullish (record 19.7% of S&P 500).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $730.61 | $3,653.05 | 38.0% | +$76.15 | +2.13% |
| VOO | 2 | $676.46 | $683.12 | $1,366.24 | 14.2% | +$13.32 | +0.99% |
| AVGO | 3 | $371.95 | $376.35 | $1,129.06 | 11.8% | +$13.21 | +1.18% |
| Cash | — | — | — | $3,455.99 | 36.0% | — | — |
| **Equity** | — | — | — | **$9,604.34** | **100%** | — | **–3.96%** |

- **Gross long exposure:** 64.0%
- **Net exposure:** 64.0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Portfolio heat (entry-to-stop):** $225.67 (2.35% of equity). Under 6% daily loss cap.
- **Open orders:** HOOD 10 @ $99.50 limit (order 96f1de6f)

## Performance Review — Tue Jun 30 (Intraday, ~10:35 AM ET)
- **1D (today):** Portfolio +0.47% ($9,548.47 → $9,604.34 est) vs SPY ~+0.46%. **Roughly flat vs SPY.** QQQ and AVGO outperforming; VOO tracking.
- **1W (Jun 23 → Jun 30):** Portfolio ~–0.3% (est. $9,620 → $9,604) vs SPY ~+0.5%. **Underperforming by ~0.8 pp.** Mon-Tue recovery from Jun 26 liquidation whipsaw.
- **2W (Jun 16 → Jun 30):** Portfolio ~–1.5% (est. $9,740 → $9,604) vs SPY ~+0.3%. **Underperforming by ~1.8 pp.** Churn damage from Jun 15/Jun 23 round trips.
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–3.96%** ($9,603.51 vs $10,000) vs SPY **+3.51%** (SPY $743.24 vs baseline $718.01). **Trailing by ~7.5 pp.**
- What is working: Holding core positions >24 hours without churn. All 3 positions now profitable. No daytrade consumed.
- What is not working: SPY baseline head start. Cash drag at 36%. June churn cycle destroyed ~$100+ equity.
- What must change: Deploy 4th position into a high-conviction setup with ≥2:1 R/R to lift gross exposure toward 75%. Avoid Mag 7 names (GOOG) due to June rotation. Do not chase gap-ups.

## Goal Check
- **Portfolio since inception:** –3.96% ($9,603.51 vs $10,000 base)
- **S&P 500 since inception:** +3.51% (SPY $743.24 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.5 pp.
- **Dominant failure mode:** **excessive turnover / friction + cash drag.** Whipsaw cycle in June cost ~$100+ in realized losses. Clean holding since Monday 09:35Z is the first step toward recovery.
- **Posture:** **offensive catch-up.** Gross exposure 64.0% is at the bottom of the 60–90% band. Market is orderly (NONE event). SPY/QQQ/VOO above 50-day MA. We must deploy fresh capital today on a confirmed setup.

## Market Intel — Tuesday 10:35 AM ET
- **Broad market:** SPY ~$743.24 (+0.46%), QQQ $731.19 (+0.71%), VOO $683.33 (+0.13%). All above 50-day MA. Orderly tape.
- **Semiconductor sector:** SOXX $632.75 (+1.89% today), SMH $650.10 (+0.74%). Chip rally continues. AVGO +0.91% intraday. "Chip stocks hit record 19.7% of S&P 500" validates AI capex thesis.
- **GOOG / Mag 7 rotation:** $349.65 (–0.65% after yesterday's +4.76% gap on Dow inclusion). Below 50D. **"Magnificent Seven shed $2.3 trillion in June as AI spending comes under closer scrutiny"** — this is a durable headwind for GOOG and Mag 7. Avoid GOOG for now.
- **HOOD:** $101.44 (–0.16% after yesterday's +3.73%). Flat consolidation after strong 1M (+20.3%) run. Intraday low $101.22 today. Best 4th-position candidate outside Mag 7.
- **RKLB:** $98.37 (stable after prior volatility). Below 50D. Space sector damaged. Avoid.
- **NVDA:** $198.16 (+1.14% today but –9.36% 1M). Below 50D. No edge over AVGO/SOXX.
- **META:** Banned. Below 50D/200D. No re-entry.
- **GLD:** $370.90 (+0.11%). Below 50D/200D. Defensive gold failing. Avoid.
- **Fed / Macro:** Fed independence preserved (Cook stays). Reduces political tail risk.
- **Earnings dates:** No binary earnings for holdings in next 48 hours. AVGO ~Sep 3. NVDA ~Aug 26. GOOG/META ~Jul 23. HOOD likely late Jul / early Aug.
- **Illiquidity flags:** EIS (stale Jun 26), ARKX (2 trades), GLD (19 trades but thin). Limit orders only if ever authorized.

## Multi-Timeframe Performance (Yahoo Finance v8)
*Fetched 2026-06-30 13:35Z. Updated prices inline.*

| Symbol | 1D | 1W | 2W | 1M | 3M | 6M | 1Y | Trend |
|---|---|---|---|---|---|---|---|---|
| SPY | +0.46% | –0.55% | –0.20% | –1.90% | +12.71% | +10.26% | +19.82% | Above 50D/200D |
| QQQ | +0.71% | –2.06% | +0.19% | –1.75% | +22.95% | +20.37% | +31.01% | Above 50D/200D |
| VOO | +0.13% | –0.83% | –0.23% | –1.95% | +12.34% | +10.21% | +19.78% | Above 50D/200D |
| AVGO | +0.91% | –4.43% | –1.91% | –12.15% | +17.55% | +14.95% | +35.96% | Below 50D, Above 200D |
| NVDA | +1.92% | –6.93% | –5.36% | –9.36% | +8.69% | +13.61% | +22.92% | Below 50D, Above 200D |
| META | –0.77% | +0.20% | –0.36% | –11.07% | –5.03% | –13.02% | –23.46% | Below 50D/200D |
| GOOG | –0.65% | +0.78% | –1.86% | –8.97% | +21.38% | +17.93% | +98.15% | Below 50D, Above 200D |
| HOOD | –0.16% | –3.46% | +9.51% | +20.29% | +40.69% | –11.87% | +9.00% | Above 50D, Below 200D |
| RKLB | +1.97% | –2.55% | –4.55% | –33.98% | +34.10% | +81.12% | +173.22% | Below 50D, Above 200D |
| GLD | +0.11% | –4.01% | –4.49% | –10.56% | –11.32% | –7.54% | +21.11% | Below 50D/200D |
| SOXX | +1.89% | –6.60% | +2.60% | +7.43% | +77.19% | +114.48% | +156.29% | Above 50D/200D |
| QTUM | +0.37% | –4.74% | –0.43% | +0.97% | +43.89% | +49.89% | +74.92% | Above 50D/200D |
| EIS | 0.00% | –1.35% | –8.08% | –13.16% | –0.79% | +10.41% | +25.91% | N/A |
| SHLD | +0.13% | –2.94% | –7.85% | –13.41% | –20.02% | –6.56% | –2.39% | N/A |
| ARKX | +1.12% | –0.84% | –2.07% | –12.35% | +6.44% | +21.26% | +36.92% | N/A |

## Position Map — Tue Jun 30 (10:35 AM ET)
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. +2.13% unrealized. Stop $690. No adds (cap). | 35–45% |
| VOO | **HOLD** | S&P anchor. +0.99% unrealized. Stop $660. No adds (cap). | 10–20% |
| AVGO | **HOLD** | AI chip alpha. +1.18% unrealized. Stop $350. No adds (cap). | 5–15% |
| HOOD | **BUY on pullback** | Top 4th-position candidate. Outside Mag 7 rotation. Strong 1M/3M momentum. Limit 10 shares at $99.50. Stop $95. Target $115. R/R ~3.4:1. Would use ~$995 cash and bring gross exposure to ~74%. | 5–12% |
| GOOG | **AVOID** | Dow inclusion catalyst offset by Mag 7 rotation ($2.3T shed in June). Below 50D. No edge. | 0% |
| SOXX | Avoid / monitor | Chip-climax warning. Overlaps QQQ/AVGO. Volatile. No edge. | 0% |
| NVDA | Avoid | Below 50-day MA. Single-stock chip risk. No edge over AVGO. | 0% |
| META | Banned | `bannedSymbols` active. | 0% |
| RKLB | Avoid | Below 50D. Space sector damaged. | 0% |
| GLD | Avoid | Below 50D/200D. Defensive gold failing. | 0% |
| EIS / SHLD / QTUM / ARKX | Avoid | Thin liquidity or no edge. | 0% |

## Priority Actions (Tuesday Jun 30 Regular Session)
1. **HOLD ALL CORE POSITIONS.** QQQ, VOO, AVGO are profitable and held >24 hours. No same-day sells authorized unless hard stop breached AND event detector flags CRITICAL/MAJOR.
2. **Keep HOOD limit buy at $99.50.** Do NOT chase. Preserve 3.44:1 R/R. If price pulls back to $99.50 with volume support, fill. If price gaps down through $99.50 without support, do NOT chase; cancel and wait.
3. **Do NOT add GOOG.** Mag 7 rotation is a durable headwind. GOOG below 50D with negative sentiment. No edge.
4. **Do not chase gap-ups.** SOXX and RKLB are extended. No adds unless a clear base forms.
5. **Monitor chip volatility.** If SOXX reverses hard and AVGO breaches $350.00, protective sell authorized only during CRITICAL/MAJOR event per tactical override.
6. **Cash reserve:** $3,455 (36%). If HOOD fills, cash drops to ~$2,460 (26%). Still above defensive minimum. Reassess at 15:35Z if no fill.

## Macro Themes
- **Actionable now:** SPY/QQQ/VOO above 50-day MA = regime shift to offensive. Positions deployed. Now patience + selective deployment.
- **Actionable now:** AVGO chip thesis intact. Record S&P 500 semiconductor weight validates capex cycle. Hold 3 shares.
- **Worth monitoring:** Mag 7 rotation ($2.3T shed in June on AI spending scrutiny). Could pressure QQQ short-term but QQQ is above 50D/200D so hold.
- **Worth monitoring:** Fed independence preserved (Cook stays). Reduces political tail risk.
- **Worth monitoring:** RKLB/Iridium $8B acquisition. Real space-sector M&A. Could lift ARKX if execution is clean. Wait for base.
- **Interesting but not actionable yet:** QTUM above 50D with +43% 3M and thin volume. Quantum computing theme. Limit orders only if ever authorized.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no valid API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS working. Direct web search blocked (Google 429 CAPTCHA).
- **Alpaca bars:** Timestamps at 14:09Z for most symbols; current.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** **CRITICAL BREACH RESOLVED.** Working tree reverted to May 29 state. All files restored from HEAD. `.gitignore` restored and verified. `git check-ignore node_modules/zod/package.json` returned exit 0.
- **Event detector:** `priorTimestamp` still null at 14:10Z despite fix in code. Snapshot file exists at `memory/tactical_last_prices.json` with timestamp 14:10:30Z but only 217 bytes. May indicate file is being overwritten every run instead of reading prior state before writing new state. Non-critical for trading; current prices are valid.
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
