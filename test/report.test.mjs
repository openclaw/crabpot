import assert from "node:assert/strict";
import { test } from "node:test";
import { classifyIssueFinding, KNOWN_ISSUE_CODES, renderIssuesReport } from "../scripts/report-lib.mjs";

test("issue report maps npm payload evidence to monorepo source links", () => {
  const markdown = renderIssuesReport({
    generatedAt: "test",
    status: "pass",
    targetOpenClaw: { status: "disabled" },
    summary: {
      issueCount: 1,
      p0IssueCount: 0,
      p1IssueCount: 0,
      liveIssueCount: 0,
      liveP0IssueCount: 0,
      compatGapCount: 0,
      deprecationWarningCount: 0,
      inspectorGapCount: 0,
      upstreamIssueCount: 1,
      contractProbeCount: 0,
    },
    issues: [
      {
        fixture: "bluebubbles",
        code: "package-openclaw-metadata-missing",
        issueClass: "upstream-metadata",
        decision: "plugin-upstream-fix",
        severity: "P2",
        title: "OpenClaw package metadata is missing",
        status: "open",
        compatStatus: "none",
        live: false,
        deprecated: false,
        evidence: ["plugins/bluebubbles/.crabpot-package/index.js:12"],
      },
    ],
    contractProbes: [],
  });

  assert.match(
    markdown,
    /https:\/\/github\.com\/openclaw\/openclaw\/blob\/[0-9a-f]{40}\/extensions\/bluebubbles\/index\.js#L12/,
  );
});

test("issue report accepts unsupported plugin security manifests as upstream metadata", () => {
  assert.equal(KNOWN_ISSUE_CODES.has("unrecognized-security-manifest"), true);
  assert.equal(KNOWN_ISSUE_CODES.has("security-manifest-schema-unavailable"), true);
  assert.deepEqual(
    classifyIssueFinding(
      {
        fixture: "clawrouter",
        code: "unrecognized-security-manifest",
        level: "warning",
        evidence: ["plugins/clawrouter/openclaw.security.json"],
      },
      { status: "disabled", compatRecordStatuses: {} },
      { severity: "P3" },
    ),
    {
      compatStatus: "none",
      deprecated: false,
      issueClass: "upstream-metadata",
      live: false,
      severity: "P3",
    },
  );

  const markdown = renderIssuesReport({
    generatedAt: "test",
    status: "pass",
    targetOpenClaw: { status: "disabled" },
    summary: {
      issueCount: 1,
      p0IssueCount: 0,
      p1IssueCount: 0,
      liveIssueCount: 0,
      liveP0IssueCount: 0,
      compatGapCount: 0,
      deprecationWarningCount: 0,
      inspectorGapCount: 0,
      upstreamIssueCount: 1,
      contractProbeCount: 0,
    },
    issues: [
      {
        fixture: "clawrouter",
        code: "unrecognized-security-manifest",
        issueClass: "upstream-metadata",
        decision: "plugin-upstream-fix",
        severity: "P3",
        title: "plugin ships an unsupported security manifest",
        status: "open",
        compatStatus: "none",
        live: false,
        deprecated: false,
        evidence: ["plugins/clawrouter/openclaw.security.json"],
      },
    ],
    contractProbes: [],
  });

  assert.match(markdown, /## Upstream Metadata Issues/);
  assert.match(markdown, /🟢 P3 \*\*clawrouter\*\* `upstream-metadata` `plugin-upstream-fix`/);
  assert.match(markdown, /unrecognized-security-manifest/);
});
