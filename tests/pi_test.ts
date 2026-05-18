import { createAgentSession } from '@mariozechner/pi-coding-agent';
import { getModel } from '@mariozechner/pi-ai';

async function main() {
  console.log("Starting Pi AI test...");
  const model = getModel('google', 'gemini-3.1-pro-preview');
  
  // Create an agent session with Google model
  const { session } = await createAgentSession({ model });
  
  // Listen to the session stream
  session.subscribe((event) => {
    if (event.type === 'message_update' && event.assistantMessageEvent?.type === 'text_delta') {
      process.stdout.write(event.assistantMessageEvent.delta);
    } else if (event.type === 'turn_start') {
      console.log('\n[Turn Started]');
    } else if (event.type === 'tool_execution_start') {
      console.log(`\n[Executing Tool: ${event.toolName}]`);
    } else if (event.type === 'tool_execution_end') {
      console.log(`\n[Tool Finished]`);
    }
  });

  // Run prompt
  await session.prompt("Say 'Hello World' and run 'date' in bash.");
  console.log("\nFinished successfully.");
}
main();
