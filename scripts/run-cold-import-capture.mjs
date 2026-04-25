#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createCaptureApi } from "./capture-shim.mjs";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const entrypoint = process.argv[2];
  if (!entrypoint) {
    throw new Error("usage: run-cold-import-capture.mjs <entrypoint>");
  }
  if (process.env.CRABPOT_EXECUTE_ISOLATED !== "1") {
    throw new Error("cold import execution requires CRABPOT_EXECUTE_ISOLATED=1");
  }

  const result = await captureEntrypoint(entrypoint);
  console.log(JSON.stringify(result, null, 2));
}

export async function captureEntrypoint(entrypoint, options = {}) {
  const resolvedEntrypoint = path.resolve(options.cwd ?? process.cwd(), entrypoint);
  const imported = await import(pathToFileURL(resolvedEntrypoint).href);
  const api = createCaptureApi(options.apiOptions);
  const register = resolveRegister(imported);

  if (!register) {
    return {
      entrypoint: resolvedEntrypoint,
      status: "no-register-export",
      captured: [],
    };
  }

  await register(api);
  const result = {
    entrypoint: resolvedEntrypoint,
    status: "captured",
    captured: api.getCapturedContracts(),
  };
  if (options.apiOptions?.retainHandlers === true) {
    result.retained = api.getRetainedContracts();
  }
  return result;
}

function resolveRegister(imported) {
  if (typeof imported.register === "function") {
    return imported.register;
  }
  if (typeof imported.default?.register === "function") {
    return (api) => imported.default.register(api);
  }
  if (typeof imported.default === "function") {
    return imported.default;
  }
  return null;
}
