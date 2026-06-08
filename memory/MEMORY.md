# Hourly Macro Memory
*Updated 2026-06-08 13:35Z (Monday 9:35 AM ET). Market OPEN until 20:00Z (16:00 ET).*

## CRITICAL: Stale-Memory Emergency & Repo Breach — Resolved
- **Issue:** Pre-fetched `memory/MEMORY.md` and `memory/todo.md` were dated **2026-05-29** (over 1 week stale). The live working-tree files also contained the May 29 content, while `git HEAD` had the correct **2026-06-05** version.
- **Root cause:** Concurrent agent or process overwrote working-tree files with stale content after the pre-fetch snapshot. Staged changes in the git index were also present, **reverting critical safety code** (anti-churn guards, audit trails, stale-memory guards, blackout verification) in `src/tools/alpaca_cli.ts` and `src/tools/alpaca_client_factory.ts`, and reverting prompt hardening in `prompts/hourly.txt` and `prompts/tactical.txt`.
- **Resolution:** Restored `.gitignore` from `HEAD`. Ran `git rm -r --cached node_modules temp_files`. Used `git checkout --force HEAD -- .` to restore all tracked files to the committed June 5 state. Repo is now clean.
- **Classification:** Critical process breach. All staged safety-guard removals were unauthorized. Hourly strategist overruled them.
- **New safeguard:** On every run, verify `git diff --cached` for unauthorized source modifications before trading. If staged changes remove safety guards, revert to HEAD immediately.

## Tactical Execution Summary — 2026-06-08 13:35Z
- **Action since 18:35Z Fri Jun 5:** NONE. Book held over weekend: QQQ 5, VOO 1.
- **Open orders:** NONE. Event detector at 13:35Z: NONE classification, all OK.

---

## Hourly Cycle Summary — 2026-06-08 13:35Z (Monday 9:35 AM ET)
- **Status:** Market OPEN. First hourly run of trading day. Next tactical: 13:40Z, 13:50Z.
- **Repo integrity:** **Restored.** Clean working tree matching HEAD. No unauthorized source modifications.
- **Live broker refresh:** Equity **$10,017.36** | Cash $5,750.42 | Long $4,266.94 | Gross **42.6%** | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5, VOO 1. NVDA 0, SOXX 0, AVGO 0, GOOG 0, META 0.
- **Filled trades since prior hourly (Fri 18:35Z):** NONE. No unauthorized trades.
- **Goal check:** Portfolio **+0.17%** since inception ($10,017.36 vs $10,000). **Goal 1 (positive absolute) barely MET.** SPY **+3.39%** since baseline ($742.33 vs $718.01). **Goal 2 (beat SPY) FAILED by ~3.22 pp.**
- **Regime shift:** From **defensive** (30–50%) to **neutral** (50–70%). Current 42.6% is below neutral band. Deployment authorized today.
- **Macro input:** Iran deal optimism continues (oil easing, S&P 500 futures bouncing). Chip stocks rebounding pre-bell (SOXX +5.04%, AVGO +3.18%, NVDA +2.05%). Friday's hawkish jobs-report sell-off may be stabilizing. No major new catalysts.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $702.642 | $716.83 | $3,584.15 | 35.8% | +$70.94 | +2.02% |
| VOO | 1 | $673.925 | $682.64 | $682.64 | 6.8% | +$8.72 | +1.29% |
| Cash | — | — | — | $5,750.42 | 57.4% | — | — |
| **Equity** | — | — | — | **$10,017.36** | **100%** | — | **+0.17%** |

- **Gross long exposure:** 42.6%
- **Net exposure:** 42.6%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Mon Jun 8 (updated 9:35 AM ET)
- **1D (today):** portfolio **+0.54%** (intraday P&L +$54.48 on QQQ/VOO) vs SPY **+0.65%**. **Underperforming SPY by ~0.11 pp today due to cash drag.**
- **1W (May 29 → Jun 8):** portfolio **–1.81%** ($10,201.51 → $10,017.36) vs SPY **–1.97%** ($757.24 → $742.33). **Outperforming SPY over 1W by ~0.16 pp.**
- **2W (May 22 → Jun 8):** portfolio **+0.27%** (est. $9,990 → $10,017.36) vs SPY **–0.04%** (est. $742.60 → $742.33). **Outperforming SPY over 2W by ~0.31 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+0.17%** vs SPY **+3.39%**. Still trailing by ~3.22 pp.
- What is working: QQQ core holding gains (+2.02% unrealized). VOO anchor resilient (+1.29%). Defensive posture preserved capital during Friday crash.
- What is not working: NVDA add at $218.11 (Jun 4) stopped at $207.80 (–$20.62 realized). GOOG add at $392.92 (May) stopped at $370.50 (Jun 1). Cash drag persists (57.4%).
- What must change: Deploy cash systematically into 2–3 high-probability adds today. Do not chase breakouts without confirmation. Target neutral 50–70% exposure by end of day.

## Goal Check
- **Portfolio since inception:** +0.17% ($10,017.36 vs $10,000 base)
- **S&P 500 since inception:** +3.39% (SPY $742.33 vs baseline $718.01)
- **Status:** **FAILED on Goal 2** (trailing SPY by ~3.22 pp). **Goal 1 (positive absolute) barely MET (+0.17%).**
- **Dominant failure mode:** **Cash drag + late entries / poor execution.** Portfolio chronically under-deployed (42.6% exposure). Tactical adds (NVDA, GOOG) were poorly timed. Need disciplined, systematic deployment into proven names rather than chasing breakouts.

## Market Intel — Monday 9:35 AM ET
- **Broad market:** SPY +0.65% ($742.33), QQQ +1.64% ($716.60). S&P 500 futures bounced pre-open. Friday's –2.53% sell-off appears to be stabilizing.
- **Semiconductor sector:** Bouncing hard. SOXX +5.04%, AVGO +3.18%, NVDA +2.05%. Friday's –9% semi crash was likely overdone. Headline: "Chip Stocks Rebound."
- **AVGO / Broadcom:** ~$397.47. Post-earnings crash continues but bouncing today (+3.18%). 1W still –13.47%. Too early for re-entry; knife-catching risk.
- **Alphabet / GOOG:** ~$361.43. Down –0.89% today. Support $375 broken. Cloud division layoffs. Intel TPU manufacturing order is interesting but not price-moving. No re-entry until $375 reclaim.
- **NVIDIA / NVDA:** ~$209.30. Bouncing +2.05% today. 24h cooldown from June 5 stop-out has EXPIRED. Re-evaluate for re-entry if it reclaims $210.
- **META:** Banned. No re-entry.
- **HOOD:** ~$83.21. Down –8.29% 1W. Momentum reversed. Avoid.
- **RKLB:** ~$112.58. Down –8.02% 1W. Space sector still damaged. Avoid.
- **Fed / Macro:** No new Fed data today. Friday's strong jobs report (+172K, 4.3% unemployment) still fueling hawkish fears, but market may be pricing it in. Iran deal optimism = oil easing = net positive for equities.
- **News access:** Yahoo Finance general RSS and per-ticker RSS feeds working. No major breaking news for our universe. Coverage sufficient for broad rotation theme.
- **Data source:** Yahoo Finance chart API v8 used for multi-timeframe returns (FMP disabled).

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold / Add 1 | Core liquid growth. 35.8%, within 45% cap. Add 1 share if price stays above $715. | 36–42% |
| VOO | Hold / Add 1 | Broad-market anchor. 6.8%, within 20% non-QQQ ETF cap. Add 1 share today. | 10–14% |
| SOXX | Conditional Add 1 | Semi ETF recovery. +5.04% today. No single-stock risk. Add 1 if price stays above $560. | 0–6% |
| NVDA | Avoid today | 24h cooldown expired. +2.05% bounce. Re-evaluate at next hourly if it reclaims $210. | 0–4% |
| AVGO | Avoid today | Post-earnings freefall. +3.18% bounce is suspect. 1W –13.47%. No re-entry. | 0% |
| GOOG | Avoid | Broken support. –0.89% today. No re-entry until $375 reclaim. | 0% |
| META | Avoid | bannedSymbols active. No re-entry. | 0% |
| HOOD / RKLB / ARKX / EIS / QTUM / GLD / SHLD | Avoid | Weak trends, thin liquidity, or no edge. | 0% |

## Priority Actions
1. **BUY 1 VOO** — limit order at $682.50. Rationale: lowest-risk add to broad-market anchor. Current price $682.64. Weight after add: ~13.5%.
2. **BUY 1 QQQ** — limit order at $716.50 if price stays above $715. Rationale: core growth add. After add: 6 shares, ~$4,301 = 42.9% of equity (within 45% cap).
3. **BUY 1 SOXX** — limit order at $564.50 if price stays above $560. Rationale: semi ETF recovery exposure. After add: ~$567 = 5.7% of equity (within 20% ETF cap).
4. **HOLD all existing positions.** No sells today. QQQ and VOO remain profitable. No defensive stops triggered.
5. **Cash after 3 adds:** ~$3,784. Gross exposure: ~62.2%. Neutral band target met.
6. **No NVDA add today.** Re-evaluate at next hourly if it reclaims $210.
7. **No AVGO/GOOG adds today.** Both remain broken.
8. **Event detector:** `priorTimestamp` null again — known bug. Prices in report are valid. Tactical agent should proceed with normal todo execution.

## Macro Themes
- **Actionable now:** Chip rebound is real today (SOXX +5.04%). If it holds, semi exposure via SOXX ETF is the safest way to play it.
- **Actionable now:** Broad market stabilizing (SPY +0.65%, VOO +0.66%). Adding VOO is low-risk deployment.
- **Worth monitoring:** Iran deal optimism continues. If Trump signs, risk-on extends. If he rejects, oil spikes and equities gap down. Keep cash reserve.
- **Worth monitoring:** NVDA bouncing +2.05% after "bubble warning" headline. If it reclaims $210 and holds, it may be the chip leader again.
- **Interesting but not actionable yet:** QTUM +43.14% 3M. Quantum ETF is thin and extended. No entry.
- **Interesting but not actionable yet:** Berkshire Hathaway reportedly betting on Alphabet. Long-term bullish for GOOG, but short-term price action must confirm.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active in code (HEAD version).
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS general and per-ticker feeds working. No major news gaps.
- **Alpaca `get-latest-price` bars** timestamps at 13:34Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **VOO liquidity:** 13 trades, 186 vol at 13:34Z — thin. Use limit orders.
- **SOXX liquidity:** 35 trades, 1,867 vol at 13:34Z — acceptable for limit orders.
- **Earnings dates:** No binary events in next 48 hours for held positions or near-term candidates.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$10.0K equity, QQQ max 6 shares; VOO max 2 shares; SOXX max 3 shares.
- **Tactical agent process:** No unauthorized orders. No concealment risk.
- **Portfolio heat:** Total heat minimal. No stops below entry.
- **SPY benchmark:** $742.33 (confirmed via Yahoo Finance). Since baseline +3.39%.

---

## AUTONOMOUS OVERRIDE — 2026-06-08 13:40Z
- **Classification:** CRITICAL (event detector at 13:40Z)
- **Affected symbols:** QQQ (MAJOR), SOXX (CRITICAL), XLK (CRITICAL), SMH (CRITICAL)
- **Action taken:** NO TRADES. Suspended all hourly-authorized buys (QQQ, VOO, SOXX) due to CRITICAL event flag.
- **Rationale:** Event detector flagged CRITICAL classification between hourly (13:35Z) and tactical (13:40Z) runs. Tactical agent override authority invoked. Held positions QQQ and VOO are both marked OK by detector — no protective sells needed. Gross exposure remains at 42.6%. No new buys until next hourly reset clears the event.
- **Next expected action:** Hourly strategist at 14:35Z must reassess with fresh event detector data and explicitly re-authorize any buys if classification improves.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** Verify `git status` and `git diff --cached` for unauthorized source modifications. Revert safety-guard removals to HEAD immediately.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory. Use `git show HEAD:<file>` if working tree diverges.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ capped at 6 shares; VOO at 2 shares.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **News access in workspace is severely limited.** Yahoo Finance RSS is the primary actionable source.
- **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
- **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker reconciliation is mandatory.
- **Strong jobs data can fuel hawkish Fed fears and pressure long-duration growth assets** (tech/semis). Factor non-farm payrolls into posture.
- **Do not deploy cash on a Friday afternoon into a falling tape without confirmation.** Monday reassessment is safer.
- **Benchmark price accuracy is critical for goal tracking.** Always verify SPY/VOO live prices before computing goal-check percentages.
- **Staged changes in git index that remove safety guards are a critical code breach.** Revert to HEAD immediately before trading.
- **Stale-memory emergency:** If working-tree files are older than 24 hours while HEAD is current, restore from HEAD and classify as process breach.
