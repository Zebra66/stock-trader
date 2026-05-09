import { describe, expect, test } from 'bun:test';
import { buildPrompt } from './prompt_loader';

describe('prompt loader', () => {
  test('buildPrompt loads the hourly prompt from prompts/hourly.txt', async () => {
    const prompt = await buildPrompt('hourly');

    expect(prompt).toContain('Hourly Macro Strategist Agent');
    expect(prompt).toContain('Available Repo CLI Tools');
    expect(prompt).toContain('My personal portfolio is AVGO, EIS, GLD, GOOG, HOOD, META, NVDA, QQQ, QTUM, RKLB, SHLD, SOXX, VOO, ARKX.');
    expect(prompt).not.toContain('ARKX, META');
    expect(prompt).toContain('beat the S&P 500');
    expect(prompt).not.toContain('bit S&P 500');
    expect(prompt).not.toContain('chganges');
    expect(prompt).toContain('bun run src/tools/alpaca_cli.ts get-account');
    expect(prompt).toContain('design your own safeguards for the next hour');
    expect(prompt).toContain('Step 4 — Dreaming memory maintenance');
    expect(prompt).toContain('Distill accumulated memories into the smallest useful current state');
    expect(prompt).not.toContain('invoke via executeBash');
    expect(prompt).not.toContain('{{UNIVERSE}}');
    expect(prompt).not.toContain('{{CLI_TOOLS_INTRO}}');
  });

  test('buildPrompt loads the tactical prompt from prompts/tactical.txt', async () => {
    const prompt = await buildPrompt('tactical');

    expect(prompt).toContain('10-Minute Tactical Executor Agent');
    expect(prompt).toContain('Available Repo CLI Tools');
    expect(prompt).toContain('The hourly job is the trading expert! it will define the investment universe and set buy/sell conditions for you to execute.');
    expect(prompt).not.toContain('ARKX, META');
    expect(prompt).toContain('beat the S&P 500');
    expect(prompt).not.toContain('bit S&P 500');
    expect(prompt).not.toContain('chganges');
    expect(prompt).toContain('bun run src/tools/alpaca_cli.ts get-latest-price --symbol <TICKER>');
    expect(prompt).not.toContain('invoke via executeBash');
    expect(prompt).not.toContain('{{UNIVERSE}}');
    expect(prompt).not.toContain('{{CLI_TOOLS_INTRO}}');
  });
});
