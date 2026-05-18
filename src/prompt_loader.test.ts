import { describe, expect, test } from 'bun:test';
import { buildPrompt } from './prompt_loader';

describe('prompt loader', () => {
  test('buildPrompt loads the hourly prompt from prompts/hourly.txt', async () => {
    const prompt = await buildPrompt('hourly');

    expect(prompt).toContain('Hourly Macro Strategist Agent');
    expect(prompt).toContain('Available Repo CLI Tools');
    expect(prompt).toContain('Investment Universe: AVGO, EIS, GLD, GOOG, HOOD, META, NVDA, QQQ, QTUM, RKLB, SHLD, SOXX, VOO, ARKX');
    expect(prompt).not.toContain('ARKX, META');
    expect(prompt).toContain('beat the S&P 500');
    expect(prompt).not.toContain('bit S&P 500');
    expect(prompt).not.toContain('chganges');
    expect(prompt).toContain('bun run src/tools/alpaca_cli.ts get-account');
    expect(prompt).toContain('Step 4 — Dreaming memory maintenance');
    expect(prompt).toContain('Distill accumulated memories into the smallest useful current state');
    expect(prompt).not.toContain('invoke via executeBash');
    expect(prompt).not.toContain('{{UNIVERSE}}');
    expect(prompt).not.toContain('{{INCLUDE');
    expect(prompt).not.toContain('{{CLI_TOOLS_INTRO}}');
  });

  test('buildPrompt loads the tactical prompt from prompts/tactical.txt', async () => {
    const prompt = await buildPrompt('tactical');

    expect(prompt).toContain('10-Minute Tactical Executor Agent');
    expect(prompt).toContain('Available Repo CLI Tools');
    expect(prompt).toContain('10-Minute Tactical Executor Agent');
    expect(prompt).toContain('Step 0 — Major Event Detection');
    expect(prompt).toContain('EVENT RESPONSE MODE');
    expect(prompt).not.toContain('ARKX, META');
    expect(prompt).toContain('beat the S&P 500');
    expect(prompt).not.toContain('bit S&P 500');
    expect(prompt).not.toContain('chganges');
    expect(prompt).toContain('bun run src/tools/alpaca_cli.ts get-latest-price --symbol <TICKER>');
    expect(prompt).not.toContain('invoke via executeBash');
    expect(prompt).not.toContain('{{UNIVERSE}}');
    expect(prompt).not.toContain('{{INCLUDE');
    expect(prompt).not.toContain('{{CLI_TOOLS_INTRO}}');
  });

  test('buildPrompt loads the analyst prompt from prompts/analyst.txt', async () => {
    const prompt = await buildPrompt('analyst');

    expect(prompt).toContain('Analyst Sub-Agent');
    expect(prompt).toContain('Available Repo CLI Tools');
    expect(prompt).toContain('### Confidence:');
    expect(prompt).toContain('### Recommendation:');
    expect(prompt).toContain('Do NOT execute trades or write to');
    expect(prompt).not.toContain('{{UNIVERSE}}');
    expect(prompt).not.toContain('{{INCLUDE');
    expect(prompt).not.toContain('{{CLI_TOOLS_INTRO}}');
  });
});
