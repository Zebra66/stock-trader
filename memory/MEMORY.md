# Hourly Macro Memory
*Updated 2026-05-28 13:35Z (Thursday 9:35 AM ET). Market OPEN until 16:00 ET.*

## Hourly Cycle Summary — 2026-05-28 13:35Z (Thursday 9:35 AM ET)
- **Status:** Market OPEN. First hourly of the day.
- **Repo integrity:** Critical breach resolved — `.gitignore` was missing, causing ~24k `node_modules` files to be staged. Restored `.gitignore` from HEAD, unstaged ignored paths with `git rm --cached -r`, committed restoration, and pushed.
- **Live broker refresh:** Equity $10,109.93 | Cash $1,670.50 | Long $8,439.43 | Gross 83.5% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6, GOOG 3, VOO 2, SOXX 2, AVGO 1.
- **Open orders:** NONE.
- **Filled trades since prior hourly (Wed 3:35 PM ET):** NONE. Tactical agent held all positions.
- **Goal check:** Portfolio +1.10% since inception ($10,000 base) vs SPY +4.38% (baseline 718.01 → 749.46). **Goal 1 (positive absolute) MET.** Goal 2 (beat SPY) **off track by ~3.3 pp**.
- **Regime:** Offensive catch-up. Target gross exposure 80–90%. Current 83.5% — within band.
- **Orders placed this cycle:** None. HOLD all positions.
- **Next expected action:** 10:35 AM ET hourly — evaluate NVDA re-entry after 24-hour cooldown expires at 10:30 AM ET.

---

## Repo Integrity
- **Status:** Clean after restoration. `git status` shows only expected tracked modifications (`memory/tactical_last_prices.json`). Branch aligned with origin/main (0 ahead/0 behind).
- **Prior breach resolved:** Missing `.gitignore` caused staged node_modules on May 28. Fixed and committed.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $728.38 | $4,370.28 | 43.2% | +$162.30 | +3.86% |
| GOOG | 3 | $392.92 | $382.95 | $1,148.85 | 11.4% | –$29.91 | –2.54% |
| VOO | 2 | $673.925 | $689.195 | $1,378.39 | 13.6% | +$30.54 | +2.27% |
| SOXX | 2 | $550.97 | $562.52 | $1,125.04 | 11.1% | +$23.10 | +2.10% |
| AVGO | 1 | $427.37 | $416.87 | $416.87 | 4.1% | –$10.50 | –2.46% |
| Cash | — | — | — | $1,670.50 | 16.5% | — | — |
| **Equity** | — | — | — | **$10,109.93** | **100%** | — | **+1.10%** |

- **Gross long exposure:** 83.5%
- **Net exposure:** 83.5%
- **Daytrade count:** 1/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Thu May 28 (9:35 AM ET)
- **1D (today vs yesterday close):** portfolio **–0.25%** ($10,134.92 → $10,109.93) vs SPY **–0.13%** ($750.46 → $749.46). **Underperforming SPY by ~0.12 pp today.**
- **1W (May 21 → May 28):** portfolio **+1.32%** ($9,978.63 → $10,109.93) vs SPY **+1.11%** ($741.25 → $749.46). **Outperforming SPY over 1W by ~0.21 pp.**
- **2W (May 14 → May 28):** portfolio **+0.17%** ($10,093.31 → $10,109.93) vs SPY **+0.96%** ($742.31 → $749.46). **Underperforming SPY over 2W by ~0.79 pp.**
- What is working: QQQ core growth (+3.86% unrealized, +2.18% 1W). VOO anchor steady (+2.27% unrealized). SOXX overall position +2.10% despite 2nd share underwater.
- What is not working: GOOG deeper underwater (–2.54% unrealized, down from –1.71% yesterday). AVGO morning add now –2.46% from $427.37 entry. Both are drag sources.
- What must change: To close the ~3.3 pp gap vs SPY, we need either a rotation out of underperformers (GOOG/AVGO) into higher-momentum names, or a new catalyst-driven add. Cash drag (16.5%) is manageable but not helpful in a flat tape. NVDA re-entry after cooldown is the most likely near-term alpha source.

## Goal Check
- **Portfolio since inception:** +1.10% ($10,109.93 vs $10,000 base)
- **S&P 500 since inception:** +4.38% (SPY 749.46 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~3.3 pp). **Goal 1 (positive absolute) is MET but margin thin.**
- **Dominant failure mode:** **late entries / poor execution + cash drag.** AVGO add at $427.37 and GOOG core position at $392.92 are both underwater. Cash at 16.5% is a drag in a tape where SPY is rising.

## Market Intel — Thursday 9:35 AM ET
- **Broad market:** S&P 500 flat to slightly lower after record highs. GDP revision lower to 1.6% (Q1) released this morning; minimal market reaction. Strait of Hormuz still closed (oil supply risk) but equities calm. Risk-on macro tailwind intact.
- **Semiconductor sector:** SOXX holding near $562 after +8.3% weekly run. NVDA slightly up today (+0.4%) but still –4.5% on the week. Rotation within semis continues; non-NVDA names (AVGO, QCOM) showing relative strength.
- **AVGO / Broadcom:** Current $416.87, down –2.46% from our entry. Earnings June 3 (4 trading days). News: Broadcom renewed LSEG partnership (May 19), Steve Cohen top-10 holding mention. Price testing resistance; 52-week high $442.36.
- **Alphabet / GOOG:** Fading further to $382.95. No fresh catalyst this morning. Consolidating after strong +10% 1M run but weekly fade. Needs to reclaim $390 to repair technicals.
- **NVIDIA / NVDA:** Up slightly to $213.13. 24-hour cooldown after May 27 exit expires at 10:30 AM ET today. Goldman bullish AI note from yesterday still supportive. Re-entry possible after 10:30 AM ET with hourly authorization.
- **META:** Banned. Up slightly to $631.79. Still –6.9% 1M. Supreme Court/FTC overhang unresolved.
- **Rocket Lab / RKLB:** Up slightly to $149.46. Parabolic +81% 1M. No edge.
- **Robinhood / HOOD:** Down to $73.85. AI agent launch yesterday faded. –12% 1M. Avoid.
- **News access:** Yahoo Finance RSS working; FMP disabled. Earnings retrieval failed across Yahoo and Nasdaq APIs. Proceeding with known dates from memory (AVGO June 3). No binary events in next 48 hours.
- **Fed:** GDP revision lower = less hawkish pressure. Rate-cut chatter remains background noise.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core liquid growth. 43.2%, near 45% cap. No practical add capacity. Momentum intact. | 36–45% |
| GOOG | Hold / Trim if breaks $380 | Core thesis intact but technicals weakening. 11.4%, within 15% cap. Max add blocked by price. Monitor $380 support. | 8–12% |
| VOO | Hold | Broad-market anchor. 13.6%, within 20% cap. Max add blocked by price. | 10–20% |
| SOXX | Hold / Trim on deeper pullback | Breakout validated but 2nd share underwater. Overall position +2.10%. 11.1% weight. **Do NOT add (averaging down).** Trim 1 share if breaks $540. | 5–12% |
| AVGO | Hold through earnings | Pre-earnings catch-up play (June 3). Currently underwater at –2.46% from $427.37 entry. Cut only if breaks $400. **Do NOT add (averaging down).** | 3–6% |
| META | Avoid | bannedSymbols active. No re-entry. | 0% |
| NVDA | Watch for re-entry after 10:30 AM ET | 24-hour cooldown after exit yesterday at 10:30 AM ET expires today. Re-entry only if 10:35 AM ET hourly explicitly authorizes AND price holds above $210. | 0–4% |
| RKLB | Avoid | Parabolic on SpaceX IPO buzz + defense wins. 1M +81%. Too extended; no edge. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends, thin liquidity, or no clear catalyst. | 0% |

## Priority Actions
1. **HOLD all positions for this cycle** — no new market orders at 9:35 AM ET.
2. **NVDA re-entry watch:** 24-hour cooldown expires at 10:30 AM ET. Evaluate at 10:35 AM ET hourly. Re-entry only if price holds above $210 and technicals confirm support.
3. **GOOG trim watch:** If GOOG breaks below $380 intraday, consider trimming 1 share at next hourly to rotate capital into higher-conviction name. Daytrade count is 1/3; overnight sell is allowed.
4. **SOXX defensive stop:** SELL 1 share if price drops below $540.00 (trim back to 1-share core). Rationale: protect capital on deeper pullback after parabolic weekly run.
5. **AVGO defensive stop:** SELL 1 share if price drops below $400.00. Rationale: pre-earnings technical breakdown.
6. **Cash reserve:** $1,670.50 (~16.5%). No deployment this hour. Averaging-down rules block SOXX/AVGO adds; concentration caps block QQQ/GOOG/VOO adds.
7. **AVGO earnings watch:** June 3 (4 trading days). Hold 1 share unless $400 breaks.

## Macro Themes
- **Actionable now:** NVDA re-entry setup after cooldown expires. Price $213 vs $210 support. Goldman AI tailwind supportive. Wait for 10:35 AM ET authorization.
- **Worth monitoring:** SOXX semiconductor demand is structural. Hold core 1–2 shares. Do not add on pullback (averaging down risk).
- **Worth monitoring:** US-Iran talks / Hormuz closure = oil volatility. Equities calm but keep defensive stops tight.
- **Worth monitoring:** GOOG technical weakening. If it reclaims $390, thesis intact; if it breaks $380, trim risk.
- **Interesting but not actionable yet:** SpaceX IPO June 12 buzz = RKLB volatile. Too speculative.
- **Interesting but not actionable yet:** QTUM quantum computing ETF +18.7% 1M. Government quantum investment headlines. Thin and extended; no entry.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback for returns.
- **News access** via Yahoo Finance RSS working; direct web search blocked. Bing RSS sparse/stale.
- **Alpaca `get-latest-price` bars** timestamps at 13:34:00Z (9:34 AM ET), fresh.
- **Day-trade status:** 1/3. No same-day issues.
- **SOXX liquidity:** 36 trades, 1,689 vol at 13:34Z — acceptable for limit orders.
- **AVGO liquidity:** Healthy at 3,414 daily volume (thin pre-market? but ok).
- **Earnings dates:** AVGO expected June 3. No binary events in next 48 hours. Earnings retrieval APIs failed this cycle.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$10K equity, concentration caps block most single-share adds. Only SOXX and AVGO have meaningful add capacity, but averaging-down rules prohibit them.
- **Event detector snapshot path:** `memory/tactical_last_prices.json` preserved.

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
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; GOOG at 3-4 shares; VOO at 2 shares. Deployment into new names requires selling existing positions or equity growth.
- **Chip-sector rotation away from NVDA toward non-NVDA semis is a real regime signal.** SOXX outperforming NVDA validates broad-ETF approach.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Chasing a +14% weekly move in an ETF is not disciplined deployment.** Wait for pullbacks.
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser must be kept in sync.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
- **Post-long-weekend gap-up on macro catalysts can produce gains without trading.** Cash served as hedge but also caused drag vs SPY.
- **Gap-up opens on macro catalysts are poor entry points.** Limit orders on pullbacks preserve edge.
- **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **With daytrade_count at 1/3, every potential sell of a same-day or recent position must be weighed against the cost of consuming a daytrade.**
- **News access in workspace is severely limited.** Yahoo Finance RSS is the primary actionable source.
- **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
- **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker reconciliation is mandatory.
- **Critical process breach (May 26 & May 28):** Git index deletion / missing `.gitignore` — monitor for recurrence.
- **Buying the first intraday dip in a profit-taking session without confirmed support often results in immediate unrealized loss.** Wait for a clear reclaim or volume-confirmed bounce before deploying fresh capital.
- **Repo integrity restoration via `git pull` is preferred over manual file reconstruction** when remote has correct commits.
- **.gitignore missing can cause thousands of node_modules files to be staged.** Always verify `.gitignore` exists after any workspace restart or bun install.

---

## Prior Tactical Executions (Archived)
See git history for full detail.
- **2026-05-27 13:53Z:** SOLD 1 NVDA @ ~$211.79, BOUGHT 1 AVGO @ ~$427.37, BOUGHT 1 SOXX @ ~$567.54.
- **2026-05-27 14:31Z:** SOLD 1 NVDA @ ~$210.11 (stop-loss on remaining overnight share).
