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
| p50WallMs                      | 2513     |
| p95WallMs                      | 2534     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1 MB     |
| maxPluginCpuDeltaMsEstimate    | 7 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 119.3 ms |
| p95OpenClawImportMs            | 123.2 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 307.5 MB |
| maxCpuMsEstimate               | 5048 ms  |
| baselineReferenceWallMs        | 2552 ms  |
| baselineReferencePeakRssMb     | 306.5 MB |
| baselineReferenceCpuMsEstimate | 5041 ms  |
| statSampleCount                | 295      |
| rssSampleCount                 | 295      |
| cpuSampleCount                 | 295      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2552 ms                                  |
| referencePeakRssMb     | 306.5 MB                                 |
| referenceCpuMsEstimate | 5041 ms                                  |
| maxWallMs              | 3485 ms                                  |
| maxPeakRssMb           | 337.2 MB                                 |
| maxCpuMsEstimate       | 6182 ms                                  |
| statSampleCount        | 334                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 123.2 ms        | 0.4 ms            | 0 ms              | 1 MB             | 0 ms             | 2513 ms  | 307.5 MB     | 5037 ms          | 99/99           | 0    |
| 1   | captured | 2        | 118.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2454 ms  | 298.3 MB     | 4894 ms          | 96/96           | 0    |
| 2   | captured | 2        | 119.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 7 ms             | 2534 ms  | 297.2 MB     | 5048 ms          | 100/100         | 0    |
