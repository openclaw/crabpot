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
| p50WallMs                      | 2576     |
| p95WallMs                      | 2613     |
| p50PluginWallDeltaMs           | 65       |
| p95PluginWallDeltaMs           | 102      |
| maxPluginPeakRssDeltaMb        | 16.7 MB  |
| maxPluginCpuDeltaMsEstimate    | 174 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 120.3 ms |
| p95OpenClawImportMs            | 122.9 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 300.7 MB |
| maxCpuMsEstimate               | 5158 ms  |
| baselineReferenceWallMs        | 2511 ms  |
| baselineReferencePeakRssMb     | 284 MB   |
| baselineReferenceCpuMsEstimate | 4984 ms  |
| statSampleCount                | 306      |
| rssSampleCount                 | 306      |
| cpuSampleCount                 | 306      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2511 ms                                  |
| referencePeakRssMb     | 284 MB                                   |
| referenceCpuMsEstimate | 4984 ms                                  |
| maxWallMs              | 3560 ms                                  |
| maxPeakRssMb           | 304.9 MB                                 |
| maxCpuMsEstimate       | 6243 ms                                  |
| statSampleCount        | 332                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 122.9 ms        | 0.5 ms            | 102 ms            | 16.7 MB          | 174 ms           | 2613 ms  | 300.7 MB     | 5158 ms          | 103/103         | 0    |
| 1   | captured | 2        | 120.3 ms        | 0.4 ms            | 65 ms             | 4.3 MB           | 79 ms            | 2576 ms  | 288.3 MB     | 5063 ms          | 102/102         | 0    |
| 2   | captured | 2        | 117.1 ms        | 0.4 ms            | 30 ms             | 12 MB            | 44 ms            | 2541 ms  | 296 MB       | 5028 ms          | 101/101         | 0    |
