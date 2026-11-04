import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { readManifest } from "../scripts/manifest-lib.mjs";

test("dependabot schedules respect the provider's 24-hour minimum", async () => {
  const config = await readFile(".github/dependabot.yml", "utf8");
  const entries = config.split(/\n(?=  - package-ecosystem:)/).slice(1);
  assert.ok(entries.length > 0);
  for (const entry of entries) {
    const cron = entry.match(/cronjob:\s*"([^"]+)"/)?.[1];
    assert.ok(cron, "each update entry needs a cron schedule");
    const parts = cron.match(/^(\d{1,2}) (\d{1,2}(?:,\d{1,2})*) \* \* \*$/);
    assert.ok(parts, `unsupported daily cron syntax: ${cron}`);
    assert.ok(Number(parts[1]) < 60);
    const hours = [...new Set(parts[2].split(",").map(Number))].sort((a, b) => a - b);
    assert.ok(hours.every((hour) => hour < 24));
    const gaps = hours.map((hour, index) =>
      hours[(index + 1) % hours.length] + (index === hours.length - 1 ? 24 : 0) - hour);
    assert.ok(Math.min(...gaps) >= 24, `${cron} schedules updates less than 24 hours apart`);
    assert.match(entry, /timezone:\s*"Etc\/UTC"/);
  }
});

test("dependabot is configured to update plugin submodules", async () => {
  const dependabot = await readFile(".github/dependabot.yml", "utf8");

  assert.match(dependabot, /version:\s*2/);
  assert.match(dependabot, /package-ecosystem:\s*"gitsubmodule"/);
  assert.match(dependabot, /directory:\s*"\/"/);
  assert.match(dependabot, /interval:\s*"cron"/);
  assert.match(dependabot, /cronjob:\s*"0 9 \* \* \*"/);
  assert.doesNotMatch(dependabot, /interval:\s*"daily"/);
  assert.doesNotMatch(dependabot, /interval:\s*"weekly"/);
  assert.doesNotMatch(dependabot, /time:\s*"/);
});

test("dependabot is configured to update npm fixture shims", async () => {
  const manifest = await readManifest();
  const dependabot = await readFile(".github/dependabot.yml", "utf8");

  for (const fixture of manifest.fixtures.filter((item) => item.package)) {
    assert.match(
      dependabot,
      new RegExp(
        `package-ecosystem:\\s*"npm"[\\s\\S]*directory:\\s*"\\/${escapeRegExp(
          fixture.path,
        )}"[\\s\\S]*interval:\\s*"cron"[\\s\\S]*cronjob:\\s*"[0-5][0-9] 9 \\* \\* \\*"`,
      ),
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
  assert.match(readme, /once per day/);

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
