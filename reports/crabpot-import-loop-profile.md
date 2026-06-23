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
| p50WallMs                      | 2439     |
| p95WallMs                      | 2576     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 94       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 173 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 116.8 ms |
| p95OpenClawImportMs            | 117.6 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 4.7 ms   |
| maxPeakRssMb                   | 309.6 MB |
| maxCpuMsEstimate               | 5104 ms  |
| baselineReferenceWallMs        | 2482 ms  |
| baselineReferencePeakRssMb     | 316.6 MB |
| baselineReferenceCpuMsEstimate | 4931 ms  |
| statSampleCount                | 295      |
| rssSampleCount                 | 295      |
| cpuSampleCount                 | 295      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2482 ms                                  |
| referencePeakRssMb     | 316.6 MB                                 |
| referenceCpuMsEstimate | 4931 ms                                  |
| maxWallMs              | 3377 ms                                  |
| maxPeakRssMb           | 324.4 MB                                 |
| maxCpuMsEstimate       | 6084 ms                                  |
| statSampleCount        | 328                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 117.6 ms        | 4.7 ms            | 94 ms             | 0 MB             | 173 ms           | 2576 ms  | 303.4 MB     | 5104 ms          | 102/102         | 0    |
| 1   | captured | 2        | 113.4 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2424 ms  | 301.2 MB     | 4871 ms          | 96/96           | 0    |
| 2   | captured | 2        | 116.8 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2439 ms  | 309.6 MB     | 4874 ms          | 97/97           | 0    |
