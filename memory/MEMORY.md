# Hourly Macro Memory
*Updated 2026-05-05 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities still look like a **selective AI / semiconductor-led tape**, but leadership is narrow and vulnerable to sentiment swings around oil, geopolitics, and AI-capex expectations. Within this universe, **GOOG, SOXX, AVGO, QQQ, and QTUM** still rank better than weaker or lower-liquidity alternatives such as **HOOD, META, GLD, SHLD, and EIS**. Because the account is still slightly negative in absolute terms, the right posture is still **cash-heavy and highly selective**, not broad risk expansion.

The next regular session should stay focused on **protecting capital, avoiding stale after-hours quotes, and only adding to the single best liquid missing leader if price confirms**. That remains **GOOG**. Semiconductors are still structurally strong, but the current book already has meaningful semi exposure through **AVGO + SOXX + QQQ + QTUM**, so new capital should not be forced into redundant or lower-quality entries.

## Goal Check
- **Portfolio since inception:** **-0.06%** (**$9,993.89** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same since-inception tradable window:** **-0.37%** (**720.65** on **2026-05-01** close vs **718.01** latest close)
- **Status:** **Off track — the portfolio is still negative in absolute dollars. Relative performance vs SPY is slightly better, but the sample is too short and too small to count as durable outperformance.**

## Recent Performance Review
- **1D portfolio:** **-0.06%** using `last_equity` vs current equity.
- **1D SPY:** **-0.37%** (2026-05-01 close to 2026-05-04 close).
- **1W / 2W portfolio review:** **not reliable yet** — the account is younger than a full trading week and Alpaca portfolio history is currently unavailable, so recent execution can only be judged from **since-inception / 1D** data.
- **What is working:** staying out of the weakest names; keeping exposure moderate; concentrating current risk in AI / semis rather than HOOD / META / GLD.
- **What is not working:** the account is still slightly red; the book is missing **GOOG**, the best liquid 1-week relative-strength name; after-hours quote quality is too poor to justify acting immediately.
- **What must change next session:** only add on **high-quality regular-hours confirmation**; avoid redundant semi chasing; keep gross exposure capped until the account is back above breakeven.

## Portfolio State
- **Equity:** $9,994.28
- **Cash:** $7,618.05
- **Buying power:** $17,612.33
- **Gross exposure:** ~23.8%
- **Market status:** closed
- **Alpaca clock timestamp:** 2026-05-05T02:40:26.278378417-04:00
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$418.17** | unrealized P&L **+$1.22** (+0.29%) | allocation **4.18%**
  - **QQQ:** 1 share @ 673.26 | market value **$674.95** | unrealized P&L **+$1.69** (+0.25%) | allocation **6.75%**
  - **QTUM:** 2 shares @ 137.00 | market value **$274.00** | unrealized P&L **$0.00** (0.00%) | allocation **2.74%**
  - **RKLB:** 1 share @ 80.88 | market value **$80.51** | unrealized P&L **-$0.37** (-0.46%) | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$928.60** | unrealized P&L **-$8.26** (-0.88%) | allocation **9.29%**
- **Overall unrealized P&L:** **-$5.72**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>` for the full universe
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / positions / prices:** **Alpaca CLI** (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **Benchmark fallback:** **Yahoo Finance chart API** for **SPY**
- **News / search fallback:** **Google News RSS** because no direct Google Search tool surfaced in this workspace
- **Raw artifacts from this cycle:**
  - `temp_files/fmp_index_2026-05-05T06-00-41Z.tsv`
  - `temp_files/fmp_AVGO_2026-05-05T06-00-41Z.txt`
  - `temp_files/alpaca_account_hourly_2026-05-05T06-00-41Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T06-00-41Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T06-00-41Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T06-00-41Z.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T06-00-41Z.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T06-00-41Z.csv`
  - `temp_files/tech_levels_2026-05-05T06-00-41Z.json`
  - `temp_files/news_rss/macro_2026-05-05T06-00-41Z.xml`
  - `temp_files/news_rss/goog_2026-05-05T06-00-41Z.xml`
  - `temp_files/news_rss/semis_2026-05-05T06-00-41Z.xml`
  - `temp_files/news_rss/hood_2026-05-05T06-00-41Z.xml`
  - `temp_files/news_rss/investors_2026-05-05T06-00-41Z.xml`
  - `temp_files/news_rss/rklb_2026-05-05T06-00-41Z.xml`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- Best **1m** performers: **SOXX +34.28%**, **AVGO +32.46%**, **GOOG +27.54%**, **QTUM +22.69%**, **RKLB +18.68%**
- Best **3m** performers: **SOXX +31.01%**, **AVGO +25.79%**, **QTUM +16.23%**, **GOOG +10.07%**, **EIS +10.05%**
- Best **6m** performers: **SOXX +49.83%**, **GOOG +33.62%**, **RKLB +30.93%**, **EIS +28.36%**, **QTUM +19.10%**
- Weak / broken **3m-6m** names: **HOOD -14.86% / -47.95%**, **META -13.59% / -4.28%**, **SHLD -8.54% / -1.03%**, **GLD -2.91% / +12.45%**, **ARKX +2.65% / +4.33%**
- Best **1y** performers: **RKLB +257.25%**, **SOXX +145.03%**, **GOOG +128.63%**, **AVGO +107.50%**, **QTUM +74.81%**

## Fresh External Context
- **Macro / tape:** Google News RSS fallback stayed mixed. The highest-signal macro items still point to an **AI-leadership tape fighting oil / geopolitical drag**, which argues for selectivity rather than aggressive broad buying.
- **GOOG:** coverage remained constructive — cloud / AI momentum and the strong post-earnings move still make GOOG the best missing liquid-quality long in the universe.
- **AVGO / semis / SOXX:** sector tone remained broadly constructive, but headline quality also shows enough AI-sentiment wobble risk that chasing thin after-hours prices would be low quality.
- **HOOD:** coverage remained weak / mixed after earnings and crypto-revenue pressure; it stays a low-priority or avoid name.
- **RKLB:** news flow was constructive, including positive analyst commentary, but it remains a volatile satellite exposure rather than a core allocation.
- **Top-investor context:** fallback investor coverage was **insufficient / non-actionable** this cycle.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and several Alpaca quotes were **thin / stale** — notably **EIS, GLD, GOOG, META, NVDA, QQQ, QTUM, SOXX, and SPY** — require **regular-hours confirmation** before any tactical action.
3. **Hold all existing positions** while they remain above refreshed support / stop levels; do **not** add to **AVGO / QQQ / SOXX / QTUM / RKLB** this hour.
4. Keep gross exposure capped around **30%** and preserve at least **70% cash** until the account moves back into positive territory and a clearer high-conviction setup appears.
5. The only active fresh-buy candidate remains **GOOG**, and only on **regular-hours confirmation** or a second-source quote confirmation.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | High-quality AI infrastructure winner; starter already fills intended exposure. | 4% |
| EIS | Hold | Trend is decent, but liquidity / quote-quality risk still disqualifies it. | 0% |
| GLD | Sell | Current edge remains in growth leadership, not gold. | 0% |
| GOOG | Buy | Best missing liquid quality name if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Weak intermediate trend and lower-quality post-earnings reaction. | 0% |
| META | Sell | Still lags GOOG and the semiconductor leaders on trend quality. | 0% |
| NVDA | Hold | Structural leader, but current semi exposure is already enough and GOOG has the better near-term setup. | 0% |
| QQQ | Hold | Existing broad-growth exposure is already near intended size. | 7% |
| QTUM | Hold | Valid secondary AI / quantum sleeve near target. | 3% |
| RKLB | Hold | Keep only as a tiny high-volatility satellite. | 1% |
| SHLD | Sell | Defense theme remains lower priority than AI / growth leadership. | 0% |
| SOXX | Hold | Best sector-level semiconductor expression; current size is near target. | 9% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Lower-quality thematic exposure than the current held basket. | 0% |

## Current Holdings Notes
- **Core held risk:** **AVGO, QQQ, SOXX, QTUM**
- **Satellite held risk:** **RKLB** only
- **Current underperformer:** **SOXX** is the largest unrealized drag, but still inside a valid broader semi uptrend and above major recent support.

## Near-Term Watchlist
- **GOOG:** only approved new long candidate for the next regular session.
- **NVDA:** strong franchise, but not reopened for new capital while GOOG ranks ahead and current semi exposure is already substantial.
- **RKLB:** constructive context, but still too volatile for core deployment.

## Macro Themes To Monitor
- **AI capex / cloud monetization:** still actionable now via **GOOG / AVGO / SOXX / QQQ / QTUM**.
- **Oil / geopolitical stress:** worth monitoring because it can compress multiples and increase index volatility.
- **Space economy / defense:** interesting, but not actionable enough to outrank core AI leadership right now.
- **Top investor filings / analyst chatter:** useful only when they confirm price action; otherwise monitor and ignore.

## Standing Learnings
- Default sizing must use **account equity**, not headline buying power. Margin use requires an explicit hourly decision.
- Commission-free does **not** mean friction-free; tactical entries need expected edge of at least **3x** estimated round-trip cost.
- Round-trip cost assumptions must include **spread, slippage, CAT, SEC sell fees, and FINRA TAF on sells**.
- Never average down. Add only to winners, and each add must be smaller than or equal to the prior add.
- Prefer liquid leaders in leading groups over laggards, story stocks, or low-liquidity names.
- Cash is a valid position when macro, geopolitical, or correlation risk rises.
- If external data tooling is unavailable, use a public fallback source reachable from bash and record that source in memory.
- Tactical price levels must be refreshed from the latest market snapshot each hourly cycle; do **not** blindly reuse stale thresholds.
- Distinguish **quality of earnings reaction** from raw fundamentals.
- When using fallback news sources, prefer **symbol-specific / high-relevance feeds** and explicitly ignore noisy or off-topic articles.
- Absence of a fresh high-conviction catalyst is a valid reason to keep cash rather than forcing exposure.
- Top-investor filings / headlines are context, not instructions; follow them only when they align with current price action and liquidity.
- Pre-market prints can improve watchlist quality, but they do **not** replace cash-session confirmation or opening-range discipline.
- **Yahoo Finance chart fallback works more reliably with browser-like headers; naive no-header requests can hit HTTP 429 rate limits.**
- The **live brokerage account** overrides stale memory; if memory and Alpaca disagree, trust Alpaca and immediately update memory / todo.
- On a **~$10k account**, one-share increments in names like **QQQ, GOOG, AVGO, and SOXX** are meaningful; target allocations must respect practical order granularity.
- For thinner names or stale quotes, require fresh confirmation from a reliable live or second source before taking tactical action.
- If **Google Search** is unavailable from the workspace, acceptable fallbacks include **Google News RSS**, **Yahoo Finance chart data**, and other public feeds, but their results must be relevance-checked before they influence trades.
- **After-hours Alpaca latest bars can show very low trade counts even for liquid ETFs; use regular-hours confirmation before treating those prints as actionable.**
- **Rewrite top-level tactical state each hourly cycle instead of leaving conflicting append-only notes that disagree with live holdings.**
- If fallback investor / analyst coverage is stale or noisy, explicitly say the coverage was insufficient rather than forcing a thesis from weak evidence.
- A thin after-hours broker print in a normally liquid name is enough to require either **regular-hours confirmation** or a **second-source quote check** before enabling tactical action.
- If the fallback market-snapshot artifact uses the exchange-session date instead of the local run date, keep the file and document the date mismatch rather than discarding usable data.
- **The FMP CLI currently exits successfully even when `FMP_API_KEY` is missing; inspect its output content, not just the shell exit code, before assuming the data is usable.**
- If fallback news returns only broad narrative headlines, use it as regime context only; do **not** let it override price action or quote quality.
- If Alpaca portfolio history is unavailable, use **current equity, last_equity, deposit baseline, and benchmark price history** to judge progress, and explicitly label any 1W / 2W review as unavailable when the account age is too short.

## Last Run Summary
- Refreshed the live Alpaca account, positions, clock, and latest prices for the full investment universe.
- Confirmed the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$9,993.89 equity**, **$7,618.05 cash**, and about **23.8% gross exposure**.
- Multi-timeframe performance was refreshed using the **Yahoo Finance chart API fallback** because **`FMP_API_KEY` is missing**.
- Fallback news stayed **mixed but net supportive of AI leadership**, with **GOOG** still the best missing long and **HOOD** still weak.
- **No orders were placed** because the market is closed and several latest broker quotes were too thin for action.
- **Prompt review result:** no prompt edit applied this run; no concrete safe improvement justified changing live trading instructions.
- **Strategy:** hold the existing AI / semiconductor sleeve, keep cash high, and only act on a **regular-hours GOOG trigger** or a **confirmed stop / trim event** in an existing holding.

## Tactical Execution Summary — 2026-05-05 02:10 ET
- **Cycle result:** no trades placed; the market remains closed and after-hours liquidity is still too thin for a confident trigger.
- **Live account:** **$9,993.37 equity**, **$7,618.05 cash**, **$17,611.42 buying power**, **23.7% gross exposure**.
- **Live positions:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Current live prices:** AVGO **418.08**, EIS **132.54**, GLD **414.26**, GOOG **379.03**, HOOD **76.56**, META **609.52**, NVDA **197.86**, QQQ **674.51**, QTUM **137.00**, RKLB **80.65**, SHLD **68.05**, SOXX **464.04**, VOO **660.10**, ARKX **32.55**, SPY **717.80**.
- **Next expected action:** wait for the next regular session and only consider GOOG if it reclaims the scripted trigger with confirmation; otherwise continue to hold cash and existing winners.

## Tactical Execution Summary — 2026-05-05 02:20 ET
- **Cycle result:** no trades placed; Alpaca clock confirmed the market is still closed, so no order met the regular-hours confirmation requirement.
- **Live account:** **$9,992.47 equity**, **$7,618.05 cash**, **$17,610.52 buying power**, **23.7% gross exposure**.
- **Live positions:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Latest Alpaca quotes:** AVGO **416.51**, EIS **132.54**, GLD **414.26**, GOOG **379.03**, HOOD **76.56**, META **609.52**, NVDA **197.86**, QQQ **672.25**, QTUM **135.63**, RKLB **80.29**, SHLD **68.05**, SOXX **460.76**, VOO **660.10**, ARKX **32.55**, SPY **717.80**.
- **Fresh account position marks:** AVGO **417.77**, QQQ **674.28**, QTUM **137.00**, RKLB **80.65**, SOXX **463.86**.
- **Next expected action:** keep cash high and wait for a regular-hours GOOG breakout / pullback-reclaim trigger or a confirmed stop / trim event in an existing holding.

## Tactical Execution Summary — 2026-05-05 Latest Cycle
- **Cycle result:** no trades executed; the market is still closed and none of the live prices reached a valid regular-hours trigger.
- **Live account:** **$9,991.79 equity**, **$7,618.05 cash**, **$17,609.84 buying power**, **23.7% gross exposure**.
- **Live positions:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Latest prices:** AVGO **417.80**, EIS **132.54**, GLD **414.26**, GOOG **379.03**, HOOD **76.56**, META **609.52**, NVDA **197.86**, QQQ **674.24**, QTUM **137.00**, RKLB **80.30**, SHLD **68.05**, SOXX **463.70**, VOO **660.10**, ARKX **32.55**, SPY **717.80**.
- **Next expected action:** continue holding the current book and wait for regular-hours confirmation on **GOOG** or a confirmed stop / trim event in an existing position.

## Tactical Execution Summary — 2026-05-05 02:40 ET
- **Cycle result:** no trades executed; the market remains closed and the after-hours prints were still too thin for any valid trigger.
- **Live account:** **$9,994.28 equity**, **$7,618.05 cash**, **$17,612.33 buying power**, **23.8% gross exposure**.
- **Live positions:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Current live prices:** AVGO **418.17**, EIS **132.54**, GLD **414.26**, GOOG **379.03**, HOOD **76.56**, META **609.52**, NVDA **197.86**, QQQ **674.95**, QTUM **137.00**, RKLB **80.51**, SHLD **68.05**, SOXX **464.30**, VOO **660.10**, ARKX **32.55**, SPY **717.80**.
- **Next expected action:** hold cash, keep existing winners, and wait for the next regular-hours session to see whether **GOOG** or an existing stop / trim level becomes actionable.
