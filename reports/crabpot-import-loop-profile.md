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
| p50WallMs                      | 2995     |
| p95WallMs                      | 3020     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 62.1 ms  |
| p95OpenClawImportMs            | 68.4 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 421.3 MB |
| maxCpuMsEstimate               | 4088 ms  |
| baselineReferenceWallMs        | 3039 ms  |
| baselineReferencePeakRssMb     | 420.9 MB |
| baselineReferenceCpuMsEstimate | 4101 ms  |
| statSampleCount                | 358      |
| rssSampleCount                 | 358      |
| cpuSampleCount                 | 358      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3039 ms                                  |
| referencePeakRssMb     | 420.9 MB                                 |
| referenceCpuMsEstimate | 4101 ms                                  |
| maxWallMs              | 6824 ms                                  |
| maxPeakRssMb           | 573.8 MB                                 |
| maxCpuMsEstimate       | 6328 ms                                  |
| statSampleCount        | 513                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 60.7 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 3020 ms  | 420.4 MB     | 4088 ms          | 120/120         | 0    |
| 1   | captured | 2        | 62.1 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2995 ms  | 417.8 MB     | 4026 ms          | 119/119         | 0    |
| 2   | captured | 2        | 68.4 ms         | 0.6 ms            | 0 ms              | 0.4 MB           | 0 ms             | 2993 ms  | 421.3 MB     | 4070 ms          | 119/119         | 0    |
