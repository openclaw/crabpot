import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const wrapper = fileURLToPath(new URL("../scripts/run-resource-campaign-docker.sh", import.meta.url));
const posix = { skip: process.platform === "win32" };
// Only the Docker command transport is replaced. Execute the real outer owner's
// closure and EXIT trap, including command substitution and shell exit semantics.
const fakeDocker = `
removed=0
docker_e2e_docker_cmd() {
  [ "$DOCKER_COMMAND_TIMEOUT" = 30s ] || return 90
  printf 'docker %s\\n' "$*" >&2
  if [ "$1" = rm ]; then
    [ "$*" = 'rm -f owned-campaign' ] || return 91
    if [ "$PROBE_CASE" != remains ]; then removed=1; fi
    [ "$PROBE_CASE" != removal-error ] || return 7
    return 0
  fi
  [ "$*" = 'container ls --all --format {{.Names}}' ] || return 92
  [ "$PROBE_CASE" != daemon-error ] || return 8
  [ "$PROBE_CASE" != daemon-after-remove ] || [ "$removed" = 0 ] || return 8
  case "$PROBE_CASE" in
    absent) ;;
    neighbor) printf '%s\\n' owned-campaign-other ;;
    large-first)
      printf '%s\\n' owned-campaign
      for ((index=0; index<30000; index++)); do printf 'other-container-%06d\\n' "$index"; done
      ;;
    *) if [ "$removed" = 0 ]; then printf '%s\\n' owned-campaign; fi ;;
  esac
}
`;
function shell(code, env = {}) {
  return spawnSync("/bin/bash", ["-c", `source "$PROBE_WRAPPER"\n${fakeDocker}\n${code}`], {
    encoding: "utf8", timeout: 10_000,
    env: { ...process.env, PROBE_WRAPPER: wrapper, ...env },
  });
}

for (const [scenario, status, removes] of [
  ["absent", 0, false], ["neighbor", 0, false], ["removed", 0, true],
  ["remains", 1, true], ["daemon-error", 2, false],
  ["daemon-after-remove", 2, true], ["removal-error", 3, true],
]) {
  test(`closure: ${scenario}`, posix, () => {
    const result = shell('resource_close_container owned-campaign', { PROBE_CASE: scenario });
    assert.ifError(result.error);
    assert.equal(result.status, status, result.stderr);
    assert.equal(result.stderr.includes('docker rm -f owned-campaign'), removes);
    if (removes) assert.equal((result.stderr.match(/docker container ls/g) ?? []).length, 2);
  });
}

for (const [original, scenario, admitted, expected, cleanup, closure] of [
  [0, "absent", 1, 0, 0, "confirmed-absent"],
  [42, "absent", 1, 42, 0, "confirmed-absent"],
  [42, "daemon-error", 1, 42, 2, "unknown"],
  [0, "remains", 1, 1, 1, "unknown"],
  [0, "removal-error", 1, 1, 3, "unknown"],
  [5, "absent", 0, 5, 0, "not-started"],
]) {
  test(`EXIT preserves workload ${original}, cleanup ${scenario}, admitted ${admitted}`, posix, () => {
    const out = mkdtempSync(path.join(os.tmpdir(), "resource-closure-test-"));
    try {
      const result = shell(`resource_out="$PROBE_OUT"
resource_name=owned-campaign
resource_admitted=${admitted}
trap resource_finish EXIT
exit ${original}`, { PROBE_CASE: scenario, PROBE_OUT: out });
      assert.ifError(result.error);
      assert.equal(result.status, expected, result.stderr);
      assert.deepEqual(JSON.parse(readFileSync(path.join(out, "closure.json"), "utf8")), {
        schemaVersion: 1, workloadExit: original, cleanupExit: cleanup, closure, container: "owned-campaign",
      });
      assert.equal(result.stderr.includes('[resource-campaign-docker] FAILED'), expected !== 0);
    } finally { rmSync(out, { recursive: true, force: true }); }
  });
}

test("invalid host pin refuses preparation", posix, () => {
  const result = spawnSync("/bin/bash", [wrapper, ".", ".", "main"], { encoding: "utf8", timeout: 10_000 });
  assert.ifError(result.error);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /usage:/);
});

test("workflow admits only the fixed repository's main and retains failed evidence", () => {
  const workflow = readFileSync(new URL("../.github/workflows/resource-campaign.yml", import.meta.url), "utf8").replace(/\r\n/g, "\n");
  assert.equal(workflow.match(/^on:\n([\s\S]*?)\npermissions:/m)?.[1],
    '  workflow_dispatch:\n  schedule:\n    - cron: "43 3 * * *"\n');
  assert.match(workflow, /runs-on: ubuntu-24\.04/);
  assert.match(workflow, /github.repository == 'openclaw\/crabpot' && github.ref == 'refs\/heads\/main'/);
  assert.equal((workflow.match(/persist-credentials: false/g) ?? []).length, 2);
  assert.match(workflow, /if: always\(\)/);
  assert.doesNotMatch(workflow, /pull_request|secrets\.|contents: write|continue-on-error/);
});


test("target first in a large listing cannot become false absence through SIGPIPE", posix, () => {
  const result = shell('resource_container_absent owned-campaign', { PROBE_CASE: "large-first" });
  assert.ifError(result.error);
  assert.equal(result.status, 1, result.stderr);
});

test("matcher failure is unknown rather than absent", posix, () => {
  const result = shell('grep() { cat >/dev/null; return 2; }; resource_container_absent owned-campaign', { PROBE_CASE: "absent" });
  assert.ifError(result.error);
  assert.equal(result.status, 4, result.stderr);
});

test("refused output reuse preserves an earlier closure receipt before any preparation", posix, () => {
  const out = mkdtempSync(path.join(os.tmpdir(), "resource-existing-output-test-"));
  const sentinel = '{"earlier":"closure receipt"}\n';
  try {
    writeFileSync(path.join(out, "closure.json"), sentinel);
    const result = shell('git() { echo unexpected-preparation >&2; return 99; }; resource_main . "$PROBE_OUT" "$PROBE_SHA"', {
      PROBE_OUT: out, PROBE_SHA: "a".repeat(40),
    });
    assert.ifError(result.error);
    assert.equal(result.status, 2, result.stderr);
    assert.equal(readFileSync(path.join(out, "closure.json"), "utf8"), sentinel);
    assert.equal(existsSync(path.join(out, ".resource-campaign-owner")), false);
    assert.doesNotMatch(result.stderr, /unexpected-preparation/);
  } finally { rmSync(out, { recursive: true, force: true }); }
});

test("a claimed attempt records preparation failure and refuses a second writer", posix, () => {
  const out = mkdtempSync(path.join(os.tmpdir(), "resource-output-claim-test-"));
  try {
    const env = { PROBE_OUT: out, PROBE_SHA: "a".repeat(40) };
    const failed = shell('git() { return 9; }; resource_main . "$PROBE_OUT" "$PROBE_SHA"', env);
    assert.ifError(failed.error);
    assert.notEqual(failed.status, 0);
    const receipt = readFileSync(path.join(out, "closure.json"), "utf8");
    assert.equal(JSON.parse(receipt).closure, "not-started");
    assert.equal(existsSync(path.join(out, ".resource-campaign-owner")), true);
    const reused = shell('resource_main . "$PROBE_OUT" "$PROBE_SHA"', env);
    assert.ifError(reused.error);
    assert.equal(reused.status, 2, reused.stderr);
    assert.equal(readFileSync(path.join(out, "closure.json"), "utf8"), receipt);
  } finally { rmSync(out, { recursive: true, force: true }); }
});

test("an existing attempt claim rejects a second owner even without a receipt", posix, () => {
  const out = mkdtempSync(path.join(os.tmpdir(), "resource-output-owner-test-"));
  try {
    const result = shell('resource_reserve_output "$PROBE_OUT"; resource_reserve_output "$PROBE_OUT"', { PROBE_OUT: out });
    assert.ifError(result.error);
    assert.notEqual(result.status, 0);
    assert.equal(existsSync(path.join(out, "closure.json")), false);
  } finally { rmSync(out, { recursive: true, force: true }); }
});
