# Hourly Macro Memory
*Updated 2026-06-30 16:35Z (Tuesday 12:35 PM ET). Market OPEN until 20:00Z (4:00 PM ET).*

## Tactical Cycle Summary — 2026-06-30 16:30Z
- **Status:** Market OPEN. Next hourly: 17:35Z (1:35 PM ET). Next tactical: 16:40Z.
- **Event detector:** NONE at 16:35Z. No protective action required.
- **Live broker refresh:** Equity $9,619.09 | Cash $2,440.99 | Long $7,178.10 | Gross 74.6% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5 ($735.02, +2.75% unrealized), VOO 2 ($685.87, +1.39% unrealized), AVGO 3 ($374.32, +0.64% unrealized), HOOD 10 ($100.79, -0.70% unrealized).
- **Open orders:** NONE.
- **Filled trades since prior hourly (15:35Z):** NONE. Tactical agent held all positions across 15:40, 15:50, 16:10, 16:20, 16:30 windows.
- **Universe compliance:** All 4 holdings in universe. No breach.
- **Daily trade budget:** 1/3 filled orders used today (HOOD buy at 14:46Z). Up to 2 new orders authorized without fresh hourly.
- **Tactical ledger quality:** Prices match live broker. No hallucinations. No concealment risk.

## Hourly Cycle Summary — 2026-06-30 16:35Z
- **Repo integrity:** Working tree shows normal tactical updates to memory/ledger.md and memory/tactical_last_prices.json. No source code modifications. No critical breach.
- **Account health:** trading_blocked=false, account_blocked=false, pattern_day_trader=false. All clear.
- **Data quality:** Fresh Yahoo Finance v8 snapshot at 16:36Z used. Alpaca bars current (16:34Z).
- **Concurrent execution:** No race conditions. Tactical agent held all positions per todo.md.
- **Rapid-exposure-drift guard:** No unauthorized drift. Gross exposure stable at 74.6%.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $735.02 | $3,675.10 | 38.2% | +$98.20 | +2.75% |
| VOO | 2 | $676.46 | $685.87 | $1,371.74 | 14.3% | +$18.82 | +1.39% |
| AVGO | 3 | $371.95 | $374.32 | $1,122.95 | 11.7% | +$7.09 | +0.64% |
| HOOD | 10 | $101.50 | $100.79 | $1,007.90 | 10.5% | -$7.10 | -0.70% |
| Cash | — | — | — | $2,440.99 | 25.4% | — | — |
| **Equity** | — | — | — | **$9,619.09** | **100%** | — | **–3.81%** |

- **Gross long exposure:** 74.6%
- **Net exposure:** 74.6%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Portfolio heat (entry-to-stop):** $290.67 (3.02% of equity). Under 6% daily loss cap.
- **Open orders:** NONE

## Performance Review — Tue Jun 30 (Intraday, ~12:35 PM ET)
- **1D (today):** Portfolio +0.66% ($9,555.76 → $9,619.09) vs SPY +0.56%. **Outperforming by +0.10 pp.** QQQ/VOO/AVGO green; HOOD slightly red.
- **1W (5d, Jun 23 → Jun 30):** Portfolio est. +1.7% vs SPY +1.58%. **Roughly flat vs SPY.** Core positions recovering from late-June dip.
- **2W (10d, Jun 16 → Jun 30):** Portfolio est. –1.9% vs SPY –1.28%. **Underperforming by ~0.6 pp.** Churn from mid-June round trips still weighing.
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–3.81%** ($9,619.09 vs $10,000) vs SPY **+3.93%** (SPY $746.22 vs baseline $718.01). **Trailing by ~7.7 pp.**
- What is working: Holding core positions >24 hours without churn. QQQ/VOO/AVGO all profitable. No daytrade consumed.
- What is not working: SPY baseline head start. Cash drag at 25.4%. June churn cycle destroyed ~$100+ equity. HOOD entry at $101.50 immediately underwater by –0.7%.
- What must change: Need 1–2 more high-conviction winners with ≥2:1 R/R to close the 7.7 pp gap. Avoid forced deployment into marginal setups. Patience + quality over quantity. Do NOT average down on HOOD.

## Goal Check
- **Portfolio since inception:** –3.81% ($9,619.09 vs $10,000 base)
- **S&P 500 since inception:** +3.93% (SPY $746.22 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.7 pp.
- **Dominant failure mode:** **excessive turnover / friction + cash drag.** Whipsaw cycle in June cost ~$100+ in realized losses. Clean holding since Monday 09:35Z is the first step toward recovery.
- **Posture:** **offensive catch-up.** Gross exposure 74.6% is in the 60–90% band. Market is orderly (NONE event). SPY/QQQ/VOO above 50-day MA. We are holding risk assets and letting winners run. No urgent need to force-add unless a high-conviction setup appears.

## Market Intel — Tuesday 12:35 PM ET
- **Broad market:** SPY ~$746.22 (+0.56%), QQQ $735.02 (+1.22%), VOO $685.87 (+0.58%). All above 50-day MA. Orderly tape. Q2 wrapping strong — "Stock bulls in control of the quarter."
- **Semiconductor sector:** SOXX $636.29 (+3.30% today). Chip rally continues. AVGO +0.64% intraday. "Chip stocks hit record 19.7% of S&P 500" validates AI capex thesis.
- **HOOD momentum:** $100.79 (-0.70% from our entry, -0.81% today). Pulled back from $102.64 morning high. Record June trading thesis still intact but price is testing patience. Stop $95 holds.
- **Fed / Macro:** Cleveland Fed's Beth Hammack warns AI is fueling inflation, rate hikes possible. Slightly hawkish for tech but not an immediate tape changer. Oil tumbling most in years reduces inflationary pressure.
- **AVGO insider selling vs catalyst:** Co-founder's quarterly stake sales topped $720M (bearish). OpenAI Jalapeño AI Accelerator partnership (bullish). Net effect uncertain — hold 3 shares with existing stop $350.
- **GOOG / Mag 7 rotation:** $354.65 (+0.53% today). Below 50D. Mag 7 shed $2.3T in June on AI spending scrutiny. No edge. Avoid.
- **RKLB:** $101.85 (+0.29% today but –31.5% 1M). Below 50D. Space sector damaged. Avoid.
- **NVDA:** $197.80 (+1.65% today but –6.13% 1M). Below 50D. No edge over AVGO/SOXX.
- **META:** Banned. Below 50D/200D. No re-entry.
- **GLD:** $369.82 (+0.34% today but –11.34% 1M). Below 50D/200D. Defensive gold failing. Avoid.
- **Earnings dates:** No binary earnings for holdings in next 48 hours. AVGO ~Sep 3. NVDA ~Aug 26. GOOG/META ~Jul 23. HOOD likely late Jul / early Aug.
- **Illiquidity flags:** EIS (1 trade), ARKX (1 trade), GLD (10 trades), SHLD (3 trades), QTUM (1 trade). Limit orders only if ever authorized.

## Multi-Timeframe Performance (Yahoo Finance v8)
*Fresh snapshot fetched 2026-06-30 16:36Z.*

| Symbol | 1D | 1W (5d) | 2W (10d) | 1M (21d) | 3M (63d) | 6M (126d) | Trend |
|---|---|---|---|---|---|---|---|
| SPY | +0.56% | +1.58% | –1.28% | –1.50% | +17.91% | +7.94% | Above 50D/200D |
| QQQ | +1.22% | +2.70% | –1.49% | –0.73% | +31.28% | +17.48% | Above 50D/200D |
| VOO | +0.58% | +1.27% | –1.28% | –1.51% | +17.91% | +7.89% | Above 50D/200D |
| AVGO | +0.64% | –1.33% | –4.79% | –16.04% | +27.84% | +6.52% | Below 50D, Above 200D |
| NVDA | +1.65% | –0.92% | –6.71% | –6.13% | +19.99% | +4.02% | Below 50D, Above 200D |
| META | –1.10% | –1.03% | –6.25% | –12.03% | +3.73% | –16.12% | Below 50D/200D |
| GOOG | +0.53% | +2.04% | –3.81% | –6.19% | +29.29% | +12.12% | Below 50D, Above 200D |
| HOOD | –0.81% | –1.04% | +4.13% | +8.35% | +56.81% | –13.51% | Above 50D, Below 200D |
| RKLB | +0.29% | +3.33% | –10.03% | –31.50% | +71.30% | +39.12% | Below 50D, Above 200D |
| GLD | +0.34% | –1.99% | –6.74% | –11.34% | –10.80% | –11.26% | Below 50D/200D |
| SOXX | +3.30% | +5.18% | +0.98% | +11.52% | +104.85% | +107.37% | Above 50D/200D |
| QTUM | +1.76% | +0.18% | –2.62% | +2.44% | +60.18% | +46.75% | Above 50D/200D |
| EIS | +0.59% | +0.69% | –5.04% | –12.62% | +9.15% | +9.68% | N/A |
| SHLD | +1.26% | –1.85% | –6.07% | –11.98% | –12.97% | –9.93% | N/A |
| ARKX | +1.89% | +2.91% | –4.05% | –9.70% | +20.60% | +14.35% | N/A |

## Position Map — Tue Jun 30 (12:35 PM ET)
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. +2.75% unrealized. Stop $690. No adds (cap). | 35–45% |
| VOO | **HOLD** | S&P anchor. +1.39% unrealized. Stop $660. No adds (cap). | 10–20% |
| AVGO | **HOLD** | AI chip alpha. +0.64% unrealized. Stop $350. No adds (cap). Monitor insider selling vs OpenAI Jalapeño catalyst. | 5–15% |
| HOOD | **HOLD** | Record June trading + new analyst PTs. –0.70% unrealized. Stop $95. No adds (just bought today; NEVER average down). | 5–15% |
| GOOG | **AVOID** | Mag 7 rotation headwind. Below 50D. No edge. | 0% |
| SOXX | Avoid / monitor | Chip-climax warning. Overlaps QQQ/AVGO. Very extended (+104.85% 3M). No edge. | 0% |
| NVDA | Avoid | Below 50-day MA. Single-stock chip risk. No edge over AVGO. | 0% |
| META | Banned | `bannedSymbols` active. | 0% |
| RKLB | Avoid | Below 50D. Space sector damaged. | 0% |
| GLD | Avoid | Below 50D/200D. Defensive gold failing. | 0% |
| EIS / SHLD / QTUM / ARKX | Avoid | Thin liquidity or no edge. | 0% |

## Priority Actions (Tuesday Jun 30 Regular Session)
1. **HOLD ALL CORE POSITIONS.** QQQ, VOO, AVGO profitable and held >24 hours. HOOD is underwater –0.7% but well above $95 stop. No same-day sells authorized unless hard stop breached AND event detector flags CRITICAL/MAJOR.
2. **Do NOT add to HOOD today.** Entry was $101.50. Current $100.79. Adding to a losing position is averaging down — **PROHIBITED.** Preserve cash for a better setup or protective action.
3. **Do NOT add to QQQ, VOO, or AVGO.** Concentration caps prevent meaningful adds. QQQ at 38.2% (1 share add = breach). VOO at 14.3% (1 share add = breach). AVGO at 11.7% (1 share add = breach).
4. **Do NOT add GOOG, SOXX, NVDA, RKLB, GLD, or thin ETFs.** No high-conviction setups with ≥2:1 R/R in these names.
5. **Monitor HOOD for any acceleration below $100.** If it breaks $100 with volume, watch for sentiment shift. Record June trading data should support the thesis, but price action rules. Stop $95 remains the disaster line.
6. **Monitor AVGO for continuation above $375 and watch for any reversal on insider-selling news.** OpenAI Jalapeño partnership is a new bullish data point to weigh against co-founder selling.
7. **Cash reserve:** $2,440.99 (25.4%). Deployment blocker: no marginal add candidates within concentration caps that offer ≥2:1 R/R. Reassess at 17:35Z if a pullback creates a better entry.

## Macro Themes
- **Actionable now:** SPY/QQQ/VOO above 50-day MA = regime supports offensive. 3 of 4 positions deployed are profitable. Patience over forced action.
- **Actionable now:** HOOD record June trading + new analyst upgrades validate the thesis, but price is testing patience. Let it run toward $115 target; stop $95 is the hard line.
- **Worth monitoring:** AVGO insider selling ($720M) vs OpenAI Jalapeño AI Accelerator partnership. If insider selling accelerates or stock reverses hard, may need to trim before $350 stop.
- **Worth monitoring:** Mag 7 rotation ($2.3T shed in June on AI spending scrutiny). Could pressure QQQ short-term but QQQ is above 50D/200D so hold.
- **Worth monitoring:** Cleveland Fed Hammack AI-inflation warning. If this narrative spreads, could pressure tech multiples. Watch QQQ/AVGO reaction.
- **Interesting but not actionable yet:** QTUM above 50D with +60% 3M and thin volume. Quantum computing theme. Limit orders only if ever authorized.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no valid API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS working. Direct web search blocked (Google 429 CAPTCHA).
- **Alpaca bars:** Timestamps at 16:34Z for most symbols; current.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Normal tactical updates to memory/ledger.md and memory/tactical_last_prices.json. No source code modifications.
- **Event detector:** NONE at 16:35Z. Prior timestamp 16:30Z.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
