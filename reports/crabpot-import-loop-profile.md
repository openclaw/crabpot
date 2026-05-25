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
| p50WallMs                      | 1516     |
| p95WallMs                      | 1553     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 1        |
| maxPluginPeakRssDeltaMb        | 3.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 105.8 ms |
| p95OpenClawImportMs            | 108.7 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 263.8 MB |
| maxCpuMsEstimate               | 2845 ms  |
| baselineReferenceWallMs        | 1552 ms  |
| baselineReferencePeakRssMb     | 259.9 MB |
| baselineReferenceCpuMsEstimate | 2845 ms  |
| statSampleCount                | 179      |
| rssSampleCount                 | 179      |
| cpuSampleCount                 | 179      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1552 ms                                  |
| referencePeakRssMb     | 259.9 MB                                 |
| referenceCpuMsEstimate | 2845 ms                                  |
| maxWallMs              | 2101 ms                                  |
| maxPeakRssMb           | 269.4 MB                                 |
| maxCpuMsEstimate       | 3688 ms                                  |
| statSampleCount        | 204                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 108.7 ms        | 0.3 ms            | 0 ms              | 3.9 MB           | 0 ms             | 1476 ms  | 263.8 MB     | 2694 ms          | 58/58           | 0    |
| 1   | captured | 2        | 105.8 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1516 ms  | 258 MB       | 2766 ms          | 60/60           | 0    |
| 2   | captured | 2        | 104.4 ms        | 0.4 ms            | 1 ms              | 3.5 MB           | 0 ms             | 1553 ms  | 263.4 MB     | 2845 ms          | 61/61           | 0    |
