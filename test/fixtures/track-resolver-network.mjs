import { pathToFileURL } from "node:url";

const upstreamFetch = globalThis.fetch;
const routes = new Map([
  ["https://registry.npmjs.org/openclaw", "/npm"],
  ["https://raw.githubusercontent.com/openclaw/openclaw/main/package.json", "/package"],
]);

// Redirect transport only: native fetch still owns headers, streaming JSON, and
// the production AbortSignal. Unexpected URLs must never reach the public network.
globalThis.fetch = (url, options) => {
  const pathname = routes.get(String(url));
  if (!pathname) throw new Error(`unexpected fixture fetch URL: ${url}`);
  if (process.env.CRABPOT_TEST_FETCH_ABORT === pathname) {
    throw new DOMException("fixture upstream aborted independently", "AbortError");
  }
  return upstreamFetch(new URL(pathname, process.env.CRABPOT_TEST_NETWORK_BASE), options);
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { MissingOpenClawTagError, resolveOpenClawTrack } = await import("../../scripts/resolve-openclaw-track.mjs");
  let asynchronous = false;
  try {
    const pending = resolveOpenClawTrack(process.argv[2]);
    asynchronous = pending instanceof Promise;
    const result = await pending;
    console.log(JSON.stringify({ asynchronous, result }));
  } catch (error) {
    console.log(JSON.stringify({
      asynchronous,
      missingTag: error instanceof MissingOpenClawTagError,
      error: { name: error.name, code: error.code, message: error.message, version: error.version },
    }));
    process.exitCode = 1;
  }
}
