# Hourly Macro Memory
*Updated 2026-05-04 15:01 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities remain **selectively risk-on but headline-fragile**. Reuters-heavy Google News RSS fallback continues to show **Middle East / oil-driven risk jitters**, and that is showing up in a softer afternoon tape even while the medium-term leadership structure is still intact. The best-performing parts of the universe over the last month to year are still **SOXX, AVGO, GOOG, QTUM, RKLB, and QQQ**, while **META, HOOD, GLD, and SHLD** remain weaker on short/intermediate relative strength.

For this account, the correct posture is still **controlled net long with high cash**. Equity is **$9,985.48**, cash is **$7,618.05**, and current gross exposure is about **23.7%**, so the book is now near the preferred tactical cap. The new **AVGO** starter is acceptable, but going forward any further adds should wait for a stronger setup. **GOOG** remains the next best incremental add if it later reclaims its trigger, because it combines stronger 1-week momentum with Reuters-confirmed cloud/AI earnings strength and cleaner liquidity than the lower-quality laggards. Semiconductors remain a favored group structurally, but because the book already owns **SOXX** and now **AVGO**, any **NVDA** add must require better confirmation than GOOG.

## Portfolio State
- **Equity:** $9,985.48
- **Cash:** $7,618.05
- **Buying power:** $17,524.98
- **Gross exposure:** ~23.7%
- **Market status:** open
- **Alpaca clock timestamp:** 2026-05-04T15:38:00-04:00
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value $416.83 | unrealized P&L **-$0.12** (-0.03%) | allocation **4.17%**
  - **SOXX:** 2 shares @ 468.43 | market value $925.90 | unrealized P&L **-$10.96** (-1.17%) | allocation **9.27%**
  - **QTUM:** 2 shares @ 137.00 | market value $271.54 | unrealized P&L **-$2.46** (-0.90%) | allocation **2.72%**
  - **QQQ:** 1 share @ 673.26 | market value $673.05 | unrealized P&L **-$0.21** (-0.03%) | allocation **6.74%**
  - **RKLB:** 1 share @ 80.88 | market value $80.10 | unrealized P&L **-$0.78** (-0.96%) | allocation **0.80%**
- **Overall unrealized P&L:** **-$14.53**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol QQQ`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / positions / prices / clock:** Alpaca CLI (`get-account`, `get-positions`, `get-latest-price`, `get-clock`)
- **News / search fallback:** **Google News RSS**, prioritizing **Reuters** and other major outlets because no direct Google Search workspace tool surfaced

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.93%**, **EIS +4.40%**, **QTUM +2.90%**, **SOXX +1.61%**, **QQQ +1.21%**
- Weak **1w** names: **ARKX -1.74%**, **GLD -3.56%**, **HOOD -8.40%**, **NVDA -8.50%**, **META -9.89%**
- Best **1m** performers: **SOXX +36.26%**, **AVGO +31.96%**, **GOOG +28.93%**, **QTUM +23.43%**, **RKLB +19.64%**
- Weak **1m** names: **VOO +9.37%**, **ARKX +7.72%**, **GLD -3.45%**, **SHLD -7.81%**
- Best **3m** performers: **SOXX +31.20%**, **AVGO +25.36%**, **QTUM +16.26%**, **GOOG +10.08%**, **EIS +9.84%**
- Weak **3m** names: **VOO +3.10%**, **ARKX +3.13%**, **NVDA +6.78%**, **SHLD -8.40%**, **META -13.44%**, **HOOD -14.47%**
- Best **6m** performers: **SOXX +56.19%**, **RKLB +43.24%**, **GOOG +36.54%**, **EIS +30.45%**, **QTUM +23.69%**
- Best **1y** performers: **RKLB +252.46%**, **SOXX +143.51%**, **GOOG +128.97%**, **AVGO +103.83%**, **QTUM +74.20%**
- Best **3y** performers: **RKLB +2004.68%**, **HOOD +768.93%**, **NVDA +591.06%**, **AVGO +558.73%**, **GOOG +257.44%**

## Fresh External Context
- **Macro / tape:** Reuters in Google News RSS reports **Wall St falls as Middle East tensions spark fresh jitters** and separately **oil jumps as geopolitical risk stays elevated**.
- **GOOG:** Reuters reports **Alphabet revenue topped expectations on a record cloud quarter**, keeping GOOG the cleanest high-liquidity growth add in the universe.
- **Semis:** No fresh same-day Reuters catalyst materially improved the semiconductor setup during this cycle; that argues for keeping **AVGO / NVDA** as secondary buys rather than forcing them ahead of GOOG.
- **HOOD:** Google News fallback continues to surface **post-earnings analyst target resets / lowered expectations**, so HOOD remains lower quality than the core leaders.
- **Investor-flow context:** Google News fallback still shows **Cathie Wood buying Alphabet and Meta while reducing AMD**. Treat this as context only, not as a trade trigger.
- **Liquidity note:** **EIS** remains too thin for confident tactical execution without stronger live confirmation and tighter prints.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book is **SOXX + QTUM + QQQ + RKLB**.
2. Keep gross exposure capped around **23-24%** for this hour and preserve roughly **76%+ cash**.
3. Allow at most **one fresh add** this hour. Prioritize **GOOG first**, then **AVGO**, then **NVDA**.
4. **Do not add QQQ first** this hour; a second share would push exposure beyond the preferred cap without enough incremental edge.
5. **Hold existing positions** while they remain above refreshed risk levels; do **not** average down.
6. Keep **META, HOOD, SHLD, GLD, VOO, ARKX, and EIS** sidelined for new capital.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Strong medium-term AI / networking leadership, but because SOXX is already owned, require stronger confirmation before adding sector overlap. | 4% |
| EIS | Hold | Multi-month momentum is good, but liquidity and stale-print risk remain too high for this account. | 0% |
| GLD | Hold | Hedge only; short-term momentum remains weaker than growth leaders. | 0% |
| GOOG | Buy | Best current mix of 1-week strength, Reuters-backed earnings quality, liquidity, and cloud/AI monetization. | 4% |
| HOOD | Sell | Lower-quality setup, weaker 1-week / 3-month trend, and softer analyst tone after earnings. | 0% |
| META | Sell | Weak relative strength and negative 3-month trend outweigh any long-term quality argument for now. | 0% |
| NVDA | Hold | Still a structural AI leader, but near-term momentum is weaker than GOOG and chip exposure already exists via SOXX. | 2% |
| QQQ | Hold | Broad-growth exposure is already in place, but another share would crowd the hourly exposure cap. | 7% |
| QTUM | Hold | Existing thematic AI basket size is appropriate; no averaging down. | 3% |
| RKLB | Hold | Strong long-term trend but high volatility; keep only as a small satellite. | 1% |
| SHLD | Sell | Weak 1-month and 3-month trend with no catalyst strong enough to justify scarce capital. | 0% |
| SOXX | Hold | Still the strongest sector-level semiconductor expression in the universe; existing size is already near target. | 10% |
| VOO | Hold | Lower-alpha broad-market exposure than QQQ while growth leadership remains intact. | 0% |
| ARKX | Hold | Lower-quality thematic exposure than SOXX / QTUM / RKLB. | 0% |

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
- When using Google News RSS fallback, prioritize **recent Reuters / major-source headlines** and avoid stale or low-quality aggregator noise.
- Absence of a fresh high-conviction catalyst is a valid reason to keep cash rather than forcing exposure.
- Top-investor filings/headlines are context, not instructions; follow them only when they align with current price action and liquidity.
- Pre-market prints can improve watchlist quality, but they do **not** replace cash-session confirmation or opening-range discipline.
- **Yahoo Finance chart fallback works more reliably with browser-like headers; naive no-header requests can hit HTTP 429 rate limits.**
- The **live brokerage account** overrides stale memory; if memory and Alpaca disagree, trust Alpaca and immediately update memory/todo.
- On a **~$10k account**, one-share increments in names like **QQQ, GOOG, AVGO, and SOXX** are meaningful; target allocations must respect practical order granularity.
- For thinner names or stale quotes (for example **EIS**), require fresh confirmation from a reliable live source before taking tactical action.
- When macro headlines are risk-negative but leadership trends remain intact, prefer **waiting for confirmation** over buying shallow weakness.
- If a 1-share add would push gross exposure materially above the hourly cap, prefer a **higher-alpha single-name add** over broad ETF duplication.
- When the book already has sector exposure through an ETF, single-name adds in the same sector need a **higher confirmation threshold** than cross-sector leaders like GOOG.

## Last Run Summary
- Live account at **15:01 ET**: **SOXX 2**, **QTUM 2**, **QQQ 1**, **RKLB 1**.
- Current equity is **$9,984.91**, cash is **$8,035.00**, gross exposure is about **19.5%**, and total unrealized P&L is **-$15.09**.
- **FMP historical performance** remains unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Leadership remains centered on **SOXX / GOOG / AVGO / QTUM / QQQ / RKLB**, but the afternoon tape is softer and still argues for **one-add maximum discipline**.
- Tactical posture for the next hour: **hold current leaders, keep cash high, and allow at most one fresh add with GOOG as first priority**.
- **Prompt review completed:** `prompts/hourly.txt` was tightened to explicitly require using **live Alpaca state as source of truth** and overwriting stale memory/todo before making new decisions. This reduces the risk of tactical actions based on outdated holdings.

## 2026-05-04 15:38 ET Tactical Execution Summary
- Refreshed live Alpaca state: equity **$9,985.48**, cash **$7,618.05**, buying power **$17,524.98**.
- Positions now: **AVGO 1**, **SOXX 2**, **QTUM 2**, **QQQ 1**, **RKLB 1**.
- Executed **1 share AVGO buy** at **$416.95** after price reclaimed the tactical buy zone and semis remained stable enough to justify the add.
- No other orders were placed. **GOOG** stayed just below trigger, and **NVDA** remained below its buy zone.
- Next expected action: hold the new AVGO starter, watch for a clean trim signal in AVGO above the first target or a risk stop if momentum fades, while continuing to respect the one-add discipline.

## 2026-05-04 14:41 ET Tactical Execution Summary
- Refreshed live Alpaca state: equity **$9,985.18**, cash **$8,035.00**, buying power **$17,941.63**.
- Positions unchanged: **SOXX 2**, **QTUM 2**, **QQQ 1**, **RKLB 1**.
- No orders placed this cycle. **GOOG 380.57**, **AVGO 413.59**, and **NVDA 197.84** all remained below their buy triggers; existing holdings also stayed between their stop and trim levels.
- Reuters headlines from Google News RSS were checked for the active candidates and did not reveal a fresh adverse shock.
- Next expected action: keep cash elevated and wait for a clean **GOOG -> AVGO -> NVDA** trigger or a risk stop in an existing holding.
