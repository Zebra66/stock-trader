# Hourly Macro Memory
*Updated 2026-05-11 16:26 ET. Current run classified as a **data blackout** after broker and market-data refresh failures across primary and fallback paths. Preserve the last confirmed 11:57 ET state until fresh data returns.*

## Current Regime
- **Regime:** **neutral**
- **Goal check:** **Off track — the portfolio is profitable in dollars, but it still trails SPY since inception, and this run could not safely improve exposure because fresh data failed.**
- **Dominant failure mode:** **cash drag**
- **Last confirmed account / cash / gross exposure:** **$10,207.68 equity / $4,705.34 cash / 53.9% gross exposure**
- **Target gross-exposure band once fresh data returns:** **58-66%**
- **Why the posture is neutral right now:** the portfolio still needs more exposure to beat SPY, but a live **data blackout** overrides offense; no new orders are authorized until both broker state and market data refresh successfully.

## Current Macro Thesis
The **last confirmed** intraday read from 11:57 ET still favored a risk-on tape led by semiconductors, AI infrastructure, and Nasdaq beta. On that confirmed snapshot, **SOXX, NVDA, AVGO, QTUM, QQQ, and GOOG** were the strongest tech expressions, while **XLE** and **XLF** lagged on the key 1-week to 3-month windows. Under normal conditions, the right catch-up posture would still be to deploy remaining cash into non-QQQ tech leadership rather than rotate into weaker energy or financial sleeves.

That thesis is now **background only**, not actionable, because the current run could not refresh broker/account data or market prices. Until a later run restores live visibility, capital protection comes from **not trading blind**, preserving the **last confirmed** book, and invalidating stale tactical triggers rather than guessing into the next session.

## Goal Check And Performance Review
- **Since inception (last confirmed): portfolio +2.08% vs SPY +2.72%** using the $10,000 deposit baseline and **SPY 720.49 → 740.12**.
- **1D portfolio review (last confirmed): +0.26%** vs prior live equity (**$10,181.18 → $10,207.68**).
- **1W portfolio review (last confirmed): about +2.08%** from the first live baseline near **$10,000**.
- **2W portfolio review:** **N/A due to insufficient live history**.
- **Assessment:** **Off track**. What had been working was semiconductor / QQQ leadership; what was not working was residual **cash drag** and slower relative strength from **GOOG** versus the semiconductor sleeve. What must still change when data returns: deploy some of the idle cash into the strongest non-overweight leaders, but only with fresh confirmation.

## Exposure Plan
- **Authoritative last confirmed holdings:** **QQQ 6, GOOG 1, QTUM 2, SOXX 1**
- **Last confirmed gross exposure:** **53.9%**
- **Target band when visibility returns:** **58-66%**
- **Exact blocker preventing deployment right now:** **current broker/account state and current market prices could not be refreshed; all prior buy triggers are now stale**.
- **Operational rule:** until fresh data is available, keep the book unchanged and authorize **no after-hours / pre-market equity orders**.

## Priority Actions For The Next Hour
1. **Do not trade during the blackout.**
2. On the next successful data refresh, first verify holdings, cash, and quote freshness before reactivating any buy/sell trigger.
3. If the next confirmed session still shows the same leadership structure, reopen the prior catch-up queue in order: **SOXX**, then **AVGO**, then **GOOG**.
4. Keep **QQQ hold-only by default** unless a future run writes an explicit concentration override.

## Ranked Deployment Queue Once Data Returns
1. **SOXX** — cleanest ETF expression of the strongest confirmed leadership sleeve.
2. **AVGO** — strong AI infrastructure exposure with lower concentration risk than another QQQ add.
3. **GOOG** — still trend-positive on the last confirmed read, but weaker than semis and requires reclaim confirmation.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold only | Core exposure is working, but already above the default ETF concentration cap on the last confirmed snapshot | 42 |
| SOXX | Hold / future buy candidate | Best next deployment tool once fresh data confirms leadership again | 10 |
| AVGO | Watch / future buy candidate | Strong prior relative strength, but no live confirmation now | 4 |
| GOOG | Hold / selective future buy | Positive prior trend, but weaker than semis and currently unconfirmed | 6 |
| QTUM | Hold only | Trend was strong, but quote quality is thinner and blackout removes trading authority | 3 |
| NVDA | Watch | Leadership confirmation signal for semis when data returns | 0 |
| VOO | Avoid | Lower upside than confirmed tech leadership | 0 |
| XLE | Avoid | Weak relative strength on the last confirmed snapshot | 0 |
| XLF | Avoid | Lagging the current tech-led tape on the last confirmed snapshot | 0 |
| META | Avoid | Weaker multi-timeframe trend than the current leaders | 0 |
| HOOD | Avoid | Not a better use of capital than semis / Nasdaq leaders | 0 |
| RKLB | Watch only | Explosive momentum, but too gap-prone without fresh intraday confirmation | 0 |
| GLD | Avoid | Defensive hedge would dilute catch-up if the risk-on thesis resumes | 0 |
| EIS | Watch only | Good trend, but not superior to SOXX / AVGO / GOOG on the last confirmed read | 0 |
| ARKX | Avoid | Lower-conviction thematic beta than the leading sleeves | 0 |
| SHLD | Avoid | Negative short-term relative strength | 0 |

## Current Holdings
- **QQQ 6** — overweight core; hold-only.
- **SOXX 1** — winner and top add candidate once the blackout clears.
- **QTUM 2** — hold-only due to thinner quote quality.
- **GOOG 1** — profitable, but slower than semis.

## Near-Term Watchlist
These are **inactive until fresh data returns**:
- **SOXX** for the first reactivated add.
- **AVGO** as second-choice deployment.
- **GOOG** only on a clean reclaim after a fresh refresh.
- **NVDA** as a semiconductor leadership confirmation signal.

## Macro Themes To Monitor
- **Actionable once data returns:** AI capex, semiconductors, Nasdaq momentum, cloud / inference infrastructure demand.
- **Worth monitoring:** Fed-rate repricing, breadth beneath mega-cap leadership, any post-run reversal in semis.
- **Interesting but not actionable now:** energy, financials, and top-investor-flow headlines; current fallback coverage was either noisy or unavailable.

## Tactical Focus Universe
**QQQ, SOXX, AVGO, GOOG, NVDA, QTUM, SPY**

## Research Files
- `memory/research/alpaca_hourly_20260511T155716Z.json` — **last confirmed** live account, positions, clock, portfolio history, and Alpaca bars.
- `memory/research/yahoo_market_20260511T155716Z.json` — **last confirmed** multi-timeframe return snapshot via Yahoo Finance chart API fallback.
- `memory/research/news_20260511T155716Z.json` — **last confirmed** Google News RSS fallback scan; background only.
- `memory/research/blackout_20260511T202628Z.md` — current run failure log documenting the data blackout and the required no-trade posture.
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
- When **both broker refresh and market-data refresh fail**, classify the cycle as a **data blackout**, preserve only the **last confirmed** state, and switch tactical instructions to **no-trade / hold-only** until visibility returns.

## Last Run Summary
- This run attempted FMP, Alpaca CLI, direct Alpaca REST, Yahoo Finance, and Google News RSS refreshes, but the live broker and market-data paths both failed.
- Because the refresh failed across primary and fallback sources, the run was classified as a **data blackout**.
- The system preserved the **last confirmed 11:57 ET** account state: **QQQ 6, GOOG 1, QTUM 2, SOXX 1** with **$10,207.68 equity / $4,705.34 cash / 53.9% gross exposure**.
- All prior tactical entry triggers are now treated as **stale** and are disabled until a later successful refresh.
- The hourly prompt was tightened to explicitly allow **direct Alpaca REST fallback** when the CLI hangs and to reference the correct file path **`memory/MEMORY.md`**.
