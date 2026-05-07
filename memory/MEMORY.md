# Hourly Macro Memory
*Authoritative state refreshed 2026-05-07 11:44 ET from live Alpaca REST + Yahoo Finance fallback data.*

## Current Regime
- **Regime:** **Offensive catch-up**
- **Goal check:** **Off track — positive absolute return, but trailing SPY since inception because the book is still too underinvested.**
- **Portfolio since inception (2026-04-30):** **+0.87%** vs **SPY +2.10%**
- **Start-of-day review:**
  - **1D:** portfolio **-0.05%** vs SPY roughly **flat to slightly up**
  - **1W:** portfolio **+0.87%** vs SPY **+2.10%**
  - **2W:** **N/A due to insufficient live history**
- **Dominant failure mode:** **cash drag**

## Current Macro Thesis
The tape is still constructive for **large-cap growth, AI infrastructure, and semiconductors**. Multi-timeframe fallback returns keep **SOXX, GOOG, QTUM, QQQ, AVGO, and NVDA** ahead of the broader market on the 1-month to 1-year windows, while **SHLD, META, and HOOD** are materially weaker on current trend quality. Broad market context is not risk-off enough to justify keeping most of the account in cash.

What is working is the core direction: the current book is profitable and concentrated in the right growth/AI cluster. What is not working is deployment. Live gross exposure is only about **32.5%**, so even a correct thesis is not translating into benchmark outperformance. The system needs **measured same-day adds into liquid winners**, not more passive cash preservation.

## Live Account State
- **Equity:** **$10,087.19**
- **Cash:** **$6,807.41**
- **Long market value:** **$3,279.78**
- **Gross exposure:** **32.5%**
- **Target gross-exposure band:** **45-55%** during regular hours while the tape stays orderly
- **Why this band fits now:** we are behind SPY mainly because of underdeployment, the market is open and orderly, and we can increase exposure without using leverage or forcing low-quality names.

## Current Holdings
- **QQQ** — 3 shares — about **20.8%** of equity — unrealized **+$41.46**
- **SOXX** — 1 share — about **5.0%** — unrealized **+$20.47**
- **GOOG** — 1 share — about **3.9%** — unrealized **+$6.69**
- **QTUM** — 2 shares — about **2.8%** — unrealized **+$11.72**
- **No AVGO position is live right now**
- **Current blocker to immediate deployment:** the preferred add names are still below their refreshed reclaim / breakout triggers at this moment; the blocker is **entry timing**, not a broad risk-off regime.

## Priority Actions For The Next Hour
1. **Reduce cash drag** with staged adds only if regular-hours confirmation is present.
2. **Primary add:** GOOG on a clean reclaim above intraday resistance.
3. **Secondary add:** AVGO on a reclaim; if semis re-accelerate, SOXX is acceptable.
4. Use **QQQ** only as the reserve add because it is already the largest position.
5. Do **not** authorize trades from stale or abnormal quotes; refresh broker state before each order.

## Ranked Deployment Queue
1. **GOOG** — under target, strong 1m/3m trend, liquid single-name AI/cloud leader.
2. **AVGO** — strong AI infrastructure trend; re-entry is preferred over chasing weaker themes.
3. **SOXX** — acceptable semiconductor add if the group regains intraday momentum.
4. **Reserve only:** **QQQ** if the market strengthens and the first 3 names do not trigger cleanly.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Strong AI infrastructure trend; preferred re-entry only on regular-hours reclaim. | 5% |
| EIS | Hold | Positive trend, but weaker expected alpha and lower urgency than core AI/growth leaders. | 0% |
| GLD | Hold | Hedge only if a real risk-off regime appears; not needed in current tape. | 0% |
| GOOG | Buy | Best underweight liquid add in the live book; strong multi-timeframe momentum. | 8% |
| HOOD | Sell | Weak 1m/6m/1y relative trend; inferior use of capital. | 0% |
| META | Sell | Lags current AI infrastructure / large-cap growth leaders. | 0% |
| NVDA | Hold | Structural winner, but not the first use of fresh capital versus GOOG/AVGO/SOXX. | 0% |
| QQQ | Hold / Reserve Buy | Best broad beta sleeve, but already the largest position. | 20% |
| QTUM | Hold | Profitable thematic sleeve; keep, but lower priority for fresh capital. | 3% |
| RKLB | Sell | Satellite only; not a priority while liquid AI leaders are available. | 0% |
| SHLD | Sell | Weak recent trend versus growth/AI alternatives. | 0% |
| SOXX | Buy | Highest-quality semiconductor ETF in the universe; add only on confirmed regain of strength. | 7% |
| VOO | Hold | Fine benchmark exposure, but lower expected alpha than QQQ while growth leads. | 0% |
| ARKX | Hold | Theme is interesting, but current edge trails GOOG/QQQ/SOXX/AVGO. | 0% |

## Near-Term Watchlist
- **GOOG:** reclaim candidate above intraday resistance.
- **AVGO:** preferred semiconductor single-name re-entry.
- **SOXX:** ETF add only if semis stop lagging intraday.
- **QQQ:** reserve catch-up add if leadership broadens and the book is still underexposed.
- **GLD:** monitor only for a true regime shift.

## Macro Themes To Monitor
- **Actionable now:** AI/cloud monetization and semiconductor infrastructure demand.
- **Worth monitoring:** oil / geopolitics as the main risk-off spoiler; defense and gold only if that stress spills into the tape.
- **Interesting but not actionable yet:** space / IPO optionality and top-investor portfolio headlines. Current coverage was too thin or noisy to drive trades.

## Standing Learnings
- Use **account equity**, not raw buying power, for sizing.
- **No leverage.**
- **Do not average down.** Adds must be into strength or clean reclaims.
- Commission-free does not mean friction-free; require enough edge to clear spread, slippage, CAT, SEC, and FINRA costs.
- The **live Alpaca account** is the only source of truth for holdings and exposure.
- If **FMP** is unavailable, use **Yahoo Finance chart API** for return snapshots and price structure.
- Direct Google Search was unavailable this run; **Bing News RSS** returned insufficient coverage, so **Yahoo Finance RSS** was used for dated market and symbol news.
- If news / investor / analyst fallback coverage is weak, say so explicitly instead of forcing a thesis.
- If the account is younger than a required lookback window, mark that window **N/A** rather than substituting a shorter sample.
- Detailed execution history belongs in the dated intraday logs, not in this control sheet.

## Last Run Summary
- Refreshed the live broker state with direct Alpaca REST fallback because the Alpaca CLI timed out.
- Confirmed the live book is **GOOG 1, QQQ 3, QTUM 2, SOXX 1**, with **no AVGO**.
- Confirmed the account is **green in dollars but behind SPY**; the dominant problem remains **cash drag**.
- Set the next-hour playbook to prioritize **GOOG**, then **AVGO**, then **SOXX**, with **QQQ only as a reserve add**.
- Updated the hourly prompt to mark unsupported lookbacks as **N/A** instead of silently substituting shorter history.
