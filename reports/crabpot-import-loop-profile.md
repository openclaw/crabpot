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
| p50WallMs                      | 2398     |
| p95WallMs                      | 2427     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 6.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 2 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.2 ms |
| p95OpenClawImportMs            | 117.4 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 314.9 MB |
| maxCpuMsEstimate               | 4849 ms  |
| baselineReferenceWallMs        | 2441 ms  |
| baselineReferencePeakRssMb     | 308.3 MB |
| baselineReferenceCpuMsEstimate | 4847 ms  |
| statSampleCount                | 283      |
| rssSampleCount                 | 283      |
| cpuSampleCount                 | 283      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2441 ms                                  |
| referencePeakRssMb     | 308.3 MB                                 |
| referenceCpuMsEstimate | 4847 ms                                  |
| maxWallMs              | 3337 ms                                  |
| maxPeakRssMb           | 331.2 MB                                 |
| maxCpuMsEstimate       | 5970 ms                                  |
| statSampleCount        | 320                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 117.4 ms        | 0.4 ms            | 0 ms              | 6.6 MB           | 0 ms             | 2398 ms  | 314.9 MB     | 4742 ms          | 94/94           | 0    |
| 1   | captured | 2        | 114.2 ms        | 0.4 ms            | 0 ms              | 0 MB             | 2 ms             | 2427 ms  | 304.3 MB     | 4849 ms          | 96/96           | 0    |
| 2   | captured | 2        | 113.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2364 ms  | 307.4 MB     | 4738 ms          | 93/93           | 0    |
