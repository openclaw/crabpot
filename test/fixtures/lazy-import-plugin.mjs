export function register(api) {
  api.registerTool({
    name: "lazy_import_probe",
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
