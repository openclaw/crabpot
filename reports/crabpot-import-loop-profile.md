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
| p50WallMs                      | 2418     |
| p95WallMs                      | 2450     |
| p50PluginWallDeltaMs           | 50       |
| p95PluginWallDeltaMs           | 82       |
| maxPluginPeakRssDeltaMb        | 16.7 MB  |
| maxPluginCpuDeltaMsEstimate    | 130 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 111.7 ms |
| p95OpenClawImportMs            | 114.6 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 307.6 MB |
| maxCpuMsEstimate               | 4822 ms  |
| baselineReferenceWallMs        | 2368 ms  |
| baselineReferencePeakRssMb     | 290.9 MB |
| baselineReferenceCpuMsEstimate | 4692 ms  |
| statSampleCount                | 287      |
| rssSampleCount                 | 287      |
| cpuSampleCount                 | 287      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2368 ms                                  |
| referencePeakRssMb     | 290.9 MB                                 |
| referenceCpuMsEstimate | 4692 ms                                  |
| maxWallMs              | 3142 ms                                  |
| maxPeakRssMb           | 311.2 MB                                 |
| maxCpuMsEstimate       | 5656 ms                                  |
| statSampleCount        | 304                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 109.3 ms        | 0.4 ms            | 82 ms             | 0 MB             | 130 ms           | 2450 ms  | 285 MB       | 4822 ms          | 97/97           | 0    |
| 1   | captured | 2        | 111.7 ms        | 0.4 ms            | 50 ms             | 0 MB             | 59 ms            | 2418 ms  | 286.6 MB     | 4751 ms          | 95/95           | 0    |
| 2   | captured | 2        | 114.6 ms        | 0.3 ms            | 30 ms             | 16.7 MB          | 61 ms            | 2398 ms  | 307.6 MB     | 4753 ms          | 95/95           | 0    |
