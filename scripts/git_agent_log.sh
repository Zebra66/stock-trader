#!/bin/bash

# Show only commits made by the autonomous agent (prefixed with [agent])
# Usage: ./scripts/git_agent_log.sh [optional git log flags]
#   e.g. ./scripts/git_agent_log.sh --oneline
#   e.g. ./scripts/git_agent_log.sh --since="1 week ago"

cd "$(dirname "$0")/.."

git log --grep='\[agent\]' --color=always "$@"
