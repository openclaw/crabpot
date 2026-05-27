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
| p50WallMs                      | 1483     |
| p95WallMs                      | 1496     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 3.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 111.6 ms |
| p95OpenClawImportMs            | 115.7 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.9 ms   |
| maxPeakRssMb                   | 259 MB   |
| maxCpuMsEstimate               | 2751 ms  |
| baselineReferenceWallMs        | 1561 ms  |
| baselineReferencePeakRssMb     | 255.5 MB |
| baselineReferenceCpuMsEstimate | 2870 ms  |
| statSampleCount                | 175      |
| rssSampleCount                 | 175      |
| cpuSampleCount                 | 175      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1561 ms                                  |
| referencePeakRssMb     | 255.5 MB                                 |
| referenceCpuMsEstimate | 2870 ms                                  |
| maxWallMs              | 2035 ms                                  |
| maxPeakRssMb           | 270 MB                                   |
| maxCpuMsEstimate       | 3588 ms                                  |
| statSampleCount        | 199                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 111.6 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1496 ms  | 253.1 MB     | 2751 ms          | 59/59           | 0    |
| 1   | captured | 2        | 106.9 ms        | 0.4 ms            | 0 ms              | 3.5 MB           | 0 ms             | 1462 ms  | 259 MB       | 2663 ms          | 57/57           | 0    |
| 2   | captured | 2        | 115.7 ms        | 0.9 ms            | 0 ms              | 1.2 MB           | 0 ms             | 1483 ms  | 256.7 MB     | 2741 ms          | 59/59           | 0    |
