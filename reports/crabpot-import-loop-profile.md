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
| p50WallMs                      | 3921     |
| p95WallMs                      | 3930     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 102.8 ms |
| p95OpenClawImportMs            | 116.2 ms |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.2 ms   |
| maxPeakRssMb                   | 528.5 MB |
| maxCpuMsEstimate               | 5578 ms  |
| baselineReferenceWallMs        | 3956 ms  |
| baselineReferencePeakRssMb     | 526.5 MB |
| baselineReferenceCpuMsEstimate | 5652 ms  |
| statSampleCount                | 466      |
| rssSampleCount                 | 466      |
| cpuSampleCount                 | 466      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3956 ms                                  |
| referencePeakRssMb     | 526.5 MB                                 |
| referenceCpuMsEstimate | 5652 ms                                  |
| maxWallMs              | 9398 ms                                  |
| maxPeakRssMb           | 745 MB                                   |
| maxCpuMsEstimate       | 8668 ms                                  |
| statSampleCount        | 686                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 102.8 ms        | 1.2 ms            | 0 ms              | 2 MB             | 0 ms             | 3895 ms  | 528.5 MB     | 5468 ms          | 155/155         | 0    |
| 1   | captured | 2        | 101.1 ms        | 1.2 ms            | 0 ms              | 1.2 MB           | 0 ms             | 3930 ms  | 527.7 MB     | 5578 ms          | 155/155         | 0    |
| 2   | captured | 2        | 116.2 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 3921 ms  | 525.3 MB     | 5548 ms          | 156/156         | 0    |
