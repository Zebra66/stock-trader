export const systemTools = {
  readFile: async (path: string): Promise<string> => {
    try {
      return await Bun.file(path).text();
    } catch (e: unknown) {
      return `Error reading file ${path}: ${(e as Error).message}`;
    }
  },

  writeFile: async (path: string, content: string): Promise<string> => {
    try {
      await Bun.write(path, content);
      return `Successfully wrote to ${path}`;
    } catch (e: unknown) {
      return `Error writing to file ${path}: ${(e as Error).message}`;
    }
  },

  executeBash: async (command: string): Promise<string> => {
    try {
      const proc = Bun.spawn(['sh', '-c', command], {
        stdout: 'pipe',
        stderr: 'pipe',
      });
      const [stdout, stderr] = await Promise.all([
        new Response(proc.stdout).text(),
        new Response(proc.stderr).text(),
      ]);
      await proc.exited;
      return stderr ? `STDOUT:\n${stdout}\nSTDERR:\n${stderr}` : stdout;
    } catch (e: unknown) {
      return `Execution error: ${(e as Error).message}`;
    }
  },
};

// ── CLI ────────────────────────────────────────────────────────────────────────

const HELP = `
Usage: bun run src/tools/system.ts <command> [options]

Commands:
  read-file --path <PATH>
      Read and print the contents of a file.

  write-file --path <PATH> --content <TEXT>
      Write TEXT to a file (creates or overwrites).

Options:
  --help   Show this help message.

Examples:
  bun run src/tools/system.ts read-file --path memory/MEMORY.md
  bun run src/tools/system.ts write-file --path memory/todo.md --content "- [ ] Review positions"
`.trim();

function parseFlags(argv: string[]): Record<string, string> {
  const flags: Record<string, string> = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      const next = argv[i + 1];
      flags[key] = next && !next.startsWith('--') ? (i++, next) : 'true';
    }
  }
  return flags;
}

if (import.meta.main) {
  const [command, ...rest] = process.argv.slice(2);

  if (!command || command === '--help') {
    console.log(HELP);
    process.exit(0);
  }

  const flags = parseFlags(rest);
  let task: Promise<string>;

  switch (command) {
    case 'read-file': {
      if (!flags.path) { console.error('Error: --path is required'); process.exit(1); }
      task = systemTools.readFile(flags.path);
      break;
    }
    case 'write-file': {
      if (!flags.path)    { console.error('Error: --path is required');    process.exit(1); }
      if (!flags.content) { console.error('Error: --content is required'); process.exit(1); }
      task = systemTools.writeFile(flags.path, flags.content);
      break;
    }
    default:
      console.error(`Unknown command: "${command}"\n\n${HELP}`);
      process.exit(1);
  }

  task.then(output => console.log(output)).catch(e => {
    console.error((e as Error).message);
    process.exit(1);
  });
}
