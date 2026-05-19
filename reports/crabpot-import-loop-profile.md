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
| p50WallMs                      | 1473     |
| p95WallMs                      | 1473     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 81.1 ms  |
| p95OpenClawImportMs            | 85.7 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 260 MB   |
| maxCpuMsEstimate               | 2730 ms  |
| baselineReferenceWallMs        | 1526 ms  |
| baselineReferencePeakRssMb     | 259.1 MB |
| baselineReferenceCpuMsEstimate | 2771 ms  |
| statSampleCount                | 173      |
| rssSampleCount                 | 173      |
| cpuSampleCount                 | 173      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1526 ms                                  |
| referencePeakRssMb     | 259.1 MB                                 |
| referenceCpuMsEstimate | 2771 ms                                  |
| maxWallMs              | 1983 ms                                  |
| maxPeakRssMb           | 273.3 MB                                 |
| maxCpuMsEstimate       | 3551 ms                                  |
| statSampleCount        | 195                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 81.1 ms         | 0.3 ms            | 0 ms              | 0.6 MB           | 0 ms             | 1473 ms  | 259.7 MB     | 2730 ms          | 58/58           | 0    |
| 1   | captured | 2        | 85.7 ms         | 0.3 ms            | 0 ms              | 0.2 MB           | 0 ms             | 1449 ms  | 259.3 MB     | 2655 ms          | 57/57           | 0    |
| 2   | captured | 2        | 80.5 ms         | 0.3 ms            | 0 ms              | 0.9 MB           | 0 ms             | 1473 ms  | 260 MB       | 2672 ms          | 58/58           | 0    |
