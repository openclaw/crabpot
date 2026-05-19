# Crabpot Import Loop Profile

Generated: deterministic
Mode: openclaw-loader-lifecycle-profile
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric                         | Value    |
| ------------------------------ | -------- |
| runs                           | 3        |
| baselineRuns                   | 3        |
| baselineFailCount              | 0        |
| p50WallMs                      | 1530     |
| p95WallMs                      | 1576     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 42       |
| maxPluginPeakRssDeltaMb        | 1 MB     |
| maxPluginCpuDeltaMsEstimate    | 65 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 84.9 ms  |
| p95OpenClawImportMs            | 85.3 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 264.5 MB |
| maxCpuMsEstimate               | 2879 ms  |
| baselineReferenceWallMs        | 1534 ms  |
| baselineReferencePeakRssMb     | 263.5 MB |
| baselineReferenceCpuMsEstimate | 2814 ms  |
| statSampleCount                | 181      |
| rssSampleCount                 | 181      |
| cpuSampleCount                 | 181      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1534 ms                                  |
| referencePeakRssMb     | 263.5 MB                                 |
| referenceCpuMsEstimate | 2814 ms                                  |
| maxWallMs              | 2051 ms                                  |
| maxPeakRssMb           | 267.7 MB                                 |
| maxCpuMsEstimate       | 3668 ms                                  |
| statSampleCount        | 201                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 83.7 ms         | 0.4 ms            | 0 ms              | 1 MB             | 0 ms             | 1509 ms  | 264.5 MB     | 2741 ms          | 59/59           | 0    |
| 1   | captured | 2        | 85.3 ms         | 0.4 ms            | 42 ms             | 0 MB             | 65 ms            | 1576 ms  | 261.1 MB     | 2879 ms          | 62/62           | 0    |
| 2   | captured | 2        | 84.9 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1530 ms  | 261.9 MB     | 2813 ms          | 60/60           | 0    |
