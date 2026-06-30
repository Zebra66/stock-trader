# Hourly Macro Memory
*Updated 2026-06-30 19:35Z (Tuesday 3:35 PM ET). Market OPEN until 20:00Z (4:00 PM ET).*

## Tactical Cycle Summary — 2026-06-30 19:30Z
- **Status:** Market OPEN. Next hourly: 19:35Z (3:35 PM ET). Next tactical: 19:40Z.
- **Event detector:** NONE at 19:35Z. No protective action required.
- **Live broker refresh:** Equity $9,638.52 | Cash $2,440.99 | Long $7,197.53 | Gross 74.7% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5 ($736.90, +3.01% unrealized), VOO 2 ($686.67, +1.51% unrealized), AVGO 3 ($377.98, +1.62% unrealized), HOOD 10 ($100.57, –0.92% unrealized).
- **Open orders:** RKLB limit buy 5 @ $98.00 GTC (order b7b1502f, status new).
- **Filled trades since prior hourly (18:35Z):** NONE. Tactical agent held all positions across 18:40, 18:50, 19:10, 19:20, 19:30 windows.
- **Universe compliance:** All 4 holdings in universe. No breach.
- **Daily trade budget:** 1/3 filled orders used today (HOOD buy at 14:46Z). RKLB order placed but not yet filled. Up to 2 additional filled orders authorized.
- **Tactical ledger quality:** Prices match live broker. No hallucinations. No concealment risk.

## Hourly Cycle Summary — 2026-06-30 19:35Z
- **Repo integrity:** Working tree shows normal tactical updates to memory/ledger.md and memory/tactical_last_prices.json. No source code modifications. No critical breach.
- **Account health:** trading_blocked=false, account_blocked=false, pattern_day_trader=false. All clear.
- **Data quality:** Fresh Yahoo Finance v8 snapshot at 19:35Z used. Alpaca bars current (19:34Z).
- **Concurrent execution:** No race conditions. Tactical agent held all positions per todo.md. No unauthorized orders.
- **Rapid-exposure-drift guard:** No unauthorized drift. Gross exposure stable at 74.7%.
- **Parser sync:** `alpaca_client_factory.ts` and `alpaca_cli.ts` parsers remain synchronized. No issues.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $736.90 | $3,684.50 | 38.2% | +$107.60 | +3.01% |
| VOO | 2 | $676.46 | $686.67 | $1,373.34 | 14.2% | +$20.42 | +1.51% |
| AVGO | 3 | $371.95 | $377.98 | $1,133.94 | 11.8% | +$18.09 | +1.62% |
| HOOD | 10 | $101.50 | $100.57 | $1,005.70 | 10.4% | –$9.30 | –0.92% |
| Cash | — | — | — | $2,440.99 | 25.3% | — | — |
| **Equity** | — | — | — | **$9,638.47** | **100%** | — | **–3.62%** |

- **Gross long exposure:** 74.7%
- **Net exposure:** 74.7%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Portfolio heat (entry-to-stop):** $290.67 (3.02% of equity). Under 6% daily loss cap.
- **Open orders:** RKLB limit buy 5 @ $98.00 GTC

## Performance Review — Tue Jun 30 (Intraday, ~3:35 PM ET)
- **1D (today):** Portfolio +0.87% ($9,555.76 → $9,638.47) vs SPY +0.83% (741.00 → 747.12). **Outperforming by +0.04 pp.** QQQ/VOO/AVGO green; HOOD slightly underwater.
- **1W (5d, Jun 23 → Jun 30):** Portfolio est. +1.8% vs SPY +1.77%. **Roughly flat / slight edge.** Core positions recovering.
- **2W (10d, Jun 16 → Jun 30):** Portfolio est. –1.8% vs SPY –1.09%. **Underperforming by ~0.7 pp.** June churn still weighing.
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–3.62%** ($9,638.47 vs $10,000) vs SPY **+4.05%** (SPY $747.12 vs baseline $718.01). **Trailing by ~7.67 pp.**
- What is working: Holding core positions >24 hours without churn. QQQ/VOO/AVGO all profitable. No daytrade consumed. RKLB catalyst identified; limit order placed at good R/R. Slight daily edge vs SPY today.
- What is not working: SPY baseline head start. Cash drag at 25.3%. June churn cycle destroyed ~$100+ equity. HOOD entry at $101.50 is underwater –0.92%.
- What must change: Need RKLB fill or another high-conviction winner with ≥2:1 R/R to close the 7.67 pp gap. Avoid forced deployment into marginal setups. Patience + quality over quantity. Do NOT average down on HOOD.

## Goal Check
- **Portfolio since inception:** –3.62% ($9,638.47 vs $10,000 base)
- **S&P 500 since inception:** +4.05% (SPY $747.12 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.67 pp.
- **Dominant failure mode:** **excessive turnover / friction + cash drag.** Whipsaw cycle in June cost ~$100+ in realized losses. Clean holding since Monday is the first step toward recovery.
- **Posture:** **offensive catch-up.** Gross exposure 74.7% is in the 60–90% band. Market is orderly (NONE event). SPY/QQQ/VOO above 50-day MA. We are holding risk assets and letting winners run. RKLB limit order at $98 is a disciplined deployment attempt.

## Market Intel — Tuesday 3:35 PM ET
- **Broad market:** Tech-fueled rally closing out June. SPY $747.12 (+0.83%), QQQ $736.90 (+1.77%), VOO $686.67 (+0.83%). All above 50D/200D. Orderly tape. Q2 ending strong.
- **Semiconductor sector:** SOXX $641.97 (+4.09% today). Chip rally accelerating. AVGO +1.62% intraday. "Chip stocks hit record 19.7% of S&P 500" validates AI capex thesis.
- **HOOD momentum:** $100.57 (–0.92% from our entry, –1.24% from prior close). Day low $99.66, recovered. Record June trading thesis still intact. Stop $95 holds.
- **RKLB / Iridium acquisition:** Major news — Rocket Lab buying Iridium ($8B deal). Stock gapped to $104.16, day low $95.64 (morning), now $101.07. Yesterday's close ~$95.12. Our limit buy at $98.00 (prior close retest) offers 2.75:1 R/R. Order placed at 18:39Z; missed morning dip. Will carry GTC into Wednesday session.
- **Fed / Macro:** Cleveland Fed Hammack AI-inflation warning still relevant but not moving tape today. Oil tumbling reduces inflationary pressure.
- **AVGO insider selling vs catalyst:** Co-founder quarterly stake sales topped $720M (bearish). OpenAI Jalapeño partnership + chip rally are bullish offsets. Net effect uncertain — hold 3 shares with stop $350.
- **GOOG / Mag 7 rotation:** $354.32 (+0.46% today). Below 50D. Mag 7 shed $2.3T in June on AI spending scrutiny. No edge. Avoid.
- **NVDA:** $199.37 (+1.75% today but –6.04% 1M). Below 50D. No edge over AVGO/SOXX. Avoid.
- **META:** Banned. Below 50D/200D. No re-entry.
- **GLD:** $369.06 (+0.28% today but –11.39% 1M). Below 50D/200D. Defensive gold failing. Avoid.
- **Earnings dates:** No binary earnings for holdings in next 48 hours. AVGO ~Sep 3. NVDA ~Aug 26. GOOG/META ~Jul 23. HOOD likely late Jul / early Aug.
- **Illiquidity flags:** EIS (1 trade), ARKX (1 trade), GLD (13 trades), SHLD (1 trade), QTUM (14 trades). Limit orders only if ever authorized.

## Multi-Timeframe Performance (Yahoo Finance v8)
*Fresh snapshot fetched 2026-06-30 17:37Z (intraday 1D refreshed at 19:35Z).*

| Symbol | 1D | 1W (5d) | 2W (10d) | 1M (21d) | 3M (63d) | 6M (126d) | Trend |
|---|---|---|---|---|---|---|---|
| SPY | +0.83% | +1.77% | –1.09% | –1.31% | +18.14% | +8.15% | Above 50D/200D |
| QQQ | +1.77% | +3.14% | –1.07% | –0.31% | +31.84% | +17.98% | Above 50D/200D |
| VOO | +0.83% | +1.46% | –1.10% | –1.33% | +18.12% | +8.09% | Above 50D/200D |
| AVGO | +1.62% | –1.39% | –4.84% | –16.09% | +27.77% | +6.46% | Below 50D, Above 200D |
| NVDA | +1.75% | –0.82% | –6.62% | –6.04% | +20.11% | +4.13% | Below 50D, Above 200D |
| META | –0.43% | –0.36% | –5.61% | –11.44% | +4.44% | –15.55% | Below 50D/200D |
| GOOG | +0.46% | +1.97% | –3.87% | –6.25% | +29.20% | +12.05% | Below 50D, Above 200D |
| HOOD | –1.24% | –2.77% | +2.32% | +6.46% | +54.07% | –15.01% | Above 50D, Below 200D |
| RKLB | +6.64% | +8.78% | –5.29% | –27.89% | +80.32% | +46.45% | Below 50D, Above 200D |
| GLD | +0.28% | –2.05% | –6.80% | –11.39% | –10.85% | –11.31% | Below 50D/200D |
| SOXX | +4.09% | +5.98% | +1.75% | +12.37% | +106.42% | +108.95% | Above 50D/200D |
| QTUM | +2.20% | +0.61% | –2.21% | +2.87% | +60.87% | +47.38% | Above 50D/200D |
| EIS | +0.82% | +0.91% | –4.83% | –12.42% | +9.40% | +9.93% | N/A |
| SHLD | +1.41% | –1.70% | –5.93% | –11.85% | –12.84% | –9.79% | N/A |
| ARKX | +2.81% | +3.84% | –3.18% | –8.88% | +21.69% | +15.38% | N/A |

## Position Map — Tue Jun 30 (3:35 PM ET)
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. +3.01% unrealized. Stop $690. No adds (cap). | 35–45% |
| VOO | **HOLD** | S&P anchor. +1.51% unrealized. Stop $660. No adds (cap). | 10–20% |
| AVGO | **HOLD** | AI chip alpha. +1.62% unrealized. Stop $350. No adds (cap). Monitor insider selling vs chip rally. | 5–15% |
| HOOD | **HOLD** | Record June trading + analyst PTs. –0.92% unrealized. Stop $95. No adds (just bought today; NEVER average down). | 5–15% |
| RKLB | **BUY (limit)** | Iridium acquisition catalyst. Limit buy 5 @ $98 placed (2.75:1 R/R). Stop $90, target $120. Wait for fill. GTC into Wed. | 0–5% |
| GOOG | **AVOID** | Mag 7 rotation headwind. Below 50D. No edge. | 0% |
| SOXX | Avoid / monitor | Chip-climax warning. Overlaps QQQ/AVGO. Very extended (+106% 3M). No edge. | 0% |
| NVDA | Avoid | Below 50D. Single-stock chip risk. No edge over AVGO. | 0% |
| META | Banned | `bannedSymbols` active. | 0% |
| GLD | Avoid | Below 50D/200D. Defensive gold failing. | 0% |
| EIS / SHLD / QTUM / ARKX | Avoid | Thin liquidity or no edge. | 0% |

## Priority Actions (Tuesday Jun 30 Regular Session — 25 min remaining)
1. **HOLD ALL CORE POSITIONS.** QQQ, VOO, AVGO profitable and held >24 hours. HOOD is underwater –0.92% but well above $95 stop and recovered from $99.66 day low. No same-day sells authorized unless hard stop breached AND event detector flags CRITICAL/MAJOR.
2. **RKLB LIMIT BUY 5 @ $98.00 IS OPEN GTC.** Order b7b1502f GTC. If filled, stop $90.00, target $120.00. Do NOT cancel unless price breaks below $90 or a CRITICAL event occurs. Do NOT chase above $101. Order will carry into Wednesday regular session if not filled today.
3. **Do NOT add to HOOD today.** Entry was $101.50. Current $100.57. Adding to a losing position is averaging down — **PROHIBITED.** Preserve cash for a better setup or protective action.
4. **Do NOT add to QQQ, VOO, or AVGO.** Concentration caps prevent meaningful adds. QQQ at 38.2% (1 share add = ~45.9% breach). VOO at 14.2% (1 share add = ~21.3% breach). AVGO at 11.8% (1 share add = ~15.7% breach).
5. **Do NOT buy GOOG, SOXX, NVDA, GLD, or thin ETFs.** No high-conviction setups with ≥2:1 R/R at current prices.
6. **Monitor HOOD for any acceleration below $99.50.** Day low was $99.66 — if it revisits and breaks $99.50 with volume, sentiment may be shifting. Record June trading data should support the thesis, but price action rules. Stop $95 remains the disaster line.
7. **Monitor AVGO for continuation above $375 and watch for any reversal on insider-selling news.** Chip rally supports it, but co-founder selling is a risk. Stop $350 holds.
8. **Cash reserve:** $2,440.99 (25.3%) plus $490 reserved for RKLB fill. Deployment blocker: no other marginal add candidates within concentration caps that offer ≥2:1 R/R. Reassess at tomorrow's 9:35 AM ET open.

## Macro Themes
- **Actionable now:** SPY/QQQ/VOO above 50-day MA = regime supports offensive. 3 of 4 positions deployed are profitable. Patience over forced action.
- **Actionable now:** RKLB/Iridium acquisition. Limit order at $98 (prior close retest) is the highest-conviction deployment candidate. 2.75:1 R/R. Let the market come to us. Carry GTC into Wednesday.
- **Actionable now:** HOOD record June trading + analyst upgrades validate thesis, but price is testing patience. Let it run toward $115 target; stop $95 is the hard line.
- **Worth monitoring:** AVGO insider selling ($720M) vs chip rally. If stock reverses hard, may need to trim before $350 stop.
- **Worth monitoring:** Mag 7 rotation ($2.3T shed in June on AI spending scrutiny). Could pressure QQQ short-term but QQQ is above 50D/200D so hold.
- **Worth monitoring:** Cleveland Fed Hammack AI-inflation warning. If this narrative spreads, could pressure tech multiples. Watch QQQ/AVGO reaction.
- **Interesting but not actionable yet:** QTUM above 50D with +60% 3M and thin volume. Quantum computing theme. Limit orders only if ever authorized.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **Parser synchronization:** `alpaca_client_factory.ts` and `alpaca_cli.ts` parsers synchronized. No issues.
- **FMP** disabled (no valid API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS working. Direct web search blocked (Google 429 CAPTCHA).
- **Alpaca bars:** Timestamps at 19:34Z for most symbols; current.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Normal tactical updates to memory/ledger.md and memory/tactical_last_prices.json. No source code modifications.
- **Event detector:** NONE at 19:35Z. Prior timestamp 19:30Z.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
