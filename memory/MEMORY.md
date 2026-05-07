# Hourly Macro Memory
*Reset 2026-05-07 by interactive review to remove stale drift and force controlled catch-up behavior.*

## Current Regime
- **Regime:** **Offensive catch-up**
- **Why:** the system has been too cash-heavy for too long. Even when the book was green, it was usually only **~22-30% gross long** with **~70-77% cash**, which is not enough to reliably beat **SPY** in a constructive growth tape.
- **Default posture:** increase exposure in the **highest-quality liquid leaders** unless there is clear fresh evidence of a true risk-off regime.
- **Broker-state warning:** recent memory blocks disagree on whether the latest live book held **QQQ 1** or **QQQ 2**. The next hourly and tactical runs must refresh **Alpaca account + positions first** and overwrite stale summaries immediately.

## Current Macro Thesis
The best-performing and cleanest themes in the approved universe remain **AI infrastructure, semiconductors, and large-cap growth**. Across recent files, the strongest recurring candidates are still **QQQ, GOOG, SOXX, AVGO, and QTUM**, while **META, HOOD, SHLD, GLD, and ARKX** continue to rank lower on trend quality, expected edge, or liquidity.

The main strategic problem is no longer symbol selection; it is **insufficient deployment**. The system has correctly learned to avoid stale quotes, weak catalysts, and noisy headlines, but it has over-applied those safeguards into a habit of preserving cash. Unless the next live check shows clear risk-off conditions, the correct adjustment is to **deploy more capital into the top-ranked liquid leaders** rather than keep defending an underinvested posture.

## Goal Check
- **Latest tracked account range in memory:** roughly **$10,041-$10,065 equity** on a **$10,000** starting balance.
- **Latest tracked benchmark conclusion:** inconsistent across stale summaries, but every version shows the edge versus **SPY** is **small** and vulnerable.
- **Status:** **Off track — not because the account is deeply red, but because benchmark outperformance is too thin and the system is still carrying too much cash to achieve the 3-month objective with confidence.**

## Exposure Plan
- **Primary diagnosis:** **cash drag** is the first problem to solve.
- **Target gross exposure during regular hours when the tape is orderly:** **45-60%**.
- **Current reliable exposure range from recent files:** **22-30% gross**.
- **Default rule:** if the next live hourly run still finds exposure below **45%** and the market is not clearly risk-off, the strategist must authorize a same-day catch-up plan with **1-3 ranked adds**.
- **Do not justify staying above 55% cash** without writing a specific reason tied to market regime, quote quality, or event risk.

## Ranked Deployment Queue
1. **QQQ** — preferred broad, liquid catch-up vehicle when large-cap growth leadership is intact.
2. **GOOG** — best single-name add when cloud / AI momentum is confirmed in regular hours.
3. **SOXX** or **AVGO** — only if semiconductors are clearly leading and concentration remains acceptable after the first add.

## Holdings And State Rules
- **Live Alpaca state is the only source of truth.**
- Expected live core book from recent runs is some combination of **AVGO, GOOG, QQQ, QTUM, and SOXX**.
- Because recent append-only summaries conflicted, **do not trust old tactical notes over a fresh broker refresh**.
- If the next live run shows a symbol already at or above its target weight, skip it and move to the next ranked candidate.

## What Must Change Now
1. Stop treating every constructive tape as a reason to hold **70%+ cash**.
2. Use safeguards to block bad trades, not to block nearly all trades.
3. When off track because of underdeployment, increase exposure through the **top-ranked liquid names** first.
4. Keep trimming low-conviction satellites faster than core leaders.
5. Keep the memory short and authoritative; move history to logs, keep only the current playbook here.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Strong AI infrastructure leader; acceptable add only after QQQ / GOOG or when semis clearly lead. | 6% |
| EIS | Hold | Positive trend but weaker liquidity and lower expected alpha than core ideas. | 0% |
| GLD | Hold | Hedge candidate only if a true risk-off regime emerges. | 0% |
| GOOG | Buy | Best single-name catch-up candidate when regular-hours confirmation is present. | 8% |
| HOOD | Sell | Weaker trend and lower setup quality than the core leaders. | 0% |
| META | Sell | Still inferior to the preferred AI / growth leaders on near-term edge. | 0% |
| NVDA | Hold | Structural winner, but current tactical edge is usually lower than QQQ / GOOG / SOXX. | 0% |
| QQQ | Buy | Best broad, liquid way to reduce cash drag while growth leadership persists. | 18% |
| QTUM | Hold | Thematic sleeve is acceptable, but not the first place for new catch-up capital. | 4% |
| RKLB | Sell | Satellite only; recycled unless a later hourly thesis explicitly reopens it. | 0% |
| SHLD | Sell | Defense theme still trails AI / growth leadership on expected edge. | 0% |
| SOXX | Buy | Best semiconductor ETF in the universe, but secondary to QQQ for broad catch-up sizing. | 8% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership remains intact. | 0% |
| ARKX | Hold | Inferior thematic expression versus QQQ / SOXX / GOOG right now. | 0% |

## Near-Term Watchlist
- **QQQ:** first deployment vehicle if the live book is still underweight and the regular-session tape is orderly.
- **GOOG:** second-ranked add; preferred when single-name momentum is stronger than index-level beta.
- **SOXX / AVGO:** only for further catch-up after the first add if semis are still leading.
- **QTUM:** hold-only unless a later hourly review explicitly upgrades it.
- **GLD:** watch only for regime change, not for proactive deployment.

## Standing Learnings
- Default sizing must use **account equity**, not headline buying power.
- Commission-free does **not** mean friction-free; include spread, slippage, CAT, SEC sell fees, and FINRA TAF in expected edge.
- Never average down. Add only to winners, and each add must be smaller than or equal to the prior add unless the hourly strategist explicitly authorizes a reset.
- Prefer liquid leaders in leading groups over laggards, story stocks, or low-liquidity names.
- Cash is valid only when it is solving a real risk problem; **persistent cash drag is itself a failure mode**.
- If external data tooling is unavailable, use a public fallback source reachable from bash / Bun and record that source in memory.
- Tactical price levels must be refreshed each hourly cycle; do **not** blindly reuse stale thresholds.
- The **live brokerage account** overrides stale memory; if memory and Alpaca disagree, trust Alpaca and update memory immediately.
- For thinner names or stale quotes, require fresh confirmation from a reliable second source before trading.
- If fallback investor / analyst coverage is stale, noisy, or weakly sourced, explicitly say coverage was insufficient rather than forcing a thesis.
- If the portfolio is off track mainly because of underdeployment, fix the problem with **ranked exposure upgrades**, not with endless no-trade logging.

## Data And Audit Trail
- Primary broker/account source: **Alpaca CLI**.
- Historical performance fallback when **FMP** is unavailable: **Yahoo Finance chart API**.
- Search/news fallback when direct Google Search is unavailable: **Google News RSS**, filtered for recency and source quality.
- Detailed execution history belongs in `memory/intraday_execution_log_2026-05-05.md`, not in the live control sheet.
