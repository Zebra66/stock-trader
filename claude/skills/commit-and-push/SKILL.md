---
name: commit-and-push
description: Use when the user explicitly asks to both commit and push changes to git, such as commit and push, git commit and push, make a commit and push it, or finish work by creating a commit and pushing the branch.
---

# Commit And Push

## Overview

Use this skill only when the user explicitly asks to both commit and push.

The first rule is: always delegate the git execution work to a fresh sub-agent and explicitly require `GPT-5.4 mini`, unless the user explicitly tells you not to use a sub-agent.

The second rule is: keep the staged scope tightly limited to the requested change and verify the result yourself before reporting success.

## Required Sub-Agent

**REQUIRED SUB-AGENT:** Launch a fresh `general` sub-agent to perform the git workflow.

**REQUIRED MODEL:** In the sub-agent prompt, explicitly require `GPT-5.4 mini` to reduce cost.

## When To Use

Use this skill when:
- the user says `commit & push`
- the user says `git commit and push`
- the user asks you to `make a commit and push it`
- the user says `ship these changes`
- the user asks you to finish work by creating a commit and pushing the branch

Do not use this skill when:
- the user asked only for a commit
- the user asked only for a push
- the user has not explicitly approved creating a commit

## Workflow

### 1. Dispatch the sub-agent

Tell the sub-agent to use `GPT-5.4 mini` and to execute this workflow:
- inspect `git status --short`
- inspect the relevant diff for the requested work
- inspect recent commit messages to match local style
- stage only the files that belong to the requested change
- never stage obvious secrets or unrelated changes
- run the relevant verification commands before commit
- create a new commit without amend unless the user explicitly asked for amend
- push the current branch normally
- never use force push unless the user explicitly asked for it
- return a concise report with: staged files, verification results, commit SHA, pushed branch, and any skipped files

### 2. Require safe staging

The sub-agent must:
- avoid unrelated modified files already in the worktree
- leave other people's in-progress changes untouched
- avoid bundling docs, config, or generated files unless they are part of the requested work

If the requested work depends on files with mixed unrelated edits, if the commit scope cannot be isolated confidently, or if staged/untracked files may include secrets, the sub-agent should stop and report that clearly instead of guessing.

### 3. Require verification before commit

Before committing, the sub-agent must run the smallest relevant verification that proves the change is healthy.

Examples:
- focused unit tests for touched modules
- typecheck for touched TypeScript files
- formatter or linter only if the repo expects it for those files

If verification fails, the sub-agent must not commit or push.

If commit hooks fail or modify files, the sub-agent must stop, inspect the resulting diff, and re-evaluate instead of blindly retrying.

### 4. Require a clean git push policy

The sub-agent must:
- push with a normal `git push`
- use `-u` only when the branch is not tracking a remote yet
- never force-push without explicit user approval
- stop and report clearly before pushing `main`, `master`, or another protected/default branch unless the user explicitly asked for that exact push
- report push failures exactly instead of retrying destructively

If push is rejected, the sub-agent must report the exact reason and stop unless the user explicitly asks for the next action.

### 5. Forbidden operations

The sub-agent must not:
- run `git push --force` or any force variant unless the user explicitly asked for it
- run `git commit --amend` unless the user explicitly asked for amend
- use `--no-verify` unless the user explicitly asked to skip hooks
- run destructive cleanup commands like `git reset --hard`, `git checkout --`, or file-restoring commands to make the commit easier
- change git config

### 6. Parent-agent verification

After the sub-agent finishes, verify the outcome yourself before telling the user it is done.

Run at least:
- `git status -sb`
- `git log -1 --oneline`

If the sub-agent claims push success, confirm the branch is no longer only `ahead` locally or otherwise report the exact remaining state.

Do not trust the sub-agent blindly.

## Sub-Agent Prompt Template

Use a prompt equivalent to this:

```text
Use GPT-5.4 mini for this task.

The user explicitly asked to commit and push changes.

Execute a safe git workflow:
1. Inspect git status, relevant diffs, and recent commit message style.
2. Stage only files that belong to the requested change.
3. Do not stage unrelated edits, generated noise, or likely secrets.
4. Run the smallest relevant verification before commit.
5. Create a new commit that follows repo commit conventions.
6. Push the current branch safely. Never force-push unless the user explicitly asked.
7. Return: verification results, staged files, commit SHA, branch pushed, and any issues.
```

## Common Mistakes

- committing everything in a dirty worktree instead of isolating the requested change
- pushing without running any verification
- amending by default
- force-pushing to get around a rejected push
- trusting the sub-agent result without checking local git state afterward

## Quick Reference

- Trigger: explicit user request to commit and push
- Execution mode: delegated sub-agent
- Required sub-agent model: `GPT-5.4 mini`
- Never do: force push, blind amend, commit unrelated changes
- Parent-agent final check: `git status -sb` and `git log -1 --oneline`
