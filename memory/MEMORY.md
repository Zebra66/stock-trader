# Hourly Macro Memory
*Updated 2026-07-09 16:37Z (Thursday 12:37 PM ET). Market OPEN until 20:00Z (~3h 23m to close).*

## Critical Process Findings — This Cycle
1. **Todo.md parser false positive blocked NVDA limit buys.** The prior todo contained "Do NOT buy NVDA at market price" which the Alpaca CLI parser matched as a `DO NOT BUY` ban on NVDA (case-insensitive substring match). The tactical agent at 11:40 and 11:50 was silently rejected when trying to place the authorized NVDA limit order. **Fixed this cycle** by rewriting the line to "NVDA — market orders prohibited; limit buy only." The NVDA limit order at $198.50 was then successfully placed by the hourly strategist.
2. **Event detector working correctly.** Snapshot persisting. No events flagged.
3. **No unauthorized trades** since prior hourly. Tactical agent clean.

---

## Hourly Cycle Summary — 2026-07-09 16:37Z (Thursday 12:37 PM ET)
- **Status:** Market OPEN. ~3h 23m to close.
- **Repo integrity:** Clean. Branch up to date.
- **Live broker:** Equity $9,753.59 | Cash $1,670.51 | Long $8,083.08 | Gross 82.9% | Daytrade 0/3.
- **Holdings:** QQQ 6, AVGO 3, HOOD 5, VOO 2, SOXX 1.
- **Open orders:** HOOD 2 shares limit $114.50 (buy); NVDA 1 share limit $198.50 (buy).
- **Event detector:** No events. Snapshot saved at 16:35Z.
- **Goal check:** Portfolio -2.46% since inception vs SPY +4.53%. **Both goals FAILED.** Trailing SPY by ~7.0 pp.
- **Regime:** Offensive catch-up. Target gross exposure 80–90%.
- **Dominant failure mode:** Excessive turnover / friction. June panic sells + July GOOG churn cost ~$465 in realized losses.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $721.55 | $4,329.30 | 44.4% | +$30.46 | +0.71% |
| AVGO | 3 | $371.95 | $400.74 | $1,202.22 | 12.3% | +$86.37 | +7.74% |
| HOOD | 5 | $101.50 | $116.655 | $583.28 | 6.0% | +$75.78 | +14.93% |
| VOO | 2 | $676.46 | $689.79 | $1,379.58 | 14.1% | +$26.66 | +1.97% |
| SOXX | 1 | $589.47 | $588.70 | $588.70 | 6.0% | -$0.77 | -0.13% |
| Cash | — | — | — | $1,670.51 | 17.1% | — | — |
| **Equity** | — | — | — | **$9,753.59** | **100%** | — | **-2.46%** |

- **Gross long exposure:** 82.9%
- **Net exposure:** 82.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** HOOD 2 @ $114.50; NVDA 1 @ $198.50

## Performance Review — Thu Jul 9 (12:37 PM ET)
- **1D:** portfolio **+1.15%** ($9,642.60 → $9,753.59) vs SPY **+0.68%** (baseline 718.01 → ~750.51). **Outperforming SPY by ~0.47 pp today.**
- **1W:** SPY +0.68%, QQQ +1.23%. Portfolio estimated +1.0–1.5%.
- **2W:** N/A — insufficient granular history.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **-2.46%** vs SPY **+4.53%**. Trailing by ~7.0 pp.
- What is working: HOOD is alpha engine (+14.9% unrealized). AVGO custom silicon thesis paying off (+7.7% unrealized). SOXX add timing was good (filled at $589.47, now -0.13% after early pullback but +4.66% on day).
- What is not working: QQQ core barely positive (+0.71% unrealized) due to poor June 29 rebuy timing. Cash still 17.1%.
- What must change: STOP CHURNING. Deploy cash into high-conviction names with limit orders and let them run. Every round trip costs ~$10–$30 in friction.

## Goal Check
- **Portfolio since inception:** -2.46% ($9,753.59 vs $10,000 base)
- **S&P 500 since inception:** +4.53% (SPY ~750.51 vs baseline 718.01)
- **Status:** **Off track on both goals.** Trailing SPY by ~7.0 pp. Positive absolute return NOT met.
- **Dominant failure mode:** **Excessive turnover / friction.**

## Market Intel — Thu Jul 9 12:37 PM ET
- **Broad market:** S&P 500 and Nasdaq steady near highs. SPY ~$750.51. $7T cash-on-sidelines macro story (247wallst.com) supports potential risk-on deployment if yields fall further.
- **Semiconductors:** AVGO +3.12% today. SOXX +4.66% today (1W +3.87%, 3M +52.15%, 6M +78.91%). NVDA -0.97% today, lagging the sector rotation. Custom silicon / broad semi ETF benefiting more than NVDA.
- **AVGO / Broadcom:** 3 shares, blended avg $371.95. Unrealized +7.74%. Earnings passed June 3. Stop $385.
- **HOOD:** Best performer. +14.9% unrealized. Trump/crypto exchange momentum intact. 5 shares at $101.50 avg. Today +2.79%, 1M +39.31%. Stop $105.
- **QQQ:** Core liquid growth. 6 shares at $716.47 avg. Stop $700 (trim 1 share if breached, keep 5 as core).
- **VOO:** Broad-market anchor. 2 shares at $676.46 avg. Stop $670.
- **SOXX:** Filled today at $589.47. 1 share. Diversified semi exposure. Anti-churn: DO NOT sell today. Stop $540 (future sessions).
- **GOOG:** Exited Jul 8 at $348.97. Today $351.61 (-1.98%). Good exit timing. DO NOT re-buy: earnings Jul 23 risk.
- **META:** bannedSymbols active. No re-entry.
- **RKLB:** Sold July 6 at $93.25. Now $83.80. Avoid.
- **NVDA:** Limit buy placed at $198.50. Current $202.14. Lagging semis; potential catch-up candidate if rotation broadens. Stop $185 if filled.
- **Fed / Macro:** No new Fed headlines today. Market absorbing geopolitical risk.
- **News access:** Yahoo Finance RSS primary source. Direct web search blocked.
- **Earnings dates:** GOOG est. Jul 23; META est. Jul 29; HOOD est. Jul 29; NVDA Aug 26. AVGO earnings passed (June 3). **No binary events in next 48 hours.**

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 44.4%, near 45% cap. Hold 6; no add capacity. Trim 1 if $700 breaks. | 36–45% |
| AVGO | Hold | Custom silicon thesis working. +7.7% unrealized. 12.3% weight. No add capacity (4th share breaches 15%). | 8–15% |
| HOOD | Hold / Add on pullback | Alpha engine. +14.9% unrealized. 6.0% weight, room to add. Buy 2 more on pullback to $114.50. | 6–12% |
| VOO | Hold | Broad-market anchor. 14.1%, near 20% cap but 3rd share breaches by ~$121. Hold 2. | 10–20% |
| SOXX | Hold | Diversified semi exposure. Filled today at $589.47. 6.0% weight. DO NOT sell today. Stop $540. | 4–10% |
| NVDA | Watch / Buy on pullback | Lagging semis; potential catch-up if rotation broadens. Limit buy 1 share at $198.50 placed. | 0–4% |
| META | Avoid | bannedSymbols active. Code-level rejection. | 0% |
| GOOG | Avoid | 24h cooldown passed + earnings Jul 23 + churn history. DO NOT BUY. | 0% |
| RKLB | Avoid | Space sector damaged. Sold at $93.25, now $83.80. | 0% |
| QTUM / SHLD / EIS / ARKX / GLD | Avoid | Thin, extended, weak trends, or no clear catalyst. | 0% |

## Priority Actions
1. **HOLD QQQ 6, AVGO 3, HOOD 5, VOO 2, SOXX 1.** No sells authorized.
2. **NVDA limit buy 1 share at $198.50** — order placed this cycle. Do NOT chase at market. Do NOT cancel unless stop-loss logic changes.
3. **HOOD limit $114.50** — keep open for 2 shares on pullback. Do NOT raise limit; do NOT chase.
4. **AVGO stop:** SELL all 3 shares if price drops below $385.00. Protect +7.7% unrealized gains.
5. **QQQ stop:** SELL 1 share if price drops below $700.00. Trim core on breakdown, keep 5 shares.
6. **HOOD stop:** SELL all 5 shares if price drops below $105.00. Protect winner.
7. **VOO stop:** SELL all 2 shares if price drops below $670.00. Protect anchor.
8. **SOXX stop:** SELL 1 share if price drops below $540.00 (authorized for future sessions only; DO NOT sell today).
9. **Cash target:** After NVDA fill, cash ~$1,472 (~15.1%). Gross exposure ~84.9%. If HOOD also fills, cash ~$1,243 (~12.7%), gross ~87.3%. Both within offensive band.
10. **Anti-churn hard rule:** DO NOT sell any position bought today. SOXX bought today — DO NOT sell today.

## Macro Themes
- **Actionable now:** AI chip demand is structural. AVGO + SOXX are primary beneficiaries. Adding NVDA diversifies within the theme.
- **Actionable now:** HOOD momentum on Trump/crypto catalysts. Best performer in universe. Adding on pullback only.
- **Worth monitoring:** NVDA lagging within semi sector. If NVDA reclaims $210 with volume, rotation may be broadening. If it keeps lagging, custom silicon rotation is real.
- **Worth monitoring:** GOOG Q2 earnings Jul 23 and Q2 bill risk. Stay away until post-earnings.
- **Interesting but not actionable yet:** QTUM quantum computing +34% 3M but thin and extended.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance symbol-specific RSS feeds are primary source. Direct web search blocked.
- **Alpaca `get-latest-price` bars** timestamps at 16:34Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **SOXX liquidity:** 10 trades, 195 vol at 16:33Z — thin but acceptable for limit orders. Do NOT use market orders.
- **AVGO liquidity:** Healthy at 17 trades, 313 vol in latest 10-min bar.
- **Earnings dates:** No binary events in next 48 hours. GOOG Jul 23; META Jul 29; HOOD Jul 29; NVDA Aug 26.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.7K equity, QQQ capped at 6 shares; AVGO at 3 shares; VOO at 2 shares; HOOD can add up to 7 more shares; SOXX can add up to 3 shares; NVDA can add up to 7 shares.
- **Event detector:** Bug fixed last cycle. Async snapshot load/save now working.
- **Todo.md parser false positive:** Lesson added to standing_learnings.md and prompt updated.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.**
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run.**
- **Pre-fetched context can be stale.** Verify with live reads or `git show HEAD:<file>`.
- **With ~$10K equity, concentration caps are extremely tight.**
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Lock files must NOT contain auto-expiration timestamps.**
- **Adding to a position bought the same session is allowed; selling a same-day buy is prohibited.**
- **Portfolio equity can drift $15–$20 intraday on a $10K book.** Do not overreact.
- **Tactical agent may skip runs silently.** Verify via broker data.
- **News access in workspace is severely limited.** Yahoo Finance RSS is primary actionable source.
- **Memory staleness > 6 hours on a trading day = suspect regime.** Rebuild from broker data before trading.
- **Todo.md parser false positive risk:** Avoid "DO NOT BUY" / "DO NOT ADD" on the same line as a ticker with conditional buy authorization.
