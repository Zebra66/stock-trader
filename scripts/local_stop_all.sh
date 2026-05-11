#!/bin/bash

echo "Stopping all local Autonomous Stock Trader processes..."

# Stop the main harness if running
pkill -f "bun run src/harness.ts" && echo "Stopped Harness." || echo "Harness was not running."

# Stop the web server if running standalone
pkill -f "bun run src/web/server.ts" && echo "Stopped Web Server." || echo "Web Server was not running standalone."

# Stop any lingering agent processes
pkill -f "bun run src/agent.ts" && echo "Stopped Agent processes." || echo "No Agent processes found."

echo "All stock trader processes have been terminated."
