# Hourly Macro Memory

## Hourly Cycle Summary — 2026-06-25 19:35Z (Thursday 3:35 PM ET)
- **Status:** Market OPEN. ~25 minutes to close.
- **Live broker refresh:** Equity $9,603.64 | Cash $2,835.81 | Long $6,767.83 | Gross ~70.47% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 shares @ avg $713.015, AVGO 3 shares @ avg $379.17, VOO 2 shares @ avg $675.98.
- **Open orders:** SOXX limit BUY 1 @ $610 (day order, expires 20:00Z).
- **No sell triggers breached.** QQQ $713.96 > stop $705. AVGO $378.13 > stop $375. VOO $674.84 > stop $670.
- **Event detector:** NONE at 19:35Z.
- **Filled trades this cycle:** None since 18:35Z.
- **Goal check:** Portfolio **-3.96%** since inception ($9,603.64 vs $10,000) vs SPY **+1.97%** (baseline 718.01 → $732.15). **FAILING both goals.** Trailing by ~5.93 pp.
- **Regime:** Offensive catch-up. Gross 70.47% within 60–90% target.
- **Posture:** Market pulling back slightly from midday highs into the close. Normal intraday drift. All positions roughly breakeven today (+$0.27 total unrealized). No action needed.
- **Universe compliance:** QQQ, AVGO, VOO within caps. No breach.
- **Rapid-exposure-drift guard:** Gross stable at ~70.5% since 16:43Z VOO fill. No unauthorized drift.
- **Concurrent execution:** No race conditions. Tactical agent has not placed new orders.
- **Daytrade status:** 0/3. All positions bought today; DO NOT SELL today unless explicitly authorized.
- **Code integrity:** No staged deletions. All source files intact. Branch up to date.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $713.015 | $713.96 | $4,283.76 | 44.6% | +$5.67 | +0.13% |
| AVGO | 3 | $379.17 | $378.13 | $1,134.39 | 11.8% | -$3.12 | -0.27% |
| VOO | 2 | $675.98 | $674.84 | $1,349.68 | 14.0% | -$2.28 | -0.17% |
| Cash | — | — | — | $2,835.81 | 29.5% | — | — |
| **Equity** | — | — | — | **$9,603.64** | **100%** | — | **-3.96%** |

- **Gross long exposure:** ~70.47%
- **Net exposure:** ~70.47%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** SOXX limit BUY 1 @ $610 (day order, expires 20:00Z)

## Performance Review
- **Since inception (2026-05-04 baseline $10,000):** portfolio **-3.96%** ($9,603.64 vs $10,000) vs SPY **+1.97%** (baseline 718.01 → $732.15). Trailing by ~5.93 pp.
- **1D review:** Portfolio +0.03% today vs SPY -0.01%. Re-entry today is working; roughly flat.
- **1W review:** Portfolio roughly 0% vs SPY ~-1.0%. Cash preserved capital during Jun 23 gap-down; re-entry today is rebuilding exposure.
- **2W review:** Portfolio roughly 0% vs SPY ~-2.3%. Cash drag during the first half of the 2W window hurt; today's re-entry improved the gap.
- **Dominant failure mode:** **excessive turnover / friction + cash drag.** The Jun 23 gap-down protective sells locked in ~$107.61 of realized losses. The accidental NVDA test-sale added another ~$6.32. Since then, 100% cash missed the SPY rally until today's re-entry.
- **What must change:** (1) Stop churning. (2) Hold current positions and let winners run. (3) Add SOXX on pullback with GTC limit. (4) Do not chase.

## Goal Check
- **Portfolio since inception:** -3.96% ($9,603.64 vs $10,000 base)
- **S&P 500 since inception:** +1.97% (SPY $732.15 vs baseline 718.01)
- **Status:** **FAILING both goals.** Goal 1 (positive absolute): NOT MET. Goal 2 (beat SPY): NOT MET. Trailing by ~5.93 pp.
- **Dominant failure mode:** **excessive turnover / friction + cash drag.**
- **Posture:** **offensive catch-up.**

## Market Intel — Thursday 3:35 PM ET
- **Broad market:** SPY $732.15 (down slightly from midday), QQQ $713.96 (up ~0.47%), SOXX $619.90 (up ~3.9%), VOO $674.84 (flat). PCE hot; split tape — financials lead, big tech lags, semis strong.
- **Semiconductor sector:** SOXX +3.9% today on Micron blowout earnings. AI memory demand validated. AVGO flat (-1.03%), NVDA down (-1.76%). Semis diverging: SOXX strongest, AVGO/NVDA weak.
- **Relative strength (1M):** HOOD (+27.39%), SOXX (+9.87%), QTUM (+1.26%) strongest. RKLB (-43.48%), GLD (-10.65%), EIS (-12.81%), GOOG (-11.82%), META (-11.18%), NVDA (-9.02%) weakest.
- **Earnings dates:** Micron reported Jun 24 BEAT. AVGO next: Sep 3, 2026. NVDA next: Aug 26, 2026. No binary earnings for our holdings in next 48 hours.
- **News:** PCE inflation hot. Apple price hikes suggest inflation persistence. Space stocks punished (SpaceX FOMO over). MarketWatch RSS provided top stories; symbol-specific coverage insufficient.
- **News coverage:** MarketWatch RSS working (top stories only). Yahoo Finance RSS sparse. No actionable symbol-specific headlines retrieved.

## Multi-Timeframe Performance (Yahoo Finance v8 Fallback)
*Fetched 2026-06-25 17:35Z.*

| Symbol | 1D | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|---|
| AVGO | -0.48% | -3.22% | -9.90% | +17.90% | +8.85% | N/A |
| EIS | -0.65% | -0.71% | -12.81% | -0.74% | +6.43% | N/A |
| GLD | +1.09% | -4.81% | -10.65% | -8.45% | -10.57% | N/A |
| GOOG | -1.64% | -6.28% | -11.82% | +13.49% | +7.50% | N/A |
| HOOD | -2.89% | -10.29% | +27.39% | +30.20% | -21.51% | N/A |
| META | -2.47% | -4.18% | -11.18% | -9.96% | -18.21% | N/A |
| NVDA | -1.76% | -4.48% | -9.02% | +11.30% | +3.32% | N/A |
| QQQ | +0.80% | -0.86% | -1.91% | +21.82% | +15.14% | N/A |
| QTUM | +0.46% | -1.13% | +1.26% | +45.16% | +43.53% | N/A |
| RKLB | -5.25% | -25.05% | -43.48% | +19.01% | +4.86% | N/A |
| SHLD | -1.04% | -8.72% | -11.89% | -20.25% | -12.50% | N/A |
| SOXX | +4.13% | +4.44% | +9.87% | +86.08% | +105.38% | N/A |
| VOO | +0.03% | -0.81% | -2.04% | +11.82% | +6.83% | N/A |
| ARKX | -0.81% | -7.51% | -12.09% | +4.18% | +5.94% | N/A |
| SPY | -0.01% | -1.05% | -2.32% | +11.87% | +6.57% | N/A |

## Position Map
| Symbol | Bias | Rationale | Target % | Action |
|---|---|---|---|---|
| QQQ | Hold | Core broad-tech. 6 shares filled. At 45% cap. | 36–45% | HOLD 6. Stop $705. Target $745. No new buys. |
| AVGO | Hold | AI infrastructure. 3 shares filled. At 15% cap. | 8–12% | HOLD 3. Stop $375. Target $405. No new buys. |
| VOO | Hold | S&P anchor. 2 shares filled. At 14% (cap 20%). | 10–15% | HOLD 2. Stop $670. Target $695. No new buys (1 share would breach cap). |
| SOXX | Buy | Pure-play semi. Strongest 1M. Micron beat. | 5–10% | GTC limit BUY 1 @ $610. Stop $590. Target $650. R/R 2.0:1. Place tomorrow AM. |
| NVDA | Avoid | Single-stock AI. Weak 1M (-9.02%). Down 1.76% today. | 0% | DO NOT BUY. |
| GOOG | Avoid | Weak 1M (-11.82%), down 1.64% today. | 0% | DO NOT BUY. |
| META | Avoid | bannedSymbols active. | 0% | Avoid |
| HOOD | Avoid | -2.89% today, -10.29% 1W. Choppy. | 0% | Avoid |
| RKLB | Avoid | -5.25% today, -43.48% 1M. | 0% | Avoid |
| GLD / EIS / SHLD / QTUM / ARKX | Avoid | Weak trends, thin liquidity. | 0% | Avoid |

## Priority Actions
1. **HOLD QQQ 6, AVGO 3, VOO 2.** All within stop levels. Do not sell unless stop breached.
2. **Let SOXX day order expire.** SOXX at $619.90, limit $610 will not fill today. Do NOT replace it today.
3. **Place SOXX GTC limit BUY 1 @ $610 tomorrow morning.** Entry $610, stop $590, target $650. R/R 2.0:1.
4. **Stop levels:** QQQ stop $705. AVGO stop $375. VOO stop $670.
5. **AUTHORIZE SAME-DAY SELL QQQ** if price drops below $705.00. AUTHORIZE SAME-DAY SELL AVGO if price drops below $375.00. AUTHORIZE SAME-DAY SELL VOO if price drops below $670.00.
6. **Concentration caps respected:** QQQ 44.6% (cap 45%). AVGO 11.8% (cap 15%). VOO 14.0% (cap 20%).
7. **Daytrade status:** 0/3. Clean slate. All positions bought today. DO NOT SELL today unless authorized above.
8. **No new orders today.** Market closes in 25 minutes. Preserve capital for tomorrow's session.

## Deployment Queue (Friday Jun 26)
1. **SOXX GTC limit BUY 1 @ $610.** Place at 9:35 AM ET or early in session. Entry $610, stop $590, target $650. R/R 2.0:1.
2. **If SOXX fills:** Gross ~76.9%. Cash ~$2,225. No new orders until next hourly unless high-conviction setup appears.
3. **If market drops below stops tomorrow:** Exit QQQ and AVGO, revert to defensive, preserve capital.

## Macro Themes
- **Actionable now:** PCE hot + Iran/Hormuz risk = split tape. VOO provides stability. SOXX only on deeper pullback.
- **Worth monitoring:** SOXX surging +3.9% on Micron. Semis diverging (SOXX strong, AVGO/NVDA weak). Is this a rotation within tech or a broadening of the AI rally?
- **Worth monitoring:** QQQ held $705 gap support today. If it holds tomorrow, breakout is valid. If it breaks $705, cut.
- **Interesting but not actionable yet:** Financials leading (JPM). Rotation out of tech into financials? If so, VOO is the better play than QQQ.
- **Lesson:** Limit orders placed after the morning dip missed fills. SOXX limit @ $610 was placed at 11:43 AM ET; low was $598.94 at 9:45 AM ET. For future entries, place GTC limits before the open or early in the session.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for anti-churn, HARD_LOCK, trading lock file, universe gate.
- **FMP** disabled. Yahoo Finance chart API v8 used as fallback.
- **News access:** MarketWatch RSS working (top stories only). Yahoo Finance RSS sparse. Symbol-specific coverage insufficient.
- **Alpaca `get-latest-price` bars** timestamps current within 1 minute.
- **Day-trade status:** 0/3. Clean slate.
- **Earnings dates:** AVGO Sep 3, NVDA Aug 26. No binary events for our holdings in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Event detector:** `priorTimestamp` present. Bug resolved.
- **Repo hygiene:** Clean. No staged deletions. Branch up to date.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted, restore from HEAD immediately.
- **Pre-fetched context can be stale even when git HEAD is current.** Use `git show HEAD:<file>` for authoritative state.
- **With ~$10K equity, concentration caps are extremely tight.**
- **Gap-up opens on macro catalysts are poor entry points.** Limit orders on pullbacks preserve edge.
- **Anti-churn rules must be code-enforced at the SDK level.**
- **Event detector `priorTimestamp` null bug resolved.**
- **PCE hotness can create a split tape:** broad indexes resilient, individual big-tech weak, semis strong. Watch for sector rotation.
- **Place limit orders before the open or early in the session to catch morning dips.** Waiting until the :40 tactical run may miss the pullback.
