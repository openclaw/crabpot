export function failureDiagnostic(error, stage) {
  if (stage === "host-case") return { stage, type: "UNKNOWN", code: "UNKNOWN", message: "Host case failed; inspect retained receipt" };
  const code = ["ENOENT", "EACCES", "EPERM", "ENOSPC", "EIO", "ERR_ASSERTION", "ERR_MODULE_NOT_FOUND"].includes(error?.code) ? error.code : "UNKNOWN";
  const type = ["Error", "AssertionError", "TypeError", "RangeError", "SyntaxError", "ReferenceError"].includes(error?.name) ? error.name : "Error";
  // Never serialize arbitrary plugin exceptions, assertion actual/expected values,
  // causes or stacks. Only the closed local validation stages may expose context;
  // execution errors can imitate trusted prefixes and must never pass that gate.
  const firstLine = String(error?.message ?? "").split(/[\r\n]/u, 1)[0];
  const trusted = ["preverify", "postverify", "receipt-validation", "workload-validation", "comparison"].includes(stage) && /^(?:resource coverage: |(?:host|crabpot) input changed: |Missing (?:host|crabpot|adapter) pin: |(?:Pinned|Receipt|Prepared|Built|Expected|Invalid|Declare|Pin the|Pins require|Artifact must) )/u.test(firstLine);
  const message = trusted ? firstLine
    .replace(/(?:api[_-]?key|token|password|secret|authorization)\s*[:=]\s*\S+/giu, "credential=[redacted]")
    .replace(/(['"])[\s\S]*?\1/gu, "[redacted]")
    .replace(/(?:[a-z]:[\\/]|\\\\|\/)[^\s,;)]*/giu, "[path]")
    .replace(/[\u0000-\u001f\u007f-\u009f\u061c\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/gu, "?")
    .slice(0, 512) : stage === "run" ? "Workload runner threw without a terminal receipt" : "Diagnostic payload omitted; inspect prepared inputs or retained receipt";
  return { stage, type, code, message };
}
