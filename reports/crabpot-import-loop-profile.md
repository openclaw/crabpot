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
| p50WallMs                      | 2898     |
| p95WallMs                      | 2904     |
| p50PluginWallDeltaMs           | 53       |
| p95PluginWallDeltaMs           | 59       |
| maxPluginPeakRssDeltaMb        | 6.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 142 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 121.1 ms |
| p95OpenClawImportMs            | 124.8 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 344.9 MB |
| maxCpuMsEstimate               | 5791 ms  |
| baselineReferenceWallMs        | 2845 ms  |
| baselineReferencePeakRssMb     | 338.8 MB |
| baselineReferenceCpuMsEstimate | 5649 ms  |
| statSampleCount                | 339      |
| rssSampleCount                 | 339      |
| cpuSampleCount                 | 339      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2845 ms                                  |
| referencePeakRssMb     | 338.8 MB                                 |
| referenceCpuMsEstimate | 5649 ms                                  |
| maxWallMs              | 3926 ms                                  |
| maxPeakRssMb           | 355.6 MB                                 |
| maxCpuMsEstimate       | 6991 ms                                  |
| statSampleCount        | 375                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 124.8 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2815 ms  | 336.9 MB     | 5623 ms          | 111/111         | 0    |
| 1   | captured | 2        | 121.1 ms        | 0.3 ms            | 59 ms             | 6.1 MB           | 142 ms           | 2904 ms  | 344.9 MB     | 5791 ms          | 114/114         | 0    |
| 2   | captured | 2        | 120.4 ms        | 0.4 ms            | 53 ms             | 1 MB             | 55 ms            | 2898 ms  | 339.8 MB     | 5704 ms          | 114/114         | 0    |
