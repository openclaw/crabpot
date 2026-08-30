import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { chmodSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { resolveOpenClawTrack } from "../scripts/resolve-openclaw-track.mjs";

const validSha = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

test("track resolver fetch returns instead of hanging when the npm registry stalls", { timeout: 5_000 }, async (t) => {
  const restore = stubFetch(hangFetch);
  t.after(restore);

  const startedAt = Date.now();
  await withEnv({ CRABPOT_FETCH_TIMEOUT_MS: "250" }, async () => {
    await assert.rejects(() => resolveOpenClawTrack("latest"), /timed out after 250ms/);
  });
  assert.ok(Date.now() - startedAt < 4_000, "stalled npm fetch must return");
});

test("track resolver fetch returns instead of hanging when raw.githubusercontent.com stalls", { timeout: 5_000 }, async (t) => {
  const gitDir = mkdtempSync(path.join(os.tmpdir(), "crabpot-track-git-ok-"));
  t.after(() => rmSync(gitDir, { force: true, recursive: true }));
  writeGitLsRemote(gitDir, validSha);
  const restore = stubFetch(hangFetch);
  t.after(restore);

  const startedAt = Date.now();
  await withEnv(
    {
      CRABPOT_FETCH_TIMEOUT_MS: "250",
      PATH: `${gitDir}${path.delimiter}${process.env.PATH}`,
    },
    async () => {
      await assert.rejects(() => resolveOpenClawTrack("development"), /timed out after 250ms/);
    },
  );
  assert.ok(Date.now() - startedAt < 4_000, "stalled GitHub raw fetch must return");
});

test("track resolver git ls-remote timeout is not reported as a missing tag", { timeout: 5_000 }, async (t) => {
  const hangDir = mkdtempSync(path.join(os.tmpdir(), "crabpot-track-git-hang-"));
  t.after(() => rmSync(hangDir, { force: true, recursive: true }));
  writeHangCommand(hangDir, process.platform === "win32" ? "git.cmd" : "git");
  const restore = stubFetch(async () => ({
    ok: true,
    json: async () => ({ "dist-tags": { latest: "2026.8.1" } }),
  }));
  t.after(restore);

  const startedAt = Date.now();
  await withEnv(
    {
      CRABPOT_GIT_TIMEOUT_MS: "250",
      PATH: `${hangDir}${path.delimiter}${process.env.PATH}`,
    },
    async () => {
      await assert.rejects(() => resolveOpenClawTrack("latest"), /timed out after 250ms/);
    },
  );
  assert.ok(Date.now() - startedAt < 4_000, "hung git ls-remote must return");
});

test("resolve-openclaw-track returns instead of blocking when git ls-remote hangs", (t) => {
  const hangDir = mkdtempSync(path.join(os.tmpdir(), "crabpot-track-cli-hang-"));
  t.after(() => rmSync(hangDir, { force: true, recursive: true }));
  writeHangCommand(hangDir, process.platform === "win32" ? "git.cmd" : "git");

  const startedAt = Date.now();
  const result = spawnSync(process.execPath, ["scripts/resolve-openclaw-track.mjs", "--track", "development"], {
    cwd: process.cwd(),
    encoding: "utf8",
    env: {
      ...process.env,
      CRABPOT_GIT_TIMEOUT_MS: "250",
      PATH: `${hangDir}${path.delimiter}${process.env.PATH}`,
    },
    timeout: 5_000,
  });

  assert.notEqual(result.error?.code, "ETIMEDOUT", result.error?.message);
  assert.notEqual(result.status, 0);
  assert.match(`${result.stderr}\n${result.stdout}`, /timed out after 250ms/);
  assert.ok(Date.now() - startedAt < 4_000, "hung git ls-remote must return");
});

function stubFetch(implementation) {
  const original = globalThis.fetch;
  globalThis.fetch = implementation;
  return () => {
    globalThis.fetch = original;
  };
}

function hangFetch(_url, options = {}) {
  return new Promise((_resolve, reject) => {
    const signal = options.signal;
    if (!signal) {
      return;
    }
    const abort = () => {
      const error =
        signal.reason instanceof Error
          ? signal.reason
          : Object.assign(new Error("The operation was aborted"), { name: "AbortError" });
      reject(error);
    };
    if (signal.aborted) {
      abort();
      return;
    }
    signal.addEventListener("abort", abort, { once: true });
  });
}

async function withEnv(values, callback) {
  const previous = {};
  for (const key of Object.keys(values)) {
    previous[key] = process.env[key];
    process.env[key] = values[key];
  }
  try {
    return await callback();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  }
}

function writeGitLsRemote(dir, sha) {
  const file = path.join(dir, process.platform === "win32" ? "git.cmd" : "git");
  if (process.platform === "win32") {
    writeFileSync(file, `@echo off\r\necho ${sha}	refs/heads/main\r\n`);
    return file;
  }

  writeFileSync(file, `#!/bin/sh\nprintf '%s\\t%s\\n' '${sha}' 'refs/heads/main'\n`);
  chmodSync(file, 0o755);
  return file;
}

function writeHangCommand(dir, name) {
  const file = path.join(dir, name);
  if (process.platform === "win32") {
    writeFileSync(file, `@echo off\r\n"${process.execPath}" -e "setTimeout(() => {}, 30000)"\r\n`);
    return file;
  }

  writeFileSync(file, `#!/bin/sh\nexec "${process.execPath}" -e 'setTimeout(() => {}, 30000)'\n`);
  chmodSync(file, 0o755);
  return file;
}
