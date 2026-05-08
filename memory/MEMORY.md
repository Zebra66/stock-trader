# Hourly Macro Memory
*Updated 2026-05-08 during the regular session using direct Alpaca REST and Yahoo fallback data.*

## Current Regime
- **Regime:** **Offensive catch-up**
- **Goal check:** **Off track — positive absolute return is intact, but the portfolio is still trailing the S&P 500 since inception.**
- **Dominant failure mode:** **cash drag**
- **Current account / cash / gross exposure:** **$10,164.40 equity / $5,417.86 cash / 46.7% gross exposure**
- **Target gross-exposure band:** **50-60%**
- **Why this band now:** the tape is still risk-on, tech and semis are leading, and one additional liquid add can move the book into band without using leverage or forcing low-quality entries.

## Current Macro Thesis
The tape remains pro-growth and pro-AI. Leadership is still concentrated in **SOXX, NVDA, QQQ, QTUM, AVGO, and GOOG**, with semiconductors and large-cap AI infrastructure continuing to outpace the broad market. The portfolio is still underdeployed relative to the tape, so the priority remains to add only when the entry is clean and liquid.

## Exposure Plan
- **Current live book:** **GOOG 1, QQQ 5, QTUM 2, SOXX 1**
- **Current gross exposure:** **46.7%**
- **Target band:** **50-60%**
- **Deployment blocker:** Alpaca 1m bars for the liquid leaders were stale / conflicting versus Yahoo this cycle.
- **Same-day deployment plan:** one **QQQ** add is still the cleanest way to move the book into band, but only if the freshness checks clear first.

## Priority Actions For The Next Hour
1. **Try to deploy one add into QQQ** on a clean breakout / confirmation, because it is the most liquid way to reduce cash drag.
2. **Keep GOOG, SOXX, and QTUM as holds**; no trimming of winners just because they are green.
3. **Do not add QTUM** unless quote quality improves; it still needs second-source confirmation before any fresh order.
4. **No leverage, no after-hours equity orders, and no second add after the book enters the target band.**

## Ranked Deployment Queue
1. **QQQ** — best liquid catch-up vehicle; strong tape, lowest execution friction.
2. **GOOG** — strong multi-timeframe trend; acceptable single-name add only on fresh confirmation.
3. **AVGO** — powerful momentum, but slightly higher single-name and spread risk than QQQ.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Buy | Broad, liquid AI / Nasdaq beta; best same-day deployment tool | 40 |
| GOOG | Hold / Buy on confirmation | Strong AI + cloud trend, but do not chase below failed breakout | 5 |
| SOXX | Hold | Strongest sector ETF, already working; keep running | 7 |
| QTUM | Hold only | Good trend, but thin broker prints require caution | 3 |
| AVGO | Buy watch | Strong momentum and AI infrastructure exposure | 5 |
| NVDA | Watch | Leadership intact, but not the first add while QQQ is cleaner | 0 |
| META | Avoid | Relative strength weaker than semis / Nasdaq leaders | 0 |
| HOOD | Avoid | Mixed thesis and weaker medium-term trend | 0 |
| RKLB | Watch only | Very strong tape but too explosive / gap-prone for disciplined catch-up | 0 |
| GLD | Avoid for now | Defensive hedge would dilute benchmark catch-up in current tape | 0 |
| VOO | Avoid | Lower upside than QQQ while tech leads | 0 |
| EIS | Avoid | Strong chart, but not core to current edge | 0 |
| ARKX | Avoid | Lower-conviction thematic beta than QQQ / SOXX | 0 |
| SHLD | Avoid | Weak relative strength and no macro edge | 0 |

## Current Holdings
- **QQQ 5** — core risk-on sleeve.
- **SOXX 1** — strongest existing winner; let it run.
- **QTUM 2** — hold, but no fresh buy unless quote quality improves.
- **GOOG 1** — hold and prefer buying only on fresh confirmation.

## Near-Term Watchlist
- **QQQ** breakout continuation above the current 5-day high.
- **GOOG** breakout over **398** or controlled pullback reclaim near **392-393**.
- **AVGO** continuation toward / through the recent **437-438** area.
- **NVDA** remains actionable background leadership, but not a better immediate add than QQQ.

## Macro Themes To Monitor
- **Actionable now:** AI capex, semiconductor leadership, large-cap growth / Nasdaq strength.
- **Worth monitoring:** oil / geopolitics, jobs / rates reaction, memory / compute supply tightness.
- **Interesting but not actionable yet:** top-investor move coverage and generic analyst chatter; fallback coverage was too noisy / indirect to trade from alone.

## Standing Learnings
- Size from **account equity**, not buying power.
- **Commission-free is not friction-free**; spreads, slippage, and sell-side fees still matter.
- **Never average down.**
- When the live book is below target in a strong tape, assume **cash drag** until proven otherwise.
- For low-trade-count names like **QTUM**, require second-source confirmation before authorizing a fresh order.
- If the portfolio is already inside the target band, switch from catch-up to management discipline; if it is below band in a strong tape, define an explicit same-day deployment plan.

## Last Run Summary
- Live broker data came from **direct Alpaca REST** because the Alpaca CLI timed out.
- Alpaca 1m bars for **QQQ / GOOG / AVGO** were stale and/or conflicted with Yahoo, so no tactical order was allowed this cycle.
- Multi-timeframe market snapshot came from **Yahoo Finance chart API** because **FMP_API_KEY** is not configured.
- No trade executed; the freshest-safe action was to hold the current winners and wait for a clean confirmed add.
