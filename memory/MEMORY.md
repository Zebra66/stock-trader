# Hourly Macro Memory
*Updated 2026-07-14 20:12Z (Tuesday 4:12 PM ET). Market CLOSED — post-close / overnight hold. Next regular session Wed open.*

---

## Hourly Cycle Summary — 2026-07-14 20:12Z (Tue post-close)
- **Status:** Market **CLOSED** (regular session ended 4:00 PM ET). Event detector last print **NONE** (19:12Z; SPY/QQQ/SOXX/XLK/GLD/SMH OK; held HOOD/QQQ/VOO OK). Sector rotation NONE.
- **Repo integrity:** Merged local tactical CRITICAL note with origin hourlies (branch had diverged 1/2). `.gitignore` effective. Audit **OK**. Unauthorized=[] Concentration=[] Gross **~83.5%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~20:12Z):** Equity **~$9,687** | Cash **$1,594.05** | Long **~$8,093** | Gross **~83.5%** | BP ~$29.0k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills (authorized):** BUY 1 VOO @ **$689.49** (14:12Z); BUY 1 VOO @ **$691.15** (14:41Z). Documented. **No concealment.** No further fills after 14:41Z. All afternoon tactical correctly hold-only.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. No unauthorized exposure drift.
- **Goal check:** Portfolio **~–3.1%** vs SPY **~+4.7%** (SPY ~752 vs 718.01). **Both goals FAILED.** Gap **~–7.8 pp**.
- **Regime:** **Neutral** (unchanged; no flip — regime stability doctrine). Target gross **75–90%**. Live **83.5%** — inside band. **Hold overnight.**
- **Dominant failure mode:** Residual **cash drag** (16.5% >10%) is **cap-bound** + historical **turnover/friction**. Not symbol selection (QQQ/AVGO constructive).
- **This-cycle decision:** **NO TRADES — market closed.** Carry hold book overnight. Turnover **2/2 exhausted** for the day (resets next session). Cap math unchanged: cannot add 1 VOO or 1 QQQ. **No after-hours equity orders.** TSMC **Thu Jul 16** still blocks new chip beta. Protect via existing trails only when session reopens.

---

## [NOTE] Tactical Event Response — 2026-07-14 17:36Z (historical same-day)
- Event detector briefly **CRITICAL** on semiconductor **upward** spike (SMH/SOXX/XLK) — not a crash.
- Held positions OK; no stops breached; turnover already 2/2 → correctly no action.
- Later detectors returned to NONE/MINOR; end-of-day tape orderly.

---

## Live Book (Alpaca) — TRUE STATE (post-close mark)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$720.5 | ~$4,323 | ~44.6% | ~+$24 | ~+0.6% |
| VOO | 4 | $683.39 | ~$691.3 | ~$2,765 | ~28.5% | ~+$32 | ~+1.2% |
| AVGO | 2 | $371.95 | ~$391.4 | ~$783 | ~8.1% | ~+$39 | ~+5.2% |
| HOOD | 2 | $101.50 | ~$112.7 | ~$225 | ~2.3% | ~+$22 | ~+11.0% |
| Cash | — | — | — | $1,594.05 | ~16.5% | — | — |
| **Equity** | — | — | — | **~$9,687** | **100%** | — | **~–3.1%** |

- **Gross long exposure:** ~83.5%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path today:** ~69% → 76% (VOO #1) → ~84% (VOO #2) — both authorized. Stable since ~14:41Z through close.

## Performance Review — Tue July 14 close
- **1D (vs Mon last_equity $9,609.95):** portfolio **~+0.8%**. SPY firm (~752). Absolute still red inception.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.1%** vs SPY **~+4.7%**. Gap **~–7.8 pp**.
- **What is working:** Two authorized VOO deploys filled cleanly; gross inside neutral band. AVGO (~+5%) and HOOD (~+11%) winners with intact trails. QQQ core held near cap. Process discipline: no churn, turnover budget respected, trails not re-tightened. Afternoon tactical hold-only correct.
- **What is not working:** Absolute still red. Cash ~16.5% idle but **cannot deploy without breaching caps or inventing thin-ETF/chip trades into TSMC binary**. Gap to SPY ~8 pp.
- **What must change next (Wed open, not tonight):** After turnover resets, reassess integer-share room if prices gap; prefer VOO if room ≥1 share; **no new chip beta until post-TSMC (Thu) reassessment**. Never invent thin-ETF filler overnight or AH.

## Goal Check
- **Portfolio since inception:** ~–3.1%
- **S&P 500 since inception:** ~+4.7% (SPY ~752 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (now cap-bound) + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):** VOO under 30% cap has only ~$139 room → **cannot buy 1 more VOO** (~$691). QQQ under 45% has only ~$33 room → **cannot buy 1 QQQ**. Chip beta: NVDA four-gate **PASS** on price (~$211.5), but **TSMC earnings ~Thu Jul 16** remains a sector binary — no new chip beta until post-event reassessment. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) have no edge and/or illiquid prints. Today's turnover **2/2** blocked discretionary adds; resets Wed.

## Market Intel — Tuesday close
- **Broad market:** SPY ~752 OK, QQQ ~720 OK. Last event severity **NONE**. Cooler June CPI / softer inflation supported risk assets; bank earnings in focus; IBM profit warning idiosyncratic on Dow.
- **Geopolitical:** Hormuz / US–Iran oil premium — background only; not a reason to liquidate core beta overnight.
- **Fed:** Cooler inflation vs residual hawk talk (Waller / Warsh chatter in headlines) — background; **no regime flip**.
- **Semiconductors:** SOXX ~$568–570, NVDA ~$211.5 (firm ≥ $209), AVGO ~$391 still constructive. **TSMC full earnings ~Thu Jul 16** confirmed across news previews = binary sector event — **no new chip beta** until post-event reassessment. Mixed NVDA noise (export controls, Burry short headlines, MS bullish) — **not actionable overnight**.
- **AVGO:** 2 shares, ~+5.2%. Trail **$380** intact. 24h cooldown from Mon 19:30Z sell **expired** — still **no add** without fresh hourly edge + turnover room.
- **HOOD:** 2 shares, ~+11%. Trail **$108** intact. No add.
- **NVDA four-gate (price only):** QQQ ≥ $716 **PASS** | NVDA ≥ $209 **PASS** | SOXX ≥ $562 **PASS** | no CRITICAL **PASS**. **4/4 price gates PASS**, but **TSMC week → still NO NVDA** until post-event hourly auth.
- **News source:** Bing News RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns. Documented in process notes.
- **Earnings:** Yahoo calendarEvents empty this cycle. Known: **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug.

## Universe Performance Snapshot (Yahoo Finance fallback, ~20:10Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $391.2 | +0.7% | –0.6% | +2.8% | +15.1% | +41.9% |
| EIS | $120.2 | +0.6% | –5.1% | –5.6% | +1.2% | +28.2% |
| GLD | $371.7 | –0.7% | –6.3% | –16.5% | –12.7% | +20.7% |
| GOOG | $357.3 | –0.4% | –2.7% | +8.1% | +6.3% | +95.5% |
| HOOD | $112.7 | –0.7% | +14.9% | +42.5% | –5.8% | +12.8% |
| META | $659.2 | +9.3% | +11.1% | –0.5% | +7.1% | –8.6% |
| NVDA | $211.1 | +3.5% | –0.6% | +7.4% | +15.3% | +28.7% |
| QQQ | $719.7 | +1.2% | –3.3% | +14.5% | +16.2% | +29.4% |
| QTUM | $149.9 | –1.7% | –10.8% | +22.8% | +27.8% | +62.4% |
| RKLB | $79.2 | –5.1% | –27.5% | +9.6% | –13.8% | +83.2% |
| SHLD | $60.3 | –3.7% | –4.6% | –18.8% | –21.5% | –1.4% |
| SOXX | $568.3 | +1.1% | –9.6% | +41.7% | +71.2% | +133.1% |
| VOO | $691.2 | +0.9% | –0.4% | +8.3% | +8.9% | +20.3% |
| ARKX | $31.7 | –1.7% | –9.8% | –2.1% | –8.1% | +24.5% |
| SPY | $752.0 | +0.9% | –0.4% | +8.3% | +8.9% | +20.4% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.6%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Prefer deploy vehicle if room opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner intact (~+5%). Cooldown expired; no add without fresh hourly. | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+11%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | Price gates 4/4 PASS; blocked by TSMC binary until post-event. | 0–4% |
| GOOG | Avoid | Soft near-term; no edge vs holding cash/caps. | 0% |
| SOXX | Avoid | TSMC risk; not needed overnight. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (overnight → Wed open)
1. **HOLD QQQ / VOO / AVGO / HOOD** — no AH/pre-market equity orders.
2. **AVGO trail (next regular session only):** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1.
3. **HOOD trail (next regular session only):** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
4. **META banned.** No NVDA/GOOG/SOXX/thin ETFs pre-TSMC.
5. **Cash blocker stands** until price drift creates ≥1 share VOO (prefer) or QQQ room under caps.
6. **Wed first hourly:** recompute caps, turnover reset (0/2), confirm TSMC still Thu, only then consider VOO limit-add if integer room.
7. **If detector CRITICAL at open:** hold; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sells of core ETFs.

## Ranked Deployment Queue (next available turnover day — not tonight)
1. **VOO** — only if cap room ≥ 1 full share after open price print. Limit only (VOO often low TradeCount).
2. **NVDA** — **NOT authorized until post-TSMC reassessment**; then require all four gates again + fresh hourly line.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Overnight hold. Protect AVGO/HOOD trails next session. Respect cap math and TSMC week.
- **Worth monitoring:** Hormuz/oil premium; TSMC earnings Thu Jul 16; cool CPI vs Fed hawk talk; whether Wed open frees 1-share VOO room.
- **Interesting but not actionable yet:** META strength (banned); HOOD 1m strength (already hold small); NVDA noise (Burry short headlines vs MS bullish).

## Cap Math (equity ~$9,687)
- QQQ 45%: max ~$4,359; held ~$4,323; room **~$36** → cannot add 1 (~$720).
- VOO 30%: max ~$2,906; held ~$2,765; room **~$141** → cannot add 1 (~$691).
- Stock 15%: max ~$1,453; AVGO/HOOD room ample but thesis/TSMC/process block adds.
- NVDA 1 @ $211: post weight ~2.2% — structure/TSMC week blocks until post-event.

## Data / Process Notes
- **Audit:** OK. Gross ~83.5%. Daytrades 0.
- **Event detector:** last pre-fetch 19:12Z **NONE**. Market now closed.
- **FMP:** disabled. Yahoo Finance chart primary; Bing News RSS for headlines.
- **Alpaca bars:** VOO TradeCount often low — limit orders only if any future VOO add. EIS/GLD/QTUM/SHLD illiquid.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **2/2** used (~$1,380 notional ≈ **14.2%** of weekly 20% budget). Only protective exits remain until Wed reset.
- **Git:** local branch had diverged from origin (tactical CRITICAL commit vs remote 14:35/15:35 hourlies). Merged and distilled to single authoritative post-close state.
- **CLI fetch** intermittently broken-pipe to GitHub; used already-fetched origin objects for merge.

## Standing Learnings
See `memory/standing_learnings.md`. Key reminders:
- Size from **account equity**, not BP. **No leverage.**
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST order paths prohibited** for tactical.
- **Lock files must NOT auto-expire.**
- **Pre-order concentration cap check** before any buy.
- **With ~$10K equity, caps are tight** (QQQ maxed at 6 shares; VOO now 4 near 30%).
- **VOO symbolCap is 30%** — preferred cash-deployment vehicle when QQQ near 45%.
- **Four-gate NVDA rule** — partial gates = no trade; **even full price pass does not override TSMC binary week policy.**
- **Cash ≤10% target in neutral/offensive** — excess for 2+ hours → limit-add underweight core ETF; **if caps bind, write exact blocker** (current state).
- **No full liquidations. No tight stops on QQQ/VOO/SOXX.**
- **Neutral band is 75–90%** (doctrine). Live 83.5% is correct; do not de-risk into cash.
- **Turnover budget is real:** after 2/2, hold and protect only.
- **No after-hours / pre-market equity orders** by default.

## Prior Tactical Executions (Key Events)
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-14 17:36Z:** CRITICAL upward semi spike — correctly no trades.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant. Cooldown expired ~Tue 19:30Z.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
