# Hourly Macro Memory
*Updated 2026-06-29 13:35Z (Monday 9:35 AM ET). Market OPEN until 20:00Z (4:00 PM ET).*

## Hourly Cycle Summary — 2026-06-29 13:35Z (Monday 9:35 AM ET)
- **Status:** Market OPEN. First hourly run of Monday.
- **Stale memory emergency RESOLVED:** Prior MEMORY.md was 66 hours old (Friday 19:35Z). Reconstructed true state from live Alpaca data. No trades occurred over the weekend.
- **Strategic blackout RESOLVED:** Last hourly commit a169424 was 2026-06-27 03:42Z (>48h). Portfolio audit confirms zero unauthorized activity since Friday sells.
- **Live broker refresh:** Equity $9,501.67 | Cash $9,501.67 | Long $0 | Gross 0% | Daytrade 0/3.
- **Holdings confirmed:** NONE. 100% cash.
- **Open orders:** NONE.
- **Filled trades since prior hourly (Jun 26 19:35Z):** NONE. Tactical agent ran 09:31Z today (repo fix + no-action confirmation); no other windows fired before this hourly run.
- **Universe compliance:** No positions. No breach.
- **Rapid-exposure-drift guard:** Gross 0% since Friday 9:41 AM ET. No drift.
- **Concurrent execution:** No race conditions. No unauthorized orders.
- **Daytrade status:** 0/3. Clean slate.
- **Code integrity:** Clean. Staged ledger.md (tactical entry) and unstaged tactical_last_prices.json are valid agent outputs. No staged/unstaged source modifications.
- **Branch:** Up to date with origin/main.
- **Tactical ledger data-quality note:** 09:31Z tactical entry has price hallucination bug: `,501.67` instead of `$9,501.67`. Root cause is bash `$9` expansion in double-quoted detail strings. Fixed by using ledger_cli.ts with single-quote args or TypeScript helper. Disregard the missing digit for concealment detection; the true state is confirmed by live API.

## Tactical Execution — 2026-06-29 13:42Z (Monday 9:42 AM ET)
- **Action:** Placed 3 resting limit BUY orders per hourly authorization.
  - QQQ: 5 shares @ $715.50 limit (order 23167401, status `new`)
  - VOO: 2 shares @ $676.50 limit (order 749a53c9, status `new`)
  - AVGO: 3 shares @ $372.00 limit (order 265eda40, status `new`)
- **Fills:** None yet. All orders are resting until price pulls back to limits.
- **Authoritative holdings:** NONE. 100% cash ($9,501.67).
- **Current gross exposure:** 0% (will be ~63.6% if all 3 fill).
- **Daytrade count:** 0/3. No PDT risk from today's buys.
- **Next expected action:** Monitor fills in 13:50/14:00/14:10 tactical windows. QQQ limit ($715.50) is 6¢ below last trade ($715.56) — highest fill probability. VOO ($676.50) and AVGO ($372.00) are below current market and may need tape weakening or next-hourly limit raise.
- **System fix:** Corrected todo.md false-positive where `NO ADD` parser extracted QQQ from the SOXX reason line (`Overlaps QQQ tech exposure. No add.`). Reworded to `Avoid any SOXX adds.` to prevent parser from banning QQQ.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| Cash | — | — | — | $9,501.67 | 100% | — | — |
| **Equity** | — | — | — | **$9,501.67** | **100%** | — | **–4.98%** |

- **Gross long exposure:** 0%
- **Net exposure:** 0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** QQQ 5@$715.50, VOO 2@$676.50, AVGO 3@$372.00 (all limit, day TIF, expires 20:00Z)

## Performance Review — Mon Jun 29 (9:35 AM ET)
- **1D (today so far):** portfolio **0.00%** (flat, 100% cash) vs SPY **+1.25%** (Yahoo official close 728.99 → 738.14). **Underperforming SPY by ~1.25 pp today.**
- **1W (Jun 22 → Jun 29):** Portfolio ~–1.3% (est. $9,626 → $9,501.67) vs SPY ~–0.8% (est. $742 → $738). **Underperforming SPY over 1W by ~0.5 pp.**
- **2W (Jun 15 → Jun 29):** Portfolio ~–2.5% (est. $9,745 → $9,501.67) vs SPY ~–0.5% (est. $741 → $738). **Underperforming SPY over 2W by ~2.0 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–4.98%** ($9,501.67 vs $10,000 base) vs SPY **+2.80%** (SPY $738.14 vs baseline 718.01). **Trailing by ~7.78 pp.**
- What is working: Tactical discipline held over weekend. No churn. Cash preserved from Friday's lows.
- What is not working: We sold QQQ at $704.03 Friday; it is now $716.81 (+1.8% missed). Sold VOO at $668.74; now ~$677 (+1.2% missed). Sold AVGO at $368.08; now $373.65 (+1.5% missed). Whipsaw friction continues to bleed alpha.
- What must change: Deploy cash NOW into core positions. SPY/QQQ/VOO have all reclaimed their 50-day MAs today. The defensive posture is no longer justified. We must be 60%+ gross exposure by end of day to have any chance of closing the 7.78 pp gap in ~4 weeks. Wider ATR-based stops (not 1% tight stops) are mandatory to avoid repeating Friday's whipsaw.

## Goal Check
- **Portfolio since inception:** –4.98% ($9,501.67 vs $10,000 base)
- **S&P 500 since inception:** +2.80% (SPY $738.14 vs baseline 718.01)
- **Status:** **FAILING both goals.** Goal 1 (positive absolute): NOT MET. Goal 2 (beat SPY): NOT MET. Trailing by ~7.78 pp.
- **Dominant failure mode:** **excessive turnover / friction + cash drag.** The Jun 23 gap-down sells, Jun 25 re-entries, Jun 26 stop-outs, and Jun 29 cash gap-up miss have created a cycle of buying highs and selling lows. Every round trip costs ~0.1–0.3% in slippage and missed rebounds.
- **Posture:** **offensive catch-up.** Gross exposure 0% is catastrophically below the 60–90% offensive band. The 50-day MA reclaim by SPY/QQQ/VOO today is a technical buy signal. We must deploy immediately.

## Market Intel — Monday 9:35 AM ET
- **Broad market:** SPY ~$738.14 (+1.25% today), QQQ ~$716.81 (+1.39%), VOO ~$677.69 (+1.22%). All three gapped up and reclaimed their 50-day moving averages. This invalidates Friday's "below 50-day" bearish signal.
- **Semiconductor sector:** SOXX $598 (+1.57% today), AVGO $373.65 (+2.76%), NVDA $194.54 (+1.13%). Semis bouncing with market. Morgan Stanley strategist Mike Wilson warned today that the chip trade resembles silver/momentum climax and investors should shift away (MarketWatch, Jun 29 13:30Z). This is a headwind for chip momentum but AVGO/NVDA are down over 1M and not in climax territory like SOXX (+73% 3M).
- **Relative strength (today):** RKLB (+12.01%), ARKX (+3.13%), GOOG (+2.97%), AVGO (+2.76%), META (+2.51%) strongest. GLD (–0.74%) weakest.
- **50-day MA regime (Yahoo computed):** SPY above50=true, QQQ above50=true, VOO above50=true, SOXX above50=true, HOOD above50=true, QTUM above50=true. AVGO/NVDA/META/GOOG/RKLB/GLD below 50-day.
- **News:** Yahoo Finance RSS active. Key headline: "Nvidia, Micron, and Broadcom hold the stock market's fate in the palm of their hands" (Yahoo Finance, 13:07Z). MarketWatch: Morgan Stanley Wilson warns on chip momentum (13:30Z). BlackRock IBIT crypto loss headline (stale, Jun 28). No macro event headlines (CPI, Fed, etc.).
- **News access:** Fallback RSS (Yahoo Finance, MarketWatch) returned actionable content. MarketWatch chip warning is actionable caution.
- **Earnings dates:** No binary earnings for our holdings in next 48 hours. AVGO next expected Sep 3, 2026. NVDA Aug 26. GOOG Jul 23. META Jul 23 (est.).
- **Data sources:** Alpaca CLI working. FMP disabled (no API key). Yahoo Finance chart API v8 used as fallback for performance and MA computation.
- **Alpaca bars:** Timestamps at 13:34Z for most symbols; VOO at 13:30Z (stale). Cross-confirmed with Yahoo. VOO has only 7 trades at 13:30Z — thin on Alpaca but liquid in underlying market.
- **Illiquidity flags:** EIS (4 trades, stale 06-26), QTUM (4 trades), ARKX (3 trades), GLD (2 trades), SHLD (5 trades). Limit orders only if authorized. SOXX (19 trades), AVGO (21 trades) — thin but executable with limits.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.

## Multi-Timeframe Performance (Yahoo Finance v8)
*Fetched 2026-06-29 13:35Z.*

| Symbol | 1D | 1W | 2W | 1M | 3M | 6M | 50D MA | 200D MA |
|---|---|---|---|---|---|---|---|---|
| SPY | +1.25% | –0.84% | –0.49% | –2.18% | +12.38% | +7.31% | Above | Above |
| QQQ | +1.39% | –2.93% | –0.70% | –2.62% | +21.86% | +15.37% | Above | Above |
| VOO | +1.22% | –1.12% | –0.52% | –2.23% | +12.01% | +7.24% | Above | Above |
| AVGO | +2.76% | –4.34% | –1.82% | –12.07% | +17.66% | +7.36% | Below | Above |
| NVDA | +1.13% | –6.68% | –5.11% | –9.12% | +8.97% | +3.45% | Below | Above |
| META | +2.51% | +0.04% | –0.51% | –11.21% | –5.18% | –14.36% | Below | Below |
| GOOG | +2.97% | –1.19% | –3.78% | –10.75% | +19.01% | +9.62% | Below | Above |
| HOOD | +0.70% | –5.99% | +6.64% | +17.14% | +37.00% | –15.37% | Above | Below |
| RKLB | +12.01% | –5.58% | –7.52% | –36.03% | +29.93% | +35.04% | Below | Above |
| GLD | –0.74% | –3.57% | –4.05% | –10.15% | –10.91% | –6.96% | Below | Below |
| SOXX | +1.57% | –8.52% | +0.49% | +5.22% | +73.55% | +96.25% | Above | Above |
| QTUM | +1.41% | –6.18% | –1.94% | –0.56% | +41.71% | +43.18% | Above | Above |
| EIS | +2.19% | –0.55% | –7.33% | –12.45% | +0.02% | +9.36% | N/A | N/A |
| SHLD | +1.04% | –2.62% | –7.55% | –13.13% | –19.76% | –10.17% | N/A | N/A |
| ARKX | +3.13% | –1.29% | –2.52% | –12.75% | +5.95% | +12.39% | N/A | N/A |

## Position Map — Monday Jun 29 (9:35 AM ET)
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **BUY — limit order** | Core liquid growth. Reclaimed 50-day MA today. Must deploy to stop cash drag. | 35–45% |
| VOO | **BUY — limit order** | S&P anchor. Reclaimed 50-day MA. Lower beta than QQQ. | 10–20% |
| AVGO | **BUY — limit order** | AI chip exposure below 50-day but not in climax territory. Adds alpha vs pure index. | 5–15% |
| SOXX | Avoid / monitor | Above 50-day but Wilson chip-climax warning. Too much overlap with QQQ/AVGO. | 0% |
| NVDA | Avoid | Below 50-day. Single-stock chip risk. Wilson warning. No edge over AVGO. | 0% |
| GOOG | Avoid | Below 50-day. Weak 1M (–10.75%). No catalyst until Jul 23 earnings. | 0% |
| META | Banned | `bannedSymbols` active. | 0% |
| HOOD | Avoid | Above 50-day but below 200-day. Brokerage/crypto volatility. No edge. | 0% |
| RKLB | Avoid | +12% today is dead-cat bounce in –36% 1M decline. No edge. | 0% |
| GLD | Avoid | Below 50-day and 200-day. Defensive gold is failing. | 0% |
| EIS / SHLD / QTUM / ARKX | Avoid | Thin liquidity or no edge. EIS/SHLD/QTUM/ARKX have very low trade counts. | 0% |

## Priority Actions
1. **DEPLOY CORE POSITIONS IMMEDIATELY.** Authorize BUY 5 QQQ + 2 VOO + 3 AVGO via limit orders. Target gross exposure 63.6%. This is the first step out of catastrophic cash drag.
2. **Wider stops to avoid whipsaws.** QQQ stop $690 (~3.6%), VOO stop $660 (~2.4%), AVGO stop $350 (~5.9%). Do NOT use 1% tight stops anymore. A single gap-down open will not stop us out.
3. **Monitor chip-climax narrative.** If SOXX reverses hard after Wilson warning, AVGO may need trimming. Keep AVGO small (3 shares = 11.8%).
4. **Plan next-hour add.** If QQQ fills and holds above $718, consider adding 1 more QQQ share (stay under 45% cap). If VOO fills and holds $680, consider adding 1 more VOO (stay under 20% cap).
5. **Fix ledger price hallucination bug.** All future `ledger_cli.ts` calls must use single-quoted `--detail` arguments or TypeScript helper to avoid bash `$N` expansion.

## Macro Themes
- **Actionable now:** SPY/QQQ/VOO reclaimed 50-day MA = technical regime shift from defensive to offensive. Cash drag is the #1 enemy.
- **Worth monitoring:** Morgan Stanley Wilson chip-climax warning. If semis reverse, QQQ will feel it (25% tech weight). AVGO is direct exposure. Watch SOXX $598 level.
- **Worth monitoring:** RKLB +12% today. Space sector still damaged (–36% 1M). Not actionable but if it builds a base above $95, it may become a tactical long.
- **Interesting but not actionable yet:** QTUM above 50-day with +41.71% 3M. Quantum computing theme. Too thin to trade at scale on this book.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active. Stale-memory guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS + MarketWatch RSS returned actionable content today. MarketWatch chip warning noted.
- **Alpaca bars:** Most at 13:34Z, current. VOO at 13:30Z (slight staleness, cross-checked with Yahoo).
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Clean. Tactical ledger entry staged. No unauthorized source changes.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
