import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cpSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";

const fixture = {
  id: "example",
  path: "plugins/example",
  repo: "https://github.com/openclaw/example.git",
  priority: "high",
  seams: ["tool"],
};

function runFixtureCheck(t, { fixtures = [fixture], gitmodules } = {}) {
  const root = mkdtempSync(path.join(os.tmpdir(), "crabpot-fixture-validation-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(path.join(root, "scripts"));
  for (const script of ["sync-fixtures.mjs", "manifest-lib.mjs", "npm-pack-result.mjs", "package-availability.mjs"]) {
    cpSync(new URL(`../scripts/${script}`, import.meta.url), path.join(root, "scripts", script));
  }
  writeFileSync(path.join(root, "crabpot.config.json"), JSON.stringify({ version: 1, submoduleRoot: "plugins", fixtures }));
  if (gitmodules !== undefined) {
    writeFileSync(path.join(root, ".gitmodules"), gitmodules);
  }
  const env = { ...process.env };
  delete env.CRABPOT_FIXTURE_SET;
  return spawnSync(process.execPath, ["scripts/sync-fixtures.mjs", "--check"], {
    cwd: root,
    encoding: "utf8",
    env,
    timeout: 10_000,
  });
}

test("fixture check rejects a fixture with no acquisition source", (t) => {
  const { repo, ...sourceLess } = fixture;
  const result = runFixtureCheck(t, { fixtures: [sourceLess] });
  assert.equal(result.status, 1, result.stdout);
  assert.match(result.stderr, /fixture must declare exactly one of repo or package/);
});

for (const scenario of [
  { name: "missing file", gitmodules: undefined },
  { name: "path prefix", gitmodules: `[submodule "example"]\npath = ${fixture.path}-other\nurl = ${fixture.repo}\n` },
  { name: "commented-out entry", gitmodules: `# path = ${fixture.path}\n# url = ${fixture.repo}\n` },
  { name: "mismatched section", gitmodules: `[submodule "example"]\npath = ${fixture.path}\nurl = https://github.com/openclaw/other.git\n[submodule "other"]\npath = plugins/other\nurl = ${fixture.repo}\n` },
  { name: "duplicate path", gitmodules: `[submodule "example"]\npath = ${fixture.path}\nurl = ${fixture.repo}\n[submodule "other"]\npath = ${fixture.path}\nurl = https://github.com/openclaw/other.git\n` },
  { name: "invalid config", gitmodules: `[submodule "example"\npath = ${fixture.path}\nurl = ${fixture.repo}\n` },
]) {
  test(`fixture check rejects gitmodules ${scenario.name}`, (t) => {
    const result = runFixtureCheck(t, scenario);
    assert.equal(result.status, 1, result.stdout);
    assert.match(result.stderr, /\.gitmodules/);
    assert.doesNotMatch(result.stdout, /manifest ok/);
  });
}

for (const gitmodules of [
  `[submodule "example"]\npath = ${fixture.path}\nurl = ${fixture.repo}\n`,
  `[submodule "arbitrary.section"]\npath="${fixture.path}" # exact path\nurl="${fixture.repo}"\n`,
]) {
  test("fixture check accepts exact submodule pairs using Git config syntax", (t) => {
    const result = runFixtureCheck(t, { gitmodules });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /manifest ok \(1 fixtures\)/);
  });
}

test("fixture check allows a package-only selection without gitmodules", (t) => {
  const { repo, ...packageFixture } = fixture;
  packageFixture.package = { name: "@openclaw/example", artifactSource: "source-pack" };
  packageFixture.source = { repo, path: "extensions/example", ref: "main" };
  const result = runFixtureCheck(t, { fixtures: [packageFixture] });
  assert.equal(result.status, 0, result.stderr);
});
