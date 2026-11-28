import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { parseArgs } from "node:util";
import { pathToFileURL } from "node:url";
import path from "node:path";

const REPOSITORY = "openclaw/crabpot";
const PREFIX = "automation/dashboard/";
const PATHS = ["README.md", "reports/"];
const CONTEXT = "Default Track (pinned OpenClaw)";

function command(program, args) {
  return execFileSync(program, args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    timeout: 120_000,
    maxBuffer: 8 * 1024 * 1024,
  }).trim();
}

const nativeGit = (...args) =>
  command("git", ["-c", "gc.auto=0", "-c", "maintenance.auto=false", ...args]);
function nativeApi(endpoint, { method = "GET", fields = {}, paginate = false } = {}) {
  const args = ["api", endpoint, "--method", method];
  if (paginate) args.push("--paginate", "--slurp");
  for (const [key, value] of Object.entries(fields)) args.push("-f", `${key}=${value}`);
  return JSON.parse(command("gh", args));
}

function sha(value) {
  assert.match(value ?? "", /^[a-f0-9]{40}$/u, "Expected an immutable dashboard SHA");
  return value;
}

// The CLI owns GitHub I/O; the same publication flow also accepts a local Git
// repository and API fixture so its squash receipts can be tested on every OS.
export async function publishDashboard({
  mode,
  source,
  validated = false,
  env = process.env,
  git = nativeGit,
  api = nativeApi,
  log = console.log,
} = {}) {
  const deadline = Date.now() + 5 * 60_000;
  const request = async (...args) => {
    assert(Date.now() < deadline, "Dashboard publication timed out; retained reports need review");
    return api(...args);
  };
  const endpoint = `repos/${REPOSITORY}`;
  const currentMain = async () => sha((await request(`${endpoint}/git/ref/heads/main`)).object.sha);
  const pulls = async (branch) =>
    (
      await request(`${endpoint}/pulls?state=all&base=main&head=openclaw:${branch}&per_page=100`, {
        paginate: true,
      })
    )
      .flat()
      .filter((pr) => pr.head?.repo?.full_name === REPOSITORY && pr.head.ref === branch);
  const holdReports = async (ownBranch) => {
    const refs = await request(`${endpoint}/git/matching-refs/heads/${PREFIX}`);
    assert(Array.isArray(refs), "Could not enumerate retained dashboard refs");
    for (const ref of refs) {
      const branch = ref.ref.slice("refs/heads/".length);
      assert(branch.startsWith(PREFIX), "Unexpected dashboard branch");
      if (branch === ownBranch) continue;
      const candidates = await pulls(branch);
      assert(
        candidates.some((pr) => pr.merged_at && pr.head.sha === ref.object.sha),
        `Resolve retained dashboard https://github.com/${REPOSITORY}/tree/${branch} before publishing another`,
      );
    }
  };
  const assertPr = (pr, head) => {
    assert.equal(pr.head?.repo?.full_name, REPOSITORY, "Unexpected dashboard source repository");
    assert.equal(
      pr.base?.repo?.full_name,
      REPOSITORY,
      "Unexpected dashboard destination repository",
    );
    assert.equal(pr.base?.ref, "main", "Unexpected dashboard destination branch");
    assert.equal(pr.head?.sha, head, "Dashboard PR head changed");
  };
  assert.equal(env.GITHUB_REPOSITORY, REPOSITORY, "Unexpected dashboard repository");
  assert.equal(env.DASHBOARD_TARGET_BRANCH, "main", "This publisher owns only main dashboards");
  source = sha(source ?? env.DASHBOARD_SOURCE_SHA);
  assert.equal(
    git("rev-parse", "HEAD"),
    source,
    "Dashboard source differs from the validated checkout",
  );
  assert.equal(git("diff", "--cached", "--name-only"), "", "Dashboard index was already staged");
  if (mode === "preflight") {
    await holdReports();
    assert.equal(
      await currentMain(),
      source,
      "Dashboard source is stale; a current-source run must generate it",
    );
    return;
  }
  assert.equal(mode, "publish", "Use preflight or publish");
  for (const key of ["GITHUB_RUN_ID", "GITHUB_RUN_ATTEMPT"]) {
    assert.match(env[key] ?? "", /^\d+$/u, `Missing ${key}`);
  }
  const runUrl = `https://github.com/${REPOSITORY}/actions/runs/${env.GITHUB_RUN_ID}`;
  assert.equal(env.CRABPOT_RUN_URL, runUrl, "Unexpected dashboard validation run URL");
  git("diff", "--check", "--", ...PATHS);
  git("add", "--", ...PATHS);
  const changed = git("diff", "--cached", "--name-only").split("\n").filter(Boolean);
  assert(
    changed.every((name) => name === "README.md" || name.startsWith("reports/")),
    "Dashboard commit contains unowned paths",
  );
  if (!changed.length) {
    log("No dashboard changes to publish.");
    return;
  }
  assert(
    !git("ls-files", "--stage", "--", ...PATHS)
      .split("\n")
      .some((line) => line.startsWith("120000 ")),
    "Dashboard paths must not contain symlinks",
  );
  git(
    "-c",
    "user.name=github-actions[bot]",
    "-c",
    "user.email=41898282+github-actions[bot]@users.noreply.github.com",
    "-c",
    "commit.gpgsign=false",
    "-c",
    "core.hooksPath=/dev/null",
    "commit",
    "-m",
    "chore(readme): refresh crabpot dashboard",
  );
  const head = sha(git("rev-parse", "HEAD"));
  const expected = git("ls-tree", "-r", head, "--", ...PATHS);
  const branch = `${PREFIX}${env.GITHUB_RUN_ID}-${env.GITHUB_RUN_ATTEMPT}-${validated ? "validated" : "latest"}`;
  // Preserve generated reports before checking whether main moved during the
  // expensive inspection. A stale payload stays reviewable; it is never rebased.
  git("push", "origin", `HEAD:refs/heads/${branch}`);
  log(`Dashboard retained at https://github.com/${REPOSITORY}/tree/${branch} (${head})`);
  let pr;
  try {
    pr = await request(`${endpoint}/pulls`, {
      method: "POST",
      fields: {
        head: branch,
        base: "main",
        title: "chore(readme): refresh crabpot dashboard",
        body: `Publish generated README and reports from source ${source}.\n\nRun: ${runUrl}\nValidation: ${validated ? "successful caller validation; original Default Track attestation retained" : "latest track; requires the actual Default Track PR check"}.\n\nApprove pending workflows and complete required checks before normal merge. A retained PR is not a published dashboard.`,
      },
    });
  } catch (error) {
    const matches = (await pulls(branch)).filter((candidate) => candidate.head.sha === head);
    if (matches.length !== 1) throw error;
    [pr] = matches;
  }
  log(`Dashboard PR retained at ${pr.html_url}`);
  if (validated) {
    // Only the reusable publisher's successful Check or confirmed Dependabot
    // merge caller owns this attestation. Latest-track validation is different.
    await request(`${endpoint}/statuses/${head}`, {
      method: "POST",
      fields: {
        state: "success",
        context: CONTEXT,
        description: "Pinned Default Track passed before dashboard generation",
        target_url: runUrl,
      },
    });
  }
  await holdReports(branch);
  assert.equal(
    await currentMain(),
    source,
    "Main advanced; review the retained dashboard PR without replacing its payload",
  );
  const prEndpoint = `${endpoint}/pulls/${pr.number}`;
  for (let attempt = 0; ; attempt++) {
    const candidate = await request(prEndpoint);
    assertPr(candidate, head);
    if (candidate.mergeable !== null) {
      assert.equal(candidate.mergeable, true, "Dashboard PR conflicts; its reports are retained");
      break;
    }
    assert(attempt < 15, "Dashboard mergeability is pending; its reports are retained");
    await sleep(2_000);
  }
  let result;
  try {
    result = await request(`${prEndpoint}/merge`, {
      method: "PUT",
      fields: { sha: head, merge_method: "squash" },
    });
  } catch (error) {
    const receipt = await request(prEndpoint);
    if (!receipt.merged || receipt.head?.sha !== head) throw error;
    result = { merged: true, sha: receipt.merge_commit_sha };
  }
  assert.equal(
    result.merged,
    true,
    "Dashboard is not published; approve workflows and complete required checks on its retained PR",
  );
  const merge = sha(result.sha);
  const receipt = await request(prEndpoint);
  assertPr(receipt, head);
  assert.equal(receipt.merged, true, "Dashboard PR has no merged receipt");
  assert.equal(receipt.merge_commit_sha, merge, "Dashboard merge receipt changed");
  git("fetch", "--no-tags", "--recurse-submodules=no", "origin", "main");
  git("merge-base", "--is-ancestor", merge, "FETCH_HEAD");
  assert.equal(
    git("ls-tree", "-r", merge, "--", ...PATHS),
    expected,
    "Merged dashboard tree differs from the generated payload",
  );
  log(`Published dashboard ${pr.html_url} at ${merge}`);
  return merge;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const { positionals, values } = parseArgs({
    allowPositionals: true,
    options: { validated: { type: "boolean", default: false } },
  });
  publishDashboard({ mode: positionals[0], validated: values.validated }).catch((error) => {
    console.error(
      error.status === undefined
        ? error.message
        : "Dashboard publication command failed; inspect its retained branch or PR.",
    );
    console.error("[publish-dashboard] FAILED (exit 1)");
    process.exitCode = 1;
  });
}
