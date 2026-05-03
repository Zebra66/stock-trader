import * as fs from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export const systemTools = {
  readFile: async (path: string): Promise<string> => {
    try {
      return await fs.readFile(path, 'utf8');
    } catch (e: any) {
      return `Error reading file ${path}: ${e.message}`;
    }
  },
  
  writeFile: async (path: string, content: string): Promise<string> => {
    try {
      await fs.writeFile(path, content, 'utf8');
      return `Successfully wrote to ${path}`;
    } catch (e: any) {
      return `Error writing to file ${path}: ${e.message}`;
    }
  },

  executeBash: async (command: string): Promise<string> => {
    try {
      const { stdout, stderr } = await execAsync(command);
      return `STDOUT:\n${stdout}\nSTDERR:\n${stderr}`;
    } catch (e: any) {
      return `Execution Error:\n${e.message}\nSTDOUT:\n${e.stdout}\nSTDERR:\n${e.stderr}`;
    }
  }
};
