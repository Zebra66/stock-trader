import { describe, expect, test } from 'bun:test';

import { getModeButtonsFunctionSource } from './dashboard_client_script';

describe('getModeButtonsFunctionSource', () => {
  test('keeps the onclick mode argument properly escaped in delivered HTML', () => {
    const source = getModeButtonsFunctionSource();

    expect(source).toContain(`onclick="selectMode(\\'`);
    expect(source).not.toContain(`onclick="selectMode(''+mode.mode+'')"`);
  });
});

describe('Prompts Template Escaping', () => {
  test('keeps the onclick prompt arguments properly escaped in server.ts template', async () => {
    const serverCode = await Bun.file('src/web/server.ts').text();

    // Verify it contains the escaped version (three backslashes + quote)
    expect(serverCode).toContain("savePrompt(\\\\\\\x27");
    expect(serverCode).toContain("deletePrompt(\\\\\\\x27");
    expect(serverCode).toContain("editPrompt(\\\\\\\x27");

    // Verify it does not contain the broken, unescaped version that was parsed as double single quotes ('')
    expect(serverCode).not.toContain("savePrompt(\x27\x27");
    expect(serverCode).not.toContain("deletePrompt(\x27\x27");
    expect(serverCode).not.toContain("editPrompt(\x27\x27");
  });
});
