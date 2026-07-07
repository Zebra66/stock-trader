# Hourly Macro Memory — Post-Market Close
*Updated 2026-07-07 20:31Z (Tuesday 4:31 PM ET). Market CLOSED. Next session: Wednesday Jul 8, 2026 13:30Z.*

## End-of-Day State — Tuesday Jul 7
- **Equity close:** $9,577.96 | **Cash:** $2,267.79 | **Long MV:** $7,310.17
- **Gross exposure:** 76.3% | **Cash:** 23.7%
- **Daytrade count:** 0/3 | **Pattern day trader:** false
- **Zero filled orders today.** Canceled AVGO SELL limit @ $363.95 at 14:38Z (tactical agent placed and canceled within 18s; no fill).
- **Event detector:** MINOR at 19:35Z (final in-hours reading). Broad market stable in final hour; semis weak on daily timeframe.

## Closing Prices vs Stops
| Symbol | Qty | Avg Entry | Close | Unrealized P&L | Unrealized % | Hard Stop | Distance to Stop |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $710.09 | –$38.30 | –0.89% | $690.00 | +$20.09 |
| VOO | 2 | $676.46 | $687.01 | +$21.10 | +1.56% | $660.00 | +$27.01 |
| AVGO | 3 | $371.95 | $371.00 | –$2.85 | –0.26% | $365.00 | +$6.00 |
| HOOD | 5 | $101.50 | $112.61 | +$55.55 | +10.94% | $95.00 | +$17.61 |

- **Portfolio heat at close:** ~$245 (2.56% of equity). Under 6% daily loss cap.
- **AVGO hard stop:** $365.00. Closed at $371.00, $6.00 above stop. Price dipped below $365 intraday (~$364.05 at 10:31Z) but recovered.

## Performance — Tuesday Jul 7 (Full Session)
- **1D:** portfolio –1.21% ($9,695.40 → $9,577.96) vs SPY –0.50% ($751.28 → $747.49). Underperforming by ~0.71 pp.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–4.22%** vs SPY **+4.11%** (SPY 747.49 vs baseline 718.01). **Trailing by ~8.33 pp.**
- **Status:** **FAILING both goals.**
- **Dominant failure mode:** excessive turnover / friction + bad symbol selection. Chip exposure (QQQ/AVGO) hurt by China domestic AI chip headline pressure.

## Wednesday Preview
- **Regime:** neutral. QQQ closed below 50D ($711.74) at $710.09. This is a technical concern but not yet a disaster. AVGO $6 above hard stop. HOOD still house money.
- **No binary earnings events** in next 48 hours.
- **Macro calendar:** Fed ECI Friday; June CPI next Tuesday. Low-conviction deployment until data clarity.
- **China chip pressure** (DeepSeek AI chip, domestic budgets up) remains the dominant semi headwind. Do not add to chip exposure until stabilization.
- **HOOD buy trigger $105.00** remains active for Wednesday.
- **RKLB:** DO NOT RE-BUY regardless of cooldown.
- **GOOG:** Re-evaluate if reclaims $370.00 on volume > 150% of 20-day average.

---

# Hourly Macro Memory
*Updated 2026-07-07 19:35Z (Tuesday 3:35 PM ET). Market OPEN. Event detector MINOR.*

## Tactical Cycle Execution — 2026-07-07 19:00Z (Tuesday 3:00 PM ET) — [AUTONOMOUS_OVERRIDE]
- **Status:** Market OPEN. Event detector **CRITICAL** at 19:00Z.
- **Detector details (vs 17:35Z snapshot):** SOXX -1.56% CRITICAL, SMH -1.23% MAJOR, QQQ -0.58% MINOR, XLK -0.86% MINOR. SPY -0.26% OK.
- **Held positions:** AVGO OK -1.06% ($368.38), HOOD OK -1.49% ($113.43), QQQ OK -0.58% ($708.95), VOO OK -0.28% ($686.60).
- **Hard stop check:** AVGO stop $365.00 — NOT breached ($368.38). HOOD stop $95.00 — NOT breached ($113.43). QQQ stop $690.00 — NOT breached ($708.95). VOO stop $660.00 — NOT breached ($686.60).
- **Action taken:** NO PROTECTIVE SELLS. All positions above authorized hard stops. No held position individually flagged CRITICAL/MAJOR. Defaulted to inaction per Event Response Mode guardrail.
- **Buy triggers:** HOOD $105.00 limit buy SUSPENDED due to CRITICAL event at 19:00Z. Hourly strategist at 19:35Z reactivated trigger after event cooled to MINOR.
- **Holdings unchanged:** QQQ 6, VOO 2, AVGO 3, HOOD 5.
- **Equity:** $9,603.76 | **Cash:** $2,267.79 | **Gross:** 76.4% | **Daytrade:** 0/3.
- **Daily trade budget:** 0/3 used today.

## Live Broker State — 19:35Z (Authoritative)
- **Equity:** $9,570.92 | **Cash:** $2,267.79 | **Long MV:** $7,303.13
- **Gross exposure:** 76.3% | **Net exposure:** 76.3% | **Cash:** 23.7%
- **Daytrade count:** 0/3 (clean slate) | **Pattern day trader:** false
- **Open orders:** NONE
- **Account flags:** trading_blocked=false, account_blocked=false
- **Daily trade budget:** 0/3 used today (Jul 7)
- **Zero filled orders today.** Canceled AVGO SELL limit @ $363.95 at 14:38Z (tactical agent placed and canceled within 18s; `sell_to_open` intent noted but no fill).

## Live Book — Authoritative
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $708.57 | $4,251.44 | 44.4% | –$47.40 | –1.10% |
| VOO | 2 | $676.46 | $686.69 | $1,373.38 | 14.3% | +$20.46 | +1.51% |
| AVGO | 3 | $371.95 | $370.02 | $1,110.06 | 11.6% | –$5.79 | –0.52% |
| HOOD | 5 | $101.50 | $113.65 | $568.25 | 5.9% | +$60.75 | +11.97% |
| Cash | — | — | — | $2,267.79 | 23.7% | — | — |
| **Equity** | — | — | — | **$9,570.92** | **100%** | — | **–4.29%** |

- **Portfolio heat:** ~$245 (~2.56% of equity). Under 6% daily loss cap.
- **AVGO hard stop:** $365.00. Price at $370.02, $5.02 above stop. No breach.

## Performance Review — Tuesday Jul 7 (3:35 PM ET)
- **1D (today):** portfolio –1.28% ($9,695.40 → $9,570.92) vs SPY –0.61% ($751.28 → $746.70). Underperforming by ~0.67 pp today.
- **1W:** QQQ –3.84%, VOO –0.03%, AVGO –2.22%, HOOD +13.27%. Portfolio mixed; HOOD still carrying alpha but QQQ/AVGO drag accelerating.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–4.29%** vs SPY **+4.03%** (SPY 746.70 vs baseline 718.01). **Trailing by ~8.32 pp.**
- What is working: HOOD momentum (+11.97% unrealized, +13.27% 1W, +33.57% 1M). VOO anchor stable.
- What is not working: QQQ pulling back (–1.10% unrealized, –3.84% 1W, below 50D). AVGO chip weakness (–2.22% 1W, –6.87% 1M). June churn legacy still drags absolute return.
- What must change: To close 8.32 pp gap in ~2 months, need high-beta alpha with minimal churn. Let HOOD run. Avoid forced entries in weak tape. Deploy cash only on volume-confirmed setups. QQQ 50D support must hold or trim risk.

## Goal Check
- **Portfolio since inception:** –4.29% ($9,571 vs $10,000 base)
- **S&P 500 since inception:** +4.03% (SPY 746.70 vs baseline 718.01)
- **Status:** **FAILING both goals.** Trailing by ~8.32 pp.
- **Dominant failure mode:** excessive turnover / friction + bad symbol selection.
- **Posture:** neutral. QQQ testing 50D ($711.74) with price at $708.57. Chip sector under China pressure. Summer low-volume tape. Cash available but conviction setups scarce. Not defensive because SPY trend broadly intact (SPY +4.03% since inception). Not full offensive because QQQ/semis weak and volume thin.

## Market Intel — Tuesday 3:35 PM ET
- **Broad market:** SPY $746.70 (–0.61%). Nasdaq weaker. Event detector MINOR at 19:35Z (SOXX +0.51% in last 5 min; broad market flat in last 5 min). Do not confuse 5-minute stability with daily weakness.
- **Semiconductors:** China domestic AI chip budgets jumping to 46% (Reuters headline). DeepSeek developing AI chip. NVDA facing China pressure. SOXX $545.87 (–14.81% 1W). AVGO holding relatively well at $370.02 (–1.04% today) but China chip decoupling is a medium-term headwind for all semi names.
- **Tech:** QQQ $708.57 (–1.97% today). Testing 50D SMA ($711.74). Needs to hold ~$705–$710 or risk deeper correction toward $700 psychological support.
- **HOOD:** $113.65 (–3.32% today). Pullback within strong uptrend (+13.27% 1W, +33.57% 1M, 20D SMA $100.08). Volume light. Remaining 5 shares are house money after +2R trim at $114.51.
- **RKLB:** $83.79 (–17.57% 1W, –26.27% 1M). DO NOT RE-BUY. Still crashing, no edge.
- **GOOG:** $364.68 (+3.21% 1W). Showing relative strength in risk-off tape, but still below 50D ($369.36). Volume thin. Needs 50D reclaim + headline resolution + volume pick-up for conviction.
- **META:** Still banned. Surging +9.52% 1W. Not in our book.
- **Event detector:** MINOR at 19:35Z. Broad market stable in last 5 min. No sector rotation.
- **Earnings:** No binary events in next 48 hours. Proceed with known information from memory.
- **News access:** Yahoo Finance RSS returned actionable headlines (China chip pressure, SpaceX Nasdaq-100 sell-the-news, Amazon $25B bond). Google Search, MarketWatch, Reuters still rate-limited/CAPTCHA-blocked. China chip decoupling is the dominant new headline theme since 2:36 PM hourly.
- **Macro calendar:** Fed ECI Friday; June CPI next Tuesday. Low-conviction deployment until data clarity.

## Position Map — Tuesday Jul 7 (3:35 PM ET)
| Symbol | Bias | Rationale | Hard Stop | Profit Target | R/R |
|---|---|---|---|---|---|
| QQQ | **HOLD** | Core growth. 44.4% of equity, near 45% cap. Testing 50D support. | $690.00 | $750.00 | 2.1:1 |
| VOO | **HOLD** | S&P anchor. +1.51% unrealized. 14.3% of equity. | $660.00 | $700.00 | 1.4:1 |
| AVGO | **HOLD** | Hard stop $365. Price $370.02, $5 above stop. China chip pressure is medium-term headwind. Hold with tight stop. | $365.00 | $420.00 | 2.4:1 |
| HOOD | **HOLD / ADD on dip** | House-money position. +11.97% unrealized. Target $125. Add 5 shares if pullback to $105. | $95.00 | $125.00 | 2.5:1 |
| META | Banned | `bannedSymbols` active. No re-entry. | — | — | — |
| RKLB | **AVOID — DO NOT RE-BUY** | Exited Jul 6 at $93.25. 24-hour cooldown expired, but DO NOT RE-BUY regardless. | — | — | — |
| GOOG | **WATCH** | Relative strength but below 50D. Re-evaluate for entry if reclaims $370 on volume. | — | — | — |

## Priority Actions (Tuesday Jul 7, 3:35 PM ET)
1. **HOLD QQQ, VOO, AVGO, HOOD.** No sells required at current prices.
2. **AVGO stop restated at $365.00.** Price at $370.02, $5 above stop. Event detector MINOR. Do NOT sell unless stop breaches.
3. **HOOD $105 buy trigger remains ACTIVE.** Low-volume summer tape may produce a deeper pullback in final hour.
4. **DO NOT RE-BUY RKLB** regardless of cooldown status.
5. **Portfolio heat:** ~$245 (~2.56% of equity). Under 6% daily loss cap.
6. **Let HOOD run to $125.** Remaining 5 shares are house money.
7. **Deploy cash selectively.** Gross exposure 76.3% is within neutral band (70–85%). No forced deployment. Wait for volume-confirmed setups.
8. **Watch QQQ $705–$710.** 50D support zone at $711.74. Price already below 50D at $708.57. If it breaks decisively below $705 on volume, reassess core allocation (potential trim of 1 share to reduce concentration risk, but do not full-exit into potential bounce).
9. **GOOG on watchlist.** Re-evaluate for 1-share add if it reclaims $370.00 on volume > 150% of 20-day average AND event detector is NONE. Not authorized this hour.

## Deployment Queue (When Cash Deploys)
1. **HOOD** — 5 shares @ $105.00 limit (under 15% cap, within 70–85% band). Remains Priority #1.
2. **GOOG** — Re-evaluate if it reclaims $370.00 on volume > 150% of 20-day average. Not authorized today unless hourly note explicitly authorizes.
3. **RKLB** — Still avoid. Re-evaluate only if relative-strength recovery vs QQQ emerges. Not authorized today.

## Macro Themes
- **Actionable now:** China chip pressure (domestic budgets up, DeepSeek AI chip) is a medium-term headwind for NVDA/AVGO/SOXX. Hold existing exposure but do not add to semi/tech until stabilization + volume confirmation.
- **Actionable now:** RKLB continued crash validates exit. Avoid even after cooldown expired.
- **Worth monitoring:** GOOG relative strength (+3.21% 1W) in risk-off tape. Needs 50D reclaim + headline resolution + volume pick-up for conviction.
- **Worth monitoring:** HOOD momentum pullback. If broad market stabilizes, HOOD likely resumes outperformance.
- **Worth monitoring:** Fed ECI Friday + CPI next Tuesday. Could reprice rate expectations. Avoid adding rate-sensitive positions before data.
- **Interesting but not actionable yet:** SpaceX added to Nasdaq-100; sold off 5.65% on inclusion day. Smart money front-ran the passive inflows.
- **Interesting but not actionable yet:** Amazon $25B bond sale for AI/data-center expansion. Positive for AI infrastructure demand medium-term.
- **Summer tape warning:** Volume is thin across the board. Low-volume breakouts are unreliable. Demand volume confirmation before entry.

## Data / Process Notes
- **Alpaca API** fully functional. Positions, account, and orders all consistent. No data corruption this cycle.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback for performance/MA data.
- **News access:** Yahoo Finance RSS functional for some symbols. Google Search, MarketWatch RSS, Reuters all rate-limited/CAPTCHA-blocked this cycle.
- **Alpaca bars:** Timestamps at 19:34Z; current within 1 minute. TradeCount/Volume anomalously low for GOOG, VOO, QQQ — do not use for liquidity assessment.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Process breach:** None in repo. Git status clean except legitimate tactical artifacts.
- **Tactical agent note:** Canceled AVGO SELL limit @ $363.95 at 14:38Z (sell_to_open intent, canceled within 18s). No fill, no breach. Monitor for recurrence.
- **Event detector:** `priorTimestamp` bug persists but does not affect classification. Current classification MINOR.
- **Standing learnings:** See `memory/standing_learnings.md`.
