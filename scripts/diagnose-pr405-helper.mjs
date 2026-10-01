import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { runOwnedCommand } from "./owned-command.mjs";

if (process.platform !== "win32" || process.version !== "v24.21.0" || !process.env.RUNNER_TEMP) {
  throw new Error("This one-shot diagnostic requires hosted Windows and Node 24.21.0");
}
const root = mkdtempSync(path.join(process.env.RUNNER_TEMP, "pr405-helper-"));
const checkout = process.cwd();
const reportPath = path.join(process.env.RUNNER_TEMP, "pr405-helper.json");
const sanitize = (value) => String(value ?? "").replaceAll(root, "<owned-directory>")
  .replaceAll(checkout, "<checkout>").slice(0, 512);
const errorFields = (error) => error ? {
  code: sanitize(error.code), message: sanitize(error.message),
  ...(error.startupTrace ? { startupTrace: error.startupTrace } : {}),
} : null;
const report = {
  source: process.env.GITHUB_SHA,
  base: "7a23175f425c77f5a82ca997484a4e7004f8d28c",
  node: process.version, platform: process.platform, arch: process.arch,
  command: "git init <owned-directory>", commandTimeoutMs: 120_000,
  startupTimeoutMs: 10_000, cleanupTimeoutMs: 2_000,
  timestampSemantics: "UTC emission and parent observation times; not CPU attribution",
};
const started = performance.now();
writeFileSync(reportPath, JSON.stringify({ ...report, completed: false }) + "\n");
let result;
try {
  // First and only owned command. Do not import Inspector, prewarm a helper,
  // install dependencies, or retry after any result.
  result = runOwnedCommand("git", ["init", root], {
    cwd: checkout, encoding: "utf8", stdio: "pipe", timeout: 120_000,
  });
  Object.assign(report, {
    elapsedMs: Math.round(performance.now() - started),
    completed: true, startupTrace: result.startupTrace,
    status: result.status, signal: result.signal,
    error: errorFields(result.error), cleanupError: errorFields(result.cleanupError),
  });
  process.exitCode = result.error || result.cleanupError || result.status !== 0 ? 1 : 0;
} catch (error) {
  report.diagnosticError = errorFields(error);
  process.exitCode = 1;
} finally {
  // Uncertain closure retains the directory. Removal is never evidence that
  // the native Job or helper is extinct.
  if (result && !result.cleanupError) {
    try { rmSync(root, { recursive: true, force: true }); report.directoryRemoved = true; }
    catch (error) { report.directoryCleanupError = errorFields(error); process.exitCode = 1; }
  } else {
    report.directoryRemoved = false;
  }
  const text = JSON.stringify(report);
  console.log(text);
  try { writeFileSync(reportPath, text + "\n"); }
  catch (error) { console.error("diagnostic receipt write failed: " + sanitize(error.code)); process.exitCode = 1; }
}
