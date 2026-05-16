import { describe, expect, test } from 'bun:test';
import { loadAgentConfig, parseModelSpec } from './agent_config';

describe('agent config', () => {
  test('loadAgentConfig reads hourly and tactical model selections', async () => {
    const config = await loadAgentConfig();

    expect(config.modes.hourly.model).toContain('/');
    expect(config.modes.tactical.model).toContain('/');
    expect(config.modes.hourly.model).toBe('trader-zen/kimi-k2.6');
    expect(config.modes.tactical.model).toBe('trader-zen/kimi-k2.6');
  });

  test('parseModelSpec splits provider and model id', () => {
    expect(parseModelSpec('trader-zen/kimi-k2.6')).toEqual({
      providerID: 'trader-zen',
      modelID: 'kimi-k2.6',
    });
  });
});
