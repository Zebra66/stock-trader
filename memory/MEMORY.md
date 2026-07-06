# Hourly Macro Memory
*Updated 2026-07-06 17:43Z (Monday 1:43 PM ET). Market OPEN until 16:00 ET (~2h17m to close).*

## Hourly Cycle Summary — 2026-07-06 17:43Z
- **Status:** Market OPEN. ~2 hours 17 minutes to close.
- **Repo integrity:** CRITICAL BREACH DETECTED AND RESOLVED. Git index showed all tracked files staged-as-deleted. `git reset HEAD` restored index; `.gitignore` restored from HEAD; `node_modules` verified ignored. Branch up to date with origin/main.
- **Live broker refresh:** Equity $9,678.10 | Cash $2,267.81 | Long $7,410.29 | Gross 76.57% | Daytrade 0/3 (null).
- **Holdings confirmed:** QQQ 6, VOO 2, AVGO 3, HOOD 5. RKLB fully exited.
- **Filled trades this cycle:**
  - SOLD 5 RKLB @ $93.25 (realized loss ~$23.75). Cut due to severe relative weakness (–6.83% today vs SPY +0.75%, QQQ +1.34%). No news catalyst for drop = distribution signal.
  - BOUGHT 1 QQQ @ $721.94. Added core beta; QQQ now 44.7% of equity, within 45% cap.
- **Goal check:** Portfolio –3.22% since inception vs SPY +4.51% (750.39 vs 718.01 baseline). **FAILING both goals.** Trailing by ~7.73 pp.
- **Regime:** Offensive catch-up. Target gross exposure 60–90%. Current 76.57% — within band.
- **Dominant failure mode:** excessive turnover / friction + bad symbol selection (RKLB was dead money for 5 days, then collapsed).

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $721.31 | $4,327.86 | 44.7% | +$29.02 | +0.68% |
| VOO | 2 | $676.46 | $689.19 | $1,378.38 | 14.2% | +$25.46 | +1.88% |
| AVGO | 3 | $371.95 | $374.25 | $1,122.75 | 11.6% | +$6.90 | +0.62% |
| HOOD | 5 | $101.50 | $116.26 | $581.30 | 6.0% | +$73.80 | +14.54% |
| Cash | — | — | — | $2,267.81 | 23.4% | — | — |
| **Equity** | — | — | — | **$9,678.10** | **100%** | — | **–3.22%** |

- **Gross long exposure:** 76.57%
- **Net exposure:** 76.57%
- **Daytrade count:** 0/3 (null returned)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Monday Jul 6 (1:43 PM ET)
- **1D (today):** portfolio +0.82% ($9,599 → $9,678 est.) vs SPY +0.75%. **Outperforming by ~0.07 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–3.22%** vs SPY **+4.51%**. Trailing by ~7.73 pp.
- What is working: HOOD momentum (+14.54% unrealized, +3.13% today). AVGO Apple-deal gap (+3.83% today). QQQ steady (+1.22% today). VOO anchor (+0.64% today).
- What is not working: RKLB was the sole drag; now exited at –$23.75 realized loss.
- What must change: To close 7.73 pp gap in ~2 months, we need high-beta alpha. Current posture (QQQ 45%, HOOD 6%, AVGO 12%) is correct. Do not churn. Let winners run to targets.

## Goal Check
- **Portfolio since inception:** –3.22% ($9,678.10 vs $10,000 base)
- **S&P 500 since inception:** +4.51% (SPY 750.39 vs baseline 718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.73 pp.
- **Dominant failure mode:** excessive turnover / friction + bad symbol selection. RKLB held for 5 days, then sold at loss. June churn legacy still drags.
- **Posture:** offensive catch-up with elevated selectivity. Gross exposure 76.6% within 60–90% band. Cash 23.4% is reserve for exceptional dips.

## Market Intel — Monday 1:43 PM ET
- **Broad market:** SPY $750.39 (+0.75%). QQQ $721.31 (+1.22%). Nasdaq leading. Risk-on tone post-holiday.
- **Semiconductors:** AVGO surging +3.83% on 5-year Apple chip deal extension through 2031 ("Edge AI" focus). SOXX $583.09 (+2.96%). NVDA $196.01 (+0.60%) — laggard vs AVGO/SOXX.
- **HOOD:** $116.26 (+3.13%). Trump/crypto/Bitcoin headlines supporting momentum. Remaining 5 shares are house money after +2R trim at $114.51.
- **RKLB:** Exited at $93.25. Down –6.83% today, –18.40% 1M. No specific negative news; pure distribution in strong tape. Space sector rotation out.
- **META:** $593.65 (+1.84%). Still banned.
- **GOOG:** $362.06 (+1.65%). Not in book. 1M +1.79%, below 50D.
- **Event detector:** NONE at 17:37Z. `priorTimestamp: null` bug persists.
- **Earnings:** No binary events in next 48 hours.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.

## Position Map — Monday Jul 6 (1:43 PM ET)
| Symbol | Bias | Rationale | Hard Stop | Profit Target | R/R |
|---|---|---|---|---|---|
| QQQ | **HOLD** | Core growth. 44.7% of equity, near 45% cap. Bought today at $721.94 — DO NOT SELL TODAY. | $690.00 | $750.00 | 2.1:1 |
| VOO | **HOLD** | S&P anchor. +1.88% unrealized. 14.2% of equity. | $660.00 | $700.00 | 1.4:1 |
| AVGO | **HOLD** | Apple deal through 2031 = durable catalyst. +0.62% unrealized. Stop $365. | $365.00 | $420.00 | 2.4:1 |
| HOOD | **HOLD / ADD on dip** | House-money position. +14.54% unrealized. Target $125. Add 5 shares if pullback to $105. | $95.00 | $125.00 | 2.5:1 |
| META | Banned | `bannedSymbols` active. No re-entry. | — | — | — |
| RKLB | **AVOID — 24H COOLDOWN** | Exited today at $93.25. DO NOT RE-BUY within 24 hours. | — | — | — |

## Priority Actions (Monday Jul 6, 1:43 PM ET → close)
1. **HOLD ALL POSITIONS.** No hard stops breached. Event detector NONE.
2. **DO NOT SELL QQQ TODAY.** Bought at $721.94 this cycle. Same-day round trip prohibited.
3. **DO NOT RE-BUY RKLB** for 24 hours (cooldown rule).
4. **KEEP HOOD BUY TRIGGER at $105.** If broad market pulls back and HOOD hits $105, add 5 shares. R/R = 2:1.
5. **NO ADDS TO QQQ/VOO/AVGO.** Concentration caps binding or chasing gap-up.
6. **Portfolio heat:** ~$203 (2.1% of equity). Well under 6% daily loss cap.
7. **Let HOOD run to $125.** Remaining 5 shares are house money.
8. **Let AVGO run to $420.** Deal extension is structural; stop $365 protects gains.

## Macro Themes
- **Actionable now:** Semis/tech rally intact. AVGO direct beneficiary of Apple deal. Hold existing exposure; do not add at gap-up highs.
- **Actionable now:** RKLB relative weakness in strong tape = distribution, not a dip. Exit confirmed correct.
- **Worth monitoring:** JPMorgan summer swoon warning vs Morgan Stanley AI hyperscaler comeback call. Contradictory signals = elevated volatility. Limit orders only.
- **Interesting but not actionable yet:** SK Hynix $28B US IPO. Memory sector capital inflows may lift SOXX/AVGO medium-term.

## Data / Process Notes
- **Alpaca CLI** working. All guards active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback for performance data.
- **News access:** Yahoo Finance RSS working. AVGO Apple deal and HOOD crypto headlines are actionable.
- **Alpaca bars:** Timestamps at 17:41Z; current within 15 minutes.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** CRITICAL BREACH resolved this cycle. Git index corruption detected and fixed. Always verify `git status` and `git check-ignore`.
- **Event detector:** `priorTimestamp: null` bug persists. Current prices valid; pctChange absent. Needs code investigation.
- **Standing learnings:** See `memory/standing_learnings.md`. Key recent: #65 (pre-fetched harness context can inject stale files; verify with git), #66 (winner gains evaporate quickly; tighten profit-taking limits when momentum reverses).
- **Pre-fetched context risk:** Working-tree `memory/MEMORY.md` and `memory/todo.md` were 5+ weeks stale (May 29). Git HEAD committed versions (Jul 6 12:35Z) were authoritative. This is a severe process risk — tactical/hourly agents may be committing but not updating working tree, or working tree is being overwritten by stale pre-fetch. **Always verify git HEAD when file timestamps are suspicious.**

## Prior Tactical Executions (Recent)
- **2026-07-06 17:43Z (this cycle):** SOLD 5 RKLB @ $93.25. BOUGHT 1 QQQ @ $721.94.
- **2026-07-02 15:38Z:** SOLD 5 HOOD @ $114.51 (+2R trim).
- **2026-07-01 14:58Z:** BOUGHT 5 RKLB @ $98.00.
- **2026-06-30 14:46Z:** BOUGHT 10 HOOD @ $101.50.
- **2026-06-29 13:46Z:** BOUGHT 3 AVGO @ $371.95.
- **2026-06-29 14:00Z:** BOUGHT 2 VOO @ $676.46.
- **2026-06-29 13:55Z:** BOUGHT 5 QQQ @ $715.38.
