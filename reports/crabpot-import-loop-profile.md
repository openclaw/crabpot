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
| p50WallMs                      | 1702     |
| p95WallMs                      | 1756     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 16       |
| maxPluginPeakRssDeltaMb        | 1.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 39.3 ms  |
| p95OpenClawImportMs            | 40.6 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 425.2 MB |
| maxCpuMsEstimate               | 2464 ms  |
| baselineReferenceWallMs        | 1740 ms  |
| baselineReferencePeakRssMb     | 423.7 MB |
| baselineReferenceCpuMsEstimate | 2484 ms  |
| statSampleCount                | 204      |
| rssSampleCount                 | 204      |
| cpuSampleCount                 | 204      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1740 ms                                  |
| referencePeakRssMb     | 423.7 MB                                 |
| referenceCpuMsEstimate | 2484 ms                                  |
| maxWallMs              | 3907 ms                                  |
| maxPeakRssMb           | 575.1 MB                                 |
| maxCpuMsEstimate       | 3780 ms                                  |
| statSampleCount        | 291                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 40.6 ms         | 0.3 ms            | 0 ms              | 1.5 MB           | 0 ms             | 1702 ms  | 425.2 MB     | 2422 ms          | 68/68           | 0    |
| 1   | captured | 2        | 38.8 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1667 ms  | 422.1 MB     | 2328 ms          | 66/66           | 0    |
| 2   | captured | 2        | 39.3 ms         | 0.3 ms            | 16 ms             | 0 MB             | 0 ms             | 1756 ms  | 422.9 MB     | 2464 ms          | 70/70           | 0    |
