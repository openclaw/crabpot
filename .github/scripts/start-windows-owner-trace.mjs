// Temporary PR405 diagnostic. Remove after the cold startup cause is resolved.
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

assert.equal(process.platform, "win32");
const identity = `${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT}`;
assert.match(identity, /^\d+-\d+$/);
const session = `crabpot-cold-owner-${identity}`;
const root = path.join(process.env.RUNNER_TEMP, session);
mkdirSync(root);
const receipt = { session, identity, created: false, started: false };
const save = () => writeFileSync(path.join(root, "ownership.json"), JSON.stringify(receipt));
save();
function native(command, args) {
  const result = spawnSync(command, args, { encoding: "utf8", timeout: 15_000, maxBuffer: 1024 * 1024 });
  assert.ifError(result.error);
  assert.equal(result.status, 0, `${command} failed: ${result.status}`);
  return result.stdout;
}

// Native executables only: resolving PowerShell cmdlets here would warm the target.
for (const [provider, keyword, mask] of [
  ["Microsoft-Windows-Kernel-Process", "WINEVENT_KEYWORD_PROCESS", 0x10n],
  ["Microsoft-Windows-DotNETRuntime", "LoaderKeyword", 0x8n],
]) {
  const metadata = native("logman.exe", ["query", "providers", provider]);
  const row = metadata.split(/\r?\n/).find((line) => line.trim().endsWith(keyword));
  const value = row?.match(/0x[0-9a-f]+/i)?.[0];
  assert.ok(value && BigInt(value) === mask, `unexpected installed ${keyword}`);
  writeFileSync(path.join(root, `${provider}.txt`), metadata);
  writeFileSync(path.join(root, `${provider}.xml`), native("wevtutil.exe", ["gp", provider, "/ge:true", "/f:xml"]));
}
writeFileSync(path.join(root, "providers.txt"), [
  '"Microsoft-Windows-Kernel-Process" 0x10 4',
  '"Microsoft-Windows-DotNETRuntime" 0x8 5',
].join("\r\n"));
native("logman.exe", ["create", "trace", session, "-pf", path.join(root, "providers.txt"),
  "-o", path.join(root, "trace.etl"), "-f", "bincirc", "-max", "16", "-rf", "00:03:00",
  "-ct", "perf", "-bs", "64", "-nb", "2", "16"]);
receipt.created = true;
save();
native("logman.exe", ["start", session]);
receipt.started = true;
receipt.startedAt = new Date().toISOString();
save();
console.log("WINDOWS_OWNER_TRACE_STARTED", JSON.stringify({ session, startedAt: receipt.startedAt,
  observationSeconds: 180, maxMiB: 16 }));
