const MESSAGE_SEVERITY_PATTERNS: Array<{ pattern: RegExp; severity: string }> = [
  { pattern: /\|\s*ERROR\s*\|/i, severity: 'ERROR' },
  { pattern: /\|\s*WARN\s*\|/i, severity: 'WARNING' },
  { pattern: /\|\s*INFO\s*\|/i, severity: 'INFO' },
  { pattern: /\|\s*DEBUG\s*\|/i, severity: 'DEBUG' },
];

export function deriveLogSeverity(severity: string | undefined, message: string): string {
  const normalizedSeverity = severity?.toUpperCase();
  if (normalizedSeverity && normalizedSeverity !== 'DEFAULT') {
    return normalizedSeverity;
  }

  for (const { pattern, severity: derivedSeverity } of MESSAGE_SEVERITY_PATTERNS) {
    if (pattern.test(message)) {
      return derivedSeverity;
    }
  }

  return 'DEFAULT';
}
