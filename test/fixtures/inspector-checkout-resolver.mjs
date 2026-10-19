import { parentPort, workerData } from "node:worker_threads";

// Advance only this waiter's wall clock; the production deadline stays 120s.
if (workerData.expired) {
  let now = Date.now();
  Date.now = () => (now += 120_001);
}
const wait = Atomics.wait;
Atomics.wait = (...args) => {
  parentPort.postMessage({ type: "waiting" });
  return wait(...args);
};
try {
  const { resolvePluginInspectorCliPath } = await import(workerData.source);
  const result = resolvePluginInspectorCliPath();
  parentPort.postMessage({ type: "result", ok: true, result });
} catch (error) {
  parentPort.postMessage({ type: "result", ok: false, error: {
    name: error.name, message: error.message, code: error.code, cleanupError: error.cleanupError,
    errors: error.errors?.map((cause) => ({ message: cause.message, code: cause.code })),
    cause: error.cause && { message: error.cause.message, code: error.cause.code,
      startupTrace: error.cause.startupTrace },
  } });
}
