import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { chmod, cp, lstat, mkdir, mkdtemp, readFile, readdir, realpath, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { pathToFileURL } from "node:url";
import { resolvePluginInspectorCliPath } from "../scripts/plugin-inspector-source.mjs";

const repoRoot = path.resolve(import.meta.dirname, "..");
const sourceRef = "a".repeat(40);
const availabilityPath = "reports/crabpot-package-availability.json";

function fixture(id = "fixture", name = "fixture-plugin") {
  return {
    id,
    name: id,
    path: `plugins/${id}`,
    package: { name, tag: "latest" },
    priority: "high",
    seams: ["dynamic-tool"],
    why: "inert materialization CLI control",
    expect: { registrations: ["registerTool"] },
  };
}

function view(item, metadata = { "dist-tags": { latest: "1.2.3" } }) {
  return { args: ["view", item.package.name, "dist-tags", "version", "--json"], stdout: JSON.stringify(metadata) };
}

function pack(item, version = "1.2.3", fail = false) {
  return { spec: `${item.package.name}@${version}`, name: item.package.name, version, fail };
}

// Run only at the npm process boundary. Unexpected calls fail closed, never reaching real npm.
async function controlledNpm() {
  const assert = (await import("node:assert/strict")).default;
  const fs = await import("node:fs");
  const path = (await import("node:path")).default;
  const plan = JSON.parse(fs.readFileSync("npm-plan.json", "utf8"));
  const args = process.argv.slice(2);
  const step = plan.steps.shift();
  plan.calls.push(args);
  fs.writeFileSync("npm-plan.json", JSON.stringify(plan));
  try {
    assert.ok(step, `unexpected npm call: ${JSON.stringify(args)}`);
    if (!step.spec) {
      assert.deepEqual(args, step.args);
    } else {
      assert.deepEqual(args, ["pack", step.spec, "--pack-destination", args[3], "--json"]);
      assert.equal(path.dirname(args[3]), path.join(process.cwd(), "tmp"));
      assert.ok(fs.statSync(args[3]).isDirectory());
      if (!step.fail) {
        fs.copyFileSync(step.tarball, path.join(args[3], "fixture.tgz"));
      }
      if (step.redirectCheckout) {
        const checkout = path.join(process.cwd(), step.redirectCheckout.path);
        fs.rmSync(checkout, { recursive: true });
        fs.symlinkSync(step.redirectCheckout.target, checkout, process.platform === "win32" ? "junction" : "dir");
      }
    }
  } catch (error) {
    plan.unexpected = error.message;
    fs.writeFileSync("npm-plan.json", JSON.stringify(plan));
    throw error;
  }
  if (step.fail) {
    console.error(`npm error code ETARGET\nnpm error No matching version found for ${step.spec}.`);
    process.exitCode = 1;
  } else {
    console.log(step.stdout ?? JSON.stringify([{ filename: "fixture.tgz", gitHead: plan.sourceRef }]));
  }
}

async function miniatureRepo(t, fixtures, steps = []) {
  const sandbox = await realpath(await mkdtemp(path.join(os.tmpdir(), "crabpot-materialize-test-")));
  const root = path.join(sandbox, "repo");
  t.after(() => rm(sandbox, { recursive: true, force: true }));
  await mkdir(root);
  await cp(path.join(repoRoot, "scripts"), path.join(root, "scripts"), { recursive: true });
  for (const directory of ["bin", "tmp", "home"]) {
    await mkdir(path.join(root, directory));
  }
  const json = (file, value) => writeFile(path.join(root, file), `${JSON.stringify(value, null, 2)}\n`);
  await json("crabpot.config.json", { version: 1, submoduleRoot: "plugins", fixtures });
  await json("crabpot.ci-policy.json", { fixtureSets: {} });
  for (const item of fixtures) {
    await mkdir(path.join(root, item.path), { recursive: true });
    if (!item.package) {
      continue;
    }
    await json(`${item.path}/package.json`, {
      name: `fixture-shim-${item.id}`,
      version: "0.0.0",
      private: true,
      dependencies: { [item.package.name]: "1.0.0" },
    });
  }
  for (const [index, step] of steps.entries()) {
    if (!step.spec || step.fail) {
      continue;
    }
    const archiveRoot = path.join(root, `archive-${index}`);
    await mkdir(path.join(archiveRoot, "package"), { recursive: true });
    await writeFile(path.join(archiveRoot, "package/package.json"), JSON.stringify({
      name: step.name, version: step.version, type: "module", main: "index.mjs",
      ...(step.pluginEntrypoint ? { openclaw: { extensions: ["./index.mjs"] } } : {}),
    }));
    await writeFile(path.join(archiveRoot, "package/index.mjs"), 'export const marker = "inert";\n');
    if (step.metadataLink) {
      await symlink(step.metadataLink, path.join(archiveRoot, "package/.crabpot-source.json"), "file");
      assert.equal((await lstat(path.join(archiveRoot, "package/.crabpot-source.json"))).isSymbolicLink(), true);
    }
    step.tarball = path.join(archiveRoot, "fixture.tgz");
    const tar = spawnSync("tar", ["-czf", "fixture.tgz", "package"], { cwd: archiveRoot, encoding: "utf8" });
    assert.equal(tar.status, 0, tar.stderr);
  }
  await json("npm-plan.json", { steps, calls: [], sourceRef });
  await writeFile(path.join(root, "npm.mjs"), `await (${controlledNpm.toString()})();\n`);
  const launcher = process.platform === "win32"
    ? `@"${process.execPath}" "${path.join(root, "npm.mjs")}" %*\r\n`
    : `#!/bin/sh\nexec "${process.execPath}" "${path.join(root, "npm.mjs")}" "$@"\n`;
  const npm = path.join(root, "bin", process.platform === "win32" ? "npm.cmd" : "npm");
  await writeFile(npm, launcher);
  await chmod(npm, 0o755);
  // Invalid-destination tests must never reach npm, git, or tar, even before the repair.
  await writeFile(path.join(root, "deny-commands.mjs"), [
    'import fs from "node:fs";',
    'import childProcess from "node:child_process";',
    'import { syncBuiltinESMExports } from "node:module";',
    'childProcess.spawnSync = (command, args) => {',
    '  fs.appendFileSync("external-calls.jsonl", `${JSON.stringify([command, ...args])}\\n`);',
    '  throw new Error("unexpected external command");',
    '};',
    'syncBuiltinESMExports();',
  ].join("\n"));
  // Do not inherit track selection, credentials, npm config or Node injection from CI.
  const env = Object.fromEntries(Object.entries(process.env).filter(([key]) =>
    ["PATH", "SYSTEMROOT", "WINDIR", "COMSPEC", "PATHEXT"].includes(key.toUpperCase()),
  ));
  const pathKey = Object.keys(env).find((key) => key.toUpperCase() === "PATH") ?? "PATH";
  env[pathKey] = `${path.join(root, "bin")}${path.delimiter}${path.dirname(process.execPath)}${path.delimiter}${env[pathKey] ?? ""}`;
  Object.assign(env, {
    HOME: path.join(root, "home"),
    USERPROFILE: path.join(root, "home"),
    TMPDIR: path.join(root, "tmp"),
    TMP: path.join(root, "tmp"),
    TEMP: path.join(root, "tmp"),
  });
  const run = (script = "sync-fixtures.mjs", args = ["--materialize"], extraEnv = {}, nodeArgs = []) => {
    const result = spawnSync(process.execPath, [...nodeArgs, `scripts/${script}`, ...args], {
      cwd: root, env: { ...env, ...extraEnv }, encoding: "utf8", timeout: 30_000,
    });
    assert.ifError(result.error);
    assert.equal(result.signal, null, result.stderr);
    return result;
  };
  return {
    root, json, run,
    outside: path.join(sandbox, "outside"),
    payload: (item = fixtures[0]) => path.join(root, item.path, item.subdir ?? (item.package ? ".crabpot-package" : "")),
    readJson: async (file) => JSON.parse(await readFile(path.join(root, file), "utf8")),
    runWithoutCommands: (args = ["--materialize"]) =>
      run("sync-fixtures.mjs", args, {}, ["--import", pathToFileURL(path.join(root, "deny-commands.mjs")).href]),
    async assertNoExternalCommands() {
      assert.equal(existsSync(path.join(root, "external-calls.jsonl")), false, "preflight must precede every external command");
      assert.deepEqual((JSON.parse(await readFile(path.join(root, "npm-plan.json"), "utf8"))).calls, []);
      assert.deepEqual(await readdir(path.join(root, "tmp")), []);
      assert.equal(existsSync(path.join(root, availabilityPath)), false);
    },
    async assertNpmComplete() {
      const plan = JSON.parse(await readFile(path.join(root, "npm-plan.json"), "utf8"));
      assert.equal(plan.unexpected, undefined);
      assert.deepEqual(plan.steps, []);
      assert.deepEqual(await readdir(path.join(root, "tmp")), []);
      return plan.calls;
    },
  };
}

function assertFailedAcquisition(result) {
  assert.notEqual(result.status, 0, `failed npm pack must fail the materializer:\n${result.stdout}`);
  assert.match(result.stderr, /ETARGET/);
  assert.doesNotMatch(result.stdout, /fixtures materialized/);
}

function sourcePackFixture() {
  const item = fixture("source", "@openclaw/fixture");
  item.package.artifactSource = "source-pack";
  item.source = { repo: "https://github.com/openclaw/openclaw.git", path: "extensions/fixture", ref: sourceRef };
  return item;
}

async function sourcePackArgs(repo, item) {
  const sourceRoot = path.join(repo.root, "host");
  await mkdir(path.join(sourceRoot, item.source.path), { recursive: true });
  await repo.json("host/package.json", { name: "inert-host", version: "1.0.0" });
  await repo.json(`host/${item.source.path}/package.json`, { name: item.package.name, version: "1.2.3" });
  return ["--materialize", "--openclaw", sourceRoot];
}

async function directoryBytes(root) {
  const entries = (await readdir(root, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name));
  return Object.fromEntries(await Promise.all(entries.map(async (entry) => [
    entry.name,
    entry.isDirectory()
      ? await directoryBytes(path.join(root, entry.name))
      : await readFile(path.join(root, entry.name)),
  ])));
}

async function redirectDestination(repo, relativePath, kind = "link") {
  const destination = path.join(repo.root, relativePath);
  await mkdir(destination, { recursive: true });
  await writeFile(path.join(destination, "sentinel.txt"), "destination bytes must survive\n");
  await cp(destination, repo.outside, { recursive: true });
  await rm(destination, { recursive: true });
  if (kind === "file") {
    await writeFile(destination, "not a directory\n");
  } else {
    const target = kind === "dangling" ? path.join(repo.outside, "missing") : repo.outside;
    await symlink(target, destination, process.platform === "win32" ? "junction" : "dir");
    assert.equal((await lstat(destination)).isSymbolicLink(), true);
  }
  return destination;
}

function assertDestinationRejected(result, diagnostic) {
  assert.notEqual(result.status, 0, "unsafe destination must fail materialization");
  assert.doesNotMatch(result.stdout, /fixtures materialized/);
  assert.match(result.stderr, diagnostic);
}

for (const acquisition of ["npm", "source-pack", "git"]) {
  for (const component of ["plugins", "checkout parent", "checkout", "subdir parent", "payload"]) {
    test(`${acquisition} rejects a ${component} link before materialization`, async (t) => {
      const item = acquisition === "source-pack" ? sourcePackFixture() : fixture();
      if (acquisition === "git") {
        delete item.package;
        item.repo = "https://github.com/openclaw/example.git";
      }
      item.path = "plugins/group/fixture";
      item.subdir = "nested/payload";
      const repo = await miniatureRepo(t, [item]);
      const args = acquisition === "source-pack" ? await sourcePackArgs(repo, item) : ["--materialize"];
      const destinations = {
        plugins: "plugins",
        "checkout parent": "plugins/group",
        checkout: item.path,
        "subdir parent": `${item.path}/nested`,
        payload: `${item.path}/${item.subdir}`,
      };
      await redirectDestination(repo, destinations[component]);
      const before = await directoryBytes(repo.outside);
      const result = repo.runWithoutCommands(args);
      await repo.assertNoExternalCommands();
      assert.deepEqual(await directoryBytes(repo.outside), before);
      assertDestinationRejected(result, /symlink|symbolic link|junction/i);
    });
  }
}

for (const kind of ["dangling", "file"]) {
  for (const component of ["plugins", "checkout parent", "checkout", "subdir parent", "payload"]) {
    test(`materialization rejects a ${kind} ${component}`, async (t) => {
      const item = fixture();
      item.path = "plugins/group/fixture";
      item.subdir = "nested/payload";
      const repo = await miniatureRepo(t, [item]);
      const destinations = {
        plugins: "plugins",
        "checkout parent": "plugins/group",
        checkout: item.path,
        "subdir parent": `${item.path}/nested`,
        payload: `${item.path}/${item.subdir}`,
      };
      const destination = await redirectDestination(repo, destinations[component], kind);
      const before = await directoryBytes(repo.outside);
      const result = repo.runWithoutCommands();
      await repo.assertNoExternalCommands();
      assert.deepEqual(await directoryBytes(repo.outside), before);
      if (kind === "file") {
        assert.equal(await readFile(destination, "utf8"), "not a directory\n");
      } else {
        assert.equal((await lstat(destination)).isSymbolicLink(), true);
      }
      assertDestinationRejected(result, kind === "file" ? /directory/i : /symlink|symbolic link|junction/i);
    });
  }
}

test("materialization preflights all selected fixtures before starting the first acquisition", async (t) => {
  const ready = fixture("ready", "ready-plugin");
  const unsafe = fixture("unsafe", "unsafe-plugin");
  const repo = await miniatureRepo(t, [ready, unsafe]);
  await redirectDestination(repo, `${unsafe.path}/.crabpot-package`);
  const before = await directoryBytes(repo.outside);
  const result = repo.runWithoutCommands();
  await repo.assertNoExternalCommands();
  assert.equal(existsSync(repo.payload(ready)), false);
  assert.deepEqual(await directoryBytes(repo.outside), before);
  assertDestinationRejected(result, /symlink|symbolic link|junction/i);
});

test("materialization does not inspect destinations outside the selected fixture set", async (t) => {
  const ready = fixture("ready", "ready-plugin");
  const unselected = fixture("unselected", "unselected-plugin");
  const repo = await miniatureRepo(t, [ready, unselected], [view(ready), pack(ready)]);
  await redirectDestination(repo, unselected.path);
  const before = await directoryBytes(repo.outside);
  const result = repo.run("sync-fixtures.mjs", ["--materialize", "--fixture-set", ready.id]);
  await repo.assertNpmComplete();
  assert.equal(result.status, 0, result.stderr);
  assert.equal((await repo.readJson(`${ready.path}/.crabpot-package/package.json`)).name, ready.package.name);
  assert.deepEqual(await directoryBytes(repo.outside), before);
});

for (const unsafe of [
  { path: "plugins/." },
  { path: "plugins/../outside" },
  { subdir: "." },
  { subdir: "../../../outside" },
  { subdir: "nested\\..\\..\\outside" },
]) {
  test(`CLI rejects lexical destination ${JSON.stringify(unsafe)} without acquisition`, async (t) => {
    const item = fixture();
    const repo = await miniatureRepo(t, [item]);
    await mkdir(repo.outside);
    await writeFile(path.join(repo.outside, "sentinel.txt"), "outside bytes\n");
    // Write hostile metadata only after safe setup; the harness must not resolve it itself.
    await repo.json("crabpot.config.json", {
      version: 1, submoduleRoot: "plugins", fixtures: [{ ...item, ...unsafe }],
    });
    const before = await directoryBytes(repo.outside);
    const result = repo.runWithoutCommands();
    await repo.assertNoExternalCommands();
    assert.deepEqual(await directoryBytes(repo.outside), before);
    assertDestinationRejected(result, /path|subdir/i);
  });
}

for (const acquisition of ["npm", "source-pack"]) {
  test(`${acquisition} rechecks the checkout after packing before replacing the payload`, async (t) => {
    const item = acquisition === "source-pack" ? sourcePackFixture() : fixture();
    const repo = await miniatureRepo(t, [item], acquisition === "npm" ? [view(item), pack(item)] : [pack(item)]);
    const args = acquisition === "source-pack" ? await sourcePackArgs(repo, item) : ["--materialize"];
    await cp(path.join(repo.root, item.path), repo.outside, { recursive: true });
    await mkdir(path.join(repo.outside, ".crabpot-package"));
    await writeFile(path.join(repo.outside, ".crabpot-package/sentinel.txt"), "outside payload must survive\n");
    const before = await directoryBytes(repo.outside);
    const plan = await repo.readJson("npm-plan.json");
    const packStep = plan.steps.at(-1);
    if (acquisition === "source-pack") {
      packStep.spec = path.join(args[2], item.source.path);
    }
    // A controlled pack completion changes the filesystem; this is not a concurrent-race proof.
    packStep.redirectCheckout = { path: item.path, target: repo.outside };
    await repo.json("npm-plan.json", plan);
    const result = repo.run("sync-fixtures.mjs", args);
    await repo.assertNpmComplete();
    assert.deepEqual(await directoryBytes(repo.outside), before);
    assertDestinationRejected(result, /symlink|symbolic link|junction/i);
  });

  test(`${acquisition} refuses a metadata leaf symlink introduced by the archive`, async (t) => {
    const item = acquisition === "source-pack" ? sourcePackFixture() : fixture();
    const packed = { ...pack(item), metadataLink: "../../../../outside/sentinel.txt" };
    const repo = await miniatureRepo(t, [item], acquisition === "npm" ? [view(item), packed] : [packed]);
    const args = acquisition === "source-pack" ? await sourcePackArgs(repo, item) : ["--materialize"];
    if (acquisition === "source-pack") {
      const plan = await repo.readJson("npm-plan.json");
      plan.steps[0].spec = path.join(args[2], item.source.path);
      await repo.json("npm-plan.json", plan);
    }
    await mkdir(repo.outside);
    await writeFile(path.join(repo.outside, "sentinel.txt"), "outside metadata must survive\n");
    const before = await directoryBytes(repo.outside);
    // MSYS tar otherwise copies the link target instead of creating a native Windows symlink.
    const env = process.platform === "win32" ? { MSYS: "winsymlinks:nativestrict" } : {};
    const result = repo.run("sync-fixtures.mjs", args, env);
    await repo.assertNpmComplete();
    assert.equal((await lstat(path.join(repo.payload(), ".crabpot-source.json"))).isSymbolicLink(), true);
    assert.deepEqual(await directoryBytes(repo.outside), before);
    assertDestinationRejected(result, /symlink|symbolic link|junction/i);
  });
}

for (const state of ["nested npm", "empty payload", "missing checkout", "missing plugins"]) {
  test(`materialization accepts healthy ${state} destinations`, async (t) => {
    const sourcePack = state.startsWith("missing");
    const item = sourcePack ? sourcePackFixture() : fixture();
    item.path = "plugins/group/fixture..name";
    item.subdir = "nested/..harmless/payload";
    const repo = await miniatureRepo(t, [item], sourcePack ? [pack(item)] : [view(item), pack(item)]);
    const args = sourcePack ? await sourcePackArgs(repo, item) : ["--materialize"];
    if (sourcePack) {
      const plan = await repo.readJson("npm-plan.json");
      plan.steps[0].spec = path.join(args[2], item.source.path);
      await repo.json("npm-plan.json", plan);
      await rm(path.join(repo.root, state === "missing plugins" ? "plugins" : item.path), { recursive: true });
    } else {
      if (state === "empty payload") {
        await mkdir(repo.payload(), { recursive: true });
      }
      await mkdir(repo.outside);
      await writeFile(path.join(repo.outside, "sentinel.txt"), "unrelated link target\n");
      await symlink(repo.outside, path.join(repo.root, item.path, "unrelated"), process.platform === "win32" ? "junction" : "dir");
    }
    const result = repo.run("sync-fixtures.mjs", args);
    await repo.assertNpmComplete();
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /fixtures materialized/);
    assert.equal((await repo.readJson(`${item.path}/${item.subdir}/package.json`)).name, item.package.name);
    assert.equal((await repo.readJson(`${item.path}/${item.subdir}/.crabpot-source.json`)).sourceMode, sourcePack ? "source-pack" : "npm");
    if (!sourcePack) {
      assert.equal(await readFile(path.join(repo.outside, "sentinel.txt"), "utf8"), "unrelated link target\n");
    }
  });
}

for (const state of ["absent", "empty", "stale"]) {
  test(`failed npm acquisition rejects ${state} payload and persists evidence`, async (t) => {
    const item = fixture();
    const repo = await miniatureRepo(t, [item], [view(item), pack(item, "1.2.3", true)]);
    const staleFiles = {
      "package.json": '{"name":"fixture-plugin","version":"0.9.0"}\n',
      "index.mjs": 'export const marker = "stale";\n',
      ".crabpot-source.json": '{"name":"fixture-plugin","version":"0.9.0","sourceMode":"npm"}\n',
    };
    if (state !== "absent") {
      await mkdir(repo.payload());
    }
    if (state === "stale") {
      for (const [file, bytes] of Object.entries(staleFiles)) {
        await writeFile(path.join(repo.payload(), file), bytes);
      }
    }
    const result = repo.run();
    await repo.assertNpmComplete();
    const report = await repo.readJson(availabilityPath);
    assert.equal(report.summary.failureCount, 1);
    assert.deepEqual(report.failures.map(({ packageName, requestedVersion, reason }) =>
      ({ packageName, requestedVersion, reason })),
    [{ packageName: "fixture-plugin", requestedVersion: "1.2.3", reason: "npm-pack-failed" }]);
    assertFailedAcquisition(result);
    if (state === "absent") {
      assert.equal(existsSync(repo.payload()), false);
    } else {
      assert.deepEqual((await readdir(repo.payload())).sort(), state === "empty" ? [] : Object.keys(staleFiles).sort());
      for (const [file, bytes] of Object.entries(state === "stale" ? staleFiles : {})) {
        assert.equal(await readFile(path.join(repo.payload(), file), "utf8"), bytes);
      }
    }
  });
}

test("failed acquisition collects the remaining fixtures before rejecting", async (t) => {
  const failed = fixture("unavailable");
  const ready = fixture("ready", "ready-plugin");
  const repo = await miniatureRepo(t, [failed, ready], [
    view(failed), pack(failed, "1.2.3", true), view(ready), pack(ready),
  ]);
  const result = repo.run();
  await repo.assertNpmComplete();
  assert.equal((await repo.readJson(availabilityPath)).failures[0].fixture, "unavailable");
  assert.equal((await repo.readJson(`${ready.path}/.crabpot-package/package.json`)).version, "1.2.3");
  assertFailedAcquisition(result);
});

for (const fail of [false, true]) {
  test(`missing tag with ${fail ? "failed" : "successful"} pinned fallback preserves evidence`, async (t) => {
    const item = fixture();
    const repo = await miniatureRepo(t, [item], [view(item, {}), pack(item, "1.0.0", fail)]);
    const result = repo.run();
    await repo.assertNpmComplete();
    const report = await repo.readJson(availabilityPath);
    assert.deepEqual(report.failures.map((entry) => entry.reason),
      fail ? ["npm-dist-tag-missing", "npm-pack-failed"] : ["npm-dist-tag-missing"]);
    assert.equal(report.summary.failureCount, fail ? 2 : 1);
    assert.equal(report.summary.fallbackCount, fail ? 2 : 1);
    assert.ok(report.failures.every((entry) => entry.fallbackVersion === "1.0.0" && entry.requestedTag === "latest"));
    assert.match(result.stderr, /falling back to pinned 1.0.0/);
    if (fail) {
      assertFailedAcquisition(result);
    } else {
      assert.equal(result.status, 0, result.stderr);
      assert.match(result.stdout, /fixtures materialized/);
      assert.equal((await repo.readJson(`${item.path}/.crabpot-package/.crabpot-source.json`)).version, "1.0.0");
    }
  });
}

for (const seeded of [false, true]) {
  test(`suppressed report ${seeded ? "preserves existing bytes" : "stays absent"} without allowing pack failure`, async (t) => {
    const item = fixture();
    const repo = await miniatureRepo(t, [item], [view(item), pack(item, "1.2.3", true)]);
    const bytes = '{ "prior": "availability evidence" }\n';
    if (seeded) {
      await mkdir(path.join(repo.root, "reports"));
      await writeFile(path.join(repo.root, availabilityPath), bytes);
    }
    const result = repo.run("sync-fixtures.mjs", ["--materialize", "--no-package-availability-report"]);
    await repo.assertNpmComplete();
    assert.equal(existsSync(path.join(repo.root, availabilityPath)), seeded);
    if (seeded) {
      assert.equal(await readFile(path.join(repo.root, availabilityPath), "utf8"), bytes);
    }
    assertFailedAcquisition(result);
  });
}

for (const metadata of [{ "dist-tags": { latest: "1.2.3" } }, { version: "1.2.3" }]) {
  test(`successful npm acquisition writes payload and metadata from ${Object.keys(metadata)[0]}`, async (t) => {
    const item = fixture();
    const repo = await miniatureRepo(t, [item], [view(item, metadata), pack(item)]);
    const result = repo.run();
    await repo.assertNpmComplete();
    assert.equal(result.status, 0, result.stderr);
    assert.equal(await readFile(path.join(repo.payload(), "index.mjs"), "utf8"), 'export const marker = "inert";\n');
    assert.equal((await repo.readJson(`${item.path}/.crabpot-package/package.json`)).version, "1.2.3");
    assert.deepEqual(await repo.readJson(`${item.path}/.crabpot-package/.crabpot-source.json`), {
      gitHead: sourceRef, name: item.package.name, sourceMode: "npm", sourcePath: null,
      sourceRef, sourceRepo: null, tag: "latest", version: "1.2.3",
    });
    assert.deepEqual((await repo.readJson(availabilityPath)).failures, []);
  });
}

for (const fail of [false, true]) {
  test(`source-pack ${fail ? "failure rejects" : "success preserves source metadata"}`, async (t) => {
    const item = fixture("source", "@openclaw/fixture");
    item.package.artifactSource = "source-pack";
    item.source = { repo: "https://github.com/openclaw/openclaw.git", path: "extensions/fixture", ref: sourceRef };
    const repo = await miniatureRepo(t, [item], [pack(item, "1.2.3", fail)]);
    const sourceRoot = path.join(repo.root, "host");
    await mkdir(path.join(sourceRoot, item.source.path), { recursive: true });
    await repo.json("host/package.json", { name: "inert-host", version: "1.0.0" });
    await repo.json(`host/${item.source.path}/package.json`, { name: item.package.name, version: "1.2.3" });
    const plan = await repo.readJson("npm-plan.json");
    plan.steps[0].spec = path.join(sourceRoot, item.source.path);
    await repo.json("npm-plan.json", plan);
    const result = repo.run("sync-fixtures.mjs", ["--materialize", "--openclaw", sourceRoot]);
    await repo.assertNpmComplete();
    if (fail) {
      assertFailedAcquisition(result);
      assert.equal(existsSync(path.join(repo.root, availabilityPath)), false);
    } else {
      assert.equal(result.status, 0, result.stderr);
      const metadata = await repo.readJson(`${item.path}/.crabpot-package/.crabpot-source.json`);
      assert.equal(metadata.sourceMode, "source-pack");
      assert.equal(metadata.sourcePath, item.source.path);
      assert.equal(metadata.sourceRef, sourceRef);
      assert.equal(metadata.version, "1.2.3");
      assert.equal((await repo.readJson(`${item.path}/.crabpot-package/package.json`)).name, item.package.name);
    }
  });
}

test("check-only modes validate shims without calling npm or promising acquisition", async (t) => {
  const repo = await miniatureRepo(t, [fixture()]);
  for (const args of [[], ["--check"], ["--materialize", "--check"]]) {
    const result = repo.run("sync-fixtures.mjs", args);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /manifest ok/);
    assert.doesNotMatch(result.stdout, /fixtures materialized/);
  }
  assert.deepEqual(await repo.assertNpmComplete(), []);
  assert.equal(existsSync(repo.payload()), false);
  assert.equal(existsSync(path.join(repo.root, availabilityPath)), false);
});

for (const selection of [
  { name: "CLI named set overrides env", cli: "named", env: "third", label: "named", ids: ["first", "second"] },
  { name: "CLI comma list", cli: " first, second ", env: "third", label: "first, second", ids: ["first", "second"] },
  { name: "CLI all overrides env subset", cli: "all", env: "first", label: "all", ids: ["first", "second", "third"] },
  { name: "env all", env: "all", label: "all", ids: ["first", "second", "third"] },
]) {
  test(`availability labels the actual selection: ${selection.name}`, async (t) => {
    const fixtures = ["first", "second", "third"].map((id) => fixture(id, `${id}-plugin`));
    const selected = selection.ids.map((id) => fixtures.find((item) => item.id === id));
    const repo = await miniatureRepo(t, fixtures,
      selected.flatMap((item) => [view(item), pack(item, "1.2.3", true)]));
    await repo.json("crabpot.ci-policy.json", { fixtureSets: { named: ["first", "second"] } });
    const args = ["--materialize", ...(selection.cli ? ["--fixture-set", selection.cli] : [])];
    const result = repo.run("sync-fixtures.mjs", args, { CRABPOT_FIXTURE_SET: selection.env });
    await repo.assertNpmComplete();
    assertFailedAcquisition(result);
    const report = await repo.readJson(availabilityPath);
    assert.deepEqual(report.failures.map((entry) => entry.fixture), selection.ids);
    assert.equal(report.fixtureSet, selection.label);
  });
}

for (const selected of [false, true]) {
  test(`actual static runner stops after ${selected ? "selected" : "initial"} materialization failure`, async (t) => {
    const item = fixture("fixture", "@openclaw/fixture");
    const unselected = fixture("unselected", "unselected-plugin");
    const steps = selected
      ? [
          view(item), pack(item), view(unselected), pack(unselected),
          view(item, { "dist-tags": { beta: "2.0.0" } }), pack(item, "2.0.0", true),
        ]
      : [view(item), pack(item, "1.2.3", true)];
    const repo = await miniatureRepo(t, selected ? [item, unselected] : [item], steps);
    // Bound unrelated stages with sentinels; materializer and static runner stay real.
    await writeFile(path.join(repo.root, "scripts/check-openclaw-plugin-contracts.mjs"), 'console.log("contract sentinel");\n');
    await writeFile(path.join(repo.root, "scripts/run-contract-smoke.mjs"), 'console.log("dependent sentinel");\nprocess.exit(71);\n');
    await mkdir(path.join(repo.root, "test"));
    await writeFile(path.join(repo.root, "test/sentinel.test.mjs"), [
      'import assert from "node:assert/strict";',
      'import { test } from "node:test";',
      'test("unit sentinel", () => {',
      '  assert.equal(process.env.CRABPOT_PLUGIN_TRACK, undefined);',
      '  assert.equal(process.env.CRABPOT_FIXTURE_SET, undefined);',
      '});',
    ].join("\n"));
    const result = repo.run("run-static-suite.mjs",
      selected ? ["--fixture-set", item.id, "--plugin-track", "beta"] : []);
    await repo.assertNpmComplete();
    assert.notEqual(result.status, 0);
    assert.match(result.stdout, /contract sentinel/);
    assert.match(result.stderr, /ETARGET/);
    assert.equal(result.stdout.includes("unit sentinel"), selected, result.stdout);
    assert.doesNotMatch(result.stdout, /dependent sentinel/);
    const report = await repo.readJson(availabilityPath);
    assert.equal(report.pluginTrack, selected ? "beta" : "manifest");
    assert.equal(report.fixtureSet, selected ? item.id : "all");
    assert.equal(report.failures[0].fixture, item.id);
    assert.equal(report.failures[0].requestedVersion, selected ? "2.0.0" : "1.2.3");
  });
}

test("actual report retains failed acquisition as P0 with no payload and no host", async (t) => {
  const item = fixture("unavailable", "@openclaw/fixture");
  const repo = await miniatureRepo(t, [item], [view(item), pack(item, "1.2.3", true)]);
  const materialized = repo.run();
  await repo.assertNpmComplete();
  const inspectorRoot = path.dirname(path.dirname(resolvePluginInspectorCliPath()));
  const result = repo.run("generate-report.mjs", ["--no-openclaw", "--json"], {
    CRABPOT_PLUGIN_INSPECTOR_DIR: inspectorRoot,
    CRABPOT_PACKAGE_AVAILABILITY_PATH: path.join(repo.root, availabilityPath),
  });
  assert.equal(result.status, 0, result.stderr);
  const report = JSON.parse(result.stdout);
  const issue = report.issues.find((entry) => entry.code === "package-npm-pack-unavailable");
  assert.equal(report.targetOpenClaw.status, "disabled");
  assert.equal(issue.fixture, item.id);
  assert.equal(issue.severity, "P0");
  assert.equal(issue.status, "blocking");
  assert.match(issue.evidence.join("\n"), /@openclaw\/fixture@1\.2\.3/);
  assert.equal(report.crabpotContext.packageAvailability.failures, 1);
  const markdown = await readFile(path.join(repo.root, "reports/crabpot-report.md"), "utf8");
  assert.match(markdown, /@openclaw\/fixture@1\.2\.3/);
  assertFailedAcquisition(materialized);
  assert.equal(existsSync(repo.payload()), false);
});

for (const pluginEntrypoint of [false, true]) {
  test(`resolver CLI materializes ${pluginEntrypoint ? "executable" : "metadata-only"} fixture before planning`, async (t) => {
    const item = fixture("selected", "selected-plugin");
    const unselected = fixture("unselected", "unselected-plugin");
    const repo = await miniatureRepo(t, [item, unselected], [view(item), { ...pack(item), pluginEntrypoint }]);
    const env = { CRABPOT_PLUGIN_INSPECTOR_DIR: path.dirname(path.dirname(resolvePluginInspectorCliPath())) };
    const args = ["--fixture-set", item.id, "--no-openclaw", "--github-output"];
    assert.equal(existsSync(repo.payload(item)), false);
    const before = repo.run("resolve-fixture-set.mjs", args, env);
    assert.equal(before.status, 0, before.stderr);
    const initialMatrix = JSON.parse(before.stdout.split("\n")[0].slice("matrix=".length));
    assert.equal(initialMatrix.include[0].entrypointCount, 0);
    assert.deepEqual((await repo.readJson("npm-plan.json")).calls, []);

    const result = repo.run("resolve-fixture-set.mjs", [...args, "--materialize"], env);
    assert.equal(result.status, 0, result.stderr);
    const lines = result.stdout.trim().split(/\r?\n/);
    assert.equal(lines.length, 3, result.stdout);
    const matrix = JSON.parse(lines[0].slice("matrix=".length));
    assert.equal(matrix.include.length, 1);
    assert.equal(matrix.include[0].id, item.id);
    assert.equal(matrix.include[0].entrypointCount, pluginEntrypoint ? 1 : 0);
    assert.deepEqual(lines.slice(1), ["count=1", "fixtures=selected"]);
    assert.match(result.stderr, /fixtures materialized/);
    assert.equal(existsSync(repo.payload(unselected)), false);
    assert.equal((await repo.readJson(`${item.path}/.crabpot-package/.crabpot-source.json`)).version, "1.2.3");
    assert.equal((await repo.assertNpmComplete()).length, 2);
    if (!pluginEntrypoint) {
      const execution = repo.run("execute-workspace-plan.mjs", ["--fixture", item.id, "--allow-empty", "--no-openclaw"], {
        ...env, CRABPOT_EXECUTE_ISOLATED: "1",
      });
      assert.equal(execution.status, 0, execution.stderr);
      assert.match(execution.stdout, /no entrypoints selected/);
      assert.equal((await repo.readJson(`.crabpot/results/${item.id}/execution-profile.json`)).summary.stepCount, 0);
    }
  });
}

test("resolver CLI emits no matrix after an actual pack failure", async (t) => {
  const item = fixture();
  const repo = await miniatureRepo(t, [item], [view(item), pack(item, "1.2.3", true)]);
  const result = repo.run("resolve-fixture-set.mjs", ["--fixture-set", item.id, "--materialize", "--no-openclaw", "--github-output"], {
    CRABPOT_PLUGIN_INSPECTOR_DIR: path.dirname(path.dirname(resolvePluginInspectorCliPath())),
  });
  assert.notEqual(result.status, 0);
  assert.equal(result.stdout, "");
  assert.match(result.stderr, /ETARGET/);
  assert.match(result.stderr, /fixture materialization failed with exit code 1/);
  assert.equal(existsSync(repo.payload()), false);
  await repo.assertNpmComplete();
});

test("resolver CLI keeps intentional none empty without acquiring payloads", async (t) => {
  const repo = await miniatureRepo(t, [fixture()]);
  const result = repo.run("resolve-fixture-set.mjs", ["--fixture-set", "none", "--materialize", "--allow-empty", "--no-openclaw", "--github-output"], {
    CRABPOT_PLUGIN_INSPECTOR_DIR: path.dirname(path.dirname(resolvePluginInspectorCliPath())),
  });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(result.stdout.trim().split(/\r?\n/), ['matrix={"include":[]}', "count=0", "fixtures="]);
  assert.equal(existsSync(repo.payload()), false);
  assert.deepEqual(await repo.assertNpmComplete(), []);
});
