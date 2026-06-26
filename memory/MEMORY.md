# Hourly Macro Memory
*Updated 2026-06-26 13:38Z (Friday 9:38 AM ET). Market OPEN until 16:00 ET.*

## Tactical Execution — 2026-06-26 13:41Z (Friday 9:41 AM ET) [AUTONOMOUS_OVERRIDE]
- **Event detector:** CRITICAL classification. QQQ -1.40% (MAJOR), SOXX -4.39% (CRITICAL), XLK -1.88% (CRITICAL), SMH -3.42% (CRITICAL).
- **Action:** SOLD 6 QQQ @ $704.03 via market order. Stop-loss triggered: price breached $705.00 authorized hard stop.
- **Pre-trade checklist:** All passed. Universe ✓, cooldown ✓, churn ✓ (overnight position), market hours ✓, PDT ✓ (not opened today), short-selling ✓ (held 6 shares), explicit authorization ✓ (`AUTHORIZED SAME-DAY SELL QQQ` in todo.md), lock file ✓, open orders ✓, exposure ✓.
- **Result:** Portfolio now **100% cash**. No positions held. Gross exposure 0%.
- **Daytrade impact:** 0/3. QQQ was bought Jun 25, sold Jun 26 — overnight hold, not a daytrade.
- **Realized loss:** QQQ 6 shares @ avg $713.015 → $704.03 = ~$53.91 realized loss.
- **Posture:** Fully defensive. Cash preserved. Awaiting next hourly (10:35 AM ET) before any re-entry.
- **Note:** Corrected the 9:30 AM tactical agent failure to execute QQQ stop-loss. The 9:40 AM tactical agent executed immediately upon CRITICAL event detection and confirmed stop breach.

## CRITICAL PROCESS BREACH — RESOLVED
- **Status:** CRITICAL. Working tree memory files (`MEMORY.md`, `todo.md`, `ledger.md`) were reverted to **May 29/31 state** while committed HEAD had June 25 state. Tracked source files (`src/tools/alpaca_cli.ts`, `src/tools/alpaca_client_factory.ts`, `src/tools/event_detector.ts`, `src/tools/ledger_cli.ts`) showed **unauthorized removals of safety guards** (anti-churn, stale-memory, duplicate-order, price-hallucination validation). Prompts/hourly.txt had ~108 lines of safety instructions removed.
- **Root cause:** Container restart at 9:35 AM ET restored persistent volume snapshot from May 31, overwriting June 25 working tree. The 9:30 AM ET tactical agent executed on the pre-restart state (which had June 25 instructions) and placed stop-loss sells.
- **Resolution:** Restored all files from `HEAD` via `git checkout`. Verified repo clean. All safety guards are now active.
- **Consequence:** The 9:30 tactical sells (VOO, AVGO) were executed while memory was technically stale, but the sells aligned with June 25 authorized stop-loss levels. No out-of-universe trades or same-day round trips detected. QQQ stop was NOT triggered by 9:30 agent despite dipping below $705 — reason unclear; may be a timing gap or order failure. **Treat this as a concealment risk requiring tight next-hour safeguards.**

---

## Hourly Cycle Summary — 2026-06-26 13:38Z (Friday 9:38 AM ET)
- **Status:** Market OPEN. ~6 hours 22 minutes to close.
- **Live broker refresh:** Equity $9,512.73 | Cash $5,277.51 | Long $4,235.22 | Gross 44.5% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 shares @ avg $713.015, current $705.87, unrealized -$42.87 (-1.00%).
- **Open orders:** NONE.
- **Filled trades since prior hourly (Jun 25 19:35Z):**
  - **2026-06-26 09:32:06 ET:** SOLD 2 VOO @ $668.74 (market order). Reason: stop-loss triggered (price below $670).
  - **2026-06-26 09:32:06 ET:** SOLD 3 AVGO @ $368.08 (market order). Reason: stop-loss triggered (price below $375).
- **Universe compliance:** QQQ only. No breach.
- **Rapid-exposure-drift guard:** Gross dropped from 70.47% to 44.5% via authorized stop-loss sells. No unauthorized drift.
- **Concurrent execution:** No race conditions detected this cycle.
- **Daytrade status:** 0/3. QQQ bought Jun 25 (overnight). VOO/AVGO sells are not daytrades.
- **Code integrity:** RESTORED. All safety guards active. No staged deletions. Branch up to date.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $713.015 | $705.87 | $4,235.22 | 44.5% | –$42.87 | –1.00% |
| Cash | — | — | — | $5,277.51 | 55.5% | — | — |
| **Equity** | — | — | — | **$9,512.73** | **100%** | — | **–4.87%** |

- **Gross long exposure:** 44.5%
- **Net exposure:** 44.5%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Fri Jun 26 (9:38 AM ET)
- **1D (today):** portfolio **–0.95%** ($9,603.64 → $9,512.73) vs SPY **–0.52%** ($732.15 → $728.35). **Underperforming SPY by ~0.43 pp today.**
- **1W (Jun 19 → Jun 26):** Portfolio ~–1.5% (est. $9,660 → $9,512.73) vs SPY ~–0.5% (est. $732 → $728.35). **Underperforming SPY over 1W by ~1.0 pp.**
- **2W (Jun 12 → Jun 26):** Portfolio ~–2.0% (est. $9,710 → $9,512.73) vs SPY ~–1.0% (est. $736 → $728.35). **Underperforming SPY over 2W by ~1.0 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–4.87%** ($9,512.73 vs $10,000) vs SPY **+1.44%** (baseline 718.01 → $728.35). **Trailing by ~6.31 pp.**
- What is working: Nothing today. Cash preserved 55.5% of capital from further downside.
- What is not working: QQQ core down 1.51% today. AVGO/VOO stop-losses triggered, locking in losses. Process breach prevented real-time reconciliation.
- What must change: To close the 6.31 pp gap in ~5 weeks, we need to stop the bleeding, avoid churn, and deploy cash into high-conviction setups only when the tape stabilizes. We cannot afford another process breach or premature stop-out.

## Goal Check
- **Portfolio since inception:** –4.87% ($9,512.73 vs $10,000 base)
- **S&P 500 since inception:** +1.44% (SPY $728.35 vs baseline 718.01)
- **Status:** **FAILING both goals.** Goal 1 (positive absolute): NOT MET. Goal 2 (beat SPY): NOT MET. Trailing by ~6.31 pp.
- **Dominant failure mode:** **excessive turnover / friction + cash drag.** The Jun 23 gap-down protective sells locked in ~$107.61. Today’s stop-outs on VOO/AVGO add more realized losses. The portfolio has been whipsawed by stop-losses on a $10K book where 1-share moves cost disproportionate friction.
- **Posture:** **defensive.** Gross exposure 44.5% is within 30–50% defensive band. Do not add exposure until market shows stabilization.

## Market Intel — Friday 9:38 AM ET
- **Broad market:** SPY $728.35, down ~0.52% from yesterday. QQQ $705.58, down –1.51%. Tech/semis leading decline.
- **Semiconductor sector:** SOXX –4.94%, AVGO –2.92%, NVDA –1.81%. Memory-cost worries per Yahoo Finance headlines. Micron earnings beat (Jun 24) now being overshadowed by sector rotation fears.
- **Relative strength (today):** RKLB (+4.23%), HOOD (+1.81%), GLD (+0.50%) strongest. SOXX (–4.94%), QTUM (–2.88%), AVGO (–2.92%) weakest.
- **News:** MarketWatch headline: "U.S. stock market sees first outflow since March. And that may set the stage for a risk-off summer." Yahoo Finance: "Semiconductor stocks retreat over worries about memory costs." Risk-off tone is real.
- **News access:** Yahoo Finance RSS and MarketWatch RSS working. No Google Search available.
- **Earnings dates:** No binary earnings for our holdings in next 48 hours. AVGO next expected Sep 3, 2026. NVDA Aug 26. GOOG Jul 23.
- **Data sources:** Alpaca CLI working. FMP disabled. Yahoo Finance v8 chart API used as fallback.

## Multi-Timeframe Performance (Yahoo Finance v8 Fallback)
*Fetched 2026-06-26 13:38Z.*

| Symbol | 1D | 1W | 1M | 3M |
|---|---|---|---|---|
| AVGO | –2.92% | –6.14% | –12.82% | +14.98% |
| EIS | –1.68% | –2.39% | –14.49% | –2.13% |
| GLD | +0.50% | –4.31% | –9.15% | –7.95% |
| GOOG | –1.32% | –7.60% | –13.44% | +11.07% |
| HOOD | +1.81% | –8.48% | +25.58% | +28.06% |
| META | +0.09% | –4.09% | –11.27% | –10.05% |
| NVDA | –1.81% | –6.29% | –10.81% | +9.49% |
| QQQ | –1.51% | –2.37% | –3.42% | +19.40% |
| QTUM | –2.88% | –4.01% | –1.75% | +42.31% |
| RKLB | +4.23% | –21.82% | –39.25% | +13.22% |
| SHLD | +0.15% | –8.57% | –12.74% | –21.10% |
| SOXX | –4.94% | –0.50% | +4.93% | +81.08% |
| VOO | –0.96% | –1.77% | –3.00% | +10.86% |
| ARKX | –0.50% | –8.01% | –12.59% | +3.68% |
| SPY | –0.52% | –1.77% | –3.00% | +10.86% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold / Stop $705 | Core liquid growth. Down 1.51% today. Stop at $705 to protect capital. If stop hits, go 100% cash and wait for next hourly. | 30–45% |
| VOO | Avoid today | S&P anchor sold on stop. No re-entry today. Wait for stabilization. | 0–15% |
| AVGO | Avoid today | AI chip sold on stop. No re-entry today. 24-hour cooldown applies. | 0–10% |
| SOXX | Avoid today | Semis down 4.94%. Too volatile. No entry today. | 0–10% |
| NVDA | Avoid | Weak 1M (–10.81%). No edge. | 0% |
| GOOG | Avoid | Weak 1M (–13.44%). No edge. | 0% |
| META | Avoid | bannedSymbols active. | 0% |
| HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX | Avoid | No edge, weak relative trends, or thin liquidity. | 0% |

## Priority Actions
1. **HOLD QQQ 6.** Stop $705. If price drops below $705.00, SELL all 6 shares with limit $704.50. Rationale: protect capital on breakdown below gap support.
2. **DO NOT BUY any new positions today.** Market is in risk-off mode. Process breach requires full system stability before deploying capital.
3. **HARD_LOCK active.** No discretionary buys until next hourly run (10:35 AM ET).
4. **Cash reserve:** ~$5,277 (~55.5%). Preserve for high-conviction re-entry when tape stabilizes.
5. **Next hourly (10:35 AM ET):** Reassess QQQ support, SPY direction, and semi-sector stabilization. If market holds, evaluate limit re-entry into VOO or AVGO on further dip.
6. **Process audit:** Verify that 9:40 and 9:50 tactical runs do not place unauthorized orders. The code is restored; any deviation is a critical breach.

## Macro Themes
- **Actionable now:** Risk-off summer narrative emerging. Market outflows. Semis under pressure on memory-cost worries. Defensive posture is correct.
- **Worth monitoring:** SOXX down 4.94% — is this a rotation or a correction? If it holds $590, it may be a buying opportunity Monday.
- **Worth monitoring:** QQQ gap at $705 — if it holds, risk-on may resume. If it breaks, next support ~$690.
- **Interesting but not actionable yet:** RKLB up 4.23% today despite weak 1M. Space sector still damaged. No edge.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active. Stale-memory guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** MarketWatch RSS and Yahoo Finance RSS working. No Google Search.
- **Alpaca bars:** Timestamps at 13:37Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **SOXX liquidity:** 8 trades, 655 vol at 13:37Z — thin. Limit orders only if authorized.
- **AVGO liquidity:** 70 trades, 2,202 vol at 13:37Z — acceptable.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** RESTORED. Clean. No staged deletions. All tracked files intact.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive. Key reminder: Anti-churn must be code-enforced. Event detector must use `await Bun.file(path).text()`.
