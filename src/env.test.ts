import { describe, expect, test } from 'bun:test';
import { applyEnvOverrides, parseEnvFileContent } from './env';

describe('env overrides', () => {
  test('parses simple dotenv content', () => {
    expect(
      parseEnvFileContent('ALPHA=1\nBETA = two\n# comment\nQUOTED="three four"\n'),
    ).toEqual({
      ALPHA: '1',
      BETA: 'two',
      QUOTED: 'three four',
    });
  });

  test('overrides pre-existing environment variables with .env values', () => {
    const previousAlpha = process.env.ALPHA;
    const previousBeta = process.env.BETA;

    process.env.ALPHA = 'from-shell';
    delete process.env.BETA;

    try {
      applyEnvOverrides({
        ALPHA: 'from-dotenv',
        BETA: 'new-value',
      });

      expect(process.env.ALPHA).toBe('from-dotenv');
      expect(process.env.BETA).toBe('new-value');
    } finally {
      restoreEnv('ALPHA', previousAlpha);
      restoreEnv('BETA', previousBeta);
    }
  });
});

function restoreEnv(key: string, value: string | undefined): void {
  if (value === undefined) {
    delete process.env[key];
    return;
  }

  process.env[key] = value;
}
