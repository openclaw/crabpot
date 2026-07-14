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
| p50WallMs                      | 2459     |
| p95WallMs                      | 2537     |
| p50PluginWallDeltaMs           | 26       |
| p95PluginWallDeltaMs           | 104      |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 185 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 119 ms   |
| p95OpenClawImportMs            | 122.5 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 309.5 MB |
| maxCpuMsEstimate               | 5018 ms  |
| baselineReferenceWallMs        | 2433 ms  |
| baselineReferencePeakRssMb     | 313.4 MB |
| baselineReferenceCpuMsEstimate | 4833 ms  |
| statSampleCount                | 293      |
| rssSampleCount                 | 293      |
| cpuSampleCount                 | 293      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2433 ms                                  |
| referencePeakRssMb     | 313.4 MB                                 |
| referenceCpuMsEstimate | 4833 ms                                  |
| maxWallMs              | 3385 ms                                  |
| maxPeakRssMb           | 321.2 MB                                 |
| maxCpuMsEstimate       | 5938 ms                                  |
| statSampleCount        | 321                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 117 ms          | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2401 ms  | 290 MB       | 4813 ms          | 95/95           | 0    |
| 1   | captured | 2        | 119 ms          | 0.4 ms            | 104 ms            | 0 MB             | 185 ms           | 2537 ms  | 309.5 MB     | 5018 ms          | 101/101         | 0    |
| 2   | captured | 2        | 122.5 ms        | 0.4 ms            | 26 ms             | 0 MB             | 74 ms            | 2459 ms  | 302.1 MB     | 4907 ms          | 97/97           | 0    |
