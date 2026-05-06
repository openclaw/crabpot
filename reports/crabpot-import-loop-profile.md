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
| p50WallMs                      | 2428     |
| p95WallMs                      | 2435     |
| p50PluginWallDeltaMs           | 3        |
| p95PluginWallDeltaMs           | 10       |
| maxPluginPeakRssDeltaMb        | 1.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 74.7 ms  |
| p95OpenClawImportMs            | 78.4 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 332 MB   |
| maxCpuMsEstimate               | 4696 ms  |
| baselineReferenceWallMs        | 2425 ms  |
| baselineReferencePeakRssMb     | 330.2 MB |
| baselineReferenceCpuMsEstimate | 4711 ms  |
| statSampleCount                | 285      |
| rssSampleCount                 | 285      |
| cpuSampleCount                 | 285      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2425 ms                                  |
| referencePeakRssMb     | 330.2 MB                                 |
| referenceCpuMsEstimate | 4711 ms                                  |
| maxWallMs              | 2898 ms                                  |
| maxPeakRssMb           | 341.1 MB                                 |
| maxCpuMsEstimate       | 5296 ms                                  |
| statSampleCount        | 303                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 78.4 ms         | 0.3 ms            | 10 ms             | 1.8 MB           | 0 ms             | 2435 ms  | 332 MB       | 4696 ms          | 96/96           | 0    |
| 1   | captured | 2        | 74.3 ms         | 0.3 ms            | 3 ms              | 0 MB             | 0 ms             | 2428 ms  | 328.9 MB     | 4656 ms          | 95/95           | 0    |
| 2   | captured | 2        | 74.7 ms         | 0.3 ms            | 0 ms              | 0.7 MB           | 0 ms             | 2396 ms  | 330.9 MB     | 4642 ms          | 94/94           | 0    |
