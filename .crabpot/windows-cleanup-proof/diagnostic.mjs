import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runOwnedCommand } from "../../scripts/owned-command.mjs";
import { sanitizeReceipt } from "./receipt-scrub.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const crabpot = path.resolve(here, "../..");
const [phase, hostArgument] = process.argv.slice(2);
assert.ok(["original", "instrumented"].includes(phase));
assert.ok(hostArgument, "exact OpenClaw source root is required");
const openclaw = fs.realpathSync.native(hostArgument);
const inputs = JSON.parse(fs.readFileSync(path.join(here, "inputs.json"), "utf8"));
assert.equal(process.platform, inputs.platform);
assert.equal(process.arch, inputs.arch);
assert.equal(process.version, inputs.node);
const hash = (value) => createHash("sha256").update(value).digest("hex");
const capturePath = path.join(crabpot, "scripts/run-openclaw-lifecycle-capture.mjs");
const tokenPath = path.join(openclaw, "src/infra/sqlite-staging-token.ts");
for (const [name, expected] of Object.entries(inputs.files)) {
  const [owner, ...parts] = name.split("/");
  assert.equal(hash(fs.readFileSync(path.join(owner === "crabpot" ? crabpot : openclaw, ...parts))), expected, name);
}
const receiptPath = path.join(here, `${phase}-receipt.json`);
assert.equal(fs.existsSync(receiptPath), false, "this phase already ran; no automatic retry");
if (phase === "instrumented") {
  const previous = JSON.parse(fs.readFileSync(path.join(here, "original-receipt.json"), "utf8"));
  assert.equal(previous.sameCleanupEperm, true);
  assert.equal(previous.custodyConfirmed, true);
  assert.equal(previous.sourceRestored, true);
  assert.equal(previous.controllerError, undefined);
  assert.ok(previous.postExit.length > 0 && previous.postExit.every((entry) => entry.removed === true));
}
const originals = new Map([[capturePath, fs.readFileSync(capturePath)], [tokenPath, fs.readFileSync(tokenPath)]]);
function replaceOnce(text, from, to) {
  assert.equal(text.split(from).length, 2, `unexpected source preimage: ${from.slice(0, 70)}`);
  return text.replace(from, to);
}
function instrumentCapture(source) {
  let text = replaceOnce(source, 'import { writeJsonResult } from "./json-output.mjs";',
    'import { writeJsonResult } from "./json-output.mjs";\nimport { record, errorData, setRoots, snapshot } from "../.crabpot/windows-cleanup-proof/observer.mjs";');
  text = replaceOnce(text, '  const wrapperPath = path.join(pluginRoot, "index.mjs");',
    '  setRoots(pluginRoot, stateRoot);\n  const wrapperPath = path.join(pluginRoot, "index.mjs");');
  text = replaceOnce(text, '    return {\n      status: captured.length > 0 ? "captured" : "failed",',
    '    const captureResult = {\n      status: captured.length > 0 ? "captured" : "failed",');
  text = replaceOnce(text, '      ...(plugin?.error ? { error: plugin.error } : {}),\n    };\n  } finally {',
    '      ...(plugin?.error ? { error: plugin.error } : {}),\n    };\n    record("primary-result", { status: captureResult.status, capturedCount: captured.length, lifecycle: captureResult.openClawLifecycle });\n    return captureResult;\n  } catch (error) {\n    record("primary-error", { error: errorData(error) });\n    throw error;\n  } finally {');
  return replaceOnce(text, '    rmSync(pluginRoot, { recursive: true, force: true });\n    rmSync(stateRoot, { recursive: true, force: true });',
    '    snapshot("before-cleanup");\n    try {\n      rmSync(pluginRoot, { recursive: true, force: true });\n      rmSync(stateRoot, { recursive: true, force: true });\n      record("cleanup-success");\n    } catch (error) {\n      record("cleanup-error", { error: errorData(error) });\n      snapshot("after-cleanup-failure");\n      throw error;\n    }');
}
function instrumentToken(source) {
  let text = replaceOnce(source, '    db.close();\n    if (retiring) {',
    '    db.close();\n    globalThis[Symbol.for("crabpot.cleanupDiagnostic")]?.("token-closed", location, db.isOpen);\n    if (retiring) {');
  return replaceOnce(text, '    assertIdentity();\n    return token;',
    '    assertIdentity();\n    globalThis[Symbol.for("crabpot.cleanupDiagnostic")]?.("token-acquired", location, db.isOpen);\n    return token;');
}
const env = {};
for (const name of ["SYSTEMROOT", "WINDIR", "COMSPEC", "PATH", "PATHEXT", "TEMP", "TMP", "USERPROFILE", "HOME", "APPDATA", "LOCALAPPDATA"]) {
  const entry = Object.entries(process.env).find(([key]) => key.toUpperCase() === name);
  if (entry) env[entry[0]] = entry[1];
}
Object.assign(env, { NODE_OPTIONS: "--max-old-space-size=2048", CRABPOT_EXECUTE_ISOLATED: "1",
  CRABPOT_OPENCLAW_DIR: openclaw, CRABPOT_FIXTURE_ROOT: crabpot, CRABPOT_OPENCLAW_LABEL: inputs.openclaw });
const rootNames = new Map([[openclaw, "<openclaw>"], [crabpot, "<crabpot>"], [os.tmpdir(), "<temp>"]]);
for (const [root, label] of [...rootNames]) rootNames.set(fs.realpathSync.native(root), label);
for (const [name, value] of Object.entries(env)) {
  if (["SYSTEMROOT", "WINDIR", "TEMP", "TMP", "USERPROFILE", "HOME", "APPDATA", "LOCALAPPDATA"].includes(name.toUpperCase())) {
    rootNames.set(value, `<${name.toLowerCase()}>`);
  }
}
function disposeRoot(kind, root) {
  assert.equal(path.dirname(root).toLowerCase(), os.tmpdir().toLowerCase(), "root outside native temp directory");
  assert.match(path.basename(root), new RegExp(`^crabpot-openclaw-${kind}-[a-zA-Z0-9]+$`));
  rootNames.set(root, `<${kind}-root>`);
  const stat = fs.lstatSync(root, { throwIfNoEntry: false });
  assert.ok(!stat || (stat.isDirectory() && !stat.isSymbolicLink()), "root type changed");
  if (stat) rootNames.set(fs.realpathSync.native(root), `<${kind}-root>`);
  const observation = { kind, existed: Boolean(stat), children: stat ? fs.readdirSync(root).sort().slice(0, 128) : [] };
  try { fs.rmSync(root, { recursive: true, force: true }); observation.removed = !fs.existsSync(root); }
  catch (error) { observation.error = { code: error.code, message: error.message }; }
  return observation;
}
let receipt = { phase, source: inputs, node: process.version, platform: process.platform, arch: process.arch,
  custodyConfirmed: false, sameCleanupEperm: false, evidenceComplete: false, events: [], postExit: [] };
let commandAttempted = false;
try {
  if (phase === "instrumented") {
    fs.writeFileSync(capturePath, instrumentCapture(originals.get(capturePath).toString("utf8")));
    fs.writeFileSync(tokenPath, instrumentToken(originals.get(tokenPath).toString("utf8")));
  }
  const outputPath = path.join(here, `${phase}-capture.json`);
  assert.equal(fs.existsSync(outputPath), false, "stale capture output");
  commandAttempted = true;
  const result = runOwnedCommand(process.execPath, ["--import", "tsx", capturePath,
    path.join(crabpot, "test/fixtures/lazy-import-plugin.mjs"), "--output", outputPath],
  { cwd: openclaw, env, timeout: 30_000, maxBuffer: 1024 * 1024, encoding: "utf8" });
  const custodyConfirmed = !result.cleanupError && !result.error && Number.isInteger(result.pid) && result.pid > 0 &&
    Number.isInteger(result.status) && result.signal === null;
  const sameCleanupEperm = custodyConfirmed && result.status === 1 &&
    /Error: EPERM, Permission denied: .*crabpot-openclaw-state-/.test(result.stderr) &&
    /at rmSync/.test(result.stderr) && /at captureOpenClawLifecycle/.test(result.stderr);
  receipt = { phase, source: inputs, node: process.version, platform: process.platform, arch: process.arch,
    captureHash: hash(fs.readFileSync(capturePath)), tokenHash: hash(fs.readFileSync(tokenPath)),
    custodyConfirmed, sameCleanupEperm, result: { ...result, error: result.error && {
      code: result.error.code, message: result.error.message, startupTrace: result.error.startupTrace } }, events: [], postExit: [] };
  receipt.events = result.stderr.split(/\r?\n/).filter((line) => line.startsWith("CRABPOT_CLEANUP_DIAG "))
    .map((line) => JSON.parse(line.slice("CRABPOT_CLEANUP_DIAG ".length)));
  // Only the native owner's terminal receipt permits residual filesystem disposal.
  if (custodyConfirmed && sameCleanupEperm) {
    if (phase === "instrumented") {
      const rootEvent = receipt.events.find((event) => event.event === "roots");
      assert.ok(rootEvent && rootEvent.pid === result.pid, "missing root ownership record");
      receipt.postExit.push(disposeRoot("plugin", rootEvent.pluginRoot), disposeRoot("state", rootEvent.stateRoot));
    } else {
      const failedRoot = /Permission denied: '([^']*crabpot-openclaw-state-[a-zA-Z0-9]+)'/.exec(result.stderr)?.[1];
      assert.ok(failedRoot, "original failure did not identify its owned state root");
      receipt.postExit.push(disposeRoot("state", failedRoot));
    }
  }
  if (phase === "instrumented") {
    const events = receipt.events;
    const cleanupIndex = events.findIndex(({ event }) => event === "cleanup-error");
    const acquired = events.filter(({ event, isOpen }, index) => event === "token-acquired" && isOpen === true && index < cleanupIndex);
    const closed = events.filter(({ event, isOpen }, index) => event === "token-closed" && isOpen === false && index > cleanupIndex);
    const primary = events.find(({ event }) => event === "primary-result");
    receipt.primaryCaptureSucceeded = primary?.status === "captured" && primary.capturedCount === 2 &&
      primary.lifecycle?.status === "loaded" && [primary.lifecycle.importMs, primary.lifecycle.activationMs]
        .every((value) => Number.isFinite(value) && value >= 0);
    receipt.evidenceComplete = sameCleanupEperm && cleanupIndex >= 0 &&
      events.every((entry) => entry.pid === result.pid) &&
      events.some(({ event }) => event === "primary-result" || event === "primary-error") &&
      events.some(({ event }) => event === "before-cleanup") && events.some(({ event }) => event === "after-cleanup-failure") &&
      acquired.length > 0 && new Set(acquired.map((entry) => entry.path)).size === acquired.length &&
      acquired.every((entry) => closed.filter((item) => item.path === entry.path).length === 1) &&
      !events.some(({ event }) => ["observer-error", "observer-overflow"].includes(event)) &&
      !events.some((entry) => Object.values(entry.roots ?? {}).some((root) => root?.truncated === true)) &&
      !events.some((entry) => entry.roots?.stateRoot?.entries.some((item) => item.error)) &&
      receipt.postExit.length > 0 && receipt.postExit.every((entry) => entry.removed === true);
  }
} catch (error) {
  receipt.controllerError = { message: error.message, stack: error.stack };
  receipt.evidenceComplete = false;
} finally {
  if (phase === "original" || !commandAttempted || receipt.custodyConfirmed) {
    if (phase === "instrumented") for (const [file, bytes] of originals) fs.writeFileSync(file, bytes);
    for (const [file, bytes] of originals) assert.equal(hash(fs.readFileSync(file)), hash(bytes), `source restore failed: ${file}`);
    receipt.sourceRestored = true;
  } else receipt.sourceRestored = false;
  const bytes = `${JSON.stringify(sanitizeReceipt(receipt, rootNames), null, 2)}\n`;
  assert.ok(Buffer.byteLength(bytes) <= 960 * 1024, "receipt exceeds artifact cap");
  fs.writeFileSync(receiptPath, bytes, { flag: "wx" });
}
console.log(JSON.stringify({ phase, custodyConfirmed: receipt.custodyConfirmed,
  sameCleanupEperm: receipt.sameCleanupEperm, exitCode: receipt.result?.status,
  evidenceComplete: receipt.evidenceComplete, sourceRestored: receipt.sourceRestored }));
if (!receipt.custodyConfirmed || !receipt.sameCleanupEperm || receipt.controllerError ||
    !receipt.postExit.length || !receipt.postExit.every((entry) => entry.removed === true) ||
    (phase === "instrumented" && !receipt.evidenceComplete)) process.exitCode = 1;
