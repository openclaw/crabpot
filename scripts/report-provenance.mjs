export function packageEvidenceRef({ gitHead, payloadVersion, pinnedVersion, pinnedRef }) {
  if (/^[0-9a-f]{40}$/i.test(gitHead ?? "")) return gitHead;
  return payloadVersion && payloadVersion === pinnedVersion ? pinnedRef : "";
}

export function qualifySdkHostRanges(report, { hostVersion, satisfies }) {
  if (!hostVersion) return report;
  const ranges = new Map((report.fixtures ?? []).flatMap((fixture) => {
    const range = fixture.package?.openclaw?.compatPluginApi;
    return typeof range === "string" && range && !satisfies(hostVersion, range)
      ? [[fixture.id, range]] : [];
  }));
  const affected = (item) => ranges.has(item.fixture) && item.code === "sdk-export-missing";
  if (!(report.issues ?? []).some(affected)) return report;
  const context = (fixture) => `Host ${hostVersion} does not satisfy the declared plugin API range ${ranges.get(fixture)}; recheck with an eligible host before assigning a core compatibility repair.`;
  const evidence = (item) => [...(item.evidence ?? []), context(item.fixture),
    ...(item.compatRecord ? [`Unassessed SDK compatibility record: ${item.compatRecord}`] : [])];
  const issues = report.issues.map((issue) => affected(issue) ? {
    ...issue,
    owner: "inspector",
    decision: "inspector-follow-up",
    issueClass: "inspector-gap",
    compatRecord: null,
    title: `${issue.fixture}: SDK import coverage requires an eligible host`,
    evidence: evidence(issue),
  } : issue);
  const annotate = (items) => items?.map((item) => affected(item)
    ? { ...item, compatRecord: null, evidence: evidence(item), message: `${item.message}; ${context(item.fixture)}` } : item);
  return {
    ...report,
    issues,
    warnings: annotate(report.warnings),
    suggestions: annotate(report.suggestions),
    breakages: annotate(report.breakages),
    logs: annotate(report.logs),
    decisions: report.decisions?.map((item) => ranges.has(item.fixture) &&
      item.seam === "sdk-alias" && item.decision === "core-compat-adapter"
      ? { ...item, decision: "inspector-follow-up", action: context(item.fixture) } : item),
    summary: {
      ...report.summary,
      compatGapCount: issues.filter((issue) => issue.issueClass === "compat-gap").length,
      inspectorGapCount: issues.filter((issue) => issue.issueClass === "inspector-gap").length,
      openInspectorGapCount: issues.filter((issue) => issue.issueClass === "inspector-gap" && issue.status !== "runtime-covered").length,
    },
  };
}
