import assert from "node:assert/strict";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const title = "Resource Fixture";
const pagePath = "syntheses/resource-fixture.md";
const pageId = "synthesis.resource-fixture";
const sourceId = "source.resource-fixture";
const query = "resourcequalifierzxq";
const bodies = [`${query} variantA`, `${query} variantB`];
const pageKinds = ["concept", "entity", "report", "source", "synthesis"];

export const operationUnit = "one synthesis apply/compile, page read and local search cycle (three RPCs)";
export const limitations = [
  "Fixed synthetic source corpus and page set; compilation history and state can grow",
  "Default compilation, backlinks and dashboards stay enabled; first use includes initial source-sync compilation",
  "Local wiki search only: no shared memory, embeddings, model, bridge, URL ingestion or Obsidian",
  "Awaited apply proves publication completion; get/search may fall back to scanning, so cache hits are unmeasured",
  "Workload cost is absolute on the enabled host; only common host phases have empty-host deltas",
  "Gateway shutdown is joined; short post-work samples do not establish disposal retention or leaks",
];

export async function prepare({ root, env }) {
  const vaultRoot = path.join(root, "wiki");
  const config = JSON.parse(readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8"));
  config.plugins = {
    enabled: true, allow: ["memory-wiki"], slots: { memory: "none" },
    entries: { "memory-wiki": { enabled: true, config: {
      vaultMode: "isolated", vault: { scope: "global", path: vaultRoot, renderMode: "native" },
      search: { backend: "local", corpus: "wiki" }, ingest: { allowUrlIngest: false },
    } } },
  };
  writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify(config));
  // The shared host owns this whole fresh root, including failure preservation
  // and removal after Gateway shutdown. No separate adapter cleanup is needed.
  mkdirSync(path.join(vaultRoot, "sources"), { recursive: true });
  writeFileSync(path.join(vaultRoot, "sources/fixture.md"),
    `---\npageType: source\nid: ${sourceId}\ntitle: Resource Source\n---\n# Resource Source\n\nDeterministic synthetic evidence for a local wiki cycle.\n`,
    { flag: "wx" });
  return { vaultRoot, pageSet: undefined };
}

export async function wikiCycle(rpc, state, index) {
  const variant = index % bodies.length;
  const confidence = variant === 0 ? 0.25 : 0.75;
  const applied = await rpc("wiki.apply", {
    op: "create_synthesis", title, body: bodies[variant], sourceIds: [sourceId], confidence,
  });
  assert.equal(applied?.changed, true);
  assert.equal(applied.operation, "create_synthesis");
  assert.equal(applied.pagePath, pagePath);
  assert.equal(applied.pageId, pageId);
  const compiled = applied.compile;
  assert.equal(compiled?.vaultRoot, state.vaultRoot);
  assert.deepEqual(compiled.frontmatterErrors, []);
  assert.equal(compiled.claimCount, 0);
  assert.ok(Array.isArray(compiled.pages));
  assert.deepEqual(Object.keys(compiled.pageCounts).sort(), pageKinds);
  for (const kind of pageKinds) {
    assert.ok(Number.isSafeInteger(compiled.pageCounts[kind]) && compiled.pageCounts[kind] >= 0);
    assert.equal(compiled.pageCounts[kind], compiled.pages.filter((page) => page.kind === kind).length);
  }
  assert.equal(compiled.pageCounts.source, 1);
  assert.equal(compiled.pageCounts.synthesis, 1);
  assert.equal(compiled.pageCounts.concept, 0);
  assert.equal(compiled.pageCounts.entity, 0);
  assert.ok(compiled.pageCounts.report > 0, "default dashboard compilation is required");
  assert.deepEqual(compiled.pages.filter(({ kind }) => kind === "source").map(({ id, relativePath, title: sourceTitle }) =>
    ({ id, relativePath, title: sourceTitle })),
  [{ id: sourceId, relativePath: "sources/fixture.md", title: "Resource Source" }]);
  const synthesis = compiled.pages.find(({ id }) => id === pageId);
  assert.equal(synthesis?.relativePath, pagePath);
  assert.equal(synthesis.title, title);
  assert.equal(synthesis.kind, "synthesis");
  assert.equal(synthesis.confidence, confidence);
  assert.deepEqual(synthesis.sourceIds, [sourceId]);
  const pageSet = compiled.pages.map(({ relativePath }) => relativePath).sort();
  assert.equal(new Set(pageSet).size, pageSet.length);
  if (state.pageSet) assert.deepEqual(pageSet, state.pageSet, "logical page set grew or changed");
  else state.pageSet = pageSet;

  const page = await rpc("wiki.get", { lookup: pagePath, backend: "local", corpus: "wiki" });
  assert.equal(page?.corpus, "wiki");
  assert.equal(page.path, pagePath);
  assert.equal(page.id, pageId);
  assert.equal(page.title, title);
  assert.equal(page.kind, "synthesis");
  assert.equal(page.truncated, false);
  assert.equal(page.fromLine, 1);
  assert.ok(Number.isSafeInteger(page.totalLines) && page.totalLines > 0 && page.totalLines <= page.lineCount);
  assert.ok(page.content.includes(bodies[variant]), "current generated body missing");
  assert.ok(!page.content.includes(bodies[1 - variant]), "previous generated body survived");

  const results = await rpc("wiki.search", { query, backend: "local", corpus: "wiki", maxResults: 5 });
  assert.ok(Array.isArray(results) && results.length > 0 && results.length <= 5);
  const matches = results.filter(({ path: resultPath }) => resultPath === pagePath);
  assert.equal(matches.length, 1);
  const hit = matches[0];
  assert.equal(hit.corpus, "wiki");
  assert.equal(hit.id, pageId);
  assert.equal(hit.kind, "synthesis");
  assert.equal(hit.title, title);
  assert.ok(Number.isFinite(hit.score) && hit.score > 0);
  assert.equal(hit.searchMode, "auto");
  assert.ok(hit.snippet.includes(bodies[variant]), "search did not observe the current body");
  assert.ok(!hit.snippet.includes(bodies[1 - variant]));
}

export async function run({ rpc, measure }, requirements, { state }) {
  assert.deepEqual(Object.keys(requirements).sort(), ["first-use", "warm-work"]);
  await measure("first-use", requirements["first-use"], (index) => wikiCycle(rpc, state, index));
  await measure("warm-work", requirements["warm-work"], (index) =>
    wikiCycle(rpc, state, index + requirements["first-use"]));
}
