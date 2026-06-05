# Tactical Override — 2026-06-05 13:50Z (Friday 9:50 AM ET)
**[AUTONOMOUS_OVERRIDE]** Event detector classification: **MAJOR** (SOXX –1.27% in 10 min, prior $573.67 → current $566.37).
- Held positions checked against authorized stops: **none breached.**
  - NVDA $213.02 vs stop $210.00 — OK
  - QQQ $725.68 vs stop $720.00 — OK
  - VOO $689.15 vs stop $680.00 — OK
- Protective sells: **NONE EXECUTED.** MAJOR event was in SOXX, which is **not held** (qty 0).
- Buy conditions: All buy lines already marked DO NOT BUY / DO NOT ADD; no active buys to suspend.
- Gross exposure remains ~61.2% (neutral band 60–70%).
- No new positions opened. No exposure increased.
- Next hourly reassessment at 14:35Z.

---

# Hourly Macro Memory
*Updated 2026-06-05 13:35Z (Friday 9:35 AM ET). Market OPEN.*

## Hourly Cycle Summary — 2026-06-05 13:35Z
- **Status:** Market OPEN. ~3h 25m to close. Next open: Monday June 8, 09:30 ET.
- **Repo integrity:** CRITICAL BREACH DETECTED AND RESOLVED. `.gitignore` was missing, `node_modules` was tracked in the index (24,783 files), and `memory/MEMORY.md` + `memory/todo.md` in the working tree were reverted to stale May 29 content while HEAD had June 4 commits. Safety code (anti-churn guards + order audit trail) was found staged for REMOVAL in `src/tools/` — reverted to HEAD immediately. All integrity restored and committed.
- **Live broker refresh:** Equity $10,128.80 | Cash $3,936.17 | Long $6,192.63 | Gross 61.2% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, VOO 2, NVDA 2. SOXX 0, AVGO 0, GOOG 0.
- **Open orders:** NONE.
- **Filled trades since prior hourly (Jun 4 18:35Z):** NONE. Tactical agent ran at :40, :50 on Jun 4 and Jun 5 pre-open — all no-action.
- **Goal check:** Portfolio +1.29% since inception vs SPY +4.79% (751.41 vs 718.01 baseline). Goal 1 (positive absolute) MET. Goal 2 (beat SPY) **off track by ~3.5 pp**.
- **Regime:** Neutral. Target gross exposure 60–70%. Current 61.2% — within band. No deployment this cycle.
- **Next expected action:** Reassess semi-sector stabilization after AVGO earnings washout. Evaluate NVDA add on deeper pullback (respecting anti-churn). Monitor QQQ/VOO cap relief if prices drop materially.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $730.03 | $4,380.18 | 43.3% | +$172.20 | +4.09% |
| VOO | 2 | $673.925 | $691.727 | $1,383.45 | 13.7% | +$35.60 | +2.64% |
| NVDA | 2 | $218.11 | $214.32 | $428.64 | 4.2% | –$7.58 | –1.74% |
| Cash | — | — | — | $3,936.17 | 38.9% | — | — |
| **Equity** | — | — | — | **$10,128.80** | **100%** | — | **+1.29%** |

- **Gross long exposure:** 61.2%
- **Net exposure:** 61.2%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Fri Jun 5 (9:35 AM ET)
- **1D (today):** portfolio **–0.79%** ($10,209.27 → $10,128.80) vs SPY **–0.75%** (~$758.14 → $751.41). **Roughly matching SPY today.**
- **1W (May 29 → Jun 5):** portfolio **–0.71%** ($10,201.51 → $10,128.80) vs SPY **–0.77%** (~$757.24 → $751.41). **Outperforming SPY over 1W by ~0.06 pp.**
- **2W (May 22 → Jun 5):** portfolio **~+1.39%** (est. $9,990 → $10,128.80) vs SPY **~+1.19%** (est. $742.60 → $751.41). **Outperforming SPY over 2W by ~0.20 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+1.29%** vs SPY **+4.79%**. Still trailing by ~3.5 pp.
- What is working: QQQ core holding up (+4.09% unrealized). VOO anchor stable (+2.64%). 1W/2W relative performance is slightly positive.
- What is not working: NVDA entry at $218.11 is underwater (–1.74%). Cash drag persists (38.9% cash). AVGO/GOOG/SOXX were sold after significant damage had already been done (AVGO stop at $405 after $439 highs; GOOG sold ~$371 after $379 lows).
- What must change: To close the 3.5 pp gap, we need either (1) a sustained rally in current holdings, or (2) a well-timed deployment into high-conviction names on a dip. Deploying into a falling tape today is not justified.

## Goal Check
- **Portfolio since inception:** +1.29% ($10,128.80 vs $10,000 base)
- **S&P 500 since inception:** +4.79% (SPY 751.41 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~3.5 pp). **Goal 1 (positive absolute) is MET but margin is thin.**
- **Dominant failure mode:** **Cash drag + late entries / poor execution.** Portfolio has been under-deployed since the June 4 sell-down of AVGO/SOXX/GOOG. The NVDA add at $218.11 was intended to restore exposure but the entry was immediately underwater. The gap to SPY is structural — we need higher gross exposure in rising names, but current tape is risk-off in tech/semis.

## Market Intel — Friday 9:35 AM ET
- **Broad market:** S&P 500 and Nasdaq lower on risk-off sentiment. SPY –0.75%, QQQ –1.61%. Defensive tone after AVGO earnings miss / weak guidance and broad semiconductor weakness.
- **Semiconductor sector:** AVGO crushed (–4.2% today, –10.2% 1W) post-earnings. SOXX –5.16% today. NVDA –2.39% but holding up relatively better than AVGO/SOXX. Clear risk-off rotation out of semis.
- **AVGO / Broadcom:** $401.31. Earnings reaction devastating. Prior $36B Anthropic deal headlines are now overshadowed by weak guidance. Fully exited June 4 at $405.16 (stop triggered). 24-hour cooldown expires at ~13:45Z today. **Do not re-buy today.** Defer to Monday reassessment.
- **Alphabet / GOOG:** $367.12. Support $375–$380 clearly broken. Down –0.58% today, –2.47% 1W, –7.09% 1M. Weak. No re-entry until it reclaims $375 with volume.
- **NVIDIA / NVDA:** $214.32. Best 1-week momentum among chip names (+1.09% 1W). Down –2.39% today in sympathy with semi selloff. Current position small (4.2% weight). Stop $210 intact.
- **Rocket Lab / RKLB:** $115.46. Down –19.53% 1W. Space sector destroyed. Avoid.
- **META:** Banned. Down –1.08% 1W. No re-entry.
- **HOOD:** $85.74. Down –9.08% 1W. Momentum reversed. Avoid.
- **Fed / Macro:** No new Fed headlines. Risk-off appears sector-specific (tech/semis) rather than macro-driven. VOO/SPY down only ~0.75% vs QQQ –1.61% and SOXX –5.16%.
- **News access:** Yahoo Finance RSS primary source. Direct web search partially available (Google returned 200 on test). FMP disabled.
- **Earnings dates:** AVGO reported this week (reaction negative). NVDA est. Aug 26; GOOG est. Jul 23; META est. Jul 29; HOOD est. Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 43.3%, near 45% cap. No practical add capacity. | 36–45% |
| VOO | Hold | Broad-market anchor. 13.7%, within 20% cap. 3rd share would breach cap. | 10–20% |
| NVDA | Hold / Stop $210 | Chip exposure with best 1W momentum in sector. Small 4.2% weight. Stop protects downside. Do NOT average down. | 4–10% |
| AVGO | Avoid today | Post-earnings freefall. 24h cooldown until 13:45Z. Even after, too early to catch knife. | 0–6% |
| GOOG | Avoid | Broken support $375. Weak 1M/1W. No re-entry until reclaim. | 0–8% |
| SOXX | Avoid today | Sold Jun 4. 24h cooldown until ~15:19Z. Sector –5% today. Defer to Monday. | 0–10% |
| META | Avoid | bannedSymbols active. No re-entry. | 0% |
| HOOD / RKLB / ARKX / EIS / QTUM / GLD / SHLD | Avoid | Weak trends, thin liquidity, parabolic reversal, or no edge. | 0% |

## Priority Actions
1. **HOLD all positions.** No new orders this cycle. Gross exposure 61.2% is within 60–70% neutral band.
2. **NVDA defensive stop:** SELL all NVDA shares if price drops below $210.00 with limit $209.50. Rationale: protect capital on deeper semi-sector breakdown.
3. **QQQ defensive stop:** SELL 1 share if price drops below $720.00 with limit $719.50. Rationale: trim core on broad risk-off breakdown.
4. **VOO defensive stop:** SELL 1 share if price drops below $680.00 with limit $679.50. Rationale: trim anchor on severe broad-market breakdown.
5. **Cash reserve:** ~$3,936 (~38.9%). Reserve for Monday deployment if semi-sector stabilizes (SOXX re-entry >$560, NVDA add <$210 with support hold, GOOG reclaim $375). Requires fresh hourly authorization.
6. **AVGO 24h cooldown:** Expires ~13:45Z today. Even after expiry, hourly does NOT authorize re-buy today. Defer to Monday.
7. **SOXX 24h cooldown:** Expires ~15:19Z today. Hourly does NOT authorize re-buy today. Defer to Monday.
8. **Tactical agent:** Monitor NVDA $210 stop. No other triggers authorized.

## Macro Themes
- **Actionable now:** Risk-off rotation in tech/semis is real. AVGO earnings catalyzed the move. Stay defensive in semis; do not add exposure to the sector today.
- **Worth monitoring:** NVDA is the relative-strength leader in chips (+1.09% 1W vs AVGO –10.18%, SOXX +0.45%). If semis bounce, NVDA is likely to lead. Watch for stabilization next week.
- **Worth monitoring:** GOOG support break at $375. If it reclaims $375 with volume, could be a mean-reversion play. Until then, avoid.
- **Interesting but not actionable yet:** QTUM quantum computing ETF +45% 3M. Government investment headlines continue. Thin and extended; no entry on a risk-off day.
- **Interesting but not actionable yet:** RKLB still a SpaceX IPO proxy but space sector damaged (Blue Origin explosion aftermath + RKLB –19.53% 1W). Avoid.

## Historical Performance Snapshot (Yahoo Finance v8, Jun 5 ~9:35 AM ET)
| Symbol | Price | 1D | 1W | 1M | 3M | 1Y |
|---|---|---|---|---|---|---|
| AVGO | $401.31 | –4.20% | –10.18% | –5.67% | +21.43% | +54.39% |
| EIS | $127.74 | –1.31% | –7.23% | –6.45% | +1.61% | +48.33% |
| GLD | $403.55 | –1.88% | –3.25% | –6.36% | –14.77% | +30.46% |
| GOOG | $367.12 | –0.58% | –2.47% | –7.09% | +23.07% | +116.19% |
| HOOD | $85.74 | –2.93% | –9.08% | +8.46% | +11.22% | +18.25% |
| META | $625.67 | –0.30% | –1.08% | +2.09% | –2.98% | –8.61% |
| NVDA | $213.44 | –2.39% | +1.09% | +2.70% | +20.03% | +52.47% |
| QQQ | $728.72 | –1.61% | –1.30% | +4.74% | +21.50% | +38.86% |
| QTUM | $159.39 | –4.27% | –0.23% | +10.95% | +45.44% | +84.28% |
| RKLB | $115.46 | –3.74% | –19.53% | +36.40% | +64.68% | +336.52% |
| SHLD | $64.00 | N/A | –5.23% | –5.83% | –17.14% | +9.59% |
| SOXX | $571.63 | –5.16% | +0.45% | +12.78% | +76.70% | +164.78% |
| VOO | $690.88 | –0.74% | –0.66% | +2.40% | +11.72% | +26.75% |
| ARKX | $35.43 | –2.55% | –5.21% | +4.77% | +13.38% | +68.97% |
| SPY | $751.41 | –0.75% | –0.67% | +2.39% | +11.75% | +26.70% |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS primary. Google direct search test returned 200; availability uncertain.
- **Alpaca `get-latest-price` bars** timestamps at 13:34Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **SOXX liquidity:** 56 trades, 3,020 vol at 13:34Z — acceptable for limit orders.
- **AVGO liquidity:** Healthy at 369 trades, 29,098 vol in latest 10-min bar.
- **Earnings dates:** AVGO reported this week (negative reaction). No binary events in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$10.1K equity, QQQ capped at 6 shares; VOO capped at 2 shares practically; NVDA up to 5 shares; GOOG up to 4 shares.
- **Repo hygiene:** RESTORED. `.gitignore` effective. `node_modules` and `temp_files` removed from index. Safety code in `src/tools/` preserved.
- **Critical repo incident:** Working-tree `memory/MEMORY.md` and `memory/todo.md` were reverted to May 29 content while HEAD had June 4 commits. This indicates a prior process overwrote the files incorrectly (possible `git checkout` or direct write by an agent without reading HEAD first). Added to standing learnings: always verify working tree against HEAD before writing memory files.
- **Event detector note:** `priorTimestamp` continues to be null. State file (`memory/tactical_last_prices.json`) appears to be overwritten without reading prior state before report generation. Needs code fix.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted/staged-as-deleted or branch behind origin/main by >5 commits, restore/align before trading.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; VOO at 2 shares practically.
- **Chip-sector rotation away from NVDA toward non-NVDA semis was a false signal.** SOXX and AVGO have now massively underperformed NVDA post-earnings. NVDA remains the quality anchor in chips.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser must be kept in sync.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **News access in workspace is severely limited.** Yahoo Finance RSS is the primary actionable source.
- **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
- **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker reconciliation is mandatory.
- **Buying the first intraday spike on a news breakout without a limit can result in poor fill.** Use limit orders to anchor entry.
- **Missing .gitignore or stale tracked files cause repo pollution.** Always verify `git status` and `git check-ignore` after any integrity issue.
- **Event detector state file (`memory/tactical_last_prices.json`) needs investigation.** It appears to reset between runs, causing `priorTimestamp: null` and zero pctChange values.
- **Working-tree memory files can diverge from HEAD.** Always verify `git diff HEAD -- memory/` before acting on pre-fetched context. If divergent, restore from HEAD.
- **Staged code changes that remove safety guards must be treated as a critical breach.** Never commit anti-churn or audit-trail removals without explicit hourly authorization.
