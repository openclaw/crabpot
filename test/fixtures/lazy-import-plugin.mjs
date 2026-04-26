export async function register(api) {
  api.registerHook("before_tool_call", async (payload) => payload);
  api.registerTool("lazy_import_probe", {
    description: "fixture tool for import-loop profiling",
    inputSchema: {
      type: "object",
      properties: {
        value: { type: "string" },
      },
    },
    execute: async (input) => input,
  });
}
