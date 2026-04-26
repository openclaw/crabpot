import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

async function readWorkflow(path) {
  return (await readFile(path, "utf8")).replace(/\r\n/g, "\n");
}

test("manual OpenClaw ref workflow accepts branch tag or SHA inputs", async () => {
  const workflow = await readWorkflow(".github/workflows/openclaw-ref-compat.yml");

  assert.match(workflow, /openclaw_repository:/);
  assert.match(workflow, /openclaw_ref:/);
  assert.match(workflow, /base_openclaw_ref:/);
  assert.match(workflow, /head_openclaw_ref:/);
  assert.match(workflow, /TARGET_REF:/);
  assert.match(workflow, /ref: \$\{\{ env\.TARGET_REF \}\}/);
  assert.match(workflow, /node scripts\/check-contract-coverage\.mjs --openclaw \.\/openclaw/);
  assert.match(workflow, /node scripts\/platform-probes\.mjs --check --openclaw \.\/openclaw/);
  assert.match(workflow, /node scripts\/import-loop-profile\.mjs --check/);
});

test("manual OpenClaw ref workflow keeps isolated fixture execution opt-in", async () => {
  const workflow = await readWorkflow(".github/workflows/openclaw-ref-compat.yml");

  assert.match(workflow, /run_isolated_fixture:/);
  assert.match(workflow, /fixture:/);
  assert.match(workflow, /fixture_set:/);
  assert.match(workflow, /Resolve fixture matrix/);
  assert.match(workflow, /CRABPOT_EXECUTE_ISOLATED: "1"/);
  assert.match(workflow, /npm run workspace:execute -- --fixture/);
  assert.match(workflow, /npm run execution:report/);
});

test("manual OpenClaw ref workflow has diff and profile modes", async () => {
  const workflow = await readWorkflow(".github/workflows/openclaw-ref-compat.yml");

  assert.match(workflow, /mode:/);
  assert.match(workflow, /Compare base and head OpenClaw refs/);
  assert.match(workflow, /node scripts\/compare-openclaw-refs\.mjs/);
  assert.match(workflow, /node scripts\/compare-runtime-profile\.mjs/);
  assert.match(workflow, /node scripts\/check-ci-policy\.mjs \$\{\{ inputs\.strict_contract && '--strict' \|\| '' \}\}/);
  assert.match(workflow, /node scripts\/write-ci-summary\.mjs/);
});

test("default check workflow uploads policy and summary reports", async () => {
  const workflow = await readWorkflow(".github/workflows/check.yml");

  assert.match(workflow, /node scripts\/compare-runtime-profile\.mjs/);
  assert.match(workflow, /node scripts\/platform-probes\.mjs/);
  assert.match(workflow, /node scripts\/import-loop-profile\.mjs/);
  assert.match(workflow, /npm run plugin-inspector:smoke/);
  assert.match(workflow, /node scripts\/check-ci-policy\.mjs/);
  assert.match(workflow, /node scripts\/write-ci-summary\.mjs/);
  assert.match(workflow, /node scripts\/update-readme-summary\.mjs/);
  assert.match(workflow, /chore\(readme\): update crabpot dashboard \[skip ci\]/);
  assert.match(workflow, /actions\/upload-artifact@v7/);
});

test("default check workflow retests plugin submodule gitlink changes", async () => {
  const workflow = await readWorkflow(".github/workflows/check.yml");
  const triggerBlock = workflow.slice(workflow.indexOf("on:"), workflow.indexOf("permissions:"));

  assert.match(triggerBlock, /pull_request:/);
  assert.match(triggerBlock, /push:\n\s+branches: \[main\]/);
  assert.match(workflow, /submodules: recursive/);
  assert.doesNotMatch(triggerBlock, /paths:/);
  assert.doesNotMatch(triggerBlock, /paths-ignore:/);
  assert.match(workflow, /plugins\/\*\* must retest/);
});

test("default check workflow runs OS and container static lanes", async () => {
  const workflow = await readWorkflow(".github/workflows/check.yml");

  assert.match(workflow, /name: Static checks \(\$\{\{ matrix\.os \}\}\)/);
  assert.match(workflow, /os: \[ubuntu-latest, macos-latest, windows-latest\]/);
  assert.match(workflow, /container-smoke:/);
  assert.match(workflow, /image: node:22-bookworm/);
  assert.match(workflow, /npm run plugin-inspector:smoke/);
  assert.match(workflow, /crabpot-check-reports-\$\{\{ matrix\.os \}\}/);
});

test("default check workflow resolves changed submodules into an isolated fixture matrix", async () => {
  const workflow = await readWorkflow(".github/workflows/check.yml");

  assert.match(workflow, /changed-fixture-plan:/);
  assert.match(workflow, /--fixture-set changed-submodules/);
  assert.match(workflow, /--base-ref "\$\{\{ steps\.refs\.outputs\.base \}\}"/);
  assert.match(workflow, /changed-isolated-fixture:/);
  assert.match(workflow, /matrix: \$\{\{ fromJson\(needs\.changed-fixture-plan\.outputs\.matrix\) \}\}/);
  assert.match(workflow, /npm run workspace:execute -- --fixture "\$\{\{ matrix\.id \}\}" --allow-empty/);
});

test("workflows use Node 24 action majors", async () => {
  const workflows = [
    await readWorkflow(".github/workflows/check.yml"),
    await readWorkflow(".github/workflows/openclaw-ref-compat.yml"),
    await readWorkflow(".github/workflows/dependabot-auto-merge.yml"),
  ].join("\n");
  const actionRefs = [
    ...workflows.matchAll(/uses:\s+(actions\/(?:checkout|setup-node|upload-artifact)@[^\s]+)/g),
  ].map((match) => match[1]);

  assert.deepEqual([...new Set(actionRefs)].sort(), [
    "actions/checkout@v6",
    "actions/setup-node@v6",
    "actions/upload-artifact@v7",
  ]);
  assert.doesNotMatch(workflows, /actions\/(checkout|setup-node|upload-artifact)@v4/);
  assert.doesNotMatch(workflows, /FORCE_JAVASCRIPT_ACTIONS_TO_NODE24/);
});

test("dependabot auto-merge refreshes reports after fixture pin updates", async () => {
  const workflow = await readWorkflow(".github/workflows/dependabot-auto-merge.yml");

  assert.match(workflow, /pull_request_target:/);
  assert.match(workflow, /dependabot\[bot\]/);
  assert.match(workflow, /github\.event\.pull_request\.head\.repo\.full_name == github\.repository/);
  assert.match(workflow, /Verify Dependabot changed only fixture pins/);
  assert.ok(workflow.includes("^plugins/[^/]+$"));
  assert.ok(workflow.includes("^plugins/[^/]+/package(-lock)?\\.json$"));
  assert.match(workflow, /node scripts\/sync-fixtures\.mjs --materialize/);
  assert.match(workflow, /node scripts\/generate-report\.mjs --openclaw \.\/openclaw/);
  assert.match(workflow, /node scripts\/update-readme-summary\.mjs/);
  assert.match(workflow, /git add README\.md reports\//);
  assert.match(workflow, /gh pr merge "\$\{PR_NUMBER\}" --auto --squash --delete-branch/);
});

test("manual workflow enforces strict runtime profile policy before best-effort summaries", async () => {
  const workflow = await readWorkflow(".github/workflows/openclaw-ref-compat.yml");
  const policySteps = [...workflow.matchAll(/- name: Run runtime profile policy\n(?<body>(?:        .*\n)+)/g)].map(
    (match) => match.groups.body,
  );

  assert.equal(policySteps.length, 2);
  for (const step of policySteps) {
    assert.match(step, /node scripts\/compare-runtime-profile\.mjs \$\{\{ inputs\.strict_perf && '--strict' \|\| '' \}\}/);
    assert.doesNotMatch(step, /continue-on-error/);
  }
  assert.ok(policySteps.some((step) => step.includes("node scripts/profile-contract-runtime.mjs --openclaw ./openclaw-head")));
});

test("manual workflow keeps isolated execution artifacts and failure policy wired", async () => {
  const workflow = await readWorkflow(".github/workflows/openclaw-ref-compat.yml");

  assert.match(
    workflow,
    /id: execute[\s\S]*continue-on-error: true[\s\S]*CRABPOT_EXECUTE_ISOLATED: "1"[\s\S]*npm run workspace:execute -- --fixture "\$\{\{ matrix\.id \}\}" --allow-empty/,
  );
  assert.match(workflow, /id: policy[\s\S]*continue-on-error: true[\s\S]*node scripts\/check-ci-policy\.mjs/);
  assert.match(workflow, /path: \|[\s\S]*\.crabpot\/results\/[\s\S]*reports\/crabpot-execution-results\.\*[\s\S]*reports\/crabpot-ci-policy\.\*[\s\S]*reports\/crabpot-ci-summary\.\*/);
  assert.match(workflow, /steps\.execute\.outcome == 'failure' \|\| steps\.policy\.outcome == 'failure'/);
});
