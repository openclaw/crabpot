export function sanitizeReceipt(value, roots) {
  if (typeof value === "string") {
    let text = value;
    for (const [root, label] of [...roots].sort((a, b) => b[0].length - a[0].length)) {
      for (const variant of [JSON.stringify(root).slice(1, -1), root, root.replaceAll("\\", "/")]) {
        const escaped = variant.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        text = text.replace(new RegExp(escaped, "gi"), label);
      }
    }
    if (/[a-z]:[\\/]|\\\\[^\\\s]+\\/i.test(text)) throw new Error("Unmapped absolute path in receipt");
    return text;
  }
  if (Array.isArray(value)) return value.map((entry) => sanitizeReceipt(entry, roots));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value)
    .map(([key, entry]) => [key, sanitizeReceipt(entry, roots)]));
  return value;
}
