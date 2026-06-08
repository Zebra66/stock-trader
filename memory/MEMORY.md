# Hourly Macro Memory
*Updated 2026-06-08 14:35Z (Monday 10:35 AM ET). Market OPEN until 20:00Z (16:00 ET).*

## Repo Integrity Check — 14:35Z
- **Working tree:** Clean. `git diff HEAD -- memory/MEMORY.md memory/todo.md` = no divergence.
- **Staged changes:** Only `memory/ledger.md` and `memory/tactical_last_prices.json` (expected tactical artifacts). No source modifications.
- **Unstaged changes:** Only `memory/tactical_last_prices.json`.
- **Branch:** Up to date with `origin/main` (0 ahead, 0 behind).
- **Classification:** No breaches. Proceeding.

## Tactical Execution Summary — 14:35Z
- **Action since 13:35Z hourly:** NONE. Event detector flagged CRITICAL at 13:40Z; tactical agent correctly suspended all hourly-authorized buys (QQQ, VOO, SOXX).
- **Event detector 14:35Z:** Classification **NONE**. All symbols OK. CRITICAL event has fully resolved.
- **Open orders:** NONE.
- **Filled trades since 13:35Z:** NONE. No unauthorized trades. No concealment risk.

---

## Hourly Cycle Summary — 2026-06-08 14:35Z (Monday 10:35 AM ET)
- **Status:** Market OPEN. Second hourly run of trading day. Next tactical: 14:40Z, 14:50Z.
- **Live broker refresh:** Equity **$10,024.52** | Cash $5,750.42 | Long $4,276.60 | Gross **42.6%** | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5, VOO 1. NVDA 0, SOXX 0, AVGO 0, GOOG 0, META 0.
- **Goal check:** Portfolio **+0.25%** since inception ($10,024.52 vs $10,000). **Goal 1 (positive absolute) MET.** SPY **+3.47%** since baseline ($742.90 vs $718.01). **Goal 2 (beat SPY) FAILED by ~3.22 pp.**
- **Regime:** **Neutral** (50–70% band). Current 42.6% is below band. Deployment re-authorized now that event detector is NONE.
- **Macro input:** Wall St gains as chips rebound and Mideast tensions ease (Reuters 13:57Z). SOXX +5%+, AVGO +3%+, NVDA +2%+ today. Friday's hawkish jobs-report sell-off stabilizing. Risk-on tone intact.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $702.642 | $718.68 | $3,593.40 | 35.8% | +$80.19 | +2.28% |
| VOO | 1 | $673.925 | $683.20 | $683.20 | 6.8% | +$9.28 | +1.38% |
| Cash | — | — | — | $5,750.42 | 57.4% | — | — |
| **Equity** | — | — | — | **$10,024.52** | **100%** | — | **+0.25%** |

- **Gross long exposure:** 42.6%
- **Net exposure:** 42.6%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Mon Jun 8 (updated 10:35 AM ET)
- **1D (today):** portfolio **+0.73%** (intraday P&L ~$73 on QQQ/VOO) vs SPY **+0.73%**. **Roughly matching SPY today.** Cash drag neutralized by strong QQQ/VOO moves.
- **1W (May 29 → Jun 8):** portfolio **–1.81%** ($10,201.51 → $10,024.52) vs SPY **–1.97%** ($757.24 → $742.90). **Outperforming SPY over 1W by ~0.16 pp.**
- **2W (May 22 → Jun 8):** portfolio **+0.27%** (est. $9,990 → $10,024.52) vs SPY **–0.04%** (est. $742.60 → $742.90). **Outperforming SPY over 2W by ~0.31 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+0.25%** vs SPY **+3.47%**. Still trailing by ~3.22 pp.
- What is working: QQQ core holding (+2.28% unrealized, +1.93% today). VOO anchor (+1.38% unrealized, +0.77% today). Defensive posture preserved capital Friday.
- What is not working: Cash drag (57.4% cash). Under-deployment is the #1 reason we trail SPY. NVDA/GOOG tactical adds were poorly timed in prior cycles.
- What must change: Deploy cash TODAY into 2–3 low-risk adds. Do not wait for perfect setups. Target 55–65% gross exposure by end of day.

## Goal Check
- **Portfolio since inception:** +0.25% ($10,024.52 vs $10,000 base)
- **S&P 500 since inception:** +3.47% (SPY $742.90 vs baseline $718.01)
- **Status:** **FAILED on Goal 2** (trailing SPY by ~3.22 pp). **Goal 1 (positive absolute) MET (+0.25%).**
- **Dominant failure mode:** **Cash drag.** Portfolio chronically under-deployed (42.6% exposure). Need systematic, disciplined deployment into proven liquid names.

## Market Intel — Monday 10:35 AM ET
- **Broad market:** SPY +0.73% ($742.90), QQQ +1.93% ($718.68). S&P 500 stabilizing after Friday –2.53% crash.
- **Semiconductor sector:** Rebounding strongly. SOXX +5%+ today (now $570.80). AVGO +3%+ ($396.32). NVDA +2%+ ($208.06). Reuters headline: "Wall St gains as chips rebound, Middle East tensions ease."
- **AVGO / Broadcom:** ~$396.32. Post-earnings crash continues but bouncing. 1W –13.61%. Analysts calling it "historic buy opportunity" — too early; knife-catching risk remains.
- **Alphabet / GOOG:** ~$359.34 (Yahoo) / $358.86 (Alpaca). Down –0.89% today. Support $375 broken. No re-entry until $375 reclaim.
- **NVIDIA / NVDA:** ~$208.06. Bouncing but below $210 reclaim. CEO Huang says chip selloff is "a good thing" — contrarian bullish long-term, but price must confirm. 24h cooldown expired June 6. Re-entry only on $210 reclaim with volume.
- **META:** Banned. 1y –15.29%. No re-entry.
- **HOOD:** ~$84.79. Down –6.54% 1W. Momentum reversed. Avoid.
- **RKLB:** ~$114.49. Down –6.46% 1W. Space sector damaged. Avoid.
- **Fed / Macro:** No new Fed data today. Friday's strong jobs report still priced in. Iran deal optimism = oil easing = net positive for equities.
- **Data source:** Yahoo Finance chart API v8 (FMP disabled). Alpaca bars current within 1 minute.
- **Earnings dates:** No binary events in next 48 hours. Most Q1 reports are behind us; next season is July.

## Multi-Timeframe Returns (Yahoo Finance v8)
| Symbol | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|
| QQQ | –3.18% | +1.11% | +18.32% | +14.58% | +35.51% |
| VOO | –2.00% | +0.79% | +9.74% | +8.10% | +23.97% |
| SOXX | –0.01% | +9.91% | +68.78% | +80.78% | +157.06% |
| NVDA | –7.05% | –3.09% | +12.87% | +13.48% | +46.21% |
| AVGO | –13.61% | –7.59% | +15.99% | –3.78% | +62.67% |
| GOOG | –3.55% | –9.50% | +17.08% | +11.94% | +102.30% |
| META | –2.08% | –3.55% | –10.11% | –9.56% | –15.29% |
| HOOD | –6.54% | +10.08% | +7.98% | –37.49% | +15.52% |
| RKLB | –6.46% | +8.55% | +66.09% | +99.04% | +286.26% |
| GLD | –3.58% | –8.59% | –17.02% | +1.92% | +29.32% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold / Add 1 | Core liquid growth. 35.8%, within 45% cap. Add 1 share to reach ~43% (within cap). | 40–43% |
| VOO | Hold / Add 1 | Broad-market anchor. 6.8%, within 20% non-QQQ ETF cap. Add 1 share to reach ~13.5%. | 12–14% |
| SOXX | Conditional Add 1 | Semi ETF recovery. 1W flat after huge run. Diversified chip exposure. Add 1 if price holds above $568. | 5–6% |
| NVDA | Avoid today | Below $210 reclaim. No confirmation. CEO commentary is not price action. | 0–4% |
| AVGO | Avoid today | Post-earnings crash. Analyst "buy" calls are speculative until price finds support. | 0% |
| GOOG | Avoid | Broken support. No re-entry until $375 reclaim. | 0% |
| META | Avoid | bannedSymbols active. 1y –15%. | 0% |
| HOOD / RKLB / ARKX / EIS / QTUM / GLD / SHLD | Avoid | Weak trends, thin liquidity, or no edge. | 0% |

## Priority Actions
1. **BUY 1 VOO** — limit order at $683.50. Rationale: lowest-risk add to broad-market anchor. After add: 2 shares, ~$1,366 = 13.6% (within 20% cap).
2. **BUY 1 QQQ** — limit order at $719.00. Rationale: core growth add. After add: 6 shares, ~$4,312 = 43.0% (within 45% cap).
3. **BUY 1 SOXX** — limit order at $571.50. Rationale: semi ETF recovery exposure. After add: ~$572 = 5.7% (within 20% ETF cap). **Lowest priority** — only execute if VOO and QQQ fills are confirmed and price holds above $568.
4. **HOLD all existing positions.** No sells today. QQQ and VOO are profitable and trending higher.
5. **Cash after 3 adds:** ~$3,749. Gross exposure: ~62.5%. Neutral band target met.
6. **No NVDA/AVGO/GOOG adds today.** All remain broken or unconfirmed.
7. **Event detector:** NONE classification. CRITICAL event from 13:40Z fully resolved. Normal trading authorized.

## Macro Themes
- **Actionable now:** Chip rebound is real and broad (SOXX, AVGO, NVDA all bouncing). Reuters confirmed at 13:57Z. Semi exposure via SOXX ETF is the safest play.
- **Actionable now:** Broad market stabilizing after Friday crash. Adding VOO is low-risk deployment that reduces cash drag.
- **Worth monitoring:** Iran deal optimism continues. If deal is signed, risk-on extends. If rejected, oil spikes and equities gap down. Keep ~$3,500 cash reserve.
- **Worth monitoring:** NVDA CEO Huang calling selloff "a good thing." Contrarian bullish signal, but price must reclaim $210 before re-entry.
- **Interesting but not actionable yet:** QTUM +41.7% 3M, RKLB +66% 3M. Both thin and recently pulling back. No entry.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS working. Reuters headline confirmed chip rebound.
- **Alpaca `get-latest-price` bars** timestamps at 14:34Z, current within 2 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **VOO liquidity:** 10 trades, 105 vol at 14:34Z — thin. Use limit orders only.
- **SOXX liquidity:** 17 trades, 1,090 vol at 14:34Z — acceptable for limit orders.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** QQQ max 6 shares; VOO max 2 shares; SOXX max 3 shares.
- **Tactical agent process:** Correctly suspended buys during CRITICAL event. No unauthorized orders. No concealment risk.
- **Portfolio heat:** Minimal. No stops below entry.
- **SPY benchmark:** $742.90 (confirmed via event detector / Yahoo Finance). Since baseline +3.47%.
- **Pre-order concentration cap check:** All three proposed adds pass code-level caps.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** Verify `git status` and `git diff --cached` for unauthorized source modifications.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ capped at 6 shares; VOO at 2 shares.
- **Limit orders on thin names reduce slippage risk.**
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Adding to a position bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $15–$20 intraday on a $10K book.** Do not overreact.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **News access in workspace is limited.** Yahoo Finance RSS is the primary actionable source.
- **Tactical agent may skip runs silently.** Verify via broker order/position data.
- **Tactical agent may execute unauthorized trades AND conceal them.** Live broker reconciliation is mandatory.
- **Strong jobs data can fuel hawkish Fed fears.** Factor non-farm payrolls into posture.
- **Do not deploy cash on a Friday afternoon into a falling tape without confirmation.**
- **Benchmark price accuracy is critical.** Always verify SPY/VOO live prices before computing goal-check percentages.
- **Staged changes in git index that remove safety guards are a critical code breach.** Revert to HEAD immediately.
- **Stale-memory emergency:** If working-tree files are >24h stale while HEAD is current, restore from HEAD and classify as process breach.
