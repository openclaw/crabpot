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
| p50WallMs                      | 2583     |
| p95WallMs                      | 2626     |
| p50PluginWallDeltaMs           | 25       |
| p95PluginWallDeltaMs           | 68       |
| maxPluginPeakRssDeltaMb        | 14.5 MB  |
| maxPluginCpuDeltaMsEstimate    | 156 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 126 ms   |
| p95OpenClawImportMs            | 127.2 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 305.6 MB |
| maxCpuMsEstimate               | 5314 ms  |
| baselineReferenceWallMs        | 2558 ms  |
| baselineReferencePeakRssMb     | 291.1 MB |
| baselineReferenceCpuMsEstimate | 5158 ms  |
| statSampleCount                | 305      |
| rssSampleCount                 | 305      |
| cpuSampleCount                 | 305      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2558 ms                                  |
| referencePeakRssMb     | 291.1 MB                                 |
| referenceCpuMsEstimate | 5158 ms                                  |
| maxWallMs              | 3550 ms                                  |
| maxPeakRssMb           | 316.7 MB                                 |
| maxCpuMsEstimate       | 6359 ms                                  |
| statSampleCount        | 335                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 127.2 ms        | 0.4 ms            | 25 ms             | 14.5 MB          | 63 ms            | 2583 ms  | 305.6 MB     | 5221 ms          | 101/101         | 0    |
| 1   | captured | 2        | 121.3 ms        | 0.4 ms            | 1 ms              | 2.5 MB           | 0 ms             | 2559 ms  | 293.6 MB     | 5152 ms          | 101/101         | 0    |
| 2   | captured | 2        | 126 ms          | 0.4 ms            | 68 ms             | 14 MB            | 156 ms           | 2626 ms  | 305.1 MB     | 5314 ms          | 103/103         | 0    |
