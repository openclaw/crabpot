import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { publishDashboard } from "../scripts/publish-dashboard.mjs";

async function fixture(t, scenario = "success") {
  const root = await mkdtemp(path.join(tmpdir(), "crabpot-publish-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const checkout = path.join(root, "checkout");
  const remote = path.join(root, "remote.git");
  await mkdir(checkout);
  const env = {
    ...process.env,
    GIT_AUTHOR_NAME: "Fixture",
    GIT_AUTHOR_EMAIL: "fixture@example.invalid",
    GIT_COMMITTER_NAME: "Fixture",
    GIT_COMMITTER_EMAIL: "fixture@example.invalid",
    GITHUB_REPOSITORY: "openclaw/crabpot",
    DASHBOARD_TARGET_BRANCH: "main",
    GITHUB_RUN_ID: "123",
    GITHUB_RUN_ATTEMPT: "1",
    CRABPOT_RUN_URL: "https://github.com/openclaw/crabpot/actions/runs/123",
  };
  const execute = (...args) =>
    execFileSync("git", ["-c", "commit.gpgsign=false", ...args], {
      encoding: "utf8",
      env,
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  const git = (...args) => execute("-C", checkout, ...args);
  const bare = (...args) => execute("--git-dir", remote, ...args);
  execute("init", "--bare", "--quiet", remote);
  git("init", "--quiet", "--initial-branch=main");
  git("remote", "add", "origin", remote);
  await mkdir(path.join(checkout, "reports"));
  await writeFile(path.join(checkout, "README.md"), "old dashboard\n");
  await writeFile(path.join(checkout, "reports/data.json"), '{"old":true}\n');
  git("add", ".");
  git("commit", "--quiet", "-m", "source");
  git("push", "--quiet", "origin", "main");
  const source = git("rev-parse", "HEAD");
  const prs = [];
  const statuses = [];
  const logs = [];
  const main = () => bare("rev-parse", "refs/heads/main");
  const advance = () => {
    const prior = main();
    const next = bare("commit-tree", `${prior}^{tree}`, "-p", prior, "-m", "concurrent change");
    bare("update-ref", "refs/heads/main", next);
  };
  const repository = { full_name: "openclaw/crabpot" };
  const api = async (endpoint, { method, fields } = {}) => {
    if (endpoint.includes("/git/matching-refs/")) {
      return bare(
        "for-each-ref",
        "--format=%(refname) %(objectname)",
        "refs/heads/automation/dashboard/",
      )
        .split("\n")
        .filter(Boolean)
        .map((line) => {
          const [ref, sha] = line.split(" ");
          return { ref, object: { sha } };
        });
    }
    if (endpoint.includes("/git/ref/")) return { object: { sha: main() } };
    if (endpoint.includes("?state=")) return [prs];
    if (endpoint.includes("/statuses/")) {
      statuses.push({ sha: endpoint.split("/").at(-1), ...fields });
      return {};
    }
    if (method === "POST") {
      if (scenario === "create-failed") throw Error("create unavailable");
      const pr = {
        number: prs.length + 1,
        html_url: "https://github.com/openclaw/crabpot/pull/1",
        head: {
          ref: fields.head,
          sha: bare("rev-parse", `refs/heads/${fields.head}`),
          repo: repository,
        },
        base: { ref: "main", repo: repository },
        mergeable: true,
        merged: false,
      };
      prs.push(pr);
      if (scenario === "create-response-lost") throw Error("response lost");
      return pr;
    }
    const pr = prs.at(-1);
    if (endpoint.endsWith("/merge")) {
      assert.equal(fields.sha, pr.head.sha);
      assert.equal(fields.merge_method, "squash");
      if (scenario === "blocked") return { merged: false };
      if (scenario === "merge-race") {
        advance();
        return { merged: false };
      }
      const tree = scenario === "wrong-tree" ? source : pr.head.sha;
      const merge = bare("commit-tree", `${tree}^{tree}`, "-p", main(), "-m", "squash dashboard");
      bare("update-ref", "refs/heads/main", merge);
      Object.assign(pr, {
        merged: true,
        merged_at: "2026-01-01T00:00:00Z",
        merge_commit_sha: merge,
      });
      if (scenario === "merge-response-lost") throw Error("response lost");
      return { merged: true, sha: merge };
    }
    const result = structuredClone(pr);
    if (scenario === "head-drift") result.head.sha = "f".repeat(40);
    if (scenario === "false-receipt" && result.merged) result.merged = false;
    return result;
  };
  const run = (mode, overrides = {}) =>
    publishDashboard({
      mode,
      source,
      env,
      api,
      git,
      log: (value) => logs.push(value),
      ...overrides,
    });
  const generate = async () => {
    await writeFile(path.join(checkout, "README.md"), "new dashboard\n");
    await writeFile(path.join(checkout, "reports/data.json"), '{"new":true}\n');
  };
  return { checkout, source, env, git, bare, prs, statuses, logs, advance, run, generate };
}

test("validated publication attests the exact generated SHA and verifies its real squash tree", async (t) => {
  const f = await fixture(t);
  await f.run("preflight");
  await f.generate();
  const merge = await f.run("publish", { validated: true });
  const pr = f.prs[0];
  assert.equal(f.statuses.length, 1);
  assert.deepEqual(f.statuses[0], {
    sha: pr.head.sha,
    state: "success",
    context: "Default Track (pinned OpenClaw)",
    description: "Pinned Default Track passed before dashboard generation",
    target_url: f.env.CRABPOT_RUN_URL,
  });
  assert.notEqual(merge, pr.head.sha);
  assert.equal(f.git("show", `${merge}:README.md`), "new dashboard");
  assert.equal(f.git("show", `${merge}:reports/data.json`), '{"new":true}');
  assert.throws(() => f.git("merge-base", "--is-ancestor", pr.head.sha, merge));
  assert.match(f.logs.at(-1), new RegExp(`Published dashboard .* ${merge}`));
  assert.doesNotMatch(f.git("show", "-s", "--format=%s", pr.head.sha), /skip ci/);
});

test("latest-track publication never invents Default Track success", async (t) => {
  const f = await fixture(t, "blocked");
  await f.run("preflight");
  await f.generate();
  await assert.rejects(f.run("publish"), /not published/);
  assert.deepEqual(f.statuses, []);
  assert.equal(f.git("show", `${f.prs[0].head.sha}:README.md`), "new dashboard");
  assert(!f.logs.some((line) => line.startsWith("Published dashboard")));
});

test("a source that moves during generation retains its complete payload before holding", async (t) => {
  const f = await fixture(t);
  await f.run("preflight");
  await f.generate();
  f.advance();
  await assert.rejects(f.run("publish", { validated: true }), /Main advanced/);
  assert.equal(f.git("show", `${f.prs[0].head.sha}:reports/data.json`), '{"new":true}');
  assert(f.logs.some((line) => line.includes("Dashboard PR retained")));
});

for (const scenario of ["blocked", "merge-race", "head-drift", "false-receipt", "wrong-tree"]) {
  test(`${scenario} cannot claim successful publication`, async (t) => {
    const f = await fixture(t, scenario);
    await f.run("preflight");
    await f.generate();
    await assert.rejects(f.run("publish", { validated: true }));
    assert(!f.logs.some((line) => line.startsWith("Published dashboard")));
    assert.equal(f.git("show", `${f.prs[0].head.sha}:README.md`), "new dashboard");
  });
}

for (const scenario of ["create-response-lost", "merge-response-lost"]) {
  test(`${scenario} recovers only the exact remote receipt`, async (t) => {
    const f = await fixture(t, scenario);
    await f.run("preflight");
    await f.generate();
    const merge = await f.run("publish", { validated: true });
    assert.equal(merge, f.prs[0].merge_commit_sha);
  });
}

for (const scenario of ["create-failed", "blocked"]) {
  test(`${scenario} holds future imports without deleting its report`, async (t) => {
    const f = await fixture(t, scenario);
    await f.run("preflight");
    await f.generate();
    await assert.rejects(f.run("publish"));
    const heads = f.bare(
      "for-each-ref",
      "--format=%(objectname)",
      "refs/heads/automation/dashboard/",
    );
    await assert.rejects(
      f.run("preflight", { source: f.git("rev-parse", "HEAD") }),
      /retained dashboard/,
    );
    assert.equal(
      f.bare("for-each-ref", "--format=%(objectname)", "refs/heads/automation/dashboard/"),
      heads,
    );
  });
}

test("unowned working files stay outside the published payload and staged files are refused", async (t) => {
  const f = await fixture(t);
  await f.run("preflight");
  await f.generate();
  await writeFile(path.join(f.checkout, "unowned.txt"), "keep outside the report");
  f.git("add", "unowned.txt");
  await assert.rejects(f.run("publish"), /already staged/);
  f.git("reset", "--", "unowned.txt");
  const merge = await f.run("publish");
  assert.throws(() => f.git("show", `${merge}:unowned.txt`));
  assert.equal(
    await readFile(path.join(f.checkout, "unowned.txt"), "utf8"),
    "keep outside the report",
  );
});

test("the main-only publisher rejects other target branches", async (t) => {
  const f = await fixture(t);
  await assert.rejects(
    f.run("preflight", { env: { ...f.env, DASHBOARD_TARGET_BRANCH: "crab-beta" } }),
    /only main/,
  );
});

test("closing an unmerged dashboard does not release its retained payload", async (t) => {
  const f = await fixture(t, "blocked");
  await f.run("preflight");
  await f.generate();
  await assert.rejects(f.run("publish"));
  f.prs[0].state = "closed";
  await assert.rejects(
    f.run("preflight", { source: f.git("rev-parse", "HEAD") }),
    /retained dashboard/,
  );
});
