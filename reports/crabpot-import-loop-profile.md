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
| p50WallMs                      | 3052     |
| p95WallMs                      | 3056     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 62.2 ms  |
| p95OpenClawImportMs            | 62.2 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 421.8 MB |
| maxCpuMsEstimate               | 4161 ms  |
| baselineReferenceWallMs        | 3098 ms  |
| baselineReferencePeakRssMb     | 422.3 MB |
| baselineReferenceCpuMsEstimate | 4166 ms  |
| statSampleCount                | 362      |
| rssSampleCount                 | 362      |
| cpuSampleCount                 | 362      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3098 ms                                  |
| referencePeakRssMb     | 422.3 MB                                 |
| referenceCpuMsEstimate | 4166 ms                                  |
| maxWallMs              | 7461 ms                                  |
| maxPeakRssMb           | 576.4 MB                                 |
| maxCpuMsEstimate       | 6967 ms                                  |
| statSampleCount        | 537                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 62.1 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 3056 ms  | 418.7 MB     | 4137 ms          | 121/121         | 0    |
| 1   | captured | 2        | 62.2 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 3052 ms  | 417.1 MB     | 4161 ms          | 121/121         | 0    |
| 2   | captured | 2        | 62.2 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 3023 ms  | 421.8 MB     | 4106 ms          | 120/120         | 0    |
