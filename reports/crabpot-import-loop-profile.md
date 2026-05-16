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
| p50WallMs                      | 1494     |
| p95WallMs                      | 1510     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 7.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 92.5 ms  |
| p95OpenClawImportMs            | 95.3 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 268.7 MB |
| maxCpuMsEstimate               | 2749 ms  |
| baselineReferenceWallMs        | 1513 ms  |
| baselineReferencePeakRssMb     | 261 MB   |
| baselineReferenceCpuMsEstimate | 2750 ms  |
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
| referenceWallMs        | 1513 ms                                  |
| referencePeakRssMb     | 261 MB                                   |
| referenceCpuMsEstimate | 2750 ms                                  |
| maxWallMs              | 1962 ms                                  |
| maxPeakRssMb           | 277.1 MB                                 |
| maxCpuMsEstimate       | 3436 ms                                  |
| statSampleCount        | 195                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 95.3 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1494 ms  | 258.4 MB     | 2749 ms          | 59/59           | 0    |
| 1   | captured | 2        | 91.1 ms         | 0.4 ms            | 0 ms              | 7.7 MB           | 0 ms             | 1479 ms  | 268.7 MB     | 2696 ms          | 58/58           | 0    |
| 2   | captured | 2        | 92.5 ms         | 0.4 ms            | 0 ms              | 4.3 MB           | 0 ms             | 1510 ms  | 265.3 MB     | 2744 ms          | 60/60           | 0    |
