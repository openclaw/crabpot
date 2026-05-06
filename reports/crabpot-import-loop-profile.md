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
| p50WallMs                      | 2290     |
| p95WallMs                      | 2296     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 10.3 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 89.9 ms  |
| p95OpenClawImportMs            | 98.1 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 340.3 MB |
| maxCpuMsEstimate               | 4474 ms  |
| baselineReferenceWallMs        | 2340 ms  |
| baselineReferencePeakRssMb     | 330 MB   |
| baselineReferenceCpuMsEstimate | 4517 ms  |
| statSampleCount                | 268      |
| rssSampleCount                 | 268      |
| cpuSampleCount                 | 268      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2340 ms                                  |
| referencePeakRssMb     | 330 MB                                   |
| referenceCpuMsEstimate | 4517 ms                                  |
| maxWallMs              | 2818 ms                                  |
| maxPeakRssMb           | 336.5 MB                                 |
| maxCpuMsEstimate       | 5108 ms                                  |
| statSampleCount        | 291                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 78.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2261 ms  | 328.1 MB     | 4390 ms          | 89/89           | 0    |
| 1   | captured | 2        | 89.9 ms         | 0.4 ms            | 0 ms              | 10.3 MB          | 0 ms             | 2296 ms  | 340.3 MB     | 4474 ms          | 90/90           | 0    |
| 2   | captured | 2        | 98.1 ms         | 0.3 ms            | 0 ms              | 9.3 MB           | 0 ms             | 2290 ms  | 339.3 MB     | 4462 ms          | 89/89           | 0    |
