const DEFAULT_ENV_PATH = new URL('../.env', import.meta.url);

let envLoaded = false;

export function parseEnvFileContent(content: string): Record<string, string> {
  const entries: Record<string, string> = {};

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line || line.startsWith('#')) {
      continue;
    }

    const normalized = line.startsWith('export ') ? line.slice('export '.length).trim() : line;
    const separatorIndex = normalized.indexOf('=');

    if (separatorIndex <= 0) {
      continue;
    }

    const key = normalized.slice(0, separatorIndex).trim();
    const value = normalizeEnvValue(normalized.slice(separatorIndex + 1).trim());

    if (key) {
      entries[key] = value;
    }
  }

  return entries;
}

export function applyEnvOverrides(entries: Record<string, string>): void {
  for (const [key, value] of Object.entries(entries)) {
    process.env[key] = value;
  }
}

export async function ensureEnvOverridesLoaded(envPath: string | URL = DEFAULT_ENV_PATH): Promise<void> {
  if (envLoaded) {
    return;
  }

  const file = Bun.file(envPath);
  if (!(await file.exists())) {
    envLoaded = true;
    return;
  }

  const content = await file.text();
  applyEnvOverrides(parseEnvFileContent(content));
  envLoaded = true;
}

function normalizeEnvValue(rawValue: string): string {
  if (!rawValue) {
    return '';
  }

  if (
    (rawValue.startsWith('"') && rawValue.endsWith('"')) ||
    (rawValue.startsWith("'") && rawValue.endsWith("'"))
  ) {
    return rawValue.slice(1, -1);
  }

  const commentIndex = rawValue.indexOf(' #');
  return commentIndex >= 0 ? rawValue.slice(0, commentIndex).trimEnd() : rawValue;
}

await ensureEnvOverridesLoaded();
