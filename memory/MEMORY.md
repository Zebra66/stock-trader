# Hourly Macro Memory
*Updated 2026-06-08 17:20Z (Monday 1:20 PM ET). Market OPEN until 20:00Z (16:00 ET).*

## Hourly Cycle Summary — 2026-06-08 16:35Z (Monday 12:35 PM ET)
- **Status:** Market OPEN. Fourth hourly run of trading day. Next tactical: 16:40Z, 16:50Z. Next hourly: 17:35Z (1:35 PM ET).
- **Live broker refresh:** Equity **$10,026.94** | Cash $4,347.47 | Long $5,679.47 | Gross **56.6%** | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, VOO 2. NVDA 0, SOXX 0, AVGO 0, GOOG 0, META 0.
- **Goal check:** Portfolio **+0.27%** since inception ($10,026.94 vs $10,000). **Goal 1 (positive absolute) MET.** SPY **+3.34%** since baseline ($742.02 vs $718.01). **Goal 2 (beat SPY) FAILED by ~3.07 pp.**
- **Regime:** **OFFENSIVE CATCH-UP** (60–90% gross target). Cash drag remains the dominant failure mode. Market is orderly with Monday rebound intact. No risk-off tape.
- **Since last hourly (15:35Z):** QQQ limit buy 1 @ $719.50 **FILLED** at 16:29Z. No other trades. Gross exposure rose from 49.5% to 56.6% via authorized QQQ add. No unauthorized exposure drift.
- **Event detector 16:35Z:** Classification **NONE**. All symbols OK. No autonomous override.
- **News update:** NVDA CEO Jensen Huang says investors should be "very happy" — Yahoo Finance 12:16Z. BofA resets Nvidia forecast after CFO meeting (TheStreet, Sun). Semiconductor rebound broad and durable per multiple sources.
- **Analyst sub-agent:** Not invoked. Decisions made with direct data and high confidence.

---

## Tactical Execution Summary — 17:20Z
- **Action:** Discovered SOXX limit buy 1 @ $573.50 **FILLED** at avg price $573.11 (Order ID: `8165d6b7-1c01-4dc0-8cc8-526051e6afb6`). No order placed this cycle.
- **Trigger:** Order placed at 17:10Z tactical cycle; filled between 17:10Z and 17:20Z. Price pulled back to $573.11 or lower, triggering fill.
- **Event detector 17:20Z:** Classification **NONE**. All symbols OK. No autonomous override applied.
- **Open orders:** NONE.
- **No other trades:** NVDA $207.86 did not meet $210.50 threshold. QQQ at cap. VOO at cap. No sells.
- **Pre-trade checklist:** No new orders to place. All conditions evaluated.
- **Post-fill state:** QQQ 6 shares, VOO 2 shares, SOXX 1 share. Gross exposure ~62.3%. Cash $3,774. Portfolio equity $10,011.60.
- **Same-day round-trip guard:** SOXX share bought today — **cannot sell SOXX today.** QQQ share bought today at 16:29Z — **cannot sell QQQ today.** VOO bought today at 15:29Z — **cannot sell VOO today.**
- **New position heat:** SOXX unrealized –0.13% ($572.36 vs $573.11). Stop $565.00. Risk ~$8.50 = 0.08% equity.

---

## Tactical Execution Summary — 17:10Z
- **Action:** Placed limit buy order for SOXX 1 share @ $573.50 (Order ID: `8165d6b7-1c01-4dc0-8cc8-526051e6afb6`). Status: pending_new. Day order expires 20:00Z.
- **Trigger:** SOXX price $573.60 was above $573.50 threshold but within $0.10 — limit order placed to catch pullback. Todo.md explicitly authorized at 16:35Z hourly.
- **Event detector 17:10Z:** Classification **MINOR** (SOXX -0.61%, SMH -0.52%). Held positions OK. No autonomous override applied.
- **Open orders:** SOXX limit buy 1 @ $573.50 pending.
- **No other trades:** NVDA $208.27 did not meet $210 reclaim threshold. VOO at cap. QQQ at cap. No sells.
- **Pre-trade checklist:** All 11 checks passed. Universe, cooldown, churn, market hours, PDT, short-sale, explicit auth, lock file, open-order, HARD_LOCK, exposure, data quality — all clear.
- **Post-order state:** QQQ 6 shares, VOO 2 shares. Gross exposure 56.6%. Cash $4,347. SOXX order pending.

## Tactical Execution Summary — 16:30Z
- **Action:** QQQ limit buy 1 @ $719.50 **FILLED** at 16:29Z (Order ID: `d84575d0-889d-462c-99b9-18421eee3c24`). Filled avg price $719.47.
- **Trigger:** Prior tactical cycle (16:10Z) placed order on intraday pullback authorization. Discovered filled at 16:30Z cycle.
- **Event detector 16:30Z:** Classification **MINOR** (SOXX -0.62%, SMH -0.54%). Held positions OK. No autonomous override applied.
- **Open orders:** NONE.
- **No other trades:** SOXX $575.34 did not meet $572.50 pullback threshold. VOO at cap. No sells.
- **Post-fill state:** QQQ 6 shares, VOO 2 shares. Gross exposure 56.6%. Cash $4,347.
- **Same-day round-trip guard:** QQQ share bought today at 16:29Z — **cannot sell QQQ today.** VOO bought today at 15:29Z — **cannot sell VOO today.**
- **Pre-trade checklist:** No new orders to place. All conditions evaluated.

## Tactical Execution Summary — 16:10Z
- **Action:** Placed limit buy order for QQQ 1 share @ $719.50 (Order ID: `d84575d0-889d-462c-99b9-18421eee3c24`). Status: pending_new.
- **Trigger:** QQQ price $719.99 was at/below $720.00 threshold authorized in todo.md.
- **Event detector 16:10Z:** Classification **NONE**. All symbols OK. No autonomous override applied.
- **Open orders:** QQQ limit buy 1 @ $719.50 pending.
- **No other trades:** SOXX price $577.28 did not meet $572.50 pullback threshold. VOO at cap. No sells.
- **Pre-trade checklist:** All 11 checks passed. Universe, cooldown, churn, market hours, PDT, short-sale, explicit auth, lock file, open-order, HARD_LOCK, exposure, data quality — all clear.

## Tactical Execution Summary — 15:35Z
- **Action since 14:35Z hourly:** VOO limit buy 1 @ $683.48 FILLED at 15:29Z (Order ID: `c1b88336-190c-48c6-86be-5716a8e4c057`).
- **Event detector 15:35Z:** Classification **NONE**. All symbols OK. CRITICAL event from 13:40Z fully resolved.
- **Open orders:** NONE.
- **Filled trades since 14:35Z:** VOO buy 1 @ $683.48. No unauthorized trades. No concealment risk.
- **Ledger check:** `memory/ledger.md` reflects VOO fill at 11:31Z [tactical]. Todo.md updated at 15:30Z. No concealment risk.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $705.4467 | $717.25 | $4,303.50 | 43.0% | +$70.82 | +1.67% |
| VOO | 2 | $678.7025 | $680.69 | $1,361.38 | 13.6% | +$3.98 | +0.29% |
| SOXX | 1 | $573.11 | $572.36 | $572.36 | 5.7% | –$0.75 | –0.13% |
| Cash | — | — | — | $3,774.36 | 37.7% | — | — |
| **Equity** | — | — | — | **$10,011.60** | **100%** | — | **+0.12%** |

- **Gross long exposure:** 62.3%
- **Net exposure:** 62.3%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Mon Jun 8 (updated 12:35 PM ET)
- **1D (today):** portfolio **+0.74%** ($9,953.72 → $10,026.94) vs SPY **+0.61%** (est. $737.51 → $742.02). **Outperforming SPY today by ~0.13 pp.**
- **1W (May 29 → Jun 8):** portfolio **–1.71%** ($10,201.51 → $10,026.94) vs SPY **–2.01%** ($757.24 → $742.02). **Outperforming SPY over 1W by ~0.30 pp.**
- **2W (May 22 → Jun 8):** portfolio **+0.37%** (est. $9,990 → $10,026.94) vs SPY **–0.08%** (est. $742.60 → $742.02). **Outperforming SPY over 2W by ~0.45 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+0.27%** vs SPY **+3.34%**. Still trailing by ~3.07 pp.
- What is working: QQQ core holding (+1.94% unrealized). VOO anchor (+0.52% unrealized). Outperforming SPY on 1D, 1W, and 2W windows.
- What is not working: Cash drag (43.4% cash). Under-deployment is the #1 reason we trail SPY on an absolute basis.
- What must change: Deploy cash THIS AFTERNOON into confirmed-trend names. We cannot afford another session at <60% gross exposure while SPY rallies.

## Goal Check
- **Portfolio since inception:** +0.27% ($10,026.94 vs $10,000 base)
- **S&P 500 since inception:** +3.34% (SPY $742.02 vs baseline $718.01)
- **Status:** **FAILED on Goal 2** (trailing SPY by ~3.07 pp). **Goal 1 (positive absolute) MET (+0.27%).**
- **Dominant failure mode:** **Cash drag.** Portfolio under-deployed (56.6% exposure vs 60–90% offensive target). QQQ and VOO are at concentration caps. Fresh capital must go into SOXX and/or NVDA on confirmed setups.
- **Posture classification:** **Offensive catch-up.** Target gross-exposure band: **60–90%**. Current 56.6% is 3.4 pp below the lower bound.

## Market Intel — Monday 12:35 PM ET
- **Broad market:** SPY +0.61% ($742.02), QQQ +2.0% ($719.16). S&P 500 stabilizing after Friday –2.53% crash.
- **Semiconductor sector:** Rebounding broadly. SOXX +5.9% today ($575.14, up from ~$543 prior close). AVGO +3.1% ($395.40). NVDA +2.2% ($208.68). Chip rebound confirmed by Yahoo/Reuters 13:57Z and Google News 16:10Z.
- **AVGO / Broadcom:** ~$395.40. Post-earnings crash continues but bouncing. 1W –14.04%. Cathie Wood bought $8.7M of tumbling semi stock (likely AVGO). Still avoid until support above $400 confirmed.
- **Alphabet / GOOG:** ~$359.66. Down –0.89% today. Support $375 broken. No re-entry until $375 reclaim with volume.
- **NVIDIA / NVDA:** ~$208.68. Bouncing but below $210 reclaim. CEO commentary is contrarian bullish long-term, but price must confirm. 24h cooldown expired June 6. Re-entry only on $210 reclaim with volume.
- **META:** Banned. 1y –15.25%. No re-entry.
- **HOOD:** ~$85.20. Down –6.10% 1W. Momentum reversed. Avoid.
- **RKLB:** ~$113.93. Down –6.91% 1W. Space sector damaged. Avoid.
- **Fed / Macro:** No new Fed data today. Friday's strong jobs report still priced in. Iran deal optimism = oil easing = net positive for equities, but strikes continue — monitor headline risk.
- **Earnings dates:** No binary earnings events in next 48 hours for held positions or near-term candidates. Most Q1 reports behind us; next season is July. Earnings APIs (Yahoo v10) returned no dates today.
- **Data source:** Yahoo Finance chart API v8 (FMP disabled). Alpaca bars current within 1 minute.

## Multi-Timeframe Returns (Yahoo Finance v8)
| Symbol | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|
| QQQ | –3.13% | +3.53% | +18.16% | +15.03% | +35.57% |
| VOO | –2.13% | +1.47% | +8.87% | +8.24% | +23.80% |
| SOXX | +0.72% | +17.00% | +70.55% | +86.18% | +158.95% |
| NVDA | –6.99% | –1.33% | +13.82% | +14.40% | +46.31% |
| AVGO | –14.04% | –4.16% | +18.82% | +1.32% | +61.86% |
| GOOG | –3.47% | –9.02% | +19.52% | +11.66% | +102.48% |
| META | –2.04% | –4.64% | –10.96% | –12.65% | –15.25% |
| HOOD | –6.10% | +11.69% | +5.76% | –35.43% | +16.08% |
| RKLB | –6.91% | +44.99% | +62.76% | +132.26% | +284.40% |
| GLD | –3.03% | –7.62% | –14.45% | +3.20% | +30.06% |
| QTUM | –2.73% | +12.25% | +41.72% | +39.91% | +77.77% |
| ARKX | –5.18% | +5.02% | +9.80% | +21.44% | +54.36% |
| SHLD | –3.89% | –4.31% | –15.91% | +0.38% | +9.04% |
| EIS | –4.96% | –5.67% | +1.18% | +18.37% | +47.67% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **Hold 6** | Core liquid growth. 43.0%, at 45% cap. Cannot add without breaching cap (7 shares = 50.2%). | 40–43% |
| VOO | **Hold 2** | Broad-market anchor. 13.6%, at 20% non-QQQ ETF cap. Cannot add (3 shares = 20.4%). | 12–14% |
| SOXX | **Add 1** | Strongest trend in universe (+70.55% 3M). Semi ETF recovery. Wait for modest pullback from +5.9% gap-up. | 5–6% |
| NVDA | **Conditional Add 1** | Sector bellwether. CEO commentary bullish. Re-entry ONLY on $210 reclaim with volume (breakout confirmation). | 0–4% |
| AVGO | Avoid | Post-earnings crash. Bounce is suspect. | 0% |
| GOOG | Avoid | Broken support. No re-entry until $375 reclaim. | 0% |
| META | Avoid | bannedSymbols active. 1y –15%. | 0% |
| RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends, thin liquidity, or no edge. | 0% |

## Priority Actions
1. **BUY 1 SOXX** — limit order at $573.50. Rationale: strongest 3M trend in universe; modest pullback entry after +5.9% gap-up avoids chasing. After fill: gross exposure ~62.4% (within 60–90% target). Pre-computed cap: 1 share = 5.7% < 20% ETF cap.
2. **BUY 1 NVDA** — limit order at $210.50 ONLY if price reclaims $210 with volume. Rationale: bellwether breakout confirmation, not anticipation. After fill (with SOXX): gross exposure ~64.5%. Pre-computed cap: 1 share = 2.1% < 15% single-stock cap.
3. **HOLD QQQ 6** — at 45% concentration cap. Same-day round-trip protection active (share bought today at 16:29Z).
4. **HOLD VOO 2** — at 20% non-QQQ ETF cap. Same-day round-trip protection active (share bought today at 15:29Z).
5. **If neither SOXX nor NVDA fills by 15:55Z:** Cancel open orders before close to avoid overnight limit-order risk. Reassess at 17:35Z hourly.
6. **No AVGO/GOOG/RKLB/HOOD/SHLD/ARKX/EIS/QTUM/GLD buys today.** All lack confirmation or edge.
7. **Event detector:** NONE classification. Normal trading authorized.

## Macro Themes
- **Actionable now:** Chip rebound is real and broad (SOXX +5.9%, AVGO +3.1%, NVDA +2.2%). Semi exposure via SOXX ETF is the safest play. Entry must be disciplined — use limit orders on pullbacks, not market orders into gap-up.
- **Actionable now:** Broad market stabilizing after Friday crash. VOO anchor is working; cap-bound prevents further adds.
- **Worth monitoring:** Iran/Israel strikes continue despite "tensions ease" headline. If escalation intensifies, risk-off could return quickly. Keep ~$3,500 cash reserve.
- **Worth monitoring:** NVDA CEO Huang calling selloff "a good thing." Contrarian bullish signal, but price must reclaim $210 before re-entry. BofA reset forecast after CFO meeting — watch for PT upgrades.
- **Interesting but not actionable yet:** QTUM +41.72% 3M, RKLB +62.76% 3M. Both thin and recently pulling back. No entry.
- **Not actionable:** SpaceX IPO news ($1.8T valuation). Not in our universe.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback. Earnings calendar unavailable from all attempted sources.
- **News access:** Yahoo Finance RSS and Google News RSS working. Reuters headline confirmed chip rebound.
- **Alpaca `get-latest-price` bars** timestamps at 16:34Z, current within 1 minute.
- **Day-trade status:** 0/3. Clean slate.
- **VOO liquidity:** 4 trades, 246 vol at 16:34Z — thin. Use limit orders only.
- **SOXX liquidity:** 31 trades, 1,804 vol at 16:34Z — acceptable for limit orders.
- **NVDA liquidity:** 57 trades, 4,029 vol at 16:34Z — liquid. Limit or market orders acceptable.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** QQQ max 6 shares; VOO max 2 shares; SOXX max 3 shares; NVDA max 7 shares.
- **Tactical agent process:** Correctly executed QQQ fill. No unauthorized orders. No concealment risk.
- **Portfolio heat:** Minimal. No stops below entry on current positions. New SOXX position heat: ~$8.50/share (stop $565). New NVDA position heat: ~$6.50/share (stop $204). Both well under 2% equity limit per trade.
- **SPY benchmark:** $742.02 (Yahoo Finance). Since baseline +3.34%.
- **Pre-order concentration cap check:** QQQ add FAILS (43.0% + 719 = 50.2% > 45%). VOO add FAILS (13.6% + 682 = 20.4% > 20%). SOXX add 1 PASSES (5.7% < 20%). NVDA add 1 PASSES (2.1% < 15%).
- **Rapid-exposure-drift guardrail:** Gross exposure moved from 49.5% (15:35Z) to 56.6% (16:35Z) via authorized QQQ add. +7.1 pp change, fully authorized. No drift classification.
- **Repo integrity:** Working tree clean. No staged/unstaged source modifications. Branch up to date with origin/main.

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
