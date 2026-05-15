---
name: review-last-trading-day
description: Use when the user asks to review, summarize, debrief, or analyze the most recent trading day, or when they mention yesterday's trading session, agent decisions, logs, or memory.
---

# Review Last Trading Day

## Overview

Synthesize a concise after-action review of the most recent completed trading session by dispatching parallel sub-agents to read the structured memory logs and session artifacts, then fusing their findings into a short report.

## When to Use

- User asks "review yesterday's trading" or "how did we do last session"
- User asks to analyze recent agent decisions, trades, or market calls
- User references `memory/` or `temp_files/logs/` for a trading summary
- User asks for a debrief, post-mortem, or performance recap

## Sources of Truth

| Source | File(s) | What to extract |
|--------|---------|-----------------|
| Narrative log | `memory/intraday_execution_log_YYYY-MM-DD.md` | Cycle timestamps, broker state, market conditions, decisions, blockers |
| Ledger | `memory/ledger.md` | All entries for the target date, sorted chronologically |
| Macro memory | `memory/MEMORY.md` | Regime, goal check, exposure plan, bias table, dated learnings |
| Research | `memory/research/*YYYYMMDD*` | Any files referenced by the execution log |
| Runtime logs | `temp_files/logs/YYYYMMDD_*_session.log` | Errors, hangs, infra issues |

## Procedure

### 1. Identify the target date

Scan `memory/` for the most recent `intraday_execution_log_YYYY-MM-DD.md`. Use that `YYYY-MM-DD` as the session under review.

### 2. Dispatch parallel research sub-agents

Launch **four** independent `general` sub-agents in parallel. Each reads its assigned source and returns **only** a bullet summary of the facts it found.

**Sub-agent A — Narrative Log**
> Read `memory/intraday_execution_log_YYYY-MM-DD.md` for the target date.
> Return a bullet list of every cycle (timestamp, mode, broker state, market conditions, decision, and any blockers like data blackouts or quote-quality warnings).

**Sub-agent B — Ledger**
> Read `memory/ledger.md` and extract every entry matching the target date.
> Return them sorted chronologically with mode `[hourly]` / `[tactical]` and the TL;DR decision.

**Sub-agent C — Macro Memory**
> Read `memory/MEMORY.md`.
> Return: current regime, goal-check numbers (portfolio vs SPY), exposure plan, bias table, and any **dated learnings** recorded for the target date.

**Sub-agent D — Runtime & Research Artifacts**
> List `temp_files/logs/` files with prefix matching the target date and read any `session.log` files for runtime errors or hangs.
> List `memory/research/` files matching the target date and summarize any that are referenced in the execution log.
> Return a bullet list of infra issues, data-source failures, and any research artifacts used.

### 3. Synthesize the concise review

Combine the four sub-agent outputs into a single short report. **Be concise.** Prioritize the following sections in this exact order:

```markdown
# Trading Review — YYYY-MM-DD

## Portfolio Performance
- Since-inception return vs SPY benchmark
- 1D and 1W returns if available
- Closing equity, cash, and gross exposure

## Portfolio Changes
- Opening vs closing holdings (any buys, sells, or holds)
- Exposure shift during the session

## Main Learnings

### What Went Well
- Accurate reads, good discipline, useful fallbacks

### What Did Not Go Well
- Data failures, missed triggers, execution gaps, infra issues

## Dated Learnings
- Any new rules or policy changes captured in MEMORY.md for this date

## Forward Look
- Deployment queue and tactical priorities for the next session
```

## Common Mistakes

- **Guessing** the date instead of scanning `memory/` filenames
- **Skipping** ledger entries and missing per-cycle decisions
- **Ignoring** runtime logs and missing infra issues that explain why no trades fired
- **Omitting** the bias table or deployment queue from `MEMORY.md`
- **Reading** outdated execution logs without confirming they are the most recent
- **Letting sub-agents write the final report** — their job is research; the parent agent fuses and writes the concise review
