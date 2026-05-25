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
| p50WallMs                      | 1510     |
| p95WallMs                      | 1517     |
| p50PluginWallDeltaMs           | 56       |
| p95PluginWallDeltaMs           | 63       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 143 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 106.9 ms |
| p95OpenClawImportMs            | 119.2 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 258.2 MB |
| maxCpuMsEstimate               | 2804 ms  |
| baselineReferenceWallMs        | 1454 ms  |
| baselineReferencePeakRssMb     | 266.7 MB |
| baselineReferenceCpuMsEstimate | 2661 ms  |
| statSampleCount                | 177      |
| rssSampleCount                 | 177      |
| cpuSampleCount                 | 177      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1454 ms                                  |
| referencePeakRssMb     | 266.7 MB                                 |
| referenceCpuMsEstimate | 2661 ms                                  |
| maxWallMs              | 2075 ms                                  |
| maxPeakRssMb           | 277 MB                                   |
| maxCpuMsEstimate       | 3668 ms                                  |
| statSampleCount        | 196                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 119.2 ms        | 0.3 ms            | 56 ms             | 0 MB             | 143 ms           | 1510 ms  | 253.1 MB     | 2804 ms          | 60/60           | 0    |
| 1   | captured | 2        | 106.9 ms        | 0.3 ms            | 63 ms             | 0 MB             | 126 ms           | 1517 ms  | 257.4 MB     | 2787 ms          | 59/59           | 0    |
| 2   | captured | 2        | 105 ms          | 0.3 ms            | 27 ms             | 0 MB             | 29 ms            | 1481 ms  | 258.2 MB     | 2690 ms          | 58/58           | 0    |
