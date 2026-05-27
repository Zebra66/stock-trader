# Hourly Macro Memory
*Updated 2026-05-27 13:35Z (Wednesday 9:35 AM ET). Market OPEN until 16:00 ET.*

## Hourly Cycle Summary — 2026-05-27 13:35Z (Wednesday 9:35 AM ET)
- **Status:** Market OPEN.
- **Repo integrity:** CRITICAL BREACH DETECTED and RESOLVED. Local branch was 442 commits behind `origin/main`; all tracked files deleted from git index. Ran `git reset --hard origin/main` to align with remote truth (HEAD `9b0b9df7`). Working tree now clean.
- **Live broker refresh:** Equity $10,157.57 | Cash $2,244.52 | Long $7,913.05 | Gross 77.9% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1.
- **Open orders:** NONE.
- **Filled trades since last hourly:** NONE (all orders since May 26 were canceled).
- **Goal check:** Portfolio +1.58% since inception vs SPY +4.53% (750.57 vs 718.01 baseline). Goal 1 (positive absolute) MET. Goal 2 (beat SPY) off track by ~2.95 pp.
- **Regime:** Offensive catch-up. Target gross exposure 80–90%. Current 77.9% — slightly below band. Need to deploy ~$213–$1,229.
- **Orders placed this cycle:** None yet. Authorizing: SELL 1 NVDA (trim unauthorized add), BUY 1 AVGO (catch-up play), LIMIT BUY 1 SOXX on pullback.
- **Code changes:** Restored `bannedSymbols: ["META"]` to `memory/.trading_lock.json` after discovering it was lost during the repo reset/merge cycle.
- **Next expected action:** 10:35 AM ET hourly — monitor fills, NVDA/AVGO price action, SOXX pullback.

---

## Repo Integrity
- **Status:** Restored at 9:35 AM ET. Git index showed all tracked files as deleted/untracked. Local `main` was 442 commits behind `origin/main`.
- **Resolution:** `git reset --hard origin/main` to HEAD `9b0b9df7`. This preserved all agent commits and memory history. Working tree clean.
- **Post-restoration fix:** `memory/.trading_lock.json` had lost its `bannedSymbols` array during prior merges. Restored META ban.

## Breach Alert — Status: Resolved (Historical)
- Prior-cycle NVDA unauthorized add (May 26) is now a known historical breach. Position remains 2 shares.
- Remediation today: trim 1 share to restore intended 1-share allocation.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $730.525 | $4,383.15 | 43.2% | +$175.17 | +4.16% |
| GOOG | 3 | $392.92 | $384.79 | $1,154.37 | 11.4% | –$24.39 | –2.07% |
| VOO | 2 | $673.925 | $690.15 | $1,380.30 | 13.6% | +$32.45 | +2.41% |
| SOXX | 1 | $533.95 | $570.36 | $570.36 | 5.6% | +$36.41 | +6.82% |
| NVDA | 2 | $220.195 | $212.36 | $424.72 | 4.2% | –$15.67 | –3.56% |
| Cash | — | — | — | $2,244.52 | 22.1% | — | — |
| **Equity** | — | — | — | **$10,157.57** | **100%** | — | **+1.58%** |

- **Gross long exposure:** 77.9%
- **Net exposure:** 77.9%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — First Hourly of Day (Wed May 27)
- **1D (today):** portfolio **–0.07%** ($10,164.90 → $10,157.57) vs SPY **~+0.04%** (~750.46 → 750.57). Slight underperformance.
- **1W (May 20 → May 27):** portfolio **+1.79%** ($9,978.63 → $10,157.57) vs SPY **+1.62%** (~738.70 → 750.57). **Outperforming SPY over 1W by ~0.17 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+1.58%** vs SPY **+4.53%** (baseline 718.01 → 750.57). Still trailing by ~2.95 pp.
- What is working: QQQ core growth (+4.16% unrealized, +4.05% 1W). SOXX momentum (+6.82% unrealized, +14.18% 1W). VOO anchor steady (+2.41% unrealized, +2.29% 1W).
- What is not working: NVDA relative weakness within chip sector (–3.56% unrealized, –3.74% 1W, –1.16% today). GOOG still underwater (–2.07% unrealized) despite orbital data-center headline.
- What must change: Trim NVDA back to intended 1-share allocation. Deploy cash into AVGO (earnings June 3, catch-up play). Let SOXX/QQQ momentum run. Do NOT chase SOXX at $572.

## Goal Check
- **Portfolio since inception:** +1.58% ($10,157.57 vs $10,000 base)
- **S&P 500 since inception:** +4.53% (SPY 750.57 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~2.95 pp). **Goal 1 (positive absolute) is MET.**
- **Dominant failure mode:** **cash drag + late entries / poor execution.** Unauthorized NVDA add consumed cash without improving alpha. 22% cash remains too high for offensive catch-up with SPY at highs.

## Market Intel — Wednesday 9:35 AM ET
- **Overnight/Pre-market headlines:** Tech rally continues per Yahoo Finance. S&P 500, Nasdaq futures rose as oil falls amid US-Iran talks. Micron $1T market-cap story continues to lift sentiment.
- **IREN / Dell $1.6B AI deal:** Uses NVIDIA Blackwell systems. Positive for NVDA but stock down –1.16% — market not rewarding the news.
- **Broadcom product news:** Unveiled 5G/Wi-Fi 8 FWA platform with Samsung, plus Wi-Fi 8 SoCs for mesh routers. Positive pre-earnings catalyst.
- **Alphabet / GOOG:** "Alphabet Explores Orbital Data Centers To Power Long Term AI Growth." Long-term positive.
- **META:** Investor votes on child safety/hate moderation. No position; bannedSymbols active.
- **Sector action:** AVGO +0.88%, GOOG +0.38%, NVDA –1.16%, QQQ –0.05%, SOXX –0.51%, SPY flat. Chip sector taking a breather after massive Tuesday run; SOXX slightly lower.
- **Macro risk monitor:** US-Iran talks progressing (oil down). No new Fed Chair Warsh headlines. No escalation.
- **News access:** Yahoo Finance RSS providing actionable headlines. Google/Bing search blocked from bash. FMP disabled. Yahoo Finance chart API v8 used as fallback.
- **Earnings dates:** AVGO earnings catalyst expected June 3 (per prior intel). No other binary events in next 48 hours.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core liquid growth. 43.2%, near 45% cap. Adding 1 share would breach cap. Momentum intact. | 36–45% |
| GOOG | Hold | Core thesis intact. 11.4%, within 15% cap. Adding 1 share would breach cap (~15.1%). Orbital data-center headline positive. | 10–15% |
| VOO | Hold | Broad-market anchor. 13.6%, within 20% cap. Adding 1 share would breach 20% cap (~20.3%). | 10–20% |
| SOXX | Hold / Add on pullback | Breakout validated. 5.6% weight. +6.82% unrealized. Do NOT chase at $572. Add only on pullback to $568 or below. | 5–12% |
| NVDA | Trim to 1 share | Unauthorized 2nd share at $216.71. Relative weakness within surging chip sector. Trim to intended 1-share allocation. Remaining share: stop at $210. | 2–4% |
| AVGO | Buy 1 share | Quality catch-up play within chip rally. Earnings June 3. Wi-Fi 8 / 5G product catalysts. Limit $429.50 or market. Weight ~4.2%. | 3–6% |
| META | Avoid | bannedSymbols active. Supreme Court rejection + weak 1M trend. No re-entry. | 0% |
| RKLB | Avoid | Parabolic on SpaceX/OpenAI IPO buzz. 1M +72.81%. No edge. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends or thin liquidity. | 0% |

## Priority Actions
1. **SELL 1 share NVDA** — trim unauthorized add back to intended 1-share allocation. Use limit $212.50 or market. Rationale: laggard within chip sector; cost basis damage from unauthorized add.
2. **BUY 1 share AVGO** — quality catch-up play ahead of June 3 earnings. Limit $429.50 or market if near. Weight ~4.2%.
3. **LIMIT BUY 1 share SOXX at $568.00** — add to winner on healthy pullback only. DO NOT chase above $570.
4. **HOLD QQQ 6, GOOG 3, VOO 2, SOXX 1** — no changes.
5. **Cash target after AVGO fill:** ~$2,028. Gross exposure target: 80–90%.
6. **Monitor NVDA stop:** Remaining 1 share — SELL if breaks below $210.00.

## Macro Themes
- **Actionable now:** SOXX semiconductor breakout — hold 1 share, add 1 more on pullback. AVGO pre-earnings catch-up with product catalysts.
- **Worth monitoring:** NVDA relative weakness vs broad semis. Dell/IREN Blackwell deal not moving stock = potential rotation signal.
- **Worth monitoring:** US-Iran talks progression = oil down = risk-on tailwind.
- **Worth monitoring:** GOOG orbital data centers — long-term AI infrastructure expansion.
- **Interesting but not actionable yet:** QTUM quantum ETF hitting highs on government tailwinds. Too thin; no position.

## Historical Performance Snapshot (Yahoo Finance v8, May 27 9:35 AM ET)
| Symbol | Price | 1D | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|---|---|
| AVGO | $425.73 | +0.88% | +3.57% | +1.80% | +29.15% | +24.81% | +82.13% |
| EIS | $137.99 | +0.58% | +6.68% | +8.64% | +12.75% | +32.08% | +66.57% |
| GLD | $405.11 | –2.15% | –1.55% | –5.76% | –15.83% | +7.75% | +33.04% |
| GOOG | $386.32 | +0.38% | +0.37% | +10.85% | +24.03% | +39.67% | +122.82% |
| HOOD | $74.96 | +1.17% | +1.07% | –10.71% | +4.42% | –38.81% | +13.53% |
| META | $612.47 | +0.02% | +1.64% | –9.75% | –3.81% | +0.66% | –4.35% |
| NVDA | $212.37 | –1.16% | –3.74% | –1.96% | +10.88% | +11.69% | +56.77% |
| QQQ | $729.92 | –0.05% | +4.05% | +9.89% | +21.52% | +20.19% | +40.72% |
| QTUM | $156.55 | –1.31% | +11.32% | +18.70% | +36.06% | +47.32% | +81.14% |
| RKLB | $142.21 | –0.69% | +11.70% | +72.81% | +102.54% | +212.26% | +394.45% |
| SHLD | $65.34 | –1.19% | +2.06% | –3.17% | –12.11% | +1.40% | +15.46% |
| SOXX | $567.20 | –0.51% | +14.18% | +24.55% | +59.06% | +97.00% | +172.74% |
| VOO | $690.04 | 0.00% | +2.29% | +4.95% | +10.29% | +12.36% | +28.52% |
| ARKX | $35.92 | –1.07% | +6.62% | +8.06% | +12.00% | +29.98% | +69.51% |
| SPY | $750.57 | ~0.00% | +2.30% | +4.95% | +10.29% | +12.34% | +28.42% |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access** via Yahoo Finance RSS working; direct web search blocked.
- **Alpaca `get-latest-price` bars** timestamps at 13:36:00Z (9:36 AM ET), acceptable freshness.
- **Day-trade status:** 1/3. No same-day issues.
- **SOXX liquidity:** 97 trades, 4,799 vol at 13:36Z — acceptable for limit orders.
- **AVGO liquidity:** 86 trades, 3,353 vol at 13:36Z — acceptable for market/limit orders.
- **NVDA liquidity:** 413 trades, 44,128 vol — highly liquid.
- **Earnings dates:** AVGO expected June 3 (per prior intel). No other binary events in next 48 hours.
- **Lock file:** Restored `bannedSymbols: ["META"]` after discovering it was stripped during prior merge/reset.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted or branch behind origin/main by >5 commits, restore/align before trading.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; GOOG at 3-4 shares; VOO at 2 shares.
- **Chip-sector rotation away from NVDA toward non-NVDA semis is a real regime signal.** SOXX outperforming NVDA validates broad-ETF approach.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Chasing a +14% weekly move in an ETF is not disciplined deployment.** Wait for pullbacks.
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser must be kept in sync.

---

## Tactical Execution — 2026-05-27 13:53Z (Wednesday 9:53 AM ET)
- **Trades executed this cycle:**
  1. **SELL 1 NVDA** at market. Filled at ~$211.79. Trimmed unauthorized add back to intended 1-share allocation.
  2. **BUY 1 AVGO** limit $429.50. Filled at ~$427.37. New position; weight ~4.2%.
  3. **BUY 1 SOXX** limit $568.00. Filled at ~$567.54. Added to winner on pullback.
- **Post-execution holdings:** QQQ 6, GOOG 3, VOO 2, SOXX 2, NVDA 1, AVGO 1
- **Cash:** $1,460.40 (~14.4%)
- **Gross exposure:** 85.6% (within 80–90% target band)
- **Daytrade count:** 1/3 (unchanged — no daytrades this cycle)
- **Open orders:** NONE
- **Next expected action:** Monitor NVDA stop at $210.00, AVGO/SOXX momentum, next hourly at 10:35 AM ET.
