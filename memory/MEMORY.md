# Hourly Macro Memory
*Updated 2026-05-11 11:58 ET using direct Alpaca REST, Yahoo Finance chart API fallback, and Google News RSS fallback.*

## Current Regime
- **Regime:** **offensive catch-up**
- **Goal check:** **Off track — the portfolio is profitable in dollars, but it is still trailing SPY since inception.**
- **Dominant failure mode:** **cash drag**
- **Current account / cash / gross exposure:** **$10,207.68 equity / $4,705.34 cash / 53.9% gross exposure**
- **Target gross-exposure band:** **58-66%**
- **Why this band now:** the market is open and orderly, semis / Nasdaq remain the clear leadership group, but existing **QQQ** concentration is already above the default ETF cap, so new deployment should diversify into other leaders instead of adding more index beta.

## Current Macro Thesis
The tape is still decisively risk-on for AI infrastructure, semiconductors, and large-cap growth. Multi-timeframe strength remains best in **SOXX, NVDA, AVGO, QTUM, QQQ, and GOOG**, while energy and financial ETF alternatives are lagging on the 1-week to 3-month windows. The best way to catch up is still to stay long leadership, but to do it with tighter concentration discipline than earlier in the week.

The portfolio is no longer severely underexposed, but it is still carrying enough cash to drag against a strong benchmark. Because **QQQ is already about 42% of equity**, the next incremental risk should go into **SOXX first**, then **AVGO**, then **GOOG on a clean reclaim**, not into another QQQ add. Fallback news coverage was mostly noisy; price leadership is the primary signal, while Google News RSS is only background context this cycle.

## Goal Check And Recent Performance Review
- **Since inception (2026-05-01): portfolio +2.08% vs SPY +2.72%** using the $10,000 deposit baseline and **SPY 720.49 → 740.12**.
- **1D portfolio review:** **+0.26%** vs prior live equity (**$10,181.18 → $10,207.68**). What worked: semis and QQQ exposure. What did not: GOOG lagged intraday.
- **1W portfolio review:** **about +2.08%** from the first full live-history week baseline near **$10,000**. Positive, but still not enough to beat SPY.
- **2W portfolio review:** **N/A due to insufficient live history**.
- **Assessment:** current behavior is **not yet on track** for the 3-month goal because the account is still trailing the benchmark despite a favorable tape. What must change today: deploy remaining cash into the strongest non-QQQ leaders, avoid adding to already-overweight QQQ, and keep turnover selective so friction stays low.

## Exposure Plan
- **Authoritative live holdings:** **QQQ 6, GOOG 1, QTUM 2, SOXX 1**
- **Current gross exposure:** **53.9%**
- **Target band:** **58-66%**
- **Same-day deployment plan:** one **SOXX** add is the cleanest immediate move because it brings gross exposure close to the target band without increasing QQQ concentration. If SOXX does not confirm, rotate to **AVGO**, then **GOOG**.
- **Exact blocker preventing more aggressive deployment right now:** **QQQ is already above the default 40% diversified-ETF concentration cap**, and lower-liquidity alternatives like **QTUM** still require stricter quote confirmation.

## Priority Actions For The Next Hour
1. **Authorize one SOXX add** on a confirmed regular-session breakout or reclaim.
2. **Keep QQQ hold-only** this hour because it is already above the default ETF concentration cap.
3. **Use AVGO as the second deployment tool** if SOXX does not trigger.
4. **Use GOOG only as the third choice** on a controlled reclaim; it remains positive overall but is weaker intraday than the semis.
5. **No leverage, no after-hours equity orders, and no second buy once gross exposure reaches 58%+.**

## Ranked Deployment Queue
1. **SOXX** — strongest sector ETF, cleanest non-QQQ catch-up vehicle; post-trade weight about **10.4%** after a 1-share add.
2. **AVGO** — strong AI infrastructure momentum with acceptable post-trade weight near **4.2%**.
3. **GOOG** — still trend-positive, but lower immediate relative strength than semis; post-trade weight near **7.7%** after a 1-share add.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold only | Core Nasdaq exposure is working, but current weight is already above the default ETF cap | 42 |
| SOXX | Buy | Strongest leadership ETF and best next deployment candidate | 10 |
| AVGO | Buy | Strong AI-infrastructure momentum; better diversification than another QQQ add | 4 |
| GOOG | Hold / selective buy | Positive trend, but only on reclaim / confirmation because relative strength is softer than semis | 6 |
| QTUM | Hold only | Trend is strong, but broker trade count / volume remains thin | 3 |
| NVDA | Watch / possible future buy | Leadership intact, but SOXX is the cleaner ETF expression right now | 0 |
| VOO | Avoid | Lower upside than existing tech leadership | 0 |
| XLE | Avoid | 1-week relative strength is weak; macro-news coverage was insufficient for a pivot | 0 |
| XLF | Avoid | Financials lag the current tech-led tape | 0 |
| META | Avoid | Weaker near-term trend than the current leaders | 0 |
| HOOD | Avoid | Not a better use of capital than semis / Nasdaq leadership | 0 |
| RKLB | Watch only | Explosive momentum, but too gap-prone for disciplined hourly deployment | 0 |
| GLD | Avoid | Defensive hedge would dilute catch-up in the current tape | 0 |
| EIS | Watch only | Good trend, but not better than SOXX / AVGO / GOOG today | 0 |
| ARKX | Avoid | Lower-conviction thematic beta than current leaders | 0 |
| SHLD | Avoid | Negative short-term relative strength | 0 |

## Current Holdings
- **QQQ 6** — strongest core position; keep it, but do not add this hour.
- **SOXX 1** — small winner with the best add setup right now.
- **QTUM 2** — keep as a hold-only satellite unless quote quality materially improves.
- **GOOG 1** — profitable but slower than semis; buy only on reclaim / confirmation.

## Near-Term Watchlist
- **SOXX** above **531.40** or reclaim through **528.20** after a controlled dip.
- **AVGO** above **431.20** with semiconductor breadth confirmation.
- **GOOG** reclaim through **392.50** after holding **390.50+**, or later breakout above **397.20**.
- **NVDA** remains a leadership confirmation signal for SOXX / AVGO rather than the first direct add.

## Macro Themes To Monitor
- **Actionable now:** AI capex, semiconductor leadership, Nasdaq momentum, cloud / inference infrastructure demand.
- **Worth monitoring:** Fed-rate repricing, benchmark breadth beneath the mega-cap surface, any abrupt reversal in semis after the recent surge.
- **Interesting but not actionable yet:** energy / geopolitical headlines, financials commentary, and top-investor / analyst-flow coverage; this cycle's fallback coverage was too noisy or too generic to trade directly from.

## Tactical Focus Universe
**QQQ, SOXX, AVGO, GOOG, NVDA, QTUM, SPY**

## Research Files
- `memory/research/alpaca_hourly_20260511T155716Z.json` — live account, positions, clock, portfolio history, latest Alpaca bars.
- `memory/research/yahoo_market_20260511T155716Z.json` — multi-timeframe return snapshot for the tracked universe via Yahoo Finance chart API.
- `memory/research/news_20260511T155716Z.json` — Google News RSS fallback scan; mostly background only this cycle.
- `memory/intraday_execution_log_2026-05-11.md` — intraday run notes for today.

## Standing Learnings
- Size from **account equity**, not buying power.
- **Commission-free is not friction-free**; spreads, slippage, and sell-side fees still matter.
- **Never average down.**
- When the live book is below target in a strong tape, assume **cash drag** until proven otherwise.
- For low-trade-count names like **QTUM**, require second-source confirmation before authorizing a fresh order.
- If the portfolio is already inside the target band, switch from catch-up to management discipline; if it is below band in a strong tape, define an explicit same-day deployment plan.
- If a current position already exceeds the default concentration cap, treat it as **hold-only by default** unless a new explicit override is written.
- When fallback news is noisy, let **price leadership outrank headlines** rather than forcing a thesis from weak coverage.

## Last Run Summary
- Reconciled stale memory against live Alpaca data: the authoritative book is now **QQQ 6, GOOG 1, QTUM 2, SOXX 1**.
- Current account state improved to **$10,207.68 equity**, but the account still trails SPY since inception.
- Quote freshness was good across **SPY / QQQ / SOXX / GOOG / AVGO / NVDA** between Alpaca and Yahoo; **QTUM** remains thin and hold-only.
- FMP remains unavailable because **FMP_API_KEY** is not configured, so the run used **Yahoo Finance chart API** for multi-timeframe returns.
- No code changes were needed beyond a small prompt hardening to prevent fresh adds into already-overweight positions without an explicit override.
