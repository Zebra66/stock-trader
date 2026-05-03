import { describe, expect, test } from 'bun:test';
import { buildPrompt } from './prompt_loader';

describe('prompt loader', () => {
  test('buildPrompt loads the hourly prompt from prompts/hourly.txt', async () => {
    const prompt = await buildPrompt('hourly');

    expect(prompt).toContain('Hourly Macro Strategist Agent');
    expect(prompt).toContain('Available Repo CLI Tools');
    expect(prompt).toContain('Investment Universe: High-Tech/LLMs');
    expect(prompt).toContain('bun run src/tools/alpaca_cli.ts get-account');
    expect(prompt).not.toContain('invoke via executeBash');
    expect(prompt).not.toContain('{{UNIVERSE}}');
    expect(prompt).not.toContain('{{CLI_TOOLS_INTRO}}');
  });

  test('buildPrompt loads the tactical prompt from prompts/tactical.txt', async () => {
    const prompt = await buildPrompt('tactical');

    expect(prompt).toContain('10-Minute Tactical Executor Agent');
    expect(prompt).toContain('Available Repo CLI Tools');
    expect(prompt).toContain('Investment Universe: High-Tech/LLMs');
    expect(prompt).toContain('bun run src/tools/alpaca_cli.ts get-latest-price --symbol <TICKER>');
    expect(prompt).not.toContain('invoke via executeBash');
    expect(prompt).not.toContain('{{UNIVERSE}}');
    expect(prompt).not.toContain('{{CLI_TOOLS_INTRO}}');
  });
});
