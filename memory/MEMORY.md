# Hourly Macro Memory
*Updated 2026-07-17 20:42Z (Friday 4:42 PM ET). Market **CLOSED** (regular session ended 4:00 PM ET). Event detector **MINOR** (cooled from 14:40 CRITICAL).*

## Hourly Cycle Summary — 2026-07-17 15:35 ET (ran ~16:40 ET; post-close)
- **Status:** Regular session **CLOSED**. Final hourly of the week. No AH/pre-market equity orders authorized.
- **Repo integrity:** Branch main **ahead 1** of origin (tactical commit `8b7e391b`). No mass-delete. Tracked sources present.
- **Audit (pre-fetch + manual):** Unauthorized=[] Concentration=[] Gross **~73.1%**. Daytrades **0**. `pdtLimitReached` false. HARD_LOCK inactive. META banned only.
- **CLI note:** `bun run` / network helpers hung this cycle (environment). Decisions use harness pre-fetch (account/positions/prices/event at ~20:12Z) + prior confirmed book. Not a data blackout — pre-fetch is same-session and consistent with 14:35 live book.
- **Live broker (pre-fetch):** Equity **$9,442** | Cash **$2,543** | Long **$6,899** | Gross **73.1%** | BP ~$29.5k (**do not size from BP**).
- **Holdings:** QQQ **6** | VOO **4** | AVGO 0 | HOOD 0. Open orders **NONE**.
- **Filled today (unchanged):**
  1. **SOLD 1 HOOD @ $100.96** (~9:33 ET) — **not authorized** by prior hourly.
  2. **SOLD 1 AVGO @ $360.33** (~9:41 ET) — tactical CRITICAL event-response; above hourly $349.50 floor; later printed ~$370–373 — friction lesson stands.
- **Tactical since 14:35:** No fills. 14:40 CRITICAL + later MAJOR/CRITICAL overrides correctly held core and blocked buys.
- **Goal check:** Portfolio **–5.58%** vs SPY **~+3.5%** (SPY ~743.3 vs 718.01). **Both goals FAILED.** Gap **~–9.1 pp**.
- **Regime:** **Neutral** (no flip today). Target gross **75–90%**. Live **73.1%** residual of morning single-name exits. **Do not de-risk core. Do not force adds** (budget spent + session closed).
- **Dominant failure mode:** **Excessive turnover / friction** (primary) + **cash drag** (secondary, hard-blocked by TO + integer caps).

---

## Live Book (Alpaca) — TRUE STATE (pre-fetch ~20:12Z)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$694.9 | ~$4,169 | ~44.2% | ~−$130 | ~−3.0% |
| VOO | 4 | $683.39 | ~$682.4 | ~$2,730 | ~28.9% | ~−$4 | ~−0.1% |
| AVGO | 0 | — | ~$370.7 | $0 | 0% | realized exit @ $360.33 | — |
| HOOD | 0 | — | ~$99.9 | $0 | 0% | realized exit @ $100.96 | — |
| Cash | — | — | — | ~$2,543 | ~26.9% | — | — |
| **Equity** | — | — | — | **~$9,442** | **100%** | — | **–5.58%** |

- **Gross long exposure:** 73.1%
- **Daytrade count:** 0 (inferred; no same-symbol B+S today)
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift:** Stable ~73% since morning exits. No unauthorized drift.

## Cap Math (equity $9,442)
- QQQ 45% max ~$4,249; held ~$4,169; room **~$80** → cannot add 1 share (~$695).
- VOO 30% max ~$2,833; held ~$2,730; room **~$103** → cannot add 1 share (~$682).
- Stock 15% max ~$1,416 — no stock adds authorized.
- Weekly TO Mon Jul 13–Sun Jul 19 ≈ **$3,045 / $9,442 ≈ 32.2%** (over 20%).
- Daily position-changing trades: **2/2** (HOOD, AVGO).

## Performance Review — Fri Jul 17 close
- **1D (vs last_equity $9,558.85):** portfolio **~–1.2%** on a soft Nasdaq day; roughly beta-aligned after morning single-name exits. Core held into close — correct vs June liquidation habit.
- **1W:** SPY ~−1.5%; QQQ ~−3.9%; SOXX ~−10% — growth/semis soft vs broad.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–5.58%** vs SPY **~+3.5%**. Gap **~–9.1 pp**.
- **What worked today:** Core QQQ/VOO untouched after morning; tactical held through CRITICAL without inventing core stops; audit clean; no AH churn.
- **What failed:** Absolute red; gap to SPY wide. Morning HOOD (unauthorized) + AVGO (event-response above floor) harvested friction; cash ~27% idle but correctly blocked.
- **What must change next week:** Respect weekly TO from Monday open; only deploy when integer room + budget exist; prefer VOO limit adds; zero single-name churn without two-sided edge after friction.

## Goal Check
- **Portfolio since inception:** –5.58%
- **S&P 500 since inception:** ~+3.5% (SPY ~743.3 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Excessive turnover / friction** (primary) + **cash drag** (secondary, currently hard-blocked).
- **Exact cash / under-deployment blockers (into weekend):**
  1. **Daily turnover 2/2 spent** (HOOD + AVGO sells).
  2. **Weekly turnover Mon–Fri ~32.2%** of equity > 20% ceiling (week through Sun Jul 19).
  3. **VOO room ~$103** < 1 share.
  4. **QQQ room ~$80** < 1 share.
  5. **24h cooldown + anti-churn** on HOOD and AVGO (sold today; cooldown into Sat morning; still apply Mon open judgment — do not auto-rebuy).
  6. **Session closed** — no equity orders until Mon regular open.
  7. Soft Nasdaq/chip week — not a reason to invent weekend/AH activity.

## Market Intel — Friday close
- **Event detector (~20:12Z):** **MINOR**. SOXX −0.56% MINOR, SMH −0.66% MINOR; SPY/QQQ/XLK/GLD OK; held QQQ/VOO OK. Sector rotation NONE. 14:40 CRITICAL fully cooled.
- **Broad:** SPY ~743.3 soft day. QQQ ~$695 (−1.6% day). VOO ~$682 (−1.1% day).
- **Semis:** SOXX ~$521; AVGO ~$371; NVDA ~$202. **Do not chase** into weekend.
- **Illiquid for market orders:** EIS (stale bar), QTUM/SHLD/GLD/ARKX low TradeCount.
- **News (prior cycle Yahoo RSS; no live fetch this hour — bun/curl hung):** AI-debt wariness; SpaceX IPO funding background. Not a core-ETF sell signal.
- **Earnings:** No held-name binary. META/GOOG late July; NVDA Aug. Not blocking hold.
- **Data source note:** FMP disabled historically; multi-TF from prior Yahoo snapshot (~18:35Z). Fresh absolute marks from Alpaca pre-fetch.

## Universe marks (Alpaca pre-fetch ~20:00–20:06Z + prior Yahoo multi-TF)
| Symbol | Latest | 1w (prior) | Note |
|---|---|---|---|
| SPY | ~743.3 | −1.5% | Soft day OK severity |
| QQQ | ~694.9 | −3.9% | Core hold |
| VOO | ~682.4 | −1.5% | Core hold |
| AVGO | ~370.7 | −6.8% | Flat — no rebuy |
| HOOD | ~99.9 | −9.7% | Flat — no rebuy |
| NVDA | ~202.4 | −3.6% | Avoid |
| SOXX | ~520.9 | −9.9% | Avoid chase |
| GOOG | ~346.2 | −3.0% | Avoid |
| META | ~646.0 | −3.2% | **BANNED** |
| GLD | ~368.4 | −2.4% | Illiquid bar / no auth |
| Thin ETFs | — | soft | No auth |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **Hold** | Core liquid growth. Near 45% cap. Soft Nasdaq ≠ sell. No stop <8%. | 36–45% |
| VOO | **Hold** | Broad anchor ~29%. Cap room <1 share. Preferred Mon+ deploy vehicle. | 21–30% |
| AVGO | **Flat — no re-buy this weekend / Mon without fresh hourly** | Sold $360.33; now ~$371. Friction if chased. | 0% |
| HOOD | **Flat — no re-buy** | Unauthorized open exit @ $100.96. | 0% |
| META | **BANNED** | Fri Jul 10 unauthorized RT. | 0% |
| NVDA / SOXX / GOOG / thin | **Avoid** | Weekly TO + no edge after friction into weekend. | 0% |

## Priority Actions (close → Mon open)
1. **HOLD QQQ 6 / VOO 4.** No sells. No full liquidations. No core ETF stops.
2. **NO NEW BUYS** rest of calendar week (through Sun Jul 19) — daily spent + weekly TO exceeded + session closed.
3. **AVGO / HOOD:** flat. Do not re-buy on monomania bounce without new hourly edge + budget.
4. **META remains banned.**
5. **No active sell triggers.** Tactical must not invent stops over weekend or at Mon open unless hourly rewrites.
6. **Accept gross ~73%** into weekend. Cash drag is documented and blocked — not a force-deploy.
7. **Mon Jul 20 open reassess:** if detector not CRITICAL **and** weekly TO resets **and** VOO/QQQ integer room opens **and** tape orderly → prefer **VOO** limit add first (at/below bid). Else hold.
8. **Process:** Event-response single-name exits must not undercut an explicit hourly catastrophic floor unless price is through that floor. 14:40 CRITICAL correctly held core.

## Ranked Deployment Queue (NOT authorized until Mon+ hourly rewrite)
1. **VOO** — weekly TO headroom + cap room ≥1 share + non-CRITICAL + fresh hourly authorize. Limit only.
2. **QQQ** — only if VOO capped and QQQ room ≥1 share (unlikely near 45%).
3. **Never** force NVDA/SOXX/AVGO bounce-chases after same-day or prior-day friction exits without edge.
4. **Never META / never thin ETFs without explicit hourly line.**
5. **Never HOOD/AVGO re-buy without explicit new hourly authorization after cooldown.**

## Macro Themes
- **Actionable now:** Hold QQQ/VOO through weekend. Zero orders until Mon regular session + fresh hourly.
- **Worth monitoring:** Mon gap; weekly TO reset; VOO/QQQ integer room after marks; chip bounce durability.
- **Not actionable:** META; SpaceX/ARKX; thin-ETF noise; chasing AVGO/NVDA; AI-debt headlines as trade signal.

## Data / Process Notes
- **Audit posture:** Clean book (QQQ/VOO only). Daytrades 0.
- **Event detector:** MINOR @ 20:12Z — monitor only; no autonomous action.
- **CRITICAL response cleared** for next session language: do not carry "NO NEW BUYS — CRITICAL EVENT" past this hourly reset; buys still blocked by **TO + caps + closed session**, not by CRITICAL.
- **Tooling:** bun/CLI hung this cycle — document; prefer pre-fetch + temp_files direct helpers when runtime recovers.
- **Alpha preservation:** Core ETFs untouched into close is correct. Every forced trade today would fail the do-nothing test after friction.

## Standing Learnings
See `memory/standing_learnings.md`. Key reminders:
- Size from **account equity**, not BP. **No leverage.**
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST order paths prohibited** for tactical.
- **Lock files must NOT auto-expire.**
- **With ~$10K equity, caps are tight** (QQQ 6 / VOO 4 near max).
- **VOO preferred cash-deploy** when QQQ near 45% — only with room + budget + orderly tape.
- **Cash ≤10% target** — if weekly TO / caps / daily budget bind, write exact blocker (current).
- **No full liquidations. No tight stops on QQQ/VOO/SOXX (<8%).**
- **Neutral band 75–90%.** Live 73.1% residual of single-name exits; do **not** force buys with spent budget; do **not** de-risk core.
- **Turnover budget is real:** daily **and** weekly. Protective + unauthorized exits still add to weekly notional.
- **CRITICAL → NO NEW BUYS** unless hourly override. When CRITICAL cools, still respect daily/weekly TO.
- **Tactical must not invent stops** absent from current `todo.md`.
- **Alpha preservation:** VOO/QQQ core untouched is the free baseline; every trade must beat do-nothing after friction.

## Prior Key Events
- **2026-07-17 14:40 ET:** Detector CRITICAL SOXX/SMH — autonomous hold; no action.
- **2026-07-17 ~9:41 ET:** SOLD 1 AVGO @ $360.33 — event response above floor. Later ~$371.
- **2026-07-17 ~9:33 ET:** SOLD 1 HOOD @ $100.96 — **not authorized**. Flat HOOD.
- **2026-07-16:** HOOD/AVGO trail sells authorized prior day; post-close HOLD-ONLY.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance source.
