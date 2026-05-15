Review the latest autonomous trading behavior from GitHub commit history.

Fetch commit logs for the last `1D`, `1W`, and `1M`, but only include commits whose title starts with `[agent]`.

Use those commits to reconstruct what the `hourly` and `tactical` jobs have been doing, what they have learned, and what their current plan appears to be.

Read `prompts/hourly.txt` and compare the observed behavior against its actual goals and operating rules. Judge whether the system is on track to achieve the 3-month objective.

Keep the report concise, evidence-based, and easy to scan. Prefer facts from commit messages and referenced file changes over speculation. If evidence is missing, say so.

Structure the report exactly like this:

## Executive Summary
- 3-5 bullets: what the system has been doing, whether behavior is coherent, and whether it looks on track.

## Coverage
- `1D`: short summary
- `1W`: short summary
- `1M`: short summary

## What Hourly Has Been Doing
- Main decisions, portfolio posture, risk controls, prompt changes, and recurring themes.

## What Tactical Has Been Doing
- Main executions, trigger handling, symbol-level behavior, and whether it is following hourly direction.

## What The Agents Learned
- Durable learnings, repeated corrections, mistakes avoided, and any changes in process or risk discipline.

## Current Tactics Going Forward
- The active playbook now.
- Expected next moves if current logic continues.
- Anything that looks stale, contradictory, or weak.

## Goal Alignment vs `prompts/hourly.txt`
- Compare behavior against these two non-negotiable goals:
  1. Positive absolute returns
  2. Beat the S&P 500 on a risk-adjusted basis
- Also check whether the agents appear to be following the prompt's required behavior: goal checks, learning loops, tactical directives, risk safeguards, and prompt self-improvement.

## Verdict
- State exactly one:
  - `On track`
  - `Partially on track`
  - `Off track`
- Then give the clearest reason in 2-4 bullets.

## Missing Evidence
- What you could not determine from commits alone.
- What additional artifacts would most improve confidence, if any.

Rules:
- Separate `hourly` and `tactical`; do not blur them together.
- Distinguish between what was done, what was learned, and what is currently intended.
- Prefer recent evidence when older and newer commits conflict.
- Mention important changes in conviction, exposure, sector focus, sizing, or execution discipline.
- If the commit history suggests drift from the prompt, call it out clearly.
- Make the report readable for a human operator who wants the story, not raw logs.
- Make this work on Claude Code, OpenCode, and Antigravity by using whichever native git/GitHub tools are available there, without assuming platform-specific tool names.
