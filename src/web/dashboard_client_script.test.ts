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
  test('keeps the onclick prompt arguments properly escaped in index.html', async () => {
    const html = await Bun.file('src/web/index.html').text();

    expect(html).toContain("savePrompt(\\\\\\\x27\x27");
    expect(html).toContain("deletePrompt(\\\\\\\x27\x27");
    expect(html).toContain("editPrompt(\\\\\\\x27\x27");

    expect(html).not.toContain("savePrompt(\x27\x27");
    expect(html).not.toContain("deletePrompt(\x27\x27");
    expect(html).not.toContain("editPrompt(\x27\x27");
  });
});
