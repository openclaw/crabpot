import { loadPluginInspector } from "./plugin-inspector-source.mjs";

const pluginInspector = await loadPluginInspector();

export const createCaptureApi = pluginInspector.createCaptureApi;
