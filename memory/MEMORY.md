# Hourly Macro Memory
*Updated 2026-05-27 15:35Z (Wednesday 11:35 AM ET). Market OPEN until 16:00 ET.*

## Hourly Cycle Summary — 2026-05-27 15:35Z (Wednesday 11:35 AM ET)
- **Status:** Market OPEN.
- **Repo integrity:** **Critical process breach detected and resolved.** Git index had all tracked files staged as deleted. Restored `.gitignore` from HEAD, ran `git add -A`, committed restoration. Working tree now clean.
- **Live broker refresh:** Equity $10,103.54 | Cash $1,670.51 | Long $8,433.03 | Gross 83.5% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6, GOOG 3, VOO 2, SOXX 2, AVGO 1.
- **Open orders:** NONE.
- **Filled trades since 10:35 AM ET hourly:** NONE. Tactical agent held all positions through :40/:50 windows.
- **Goal check:** Portfolio +1.04% since inception vs SPY +4.36% (749.32 vs 718.01 baseline). Goal 1 (positive absolute) MET but margin thinning. Goal 2 (beat SPY) **off track by ~3.32 pp**.
- **Regime:** Offensive catch-up. Target gross exposure 80–90%. Current 83.5% — within band. No deployment this cycle.
- **Orders placed this cycle:** None. HOLD all positions.
- **Next expected action:** 12:35 PM ET hourly — monitor SOXX/AVGO stability, reassess if equity growth opens add capacity.

---

## Repo Integrity
- **Status:** Clean after restoration. Local `main` ahead of `origin/main` by 1 commit (restoration commit).
- **Critical breach (this cycle):** `git status` showed every tracked file staged as deleted. Working-tree files were physically present. Restored by writing `.gitignore` from HEAD, running `git add -A`, committing. Root cause unknown — possibly a concurrent agent or process issue.
- **Post-restoration:** `memory/.trading_lock.json` intact with `bannedSymbols: ["META"]`.

## Breach Alert — Status: Resolved (Historical)
- Prior-cycle NVDA unauthorized add (May 26) fully remediated. Position closed at ~$210.11. Loss realized.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $726.77 | $4,360.59 | 43.2% | +$152.61 | +3.63% |
| GOOG | 3 | $392.92 | $387.73 | $1,163.18 | 11.5% | –$15.59 | –1.32% |
| VOO | 2 | $673.925 | $689.03 | $1,378.06 | 13.6% | +$30.21 | +2.24% |
| SOXX | 2 | $550.97 | $556.00 | $1,112.00 | 11.0% | +$10.06 | +0.91% |
| AVGO | 1 | $427.37 | $419.20 | $419.20 | 4.1% | –$8.17 | –1.91% |
| Cash | — | — | — | $1,670.51 | 16.5% | — | — |
| **Equity** | — | — | — | **$10,103.54** | **100%** | — | **+1.04%** |

- **Gross long exposure:** 83.5%
- **Net exposure:** 83.5%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Wed May 27 (11:35 AM ET)
- **1D (today):** portfolio **–0.56%** ($10,160.55 → $10,103.54) vs SPY **–0.17%** ($750.59 → $749.32). **Underperforming SPY by ~0.39 pp today.**
- **1W (May 20 → May 27):** portfolio **+1.25%** ($9,978.63 → $10,103.54) vs SPY **+2.12%** (~734.72 → 749.32). **Underperforming SPY over 1W by ~0.87 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+1.04%** vs SPY **+4.36%** (baseline 718.01 → 749.32). Still trailing by ~3.32 pp.
- What is working: QQQ core growth (+3.63% unrealized, +3.58% 1W). VOO anchor steady (+2.24% unrealized, +2.12% 1W).
- What is not working: AVGO new entry underwater (–1.91% unrealized). GOOG still slightly underwater (–1.32% unrealized) despite +0.72% today. SOXX intraday pullback (–2.58% today) after strong weekly run.
- What must change: With ~$10K equity and integer-share trading, concentration caps block most fresh adds. Need either equity growth or a rotation (sell underperformer → buy higher-conviction name) to improve posture. Today is not the day to force a rotation.

## Goal Check
- **Portfolio since inception:** +1.04% ($10,103.54 vs $10,000 base)
- **S&P 500 since inception:** +4.36% (SPY 749.32 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~3.32 pp). **Goal 1 (positive absolute) is MET but margin is thinning.**
- **Dominant failure mode:** **late entries / poor execution + cash drag.** Morning AVGO and SOXX adds are underwater. 16.5% cash remains a drag in a rising market, but deployment options are structurally limited by concentration caps on a $10K book.

## Market Intel — Wednesday 11:35 AM ET
- **Broad market:** S&P 500 slightly lower (–0.17%) after record highs Tuesday. Nasdaq also soft. US-Iran 14-point peace framework circulating; oil below $90. Risk-on macro tailwind intact but equities taking a breather.
- **Semiconductor sector:** SOXX down –2.58% today after parabolic weekly run (+11.81% 1W). NVDA down –2.33%, continuing underperformance within chip sector. Broadcom product news (BCM68850 Wi-Fi 8 gateway SoC) did not move stock meaningfully.
- **AVGO / Broadcom:** Launched industry's first 50G ITU-PON home gateway SoC with neural processor and Wi-Fi 8. Positions AVGO at intersection of broadband, edge AI, and next-gen Wi-Fi. Stock flat/down on news — market wants earnings proof (June 3).
- **Alphabet / GOOG:** Gemini 3.5 headline positive, yet stock "keeps slipping" per Yahoo. Up only +0.72% today despite product flex. GOOG up +11.21% 1M, so some consolidation is normal.
- **Rocket Lab / RKLB:** $816M SDA Tracking Layer Tranche 3 milestone + Motiv Space Systems acquisition. Defense/space expansion deepening. Stock –0.27% today after parabolic run.
- **NVIDIA:** Headline "Nvidia is down (yet again) after reporting earnings" — may refer to prior quarter disappointment or guidance concerns. Validates our exit.
- **Short interest:** Hedge funds piling into shorts at decade-high levels, but market rallying on Iran deal. Potential short-squeeze fuel if deal is finalized.
- **News access:** Yahoo Finance RSS providing actionable headlines. Direct web search blocked. FMP disabled.
- **Earnings dates:** AVGO June 3. GOOG July 23. META July 29. NVDA Aug 26. RKLB Aug 6. HOOD July 29. No binary events in next 48 hours.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core liquid growth. 43.2%, near 45% cap. No practical add capacity. Momentum intact. | 36–45% |
| GOOG | Hold | Core thesis intact. 11.5%, within 15% cap. Max add ~$352 (0.9 share) — not practical at integer constraint. | 10–15% |
| VOO | Hold | Broad-market anchor. 13.6%, within 20% cap. Max add ~$643 (0.9 share) — not practical at integer constraint. | 10–20% |
| SOXX | Hold / Trim on deeper pullback | Breakout validated but intraday pullback after parabolic run. 11.0% weight. Added 2nd share this morning at $567.99; now $556.00. Trim 1 share if breaks $540. | 5–12% |
| AVGO | Hold through earnings | Pre-earnings catch-up play (June 3). Wi-Fi 8 product catalyst today did not move stock. Currently underwater at –1.91% from $427.37 entry. Cut only if breaks $400. | 3–6% |
| META | Avoid | bannedSymbols active. No re-entry. | 0% |
| NVDA | Avoid | 24-hour cooldown after exit today at 10:30 AM ET. Underperforming within chip sector. No re-entry without explicit authorization. | 0% |
| RKLB | Avoid | Parabolic on SpaceX IPO buzz + defense wins. 1M +73.54%. Too extended; no edge. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends, thin liquidity, or no clear catalyst. | 0% |

## Priority Actions
1. **HOLD all positions** — no new market orders this cycle. Let morning adds settle.
2. **SOXX defensive stop:** SELL 1 share if price drops below $540.00 (trim back to 1-share core). Rationale: protect capital on deeper pullback after parabolic weekly run.
3. **AVGO defensive stop:** SELL 1 share if price drops below $400.00. Rationale: earnings catalyst failed, technical breakdown.
4. **Cash reserve:** $1,670.51 (~16.5%). No deployment this hour. Integer-share constraint + concentration caps make most adds code-rejected or impractical.
5. **Monitor chip sentiment:** Structural demand intact (Micron/SK hynix $1T, AVGO Wi-Fi 8). SOXX pullback is healthy correction, not panic.
6. **Investigate repo breach:** Root cause of git index deletion unknown. Add to process checklist.

## Macro Themes
- **Actionable now:** SOXX semiconductor demand is structural. Hold core 1–2 shares. Add only on confirmed support, not during free-fall.
- **Worth monitoring:** NVDA institutional outflow signal = rotation within semis, not sector exit.
- **Worth monitoring:** US-Iran talks = oil down = risk-on tailwind for equities. Short squeeze potential if deal finalizes.
- **Worth monitoring:** GOOG Gemini 3.5 product cycle — may be a buy-the-dip candidate if it pulls back to ~$380.
- **Interesting but not actionable yet:** SpaceX IPO June 12 buzz = RKLB volatile. Too speculative.

## Historical Performance Snapshot (Yahoo Finance v8, May 27 ~11:35 AM ET)
| Symbol | Price | 1D | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|---|---|
| AVGO | $419.12 | –0.68% | +1.96% | +0.22% | +26.12% | +23.20% | +77.86% |
| EIS | $137.57 | +0.27% | +6.35% | +8.31% | +13.95% | +36.89% | +63.42% |
| GLD | $407.39 | –1.60% | –1.00% | –5.23% | –13.95% | +8.85% | +33.79% |
| GOOG | $387.61 | +0.72% | +0.70% | +11.21% | +23.82% | +29.35% | +122.79% |
| HOOD | $75.56 | +1.98% | +1.88% | –10.00% | –2.55% | –29.59% | +14.44% |
| META | $614.41 | +0.34% | +1.96% | –9.46% | –6.01% | +3.39% | –4.35% |
| NVDA | $209.85 | –2.33% | –4.88% | –3.12% | +7.31% | +17.31% | +54.87% |
| QQQ | $726.61 | –0.50% | +3.58% | +9.39% | +17.83% | +23.14% | +39.41% |
| QTUM | $155.36 | –2.06% | +10.47% | +17.80% | +31.22% | +53.15% | +77.76% |
| RKLB | $142.81 | –0.27% | +12.18% | +73.54% | +103.43% | +254.37% | +396.56% |
| SHLD | $65.44 | –1.05% | +2.21% | –3.03% | –11.48% | +6.64% | +14.98% |
| SOXX | $555.39 | –2.58% | +11.81% | +21.95% | +50.92% | +105.07% | +165.37% |
| VOO | $688.91 | –0.16% | +2.12% | +4.78% | +8.06% | +13.69% | +26.79% |
| ARKX | $36.10 | –0.58% | +7.15% | +8.60% | +12.18% | +38.79% | +70.36% |
| SPY | $749.32 | –0.17% | +2.12% | +4.78% | +8.10% | +13.70% | +26.76% |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access** via Yahoo Finance RSS working; direct web search blocked.
- **Alpaca `get-latest-price` bars** timestamps at 15:35:00Z (11:35 AM ET), acceptable freshness.
- **Day-trade status:** 1/3. No same-day issues.
- **SOXX liquidity:** 12 trades, 369 vol at 15:35Z — thin but acceptable for limit orders.
- **AVGO liquidity:** 36 trades, 800 vol at 15:35Z — acceptable.
- **Earnings dates:** AVGO expected June 3. No binary events in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`.
- **Integer-share constraint:** With ~$10K equity, most single-share buys breach concentration caps. Only AVGO (2.6 shares) and SOXX (1.6 shares) have meaningful add capacity, but both were bought today and are under same-day round-trip protection.

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
- **Critical process breach this cycle:** Git index had all tracked files staged as deleted. Working-tree files were present. Restoration via `git show HEAD:.gitignore > .gitignore && git add -A && git commit` succeeded. Investigate root cause.

---

## Prior Tactical Executions (Archived)
See git history for full detail.
- **2026-05-27 13:53Z:** SOLD 1 NVDA @ ~$211.79, BOUGHT 1 AVGO @ ~$427.37, BOUGHT 1 SOXX @ ~$567.54.
- **2026-05-27 14:31Z:** SOLD 1 NVDA @ ~$210.00 (stop-loss on remaining overnight share).
