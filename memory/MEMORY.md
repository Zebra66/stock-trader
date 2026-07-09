# Hourly Macro Memory
*Updated 2026-07-09 14:46Z (Thursday 10:46 AM ET). Market OPEN until 16:00 ET (~5 hrs 14 mins to close).*

## CRITICAL PROCESS FINDINGS — This Cycle
1. **MEMORY.md and todo.md were last updated 2026-05-29 (6+ weeks stale).** The hourly/tactical agents have been operating without updating these core files, relying only on ledger.md, prompt context, and tactical_last_prices.json. This created a massive blind spot.
2. **Ledger.md was truncated in the working tree** — all July 1–9 entries were present in commit `a430823` but missing from disk. I restored them from that commit.
3. **Event detector bug introduced by tactical agent:** `Bun.file(SNAPSHOT_PATH)` was used without `.text()`, causing `JSON.parse()` to throw on every run and returning `prior = null`. Fixed this cycle.
4. **Repo index breach:** Nearly all tracked files were deleted from the git index (D status) while remaining on disk. `.gitignore` was missing. Restored and committed.

---

## Hourly Cycle Summary — 2026-07-09 14:46Z (Thursday 10:46 AM ET)
- **Status:** Market OPEN. ~5 hrs 14 mins to close.
- **Repo integrity:** Restored. `.gitignore` active. Branch up to date with origin/main.
- **Live broker refresh:** Equity $9,711.24 | Cash $2,259.98 | Long $7,451.26 | Gross 76.7% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, AVGO 3, HOOD 5, VOO 2.
- **Open orders:** NONE.
- **Filled trades since prior hourly (Jul 9 13:35Z):** SOLD 1 GOOG @ $348.97 (limit $348.90). Bought July 8 at $356.77. Realized loss ~$7.80.
- **Goal check:** Portfolio -2.93% since inception vs SPY +4.21%. **Both goals FAILED.** Trailing SPY by ~7.14 pp.
- **Regime:** Offensive catch-up. Target gross exposure 80–90%. Current 76.7% — room to deploy.
- **Dominant failure mode:** Excessive turnover / friction. June churn (sell QQQ/AVGO/VOO low June 23 & 26, buy back higher June 29; flip GOOG July 8–9) destroyed ~$465 in realized value vs current unrealized gains of ~$172.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $718.92 | $4,313.52 | 44.4% | +$14.68 | +0.34% |
| AVGO | 3 | $371.95 | $393.52 | $1,180.56 | 12.2% | +$64.71 | +5.80% |
| HOOD | 5 | $101.50 | $115.57 | $577.85 | 6.0% | +$70.35 | +13.86% |
| VOO | 2 | $676.46 | $687.70 | $1,375.40 | 14.2% | +$22.48 | +1.66% |
| Cash | — | — | — | $2,259.98 | 23.3% | — | — |
| **Equity** | — | — | — | **$9,711.24** | **100%** | — | **-2.93%** |

- **Gross long exposure:** 76.7%
- **Net exposure:** 76.7%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Thu Jul 9 (10:46 AM ET)
- **1D (today):** portfolio **~+0.7%** ($9,642.60 → $9,711.24) vs SPY **~+0.5%** (baseline 718.01 → ~748.35). **Outperforming SPY by ~0.2 pp today.**
- **1W:** Cannot precisely compute due to missing daily snapshots, but broker `last_equity` was $9,642.60 on Jul 8 close → $9,711.24 today = +0.71% 1D.
- **2W:** N/A — insufficient granular history in restored ledger.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **-2.93%** vs SPY **+4.21%** (baseline 718.01 → ~748.35). Trailing by ~7.14 pp.
- What is working: HOOD is the alpha engine (+13.9% unrealized, +49.8% since inception). AVGO custom silicon thesis paying off (+5.8% unrealized). VOO anchor steady (+1.7%).
- What is not working: QQQ core is barely positive (+0.34% unrealized) because we overpaid on June 29/July 6 rebuys. GOOG repeated churn losses. Cash drag of 23.3% is too high for offensive catch-up.
- What must change: STOP CHURNING. Deploy cash into high-conviction names and let them run. Every round trip costs ~$10–$30 in slippage + friction on this book.

## Goal Check
- **Portfolio since inception:** -2.93% ($9,711.24 vs $10,000 base)
- **S&P 500 since inception:** +4.21% (SPY ~748.35 vs baseline 718.01)
- **Status:** **Off track on both goals.** Trailing SPY by ~7.14 pp. Positive absolute return NOT met.
- **Dominant failure mode:** **Excessive turnover / friction.** June 23/26 panic sells of QQQ/AVGO/VOO at lows, followed by higher rebuys June 29. July 8 GOOG buy at $356.77 followed by July 9 stop at $348.97. Each round trip erodes capital.

## Market Intel — Thu Jul 9 10:46 AM ET
- **Broad market:** S&P 500 and Nasdaq rallying. SPY ~$748.35. Semis led a melt-up at open per 09:32 tactical note (SOXX +5.5%, SMH +4.1%, QQQ +1.2%). Now cooled; QQQ +1.05%, AVGO +1.24%, HOOD +1.80%, VOO +0.36%.
- **Semiconductor sector:** Structural AI demand intact. AVGO +5.7% yesterday on Apple chip deal; continued +1.2% today. SOXX up ~4.8% today on broad semi strength. NVDA lagging — potential catch-up candidate if rotation broadens.
- **AVGO / Broadcom:** 3 shares, blended avg $371.95. Unrealized +5.8%. Earnings (June 3) have passed. Stop $385 to protect gains.
- **HOOD:** Best performer. +13.9% unrealized. Trump account/crypto exchange momentum. 5 shares at $101.50 avg. Stop $105.
- **QQQ:** Core liquid growth. 6 shares at $716.47 avg. Barely positive due to poor rebuy timing. Stop $700 (trim 1 share if breached, keep 5 as core).
- **VOO:** Broad-market anchor. 2 shares at $676.46 avg. Stop $670.
- **GOOG:** Fully exited July 9 at $348.97. DO NOT re-buy: 24-hour cooldown + Q2 earnings Jul 23 risk + repeated churn losses.
- **META:** bannedSymbols active. No re-entry.
- **RKLB:** Sold July 6 at $93.25. Now $83.59. Avoid — space sector damaged.
- **Fed / Macro:** No new Fed headlines today. Iran headlines absorbed by market.
- **News access:** Yahoo Finance RSS primary source. Direct web search blocked.
- **Earnings dates (approx, from prior memory + Yahoo):** GOOG est. Jul 23; META est. Jul 29; HOOD est. Jul 29; NVDA Aug 26; RKLB est. Aug 6. AVGO earnings passed (June 3). **No binary events in next 48 hours.**

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 44.4%, near 45% cap. Hold 6; no add capacity. Trim 1 if $700 breaks. | 36–45% |
| AVGO | Hold | Custom silicon thesis working. +5.8% unrealized. 12.2% weight. No add capacity (1 share = 16.2%, breaches 15% cap). | 8–15% |
| HOOD | Hold / Add on pullback | Alpha engine. +13.9% unrealized. 6.0% weight, room to add. Buy 2 more on pullback to $114.50. | 6–12% |
| VOO | Hold | Broad-market anchor. 14.2%, near 20% cap but 1-share add breaches by $121. Hold 2. | 10–20% |
| SOXX | Buy (new) | Diversified semi exposure. +22% since inception. 0% current. Buy 1 share limit $589.50. | 4–10% |
| META | Avoid | bannedSymbols active. Code-level rejection. | 0% |
| GOOG | Avoid | 24h cooldown + earnings Jul 23 + churn history. DO NOT BUY. | 0% |
| NVDA | Watch / Buy on deep pullback | Lagging semis; potential catch-up if rotation broadens. Buy 2 shares if drops to $198. | 0–4% |
| RKLB | Avoid | Space sector damaged. Sold at $93.25, now $83.59. | 0% |
| QTUM / SHLD / EIS / ARKX / GLD | Avoid | Thin, extended, weak trends, or no clear catalyst. | 0% |

## Priority Actions
1. **HOLD QQQ 6, AVGO 3, HOOD 5, VOO 2.** No sells authorized.
2. **BUY 1 SOXX at limit $589.50.** Rationale: deploy cash into strongest sector, diversify chip exposure beyond AVGO. Thin symbol; limit order only.
3. **BUY 2 HOOD at limit $114.50.** Rationale: add to best performer on pullback only. Do NOT chase above $115.
4. **AVGO stop:** SELL all 3 shares if price drops below $385.00. Rationale: protect +5.8% unrealized gains.
5. **QQQ stop:** SELL 1 share if price drops below $700.00. Rationale: trim core on breakdown, keep 5 shares.
6. **HOOD stop:** SELL all 5 shares if price drops below $105.00. Rationale: protect winner.
7. **VOO stop:** SELL all 2 shares if price drops below $670.00. Rationale: protect anchor.
8. **Cash target:** After buys, cash ~$1,430 (~14.8%). Gross exposure ~85.1%. Within 80–90% offensive band.
9. **Anti-churn hard rule:** DO NOT sell any position bought today. If SOXX or HOOD fills today, DO NOT sell them today.
10. **Event detector:** Bug fixed. Prior snapshot now saved correctly. Next run will show pctChange deltas.

## Macro Themes
- **Actionable now:** AI chip demand is structural. AVGO + SOXX are the primary beneficiaries. We are adding SOXX to capture broad semi exposure.
- **Actionable now:** HOOD momentum on Trump/crypto catalysts. Best performer in universe since inception (+49.8%). Adding on pullback.
- **Worth monitoring:** NVDA lagging within semi sector. If NVDA reclaims $210 with volume, rotation may be broadening.
- **Worth monitoring:** GOOG Q2 earnings Jul 23 and Q2 bill risk. Stay away until post-earnings.
- **Interesting but not actionable yet:** QTUM quantum computing +41% 3M but thin and extended.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance symbol-specific RSS feeds are primary source. Direct web search blocked.
- **Alpaca `get-latest-price` bars** timestamps at 14:40Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **SOXX liquidity:** 11 trades, 400 vol at 14:40Z — thin but acceptable for limit orders. Do NOT use market orders.
- **AVGO liquidity:** Healthy at 43 trades, 999 vol in latest 10-min bar.
- **Earnings dates:** No binary events in next 48 hours. GOOG Jul 23; META Jul 29; HOOD Jul 29; NVDA Aug 26.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.7K equity, QQQ capped at 6 shares; AVGO at 3 shares (4th would breach 15%); VOO at 2 shares (3rd would breach 20%); HOOD can add up to 7 more shares; SOXX can add up to 3 shares.
- **Repo hygiene:** Restored this cycle. `temp_files/` properly ignored.
- **Code fix:** Event detector `Bun.file(SNAPSHOT_PATH)` → `Bun.file(SNAPSHOT_PATH).text()` restored. Prior snapshot now readable.
- **Process fix:** MEMORY.md and todo.md abandoned for 6+ weeks. Reconstructed this cycle. Future hourly runs MUST update these files.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted/staged-as-deleted, restore immediately.
- **Pre-fetched context can be stale even when git HEAD is current.** Use `git show HEAD:<file>` to verify.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; AVGO at 3-4 shares; VOO at 2 shares.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **Tactical agent may skip runs silently.** Verify via broker order/position data.
- **Tactical agent may execute unauthorized trades AND conceal them.** Live broker reconciliation is mandatory.
- **News access in workspace is severely limited.** Yahoo Finance RSS is primary actionable source.
- **Memory staleness > 6 hours on a trading day = suspect regime.** Rebuild from broker data before trading.
