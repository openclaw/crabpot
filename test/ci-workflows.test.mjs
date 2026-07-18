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
  assert.match(workflow, /strict_contract:[\s\S]*default: true/);
  assert.match(workflow, /SUITE_POLICY: \$\{\{ inputs\.strict_contract && 'release' \|\| 'dashboard' \}\}/);
  assert.match(workflow, /node scripts\/run-static-suite\.mjs --openclaw \.\/openclaw --policy "\$\{SUITE_POLICY\}"/);
  assert.match(workflow, /--plugin-inspector-smoke/);
  assert.match(workflow, /node scripts\/check-contract-coverage\.mjs --openclaw \.\/openclaw/);
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

  assert.match(workflow, /node scripts\/run-static-suite\.mjs[\s\S]*--openclaw \.\/openclaw[\s\S]*--plugin-inspector-smoke/);
  assert.match(workflow, /node scripts\/check-ci-policy\.mjs/);
  assert.match(workflow, /node scripts\/write-ci-summary\.mjs/);
  assert.match(workflow, /node scripts\/update-track-metadata\.mjs --default-pin-openclaw \.\/openclaw/);
  const dashboardBlock = workflow.slice(workflow.indexOf("  dashboard:"));
  assert.match(dashboardBlock, /if: \$\{\{ always\(\) && github\.event_name != 'pull_request'/);
  assert.match(dashboardBlock, /pnpm --dir openclaw install --frozen-lockfile --ignore-scripts/);
  assert.match(dashboardBlock, /node scripts\/import-loop-profile\.mjs --openclaw \.\/openclaw --runs 3/);
  assert.match(workflow, /--baseline-data \.crabpot\/baseline\/main-dashboard-data\.json/);
  assert.match(workflow, /node scripts\/update-readme-summary\.mjs "\$\{baseline_arg\[@\]\}"/);
  assert.match(workflow, /chore\(readme\): update crabpot dashboard \[skip ci\]/);
  assert.match(workflow, /Skipped stale dashboard push/);
  assert.match(workflow, /actions\/upload-artifact@v7/);
});

test("default check workflow retests plugin submodule gitlink changes", async () => {
  const workflow = await readWorkflow(".github/workflows/check.yml");
  const triggerBlock = workflow.slice(workflow.indexOf("on:"), workflow.indexOf("permissions:"));

  assert.match(triggerBlock, /pull_request:/);
  assert.match(triggerBlock, /push:\n\s+branches: \[main, crab-beta, crab-development\]/);
  assert.match(workflow, /submodules: recursive/);
  assert.doesNotMatch(triggerBlock, /paths:/);
  assert.doesNotMatch(triggerBlock, /paths-ignore:/);
  assert.match(workflow, /plugins\/\*\* must retest/);
});

test("track dashboard workflow refreshes branch dashboards by OpenClaw track", async () => {
  const workflow = await readWorkflow(".github/workflows/track-dashboard.yml");

  assert.match(workflow, /schedule:/);
  assert.match(workflow, /cron: "7,22,37,52 \* \* \* \*"/);
  assert.match(workflow, /crabpot-track-dashboard-\$\{\{ github\.event_name == 'workflow_dispatch' && 'manual' \|\| 'schedule' \}\}-/);
  assert.match(workflow, /github\.event_name == 'workflow_dispatch' && inputs\.track \|\| matrix\.track \}\}-\$\{\{ matrix\.track \}\}/);
  assert.doesNotMatch(workflow, /inputs\.track == 'all' && matrix\.track \|\| inputs\.track/);
  assert.match(workflow, /cancel-in-progress: true/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /track:/);
  assert.match(workflow, /branch: crab-beta/);
  assert.match(workflow, /branch: crab-development/);
  assert.match(workflow, /fixture_set: openclaw-beta/);
  assert.match(workflow, /track: latest[\s\S]*plugin_track: latest/);
  assert.match(workflow, /track: beta[\s\S]*plugin_track: beta/);
  assert.match(workflow, /plugin_track: source-pack/);
  assert.match(workflow, /ref: main/);
  assert.match(workflow, /node scripts\/resolve-openclaw-track\.mjs --track "\$\{\{ matrix\.track \}\}" --github-output/);
  assert.match(workflow, /ref: \$\{\{ steps\.openclaw-track\.outputs\.ref \}\}/);
  assert.match(workflow, /node scripts\/run-static-suite\.mjs[\s\S]*--openclaw \.\/openclaw[\s\S]*--plugin-inspector-smoke/);
  assert.match(workflow, /CRABPOT_FIXTURE_SET: \$\{\{ matrix\.fixture_set \}\}/);
  assert.match(workflow, /CRABPOT_PLUGIN_TRACK: \$\{\{ matrix\.plugin_track \}\}/);
  assert.match(workflow, /CRABPOT_WORKSPACE_STEP_TIMEOUT_MS: "300000"/);
  assert.match(workflow, /corepack prepare "\$\(node -p "require\('\.\/openclaw\/package\.json'\)\.packageManager\.split\('\+'\)\[0\]"\)" --activate/);
  assert.match(workflow, /pnpm --dir openclaw install --frozen-lockfile --ignore-scripts/);
  assert.match(workflow, /execution_fixture_set="all"/);
  assert.match(workflow, /rm -rf reports[\s\S]*mkdir -p reports[\s\S]*execution_fixture_set/);
  assert.match(workflow, /node scripts\/execute-workspace-plan\.mjs --fixture-set "\$\{execution_fixture_set\}" --openclaw \.\/openclaw --continue-on-error/);
  assert.match(workflow, /node scripts\/summarize-execution-results\.mjs --write/);
  assert.match(workflow, /execution_results_args=\(--execution-results reports\/crabpot-execution-results\.json\)/);
  assert.match(workflow, /node scripts\/generate-report\.mjs --openclaw \.\/openclaw "\$\{execution_results_args\[@\]\}"/);
  assert.match(workflow, /run_profile_step\(\)/);
  assert.match(workflow, /run_openclaw_import_loop_profile\(\)/);
  assert.match(workflow, /run_profile_step 180 "OpenClaw lifecycle import-loop profile failed or timed out; falling back to fixture-only import-loop profile" node scripts\/import-loop-profile\.mjs --openclaw \.\/openclaw --runs 3/);
  assert.match(workflow, /run_profile_step 90 "fixture-only import-loop profile failed or timed out; continuing without refreshed import-loop metrics" node scripts\/import-loop-profile\.mjs --runs 3 \|\| true/);
  assert.match(workflow, /run_openclaw_runtime_profile\(\)/);
  assert.match(workflow, /run_profile_step 240 "OpenClaw runtime profile failed or timed out; falling back to fixture-only runtime profile" node scripts\/profile-contract-runtime\.mjs --openclaw \.\/openclaw --runs 3/);
  assert.match(workflow, /run_profile_step 120 "fixture-only runtime profile failed or timed out; continuing without refreshed runtime metrics" node scripts\/profile-contract-runtime\.mjs --runs 3 \|\| true/);
  assert.match(workflow, /if \[ -f reports\/crabpot-runtime-profile\.json \]; then[\s\S]*node scripts\/compare-runtime-profile\.mjs[\s\S]*Runtime profile was not refreshed; skipping runtime profile diff/);
  assert.match(workflow, /node scripts\/update-track-metadata\.mjs --track "\$\{\{ matrix\.track \}\}"/);
  assert.match(workflow, /origin\/main:reports\/crabpot-dashboard-data\.json/);
  assert.match(workflow, /baseline_args=\(\)/);
  assert.match(workflow, /node scripts\/update-readme-summary\.mjs "\$\{baseline_args\[@\]\}"/);
  assert.match(workflow, /git push origin HEAD:\$\{\{ matrix\.branch \}\}/);
  assert.match(workflow, /git fetch --no-tags --depth=1 origin "\+refs\/heads\/\$\{\{ matrix\.branch \}\}:refs\/remotes\/origin\/\$\{\{ matrix\.branch \}\}"/);
  assert.match(workflow, /lease="\$\(git rev-parse "refs\/remotes\/origin\/\$\{\{ matrix\.branch \}\}"\)"/);
  assert.match(workflow, /git push --force-with-lease="refs\/heads\/\$\{\{ matrix\.branch \}\}:\$\{lease\}" origin HEAD:\$\{\{ matrix\.branch \}\}/);
  assert.match(workflow, /always\(\) && !cancelled\(\) && steps\.select\.outputs\.run == 'true'/);
});

test("default check workflow runs OS and container static lanes", async () => {
  const workflow = await readWorkflow(".github/workflows/check.yml");

  assert.match(workflow, /name: Default Track \/ Static checks \(\$\{\{ matrix\.os \}\}\)/);
  assert.match(workflow, /os: \[ubuntu-latest, macos-15, windows-latest\]/);
  assert.match(workflow, /container-smoke:/);
  assert.match(workflow, /image: node:22-bookworm/);
  assert.match(workflow, /node scripts\/openclaw-pin\.mjs --github-output/);
  assert.doesNotMatch(workflow, /node scripts\/resolve-openclaw-track\.mjs --github-output/);
  assert.doesNotMatch(workflow, /node scripts\/update-track-metadata\.mjs\n/);
  assert.match(workflow, /node scripts\/run-static-suite\.mjs[\s\S]*--openclaw \.\/openclaw[\s\S]*--plugin-inspector-smoke/);
  assert.match(workflow, /--plugin-track "\$\{plugin_track\}"/);
  assert.match(workflow, /--fixture-set openclaw-beta --plugin-track source-pack/);
  assert.match(workflow, /crabpot-default-track-reports-\$\{\{ matrix\.os \}\}/);
  assert.match(workflow, /name: Default Track \(pinned OpenClaw\)/);
  assert.match(workflow, /needs: \[manifest, container-smoke, changed-fixture-plan, changed-isolated-fixture\]/);
});

test("HEAD canary is advisory, runs the Default Track suite on main, and uploads reports", async () => {
  const workflow = await readWorkflow(".github/workflows/openclaw-head-canary.yml");

  assert.match(workflow, /name: OpenClaw HEAD Canary \(Advisory\)/);
  assert.match(workflow, /name: HEAD Canary \/ Resolve OpenClaw HEAD/);
  assert.match(workflow, /sha: \$\{\{ steps\.openclaw-head\.outputs\.sha \}\}/);
  assert.match(workflow, /name: HEAD Canary \(advisory, \$\{\{ matrix\.os \}\}\)/);
  assert.match(workflow, /needs: resolve-head/);
  assert.match(workflow, /continue-on-error: true/);
  assert.match(workflow, /repository: openclaw\/openclaw\n\s+ref: main/);
  assert.match(workflow, /repository: openclaw\/openclaw\n\s+ref: \$\{\{ needs\.resolve-head\.outputs\.sha \}\}/);
  assert.match(workflow, /pnpm --dir openclaw install --frozen-lockfile --ignore-scripts/);
  assert.match(workflow, /Check npm latest metadata[\s\S]*continue-on-error: true[\s\S]*node scripts\/resolve-openclaw-track\.mjs --track latest --warn-missing-tag/);
  assert.match(workflow, /Run Default Track suite against HEAD/);
  assert.match(workflow, /--openclaw-track latest/);
  assert.match(workflow, /--plugin-track latest/);
  assert.match(workflow, /run_report\(\)[\s\S]*report_failed=1/);
  assert.match(workflow, /node scripts\/import-loop-profile\.mjs --openclaw \.\/openclaw --runs 3/);
  assert.match(workflow, /exit "\$\{report_failed\}"/);
  assert.match(workflow, /Upload HEAD canary reports/);
  assert.match(workflow, /crabpot-openclaw-head-canary-\$\{\{ matrix\.os \}\}/);
});

test("scheduled Default Track pin age gate enforces the 14-day SLA", async () => {
  const workflow = await readWorkflow(".github/workflows/openclaw-pin-age.yml");

  assert.match(workflow, /schedule:/);
  assert.match(workflow, /name: Default Track pin age \(14-day SLA\)/);
  assert.match(workflow, /node scripts\/openclaw-pin\.mjs --check-age --max-age-days 14/);
});

test("default check workflow resolves changed submodules into an isolated fixture matrix", async () => {
  const workflow = await readWorkflow(".github/workflows/check.yml");

  assert.match(workflow, /changed-fixture-plan:/);
  assert.match(workflow, /set -euo pipefail/);
  assert.match(workflow, /git fetch --no-tags --depth=1 origin "\$\{refs\[@\]\}"/);
  assert.doesNotMatch(workflow, /git fetch --no-tags --depth=1 origin "\$base" "\$head" \|\| true/);
  assert.match(workflow, /--fixture-set changed-submodules/);
  assert.match(workflow, /--base-ref "\$\{\{ steps\.refs\.outputs\.base \}\}"/);
  assert.match(workflow, /changed-isolated-fixture:/);
  assert.match(workflow, /matrix: \$\{\{ fromJson\(needs\.changed-fixture-plan\.outputs\.matrix\) \}\}/);
  assert.match(
    workflow,
    /Materialize fixture payload[\s\S]*CRABPOT_FIXTURE_SET: \$\{\{ matrix\.id \}\}[\s\S]*CRABPOT_PLUGIN_TRACK: \$\{\{ steps\.openclaw-track\.outputs\.track == 'development' && 'source-pack' \|\| steps\.openclaw-track\.outputs\.track \}\}[\s\S]*node scripts\/sync-fixtures\.mjs --materialize --openclaw \.\/openclaw/,
  );
  assert.match(workflow, /npm run workspace:execute -- --fixture "\$\{\{ matrix\.id \}\}" --allow-empty/);
  assert.match(workflow, /node scripts\/generate-report\.mjs --openclaw \.\/openclaw --execution-results reports\/crabpot-execution-results\.json --fixture-set "\$\{\{ matrix\.id \}\}"/);
  assert.match(workflow, /Fail if isolated policy failed/);
  assert.match(workflow, /steps\.policy\.outcome == 'failure'/);
  assert.doesNotMatch(workflow, /steps\.execute\.outcome == 'failure' \|\| steps\.policy\.outcome == 'failure'/);
});

test("workflows use current action majors and dependency caches", async () => {
  const workflows = [
    await readWorkflow(".github/workflows/check.yml"),
    await readWorkflow(".github/workflows/openclaw-ref-compat.yml"),
    await readWorkflow(".github/workflows/dependabot-auto-merge.yml"),
    await readWorkflow(".github/workflows/openclaw-head-canary.yml"),
    await readWorkflow(".github/workflows/openclaw-pin-age.yml"),
    await readWorkflow(".github/workflows/track-dashboard.yml"),
  ].join("\n");
  const actionRefs = [
    ...workflows.matchAll(/uses:\s+(actions\/(?:checkout|setup-node|upload-artifact)@[^\s]+)/g),
  ].map((match) => match[1]);

  assert.deepEqual([...new Set(actionRefs)].sort(), [
    "actions/checkout@v6",
    "actions/setup-node@v6",
    "actions/upload-artifact@v7",
  ]);
  assert.match(workflows, /cache: npm/);
  assert.match(workflows, /cache-dependency-path: \|/);
  assert.doesNotMatch(workflows, /actions\/(checkout|setup-node|upload-artifact)@v4/);
  assert.doesNotMatch(workflows, /FORCE_JAVASCRIPT_ACTIONS_TO_NODE24/);
});

test("dependabot auto-merge refreshes reports after fixture pin updates", async () => {
  const workflow = await readWorkflow(".github/workflows/dependabot-auto-merge.yml");

  assert.match(workflow, /pull_request_target:/);
  assert.match(workflow, /group: crabpot-dependabot-automerge-\$\{\{ github\.event\.pull_request\.base\.ref \}\}/);
  assert.match(workflow, /cancel-in-progress: false/);
  assert.match(workflow, /dependabot\[bot\]/);
  assert.match(workflow, /github\.event\.pull_request\.head\.repo\.full_name == github\.repository/);
  assert.match(workflow, /Install Crabpot dependencies[\s\S]*npm install --no-package-lock/);
  assert.match(workflow, /Update Dependabot branch with base/);
  assert.match(workflow, /git merge --no-edit "origin\/\$\{\{ github\.event\.pull_request\.base\.ref \}\}"/);
  assert.match(workflow, /Verify Dependabot changed only fixture pins and generated reports/);
  assert.ok(workflow.includes('"$file" == "README.md"'));
  assert.ok(workflow.includes('^reports/'));
  assert.ok(workflow.includes("^plugins/[^/]+$"));
  assert.ok(workflow.includes("^plugins/[^/]+/package(-lock)?\\.json$"));
  assert.match(workflow, /node scripts\/sync-fixtures\.mjs --materialize/);
  assert.match(workflow, /node scripts\/resolve-openclaw-track\.mjs --branch "\$\{\{ github\.event\.pull_request\.base\.ref \}\}" --github-output/);
  assert.match(workflow, /node scripts\/generate-report\.mjs --openclaw \.\/openclaw/);
  assert.match(workflow, /CRABPOT_TEST_OPENCLAW_PATH: \.\/openclaw/);
  assert.match(workflow, /pnpm --dir openclaw install --frozen-lockfile --ignore-scripts/);
  assert.match(workflow, /node scripts\/import-loop-profile\.mjs --openclaw \.\/openclaw --runs 3/);
  assert.match(workflow, /node scripts\/update-track-metadata\.mjs/);
  assert.match(workflow, /--baseline-data \.crabpot\/baseline\/main-dashboard-data\.json/);
  assert.match(workflow, /node scripts\/update-readme-summary\.mjs "\$\{baseline_args\[@\]\}"/);
  assert.match(workflow, /git add README\.md reports\//);
  assert.match(workflow, /gh pr view "\$\{PR_NUMBER\}" --json mergeable,mergeStateStatus,statusCheckRollup/);
  assert.match(workflow, /\(\.workflowName \/\/ ""\) != "Dependabot Auto Merge"/);
  assert.match(workflow, /failed status check\(s\); refusing auto-merge/);
  assert.match(workflow, /waiting for mergeability and green checks/);
  assert.match(workflow, /gh pr merge "\$\{PR_NUMBER\}" --squash --delete-branch/);
  assert.doesNotMatch(workflow, /gh pr merge "\$\{PR_NUMBER\}" --squash --auto/);
});

test("crabbox hydrate validates the job key before writing state", async () => {
  const workflow = await readWorkflow(".github/workflows/crabbox-hydrate.yml");

  assert.match(workflow, /case "\$job" in/);
  assert.match(workflow, /Invalid crabbox_job/);
  assert.match(workflow, /JOB=\$\{job\}/);
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

test("manual workflow writes OpenClaw lifecycle import profile artifacts", async () => {
  const workflow = await readWorkflow(".github/workflows/openclaw-ref-compat.yml");

  assert.match(workflow, /pnpm --dir openclaw install --frozen-lockfile --ignore-scripts/);
  assert.match(workflow, /node scripts\/import-loop-profile\.mjs --openclaw \.\/openclaw --runs "\$\{PROFILE_RUNS\}"/);
});

test("manual workflow keeps isolated execution artifacts and failure policy wired", async () => {
  const workflow = await readWorkflow(".github/workflows/openclaw-ref-compat.yml");

  assert.match(
    workflow,
    /id: execute[\s\S]*continue-on-error: true[\s\S]*CRABPOT_EXECUTE_ISOLATED: "1"[\s\S]*npm run workspace:execute -- --fixture "\$\{\{ matrix\.id \}\}" --allow-empty/,
  );
  assert.match(workflow, /id: policy[\s\S]*continue-on-error: true[\s\S]*node scripts\/check-ci-policy\.mjs/);
  assert.match(workflow, /node scripts\/generate-report\.mjs --openclaw \.\/openclaw --execution-results reports\/crabpot-execution-results\.json --fixture-set "\$\{\{ matrix\.id \}\}"/);
  assert.match(workflow, /path: \|[\s\S]*\.crabpot\/results\/[\s\S]*reports\/crabpot-execution-results\.\*[\s\S]*reports\/crabpot-ci-policy\.\*[\s\S]*reports\/crabpot-ci-summary\.\*/);
  assert.match(workflow, /steps\.execute\.outcome == 'failure' \|\| steps\.policy\.outcome == 'failure'/);
});
