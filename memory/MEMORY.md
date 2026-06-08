# Hourly Macro Memory
*Updated 2026-06-08 16:10Z (Monday 12:10 PM ET). Market OPEN until 20:00Z (16:00 ET).*

## Tactical Execution Summary — 16:10Z
- **Action:** Placed limit buy order for QQQ 1 share @ $719.50 (Order ID: `d84575d0-889d-462c-99b9-18421eee3c24`). Status: pending_new.
- **Trigger:** QQQ price $719.99 was at/below $720.00 threshold authorized in todo.md.
- **Event detector 16:10Z:** Classification **NONE**. All symbols OK. No autonomous override applied.
- **Open orders:** QQQ limit buy 1 @ $719.50 pending.
- **No other trades:** SOXX price $577.28 did not meet $572.50 pullback threshold. VOO at cap. No sells.
- **Pre-trade checklist:** All 11 checks passed. Universe, cooldown, churn, market hours, PDT, short-sale, explicit auth, lock file, open-order, HARD_LOCK, exposure, data quality — all clear.

---

## Repo Integrity Check — 15:35Z
- **Working tree:** Clean. `git diff HEAD -- memory/MEMORY.md memory/todo.md` = no divergence.
- **Staged changes:** None.
- **Unstaged changes:** Only `memory/tactical_last_prices.json` (expected tactical artifact).
- **Branch:** Up to date with `origin/main` (0 ahead, 0 behind).
- **Classification:** No breaches. Proceeding.

## Tactical Execution Summary — 15:35Z
- **Action since 14:35Z hourly:** VOO limit buy 1 @ $683.48 FILLED at 15:29Z (Order ID: `c1b88336-190c-48c6-86be-5716a8e4c057`).
- **Event detector 15:35Z:** Classification **NONE**. All symbols OK. CRITICAL event from 13:40Z fully resolved.
- **Open orders:** NONE.
- **Filled trades since 14:35Z:** VOO buy 1 @ $683.48. No unauthorized trades. No concealment risk.
- **Ledger check:** `memory/ledger.md` reflects VOO fill at 11:31Z [tactical]. Todo.md updated at 15:30Z. No concealment risk.

---

## Hourly Cycle Summary — 2026-06-08 15:35Z (Monday 11:35 AM ET)
- **Status:** Market OPEN. Third hourly run of trading day. Next tactical: 15:40Z, 15:50Z.
- **Live broker refresh:** Equity **$10,027.14** | Cash $5,066.94 | Long $4,960.20 | Gross **49.5%** | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5, VOO 2. NVDA 0, SOXX 0, AVGO 0, GOOG 0, META 0.
- **Goal check:** Portfolio **+0.27%** since inception ($10,027.14 vs $10,000). **Goal 1 (positive absolute) MET.** SPY **+3.36%** since baseline ($742.16 vs $718.01). **Goal 2 (beat SPY) FAILED by ~3.09 pp.**
- **Regime:** **OFFENSIVE CATCH-UP** (60–90% gross target). Cash drag is the dominant failure mode. Market is orderly with Monday rebound intact. Risk-off tape is NOT present.
- **Macro input:** Chip rebound broad and durable (SOXX +5%+, AVGO +3%+, NVDA +2%+). Reuters 13:57Z: "Wall St gains as chips rebound, Middle East tensions ease." Iran/Israel strikes still active but market looking past headline risk. Friday's hawkish jobs-report sell-off stabilizing.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $702.642 | $719.09 | $3,595.45 | 35.8% | +$82.24 | +2.34% |
| VOO | 2 | $678.7025 | $682.41 | $1,364.82 | 13.6% | +$7.42 | +0.55% |
| Cash | — | — | — | $5,066.94 | 50.5% | — | — |
| **Equity** | — | — | — | **$10,027.14** | **100%** | — | **+0.27%** |

- **Gross long exposure:** 49.5%
- **Net exposure:** 49.5%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Mon Jun 8 (updated 11:35 AM ET)
- **1D (today):** portfolio **+0.79%** (intraday P&L ~$79 on QQQ/VOO) vs SPY **+0.63%**. **Outperforming SPY today by ~0.16 pp.**
- **1W (May 29 → Jun 8):** portfolio **–1.71%** ($10,201.51 → $10,027.14) vs SPY **–1.99%** ($757.24 → $742.16). **Outperforming SPY over 1W by ~0.28 pp.**
- **2W (May 22 → Jun 8):** portfolio **+0.37%** (est. $9,990 → $10,027.14) vs SPY **–0.06%** (est. $742.60 → $742.16). **Outperforming SPY over 2W by ~0.43 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+0.27%** vs SPY **+3.36%**. Still trailing by ~3.09 pp.
- What is working: QQQ core holding (+2.34% unrealized, +1.99% today). VOO anchor (+0.55% unrealized, +0.65% today). Defensive posture preserved capital Friday; rebound participation is working.
- What is not working: Cash drag (50.5% cash). Under-deployment is the #1 reason we trail SPY. NVDA/GOOG tactical adds in prior cycles were poorly timed.
- What must change: Deploy cash TODAY into proven names. Target 56–62% gross exposure by end of session. Do not wait for perfect setups.

## Goal Check
- **Portfolio since inception:** +0.27% ($10,027.14 vs $10,000 base)
- **S&P 500 since inception:** +3.36% (SPY $742.16 vs baseline $718.01)
- **Status:** **FAILED on Goal 2** (trailing SPY by ~3.09 pp). **Goal 1 (positive absolute) MET (+0.27%).**
- **Dominant failure mode:** **Cash drag.** Portfolio chronically under-deployed (49.5% exposure vs 60–90% offensive target). Need systematic, disciplined deployment into liquid, confirmed-trend names.
- **Posture classification:** **Offensive catch-up.** Target gross-exposure band: **60–90%**. Current 49.5% is 10.5 pp below the lower bound.

## Market Intel — Monday 11:35 AM ET
- **Broad market:** SPY +0.63% ($742.16), QQQ +1.99% ($719.09). S&P 500 stabilizing after Friday –2.53% crash.
- **Semiconductor sector:** Rebounding strongly. SOXX +5%+ today (now $575.30, up from ~$543 prior close). AVGO +3%+ ($397.22). NVDA +2%+ ($207.43). Yahoo headline: "Tech stocks today: Chip stocks rebound after Nvidia's Jensen Huang says investors should be 'very happy'."
- **AVGO / Broadcom:** ~$397.22. Post-earnings crash continues but bouncing. 1W –13.55%. Analyst "buy" calls are speculative until price finds support above $400.
- **Alphabet / GOOG:** ~$359.80. Down –0.89% today. Support $375 broken. No re-entry until $375 reclaim with volume.
- **NVIDIA / NVDA:** ~$207.43. Bouncing but below $210 reclaim. CEO commentary is contrarian bullish long-term, but price must confirm. 24h cooldown expired June 6. Re-entry only on $210 reclaim with volume.
- **META:** Banned. 1y –15.29%. No re-entry.
- **HOOD:** ~$84.59. Down –6.78% 1W. Momentum reversed. Avoid.
- **RKLB:** ~$114.29. Down –6.38% 1W. Space sector damaged. Avoid.
- **Fed / Macro:** No new Fed data today. Friday's strong jobs report still priced in. Iran deal optimism = oil easing = net positive for equities, but strikes continue — monitor headline risk.
- **Earnings dates:** No binary earnings events in next 48 hours for held positions or near-term candidates. Most Q1 reports behind us; next season is July. Earnings APIs returned no actionable dates today; proceed with known information.
- **Data source:** Yahoo Finance chart API v8 (FMP disabled). Alpaca bars current within 1 minute.

## Multi-Timeframe Returns (Yahoo Finance v8)
| Symbol | 1W | 1M | 3M |
|---|---|---|---|
| QQQ | –3.18% | +3.48% | +18.32% |
| VOO | –2.14% | +1.46% | +9.39% |
| SOXX | +0.66% | +16.93% | +71.16% |
| NVDA | –7.50% | –1.87% | +13.63% |
| AVGO | –13.55% | –3.62% | +15.01% |
| GOOG | –3.43% | –8.98% | +17.58% |
| META | –2.23% | –4.82% | –9.32% |
| HOOD | –6.78% | +10.88% | +6.59% |
| RKLB | –6.38% | +45.82% | +60.30% |
| GLD | –3.32% | –7.90% | –15.86% |
| QTUM | –2.65% | +12.34% | +41.92% |
| ARKX | –5.25% | +4.95% | +8.00% |
| SHLD | –3.81% | –4.23% | –19.10% |
| EIS | –4.91% | –5.61% | +2.81% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **Add 1** | Core liquid growth. 35.8%, within 45% cap. Add 1 share on pullback to reach ~43% (within cap). | 40–43% |
| VOO | **Hold 2** | Broad-market anchor. 13.6%, within 20% non-QQQ ETF cap. No further adds (would breach 20% cap at 3 shares). | 12–14% |
| SOXX | **Conditional Add 1** | Semi ETF recovery. Extended after +$14 intraday gap-up ($565 → $579). Do NOT chase. Add ONLY on pullback to $572.50 or below. | 5–6% |
| NVDA | Avoid today | Below $210 reclaim. No confirmation. | 0–4% |
| AVGO | Avoid today | Post-earnings crash. Bounce is suspect. | 0% |
| GOOG | Avoid | Broken support. No re-entry until $375 reclaim. | 0% |
| META | Avoid | bannedSymbols active. 1y –15%. | 0% |
| RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends, thin liquidity, or no edge. | 0% |

## Priority Actions
1. **BUY 1 QQQ** — limit order at $719.50. Rationale: core growth add on intraday pullback from $722.36 high. After add: 6 shares, ~$4,314 = 43.0% (within 45% cap).
2. **BUY 1 SOXX** — ONLY if price drops to $572.50 or below with limit $572.50. Rationale: avoid chasing +5.8% gap-up; wait for pullback entry. After add: ~$572 = 5.7% (within 20% ETF cap). **Lowest priority.**
3. **HOLD VOO 2** — no further adds (concentration cap at 20%).
4. **Cash after QQQ add:** ~$4,352 (~43.4%). Gross exposure: ~56.6%.
5. **Cash after QQQ+SOXX adds:** ~$3,780 (~37.7%). Gross exposure: ~62.3%.
6. **No NVDA/AVGO/GOOG adds today.** All remain broken or unconfirmed.
7. **Event detector:** NONE classification. Normal trading authorized.

## Macro Themes
- **Actionable now:** Chip rebound is real and broad (SOXX, AVGO, NVDA all bouncing). Yahoo/Reuters confirmed at 13:57Z. Semi exposure via SOXX ETF is the safest play, but entry must be disciplined — do not chase gap-ups.
- **Actionable now:** Broad market stabilizing after Friday crash. VOO anchor is working; no need to add more (cap bound).
- **Worth monitoring:** Iran/Israel strikes continue despite "tensions ease" headline. If escalation intensifies, risk-off could return quickly. Keep ~$3,500 cash reserve.
- **Worth monitoring:** NVDA CEO Huang calling selloff "a good thing." Contrarian bullish signal, but price must reclaim $210 before re-entry.
- **Interesting but not actionable yet:** QTUM +41.92% 3M, RKLB +60.30% 3M. Both thin and recently pulling back. No entry.
- **Not actionable:** SpaceX IPO news ($1.8T valuation). Not in our universe.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback. Earnings calendar unavailable from all attempted sources.
- **News access:** Yahoo Finance RSS working. Reuters headline confirmed chip rebound.
- **Alpaca `get-latest-price` bars** timestamps at 15:34Z, current within 2 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **VOO liquidity:** 6 trades, 244 vol at 15:31Z — thin. Use limit orders only.
- **SOXX liquidity:** 11 trades, 1,021 vol at 15:34Z — acceptable for limit orders.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** QQQ max 6 shares; VOO max 2 shares; SOXX max 3 shares.
- **Tactical agent process:** Correctly executed VOO fill. No unauthorized orders. No concealment risk.
- **Portfolio heat:** Minimal. No stops below entry.
- **SPY benchmark:** $742.16 (Yahoo Finance). Since baseline +3.36%.
- **Pre-order concentration cap check:** QQQ add 1 passes (43.0% < 45%). VOO add would fail (20.4% > 20%). SOXX add 1 passes (5.7% < 20%).
- **Rapid-exposure-drift guardrail:** Gross exposure moved from 42.6% (14:35Z) to 49.5% (15:35Z) via authorized VOO add. +6.9 pp change, fully authorized. No drift classification.

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
- **Gap-up opens on macro catalysts are poor entry points.** Limit orders on pullbacks preserve edge.
- **Buying the first intraday dip in a profit-taking session without confirmed support often results in immediate unrealized loss.** Wait for a clear reclaim or volume-confirmed bounce before deploying fresh capital.
