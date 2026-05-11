import pino from 'pino';

export interface AgentRunnerOptions {
  mode: 'hourly' | 'tactical';
  model: string;
  prompt: string;
  logger?: pino.Logger;
}

export interface AgentRunner {
  runPrompt(options: AgentRunnerOptions): Promise<void>;
}
