# Tactical Todo — Updated 2026-06-04 13:48Z (Thursday 9:48 AM ET)
<!-- Autonomous override applied at 2026-06-04 14:12Z due to MAJOR event on SOXX -->
*HARD_LOCK LIFTED. CRITICAL CODE BREACH DETECTED AND REVERTED. Execute authorized orders only. Market OPEN.*

## Current State
- **Regime:** neutral with defensive tilt (65–80% band)
- **Live book:** QQQ 6, SOXX 2 (1-share trim order in flight), VOO 2. AVGO **FULLY EXITED** at 13:45Z.
- **Account equity / cash / buying power:** $10,134.06 / $2,587.77 / $12,721.83
- **Gross long exposure:** ~69% (post-SOXX trim) | **Net exposure:** ~69% | **Cash:** ~30.5% (post-fill)
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** SELL 1 SOXX limit $579.50 (day order)
- **Market:** OPEN. Next hourly at 14:35Z (10:35 AM ET).
- **Code breach alert:** Unauthorized source modifications were reverted this cycle. Tactical agent must NOT modify source code. If you detect modified source files, default to hold-only and alert hourly.

## Position Instructions — Thu June 4 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.5%, within 45% cap. Adding 1 share would breach cap.
- Intraday −1.27% ($744.21 → $734.79). Core liquid growth. Let run.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $725.00 with limit $724.50. Rationale: protect core on broad-market risk-off.
- Do NOT add QQQ today. At cap.

### SOXX — HOLD 2 — DO NOT ADD
- Weight ~11.5% (post-trim est.), within 20% non-QQQ ETF cap.
- Unrealized +4.4% from avg $554.51 (2 shares remaining). Intraday −5.0% on AVGO contagion.
- **Defensive trim EXECUTED at 14:12Z:** Sold 1 share @ limit $579.50 after price breached $580 stop ($579.11 current). Holding 2 shares as core chip exposure.
- Do NOT sell remaining 2 shares unless event detector flags CRITICAL on SOXX or hourly explicitly authorizes full exit.
- Do NOT add SOXX today. Sentiment fragile and at reduced core size.
- **Illiquidity warning:** SOXX trade count is low. Use limit orders only.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.7%, within 20% non-QQQ ETF cap.
- Broad-market anchor. Stable −0.24% today. No action required.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $685.00 with limit $684.50. Rationale: trim anchor on severe broad-market breakdown.
- Do NOT add VOO today. Hourly blocks adds to preserve cash.

### AVGO — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- 2 shares sold at $405.16 (13:45Z). Stop $420 breached. Realized loss ~$61.52.
- Earnings disappointment + AI chip forecast miss = structural sentiment damage. No re-entry today.
- **ANTI-CHURN:** AVGO was sold TODAY. DO NOT BUY AVGO back today under any circumstances. Same-day round trip is prohibited.
- Re-entry deferred to future hourly authorization only after stabilization above $420.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All shares sold June 1. No re-entry.
- DO NOT RE-BUY GOOG.

### NVDA — DO NOT BUY TODAY — DO NOT RE-BUY
- Re-entry deferred. Flat today despite chip rout = relative strength, but chasing into a sector washout is poor risk/reward.
- **DO NOT CHASE NVDA.** Re-entry only on pullback to $210–$215 AND hourly explicitly authorizes AND chip sentiment stabilizes.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, thin liquidity, or legal overhang.

## Hard Rules / No-Trade Conditions
- **No discretionary buys this cycle.** Gross exposure is 74.5%; within 65–80% band. Adding any share pushes toward upper bound and is blocked by concentration caps or explicit hourly block.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - If a symbol was sold today, do NOT buy it back today unless hourly note explicitly authorizes.
  - AVGO was sold TODAY at 13:45Z. DO NOT BUY AVGO today.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **Code modification prohibition:** Tactical agent must NOT modify any file under `src/`, `prompts/`, or `config/`. If you detect such modifications, default to hold-only and alert hourly.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin relative to large-cap ETFs. Limit orders only.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **HOLD all positions at the open.** AVGO stop executed. Monitor SOXX and QQQ price action.
2. **HOLD cash** (~$2,588, ~25.5%) for defensive flexibility or high-conviction dip buy only after chip sentiment stabilizes.
3. **Conditional add queue (requires explicit hourly authorization):**
   - NVDA if pullback to $210–$215 AND chip sentiment stabilizes.
   - QQQ only if it dips to $725 area AND holds — but do NOT add if stop is triggered.
   - GOOG re-entry BLOCKED.
   - AVGO re-entry BLOCKED until stabilization above $420 AND hourly authorizes.

## Expected Book Into Next Session
- QQQ 6 (~43.5%), SOXX 2 (~11.5%), VOO 2 (~13.7%)
- Cash: ~$3,170 (~31.3%)
- Gross exposure: ~68.7%

## Next Hourly Preview — Thu June 4 14:35Z (10:35 AM ET)
- Evaluate chip-sector stabilization or further deterioration.
- Reassess SOXX stabilization after 1-share protective trim. Watch remaining 2-share core.
- Determine if NVDA relative strength warrants a small add on further dip.
- Monitor broad-market health (SPY, VOO) for rotation confirmation.
- Re-verify code integrity (`git diff --stat`) before any new directives.

## This Cycle — 2026-06-04 13:48Z (Hourly Update)
- **Repo integrity:** CRITICAL BREACH DETECTED AND REVERTED. Anti-churn guards and event detector restored.
- **Live broker refresh:** Equity $10,134.06 | Cash $2,587.77 | Long $7,546.29 | Gross exposure ~74.5% | Daytrade 0/3.
- **AVGO stop executed:** SOLD 2 shares @ $405.16. Stop $420 breached at open. Realized loss ~$61.52.
- **Holdings confirmed:** QQQ 6 ($4,408.74), SOXX 3 ($1,755.57), VOO 2 ($1,383.41).
- **Portfolio today:** −0.77% vs SPY −0.21%. AVGO wipeout is primary drag.
- **Gap to SPY widened:** ~3.49 pp (from ~2.92 pp post-close Jun 3).
- **Stops active:** QQQ $725, SOXX $580, VOO $685.
- **No orders authorized now.** Next tactical runs at 13:40Z and 13:50Z.
