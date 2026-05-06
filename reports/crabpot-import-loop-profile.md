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
| p50WallMs                      | 2394     |
| p95WallMs                      | 2411     |
| p50PluginWallDeltaMs           | 44       |
| p95PluginWallDeltaMs           | 61       |
| maxPluginPeakRssDeltaMb        | 5.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 225 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 74.8 ms  |
| p95OpenClawImportMs            | 76.3 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 341.6 MB |
| maxCpuMsEstimate               | 4701 ms  |
| baselineReferenceWallMs        | 2350 ms  |
| baselineReferencePeakRssMb     | 335.9 MB |
| baselineReferenceCpuMsEstimate | 4476 ms  |
| statSampleCount                | 283      |
| rssSampleCount                 | 283      |
| cpuSampleCount                 | 283      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2350 ms                                  |
| referencePeakRssMb     | 335.9 MB                                 |
| referenceCpuMsEstimate | 4476 ms                                  |
| maxWallMs              | 2831 ms                                  |
| maxPeakRssMb           | 343.4 MB                                 |
| maxCpuMsEstimate       | 5069 ms                                  |
| statSampleCount        | 295                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 74.5 ms         | 0.3 ms            | 22 ms             | 3.1 MB           | 69 ms            | 2372 ms  | 339 MB       | 4545 ms          | 93/93           | 0    |
| 1   | captured | 2        | 76.3 ms         | 0.3 ms            | 44 ms             | 0 MB             | 215 ms           | 2394 ms  | 319.2 MB     | 4691 ms          | 94/94           | 0    |
| 2   | captured | 2        | 74.8 ms         | 0.3 ms            | 61 ms             | 5.7 MB           | 225 ms           | 2411 ms  | 341.6 MB     | 4701 ms          | 96/96           | 0    |
