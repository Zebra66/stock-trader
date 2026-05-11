import { describe, expect, test } from 'bun:test';
import { loadAgentConfig, parseModelSpec } from './agent_config';

describe('agent config', () => {
  test('loadAgentConfig reads hourly and tactical model selections', async () => {
    const config = await loadAgentConfig();

    expect(config.modes.hourly.model).toContain('/');
    expect(config.modes.tactical.model).toContain('/');
    expect(config.modes.hourly.model).toBe('trader-openai/gpt-5.4');
    expect(config.modes.tactical.model).toBe('trader-openai/gpt-5.4-mini');
  });

  test('parseModelSpec splits provider and model id', () => {
    expect(parseModelSpec('trader-openai/gpt-5.4')).toEqual({
      providerID: 'trader-openai',
      modelID: 'gpt-5.4',
    });
  });
});
