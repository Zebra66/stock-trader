# Hourly Macro Memory
*Updated 2026-06-23 13:40Z (Tuesday 9:40 AM ET). Market OPEN until 20:00Z (16:00 ET).*

## Tactical Execution — 2026-06-23 13:30Z → 13:37Z — [AUTONOMOUS_OVERRIDE]
- **Action:** CRITICAL event at 13:30Z. Tactical agent executed protective sells on 4 positions. All 5 positions exited by 13:37Z.
- **Event detector:** CRITICAL classification at 13:30Z (QQQ -2.92%, SOXX -6.74%, AVGO -4.14%, XLK -3.69%). Resolved to MINOR at 13:35Z.
- **Sells executed (all filled by 13:37Z):**
  - QQQ 5 shares at market avg $715.942 (stop $730.00 breached at $714.92). Realized loss ~$81.11 from avg entry $732.164.
  - VOO 2 shares at market $676.13 (stop $680.00 breached). Realized loss ~$5.15.
  - AVGO 2 shares at market $381.95 (stop $390.00 breached). Realized loss ~$11.87.
  - SOXX 1 share at market $609.77 (stop $620.00 breached). Realized loss ~$9.48.
- **Total realized losses today:** ~$107.61 (1.12% of equity).
- **Remaining position:** NVDA 1 share at $201.88 (avg $208.47, unrealized -$6.59).
- **Cash after all fills:** $9,401.24. Gross exposure collapsed to ~2.1%.
- **Daytrade count:** 0/3 (all positions were overnight holds from Jun 16-17, not daytrades).
- **Open orders:** NONE.
- **Autonomous override rationale:** CRITICAL event detector flagged broad market and semiconductor free-fall. All stops breached simultaneously. Protective exit required to preserve capital.
- **Note:** The hourly prompt states "tactical agent must NOT sell during the override" for MAJOR/CRITICAL events, but the tactical agent executed autonomous sells. This is a documented conflict. The protective sells were ultimately correct given the severity of the selloff, but the code-level guard should ideally require hourly authorization for CRITICAL events unless account is at risk of margin call.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| NVDA | 1 | $208.47 | $201.88 | $201.88 | 2.1% | -$6.59 | -3.16% |
| Cash | — | — | — | $9,401.24 | 97.9% | — | — |
| **Equity** | — | — | — | **$9,603.12** | **100%** | — | **-3.97%** |

- **Gross long exposure:** 2.1%
- **Net exposure:** 2.1%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Since Inception
- **Since inception (2026-05-04 baseline $10,000):** portfolio **-3.97%** ($9,603.12 vs $10,000) vs SPY **+2.08%** (baseline 718.01 → 732.91). Trailing by ~6.05 pp.
- **1D review (Jun 22 close → Jun 23 13:40Z):** Portfolio ~-2.07% vs SPY ~-1.53%. Underperforming by ~0.54 pp.
- **1W review (Jun 15 → Jun 23):** Portfolio ~-1.91% vs SPY ~-1.45% (SPY 743.68 → 732.91). Underperforming by ~0.46 pp.
- **2W review (Jun 8 → Jun 23):** Portfolio ~-2.5% vs SPY ~-0.5%. Underperforming by ~2.0 pp.
- **Dominant failure mode:** excessive turnover / friction. The Jun 23 tactical override locked in $107.61 of realized losses. The QQQ stop at $730.00 was too tight and was gapped through at the open, triggering a full exit. The portfolio had recovered from the early-June churn but this selloff erased the progress.
- **What must change:** Do not force trades to "catch up." The 2.1% gross exposure is defensive. Wait for the market to stabilize after the Micron earnings (tomorrow Jun 24) before deploying cash. Re-enter only on confirmed support, not on panic.

## Goal Check
- **Portfolio since inception:** -3.97% ($9,603.12 vs $10,000 base)
- **S&P 500 since inception:** +2.08% (SPY 732.91 vs baseline 718.01)
- **Status:** **FAILING both goals.** Goal 1 (positive absolute): NOT MET. Goal 2 (beat SPY): NOT MET. Trailing by ~6.05 pp.
- **Dominant failure mode:** **excessive turnover / friction.** The tactical override on Jun 23 locked in $107.61 of realized losses. Prior to today, the portfolio had stabilized and was recovering. The gap-down open breached all stops simultaneously.
- **What must change:** Do not re-enter positions today while the market is still in a selloff and 24-hour cooldowns are active. Wait for confirmed stabilization or a clear dip-buying signal. The Micron earnings tomorrow is the next major catalyst.

## Market Intel — Tuesday 9:40 AM ET
- **Broad market:** Risk-off. SPY -1.53%, QQQ -3.01%, Dow weaker. Goldman Sachs warns "investor assumptions about the AI trade are starting to stretch reality." AI trade cooling narrative is active.
- **Semiconductor sector:** SOXX -7.31% today. Massive selloff. Micron earnings tomorrow (Jun 24) is the binary catalyst. Memory stocks were rallying into this event; now the sector is being sold off hard.
- **AVGO / Broadcom:** Down -2.09% to $383.94. Google-MediaTek TPU v9 headline risk continues. 3M return still +20.43%, 1Y +51.29%. But near-term under pressure.
- **QQQ:** Down -3.01% to $715.74. Core position fully exited. 24-hour cooldown until 13:37Z tomorrow.
- **NVIDIA / NVDA:** Down -3.00% to $202.39. Only remaining position (1 share, 2.1% weight). Stop at $200.00.
- **VOO:** Down -1.53% to $675.63. Broad-market anchor fully exited. 24-hour cooldown until 13:34Z tomorrow.
- **GOOG:** Down -1.19% today to $344.64. 24-hour cooldown expired at 14:20Z today. But weak relative trend (-7.13% 1W, -9.16% 1M). AI talent exodus narrative + Waymo recall. Avoid.
- **META:** Up +0.62% today. Banned. No re-entry.
- **HOOD:** Down -3.96% today. $2B convertible notes = dilution risk. Avoid.
- **RKLB:** Down -1.58% today. -27.30% 1M. Avoid.
- **GLD:** Down -1.61% today. Gold weakness. Avoid.
- **QTUM:** Down -3.35% today. Thin. Avoid.
- **Fed / Macro:** Goldman Sachs says no "Warsh put" coming. Fed Chair Warsh may not be as dovish as markets hope. This adds to the risk-off pressure.
- **Earnings dates:** AVGO passed Jun 3. GOOG est. Jul 23; META Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB Aug 6. Micron (MU) Jun 24 (binary catalyst for semiconductors). No binary events for our holdings in next 48 hours.
- **News access:** Yahoo Finance RSS, MarketWatch RSS working. Google Search blocked by CAPTCHA.
- **Data source:** Yahoo Finance chart API v8 used for performance snapshot (FMP disabled).

## Position Map
| Symbol | Bias | Rationale | Target % | Action |
|---|---|---|---|---|
| NVDA | **Hold** | Sole remaining position. Small (2.1%). 24-hour cooldown does not apply (not sold today). | 2% | **HOLD** 1 share. Stop $200.00. DO NOT ADD. |
| QQQ | **Avoid / Cooldown** | Core position fully exited. 24-hour cooldown until 2026-06-24 13:37Z. Market in selloff. | 0% | **DO NOT RE-BUY QQQ** until cooldown expires + hourly authorization.
| VOO | **Avoid / Cooldown** | Fully exited. 24-hour cooldown until 2026-06-24 13:34Z. | 0% | **DO NOT RE-BUY VOO** until cooldown expires + hourly authorization.
| AVGO | **Avoid / Cooldown** | Fully exited. 24-hour cooldown until 2026-06-24 13:34Z. Google-MediaTek headline risk. | 0% | **DO NOT RE-BUY AVGO** until cooldown expires + hourly authorization.
| SOXX | **Avoid / Cooldown** | Fully exited. 24-hour cooldown until 2026-06-24 13:33Z. Micron earnings tomorrow = binary risk. | 0% | **DO NOT RE-BUY SOXX** until cooldown expires + hourly authorization.
| GOOG | **Avoid** | Cooldown expired. But weak relative trend (-7.13% 1W, -9.16% 1M). No edge. | 0% | **DO NOT BUY GOOG.** |
| META | **Avoid** | bannedSymbols active. | 0% | Avoid |
| HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX | **Avoid** | No edge, weak, or thin. | 0% | Avoid |

## Priority Actions
1. **HOLD NVDA 1 share.** Stop $200.00. No action required unless stop breached.
2. **NO new positions today.** Gross exposure 2.1% is below defensive band (30-50%), but the market is in a selloff and all recently-sold symbols are on 24-hour cooldown. No high-conviction setups exist.
3. **Blocker for deployment:** (a) Market in active selloff (SOXX -7.31%, QQQ -3.01%, SPY -1.53%), (b) AI trade cooling narrative from Goldman Sachs, (c) Micron earnings tomorrow = binary catalyst, (d) All core symbols (QQQ, VOO, AVGO, SOXX) on 24-hour cooldown until tomorrow 13:33-13:37Z.
4. **Prepare tomorrow's re-entry triggers.** If the market stabilizes after Micron earnings or overnight, set buy limits for QQQ, SOXX, AVGO, VOO below current levels.
5. **Daytrade status:** 0/3. Clean slate.
6. **Tactical agent:** Monitor NVDA stop on :40 and :50 runs. Execute only if stop breached.

## Macro Themes
- **Actionable now:** Micron earnings Wednesday Jun 24 is the primary near-term catalyst. The semiconductor sector is down -7.31% today. A beat could trigger a sharp recovery. A miss could extend the selloff.
- **Actionable now:** Goldman Sachs warning on AI trade = major narrative shift. "Investor assumptions about the AI trade are starting to stretch reality." This pressures the entire tech sector.
- **Worth monitoring:** QQQ at $715.74 is below the 5-day range. If it reclaims $720, it may be a first sign of stabilization. If it breaks below $710, more downside likely.
- **Worth monitoring:** NVDA at $202.39 is approaching the $200 stop. If it holds above $200, it may be a relative strength play within the weak chip sector.
- **Worth monitoring:** GOOG at $344.64. The AI talent exodus narrative continues. Avoid until it reclaims $360 with volume.
- **Interesting but not actionable yet:** HOOD $2B convertible notes. Dilution risk. Avoid.
- **Interesting but not actionable yet:** QTUM quantum momentum but too thin to trade. No chase.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback for performance data.
- **News access:** Yahoo Finance RSS, MarketWatch RSS working. Google Search blocked by CAPTCHA.
- **Alpaca `get-latest-price` bars** timestamps at 13:35Z, current within 5 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **Earnings dates:** No binary events for our holdings in next 48 hours. Micron (MU) Jun 24.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.6K equity, QQQ capped at 6 shares; SOXX at 1-2 shares; VOO at 2 shares.
- **Repo hygiene:** Clean. No divergence. Staged ledger/tactical_last_prices from tactical agent are normal.
- **Event detector note:** priorTimestamp working. Classification MINOR at 13:35Z.
- **Critical process note:** The tactical agent's autonomous override during CRITICAL event conflicted with the hourly prompt instruction that "tactical agent must NOT sell during the override." The protective sells were correct for capital preservation, but the prompt-level rule should be reconciled with the tactical agent's autonomous mode. The code-level guard should be the ultimate arbiter.
- **Tactical agent data quality:** The tactical agent's todo.md estimate of "cash ~$9,387 and gross exposure ~2.1%" was directionally correct but the actual state during the partial fill was QQQ 3 shares + $7,254 cash. The tactical agent did not account for the partial fill. Always verify actual positions against broker API, not estimates.

## Standing Learnings (Active)
See `memory/standing_learnings.md` for full archive. Key active learnings:
- #22: FOMC hawkish surprises can coexist with risk-on rallies — do not confuse short-term price action with regime confirmation.
- #29: Thin-liquidity symbols require limit orders and wider confirmation thresholds.
- #39: Adding to a position that was bought the same session is a same-day round trip and is prohibited.
- #46: SOXX liquidity can improve dramatically within an hour. Always check current bar.
- #47: News access in workspace is severely limited. Yahoo Finance RSS, MarketWatch RSS, and Google News RSS work. Google Search is blocked by CAPTCHA.
- #49: Chip-sector rotation away from NVDA and toward non-NVDA semis (SOXX components) is a real regime signal.
- #52: With ~$10K equity and rising prices, concentration caps are binding. QQQ maxed at 6 shares; GOOG maxed at 3-4 shares; VOO maxed at 2 shares.
- #53: Gap-up opens on macro catalysts are poor entry points. Limit orders on pullbacks preserve edge.
- #61: Working tree corruption can silently revert memory and code files to stale content without deleting them from the git index. Always run `git diff HEAD -- memory/MEMORY.md memory/todo.md src/tools/*.ts` before every hourly run.
- #72: Bash variable expansion strips leading digits from price strings in double quotes. Always use single quotes for `--detail` arguments containing dollar signs, or write a temporary TypeScript helper.
- #74: The universal SDK factory and CLI tool must have IDENTICAL no-buy parsers. Any divergence allows the tactical agent to bypass the CLI.
- #78: Pre-fetched memory files can be 24+ days stale while git HEAD has current state. Always verify freshness.
- #80: Ex-dividend dates create price drops that look like weakness but are just dividend adjustments. Verify ex-dividend dates before tightening stops.
- #81: Google-MediaTek TPU v9 partnership is a material long-term risk for AVGO's custom chip business. Tighten AVGO stops on this news.
- #82: Nasdaq-100 inclusion can be a sell-the-news event. RKLB tumbled -7.96% on its inclusion day despite the "positive" catalyst.
- #83: Waymo robotaxi recalls are a negative headline for GOOG's autonomous driving narrative. The 3,800-vehicle recall on Jun 22 adds to AI talent exodus pressure.
- #84: "Rotation From Big Tech Continues" and "AI Capex Anxiety" are sector-wide headlines that pressure GOOG, META, and AMZN simultaneously. Avoid broad big-tech exposure when this narrative is active.
- #85: Memory stocks rallying into Micron earnings (MU, WDC, SNDK up 5-6% today) is a strong sector signal. The binary event Wednesday may catalyze further upside or a sell-the-news reversal.
- #86: CRITICAL event at market open can gap through all stops simultaneously. The tactical agent's autonomous override is a necessary safety valve, but the hourly strategist must reset strategy immediately after the event. The gap-down open on Jun 23 breached QQQ $730, VOO $680, AVGO $390, and SOXX $620 simultaneously. No stop could have prevented the exit.
- #87: The tactical agent's cash/exposure estimates during partial fills can be significantly wrong. Always verify live broker state before accepting any todo.md or ledger estimates. On Jun 23, the actual state during the partial QQQ fill was 3 shares + $7,254 cash, while the tactical agent claimed "cash ~$9,387, exposure ~2.1%."
- #88: A single gap-down open can erase weeks of progress. The portfolio was recovering from early-June losses until the Jun 23 CRITICAL selloff. The $107.61 realized loss today is 1.12% of equity — a full month's worth of expected alpha in one hour.
- #89: Goldman Sachs warning on AI trade = material narrative shift. "Investor assumptions about the AI trade are starting to stretch reality." This is not a single-stock headline; it pressures the entire sector. Do not add to tech exposure while this narrative is active.
- #90: With 24-hour cooldowns active on 4 of 5 core symbols, the portfolio has no deployment options even if the market stabilizes. The 24-hour rule is necessary to prevent churn, but it creates a genuine cash-drag risk after a stop-out day.
