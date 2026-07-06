# Hourly Macro Memory
*Updated 2026-07-06 19:37Z (Monday 3:37 PM ET). Market OPEN until 20:00 ET (~23m to close).*

## Hourly Cycle Summary — 2026-07-06 19:37Z
- **Status:** Market OPEN. ~23 minutes to close.
- **Repo integrity:** Clean. Only `memory/ledger.md` and `memory/tactical_last_prices.json` modified (expected tactical artifacts). No source divergence. Branch in sync with origin.
- **Live broker refresh:** Equity $9,719.75 | Cash $2,267.81 | Long $7,451.94 | Gross 76.67% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, VOO 2, AVGO 3, HOOD 5. RKLB fully exited.
- **Filled trades this cycle:** NONE since 17:43Z. Tactical windows at 18:40/18:50/19:10/19:20/19:30Z were all hold-only.
- **Goal check:** Portfolio –2.80% since inception vs SPY +4.75% (752.13 vs 718.01 baseline). **FAILING both goals.** Trailing by ~7.55 pp.
- **Regime:** Offensive catch-up. Target gross exposure 60–90%. Current 76.67% — within band.
- **Dominant failure mode:** excessive turnover / friction + bad symbol selection. June churn legacy still drags.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $724.58 | $4,347.48 | 44.7% | +$48.64 | +1.13% |
| VOO | 2 | $676.46 | $691.31 | $1,382.62 | 14.2% | +$29.70 | +2.20% |
| AVGO | 3 | $371.95 | $376.43 | $1,129.29 | 11.6% | +$13.44 | +1.20% |
| HOOD | 5 | $101.50 | $118.51 | $592.55 | 6.1% | +$85.05 | +16.76% |
| Cash | — | — | — | $2,267.81 | 23.3% | — | — |
| **Equity** | — | — | — | **$9,719.75** | **100%** | — | **–2.80%** |

- **Gross long exposure:** 76.67%
- **Net exposure:** 76.67%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Monday Jul 6 (3:37 PM ET)
- **1D (today):** portfolio +1.21% ($9,603.48 → $9,719.75) vs SPY ~+0.88%. **Outperforming by ~0.33 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–2.80%** vs SPY **+4.75%**. Trailing by ~7.55 pp.
- What is working: HOOD momentum (+16.76% unrealized, +5.13% today). AVGO Apple-deal gap (+4.43% today). QQQ steady (+1.68% today). VOO anchor (+0.95% today).
- What is not working: June churn legacy (realized losses on NVDA, GOOG, SOXX, META, RKLB). No new drag introduced today.
- What must change: To close 7.55 pp gap in ~2 months, need high-beta alpha with minimal churn. Current posture (QQQ 45%, HOOD 6%, AVGO 12%) is correct. Do not churn. Let winners run to targets. Cash 23.3% is reserve for exceptional dips.

## Goal Check
- **Portfolio since inception:** –2.80% ($9,719.75 vs $10,000 base)
- **S&P 500 since inception:** +4.75% (SPY 752.13 vs baseline 718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.55 pp.
- **Dominant failure mode:** excessive turnover / friction + bad symbol selection.
- **Posture:** offensive catch-up with elevated selectivity. Gross exposure 76.7% within 60–90% band. Cash 23.3% is reserve.

## Market Intel — Monday 3:37 PM ET
- **Broad market:** SPY $752.13 (~+0.88%). QQQ $724.55 (+1.68% est). Nasdaq leading. Risk-on tone post-holiday.
- **Semiconductors:** AVGO surging +4.43% on 5-year Apple chip deal extension through 2031 ("Edge AI" focus). SOXX $585.93 (slight pullback from highs). NVDA $196.85 (+0.60% est) — laggard vs AVGO/SOXX.
- **HOOD:** $118.51 (+5.13%). Goldman Sachs doubles down after record trading surge. Trump/crypto/Bitcoin headlines supporting momentum. Remaining 5 shares are house money after +2R trim at $114.51.
- **RKLB:** Exited at $93.25. Now $92.78 post-exit. Headline: "Rocket Lab Stock Is Tumbling Today." 24H cooldown active until ~17:43Z Jul 7.
- **META:** $601.23. Still banned. Zuckerberg AI-agent warning headlines mixed with neocloud pivot optimism.
- **GOOG:** $365.17. Negative headlines: "Alphabet has its worst day in over a year on AI concerns after high-profile exits." Not attractive for new entry.
- **Event detector:** NONE at 19:35Z. No sector rotation.
- **Earnings:** No binary events in next 48 hours.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.

## Yahoo Finance Performance Snapshot (Universe)
| Symbol | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|
| HOOD | +18.5% | +41.1% | +68.7% | +1.5% | +25.1% |
| GOOG | +8.3% | +1.9% | +26.4% | +15.0% | +104.1% |
| META | +9.4% | -3.4% | +5.2% | -7.5% | -16.2% |
| QQQ | +2.4% | -2.8% | +25.3% | +18.0% | +31.0% |
| AVGO | +2.8% | -21.7% | +21.2% | +7.9% | +36.8% |
| VOO | +3.0% | -0.4% | +15.6% | +9.9% | +21.0% |
| NVDA | +1.9% | -8.6% | +12.5% | +3.9% | +24.0% |
| RKLB | +10.9% | -18.3% | +46.0% | +23.4% | +141.1% |
| SOXX | -1.0% | -5.1% | +77.7% | +86.2% | +144.7% |
| GLD | +2.3% | -6.2% | -11.1% | -4.0% | +24.4% |

## Position Map — Monday Jul 6 (3:37 PM ET)
| Symbol | Bias | Rationale | Hard Stop | Profit Target | R/R |
|---|---|---|---|---|---|
| QQQ | **HOLD** | Core growth. 44.7% of equity, near 45% cap. 6th share bought today at $721.94 — DO NOT SELL TODAY. | $690.00 | $750.00 | 2.1:1 |
| VOO | **HOLD** | S&P anchor. +2.20% unrealized. 14.2% of equity. | $660.00 | $700.00 | 1.4:1 |
| AVGO | **HOLD** | Apple deal through 2031 = durable catalyst. +1.20% unrealized. Stop $365. | $365.00 | $420.00 | 2.4:1 |
| HOOD | **HOLD / ADD on dip** | House-money position. +16.76% unrealized. Target $125. Add 5 shares if pullback to $105. | $95.00 | $125.00 | 2.5:1 |
| META | Banned | `bannedSymbols` active. No re-entry. | — | — | — |
| RKLB | **AVOID — 24H COOLDOWN** | Exited today at $93.25. DO NOT RE-BUY until after 17:43Z Jul 7. | — | — | — |

## Priority Actions (Monday Jul 6, 3:37 PM ET → close + Tuesday Jul 7)
1. **HOLD ALL POSITIONS.** No hard stops breached. Event detector NONE.
2. **DO NOT SELL QQQ TODAY.** Bought at $721.94 this cycle. Same-day round trip prohibited for remaining 23 minutes.
3. **DO NOT RE-BUY RKLB** until after 17:43Z Jul 7 (24H cooldown + some buffer).
4. **KEEP HOOD BUY TRIGGER at $105.** If broad market pulls back and HOOD hits $105, add 5 shares. R/R = 2:1.
5. **NO ADDS TO QQQ/VOO/AVGO.** Concentration caps binding or chasing gap-up.
6. **Portfolio heat:** ~$245 (2.52% of equity). Well under 6% daily loss cap.
7. **Let HOOD run to $125.** Remaining 5 shares are house money.
8. **Let AVGO run to $420.** Deal extension is structural; stop $365 protects gains.

## Deployment Queue (When Cash Deploys)
1. **HOOD** — 5 shares @ $105.00 limit (under 15% cap, within 60–90% band).
2. **GOOG** — Re-evaluate after AI-concern headlines clear. Not authorized today.
3. **RKLB** — Re-evaluate after 24H cooldown + relative-strength recovery vs QQQ.

## Macro Themes
- **Actionable now:** Semis/tech rally intact. AVGO direct beneficiary of Apple deal. Hold existing exposure; do not add at gap-up highs.
- **Actionable now:** RKLB relative weakness in strong tape = distribution, not a dip. Exit confirmed correct.
- **Worth monitoring:** GOOG 1W +8.3% but today's AI-exit headlines are a red flag. Needs headline resolution and 50D reclaim for conviction.
- **Worth monitoring:** NVDA underperforming SOXX (+0.60% est vs SOXX +2.96%). No edge over AVGO until trend reverses.
- **Interesting but not actionable yet:** SK Hynix $28B US IPO. Memory sector capital inflows may lift SOXX/AVGO medium-term.

## Data / Process Notes
- **Alpaca CLI** working. All guards active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback for performance data.
- **News access:** Yahoo Finance RSS and Google News RSS working. GOOG negative headlines actionable caution signal.
- **Alpaca bars:** Timestamps at 19:34Z; current within 5 minutes.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Process breach:** None this cycle. Prior cycle breach fully resolved.
- **Event detector:** `priorTimestamp` bug persists but does not affect classification. Current prices valid; pctChange small.
- **Standing learnings:** See `memory/standing_learnings.md`. Key recent: #65 (pre-fetched harness context can inject stale files; verify with git), #66 (winner gains evaporate quickly; tighten profit-taking limits when momentum reverses).

## Prior Tactical Executions (Recent)
- **2026-07-06 17:43Z:** SOLD 5 RKLB @ $93.25. BOUGHT 1 QQQ @ $721.94.
- **2026-07-02 15:38Z:** SOLD 5 HOOD @ $114.51 (+2R trim).
- **2026-06-30 14:46Z:** BOUGHT 10 HOOD @ $101.50.
- **2026-06-29 13:46Z:** BOUGHT 3 AVGO @ $371.95.
- **2026-06-29 14:00Z:** BOUGHT 2 VOO @ $676.46.
- **2026-06-29 13:55Z:** BOUGHT 5 QQQ @ $715.38.
