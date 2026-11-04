import assert from "node:assert/strict";
import { createRequire } from "node:module";
import path from "node:path";
import { setImmediate } from "node:timers/promises";
import { pathToFileURL } from "node:url";

// Resolve the public package export in both source and packed installations.
// Importing src/resource-profile.js directly would hide a broken exports map.
const require = createRequire(path.join(process.argv[2], "package.json"));
const { captureProcessResources, diffProcessResources } = await import(pathToFileURL(
  require.resolve("@openclaw/plugin-inspector/resource-profile"),
).href);
const capture = () => JSON.parse(JSON.stringify(captureProcessResources()));
await setImmediate();
const before = capture();
const allocation = Buffer.alloc(1024 * 1024, 1);
const timer = setTimeout(() => {}, 60_000);
let active;
try {
  active = capture();
} finally {
  clearTimeout(timer);
}
await setImmediate();
const disposed = capture();
const allocationDelta = diffProcessResources(before, active);
const disposalDelta = diffProcessResources(active, disposed);
assert.equal(allocation[allocation.length - 1], 1);
assert.equal(before.pid, process.pid);
assert.equal(before.threadId, 0);
for (const sample of [before, active, disposed]) {
  for (const value of Object.values(sample.cpuMicros)) assert.ok(Number.isFinite(value) && value >= 0);
  for (const value of Object.values(sample.memoryBytes)) assert.ok(Number.isFinite(value) && value >= 0);
}
assert.ok(allocationDelta.wallMs >= 0);
assert.ok(allocationDelta.cpuMs.total >= 0);
assert.ok(allocationDelta.memoryDeltaBytes.arrayBuffers >= allocation.length);
assert.equal(allocationDelta.activeResourceDelta.Timeout, 1);
assert.equal(disposalDelta.activeResourceDelta.Timeout, -1);
process.stdout.write(`${JSON.stringify({
  coverage: "collector-contract-only",
  runtime: { node: process.version, platform: process.platform, arch: process.arch },
  scope: { cpu: "process", rss: "process", otherMemoryAndResources: "thread" },
  samples: { before, active, disposed },
  deltas: { allocation: allocationDelta, disposal: disposalDelta },
})}\n`);
