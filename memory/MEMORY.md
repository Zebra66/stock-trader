# Hourly Macro Memory
*Updated 2026-07-08 15:35Z (Wednesday 11:35 AM ET). Market OPEN until 16:00 ET (~4.5 hours to close).*

## Hourly Cycle Summary — 2026-07-08 15:35Z (Wednesday 11:35 AM ET)
- **Status:** Market OPEN. ~4.5 hours to close. Next tactical runs: 11:40, 11:50, 12:10, 12:20, 12:30, 12:40, 12:50 ET.
- **Repo integrity:** Clean. Branch up to date with origin/main. Staged changes from tactical agent (ledger.md, tactical_last_prices.json) — will commit this cycle.
- **Live broker refresh:** Equity $9,552.01 | Cash $2,267.79 | Long $7,284.22 | Gross 76.3% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, AVGO 3, HOOD 5, VOO 2.
- **Open orders:** NONE.
- **Filled trades since 10:42 AM hourly:** NONE. Tactical agent executed no trades in 10:50/11:10/11:20/11:30 runs.
- **Goal check:** Portfolio **–4.48%** since inception vs SPY **+3.19%** (740.93 vs 718.01 baseline). **Both goals FAILED.** Trailing SPY by **~7.67 pp**.
- **Regime:** Neutral. Target gross exposure 70–80%. Current 76.3% — within band. No deployment this cycle.
- **Event detector bug:** FIXED. `loadLastSnapshot()` was not awaiting `Bun.file().text()`, causing `priorTimestamp` to always be null. Corrected in `src/tools/event_detector.ts`.
- **Ledger:** Tactical agent is updating correctly since this morning.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.473 | $702.48 | $4,214.88 | 44.1% | –$83.96 | –1.95% |
| AVGO | 3 | $371.95 | $385.69 | $1,157.07 | 12.1% | +$41.22 | +3.69% |
| VOO | 2 | $676.46 | $680.71 | $1,361.42 | 14.3% | +$8.50 | +0.63% |
| HOOD | 5 | $101.50 | $110.17 | $550.85 | 5.8% | +$43.35 | +8.54% |
| Cash | — | — | — | $2,267.79 | 23.7% | — | — |
| **Equity** | — | — | — | **$9,552.01** | **100%** | — | **–4.48%** |

- **Gross long exposure:** 76.3%
- **Net exposure:** 76.3%
- **Daytrade count:** 0/3 (no same-day round trips today or recently)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Wed Jul 8 (11:35 AM ET)
- **1D (today):** portfolio **–0.24%** ($9,575.37 → $9,552.01) vs SPY **–0.91%** (740.93 vs prior close). **Outperforming SPY by ~0.67 pp today.** AVGO +4.28% on Apple deal offsetting QQQ/VOO/HOOD weakness.
- **1W (Jul 1 → Jul 8):** portfolio **~–0.9%** vs SPY **–0.78%**. **Underperforming SPY over 1W by ~0.1 pp.** QQQ –4.53% 1W is the primary drag; AVGO +2.35% and HOOD +9.94% offset partially.
- **2W (Jun 24 → Jul 8):** portfolio **~+0.4%** vs SPY **+1.23%**. **Underperforming SPY over 2W by ~0.8 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–4.48%** vs SPY **+3.19%**. Still trailing by ~7.67 pp.
- What is working: AVGO (+3.69% unrealized, +4.28% today) insulated by Apple $30B+ chip deal. HOOD (+8.54% unrealized, strong 1W/1M momentum). VOO steady anchor (+0.63%).
- What is not working: QQQ underwater (–1.95% unrealized, –4.53% 1W, testing 50D support). Core growth exposure is bleeding relative to SPY.
- What must change: With ~3.5 weeks left in the 3-month window, we need QQQ to stabilize or rotate freed capital into higher-alpha names. However, Iran escalation risk demands patience — no panic selling, no chasing. Selective deployment on stabilization.

## Goal Check
- **Portfolio since inception:** –4.48% ($9,552.01 vs $10,000 base)
- **S&P 500 since inception:** +3.19% (SPY 740.93 vs baseline 718.01)
- **Status:** **Off track on both goals** (trailing SPY by ~7.67 pp; negative absolute return).
- **Dominant failure mode:** **Excessive turnover / friction.** June panic liquidations (Jun 23, Jun 26) followed by higher-priced rebuilds (Jun 29) destroyed ~$80+ in realized losses and missed upside. GOOG stop-out (Jun 22 at $349, bought Jun 16 at $369 = –$40 realized), SOXX/NVDA churn, and RKLB loss (Jul 6 at $93.25 vs Jun 30 buy at $98 = –$24) compounded the drawdown. Cash drag is secondary.

## Market Intel — Wednesday 11:35 AM ET
- **Broad market:** SPY down –0.91%, QQQ down –0.90% after Trump declared the U.S.-Iran ceasefire is "over." Risk-off tone modest but broad. Airline stocks slumping (fuel cost risk).
- **Semiconductor sector:** Bifurcated. AVGO soaring +4.28% on Apple $30B+ U.S. chipmaking deal. Broadcom's AI revenue +143% headline reinforcing bullish case. Meanwhile SOXX –14.05% 1W and NVDA –1.15% 1W show broad semi weakness outside AVGO.
- **AVGO / Broadcom:** Massive catalyst — Apple deal worth >$30 billion validates custom silicon thesis. Stock $385.69, well above avg $371.95. Earnings already passed (Jun 3). Hold 3 shares; stop at $370 protects gains.
- **Alphabet / GOOG:** Not held. Down –1.70% today on macro weakness. No company-specific negative headlines. Core thesis intact. Potential add candidate on further dip ($355–$358). Watch only this cycle.
- **Robinhood / HOOD:** Down –2.35% today as Bitcoin drops on Iran news. Crypto sensitivity is a real risk. But 1W +9.94%, 1M +33.68% shows structural momentum on perpetual futures deal and international expansion. Hold 5 shares; trim 2 if momentum breaks.
- **QQQ / Nasdaq-100:** Testing 50D support at ~$700. Down –4.53% 1W, underperforming SPY. If $700 breaks, further downside likely. Our largest position (44.1%) is at risk.
- **META:** Banned. Youth addiction lawsuit ($1.4T trial in August) adds additional downside risk. No re-entry.
- **NVDA:** Not held. Flat +0.44% today but –3.56% 1M. Weak. No re-entry planned.
- **RKLB:** Sold Jul 6 at $93.25. Now $81.88. Avoid. Space sector damaged.
- **Fed / Macro:** No new Fed headlines today. Iran is the dominant macro driver.
- **News access:** Yahoo Finance RSS feeds working. Direct web search blocked.
- **Earnings dates:** AVGO passed Jun 3. HOOD est. Jul 29. GOOG est. Jul 23. META est. Jul 29. NVDA Aug 26. RKLB est. Aug 6. No binary events in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold / Trim if breaks $700 | Core liquid growth. 44.1%, near 45% cap. Underwater –1.95%. Testing 50D support. Trim 1 share on $700 breakdown to reduce concentration risk. | 36–45% |
| AVGO | Hold / Stop at $370 | Apple deal is massive catalyst. +3.69% unrealized. 12.1% weight. Capped at 15%; cannot add. Protect gains with $370 stop. | 10–15% |
| VOO | Hold | Broad-market anchor. 14.3%, within 20% non-QQQ ETF cap. No action. | 10–20% |
| HOOD | Hold / Trim 2 if breaks $105 | Momentum name, +8.54% unrealized. Crypto sensitivity to Iran risk. 5.8% weight, room to add but not today. Trim 2 shares on $105 breakdown. | 5–12% |
| META | Avoid | bannedSymbols active. No re-entry. | 0% |
| GOOG | Watch / Add on dip | Down on macro, not micro. Potential add candidate if it dips to $355–$358 and Iran risk stabilizes. | 0–8% |
| NVDA | Avoid | Weak 1M (–3.56%). No clear catalyst. | 0% |
| SOXX | Avoid | Down –14.05% 1W. Too volatile without clear support. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends, geopolitical risk, or no clear catalyst. | 0% |

## Priority Actions
1. **HOLD all positions.** No new orders this cycle. Gross exposure 76.3% is within 70–80% neutral band.
2. **QQQ defensive stop:** SELL 1 share if price drops below $700.00 with limit $699.50. Rationale: protect capital on breakdown below 50D support and round number.
3. **AVGO profit stop:** SELL all 3 shares if price drops below $370.00 with limit $369.50. Rationale: protect Apple-deal gains if momentum reverses.
4. **HOOD momentum trim:** SELL 2 shares if price drops below $105.00 with limit $104.50. Rationale: lock in profits on momentum breakdown; crypto sensitivity to Iran.
5. **Cash reserve:** ~$2,268 (~23.7%). Blocker: "Iran ceasefire declared over by Trump; waiting for tape stabilization before deploying above 80%."
6. **Deployment queue (requires hourly authorization and tape stabilization):**
   - GOOG 1 share if dip to $355–$358 with limit order.
   - HOOD 1–2 shares if crypto stabilizes and price holds $108+.
   - SOXX 1 share only if it reclaims $560 with volume (mean reversion after –14% 1W rout).
7. **Event detector bug fixed:** `loadLastSnapshot()` now awaits `Bun.file().text()`. Prior snapshot comparison will work on next run.
8. **Ledger confirmed updating:** Tactical agent executing `ledger_cli.ts prepend` correctly.

## Macro Themes
- **Actionable now:** Iran ceasefire over = modest risk-off. SPY –0.91%, QQQ –0.90%. Do not panic sell but respect the headline. Defensive stops refreshed.
- **Actionable now:** AVGO Apple $30B+ deal is a durable semiconductor catalyst. We are correctly positioned via AVGO 3 shares.
- **Worth monitoring:** Oil price response to Iran escalation. If WTI spikes >$80, equities may see deeper correction. Keep cash ready.
- **Worth monitoring:** QQQ 50D support at ~$700. A decisive break could trigger algorithmic selling and deepen tech drawdown.
- **Interesting but not actionable yet:** HOOD perpetual futures deal expanding internationally. Long-term positive but crypto volatility near-term.

## Historical Performance Snapshot (Yahoo Finance v8, Jul 8 ~11:35 AM ET)
| Symbol | Price | 1D | 1W | 1M | 3M | 1Y |
|---|---|---|---|---|---|---|
| AVGO | $386.64 | +4.28% | +2.35% | +0.23% | +22.92% | +42.25% |
| EIS | $118.45 | –0.93% | –1.87% | –4.55% | +0.51% | +24.16% |
| GLD | $369.75 | –2.05% | +0.37% | –6.69% | –13.89% | +21.56% |
| GOOG | $357.42 | –1.70% | +1.16% | –2.28% | +21.38% | +104.06% |
| HOOD | $110.25 | –2.35% | +9.94% | +33.68% | +60.01% | +20.79% |
| META | $603.44 | –1.97% | +7.13% | +1.76% | +5.04% | –16.27% |
| NVDA | $197.79 | +0.44% | –1.15% | –3.56% | +11.50% | +23.62% |
| QQQ | $703.08 | –0.90% | –4.53% | –0.28% | +20.19% | +27.29% |
| QTUM | $150.43 | –0.67% | –9.04% | –1.54% | +36.80% | +61.68% |
| RKLB | $81.88 | –1.83% | –19.45% | –25.62% | +20.89% | +111.36% |
| SHLD | $62.26 | –2.41% | +4.26% | –1.26% | –15.83% | +4.26% |
| SOXX | $550.77 | –0.17% | –14.05% | +2.04% | +62.18% | +126.34% |
| VOO | $680.93 | –0.90% | –0.86% | +0.43% | +12.93% | +19.41% |
| ARKX | $31.99 | –1.89% | –6.26% | –6.04% | +5.49% | +32.44% |
| SPY | $740.93 | –0.91% | –0.78% | +0.46% | +12.98% | +19.44% |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (placeholder API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance symbol-specific RSS feeds working. Direct web search blocked.
- **Alpaca `get-latest-price` bars** timestamps at 15:34Z, current within 15 minutes.
- **VOO liquidity warning:** Alpaca bar shows anomalously low trade count — this is a data glitch. VOO is among the most liquid ETFs globally. Do not treat VOO as illiquid.
- **Day-trade status:** 0/3. No same-day round trips in past week.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.6K equity, QQQ capped at 6 shares; AVGO at 3 shares; VOO at 2 shares. Deployment into new names is structurally easier than adding to existing capped positions.
- **Repo hygiene:** Clean. No integrity issues this cycle.
- **Event detector:** Bug fixed. Next run should have valid `priorTimestamp` and `pctChange`.
- **Ledger:** Updating correctly.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** Mass staged deletions have recurred. Always verify `git status` before trading.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; AVGO at 3 shares; VOO at 2 shares.
- **Chip-sector rotation away from NVDA toward non-NVDA semis is a real regime signal.** AVGO outperforming on custom silicon validates thesis.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser must be kept in sync.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **News access in workspace is severely limited.** Yahoo Finance RSS is the primary actionable source.
- **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
- **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker reconciliation is mandatory.
- **Buying the first intraday spike on a news breakout without a limit can result in poor fill.** Use limit orders to anchor entry.
- **Missing .gitignore or stale tracked files cause repo pollution.** Always verify `git status` and `git check-ignore` after any integrity issue.
- **Event detector state file (`memory/tactical_last_prices.json`) needs investigation.** FIXED: `loadLastSnapshot()` was not awaiting file read.
- **Ledger must be updated every cycle.** Confirmed working.
- **Geopolitical escalation can reverse momentum quickly.** Iran ceasefire over caused immediate risk-off. Defensive stops must be refreshed hourly.
