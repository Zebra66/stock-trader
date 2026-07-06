# Hourly Macro Memory
*Updated 2026-07-06 18:37Z (Monday 2:37 PM ET). Market OPEN until 16:00 ET (~1h23m to close).*

## Hourly Cycle Summary — 2026-07-06 18:37Z
- **Status:** Market OPEN. ~1 hour 23 minutes to close.
- **Repo integrity:** CRITICAL CODE BREACH DETECTED AND RESOLVED. Prior hourly cycle left staged changes that removed safety guards from `alpaca_cli.ts`, `alpaca_client_factory.ts`, `ledger_cli.ts`, and both prompts. The staged deletions included: stale-memory guard, duplicate-order guard, same-day fill cache, anti-churn SDK wrapper, ledger price-hallucination validation, and multiple prompt-level safeguard paragraphs. All reverted to `HEAD` immediately. Tactical agent ledger entries with truncated prices (e.g., "QQQ 23 > 90 stop") were also found and corrected.
- **Live broker refresh:** Equity $9,692.19 | Cash $2,267.81 | Long $7,424.38 | Gross 76.57% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, VOO 2, AVGO 3, HOOD 5. RKLB fully exited.
- **Filled trades this cycle:** NONE since 17:43Z. Tactical windows at 14:10/14:20/14:30 ET (18:10/18:20/18:30Z) were all hold-only.
- **Goal check:** Portfolio –3.08% since inception vs SPY +4.61% (751.14 vs 718.01 baseline). **FAILING both goals.** Trailing by ~7.69 pp.
- **Regime:** Offensive catch-up. Target gross exposure 60–90%. Current 76.57% — within band.
- **Dominant failure mode:** excessive turnover / friction + bad symbol selection. June churn legacy still drags.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $722.66 | $4,335.96 | 44.7% | +$37.12 | +0.86% |
| VOO | 2 | $676.46 | $690.44 | $1,380.88 | 14.2% | +$27.96 | +2.07% |
| AVGO | 3 | $371.95 | $374.70 | $1,124.09 | 11.6% | +$8.24 | +0.74% |
| HOOD | 5 | $101.50 | $116.69 | $583.45 | 6.0% | +$75.95 | +14.96% |
| Cash | — | — | — | $2,267.81 | 23.4% | — | — |
| **Equity** | — | — | — | **$9,692.19** | **100%** | — | **–3.08%** |

- **Gross long exposure:** 76.57%
- **Net exposure:** 76.57%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Monday Jul 6 (2:37 PM ET)
- **1D (today):** portfolio +0.91% ($9,599 est. → $9,692) vs SPY +0.75%. **Outperforming by ~0.16 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–3.08%** vs SPY **+4.61%**. Trailing by ~7.69 pp.
- What is working: HOOD momentum (+14.96% unrealized, +3.13% today). AVGO Apple-deal gap (+3.83% today). QQQ steady (+1.22% today). VOO anchor (+0.64% today).
- What is not working: RKLB was the sole drag; exited at –$23.75 realized loss. No new drag introduced.
- What must change: To close 7.69 pp gap in ~2 months, we need high-beta alpha. Current posture (QQQ 45%, HOOD 6%, AVGO 12%) is correct. Do not churn. Let winners run to targets. Cash 23.4% is reserve for exceptional dips.

## Goal Check
- **Portfolio since inception:** –3.08% ($9,692.19 vs $10,000 base)
- **S&P 500 since inception:** +4.61% (SPY 751.14 vs baseline 718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.69 pp.
- **Dominant failure mode:** excessive turnover / friction + bad symbol selection.
- **Posture:** offensive catch-up with elevated selectivity. Gross exposure 76.6% within 60–90% band. Cash 23.4% is reserve.

## Market Intel — Monday 2:37 PM ET
- **Broad market:** SPY $751.14 (+0.75%). QQQ $722.66 (+1.22%). Nasdaq leading. Risk-on tone post-holiday.
- **Semiconductors:** AVGO surging +3.83% on 5-year Apple chip deal extension through 2031 ("Edge AI" focus). SOXX $583.27 (+2.96%). NVDA $196.18 (+0.60%) — laggard vs AVGO/SOXX.
- **HOOD:** $116.69 (+3.13%). Trump/crypto/Bitcoin headlines supporting momentum. Remaining 5 shares are house money after +2R trim at $114.51.
- **RKLB:** Exited at $93.25. Now $93.74 post-exit. 24H cooldown active until ~17:43Z Jul 7.
- **META:** $601.74 (+1.84%). Still banned.
- **GOOG:** $362.47 (+1.65%). Not in book. 1W +8.3% showing recent momentum; 1M +1.9% still tepid. Watch for reclaim of 50D.
- **Event detector:** NONE at 18:35Z. No sector rotation.
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

## Position Map — Monday Jul 6 (2:37 PM ET)
| Symbol | Bias | Rationale | Hard Stop | Profit Target | R/R |
|---|---|---|---|---|---|
| QQQ | **HOLD** | Core growth. 44.7% of equity, near 45% cap. 6th share bought today at $721.94 — DO NOT SELL TODAY. | $690.00 | $750.00 | 2.1:1 |
| VOO | **HOLD** | S&P anchor. +2.07% unrealized. 14.2% of equity. | $660.00 | $700.00 | 1.4:1 |
| AVGO | **HOLD** | Apple deal through 2031 = durable catalyst. +0.74% unrealized. Stop $365. | $365.00 | $420.00 | 2.4:1 |
| HOOD | **HOLD / ADD on dip** | House-money position. +14.96% unrealized. Target $125. Add 5 shares if pullback to $105. | $95.00 | $125.00 | 2.5:1 |
| META | Banned | `bannedSymbols` active. No re-entry. | — | — | — |
| RKLB | **AVOID — 24H COOLDOWN** | Exited today at $93.25. DO NOT RE-BUY until after 17:43Z Jul 7. | — | — | — |

## Priority Actions (Monday Jul 6, 2:37 PM ET → close)
1. **HOLD ALL POSITIONS.** No hard stops breached. Event detector NONE.
2. **DO NOT SELL QQQ TODAY.** Bought at $721.94 this cycle. Same-day round trip prohibited.
3. **DO NOT RE-BUY RKLB** until after 17:43Z Jul 7 (24H cooldown + some buffer).
4. **KEEP HOOD BUY TRIGGER at $105.** If broad market pulls back and HOOD hits $105, add 5 shares. R/R = 2:1.
5. **NO ADDS TO QQQ/VOO/AVGO.** Concentration caps binding or chasing gap-up.
6. **Portfolio heat:** ~$245 (2.53% of equity). Well under 6% daily loss cap.
7. **Let HOOD run to $125.** Remaining 5 shares are house money.
8. **Let AVGO run to $420.** Deal extension is structural; stop $365 protects gains.

## Deployment Queue (When Cash Deploys)
1. **HOOD** — 5 shares @ $105.00 limit (under 15% cap, within 60–90% band).
2. **GOOG** — New position candidate if momentum confirms above 50D. Limit 4 shares @ $360.00 (15% cap max). Not authorized today; reassess tomorrow.
3. **RKLB** — Re-evaluate after 24H cooldown + relative-strength recovery vs QQQ.

## Macro Themes
- **Actionable now:** Semis/tech rally intact. AVGO direct beneficiary of Apple deal. Hold existing exposure; do not add at gap-up highs.
- **Actionable now:** RKLB relative weakness in strong tape = distribution, not a dip. Exit confirmed correct.
- **Worth monitoring:** GOOG 1W +8.3% — potential momentum recovery. Needs 50D reclaim for conviction.
- **Worth monitoring:** NVDA underperforming SOXX (+0.60% vs +2.96%). No edge over AVGO until trend reverses.
- **Interesting but not actionable yet:** SK Hynix $28B US IPO. Memory sector capital inflows may lift SOXX/AVGO medium-term.

## Data / Process Notes
- **Alpaca CLI** working. All guards active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback for performance data.
- **News access:** Yahoo Finance RSS working but limited actionable headlines for our universe today.
- **Alpaca bars:** Timestamps at 18:35–18:36Z; current within 5 minutes.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Process breach:** Prior hourly cycle left staged changes removing safety guards from source and prompts. Reverted to HEAD. Tactical agent ledger entries had bash `$116` expansion bug producing truncated prices (e.g., `16.21` instead of `$116.21`). This indicates the tactical agent is NOT using single quotes for ledger CLI calls despite prompt warning. Validation in `ledger_cli.ts` will reject future bad entries.
- **Event detector:** `priorTimestamp: null` bug persists. Current prices valid; pctChange absent. Needs code investigation.
- **Standing learnings:** See `memory/standing_learnings.md`. Key recent: #65 (pre-fetched harness context can inject stale files; verify with git), #66 (winner gains evaporate quickly; tighten profit-taking limits when momentum reverses).

## Prior Tactical Executions (Recent)
- **2026-07-06 17:43Z:** SOLD 5 RKLB @ $93.25. BOUGHT 1 QQQ @ $721.94.
- **2026-07-02 15:38Z:** SOLD 5 HOOD @ $114.51 (+2R trim).
- **2026-06-30 14:46Z:** BOUGHT 10 HOOD @ $101.50.
- **2026-06-29 13:46Z:** BOUGHT 3 AVGO @ $371.95.
- **2026-06-29 14:00Z:** BOUGHT 2 VOO @ $676.46.
- **2026-06-29 13:55Z:** BOUGHT 5 QQQ @ $715.38.
