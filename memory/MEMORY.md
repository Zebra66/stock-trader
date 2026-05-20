# Hourly Macro Memory
*Updated 2026-05-20 17:06Z (Wednesday 1:06 PM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **offensive catch-up**
- **Why:** Gross exposure at ~63.9%, in 60–90% band but low end. Portfolio still negative absolute (~-0.14%) and trailing SPY (+2.88% since May 4). Goal: deploy cash prudently into high-conviction names while respecting caps and NVDA earnings binary event after close.

## Repo Integrity & Process Fixes
- **Status:** RESTORED at ~1:00 PM ET. Git index again showed all tracked files as deleted/untracked (second breach today; first was ~12:29 PM ET). Fixed via `git reset --mixed HEAD && git checkout HEAD -- .gitignore && git add -A`. Working tree now clean.
- **Critical bug fixed in `src/agent.ts`:** Tactical agent short-circuit used naive `.includes('HARD_LOCK')` on `memory/todo.md`. This matched "HARD_LOCK LIFTED" and caused **every tactical run since 12:35 PM ET to be incorrectly skipped** (12:40, 12:50, and likely all earlier runs today). Fixed to use the same regex logic as `alpaca_cli.ts` / `alpaca_client_factory.ts` — checking for an explicit `HARD_LOCK ... LIFTED` prefix before treating the lock as inactive. All 120 tests pass.
- **Impact:** Tactical layer was effectively dead for ~5 hours today. No unauthorized orders missed, but no authorized execution occurred either. Next tactical runs (1:10, 1:20, 1:30, 1:40, 1:50 PM ET) should now execute normally.

## Live Book
- **QQQ:** 6 shares @ avg $699.39 → mkt $4,260.18 (42.65% weight), unrealized +$63.84 (+1.52%)
- **GOOG:** 2 shares @ avg $397.58 → mkt $764.30 (7.65% weight), unrealized -$30.86 (-3.88%)
- **VOO:** 2 shares @ avg $673.925 → mkt $1,359.50 (13.61% weight), unrealized +$11.65 (+0.86%)
- **Cash:** $3,602.44 (36.09%)
- **Equity:** ~$9,985.84
- **Gross long exposure:** ~63.91%
- **Daytrade count:** 3 (all from Tuesday). PDT: false.
- **Open orders:** NONE

## Performance Review
- **Since inception (2026-05-04 baseline $10,000):** portfolio **-0.14%** vs SPY **+2.88%**. Trailing by ~3.0 pp.
- **Today (1D):** portfolio roughly +0.85% vs SPY +0.68%. Slight outperformance maintained through the session.
- **Dominant failure mode:** excessive turnover / unauthorized execution + realized losses from forced liquidation (Tuesday). Cleanup complete; now adding back disciplined exposure.

## Market Intel — Wednesday Midday
- **NVDA earnings after close tonight** — largest binary event for semi complex.
- **Samsung strike risk** emerging Thu — bullish memory-tightness narrative. NVDA, AMD, Micron rallying into this. Could support semi post-earnings if NVDA guidance is constructive.
- **GOOG** — UK union recognition denied (minor headline, non-material). UBS AI monetization note + Blackstone data-center deal remain core thesis.
- **SPY at all-time highs (~738–739).** No broad risk-off yet. Small-caps bouncing off support (Yahoo headline).
- **AMD +8%** pre-NVDA earnings. Semi laggards (MACOM, AMAT) still weak but leaders strong.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core liquid growth. 42.6%, room to 45%. No add until cap headroom allows ≥1 share. | 36–45% |
| GOOG | Add 1 share after ~13:52 ET | Blackstone AI data-center + UBS monetization note. Rebuild to 3 shares (~11.5%). Cooldown from unauthorized Tue sell expires at ~13:52 ET. | 10–15% |
| VOO | Hold | Broad-market anchor. 13.6%; add only on dip to stay ≤20%. | 10–20% |
| NVDA | Wait / Rebuild Thu | Earnings tonight. No position. Rebuild only on constructive reaction Thursday. | 2–4% |
| SOXX | Watch / Defer | Re-assess after NVDA earnings. Daily close > $520 for entry signal. | 0–5% |
| AVGO | Avoid / Cooldown | Liquidated today. 24h cooldown. Weak 1W trend. | 0% |
| META | Avoid / Cooldown | Liquidated today. 24h cooldown. Weak 1M/1Y trends. | 0% |
| RKLB | Avoid | Parabolic, extremely volatile. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM | Avoid | Weak trends or thin liquidity. | 0% |
| GLD | Avoid | Only if macro turns decisively risk-off. | 0–5% |

## Priority Actions
1. **GOOG +1 share** — authorize at 1:35 PM ET hourly (cooldown expires ~1:52 PM ET). Limit ~$382.25.
2. **NVDA/SOXX Thursday triggers** — set at 1:35 PM ET based on tonight's reaction.
3. **Monitor QQQ cap** — if equity rises, 1 additional QQQ share stays under 45%.

## Macro Themes
- **Actionable now:** GOOG/Blackstone + UBS AI monetization. Core holding; add on weakness.
- **Worth monitoring:** NVDA earnings tonight — AI competition, China updates, Blackwell ramp guidance.
- **Worth monitoring:** Samsung strike risk (Thu) — memory supply tightening, bullish for SOXX/NVDA if guidance is good.
- **Interesting but not actionable yet:** AI power demand. No pure-play in universe.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active. HARD_LOCK + trading lock + universe gate enforced.
- **FMP** disabled. Yahoo Finance chart API v8 used as fallback.
- **News search** via Yahoo Finance RSS working; Google News RSS blocked.
- **Tactical agent** was dead ~5 hours due to `src/agent.ts` string-matching bug. Now fixed.

## Standing Learnings (Selected)
1. Size from **account equity**, not raw buying power.
2. **No leverage** unless explicitly justified.
3. Commission-free does **not** mean friction-free.
4. Never average down.
5. Require a second source if broker quotes are stale.
6. **Do not trade outside the approved universe.** Code-level guards active.
7. **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
8. If tactical layer violates an explicit no-trade instruction, default next cycle to **cleanup-only hard lock**.
9. **Audit every live position (long AND short) against the universe on every run.**
10. If daytrade_count is 3 or higher, **no same-day reversals at all**.
11. **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade.**
12. **Tactical agent race condition risk:** Code-level guards are the ultimate defense; prompt instructions alone are insufficient.
13. **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
14. **Concentration caps must be code-enforced, not just prompt-enforced.**
15. **Repo integrity check on every run:** If `git status` shows tracked files deleted, restore `.gitignore` and `git add -A` immediately.
16. **Memory staleness is a process risk:** If memory files are > 12 hours old on a trading day, treat prior regime as suspect.
17. **Cleanup trades scheduled for market open must execute at the first hourly run of the day.**
18. **String-matching `HARD_LOCK` in todo.md is dangerous:** Use explicit regex parsing (`HARD_LOCK ... LIFTED`) to avoid false positives that silently kill tactical execution.
19. **If tactical agent is skipped for hours, verify whether the skip was legitimate (lock + no events) or a code bug.** In this case it was a code bug — `includes()` matched "HARD_LOCK LIFTED".
20. **Geopolitical semi risk is real:** U.S.-China summit failures on semiconductor sales pressure semi names.

## Hourly Cycle Summary — 2026-05-20 17:06Z (Wednesday 1:06 PM ET)
- **Live broker refresh:** Equity $9,985.84 | Cash $3,602.44 | Long $6,383.40 | Gross ~63.91% | Daytrade 3/3.
- **Repo integrity breach detected AGAIN:** All tracked files deleted from git index (same pattern as 12:29 PM ET). Restored and working tree clean.
- **Critical bug found & fixed:** `src/agent.ts` tactical short-circuit `.includes('HARD_LOCK')` falsely matched "HARD_LOCK LIFTED". Fixed to regex parsing. All 120 tests pass.
- **Market intel:** Samsung strike risk bullish for semis. NVDA + AMD rallying. SPY at highs. GOOG UK union news minor.
- **No orders placed this cycle:** Bug-fix and repo restoration only. Next expected action: 1:35 PM ET — authorize GOOG +1 share (cooldown expires ~1:52 PM ET).
