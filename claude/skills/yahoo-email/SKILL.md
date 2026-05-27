---
name: yahoo-email
description: Manage Yahoo Mail via the Himalaya CLI tool — read, search, summarize, flag, and organize emails through terminal commands with JSON structured output.
---

# Yahoo Mail Management via Himalaya CLI

## Overview

Use this skill to read, search, summarize, and manage the user's Yahoo Mail account through the terminal using the `himalaya` CLI tool (written in Rust). All listing and discovery commands must use `--output json` for structured data parsing.

## When To Use

Use this skill when:
- the user asks to check, review, or summarize their Yahoo email
- the user wants to find unread, important, or specific emails
- the user asks to delete, archive, flag, or organize emails
- the user wants to identify senders to unsubscribe from

Do not use this skill when:
- the user is asking about a different email provider (Gmail, Outlook, etc.)
- Himalaya is not installed or configured
- the user has not provided Yahoo app password / keyring access

## Prerequisites

- `himalaya` CLI installed and configured with Yahoo IMAP credentials
- Yahoo app password stored in system keyring (not exposed in chat)

## Safety & Execution Rules

1. **No Speculative Actions:** Never archive, delete, or send emails without an explicit command or final approval from the user.
2. **Idempotency:** When editing drafts or modifying tags/flags, verify the message ID first to ensure you are targeting the exact, intended record.
3. **App Passwords:** Do not expose the user's Yahoo app password or keyring retrieval commands in any chat outputs.

## Technical Strategy: JSON Output First

Always append `--output json` or `-o json` to listing and viewing commands. This allows structured data parsing without regex scraping.

## Command Reference

### Envelope Discovery & Synchronization

```bash
# List folders
himalaya folder list -o json

# List inbox items
himalaya envelope list -o json

# Paginate results
himalaya envelope list --max-width 100 --page 1 --page-size 20 -o json

# Filter by folder
himalaya envelope list --folder "Archive" -o json
```

### Searching and Querying

Himalaya supports server-side IMAP search strings:

```bash
# Search by sender
himalaya envelope search "FROM \"sender@domain.com\"" -o json

# Search unread
himalaya envelope search "UNSEEN" -o json

# Combined query
himalaya envelope search "UNSEEN FROM \"netflix\"" -o json
```

### Message Retrieval & Operations

Use the unique integer `id` returned from envelope listings:

```bash
# Read body text
himalaya message read <id>

# Download raw MIME
himalaya message read <id> --raw

# Mark as read
himalaya flag add <id> seen

# Mark as unread
himalaya flag remove <id> seen

# Move to trash
himalaya message delete <id>
```

### Writing & Replying

```bash
# Send a quick message
echo "This is the body" | himalaya message send --subject "Hello" --to "recipient@domain.com"

# Reply to a thread (generates template; pipe response body in)
himalaya message reply <id> --all
```

## Typical Workflow: Summarizing Latest Unread Emails

1. **Fetch unread envelopes:**
   ```bash
   himalaya envelope search "UNSEEN" -o json
   ```

2. **Parse JSON payload:** Extract `id`, `from.name`, and `subject` fields.

3. **Read target messages:**
   ```bash
   himalaya message read <id>
   ```

4. **Synthesize and present:** Show clean summary blocks to the user.

5. **Request action:** Ask if they want to mark specific IDs as `seen` or draft a reply.

## Email Triage Workflow

When the user asks to triage or review recent emails, follow this structured process:

1. **Fetch last 5 days (or requested window):**
   ```bash
   himalaya envelope search "SINCE \"$(date -v-5d +%d-%b-%Y)\"" -o json
   ```

2. **Categorize into three lists:**
   - **Delete candidates:** Obvious noise, expired promotions, duplicates, automated alerts with no action needed.
   - **Unsubscribe targets:** Recurring bulk senders the user clearly does not want (frequent marketing, newsletters never read).
   - **Important emails:** Anything requiring attention — provide a one-line summary, sender, subject, and ask: *Read full text / Mark read / Delete?*

3. **Present the three lists** clearly and wait for user confirmation before executing any flag, move, or delete.

## Common Mistakes

- Running listing commands without `-o json` and trying to parse raw text
- Deleting or flagging emails without explicit user confirmation
- Exposing app password or keyring commands in chat output
- Assuming message IDs are stable across sessions — always re-list before operating
