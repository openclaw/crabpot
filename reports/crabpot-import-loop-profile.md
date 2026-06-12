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
| p50WallMs                      | 2427     |
| p95WallMs                      | 2445     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 4.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.7 ms |
| p95OpenClawImportMs            | 120.1 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 307.3 MB |
| maxCpuMsEstimate               | 4835 ms  |
| baselineReferenceWallMs        | 2454 ms  |
| baselineReferencePeakRssMb     | 303.2 MB |
| baselineReferenceCpuMsEstimate | 4897 ms  |
| statSampleCount                | 285      |
| rssSampleCount                 | 285      |
| cpuSampleCount                 | 285      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2454 ms                                  |
| referencePeakRssMb     | 303.2 MB                                 |
| referenceCpuMsEstimate | 4897 ms                                  |
| maxWallMs              | 3202 ms                                  |
| maxPeakRssMb           | 305.7 MB                                 |
| maxCpuMsEstimate       | 5752 ms                                  |
| statSampleCount        | 313                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 110.5 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2445 ms  | 287.9 MB     | 4835 ms          | 96/96           | 0    |
| 1   | captured | 2        | 114.7 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2389 ms  | 290 MB       | 4786 ms          | 93/93           | 0    |
| 2   | captured | 2        | 120.1 ms        | 0.4 ms            | 0 ms              | 4.1 MB           | 0 ms             | 2427 ms  | 307.3 MB     | 4833 ms          | 96/96           | 0    |
