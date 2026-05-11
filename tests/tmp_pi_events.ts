import { createAgentSession } from '@mariozechner/pi-coding-agent';
import { getModel } from '@mariozechner/pi-ai';

async function main() {
  const model = getModel('google', 'gemini-3.1-pro-preview');
  const { session } = await createAgentSession({ model });
  
  session.subscribe((event) => {
    console.log('[Event]', event.type);
    if (event.type === 'message_update') {
      console.dir(event.assistantMessageEvent, { depth: null });
    }
  });

  await session.prompt("Say 'Hello World'");
}
main();
