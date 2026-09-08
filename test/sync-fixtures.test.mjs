import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { chmod, cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
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
  const root = await mkdtemp(path.join(os.tmpdir(), "crabpot-materialize-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await cp(path.join(repoRoot, "scripts"), path.join(root, "scripts"), { recursive: true });
  for (const directory of ["bin", "tmp", "home"]) {
    await mkdir(path.join(root, directory));
  }
  const json = (file, value) => writeFile(path.join(root, file), `${JSON.stringify(value, null, 2)}\n`);
  await json("crabpot.config.json", { version: 1, submoduleRoot: "plugins", fixtures });
  await json("crabpot.ci-policy.json", { fixtureSets: {} });
  for (const item of fixtures) {
    await mkdir(path.join(root, item.path), { recursive: true });
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
    }));
    await writeFile(path.join(archiveRoot, "package/index.mjs"), 'export const marker = "inert";\n');
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
  const run = (script = "sync-fixtures.mjs", args = ["--materialize"], extraEnv = {}) => {
    const result = spawnSync(process.execPath, [`scripts/${script}`, ...args], {
      cwd: root, env: { ...env, ...extraEnv }, encoding: "utf8", timeout: 30_000,
    });
    assert.ifError(result.error);
    assert.equal(result.signal, null, result.stderr);
    return result;
  };
  return {
    root, json, run,
    payload: (item = fixtures[0]) => path.join(root, item.path, ".crabpot-package"),
    readJson: async (file) => JSON.parse(await readFile(path.join(root, file), "utf8")),
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
