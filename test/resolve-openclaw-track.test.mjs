import assert from "node:assert/strict";
import { execFile as execFileCallback } from "node:child_process";
import { once } from "node:events";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const execFile = promisify(execFileCallback);
const resolverPath = fileURLToPath(new URL("../scripts/resolve-openclaw-track.mjs", import.meta.url));
const networkFixture = fileURLToPath(new URL("./fixtures/track-resolver-network.mjs", import.meta.url));
const gitUrl = "https://github.com/openclaw/openclaw.git";
const version = "2026.8.1";
const harnessTimeoutMs = 30_000;
const endpoints = [
  { track: "latest", pathname: "/npm", label: "could not read openclaw npm metadata" },
  { track: "development", pathname: "/package", label: "could not read OpenClaw package.json for main" },
];

for (const endpoint of endpoints) {
  for (const phase of ["headers", "body"]) {
    test(`${endpoint.track} fetch bounds ${phase} with one deadline through JSON consumption`, async (t) => {
      const budget = phase === "body" ? 2_000 : 350;
      const fixture = await createFixture(t, { stall: { pathname: endpoint.pathname, phase, budget } });
      const result = await invoke(fixture, endpoint.track, {
        CRABPOT_FETCH_TIMEOUT_MS: String(budget),
      });

      const request = fixture.requests.find(({ pathname }) => pathname === endpoint.pathname);
      assert.ok(request, "the real fetch must reach the fixture server");
      assert.equal(request.rescued, false, "the product must return before the fixture rescues stalled headers");
      assert.equal(request.bodyCompleted, false, "the product must return before the fixture sends the body tail");
      assert.equal(request.headersSent, phase === "body", "the body case must pass the headers boundary");
      assert.equal(result.status, 1, result.output);
      assert.equal(result.value.asynchronous, true);
      assert.equal(result.value.missingTag, false);
      assert.equal(result.value.error.message, `${endpoint.label}: timed out after ${budget}ms`);
    });
  }
}

test("fetch failures unrelated to the deadline keep their original identity", async (t) => {
  const fixture = await createFixture(t);
  for (const endpoint of endpoints) {
    await t.test(endpoint.track, async () => {
      const result = await invoke(fixture, endpoint.track, {
        CRABPOT_TEST_FETCH_ABORT: endpoint.pathname,
      });
      assert.equal(result.status, 1, result.output);
      assert.equal(result.value.missingTag, false);
      assert.equal(result.value.error.name, "AbortError");
      assert.equal(result.value.error.message, "fixture upstream aborted independently");
      assert.doesNotMatch(result.output, /timed out/);
    });
  }
});

test("HTTP and invalid JSON failures are not reclassified as timeouts or missing tags", async (t) => {
  for (const endpoint of endpoints) {
    for (const failure of ["http", "json"]) {
      await t.test(`${endpoint.track}: ${failure}`, async (t) => {
        const fixture = await createFixture(t, { fetchFailure: { pathname: endpoint.pathname, failure } });
        const result = await invoke(fixture, endpoint.track);
        assert.equal(result.status, 1, result.output);
        assert.equal(result.value.missingTag, false);
        assert.doesNotMatch(result.value.error.message, /timed out|tag .* is missing/);
        if (failure === "http") {
          assert.equal(result.value.error.message, `${endpoint.label}: 503`);
        } else {
          assert.equal(result.value.error.name, "SyntaxError");
        }
      });
    }
  }
});

test("both existing timeout budgets reject invalid values instead of truncating or defaulting", async (t) => {
  const fixture = await createFixture(t);
  const invalid = ["", "0", "-1", "1.5", "250ms", "1e3", "Infinity", "NaN", " 250", "250\n", "2147483648"];
  for (const name of ["CRABPOT_FETCH_TIMEOUT_MS", "CRABPOT_GIT_TIMEOUT_MS"]) {
    for (const value of invalid) {
      await t.test(`${name}=${JSON.stringify(value)}`, async () => {
        const result = await invoke(fixture, "latest", { [name]: value }, { cli: true, warn: true });
        assert.equal(result.status, 1, result.output);
        assert.match(result.output, new RegExp(`${name} must be a positive integer`));
        assert.doesNotMatch(result.output, /::warning::|MissingOpenClawTagError/);
      });
    }
  }
});

for (const track of ["latest", "development"]) {
  test(`${track} native Git timeout fails even with --warn-missing-tag`, async (t) => {
    const fixture = await createFixture(t, { gitFailure: "stall" });
    const result = await invoke(fixture, track, { CRABPOT_GIT_TIMEOUT_MS: "4000" }, { cli: true, warn: true });
    assertNativeGitRequest(fixture, result.output);
    assert.equal(fixture.requests.find(({ pathname }) => pathname === "/git/info/refs").rescued, false,
      "the product must return before the fixture rescues the stalled Git transport");
    assert.equal(result.status, 1, result.output);
    assert.match(result.output, /git ls-remote timed out after 4000ms/);
    assert.doesNotMatch(result.output, /::warning::|MissingOpenClawTagError|command cleanup was not confirmed/);
  });
}

test("native Git transport failure cannot turn into the missing-tag warning", async (t) => {
  const fixture = await createFixture(t, { gitFailure: "http" });
  const result = await invoke(fixture, "latest", {}, { cli: true, warn: true });
  assertNativeGitRequest(fixture, result.output);
  assert.equal(result.status, 1, result.output);
  assert.doesNotMatch(result.output, /::warning::|MissingOpenClawTagError|timed out/);
});

test("missing Git executable is an operational failure, not a missing tag", async (t) => {
  const fixture = await createFixture(t);
  const result = await invoke(fixture, "latest", { PATH: fixture.root });
  assert.equal(result.status, 1, result.output);
  assert.equal(result.value.error.code, "ENOENT");
  assert.equal(result.value.missingTag, false);
});

test("only two successful empty tag lookups produce MissingOpenClawTagError", async (t) => {
  const fixture = await createFixture(t, { tag: "absent" });
  const result = await invoke(fixture, "latest");
  assert.equal(result.status, 1, result.output);
  assert.equal(result.value.asynchronous, true);
  assert.equal(result.value.missingTag, true);
  assert.equal(result.value.error.name, "MissingOpenClawTagError");
  assert.equal(result.value.error.version, version);

  const warned = await invoke(fixture, "latest", {}, { cli: true, warn: true });
  assert.equal(warned.status, 0, warned.output);
  assert.match(warned.stdout, /::warning::OpenClaw npm latest resolves to 2026\.8\.1/);
  assert.equal(warned.stderr, "");
});

test("an empty development branch remains a resolution failure under --warn-missing-tag", async (t) => {
  const fixture = await createFixture(t, { emptyMain: true });
  const result = await invoke(fixture, "development");
  assert.equal(result.status, 1, result.output);
  assert.equal(result.value.missingTag, false);
  assert.match(result.value.error.message, /could not resolve .* refs\/heads\/main/);
  const cli = await invoke(fixture, "development", {}, { cli: true, warn: true });
  assert.equal(cli.status, 1, cli.output);
  assert.doesNotMatch(cli.output, /::warning::|MissingOpenClawTagError/);
  assert.equal(fixture.requests.length, 0, "a missing branch must fail before package metadata is fetched");
});

test("nonempty Git output outside the OpenClaw SHA-1 contract is not an absent ref", async (t) => {
  const fixture = await createFixture(t, { objectFormat: "sha256" });
  assert.equal(fixture.sha.length, 64, "native Git must actually produce the incompatible object ID");
  for (const track of ["latest", "development"]) {
    await t.test(track, async () => {
      const result = await invoke(fixture, track);
      assert.equal(result.status, 1, result.output);
      assert.equal(result.value.missingTag, false);
      assert.match(result.value.error.message, /could not resolve/);
      const cli = await invoke(fixture, track, {}, { cli: true, warn: true });
      assert.equal(cli.status, 1, cli.output);
      assert.doesNotMatch(cli.output, /::warning::|MissingOpenClawTagError/);
    });
  }
});

for (const { track, tag } of [
  { track: "latest", tag: "annotated" },
  { track: "beta", tag: "lightweight" },
  { track: "development", tag: "absent" },
]) {
  test(`${track} preserves successful native Git resolution (${tag})`, async (t) => {
    const fixture = await createFixture(t, { tag });
    if (tag === "annotated") {
      assert.notEqual(fixture.tagSha, fixture.sha, "the peeled commit must differ from the tag object");
    }
    const result = await invoke(fixture, track);
    assert.equal(result.status, 0, result.output);
    assert.equal(result.value.asynchronous, true);
    const development = track === "development";
    assert.deepEqual(result.value.result, {
      branch: track === "latest" ? "main" : `crab-${track}`,
      label: development
        ? `openclaw/openclaw@main (${version}, ${fixture.sha.slice(0, 12)})`
        : `openclaw@${track} (${version}, ${fixture.sha.slice(0, 12)})`,
      ref: development ? fixture.sha : `v${version}`,
      repository: "openclaw/openclaw",
      sha: fixture.sha,
      source: development ? "github-main" : `npm-${track}`,
      track,
      version,
    });
  });
}

function assertNativeGitRequest(fixture, output) {
  const request = fixture.requests.find(({ pathname }) => pathname === "/git/info/refs");
  assert.ok(request, `native Git must reach the HTTP transport before failure: ${output}`);
  assert.match(request.userAgent, /^git\//);
}

async function createFixture(t, options = {}) {
  const root = await mkdtemp(path.join(os.tmpdir(), "crabpot-track-resolver-"));
  const remote = path.join(root, "remote");
  const requests = [];
  const timers = new Set();
  let server;
  t.after(async () => {
    for (const timer of timers) clearTimeout(timer);
    if (server?.listening) {
      await new Promise((resolve) => {
        server.close(resolve);
        server.closeAllConnections();
      });
    }
    await rm(root, { recursive: true, force: true });
  });
  const env = Object.fromEntries(Object.entries(process.env).filter(([name]) => {
    const upper = name.toUpperCase();
    return !upper.startsWith("GIT_") && !upper.startsWith("CRABPOT_") &&
      upper !== "NODE_OPTIONS" && !upper.endsWith("_PROXY");
  }));
  const gitConfig = path.join(root, "gitconfig");
  await writeFile(gitConfig, "");
  Object.assign(env, {
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_CONFIG_GLOBAL: gitConfig,
    GIT_TERMINAL_PROMPT: "0",
    GIT_AUTHOR_NAME: "Crabpot Test",
    GIT_AUTHOR_EMAIL: "crabpot@example.invalid",
    GIT_COMMITTER_NAME: "Crabpot Test",
    GIT_COMMITTER_EMAIL: "crabpot@example.invalid",
    GIT_CONFIG_COUNT: "2",
    GIT_CONFIG_KEY_0: "core.hooksPath",
    GIT_CONFIG_VALUE_0: path.join(root, "no-hooks"),
    GIT_CONFIG_KEY_1: "commit.gpgSign",
    GIT_CONFIG_VALUE_1: "false",
  });
  const git = async (...args) => {
    const { stdout } = await execFile("git", args, { cwd: root, env, encoding: "utf8", timeout: harnessTimeoutMs });
    return stdout.trim();
  };
  await git("init", "--initial-branch=main", `--object-format=${options.objectFormat ?? "sha1"}`, remote);
  await writeFile(path.join(remote, "package.json"), `${JSON.stringify({ version })}\n`);
  await git("-C", remote, "add", "package.json");
  await git("-C", remote, "commit", "-m", "track fixture");
  const sha = await git("-C", remote, "rev-parse", "HEAD");
  let tagSha;
  if (options.tag !== "absent") {
    await git("-C", remote, "-c", "tag.gpgSign=false", "tag",
      ...(options.tag === "annotated" ? ["-a", "-m", "track fixture"] : []), `v${version}`);
    tagSha = await git("-C", remote, "rev-parse", `refs/tags/v${version}`);
  }
  if (options.emptyMain) await git("-C", remote, "update-ref", "-d", "refs/heads/main");

  // The CLI may block its event loop in the synchronous Git owner. Keep HTTP in
  // this parent process and await the child asynchronously so the fixture can respond.
  server = createServer((request, response) => {
    const pathname = new URL(request.url, "http://fixture.invalid").pathname;
    const record = {
      pathname, headersSent: false, rescued: false, bodyCompleted: false,
      userAgent: request.headers["user-agent"] ?? "",
    };
    requests.push(record);
    const later = (delay, callback) => {
      const timer = setTimeout(callback, delay);
      timers.add(timer);
      response.once("close", () => { clearTimeout(timer); timers.delete(timer); });
    };
    if (pathname.startsWith("/git/")) {
      const fail = () => { response.writeHead(503); response.end("fixture transport unavailable"); };
      if (options.gitFailure === "stall") later(8_000, () => { record.rescued = true; fail(); });
      else fail();
      return;
    }
    const json = JSON.stringify(pathname === "/npm" ? { "dist-tags": { latest: version, beta: version } } : { version });
    const sendHeaders = (status = 200) => {
      record.headersSent = true;
      response.writeHead(status, { "Content-Type": "application/json" });
    };
    if (options.fetchFailure?.pathname === pathname) {
      sendHeaders(options.fetchFailure.failure === "http" ? 503 : 200);
      response.end(options.fetchFailure.failure === "json" ? "not JSON" : "{}");
    } else if (options.stall?.pathname === pathname) {
      if (options.stall.phase === "headers") {
        later(8_000, () => {
          sendHeaders();
          response.end(json);
          record.rescued = true;
        });
      } else {
        // Headers consume half the budget. The tail arrives after the original
        // deadline but before a wrongly restarted full body deadline would expire.
        later(options.stall.budget / 2, () => { sendHeaders(); response.write(json.slice(0, 2)); });
        later(options.stall.budget * 1.25, () => {
          response.end(json.slice(2));
          record.bodyCompleted = true;
        });
      }
    } else {
      sendHeaders();
      response.end(json);
    }
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const base = `http://127.0.0.1:${server.address().port}`;
  const target = options.gitFailure ? `${base}/git` : pathToFileURL(remote).href;
  Object.assign(env, {
    GIT_CONFIG_COUNT: "3",
    GIT_CONFIG_KEY_2: `url.${target}.insteadOf`,
    GIT_CONFIG_VALUE_2: gitUrl,
    CRABPOT_TEST_NETWORK_BASE: base,
    CRABPOT_FETCH_TIMEOUT_MS: "10000",
    CRABPOT_GIT_TIMEOUT_MS: "10000",
  });
  return { root, env, requests, sha, tagSha };
}

async function invoke(fixture, track, overrides = {}, { cli = false, warn = false } = {}) {
  const env = { ...fixture.env, ...overrides };
  if (Object.hasOwn(overrides, "PATH")) {
    for (const key of Object.keys(env)) {
      if (key !== "PATH" && key.toUpperCase() === "PATH") delete env[key];
    }
  }
  const args = cli
    ? ["--import", pathToFileURL(networkFixture).href, resolverPath,
      "--track", track, ...(warn ? ["--warn-missing-tag"] : [])]
    : [networkFixture, track];
  let result;
  try {
    result = { status: 0, ...await execFile(process.execPath, args, {
      cwd: fixture.root, env, encoding: "utf8", timeout: harnessTimeoutMs, killSignal: "SIGKILL",
    }) };
  } catch (error) {
    assert.equal(error.signal, null, "the product must return before the outer harness kills it");
    assert.equal(typeof error.code, "number", `test subprocess failed to start: ${error.message}`);
    result = { status: error.code, stdout: error.stdout, stderr: error.stderr };
  }
  result.output = `${result.stdout}\n${result.stderr}`;
  if (!cli) result.value = JSON.parse(result.stdout);
  return result;
}
