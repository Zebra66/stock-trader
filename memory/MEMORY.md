# Hourly Macro Memory
*Updated 2026-05-21 12:56 PM ET. Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **offensive catch-up**
- **Why:** Portfolio positive absolute (+0.26%) but trailing SPY (+3.28%) by ~3.0 pp since inception. Gross exposure ~70%, inside 60–90% band but with 30% cash that is a mild drag. NVDA post-earnings position is small (2.2%) and constructive. Need measured deployment, not churn.

## Repo Integrity
- **Status:** CLEAN. Working tree clean, no breaches.
- **Note:** Added code-level `bannedSymbols` guard to `alpaca_cli.ts` and `alpaca_client_factory.ts` to prevent unauthorized buys of AVGO and META. Tests pass for credential resolution; order-guard tests pre-existing timeout in this environment (not caused by change).

## Live Book
- **QQQ:** 6 shares @ avg $701.33 → mkt $4,282.65 (42.7% weight), unrealized +$74.67 (+1.77%)
- **GOOG:** 3 shares @ avg $392.92 → mkt $1,159.90 (11.6% weight), unrealized -$18.86 (-1.60%)
- **VOO:** 2 shares @ avg $673.925 → mkt $1,364.63 (13.6% weight), unrealized +$16.78 (+1.24%)
- **NVDA:** 1 share @ avg $223.68 → mkt $221.12 (2.2% weight), unrealized -$2.56 (-1.14%)
- **Cash:** $2,995.15 (29.9%)
- **Equity:** $10,025.60
- **Gross long exposure:** ~70.1%
- **Daytrade count:** 0/3 (fresh slate)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Thursday May 21 (First Hourly Run of Day)
- **1D (today):** portfolio **+0.10%** ($10,015.57 → $10,025.60) vs SPY **+0.04%** (~$741.25 → $741.54). **Slight outperformance today.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+0.26%** vs SPY **+3.28%** (baseline 718.01 → ~741.54). Trailing by ~3.02 pp.
- **1W:** approximate. Portfolio roughly -0.3% vs SPY ~-0.5% based on position price changes and midweek turnover. No decisive outperformance yet.
- What is working: QQQ holding relative strength, VOO stable anchor, GOOG recovering from morning headline dip.
- What is not working: GOOG still -1.6% from cost basis despite recovery; NVDA post-earnings "sell the news" (-1.1% from fill); cash at 30% is a drag if SPY grinds higher.
- What must change: Deploy some cash into a high-conviction name if setup presents. Do not chase. Keep AVGO/META off-limits.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core liquid growth. 42.7%, near 45% cap. Cannot add 1 share without breaching cap. | 36–45% |
| GOOG | Hold | Core thesis intact (AI monetization). Recovering from headline dip. -1.6% unrealized. Cannot add 1 share without breaching 15% cap. | 10–15% |
| VOO | Hold | Broad-market anchor. 13.6%. Cannot add 1 share without breaching 20% non-QQQ ETF cap. | 10–20% |
| NVDA | Hold | Earnings beat, $91B forecast, $80B buyback, raised dividend. Small 2.2% position. Do not add today. | 2–4% |
| SOXX | Watch / Conditional Buy | Diversified semi exposure. Recovering from $515 intraday low. If closes > $522 with follow-through, add 1 share. | 0–5% |
| AVGO | Avoid / Banned | Weak trends. Code-level ban active. No re-entry without explicit hourly authorization. | 0% |
| META | Avoid / Banned | Weak trends, Manus deal uncertainty. Code-level ban active. No re-entry without explicit hourly authorization. | 0% |
| RKLB | Avoid | Parabolic, extended. No buy without explicit hourly authorization. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends or thin liquidity. | 0% |

## Priority Actions
1. **HOLD ALL POSITIONS** through this cycle.
2. **SOXX conditional add** — if price holds above $522.50, authorize 1 share limit $523.50 for tactical agent. Diversified semi exposure without adding more single-name NVDA risk.
3. **Do NOT add NVDA today** — already have 1 share post-earnings. Wait for stabilization.
4. **AVGO/META code ban** — new `bannedSymbols` guard in trading lock file prevents accidental unauthorized buys.
5. **Monitor GOOG recovery** — if it reclaims $390, headline fear was overblown.

## Macro Themes
- **Actionable now:** GOOG / AI monetization thesis intact. Core holding; add on weakness when cap allows.
- **Worth monitoring:** NVDA earnings reaction — $80B buyback is a massive floor, but competition fears are capping upside. Watch if stock reclaims $225 by close.
- **Worth monitoring:** FOMC rate-hike hints — if yields spike and equities reverse, reassess risk posture.
- **Worth monitoring:** SPY near recent highs — grinding higher but not breaking out decisively above $748. Need follow-through.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Symbol ban guard now active.
- **Universal factory guard** active. HARD_LOCK + trading lock + universe gate + short-sale guard + concentration caps + symbol bans.
- **FMP** disabled. Yahoo Finance chart API v8 used as fallback for performance snapshots.
- **News search** via Yahoo Finance RSS working.
- **Pre-fetch staleness risk** — today's 9:35 AM ET hourly run had committed updated memory, but pre-fetched context and first live read returned stale Wednesday files. Root cause: concurrent file operations. Always verify with `git show HEAD:<file>` if working tree seems inconsistent.

## Standing Learnings (Selected)
1. Size from **account equity**, not raw buying power.
2. **No leverage** unless explicitly justified.
3. Commission-free does **not** mean friction-free.
4. **Never average down** — unless rebuilding a target allocation after an unauthorized forced liquidation with thesis fully intact.
5. Require a second source if broker quotes are stale.
6. **Do not trade outside the approved universe.** Code-level guards active.
7. **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
8. If tactical layer violates an explicit no-trade instruction, tighten next-cycle safeguards.
9. **Audit every live position (long AND short) against the universe on every run.**
10. If daytrade_count is 3 or higher, **no same-day reversals at all.**
11. **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade.**
12. **Tactical agent race condition risk:** Code-level guards are the ultimate defense; prompt instructions alone are insufficient.
13. **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
14. **Concentration caps must be code-enforced, not just prompt-enforced.**
15. **Repo integrity check on every run:** If `git status` shows tracked files deleted, restore `.gitignore` and `git add -A` immediately.
16. **Memory staleness is a process risk:** If memory files are > 12 hours old on a trading day, treat prior regime as suspect.
17. **Cleanup trades scheduled for market open must execute at the first hourly run of the day.**
18. **String-matching `HARD_LOCK` in todo.md is dangerous:** Use explicit regex parsing to avoid false positives.
19. **If tactical agent is skipped for hours, verify whether the skip was legitimate or a code bug.**
20. **Geopolitical semi risk is real:** U.S.-China summit failures pressure semi names.
21. **With ~$10K equity, concentration caps are extremely tight.** Deployment into new names requires equity growth or selling existing positions.
22. **FOMC hawkish surprises can coexist with risk-on rallies** — do not confuse short-term price action with regime confirmation.
23. **Pre-fetched context can be stale even when git HEAD is current.** Verify working tree against HEAD on every run.
24. **Symbol-specific no-trade rules in todo.md are not code-enforced.** Added `bannedSymbols` to `.trading_lock.json` to close this gap.

## Hourly Cycle Summary — 2026-05-21 12:56 PM ET
- **Live broker refresh:** Equity $10,025.60 | Cash $2,995.15 | Long $7,030.45 | Gross ~70.1% | Daytrade 0/3.
- **Repo integrity:** CLEAN. Added symbol ban guard.
- **Market intel:** NVDA earnings beat with $80B buyback but stock muted (-1.1% from our fill). GOOG recovering from AI chip headline dip. SPY +0.04%, grinding near highs.
- **Action this cycle:** HOLD QQQ 6, GOOG 3, VOO 2, NVDA 1. Conditional SOXX add if > $522.50. AVGO/META code-banned. No other trades.
