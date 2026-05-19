import * as fs from 'fs/promises';
import * as path from 'path';

export interface UserPrompt {
  id: string;
  createdAt: string;
  text: string;
  executed: boolean;
  executedAt?: string;
}

const PROMPTS_FILE = path.join(process.cwd(), 'memory', 'user_prompts.json');

export async function readPrompts(): Promise<UserPrompt[]> {
  try {
    const data = await fs.readFile(PROMPTS_FILE, 'utf8');
    return JSON.parse(data) as UserPrompt[];
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      return [];
    }
    throw err;
  }
}

export async function writePrompts(prompts: UserPrompt[]): Promise<void> {
  await fs.mkdir(path.dirname(PROMPTS_FILE), { recursive: true });
  await fs.writeFile(PROMPTS_FILE, JSON.stringify(prompts, null, 2), 'utf8');
}

export async function addPrompt(text: string): Promise<UserPrompt> {
  const prompts = await readPrompts();
  const newPrompt: UserPrompt = {
    id: Date.now().toString() + Math.random().toString(36).substring(2, 7),
    createdAt: new Date().toISOString(),
    text,
    executed: false,
  };
  prompts.push(newPrompt);
  await writePrompts(prompts);
  return newPrompt;
}

export async function updatePrompt(id: string, text: string): Promise<UserPrompt | null> {
  const prompts = await readPrompts();
  const idx = prompts.findIndex(p => p.id === id);
  if (idx === -1) return null;
  if (prompts[idx].executed) return null; // Cannot edit executed prompts
  prompts[idx].text = text;
  await writePrompts(prompts);
  return prompts[idx];
}

export async function deletePrompt(id: string): Promise<boolean> {
  const prompts = await readPrompts();
  const idx = prompts.findIndex(p => p.id === id);
  if (idx === -1) return false;
  if (prompts[idx].executed) return false; // Cannot delete executed prompts
  prompts.splice(idx, 1);
  await writePrompts(prompts);
  return true;
}

export async function getUnexecutedPrompts(): Promise<UserPrompt[]> {
  const prompts = await readPrompts();
  return prompts.filter(p => !p.executed);
}

export async function markPromptsExecuted(ids: string[]): Promise<void> {
  const prompts = await readPrompts();
  const now = new Date().toISOString();
  for (const p of prompts) {
    if (ids.includes(p.id) && !p.executed) {
      p.executed = true;
      p.executedAt = now;
    }
  }
  await writePrompts(prompts);
}
