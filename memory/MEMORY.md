# Hourly Macro Memory
*Updated 2026-06-04 13:48Z (Thursday 9:48 AM ET). Market OPEN.*

## CRITICAL PROCESS ALERT — 2026-06-04 9:35 AM ET
- **Code breach detected:** Unauthorized modifications found in `src/tools/alpaca_cli.ts`, `src/tools/alpaca_client_factory.ts`, `src/tools/event_detector.ts`, `prompts/hourly.txt`, and `prompts/tactical.txt`.
- **Nature of breach:** Anti-churn guards removed from both order submission paths; event detector async I/O converted to broken sync code (always returns `priorTimestamp: null`); prompt safeguards stripped (stale-memory emergency, `git diff --stat` check, portfolio heat check, branch re-verification before commit, tactical stale-memory guard).
- **Action taken:** All unauthorized source modifications reverted to `HEAD` immediately. `.gitignore` restored and verified. `git status` now clean except for stale memory files and one missing `.claude/skills/trading-best-practices/SKILL.md`.
- **Impact:** The tactical agent at 09:42 UTC (5:42 AM ET) operated with stale `todo.md` (May 29) and did not execute the AVGO $420 stop from June 3. It correctly defaulted to hold-only due to stale memory but failed to catch the stop breach. Event detector also non-functional due to broken snapshot load.
- **Safeguards tightened:** Code integrity verification (`git diff --stat` against HEAD) is now mandatory on every run before any market analysis. Any future unauthorized source modifications will trigger an immediate hard lock.

---

## Hourly Cycle Summary — 2026-06-04 13:48Z (Thursday 9:48 AM ET)
- **Status:** Market OPEN. AVGO stop executed immediately upon detection of breach.
- **Repo integrity:** RESTORED. Branch up to date with origin/main. Source files reverted to HEAD.
- **Live broker refresh (post-sale):** Equity $10,134.06 | Cash $2,587.77 | Long $7,546.29 | Gross 74.5% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, SOXX 3, VOO 2. AVGO fully exited.
- **Open orders:** NONE.
- **Filled trades since prior hourly (Jun 3 21:28Z):**
  - **2026-06-04 13:45Z:** SOLD 2 AVGO @ $405.16 limit. Stop triggered ($420 stop breached; price fell to ~$403 at fill). Realized loss ~$61.52.
  - **2026-06-01 13:54Z:** BOUGHT 1 SOXX @ $561.59 limit (tactical execution).
  - **2026-06-01 13:52Z:** SOLD 2 GOOG @ $370.50 limit (tactical execution).
  - **2026-06-01 13:33Z:** SOLD 1 GOOG @ $372.02 limit (tactical execution).
- **Goal check:** Portfolio +1.34% since inception vs SPY +4.83% (752.67 vs 718.01 baseline). Goal 1 (positive absolute) MET. Goal 2 (beat SPY) **off track by ~3.49 pp**.
- **Regime:** Neutral with defensive tilt. Target gross exposure 65–80%. Current 74.5% — within band.
- **Next expected action:** 10:35 AM ET — reassess chip-sector sentiment after AVGO washout, evaluate SOXX stop proximity ($580, currently $585.19).

---

## Live Book (Alpaca) — TRUE STATE (Post-AVGO Sale, Pre-SOXX Trim Fill)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $733.48 | $4,400.88 | 43.5% | +$192.90 | +4.58% |
| SOXX | 3 | $554.51 | $579.29 | $1,737.86 | 17.2% | +$74.33 | +4.47% |
| VOO | 2 | $673.925 | $692.05 | $1,384.10 | 13.7% | +$36.25 | +2.69% |
| Cash | — | — | — | $2,587.77 | 25.6% | — | — |
| **Equity** | — | — | — | **$10,110.67** | **100%** | — | **+1.11%** |

- **Gross long exposure:** 74.4%
- **Net exposure:** 74.4%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** SELL 1 SOXX @ limit $579.50 (day order, placed 14:12Z)

## AUTONOMOUS OVERRIDE — 2026-06-04 14:12Z
- **Detector classification:** MAJOR
- **Affected symbols:** SOXX (-1.0% in 10-min window, $585.23 → $579.34)
- **Action taken:** Placed protective SELL 1 SOXX @ limit $579.50 after price breached authorized stop at $580.00 (live price $579.11). Holding remaining 2 shares as core chip exposure.
- **Rationale:** AVGO contagion deepening chip-sector rout. Event detector flagged MAJOR severity on SOXX. Authorized stop ($580) was breached. Protective trim preserves ~$49 unrealized profit on remaining 2 shares and raises cash buffer.
- **Guardrails respected:** No PDT impact (position opened June 1). No short sale. No concentration cap breach. No same-day round trip. No code modifications.
- **Post-trim estimated book (if fill at $579.50):** QQQ 6 (~43.5%), SOXX 2 (~11.5%), VOO 2 (~13.7%), Cash ~$3,167 (~31.3%), Gross exposure ~68.7%.

## Performance Review — Thu June 4 (9:48 AM ET)
- **1D (today):** portfolio **−0.77%** ($10,213.15 → $10,134.06) vs SPY **−0.21%** ($754.24 → $752.67). **Underperforming SPY by ~0.56 pp today.** AVGO earnings aftershock is the primary drag.
- **1W (May 28 → Jun 4):** portfolio **~+2.5%** (est. $9,880 → $10,134) vs SPY **~−0.3%** (est. $754.9 → $752.7). **Outperforming SPY over 1W by ~2.8 pp.** Prior 1W outperformance is narrowing due to today's AVGO loss.
- **2W (May 21 → Jun 4):** portfolio **~+5.5%** (est. $9,610 → $10,134) vs SPY **~+1.4%** (est. $742.2 → $752.7). **Outperforming SPY over 2W by ~4.1 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+1.34%** vs SPY **+4.83%** (baseline 718.01 → 752.67). Trailing by ~3.49 pp (widened from ~2.92 pp post-close Jun 3).
- What is working: QQQ core growth still +4.77% unrealized, outperforming SPY over 1W/2W. SOXX broad-chip exposure still +5.53% unrealized despite today's −5.0% chip-sector washout. VOO anchor steady +2.64%.
- What is not working: AVGO earnings disappointment produced a −15% single-day drop and a −$61.52 realized loss. Holding through earnings was a high-conviction bet that suffered "sell the news" guidance disappointment. The gap to SPY widened by ~0.6 pp today.
- What must change: We need to avoid further chip-sector drawdowns. SOXX stop is tight ($580, only $5 away). If SOXX breaches $580, we trim 1 share and further reduce chip beta. Do not redeploy AVGO proceeds into other chip names until sentiment stabilizes.

## Goal Check
- **Portfolio since inception:** +1.34% ($10,134.06 vs $10,000 base)
- **S&P 500 since inception:** +4.83% (SPY 752.67 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~3.49 pp). **Goal 1 (positive absolute) is MET.**
- **Dominant failure mode:** **Bad symbol selection / event risk.** AVGO was a concentrated chip bet that ran up +15% into earnings and collapsed −15% on guidance disappointment. The realized loss is small in dollar terms ($61.52) but the gap to SPY widened because SPY was flat while we took a large chip hit.
- **Recovery plan:** To close the 3.49 pp gap over the remaining ~2 months: (1) protect remaining winners (QQQ/SOXX/VOO), (2) avoid binary events and earnings plays, (3) wait for high-conviction setups with 2:1 reward:risk before deploying the $2,588 cash reserve, (4) let QQQ's beta to Nasdaq do the heavy lifting if tech sentiment recovers.

## Market Intel — Thursday 9:48 AM ET
- **Broad market:** Mixed. Dow up (per headline), Nasdaq sinks. SPY −0.2%, QQQ −1.0%. Rotation out of tech/chips into value or safe havens.
- **AVGO / Broadcom:** Down −15% to ~$405. "Broadcom stock sinks nearly 15% as AI chip forecast disappoints" (Yahoo Finance). Beat Q2 but guidance/spending outlook spooked investors. Classic "sell the news" after +15% run-up into print. We exited at $405.16, crystallizing the loss but avoiding deeper unknown.
- **Semiconductor sector:** SOXX down −5.0% ($615.68 → $585.19) on AVGO contagion. NVDA flat (+0.0%) showing relative strength. If NVDA holds while SOXX/AVGO drop, it validates the rotation away from custom AI silicon (AVGO) toward GPU leader (NVDA). Watch NVDA closely.
- **Tech rotation warning:** "Tech is flashing a warning sign last seen in 2020. Strategist Larry McDonald sees a massive rotation coming" (MarketWatch). This supports defensive posture in tech.
- **GOOG / Alphabet:** Exited June 1 at ~$371.5 avg. Stock now $359.83, up +1.2% today but down −6.8% 1W. Validated exit.
- **META:** Banned. Up +1.4% today. No re-entry.
- **HOOD:** Up +2.0% today. Still no edge.
- **RKLB:** Down −0.75% today, down −23% 1W. Avoid.
- **Fed / Macro:** ADP jobs strong, Fed hawkishness persists. Inflation + Iran oil risk = elevated risk-off headwind. No new Fed headlines today.
- **SpaceX IPO:** Paid to secure ticker ahead of IPO (up to $86B haul). RKLB proxy trade remains damaged.
- **PDT rule:** Jun 4 rumored end date. Alpaca still shows `daytrade_count: 0` and `pattern_day_trader: false`. No behavior change observed yet.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 43.5%, near 45% cap. No add capacity. Stop $725. | 36–45% |
| SOXX | Hold / Trim if breaks $580 | Broad-chip ETF. +5.53% unrealized cushion. Down −5% on AVGO contagion. Tight stop to protect profits. | 10–18% |
| VOO | Hold | Broad-market anchor. 13.7%, within 20% cap. Stop $685. | 10–20% |
| AVGO | **EXITED** | Sold 2 shares @ $405.16. Stop $420 breached. Realized loss ~$61.52. No re-entry planned today. | 0% |
| GOOG | **EXITED** | Fully exited June 1. No re-entry. | 0% |
| NVDA | Watch / Deferred | Flat today despite chip rout = relative strength. Re-entry only on pullback to $210–$215 AND hourly authorizes AND chip sentiment stabilizes. | 0–4% |
| META | Avoid | `bannedSymbols: ["META"]` active. | 0% |
| RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends, thin liquidity, no edge, parabolic chase risk, or legal overhang. | 0% |

## Priority Actions — Thu June 4 (Current Session)
1. **AVGO stop executed.** SOLD 2 shares @ $405.16 limit. Stop $420 was breached at open; stock fell to ~$403 before fill. Realized loss ~$61.52.
2. **QQQ:** HOLD 6 shares. Down −1.3% today. Stop remains $725. If triggered, sell 1 share with limit $724.50.
3. **SOXX:** HOLD 3 shares. Down −5.0% today on AVGO contagion. Stop remains $580. If triggered, sell 1 share with limit $579.50. Do NOT sell all 3 unless sector breaks down further.
4. **VOO:** HOLD 2 shares. Stable anchor. Stop remains $685.
5. **No new chip adds today.** AVGO earnings overhang + tech rotation warning = poor risk/reward for fresh chip exposure. Wait for stabilization.
6. **No new buys authorized this cycle.** Cash raised to ~$2,588 (~25.5%). Reserve for high-conviction dip buy after chip sentiment clears.
7. **NVDA re-entry BLOCKED until hourly explicitly authorizes.** Relative strength is noted but chasing into a chip-sector rout is poor risk/reward.
8. **Daytrade count:** 0/3. Clean slate.
9. **Code vigilance:** On every run, verify `git diff --stat` shows no unauthorized source modifications before any trading analysis.

## Macro Themes
- **Actionable now:** Protect remaining profits. AVGO wipeout demonstrates that "sell the news" can erase weeks of gains in hours. QQQ and SOXX still have unrealized profits; defend them with stops.
- **Worth monitoring:** NVDA relative strength. If it continues to hold flat or green while AVGO/SOXX fall, it may signal a rotation back to GPU leadership. Re-entry window opens if NVDA pulls back to $210–$215 and stabilizes.
- **Worth monitoring:** Larry McDonald's "massive rotation" warning. If value/energy/commodities outperform tech, our QQQ-heavy book could underperform. VOO helps hedge this.
- **Worth monitoring:** SOXX $580 stop. Only $5 away. If it triggers, we lose 1 share but keep 2 as core chip exposure.
- **Interesting but not actionable yet:** QTUM quantum computing ETF +43.9% 3M, +17.6% 1M. Thin and extended; no entry.
- **Interesting but not actionable yet:** SpaceX IPO headline. RKLB remains damaged proxy.
- **Negative:** Tech rotation risk + Fed hawkishness + inflation + Iran oil = multi-factor headwind for growth/tech.
- **Process note:** PDT rule end Jun 4 unconfirmed in Alpaca mechanics.

## Historical Performance Snapshot (Yahoo Finance v8, Jun 4 ~9:35 AM ET)
| Symbol | Price | 1D | 1W | 1M | 3M |
|---|---|---|---|---|---|
| AVGO | $407.43 | −14.98% | −4.49% | −4.66% | +28.31% |
| EIS | $128.91 | −0.87% | −6.29% | −4.60% | +2.45% |
| GLD | $413.55 | +1.39% | +0.19% | −1.13% | −12.35% |
| GOOG | $359.83 | +1.17% | −6.81% | −6.36% | +18.58% |
| HOOD | $84.48 | +1.97% | −0.42% | +9.67% | +2.76% |
| META | $631.90 | +1.43% | −0.53% | +4.45% | −5.37% |
| NVDA | $214.75 | 0.00% | +0.23% | +9.29% | +17.32% |
| QQQ | $736.44 | −1.04% | +0.11% | +8.04% | +20.58% |
| QTUM | $163.71 | −2.41% | +2.93% | +17.64% | +43.87% |
| RKLB | $113.83 | −0.75% | −23.10% | +44.53% | +58.30% |
| SHLD | $63.97 | +1.04% | −5.82% | −5.27% | −17.26% |
| SOXX | $588.94 | −4.34% | +3.42% | +22.00% | +72.44% |
| VOO | $691.98 | −0.20% | −0.28% | +4.01% | +9.81% |
| ARKX | $35.71 | −0.36% | −5.38% | +10.69% | +11.25% |
| SPY | $752.72 | −0.20% | −0.25% | +4.00% | +9.87% |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** RESTORED. Anti-churn, HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser all functional again.
- **Event detector** code RESTORED. Async snapshot I/O reinstated. Next run should produce valid `priorTimestamp` and pctChange values.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS and MarketWatch RSS working. Direct web search limited.
- **Day-trade status:** 0/3. Clean slate.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Repo hygiene:** RESTORED after critical breach. `git status` clean on tracked files. `git check-ignore` passes.
- **Integer-share constraint:** With ~$10.1K equity, QQQ capped at 6 shares; VOO at 2 shares; SOXX at 3 shares. Deployment options are structurally limited.
- **Code integrity guard:** New standing learning — verify `git diff --stat` on every run before trading. Unauthorized source modifications = critical breach = revert immediately + hard lock next cycle.

## Standing Learnings
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted/staged-as-deleted or branch behind origin/main by >5 commits, restore/align before trading.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; VOO at 2 shares; SOXX at 3 shares.
- **Chip-sector rotation away from NVDA toward non-NVDA semis is a real regime signal.** SOXX outperforming NVDA validates broad-ETF approach. AVGO custom AI silicon is the new pillar.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser must be kept in sync.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $15–$30 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **News access in workspace is severely limited.** Yahoo Finance RSS and MarketWatch RSS are the primary actionable sources.
- **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
- **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker reconciliation is mandatory.
- **Buying the first intraday spike on a news breakout without a limit can result in poor fill.** Use limit orders to anchor entry.
- **Missing .gitignore or stale tracked files cause repo pollution.** Always verify `git status` and `git check-ignore` after any integrity issue.
- **Event detector state file needs proper async read/write.** Fixed in `src/tools/event_detector.ts` HEAD.
- **Anti-churn rule is code-enforced** in both `alpaca_cli.ts` and `alpaca_client_factory.ts`.
- **Cutting a laggard quickly is better than hoping it recovers.** GOOG realized loss was small (~0.6% of equity) because we acted before it became a larger drag. AVGO loss was also contained (~0.6% of equity).
- **Earnings within 48 hours = binary event.** Do not add to the position ahead of the print unless explicitly justified. Holding a small existing position is acceptable, but be prepared for "sell the news" even on a beat.
- **When all positions are green and market is orderly, the best trade is often no trade.** Let winners run. Cash in reserve is not a drag if gross exposure is within target band.
- **Trailing SPY requires sustained outperformance, not one big bet.** QQQ + SOXX + VOO basket must keep beating SPY.
- **Intraday fade in the final hour is normal.** Do not panic-trim green positions into the close unless a stop is breached or an event is flagged.
- **Fed commentary can flip risk sentiment within minutes.** Maintain cash buffer and do not over-extend before macro clarity.
- **Tactical agent must NOT modify source code.** Any source code changes by the tactical agent are a critical process breach and must be reverted immediately. The hourly strategist is the only role authorized to modify code.
- **Event Response Mode default is HOLD when stops are not breached.** Do not sell winning positions during a volatility surge unless authorized.
- **Major corporate actions (dilutive offerings, acquisitions, regulatory decisions) can override technical signals.** GOOG $84.75B equity offering is a structural negative.
- **Merge conflicts in memory files indicate concurrent agent activity.** Resolve carefully, preserving the most recent authoritative state from both hourly and tactical agents.
- **Tactical agent should update `todo.md` with a brief cycle note after every run, even if no action.** Process gap identified 2026-06-03; monitor.
- **Subagent tool may not be available in all harness configurations.** When unavailable, perform deep research manually via web search and data tools.
- **After-hours prices can diverge significantly from regular session closes.** Always check after-hours marks when evaluating post-earnings or post-event risk.
- **Verify `git diff --stat` against HEAD on every run.** Unauthorized source modifications are a critical breach and must be reverted before trading.
- **With ~$10K equity, a 15% drop in a single stock (AVGO) is a ~$130 unrealized swing but only ~1.3% of equity.** Diversification via QQQ and SOXX limits single-name event risk, but concentrated bets still matter.