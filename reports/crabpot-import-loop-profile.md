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
| p50WallMs                      | 1718     |
| p95WallMs                      | 1724     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 13.2 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 73.8 ms  |
| p95OpenClawImportMs            | 76.1 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 3.4 ms   |
| maxPeakRssMb                   | 342 MB   |
| maxCpuMsEstimate               | 3308 ms  |
| baselineReferenceWallMs        | 1768 ms  |
| baselineReferencePeakRssMb     | 328.8 MB |
| baselineReferenceCpuMsEstimate | 3482 ms  |
| statSampleCount                | 202      |
| rssSampleCount                 | 202      |
| cpuSampleCount                 | 202      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1768 ms                                  |
| referencePeakRssMb     | 328.8 MB                                 |
| referenceCpuMsEstimate | 3482 ms                                  |
| maxWallMs              | 2223 ms                                  |
| maxPeakRssMb           | 334.3 MB                                 |
| maxCpuMsEstimate       | 3993 ms                                  |
| statSampleCount        | 225                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 76.1 ms         | 3.4 ms            | 0 ms              | 5.1 MB           | 0 ms             | 1724 ms  | 333.9 MB     | 3305 ms          | 68/68           | 0    |
| 1   | captured | 2        | 73.8 ms         | 0.3 ms            | 0 ms              | 13.2 MB          | 0 ms             | 1718 ms  | 342 MB       | 3308 ms          | 67/67           | 0    |
| 2   | captured | 2        | 60.8 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1701 ms  | 324.9 MB     | 3283 ms          | 67/67           | 0    |
