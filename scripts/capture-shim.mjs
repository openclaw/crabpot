import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";

const pluginInspector = await loadPluginInspectorPublicApi();

export const createCaptureApi = pluginInspector.createCaptureApi;
