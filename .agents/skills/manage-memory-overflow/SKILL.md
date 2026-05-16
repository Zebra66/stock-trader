---
description: Handle memory tool failures when a target reaches its ~5000 character limit by consolidating or redirecting entries.
---

# Manage Pi Memory Overflow

When the `memory` tool fails because a target has reached its ~5000 character limit and you need to save new information.

## When to Use
- The `memory` tool returns `"Memory at X/5000 chars. Adding this entry (Y chars) would exceed the limit."`
- You need to persist important information but the target is at capacity.
- You want to clean up or consolidate existing memory entries to make room.

## Procedure
1. **Identify which target is full.** The error shows usage (e.g., `"Memory at 4912/5000 chars"`). Note the target (`user`, `memory`, `project`, or `failure`).
2. **Try an alternative target.** Each target has its own independent 5000-character quota. If `user` is full, save project-specific info to `target: "project"` with `project: "<name>"`, or save failures/corrections to `target: "failure"`.
3. **If the target you need is full, consolidate existing entries:**
   - Use `memory_search` to find old or less important entries in that target.
   - Use `memory` with `action: "replace"` to merge multiple small entries into one well-organized entry.
   - Use `memory` with `action: "remove"` to delete truly obsolete entries.
4. **Retry saving the new entry.**

## Pitfalls
- `memory_search` displays **truncated results** in its output. Do not copy-paste the text shown in search output directly into a `memory` replace/remove call — the exact full text is required for matching, and truncation will cause `"No entry matched"` failures.
- Do not use `memory` for temporary task state, TODO items, or session progress. Only durable, cross-session facts should be stored.
- `project`-scoped memories (saved with `target: "project"` or `target: "memory"` plus `project` field) are distinct from global memories. Searching with `project: "<name>"` will not find entries saved to `target: "user"` or `target: "failure"`.

## Verification
- After consolidation, new `memory` writes to that target should succeed without the "would exceed the limit" error.
- `memory_search` for the target should show a reduced number of entries or smaller entry sizes.
