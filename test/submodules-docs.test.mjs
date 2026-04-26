import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { readManifest } from "../scripts/manifest-lib.mjs";

test("dependabot is configured to update plugin submodules", async () => {
  const dependabot = await readFile(".github/dependabot.yml", "utf8");

  assert.match(dependabot, /version:\s*2/);
  assert.match(dependabot, /package-ecosystem:\s*"gitsubmodule"/);
  assert.match(dependabot, /directory:\s*"\/"/);
  assert.match(dependabot, /interval:\s*"weekly"/);
});

test("dependabot is configured to update npm fixture shims", async () => {
  const manifest = await readManifest();
  const dependabot = await readFile(".github/dependabot.yml", "utf8");

  for (const fixture of manifest.fixtures.filter((item) => item.package)) {
    assert.match(
      dependabot,
      new RegExp(`package-ecosystem:\\s*"npm"[\\s\\S]*directory:\\s*"\\/${escapeRegExp(fixture.path)}"`),
    );
  }
});

test("plugin submodule README stays aligned with manifest and gitmodules", async () => {
  const manifest = await readManifest();
  const gitmodules = await readFile(".gitmodules", "utf8");
  const readme = await readFile("plugins/README.md", "utf8");
  const submodules = parseGitmodules(gitmodules);
  const gitFixtures = manifest.fixtures.filter((fixture) => fixture.repo);

  assert.equal(submodules.length, gitFixtures.length);
  assert.match(readme, /## Add A Plugin/);
  assert.match(readme, /## Remove A Plugin/);
  assert.match(readme, /package-ecosystem: "gitsubmodule"/);
  assert.match(readme, /package-ecosystem: "npm"/);
  assert.match(readme, /plugins\/<id>\/package\.json/);

  for (const fixture of gitFixtures) {
    const submodule = submodules.find((item) => item.path === fixture.path);
    assert.ok(submodule, `${fixture.id} must have a .gitmodules entry`);
    assert.equal(submodule.url, fixture.repo, `${fixture.id} repo URL should match .gitmodules`);
    assert.equal(submodule.shallow, "true", `${fixture.id} should stay shallow`);
  }

  for (const fixture of manifest.fixtures) {
    assert.match(readme, new RegExp(`\\| \`${escapeRegExp(fixture.id)}\` \\| \`${escapeRegExp(fixture.path)}\` \\|`));
  }
});

function parseGitmodules(text) {
  const entries = [];
  let current = null;

  for (const line of text.split(/\r?\n/)) {
    const header = line.match(/^\[submodule "([^"]+)"\]$/);
    if (header) {
      current = { name: header[1] };
      entries.push(current);
      continue;
    }

    const property = line.match(/^\s+([^=]+?)\s+=\s+(.+)$/);
    if (property && current) {
      current[property[1]] = property[2];
    }
  }

  return entries;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
