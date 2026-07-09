# Hourly Macro Memory
*Updated 2026-07-09 15:37Z (Thursday 11:37 AM ET). Market OPEN until 16:00 ET (~4h 23m to close).*

## Critical Process Findings — This Cycle
1. **Event detector async bug NOT actually fixed last cycle.** `loadLastSnapshot()` called `Bun.file(path).text()` without `await`, causing `JSON.parse` on a Promise object every run. Fixed this cycle by converting `loadLastSnapshot` and `saveSnapshot` to async/await and awaiting both in `detectEvents()`. Snapshot now persisting correctly.
2. **SOXX limit buy filled** at 14:51Z (10:51 AM ET) at $589.47. Authorized in prior todo. Now held 1 share.
3. **No unauthorized trades** since prior hourly. Tactical agent clean.

---

## Hourly Cycle Summary — 2026-07-09 15:37Z (Thursday 11:37 AM ET)
- **Status:** Market OPEN. ~4h 23m to close.
- **Repo integrity:** Clean. Branch up to date.
- **Live broker:** Equity $9,749.34 | Cash $1,670.51 | Long $8,078.83 | Gross 82.9% | Daytrade 0/3.
- **Holdings:** QQQ 6, AVGO 3, HOOD 5, VOO 2, SOXX 1.
- **Open orders:** HOOD 2 shares limit $114.50 (buy).
- **Event detector:** Now working. Prior snapshot saved at 15:35Z.
- **Goal check:** Portfolio -2.51% since inception vs SPY +4.42%. **Both goals FAILED.** Trailing SPY by ~6.9 pp.
- **Regime:** Offensive catch-up. Target gross exposure 80–90%.
- **Dominant failure mode:** Excessive turnover / friction. June panic sells + July GOOG churn cost ~$465 in realized losses.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $721.21 | $4,327.26 | 44.4% | +$28.42 | +0.66% |
| AVGO | 3 | $371.95 | $400.53 | $1,201.59 | 12.3% | +$85.74 | +7.68% |
| HOOD | 5 | $101.50 | $116.28 | $581.61 | 6.0% | +$74.11 | +14.60% |
| VOO | 2 | $676.46 | $689.10 | $1,378.20 | 14.1% | +$25.28 | +1.87% |
| SOXX | 1 | $589.47 | $590.17 | $590.17 | 6.1% | +$0.70 | +0.12% |
| Cash | — | — | — | $1,670.51 | 17.1% | — | — |
| **Equity** | — | — | — | **$9,749.34** | **100%** | — | **-2.51%** |

- **Gross long exposure:** 82.9%
- **Net exposure:** 82.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** HOOD 2 shares limit $114.50 (buy)

## Performance Review — Thu Jul 9 (11:37 AM ET)
- **1D:** portfolio **+1.11%** ($9,642.60 → $9,749.34) vs SPY **+0.58%** (baseline 718.01 → ~749.73). **Outperforming SPY by ~0.53 pp today.**
- **1W:** SPY +0.53%, QQQ -0.54%. Portfolio estimated flat to slightly up.
- **2W:** N/A — insufficient granular history.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **-2.51%** vs SPY **+4.42%**. Trailing by ~6.9 pp.
- What is working: HOOD is alpha engine (+14.6% unrealized). AVGO custom silicon thesis paying off (+7.7% unrealized). SOXX add timing was good (filled at $589.47, now +0.12%).
- What is not working: QQQ core barely positive (+0.66% unrealized) due to poor June 29 rebuy timing. NVDA not in book, lagging semis. Cash still 17.1%.
- What must change: STOP CHURNING. Deploy cash into high-conviction names with limit orders and let them run. Every round trip costs ~$10–$30 in friction.

## Goal Check
- **Portfolio since inception:** -2.51% ($9,749.34 vs $10,000 base)
- **S&P 500 since inception:** +4.42% (SPY ~749.73 vs baseline 718.01)
- **Status:** **Off track on both goals.** Trailing SPY by ~6.9 pp. Positive absolute return NOT met.
- **Dominant failure mode:** **Excessive turnover / friction.**

## Market Intel — Thu Jul 9 11:37 AM ET
- **Broad market:** S&P 500 and Nasdaq rallying. SPY ~$749.73. AI stocks climbing despite Iran war flare-up per IBD headline. Market absorbing geopolitical risk.
- **Semiconductors:** AVGO +3.08% today on continued custom silicon momentum. SOXX +4.96% today but pulled back slightly from earlier highs. NVDA -1.29% today — lagging the sector, possible rotation from NVDA into custom silicon / ETF.
- **AVGO / Broadcom:** 3 shares, blended avg $371.95. Unrealized +7.68%. Earnings passed June 3. Stop $385.
- **HOOD:** Best performer. +14.6% unrealized. Trump/crypto exchange momentum intact. 5 shares at $101.50 avg. Stop $105.
- **QQQ:** Core liquid growth. 6 shares at $716.47 avg. Stop $700 (trim 1 share if breached, keep 5 as core).
- **VOO:** Broad-market anchor. 2 shares at $676.46 avg. Stop $670.
- **SOXX:** Filled today at $589.47. 1 share. Diversified semi exposure. Anti-churn: DO NOT sell today. Stop $540 (future sessions).
- **GOOG:** Exited Jul 8 at $348.97. Today $350.82 (-2.20%). Good exit timing. DO NOT re-buy: 24h cooldown + Q2 earnings Jul 23 risk.
- **META:** bannedSymbols active. No re-entry.
- **RKLB:** Sold July 6 at $93.25. Now ~$84.72. Avoid.
- **NVDA:** Lagging semis. Not in book. Potential catch-up candidate if rotation broadens. Limit buy authorized at $198.50.
- **Fed / Macro:** No new Fed headlines today. Iran headlines absorbed by market.
- **News access:** Yahoo Finance RSS primary source. Direct web search blocked.
- **Earnings dates:** GOOG est. Jul 23; META est. Jul 29; HOOD est. Jul 29; NVDA Aug 26. AVGO earnings passed (June 3). **No binary events in next 48 hours.**

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 44.4%, near 45% cap. Hold 6; no add capacity. Trim 1 if $700 breaks. | 36–45% |
| AVGO | Hold | Custom silicon thesis working. +7.7% unrealized. 12.3% weight. No add capacity (4th share breaches 15%). | 8–15% |
| HOOD | Hold / Add on pullback | Alpha engine. +14.6% unrealized. 6.0% weight, room to add. Buy 2 more on pullback to $114.50. | 6–12% |
| VOO | Hold | Broad-market anchor. 14.1%, near 20% cap but 3rd share breaches by ~$121. Hold 2. | 10–20% |
| SOXX | Hold | Diversified semi exposure. Filled today at $589.47. 6.1% weight. DO NOT sell today. Stop $540. | 4–10% |
| NVDA | Watch / Buy on pullback | Lagging semis; potential catch-up if rotation broadens. Buy 1 share at limit $198.50. | 0–4% |
| META | Avoid | bannedSymbols active. Code-level rejection. | 0% |
| GOOG | Avoid | 24h cooldown + earnings Jul 23 + churn history. DO NOT BUY. | 0% |
| RKLB | Avoid | Space sector damaged. Sold at $93.25, now ~$84.72. | 0% |
| QTUM / SHLD / EIS / ARKX / GLD | Avoid | Thin, extended, weak trends, or no clear catalyst. | 0% |

## Priority Actions
1. **HOLD QQQ 6, AVGO 3, HOOD 5, VOO 2, SOXX 1.** No sells authorized.
2. **BUY 1 NVDA at limit $198.50.** Rationale: deploy cash into AI leader on relative weakness. Do NOT chase at market.
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
- **Interesting but not actionable yet:** QTUM quantum computing +35% 3M but thin and extended.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance symbol-specific RSS feeds are primary source. Direct web search blocked.
- **Alpaca `get-latest-price` bars** timestamps at 15:34Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **SOXX liquidity:** 18 trades, 909 vol at 15:34Z — thin but acceptable for limit orders. Do NOT use market orders.
- **AVGO liquidity:** Healthy at 31 trades, 1,426 vol in latest 10-min bar.
- **Earnings dates:** No binary events in next 48 hours. GOOG Jul 23; META Jul 29; HOOD Jul 29; NVDA Aug 26.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.7K equity, QQQ capped at 6 shares; AVGO at 3 shares; VOO at 2 shares; HOOD can add up to 7 more shares; SOXX can add up to 3 shares; NVDA can add up to 7 shares.
- **Event detector:** Bug fixed this cycle. Async snapshot load/save now working.
- **Process note:** Prior cycle claimed event detector bug fixed but did not actually await the Promise. Code-level guard review is mandatory before claiming fixes.

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
