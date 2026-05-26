# Hourly Macro Memory
*Updated 2026-05-26 16:35Z (Tuesday 12:35 PM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **offensive catch-up** (60–80% band) — **elevated geopolitical watch**
- **Why:** Portfolio is positive absolute (+1.35%) but trailing SPY by ~3.08 pp since inception. Gross exposure at 77.86%, inside band. Iran ceasefire hopes remain faded; no new confirmed retaliation since 11:35 AM but tensions persist. Market orderly, semis pulling back from very extended levels. Portfolio outperforming today by ~52 bps.

## Repo Integrity
- **Status:** Clean. Working tree clean, no tracked files staged for deletion.
- **Code changes this cycle:** Added concentration cap enforcement to `alpaca_client_factory.ts` (universal SDK factory) via shared `src/tools/concentration_guard.ts` helper. Extracted duplicate cap logic from `alpaca_cli.ts`. Added 10 unit tests. All 133 tests pass.

## Live Book (Alpaca)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $728.50 | $4,371.00 | 43.13% | +$162.93 | +3.87% |
| GOOG | 3 | $392.92 | $383.08 | $1,149.24 | 11.35% | –$29.52 | –2.50% |
| VOO | 2 | $673.925 | $689.485 | $1,378.97 | 13.61% | +$31.12 | +2.31% |
| NVDA | 2 | $220.20 | $213.19 | $426.38 | 4.21% | –$14.01 | –3.18% |
| SOXX | 1 | $533.95 | $564.98 | $564.98 | 5.57% | +$31.03 | +5.81% |
| Cash | — | — | — | $2,244.52 | 22.15% | — | — |
| **Equity** | — | — | — | **$10,134.97** | **100%** | — | **+1.35%** |

- **Gross long exposure:** 77.86%
- **Net exposure:** 77.86%
- **Daytrade count:** 1/3 (META round-trip from Thursday)
- **Pattern day trader:** false
- **Open orders:** 2 limit buys — NVDA $210, SOXX $555. GOOG $372 was **canceled** to prevent 15% single-stock cap breach (4 shares @ ~$383 = 15.1% of equity).

## Performance Review — Tuesday May 26 (12:35 PM ET Hourly)
- **1D (today):** portfolio **+1.08%** ($10,028.37 → $10,134.97) vs SPY **+0.56%**. **Outperforming today by ~52 bps.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+1.35%** vs SPY **+4.43%** (baseline 718.01 → 749.83). Trailing by ~3.08 pp.
- **Gap trajectory:** Trailing SPY by ~3.06 pp at 11:35 AM → ~3.08 pp now. Stable.
- What is working: QQQ steady anchor (+3.87% unrealized, +1.53% today), VOO defensive ballast (+2.31% unrealized, +0.57% today), SOXX strong despite pullback (+5.81% unrealized, +5.15% today).
- What is not working: GOOG softness (-2.50% unrealized, +0.98% today but off highs), NVDA persistent underperformance (-3.18% unrealized, -0.99% today and -4.06% weekly) lagging SOXX badly.
- What must change: Continue deploying cash on high-quality setups, but only on pullbacks given Iran uncertainty. With concentration caps binding at ~$10K equity, adding new names requires selling existing ones or deeper pullbacks that fit within caps.

## Goal Check
- **Portfolio since inception:** +1.35% ($10,134.97 vs $10,000 base)
- **S&P 500 since inception:** +4.43% (SPY 749.83 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~3.08 pp). **Goal 1 (positive absolute) is MET.**
- **Dominant failure mode:** **cash drag + late entries / poor execution.** The gap is stable today but remains wide because our high-beta exposure (SOXX, NVDA) outperformed on the way up but NVDA underperformed on the pullback, while cash cushioned the absolute drop but did not help relative performance.

## Market Intel — Tuesday 12:35 PM ET
- **Iran situation stable but tense:** No new confirmed strikes or retaliation since 11:35 AM. Washington Post 9:36 AM ET / NBC 8:29 AM ET headlines still the latest confirmed actions. Market has digested the news and remains orderly.
- **Market reaction:** SPY +0.56%, QQQ +1.53%, VOO +0.57%. Orderly pullback from morning highs.
- **Chip stocks fading from extended levels:** SOXX was +6.2% intraday at 10:45 AM; now +5.15%. Still up +13.97% weekly. IBD headline: "Chip Stocks Take A Breather After Historic Run."
- **NVDA weekly loss deepening:** NVDA -4.06% weekly vs SOXX +13.97%. China H200 restriction overhang persists (Yahoo Finance headline from May 25).
- **SPY at/near record:** 749.83. Rally vulnerable to geopolitical reversal but holding.
- **News access:** Yahoo Finance RSS partially working; Google News direct blocked. Fallback sources are Yahoo Finance RSS and Google News RSS via public endpoints. Coverage sufficient for macro but sparse for real-time stock-specific catalysts.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold | Core liquid growth. 43.13%, near 45% cap. Cannot add without breaching. | 36–45% |
| GOOG | Hold | Core thesis intact. 11.35%, within 15% cap. **Limit buy canceled** — 4 shares would breach 15% cap. No add planned this hour. | 10–15% |
| VOO | Hold | Broad-market anchor. 13.61%. Adding 1 share would breach 20% non-QQQ ETF cap. | 10–20% |
| SOXX | Hold / Pullback add | Breakout pulling back from very extended. +5.81% unrealized. Limit buy 1 share at $555 active. If fills, position 2 shares / ~11.1%. | 5–10% |
| NVDA | Hold / Pullback add | Persistent underperformance vs semi peers. 4.21%. Limit buy $210 for 1 share active. If fills, position 3 shares / ~6.3%. | 3–6% |
| AVGO | Avoid | bannedSymbols active. No edge. | 0% |
| META | Avoid | bannedSymbols active. Weak trends; no re-entry. | 0% |
| RKLB | Avoid | Parabolic, no edge. 1W +8.66%. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends or thin liquidity. | 0% |

## Priority Actions
1. **HOLD current positions.** All five holdings are appropriately sized and in the approved universe.
2. **NVDA limit buy $210 active.** 1 share. Fills only on deeper pullback (~2.2% below current). Within caps, good entry.
3. **SOXX limit buy $555 active.** 1 share. Fills on ~1.8% pullback. Within caps.
4. **GOOG limit buy CANCELED.** Would breach 15% single-stock cap if filled (4 shares @ ~$383 = 15.1%). Will reassess on deeper pullback or after equity grows.
5. **Do NOT sell any position today unless Iran escalation causes SPY to drop >1.5% from current level.** Let winners run. NVDA and GOOG unrealized losses are manageable.
6. **Reassess at 1:35 PM ET hourly.** If Iran retaliation confirmed or market breaks key supports, trim SOXX and consider raising cash.
7. **Tactical agent discipline:** No same-day reversals. NVDA 1 share bought today — cannot sell today. If SOXX/NVDA limit fills, those shares cannot be sold today.
8. **If both NVDA and SOXX limits fill, gross exposure rises to ~85%.** Do not authorize any additional long exposure in that case.

## Macro Themes
- **Actionable now:** Iran ceasefire hopes reversing → risk-off tail risk rising. Our limit-buy structure (only adding on pullbacks) is the right posture. Do NOT chase upside here.
- **Worth monitoring:** Iran retaliation threat. If confirmed, oil spikes and risk-off follows. Our high-beta semi exposure (SOXX, NVDA, QQQ) is vulnerable.
- **Worth monitoring:** NVDA post-earnings drift vs SOXX breakout. NVDA-SOXX divergence is extreme. If NVDA catches up, it could close the portfolio gap. If it breaks down, cut the position.
- **Worth monitoring:** New Fed Chair Warsh — any hawkish surprise could reverse the rally.
- **Interesting but not actionable yet:** AI power demand, SpaceX/OpenAI IPO pipeline.

## Universe Performance Snapshot (Yahoo Finance v8 as of ~12:35 PM ET May 26)
| Symbol | Latest | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|---|
| AVGO | 422.54 | +0.43% | –0.05% | +27.02% | +24.20% | +79.31% |
| EIS | 137.11 | +6.07% | +8.20% | +11.68% | +36.43% | +62.88% |
| GLD | 413.93 | –1.08% | –4.46% | –11.67% | +10.60% | +35.94% |
| GOOG | 382.94 | –2.59% | +11.87% | +21.61% | +27.80% | +120.11% |
| HOOD | 74.35 | –3.63% | –12.23% | –2.31% | –30.71% | +12.62% |
| META | 610.82 | –0.06% | –9.51% | –6.84% | +2.79% | –4.90% |
| NVDA | 213.29 | –4.06% | +2.41% | +12.36% | +19.24% | +57.41% |
| QQQ | 728.49 | +3.20% | +9.73% | +19.66% | +23.46% | +39.77% |
| QTUM | 157.98 | +11.28% | +18.97% | +34.70% | +55.74% | +80.75% |
| RKLB | 142.52 | +8.66% | +78.87% | +101.13% | +253.65% | +395.55% |
| SHLD | 65.94 | +3.60% | –2.41% | –12.62% | +7.46% | +15.87% |
| SOXX | 565.13 | +13.97% | +22.43% | +57.23% | +108.67% | +170.02% |
| VOO | 689.50 | +1.56% | +5.04% | +8.75% | +13.79% | +26.90% |
| ARKX | 36.51 | +7.04% | +10.74% | +12.17% | +40.37% | +72.30% |

## Data / Process Notes
- **Alpaca CLI** working. All guards active.
- **Universal factory guard** now enforces concentration caps (previously missing). Shared helper `concentration_guard.ts` with 10 unit tests.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback. Saved to `temp_files/perf_snapshot_2026-05-26_1635Z.json`.
- **News access** via Yahoo Finance RSS and Google News RSS partially working; direct web sources remain blocked.
- **Alpaca bars** timestamps at 16:34Z (12:34 PM ET), acceptable freshness.
- **Day-trade status:** 1/3. NVDA add today is a new open, not a round-trip.
- **Earnings dates:** No binary earnings events in next 48 hours for held positions.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.

## Hourly Cycle Summary — 2026-05-26 16:35Z (Tuesday 12:35 PM ET)
- **Live broker refresh:** Equity $10,134.97 | Cash $2,244.52 | Long $7,890.45 | Gross 77.86% | Daytrade 1/3.
- **Repo integrity:** Clean. No issues.
- **Open orders confirmed:** SOXX buy 1 limit $555 (PENDING), NVDA buy 1 limit $210 (PENDING). GOOG buy 1 limit $372 **CANCELED** (15% cap breach risk).
- **No sells.** No unauthorized trades.
- **Market intel:** Iran situation stable but tense. No new confirmed strikes. Market orderly. SOXX +5.15% intraday (down from +6.2% highs), QQQ +1.53%, VOO +0.57%, GOOG +0.98%, NVDA -0.99%.
- **Goal check:** Goal 1 MET (+1.35% absolute). Goal 2 off track (trailing SPY by ~3.08 pp).
- **Regime:** Offensive catch-up with elevated geopolitical watch. Target gross exposure 60–80% (currently 77.86%).
- **Orders placed this cycle:** Canceled GOOG limit $372.
- **Code changes:** Added `src/tools/concentration_guard.ts` with shared cap-check logic. Updated `alpaca_client_factory.ts` and `alpaca_cli.ts` to use it. 10 new unit tests. All 133 tests pass.
- **Next expected action:** 1:35 PM ET hourly — reassess if Iran escalation accelerates or market stabilizes.
