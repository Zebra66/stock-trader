# Hourly Macro Memory
*Updated 2026-06-29 14:37Z (Monday 10:37 AM ET). Market OPEN until 20:00Z (4:00 PM ET).*

## Hourly Cycle Summary — 2026-06-29 14:35Z (Monday 10:35 AM ET)
- **Status:** Market OPEN. Second hourly run of Monday.
- **Live broker refresh:** Equity $9,487.97 | Cash $3,456.00 | Long $6,031.97 | Gross 63.6% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5, VOO 2, AVGO 3.
- **Open orders:** NONE.
- **Filled trades since prior hourly (13:35Z):** QQQ 5@$715.38, VOO 2@$676.46, AVGO 3@$371.95. All 3 daily budget orders used in 09:35Z plan.
- **Universe compliance:** All 3 holdings in universe. No breach.
- **Rapid-exposure-drift guard:** Gross rose from 0% to 63.6% via authorized morning limit buys. No unauthorized drift.
- **Concurrent execution:** No race conditions. No unauthorized orders.
- **Daytrade status:** 0/3. Clean slate.
- **Code integrity:** Clean. Only tactical_last_prices.json modified.
- **Branch:** Up to date with origin/main.
- **Freshness:** Live Alpaca data matches pre-fetch. Event detector live run at 14:37Z confirms MINOR.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $714.06 | $3,570.30 | 37.62% | –$6.60 | –0.09% |
| VOO | 2 | $676.46 | $677.86 | $1,355.72 | 14.29% | +$2.80 | +0.21% |
| AVGO | 3 | $371.95 | $368.65 | $1,105.95 | 11.66% | –$9.90 | –0.89% |
| Cash | — | — | — | $3,456.00 | 36.43% | — | — |
| **Equity** | — | — | — | **$9,487.97** | **100%** | — | **–5.12%** |

- **Gross long exposure:** 63.6%
- **Net exposure:** 63.6%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Portfolio heat:** $225.67 (2.38% of equity). Under 6% daily loss cap.
- **Open orders:** NONE

## Performance Review — Mon Jun 29 (10:37 AM ET)
- **1D (today so far):** Portfolio unrealized ~–0.14% vs SPY ~+1.25%. **Underperforming by ~1.4 pp.**
- **1W (Jun 22 → Jun 29):** Portfolio ~–1.5% (est. $9,626 → $9,488) vs SPY ~–0.8%. **Underperforming by ~0.7 pp.**
- **2W (Jun 15 → Jun 29):** Portfolio ~–2.7% (est. $9,745 → $9,488) vs SPY ~–0.5%. **Underperforming by ~2.2 pp.**
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–5.12%** ($9,487.97 vs $10,000) vs SPY **+2.70%** (SPY $737.43 vs baseline $718.01). **Trailing by ~7.82 pp.**
- What is working: Core positions deployed at limit prices, minimal slippage. VOO slightly profitable. Event detector resolved from CRITICAL to MINOR.
- What is not working: QQQ/AVGO slightly underwater from morning entries. SPY gap-up open gave SPY a 1.25% head start before our fills.
- What must change: We need these positions to move into +1R/+2R territory. No more churn. Hold with wide stops. Next add opportunity is a pullback to support, not chasing higher.

## Goal Check
- **Portfolio since inception:** –5.12% ($9,487.97 vs $10,000 base)
- **S&P 500 since inception:** +2.70% (SPY $737.43 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.82 pp.
- **Dominant failure mode:** **excessive turnover / friction + cash drag.** Whipsaw cycle of Jun 23 sells, Jun 25 re-buys, Jun 26 stop-outs, Jun 29 gap-up miss continues. Each round trip costs ~0.1–0.3% in slippage and missed rebounds.
- **Posture:** **offensive catch-up.** Gross exposure 63.6% is within 60–90% band but at the low end. Need to reach 75%+ if setups confirm.

## Market Intel — Monday 10:37 AM ET
- **Broad market:** SPY $737.43 (+1.25%), QQQ $714.06 (+1.07%), VOO $677.86 (+1.13%). All reclaimed 50-day MA. Gapped up and holding gains mid-morning.
- **Semiconductor sector:** SOXX $585.09 (event detector shows -0.68% from 14:35Z snapshot, but still up on day). SMH $609.20 (-0.55% in last 2 min). Chip bounce from CRITICAL at 14:10Z has partially faded. Morgan Stanley Wilson chip-climax warning still relevant but not materializing as crash.
- **Fed news:** Supreme Court ruled Lisa Cook can stay at Fed while challenging Trump firing attempt. Preserves Fed independence. Mildly bullish for reducing political tail risk.
- **Space sector:** RKLB +12% on $8B Iridium acquisition news (MarketWatch, 14:07Z). Major catalyst but post-gap-up chase is poor risk/reward.
- **Relative strength (today):** RKLB (+12%), ARKX (+3%), GOOG (+3%), AVGO (+2.8%), META (+2.5%).
- **Earnings dates:** No binary earnings for holdings in next 48 hours. AVGO ~Sep 3. NVDA ~Aug 26. GOOG/META ~Jul 23.
- **Illiquidity flags:** EIS (4 trades, stale Jun 26), ARKX (1 trade), SHLD (1 trade), GLD (4 trades). Limit orders only if ever authorized.

## Multi-Timeframe Performance (Yahoo Finance v8)
*Fetched 2026-06-29 14:35Z.*

| Symbol | 1D | 1W | 2W | 1M | 3M | 6M | 50D MA | 200D MA |
|---|---|---|---|---|---|---|---|---|
| SPY | +1.25% | –0.84% | –0.49% | –2.18% | +12.38% | +7.31% | Above | Above |
| QQQ | +1.07% | –2.93% | –0.70% | –2.62% | +21.86% | +15.37% | Above | Above |
| VOO | +1.13% | –1.12% | –0.52% | –2.23% | +12.01% | +7.24% | Above | Above |
| AVGO | +2.76% | –4.34% | –1.82% | –12.07% | +17.66% | +7.36% | Below | Above |
| NVDA | +1.13% | –6.68% | –5.11% | –9.12% | +8.97% | +3.45% | Below | Above |
| META | +2.51% | +0.04% | –0.51% | –11.21% | –5.18% | –14.36% | Below | Below |
| GOOG | +2.97% | –1.19% | –3.78% | –10.75% | +19.01% | +9.62% | Below | Above |
| HOOD | +0.70% | –5.99% | +6.64% | +17.14% | +37.00% | –15.37% | Above | Below |
| RKLB | +12.01% | –5.58% | –7.52% | –36.03% | +29.93% | +35.04% | Below | Above |
| GLD | –0.74% | –3.57% | –4.05% | –10.15% | –10.91% | –6.96% | Below | Below |
| SOXX | +1.57% | –8.52% | +0.49% | +5.22% | +73.55% | +96.25% | Above | Above |
| QTUM | +1.41% | –6.18% | –1.94% | –0.56% | +41.71% | +43.18% | Above | Above |
| EIS | +2.19% | –0.55% | –7.33% | –12.45% | +0.02% | +9.36% | N/A | N/A |
| SHLD | +1.04% | –2.62% | –7.55% | –13.13% | –19.76% | –10.17% | N/A | N/A |
| ARKX | +3.13% | –1.29% | –2.52% | –12.75% | +5.95% | +12.39% | N/A | N/A |

## Position Map — Monday Jun 29 (10:37 AM ET)
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **HOLD** | Core growth. Reclaimed 50-day MA. Currently near breakeven. Stop $690. Do not add (averaging down prohibited). | 35–45% |
| VOO | **HOLD** | S&P anchor. Small unrealized profit. Stop $660. At 14.3%, no room to add without breaching 20% ETF cap. | 10–20% |
| AVGO | **HOLD** | AI chip alpha. Below 50-day but in uptrend on 3M/6M. Stop $350. Underwater; no adds. | 5–15% |
| SOXX | Avoid / monitor | Chip-climax warning. Above 50-day but volatile. Overlaps QQQ/AVGO. | 0% |
| NVDA | Avoid | Below 50-day. Single-stock chip risk. No edge over AVGO. | 0% |
| GOOG | Avoid | Below 50-day. Weak 1M. No catalyst until Jul 23 earnings. | 0% |
| META | Banned | `bannedSymbols` active. | 0% |
| HOOD | Avoid | Above 50-day but below 200-day. No edge. | 0% |
| RKLB | Watch only | +12% on acquisition news. Chasing gap-up is poor R/R. Wait for base above $95. | 0% |
| GLD | Avoid | Below 50-day and 200-day. Defensive gold failing. | 0% |
| EIS / SHLD / QTUM / ARKX | Avoid | Thin liquidity or no edge. | 0% |

## Priority Actions
1. **HOLD ALL CORE POSITIONS.** No new orders today. Let QQQ/VOO/AVGO work. 3/3 trade budget already used.
2. **Do not average down.** QQQ and AVGO are underwater. Adding at current prices violates skill rule #10.
3. **Monitor chip volatility.** If SOXX reverses hard and AVGO breaches $350.00, protective sell authorized only during CRITICAL/MAJOR event per tactical override.
4. **Preserve cash for pullback add.** If QQQ pulls back to ~$705–$708 with support, consider adding 1 share (would reach ~45% cap). Must wait for tomorrow's fresh budget.
5. **Watch RKLB base.** If it holds above $95 for 2+ sessions post-acquisition, it may become a tactical long candidate.

## Macro Themes
- **Actionable now:** SPY/QQQ/VOO reclaimed 50-day MA = regime shift to offensive. Positions deployed. Now patience.
- **Worth monitoring:** Fed independence preserved (Cook stays). Reduces political tail risk. Mildly bullish.
- **Worth monitoring:** RKLB/Iridium $8B acquisition. Real space-sector M&A. If RKLB holds gap, space theme may re-rate.
- **Worth monitoring:** Q2 earnings expectations "sky-high" (Yahoo Finance 14:13Z). Risk of buy-the-rumor, sell-the-news into July. Lighten before Jul 23 if portfolio is profitable.
- **Interesting but not actionable yet:** QTUM above 50-day with +41.71% 3M. Quantum computing theme. Too thin to trade.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS + MarketWatch RSS active and returning actionable content.
- **Alpaca bars:** Timestamps at 14:35Z for most symbols; current.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Clean. No unauthorized source changes.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
