import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { prepare, run, wikiCycle } from "../scripts/resource-workloads/memory-wiki.mjs";
import { resourceWorkloadPlan } from "../scripts/resource-workload-contract.mjs";

const definition = JSON.parse(readFileSync(new URL("../crabpot.config.json", import.meta.url), "utf8"))
  .resourceWorkloads.find(({ id }) => id === "memory-wiki-local-cycle-v1");

function fixture(t) {
  const root = mkdtempSync(path.join(os.tmpdir(), "memory-wiki-workload-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const env = { OPENCLAW_CONFIG_PATH: path.join(root, "config.json") };
  writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify({ gateway: { bind: "loopback" } }));
  return { root, env };
}

// These doubles test admission only. Real workload credit requires the native
// runner's actual Gateway, default compiler/publication and cleanup receipts.
function gateway(vaultRoot, corrupt) {
  const calls = [];
  let cycle = 0;
  let body;
  const rpc = async (method, params) => {
    calls.push([method, params]);
    if (corrupt === "rpc") throw new Error("synthetic RPC failure");
    const pagePath = "syntheses/resource-fixture.md";
    const pageId = "synthesis.resource-fixture";
    const title = "Resource Fixture";
    if (method === "wiki.apply") {
      body = `resourcequalifierzxq variant${cycle % 2 === 0 ? "A" : "B"}`;
      const confidence = cycle % 2 === 0 ? 0.25 : 0.75;
      assert.deepEqual(params, { op: "create_synthesis", title, body,
        sourceIds: ["source.resource-fixture"], confidence });
      cycle++;
      if (corrupt === "compile-error") throw new Error("compiled publication failed");
      const pages = [
        { kind: "source", id: "source.resource-fixture", relativePath: "sources/fixture.md", title: "Resource Source" },
        { kind: "synthesis", id: pageId, relativePath: pagePath, title,
          sourceIds: ["source.resource-fixture"], confidence },
        { kind: "report", id: "report.low-confidence", relativePath: "reports/low-confidence.md", title: "Low Confidence" },
      ];
      const value = { changed: true, operation: "create_synthesis", pagePath, pageId,
        compile: { vaultRoot, frontmatterErrors: [], claimCount: 0, pages,
          pageCounts: { source: 1, synthesis: 1, report: 1, concept: 0, entity: 0 } } };
      if (corrupt === "no-op") value.changed = false;
      if (corrupt === "operation") value.operation = "update_metadata";
      if (corrupt === "page-id") value.pageId = "wrong";
      if (corrupt === "page-path") value.pagePath = "syntheses/wrong.md";
      if (corrupt === "vault") value.compile.vaultRoot = "/unowned";
      if (corrupt === "frontmatter") value.compile.frontmatterErrors.push({ path: "bad.md" });
      if (corrupt === "confidence") pages[1].confidence = 0;
      if (corrupt === "source") pages[1].sourceIds = [];
      if (corrupt === "source-identity") pages[0].id = "source.wrong";
      if (corrupt === "counts") value.compile.pageCounts.source = 2;
      if (corrupt === "growing" && cycle > 1) {
        pages.push({ kind: "report", relativePath: "reports/unexpected.md" });
        value.compile.pageCounts.report++;
      }
      if (corrupt === "duplicate") pages[2].relativePath = pages[1].relativePath;
      return corrupt === "missing-apply" ? null : value;
    }
    if (method === "wiki.get") {
      assert.deepEqual(params, { lookup: pagePath, backend: "local", corpus: "wiki" });
      const value = { corpus: "wiki", path: pagePath, id: pageId, title, kind: "synthesis",
        content: `# ${title}\n${body}\n`, fromLine: 1, lineCount: 200, totalLines: 3, truncated: false };
      if (corrupt === "stale-body") value.content = body.replace(/variant[AB]/, "stale");
      if (corrupt === "old-body") value.content += "resourcequalifierzxq variantB";
      if (corrupt === "truncated") value.truncated = true;
      if (corrupt === "get-identity") value.id = "wrong";
      if (corrupt === "get-corpus") value.corpus = "memory";
      return corrupt === "missing-get" ? null : value;
    }
    assert.equal(method, "wiki.search");
    assert.deepEqual(params, { query: "resourcequalifierzxq", backend: "local", corpus: "wiki", maxResults: 5 });
    const hit = { corpus: "wiki", path: pagePath, id: pageId, title, kind: "synthesis",
      score: 3, searchMode: "auto", snippet: body };
    if (corrupt === "search-identity") hit.id = "wrong";
    if (corrupt === "search-corpus") hit.corpus = "memory";
    if (corrupt === "search-score") hit.score = NaN;
    if (corrupt === "search-body") hit.snippet = "stale";
    if (corrupt === "search-path") hit.path = "syntheses/wrong.md";
    if (corrupt === "missing-search") return [];
    if (corrupt === "unbounded-search") return Array(6).fill(hit);
    if (corrupt === "duplicate-search") return [hit, hit];
    return [hit];
  };
  return { rpc, calls };
}

test("Memory Wiki config preserves defaults and owns one fixed synthetic source", async (t) => {
  const input = fixture(t);
  const state = await prepare(input);
  const config = JSON.parse(readFileSync(input.env.OPENCLAW_CONFIG_PATH, "utf8"));
  assert.deepEqual(config.gateway, { bind: "loopback" });
  assert.deepEqual(config.plugins, {
    enabled: true, allow: ["memory-wiki"], slots: { memory: "none" },
    entries: { "memory-wiki": { enabled: true, config: {
      vaultMode: "isolated", vault: { scope: "global", path: state.vaultRoot, renderMode: "native" },
      search: { backend: "local", corpus: "wiki" }, ingest: { allowUrlIngest: false },
    } } },
  });
  assert.equal(state.vaultRoot, path.join(input.root, "wiki"));
  assert.equal(state.pageSet, undefined);
  assert.match(readFileSync(path.join(state.vaultRoot, "sources/fixture.md"), "utf8"),
    /pageType: source\nid: source\.resource-fixture\ntitle: Resource Source/);
  await assert.rejects(prepare(input), { code: "EEXIST" });
});

test("21 sequential real-contract cycles keep empty-host deltas separate from workload cost", async () => {
  assert.equal(definition.pairedWorkload, undefined);
  assert.deepEqual(definition.requiredOperations, { "first-use": 1, "warm-work": 20 });
  assert.deepEqual(resourceWorkloadPlan(definition).map(({ runWorkload, expectedBefore, expectedAfter }) =>
    ({ runWorkload, expectedBefore, expectedAfter })), [
    { runWorkload: false, expectedBefore: [], expectedAfter: [] },
    { runWorkload: true, expectedBefore: ["memory-wiki"], expectedAfter: ["memory-wiki"] },
  ]);
  const peer = gateway("/fixture/wiki");
  const phases = [];
  await run({ rpc: peer.rpc, measure: async (name, count, operation) => {
    phases.push([name, count]);
    for (let index = 0; index < count; index++) await operation(index);
  } }, definition.requiredOperations, { state: { vaultRoot: "/fixture/wiki" } });
  assert.deepEqual(phases, [["first-use", 1], ["warm-work", 20]]);
  assert.deepEqual(peer.calls.map(([method]) => method), Array.from({ length: 21 }, () =>
    ["wiki.apply", "wiki.get", "wiki.search"]).flat());
});

for (const corrupt of ["rpc", "compile-error", "missing-apply", "no-op", "operation", "page-id", "page-path",
  "vault", "frontmatter", "confidence", "source", "source-identity", "counts", "duplicate", "missing-get",
  "stale-body", "old-body", "truncated", "get-identity", "get-corpus", "missing-search", "search-identity",
  "search-corpus", "search-score", "search-body", "search-path", "unbounded-search", "duplicate-search"]) {
  test(`Memory Wiki rejects ${corrupt} rather than crediting completed transport`, async () => {
    await assert.rejects(wikiCycle(gateway("/fixture/wiki", corrupt).rpc, { vaultRoot: "/fixture/wiki" }, 0));
  });
}

test("warm cycles reject logical corpus growth", async () => {
  const peer = gateway("/fixture/wiki", "growing");
  const state = { vaultRoot: "/fixture/wiki" };
  await wikiCycle(peer.rpc, state, 0);
  await assert.rejects(wikiCycle(peer.rpc, state, 1), /logical page set/);
});

test("a failed apply ends the cycle before reads, search or the next measured phase", async () => {
  const peer = gateway("/fixture/wiki", "compile-error");
  const phases = [];
  await assert.rejects(run({ rpc: peer.rpc, measure: async (name, count, operation) => {
    phases.push(name);
    for (let i = 0; i < count; i++) await operation(i);
  } }, definition.requiredOperations, { state: { vaultRoot: "/fixture/wiki" } }), /publication failed/);
  assert.deepEqual(phases, ["first-use"]);
  assert.deepEqual(peer.calls.map(([method]) => method), ["wiki.apply"]);
});
