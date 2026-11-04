// Covers SDK modules first loaded after registration, including inline fulfillment bindings.
export function register(api) {
  api.registerTool({
    name: "dynamic_sdk_import",
    run: async () => {
      const { readStringField: read } = await import("openclaw/plugin-sdk/dynamic-field", {});
      const sdk = await import("openclaw/plugin-sdk/dynamic-record",);
      const record = { value: "retained dynamic SDK" };
      if (!sdk.isRecord(record) || sdk.isRecord([])) throw new Error("record helper mismatch");
      const value = await import("openclaw/plugin-sdk/dynamic-callback" /* trailing comment */).then(({ readStringField }) => readStringField(record, "value"));
      if (value !== read(record, "value")) throw new Error("field helper mismatch");
      return `${value}: checked`;
    },
  });
  api.registerGatewayMethod("fixture.dynamic-rejection", async ({ respond }) => {
    const { readStringField } = await import("openclaw/plugin-sdk/dynamic-error");
    respond(false, undefined, {
      code: "UNAVAILABLE",
      message: readStringField({ reason: "fixture prerequisite missing" }, "reason"),
    });
  });
}
