# Hourly Macro Memory
*Updated 2026-07-02 14:35Z (Thursday 10:35 AM ET). Market OPEN (closes 20:00Z). Next regular session hourly: 2026-07-02 15:35Z (Thursday 11:35 AM ET).*

## Tactical Execution — 2026-07-02 14:40Z (Thursday 10:40 AM ET)
- **Action:** Placed limit sell order for HOOD — 5 shares @ $117.00 (order 385d2b75-e612-44ab-bb6b-8672229f8eba).
- **Status:** Order pending_new, day order, expires at 20:00Z.
- **Rationale:** HOOD at +2.2R ($116.28 current, avg entry $101.50). Per hourly authorization and aggressive protocol, trim 50% at +2R. Limit set at $117.00; current price $116.28. Order will fill if HOOD rallies back to $117.
- **Pre-trade checklist:** All 13 checks passed. Universe OK, no cooldown, no churn (bought Jun 30), market open, PDT clean (0/3), no short sale, explicitly authorized in todo.md, no lock, no HARD_LOCK, data healthy (39 trades), not liquidation, budget 0→1/3.
- **Holdings after intended fill:** QQQ 5, VOO 2, AVGO 3, HOOD 5, RKLB 5. Cash ~$2,536 after fill.
- **Exposure after intended fill:** ~74% gross. Still within 60–90% offensive band.
- **No other actions:** QQQ/VOO/AVGO/RKLB all well above hard stops. Event detector NONE. No protective sells.

## Tactical Autonomous Override — 2026-07-02 14:30Z (Thursday 10:30 AM ET)
- **[AUTONOMOUS_OVERRIDE]** Event detector classification: **CRITICAL** (SOXX -1.91%, SMH -1.52%, XLK -1.13%, QQQ -0.80%).
- **Held positions evaluated:** AVGO OK (-0.74%), HOOD MINOR (-2.46%), QQQ OK (-0.80%), RKLB MINOR (-2.26%), VOO OK (-0.35%).
- **Protective sells:** NONE executed. No position breached its authorized hard stop.
- **Buy suspensions:** All symbols already blocked with `DO NOT BUY` in todo.md. No active BUY triggers to suspend.
- **Exposure:** Gross long exposure ~80%, unchanged. No new positions opened.
- **Resolved at 14:35Z:** Event detector upgraded to NONE. CRITICAL window was brief (~5 min).

## Hourly Cycle Summary — 2026-07-02 14:35Z (Thursday 10:35 AM ET)
- **Status:** Market OPEN. Tape mixed — SPY/VOO holding gains, tech/semis fading from morning highs. Event detector **NONE** at 14:35Z.
- **Live broker refresh:** Equity $9,712.15 | Cash $1,950.97 | Long $7,761.18 | Gross 79.9% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5 ($3,605.65, +0.80%), VOO 2 ($1,374.89, +1.62%), AVGO 3 ($1,107.89, -0.71%), HOOD 10 ($1,158.60, +14.15%), RKLB 5 ($514.30, +4.96%).
- **Open orders:** NONE.
- **Filled trades since prior hourly (Jul 2 13:35Z):** NONE. Tactical agent executed no trades in :40/:50 windows.
- **Universe compliance:** All 5 holdings in universe. No breach.
- **Code integrity:** All tracked source files match HEAD. No divergence. Only `memory/tactical_last_prices.json` updated by tactical agent.
- **Branch:** Up to date with origin/main (0 ahead, 0 behind).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $715.38 | $721.13 | $3,605.65 | 37.1% | +$28.75 | +0.80% |
| VOO | 2 | $676.46 | $687.45 | $1,374.89 | 14.2% | +$21.97 | +1.62% |
| AVGO | 3 | $371.95 | $369.30 | $1,107.89 | 11.4% | -$7.97 | -0.71% |
| HOOD | 10 | $101.50 | $115.86 | $1,158.60 | 11.9% | +$143.60 | +14.15% |
| RKLB | 5 | $98.00 | $102.86 | $514.30 | 5.3% | +$24.30 | +4.96% |
| Cash | — | — | — | $1,950.97 | 20.1% | — | — |
| **Equity** | — | — | — | **$9,712.15** | **100%** | — | **–2.88%** |

- **Gross long exposure:** 79.9%
- **Net exposure:** 79.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Trading blocked:** false
- **Account blocked:** false
- **Portfolio heat (entry-to-stop):** $330.67 (3.40% of equity). Under 6% daily loss cap.
- **Portfolio heat (current-to-stop):** $557.66 (5.74% of equity).

## Performance Review — Thu Jul 2 (10:35 AM ET)
- **1D (prior close → now):** Portfolio **+0.72%** ($9,712.15 vs $9,642.61 last close). SPY **+0.33%** ($748.20 vs prior close $745.76). **Outperforming by ~0.39 pp on the day.**
- **1W (Jun 25 → Jul 2):** N/A — exact Jun 25 equity unavailable due to midweek churn.
- **2W (Jun 18 → Jul 2):** N/A — insufficient reliable equity history.
- **Since inception (2026-05-04 baseline $10,000):** Portfolio **–2.88%** ($9,712.15 vs $10,000) vs SPY **+4.20%** ($748.20 vs baseline $718.01). **Trailing by ~7.08 pp.**
- What is working: HOOD surging +7.2% intraday, +14.15% unrealized. RKLB +3.5% intraday, +4.96% unrealized. VOO anchor +1.62%.
- What is not working: AVGO still -0.71% unrealized. QQQ faded from morning highs, only +0.80% unrealized. Tech/semis giving back gains.
- What must change: **ZERO CHURN on core positions.** The gap to SPY narrowed by ~0.2 pp overnight but still massive. **Discipline: take HOOD profit at +2R per protocol.** Do NOT interrupt recovery with unnecessary trades.

## Goal Check
- **Portfolio since inception:** –2.88% ($9,712.15 vs $10,000 base)
- **S&P 500 since inception:** +4.20% (SPY $748.20 vs baseline $718.01)
- **Status:** **FAILING both goals.** Trailing by ~7.08 pp. Need ~+10% outperformance over remaining ~2 months to close gap.
- **Dominant failure mode:** **excessive turnover / friction.** The Jun 15–Jun 26 period saw same-day round trips, panic liquidations, and rapid re-entries. Every market sell order locked in losses + SEC/FINRA fees.
- **Posture:** **offensive catch-up.** Gross exposure 79.9% is within 60–90% band. Cash 20.1% is reserve. Must hold current positions, let winners run, and trim at quantitative targets.

## Market Intel — Thursday 10:35 AM ET
- **Broad market:** SPY $748.20 (+0.33%), QQQ -0.46% ($721.13), VOO +0.33% ($687.45). Tape orderly but tech fading from highs.
- **Jobs report:** June nonfarm payrolls weaker than expected. Morning "bad news is good news" rally is fading in tech/semis but holding in broad market.
- **Semiconductor sector — WEAK AGAIN:** SOXX open $599.70, high $608.11, now $586.47 (-2.29%). Yesterday's flush has NOT fully stabilized; sector rolling over again. AVGO showing relative strength (flat vs SOXX -2.29%).
- **AVGO:** $369.30. Down -0.71% unrealized but well above hard stop $350. No add (15% cap binding at ~15.2% if adding 1 share). Relative strength vs SOXX intact.
- **HOOD:** $115.86. Hit intraday high $120.05, now pulling back. Still +7.2% on day, +14.15% unrealized. R-multiple: +2.2R. **Authorized trim 50% (5 shares) at limit ~$117.** Stop $95. Remaining 5 shares target $125.
- **RKLB:** $102.86. Hit intraday high $106.99, pulling back. Space-sector momentum continues. Stop $90. Profit target $115. Not at +2R yet (0.6R).
- **META:** $590.99, down -3.6% today. Banned from book. Gap down from $612.91 open.
- **GOOG:** $360.15, up modestly. Below 50D. No edge.
- **Relative strength today:** HOOD (+7.2%), RKLB (+3.5%), VOO (+0.33%). Weakness: META (-3.6%), SOXX (-2.3%), QQQ (-0.5%).
- **Earnings dates:** AVGO expected Sep 3; NVDA ~Aug 26; GOOG/META ~Jul 23; HOOD ~Jul 29. No binary events in next 48 hours.
- **Illiquidity flags (Alpaca 14:34Z bars):** HOOD 45 trades, QQQ 17 trades, AVGO 53 trades, SOXX 52 trades, VOO 4 trades, RKLB 21 trades. Liquidity acceptable for limit orders. Limit orders still preferred.

## Multi-Timeframe Performance (Yahoo Finance v8, Jul 2 ~10:35 AM ET)
| Symbol | Price | 1D | 1W | 1M | 3M | Trend |
|---|---|---|---|---|---|---|
| SPY | $748.20 | +0.33% | +2.00% | –1.30% | +17.60% | Above 50D/200D |
| QQQ | $721.13 | –0.46% | +0.76% | –3.26% | +23.54% | Above 50D/200D |
| VOO | $687.45 | +0.33% | +1.77% | –1.51% | +14.18% | Above 50D/200D |
| AVGO | $369.30 | +0.03% | –2.49% | –23.28% | +17.86% | Below 50D, Above 200D |
| NVDA | $196.89 | –0.35% | +0.59% | –11.64% | +12.03% | Below 50D, Above 200D |
| META | $590.41 | –3.67% | +8.76% | –1.21% | +1.93% | Above 50D/200D |
| GOOG | $359.80 | +0.53% | +5.15% | +0.39% | +22.01% | Below 50D, Above 200D |
| HOOD | $116.43 | +7.16% | +24.56% | +32.07% | +66.07% | Above 50D, Below 200D |
| RKLB | $103.32 | +3.25% | +28.05% | –16.22% | +57.69% | Below 50D, Above 200D |
| GLD | $377.80 | +1.94% | +2.26% | –8.29% | –13.71% | Below 50D/200D |
| SOXX | $585.94 | –2.29% | –6.28% | –3.15% | +73.08% | Above 50D/200D |
| QTUM | $159.36 | –0.62% | –0.55% | –5.57% | +45.81% | Above 50D/200D |
| EIS | $121.04 | +0.36% | +1.01% | –8.71% | +2.13% | N/A |
| SHLD | $64.08 | +4.71% | +10.10% | –1.20% | –12.79% | N/A |
| ARKX | $34.47 | +1.89% | +7.99% | –5.97% | +15.25% | N/A |

## Position Map — Thursday Jul 2 (10:35 AM ET)
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **HOLD** | Core growth. Above 50D/200D. +0.80% unrealized. Stop $690. Profit target $750. No adds (45% cap binding at ~44.7% for 6 shares). | 35–45% |
| VOO | **HOLD** | S&P anchor. +1.62% unrealized. Stop $660. Profit target $700. No adds (20% cap binding at ~21.1% for 3 shares). | 10–20% |
| AVGO | **HOLD** | AI chip alpha. –0.71% unrealized. Semis weak but AVGO relative strength vs SOXX intact. Stop $350. Profit target $400. No adds (15% cap binding at ~15.2% for 4 shares). | 5–15% |
| HOOD | **TRIM 50%** | Momentum leader. +14.15% unrealized, +2.2R. Per aggressive protocol, sell 5 shares at limit ~$117. Keep 5 shares for $125 target. Stop $95. | 5–8% (after trim) |
| RKLB | **HOLD** | Space-sector thesis. +4.96% unrealized. Stop $90. Profit target $115. Not at +2R yet. | 5–10% |
| META | Banned | `bannedSymbols` active. No re-entry. | 0% |
| GOOG | Avoid | €1.7B fine overhang; below 50D. No edge. | 0% |
| SOXX | Avoid / Monitor | Weak again today (-2.3%). Do NOT enter. Have AVGO/QQQ exposure. Watch $580 support. | 0% |
| NVDA | Avoid | Below 50D. No edge over AVGO. | 0% |
| GLD | Avoid | Rallying on macro fears but below 50D/200D. Not a defensive regime. | 0% |
| EIS / SHLD / QTUM / ARKX | Avoid | Thin liquidity or no edge. | 0% |

## Priority Actions (Thursday Jul 2, 10:35 AM ET → 11:35 AM ET)
1. **TRIM HOOD 50% (5 shares).** Hit +2.2R. Per aggressive protocol, take profit at +2R on half. Limit order at $117.00 or market if above $116.00. Keeps 5 shares for $125 target.
2. **HOLD QQQ, VOO, AVGO, RKLB.** No sells on orderly tape. Hard stops are far away.
3. **NO NEW DISCRETIONARY BUYS.** Tech/semis fading. Cash reserve post-trim will be ~$2,535. Deploy only on clear setup.
4. **NO ADDS TO EXISTING POSITIONS.** Concentration caps binding for QQQ, VOO, AVGO. RKLB not at +2R yet.
5. **ANTI-CHURN CRITICAL:** Do NOT sell any position that was bought Jun 29–Jul 1 without explicit hourly authorization. HOOD trim is explicitly authorized.
6. **Monitor SOXX $580.** If SOXX breaks $580, reassess chip exposure (AVGO relative strength may not save it).

## Macro Themes
- **Actionable now:** Tech fading from morning jobs-report rally. Semis rolling over again. Take HOOD profit at +2R while momentum is still positive.
- **Worth monitoring:** Semiconductor sector volatility. SOXX down -2.3% today after yesterday's flush. If SOXX breaks $580, the rout extends. AVGO relative strength is encouraging but not enough to add exposure.
- **Worth monitoring:** RKLB space momentum. Hit $107 and pulled back. Hold remaining position; target $115.
- **Interesting but not actionable yet:** NVDA revenue-sharing model for AI startups. Positive for AI capex broadly but no direct edge for our book.
- **Interesting but not actionable yet:** META tanking -3.6%. Good thing it's banned. Validates our ban decision.

---

## Tactical Autonomous Override — 2026-07-02 14:30Z (Thursday 10:30 AM ET)
- **[AUTONOMOUS_OVERRIDE]** Event detector classification: **CRITICAL** (SOXX -1.91%, SMH -1.52%, XLK -1.13%, QQQ -0.80%).
- **Held positions evaluated:** AVGO OK (-0.74%), HOOD MINOR (-2.46%), QQQ OK (-0.80%), RKLB MINOR (-2.26%), VOO OK (-0.35%).
- **Protective sells:** NONE executed. No position breached its authorized hard stop. No position classified CRITICAL or MAJOR in heldPositions array.
- **Buy suspensions:** All symbols already blocked with `DO NOT BUY` in todo.md. No active BUY triggers to suspend.
- **Exposure:** Gross long exposure ~80%, unchanged. No new positions opened.
- **Next hourly:** 15:35Z. Hourly strategist should reassess semiconductor/tech posture given SOXX break below $590.

## Data / Process Notes
- **Alpaca CLI** working. All concentration cap, anti-churn, stale-memory, duplicate-order, and universe guards restored to HEAD.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS accessible. Google Search CAPTCHA-blocked.
- **Alpaca bars:** Timestamps at 14:34Z; current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** Clean. No divergence in source. Tactical last-prices JSON updated to 14:35Z snapshot.
- **Code integrity:** All tracked source files match HEAD.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
