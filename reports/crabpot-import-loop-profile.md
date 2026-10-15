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
| p50WallMs                      | 3961     |
| p95WallMs                      | 3973     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 6 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 113 ms   |
| p95OpenClawImportMs            | 114.2 ms |
| p50OpenClawActivationMs        | 1.1 ms   |
| p95OpenClawActivationMs        | 1.6 ms   |
| maxPeakRssMb                   | 528.7 MB |
| maxCpuMsEstimate               | 5656 ms  |
| baselineReferenceWallMs        | 3976 ms  |
| baselineReferencePeakRssMb     | 527.2 MB |
| baselineReferenceCpuMsEstimate | 5650 ms  |
| statSampleCount                | 471      |
| rssSampleCount                 | 471      |
| cpuSampleCount                 | 471      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3976 ms                                  |
| referencePeakRssMb     | 527.2 MB                                 |
| referenceCpuMsEstimate | 5650 ms                                  |
| maxWallMs              | 9456 ms                                  |
| maxPeakRssMb           | 726.3 MB                                 |
| maxCpuMsEstimate       | 8742 ms                                  |
| statSampleCount        | 690                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 113 ms          | 1 ms              | 0 ms              | 0 MB             | 0 ms             | 3950 ms  | 527.1 MB     | 5545 ms          | 157/157         | 0    |
| 1   | captured | 2        | 107 ms          | 1.1 ms            | 0 ms              | 1.5 MB           | 0 ms             | 3961 ms  | 528.7 MB     | 5640 ms          | 157/157         | 0    |
| 2   | captured | 2        | 114.2 ms        | 1.6 ms            | 0 ms              | 0.6 MB           | 6 ms             | 3973 ms  | 527.8 MB     | 5656 ms          | 157/157         | 0    |
