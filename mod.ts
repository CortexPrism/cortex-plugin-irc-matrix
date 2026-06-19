// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const irc_join_channelTool: Tool = {
  definition: {
    name: 'irc_join_channel',
    description: 'Join IRC/Matrix channel',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[irc-matrix] irc_join_channel executed');
      return ok('irc_join_channel', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'irc_join_channel',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const irc_send_messageTool: Tool = {
  definition: {
    name: 'irc_send_message',
    description: 'Send message to channel',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[irc-matrix] irc_send_message executed');
      return ok('irc_send_message', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'irc_send_message',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const irc_triage_issuesTool: Tool = {
  definition: {
    name: 'irc_triage_issues',
    description: 'Triage GitHub issues from chat commands',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[irc-matrix] irc_triage_issues executed');
      return ok('irc_triage_issues', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'irc_triage_issues',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const irc_trigger_buildTool: Tool = {
  definition: {
    name: 'irc_trigger_build',
    description: 'Trigger CI build from chat',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[irc-matrix] irc_trigger_build executed');
      return ok('irc_trigger_build', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'irc_trigger_build',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-irc-matrix] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-irc-matrix] Unloading...');
}
export const tools: Tool[] = [
  irc_join_channelTool,
  irc_send_messageTool,
  irc_triage_issuesTool,
  irc_trigger_buildTool,
];
