import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { failureDiagnostic } from "../scripts/resource-failure-diagnostic.mjs";

const sensitive = "unlabelled-fixture-sensitive-value";
const errorText = `Expected ${sensitive} /private/fixture token=fixture-token\nstack: fixture-stack`;

test("execution stages cannot borrow trusted validation prefixes or arbitrary error metadata", () => {
  for (const stage of ["run", "prepare", "workload", "measurement", "cleanup", "host-call", "host-prerequisite", "cli", "receipt-write"]) {
    const diagnostic = failureDiagnostic(Object.assign(new TypeError(errorText), { code: "EIO" }), stage);
    assert.equal(diagnostic.type, "TypeError");
    assert.equal(diagnostic.code, "EIO");
    assert.ok(!JSON.stringify(diagnostic).includes(sensitive));
    assert.ok(!JSON.stringify(diagnostic).includes("fixture-token"));
  }
  const diagnostic = failureDiagnostic({ name: sensitive, code: sensitive, message: errorText, cause: sensitive, stack: sensitive }, "prepare");
  assert.equal(diagnostic.type, "Error");
  assert.equal(diagnostic.code, "UNKNOWN");
  assert.ok(!JSON.stringify(diagnostic).includes(sensitive));
});

// Real child CLI, synthetic host modules only: no Gateway, plugin, credentials
// or network. The host failure must survive in the receipt but never stderr.
function runCli(t, fault) {
  const root = mkdtempSync(path.join(os.tmpdir(), "resource-diagnostic-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (file, bytes) => {
    const target = path.join(root, file);
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(target, bytes);
  };
  const payload = {
    plugins: [{ declaredSurfaces: {}, distribution: "core", id: "workboard", manifestPath: "extensions/workboard/openclaw.plugin.json", package: null, path: "extensions/workboard" }],
    schemaVersion: 1, scope: "source-manifests", source: { commit: "a".repeat(40), kind: "git-tree", tree: "b".repeat(40) },
  };
  put("inventory.json", JSON.stringify({ ...payload, sha256: createHash("sha256").update(JSON.stringify(payload)).digest("hex") }));
  if (fault === "exception" || fault === "host-result") {
    put("scripts/e2e/kitchen-sink-rpc-walk.mts", fault === "exception"
      ? `export function resolveResourceGatewayRuntime() { throw Object.assign(new TypeError(${JSON.stringify(errorText)}), { code: "EIO" }); }`
      : `export function resolveResourceGatewayRuntime() { return { buildInfo: { commit: ${JSON.stringify(payload.source.commit)} } }; }
export async function runResourceGatewayCase({ result }) { result.status = "failed"; result.error = ${JSON.stringify(`TypeError EIO ${errorText}`)}; }`);
    for (const file of ["scripts/e2e/lib/kitchen-sink-resources.mts", "scripts/lib/gateway-bench-profile.ts", "scripts/lib/gateway-bench-profile-preload.ts"]) put(file, "export {};\n");
  }
  const result = spawnSync(process.execPath, [fileURLToPath(new URL("../scripts/run-resource-workload.mjs", import.meta.url)),
    "--scenario", "workboard-card-crud-v1", "--plugin-inventory", fault === "input" ? `${sensitive}.json` : "inventory.json",
    "--out", "receipt.json", "--execute"], { cwd: root, encoding: "utf8", timeout: 5000 });
  assert.equal(result.error, undefined);
  assert.equal(result.signal, null);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /\[resource-workload\] FAILED \(exit 1\)\n$/u);
  for (const value of [sensitive, root, "/private/fixture", "fixture-token", "fixture-stack"]) assert.ok(!result.stderr.includes(value), value);
  const lines = result.stderr.split("\n").filter((line) => line.startsWith("[resource-workload] {"));
  assert.equal(lines.length, 1, result.stderr);
  return { diagnostic: JSON.parse(lines[0].slice("[resource-workload] ".length)),
    report: fault === "input" ? undefined : JSON.parse(readFileSync(path.join(root, "receipt.json"), "utf8")) };
}

test("standalone CLI explains an actual missing host module with its observed Node code", (t) => {
  const { diagnostic, report } = runCli(t, "module");
  assert.equal(diagnostic.stage, "host-prerequisite");
  assert.equal(diagnostic.type, "Error");
  assert.equal(diagnostic.code, "ERR_MODULE_NOT_FOUND");
  assert.equal(report.status, "blocked");
  assert.match(report.error, /Cannot find module/u);
});

test("standalone CLI keeps actionable metadata while omitting a hostile host exception", (t) => {
  const { diagnostic, report } = runCli(t, "exception");
  assert.equal(diagnostic.stage, "host-prerequisite");
  assert.equal(diagnostic.type, "TypeError");
  assert.equal(diagnostic.code, "EIO");
  assert.equal(report.error, errorText);
});

test("standalone CLI does not reconstruct error metadata from a flattened host receipt", (t) => {
  const { diagnostic, report } = runCli(t, "host-result");
  assert.deepEqual(diagnostic, { stage: "host-case", type: "UNKNOWN", code: "UNKNOWN", message: "Host case failed; inspect retained receipt" });
  assert.match(report.error, /TypeError EIO/u);
  assert.equal(report.cases[0].adapterCleanup.status, "complete");
});

test("standalone CLI thrown input errors also omit paths and retain a safe code", (t) => {
  const { diagnostic } = runCli(t, "input");
  assert.equal(diagnostic.stage, "cli");
  assert.equal(diagnostic.code, "ENOENT");
});
