import type { AgentMode } from './opencode_runner';

interface AgentModeConfig {
  model: string;
}

export interface AgentRuntimeConfig {
  modes: Record<AgentMode, AgentModeConfig>;
}

const CONFIG_PATH = new URL('../config/agent_runtime.json', import.meta.url);

export async function loadAgentConfig(): Promise<AgentRuntimeConfig> {
  const content = await Bun.file(CONFIG_PATH).text();
  const parsed = JSON.parse(content) as Partial<AgentRuntimeConfig>;

  if (!parsed.modes?.hourly?.model) {
    throw new Error('Missing config.modes.hourly.model');
  }

  if (!parsed.modes?.tactical?.model) {
    throw new Error('Missing config.modes.tactical.model');
  }

  return parsed as AgentRuntimeConfig;
}

export function parseModelSpec(model: string): { providerID: string; modelID: string } {
  const separatorIndex = model.indexOf('/');

  if (separatorIndex <= 0 || separatorIndex === model.length - 1) {
    throw new Error(`Invalid model spec: ${model}`);
  }

  return {
    providerID: model.slice(0, separatorIndex),
    modelID: model.slice(separatorIndex + 1),
  };
}
