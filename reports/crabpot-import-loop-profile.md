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
| p50WallMs                      | 1506     |
| p95WallMs                      | 1507     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 43 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 86.3 ms  |
| p95OpenClawImportMs            | 94.2 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 259.3 MB |
| maxCpuMsEstimate               | 2803 ms  |
| baselineReferenceWallMs        | 1510 ms  |
| baselineReferencePeakRssMb     | 265.8 MB |
| baselineReferenceCpuMsEstimate | 2760 ms  |
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
| referenceWallMs        | 1510 ms                                  |
| referencePeakRssMb     | 265.8 MB                                 |
| referenceCpuMsEstimate | 2760 ms                                  |
| maxWallMs              | 2008 ms                                  |
| maxPeakRssMb           | 270 MB                                   |
| maxCpuMsEstimate       | 3532 ms                                  |
| statSampleCount        | 198                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 86.3 ms         | 0.3 ms            | 0 ms              | 0 MB             | 43 ms            | 1506 ms  | 256 MB       | 2803 ms          | 59/59           | 0    |
| 1   | captured | 2        | 80.8 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1507 ms  | 259.3 MB     | 2739 ms          | 59/59           | 0    |
| 2   | captured | 2        | 94.2 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1494 ms  | 256.5 MB     | 2741 ms          | 59/59           | 0    |
