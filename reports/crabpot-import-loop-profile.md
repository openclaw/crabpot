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
| p50WallMs                      | 2460     |
| p95WallMs                      | 2482     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 11       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 5 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 120.1 ms |
| p95OpenClawImportMs            | 121.4 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 308.2 MB |
| maxCpuMsEstimate               | 4924 ms  |
| baselineReferenceWallMs        | 2471 ms  |
| baselineReferencePeakRssMb     | 310.4 MB |
| baselineReferenceCpuMsEstimate | 4919 ms  |
| statSampleCount                | 289      |
| rssSampleCount                 | 289      |
| cpuSampleCount                 | 289      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2471 ms                                  |
| referencePeakRssMb     | 310.4 MB                                 |
| referenceCpuMsEstimate | 4919 ms                                  |
| maxWallMs              | 3279 ms                                  |
| maxPeakRssMb           | 328.4 MB                                 |
| maxCpuMsEstimate       | 5830 ms                                  |
| statSampleCount        | 322                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 120.1 ms        | 0.4 ms            | 0 ms              | 0 MB             | 5 ms             | 2460 ms  | 302.6 MB     | 4924 ms          | 97/97           | 0    |
| 1   | captured | 2        | 115.2 ms        | 0.3 ms            | 11 ms             | 0 MB             | 0 ms             | 2482 ms  | 308.2 MB     | 4908 ms          | 97/97           | 0    |
| 2   | captured | 2        | 121.4 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2399 ms  | 307.6 MB     | 4770 ms          | 95/95           | 0    |
