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
| p50WallMs                      | 2513     |
| p95WallMs                      | 2519     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 118.3 ms |
| p95OpenClawImportMs            | 125.6 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 308 MB   |
| maxCpuMsEstimate               | 4993 ms  |
| baselineReferenceWallMs        | 2564 ms  |
| baselineReferencePeakRssMb     | 309.8 MB |
| baselineReferenceCpuMsEstimate | 5074 ms  |
| statSampleCount                | 296      |
| rssSampleCount                 | 296      |
| cpuSampleCount                 | 296      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2564 ms                                  |
| referencePeakRssMb     | 309.8 MB                                 |
| referenceCpuMsEstimate | 5074 ms                                  |
| maxWallMs              | 3444 ms                                  |
| maxPeakRssMb           | 323.7 MB                                 |
| maxCpuMsEstimate       | 6141 ms                                  |
| statSampleCount        | 333                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 125.6 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2519 ms  | 307.8 MB     | 4980 ms          | 99/99           | 0    |
| 1   | captured | 2        | 118.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2486 ms  | 287.5 MB     | 4941 ms          | 98/98           | 0    |
| 2   | captured | 2        | 116.5 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2513 ms  | 308 MB       | 4993 ms          | 99/99           | 0    |
