import assert from "node:assert/strict";
import { test } from "node:test";
import { pinAgeDays, pinOutputs, validatePin } from "../scripts/openclaw-pin.mjs";

const pin = {
  repository: "openclaw/openclaw",
  sha: "e3eb1121adfb3eef87200d2964f01396e2b6acbc",
  pinnedAt: "2026-07-18",
};

test("Default Track pin exposes immutable checkout outputs", () => {
  validatePin(pin);
  assert.deepEqual(pinOutputs(pin), {
    label: "openclaw/openclaw@e3eb1121adfb (Default Track pin 2026-07-18)",
    pinned_at: "2026-07-18",
    ref: pin.sha,
    repository: "openclaw/openclaw",
    sha: pin.sha,
    track: "latest",
  });
});

test("pin age uses UTC dates and permits the 14th day", () => {
  assert.equal(pinAgeDays(pin, new Date("2026-08-01T23:59:59Z")), 14);
  assert.equal(pinAgeDays(pin, new Date("2026-08-02T00:00:00Z")), 15);
  assert.throws(() => pinAgeDays(pin, new Date("2026-07-17T23:59:59Z")), /is in the future/);
});

test("Default Track pin rejects branch refs and invalid dates", () => {
  assert.throws(() => validatePin({ ...pin, sha: "main" }), /40 lowercase hexadecimal/);
  assert.throws(() => validatePin({ ...pin, pinnedAt: "2026-02-31" }), /valid YYYY-MM-DD/);
});
