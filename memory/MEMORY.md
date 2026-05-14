# Hourly Macro Memory
*Updated 2026-05-13 18:58 ET from direct Alpaca REST, Yahoo Finance chart fallback, Bing News RSS, and Yahoo Finance RSS.*

## Current Regime
- **Regime:** **Offensive catch-up**
- **Goal check:** **Off track — portfolio is positive in dollars, but still trailing the S&P 500 since inception.**
- **Dominant failure mode:** **cash drag** from earlier underdeployment.

## Current Macro Thesis
The tape remains constructive for **AI infrastructure, semiconductors, and large-cap growth** even after a hotter inflation read. Nasdaq leadership held, QQQ closed near highs, SOXX remains one of the strongest sleeves in the approved universe, and GOOG is still acting like a cleaner large-cap AI/cloud add than many more extended semiconductor single names. This is not a true risk-off tape yet, so the default stance should remain pro-growth rather than rotating defensively into GLD or low-beta index exposure.

The main tension is that the portfolio is finally outperforming SPY over the recent live windows, but it still trails since inception because too much capital sat idle earlier. That means the book should **hold existing winners** and stay ready to add on the next regular-session confirmation, but it should **not** chase thin after-hours prints or add simply because prices rose into the close.

## Authoritative Current State
- **Account equity / cash / buying power:** **$10,226.87 / $4,705.34 / $14,932.21**
- **Long market value:** **$5,521.53**
- **Current gross exposure:** **54.0%**
- **Target gross-exposure band:** **55-70%**
- **Why this band fits now:** the account is still behind SPY, recent execution is helping, and the macro tape remains growth-led; a modestly higher band is warranted, but market-close conditions block immediate deployment.
- **Exact blocker preventing deployment right now:** the market is **closed** and available post-close Alpaca prints are **thin extended-hours quotes**, so new buys must wait for the **next regular session**.
- **Market status:** **closed**; next open **2026-05-14 09:30 ET**
- **Current holdings:** **GOOG 1, QQQ 6, QTUM 2, SOXX 1**

## Goal Check And Recent Performance Review
- **Since inception (2026-05-01 baseline / funded 2026-05-01):** portfolio **+2.27%** vs **SPY +3.01%** → **Off track**
- **1D:** portfolio **+0.89%** vs **SPY +0.56%**
- **1W:** portfolio **+1.97%** vs **SPY +1.16%**
- **2W:** **N/A due to insufficient live history**
- **Interpretation:** current behavior is finally helping rather than hurting. What is working: concentrated exposure in QQQ/SOXX/GOOG/QTUM. What is not: the portfolio is still carrying the performance scar from earlier underexposure. What must change next: continue to avoid overtrading, but use the next clean regular-session setup to move gross exposure closer to the new **55-70%** band.

## Position / P&L Read
- **QQQ 6** — market value **$4,298.04**, unrealized **+$137.98** (**+3.32%**)
- **SOXX 1** — market value **$529.25**, unrealized **+$48.55** (**+10.10%**)
- **GOOG 1** — market value **$398.72**, unrealized **+$12.08** (**+3.12%**)
- **QTUM 2** — market value **$295.52**, unrealized **+$21.52** (**+7.85%**)
- **Conclusion:** all current positions remain green; there is no underperformer that needs a forced exit tonight.

## Priority Actions For The Next Hour
1. **No after-hours equity orders. Convert all instructions into next-regular-session triggers.**
2. **Hold existing winners overnight unless a next-session risk trigger fails.**
3. **If regular-hours price action confirms, add modestly to move gross exposure from 54.0% toward the 55-70% target band.**
4. **Require broker + Yahoo confirmation before any order if opening quotes look stale, thin, or materially divergent.**

## Ranked Deployment Queue
1. **GOOG** — best next add because it keeps the book pro-AI without further overconcentrating QQQ and is pressing nearby resistance.
2. **QQQ** — still the best broad catch-up vehicle if Nasdaq leadership extends cleanly.
3. **NVDA / SOXX** — only if semiconductor leadership is clearly strongest again at the next regular-session open.

## Symbol Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold / Buy-on-trigger | Core broad growth exposure; strongest liquid portfolio anchor | 40-45% |
| GOOG | Hold / Buy-on-trigger | AI/cloud quality with cleaner valuation and less concentration risk than adding more semis | 5-8% |
| SOXX | Hold | Semiconductor leadership remains strong, but keep sizing controlled | 5-7% |
| QTUM | Hold | Small thematic AI sleeve; positive but secondary to QQQ and GOOG | 2-4% |
| NVDA | Watch Buy | Momentum leader; actionable only on a clean regular-session breakout | 0-4% |
| AVGO | Watch Buy | High-quality AI infrastructure name, but 1W relative action lags NVDA/SOXX | 0-3% |
| RKLB | Watch Only | Strong theme and newsflow, but too speculative and extended for core catch-up capital | 0-2% |
| META | Avoid New Adds | Relative trend remains weaker than current leaders | 0% |
| HOOD | Avoid New Adds | Higher-beta sentiment trade, not the best risk-adjusted use of capital | 0% |
| VOO | Hold-off | Lower upside than QQQ in this tape; not needed while Nasdaq leads | 0% |
| GLD | Defensive Watch | Only useful if macro flips risk-off; not actionable now | 0-3% |
| ARKX | Avoid New Adds | Theme is less liquid and lower-quality than current leaders | 0% |
| EIS | Avoid New Adds | Niche ETF with no edge versus QQQ/GOOG/SOXX | 0% |
| SHLD | Avoid New Adds | Weak relative trend and no current setup edge | 0% |

## Notes
### Current holdings
- The authoritative live book is **GOOG 1, QQQ 6, QTUM 2, SOXX 1**.
- QQQ remains the dominant risk sleeve.
- No leverage is justified.

### Near-term watchlist
- **GOOG** for a clean break above the **400** area.
- **QQQ** for continuation through the recent high zone near **717**.
- **NVDA / SOXX** only if semis remain the clear leadership group after the open.

### Macro themes to monitor
- **Actionable now:** AI capex, semiconductors, large-cap growth leadership.
- **Worth monitoring:** hotter inflation / yield pressure that could eventually challenge long-duration tech leadership.
- **Interesting but not actionable yet:** space-economy headlines around RKLB and Cerebras IPO news; useful as sentiment background, not yet core allocation signal.

## Data Sources / Operational Learnings
- **Broker/account refresh:** direct **Alpaca REST fallback** is the authoritative source because the Alpaca CLI continues to time out intermittently.
- **Market return snapshot:** **Yahoo Finance chart API fallback** remains the working substitute because the configured FMP path is unavailable / unauthorized.
- **News/search fallback:** **Bing News RSS** worked for broad market and NVDA sentiment; **Yahoo Finance RSS** was used as the alternate source because Bing symbol coverage for GOOG/AVGO/investor-move queries was sparse.
- If fallback news coverage is sparse or stale, treat it as background only and do not force a thesis.
- Size from **account equity**, not buying power.
- Commission-free does **not** mean friction-free.
- Never average down.
- For thin or stale quotes, require second-source confirmation before trading.
- When market is closed, default to **next regular-session** triggers rather than extended-hours equity orders.
- When the book is already near the target band, add only on confirmed setups rather than chasing price alone.
