#!/usr/bin/env bash
# Quick connectivity diagnostic for the agent runtime container.
# Run this before starting trading loops to verify outbound access.

echo "=== Network Diagnostic ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo ""

echo "--- DNS resolution ---"
if command -v nslookup >/dev/null 2>&1; then
  nslookup paper-api.alpaca.markets 2>&1 | head -5
elif command -v dig >/dev/null 2>&1; then
  dig +short paper-api.alpaca.markets 2>&1 | head -5
else
  echo "No DNS lookup tool available"
fi

echo ""
echo "--- HTTP checks (10s timeout) ---"
for url in \
  "https://paper-api.alpaca.markets/v2/clock" \
  "https://www.google.com" \
  "https://github.com"
do
  printf "%-50s : " "$url"
  code=$(timeout 8 curl -s -o /dev/null -w "%{http_code}" --connect-timeout 5 --max-time 8 "$url" 2>&1)
  rc=$?
  if [ "$rc" -eq 0 ]; then
    echo "HTTP $code"
  elif [ "$rc" -eq 124 ]; then
    echo "FAIL (timed out)"
  else
    echo "FAIL (exit $rc)"
  fi
done

echo ""
echo "--- Bun runtime test ---"
if command -v bun >/dev/null 2>&1; then
  # Use timeout command if available
  if command -v timeout >/dev/null 2>&1; then
    timeout 5 bun -e "console.log('BUN_OK')" 2>&1 || echo "Bun runtime FAIL (timeout or error)"
  else
    echo "No 'timeout' command available — cannot safely test Bun"
  fi
else
  echo "Bun not found in PATH"
fi

echo ""
echo "=== End Diagnostic ==="
