import { describe, expect, test } from 'bun:test';
import { loadAgentConfig, parseModelSpec } from './agent_config';

describe('agent config', () => {
  test('loadAgentConfig reads hourly and tactical model selections', async () => {
    const config = await loadAgentConfig();

    expect(config.modes.hourly.model).toContain('/');
    expect(config.modes.tactical.model).toContain('/');
    expect(config.modes.hourly.model.toLowerCase()).toContain('gemini');
    expect(config.modes.tactical.model.toLowerCase()).toContain('gemini');
  });

  test('parseModelSpec splits provider and model id', () => {
    expect(parseModelSpec('gemini/gemini-2.5-pro')).toEqual({
      providerID: 'gemini',
      modelID: 'gemini-2.5-pro',
    });
  });
});
