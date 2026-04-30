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
| p50WallMs                      | 1468     |
| p95WallMs                      | 1484     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 97.7 ms  |
| p95OpenClawImportMs            | 98.9 ms  |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 279.6 MB |
| maxCpuMsEstimate               | 2621 ms  |
| baselineReferenceWallMs        | 1485 ms  |
| baselineReferencePeakRssMb     | 277 MB   |
| baselineReferenceCpuMsEstimate | 2627 ms  |
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
| referenceWallMs        | 1485 ms                                  |
| referencePeakRssMb     | 277 MB                                   |
| referenceCpuMsEstimate | 2627 ms                                  |
| maxWallMs              | 2003 ms                                  |
| maxPeakRssMb           | 284.4 MB                                 |
| maxCpuMsEstimate       | 3417 ms                                  |
| statSampleCount        | 196                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 97.7 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1460 ms  | 268.1 MB     | 2561 ms          | 58/58           | 0    |
| 1   | captured | 2        | 98.9 ms         | 0.2 ms            | 0 ms              | 0.2 MB           | 0 ms             | 1484 ms  | 277.2 MB     | 2621 ms          | 59/59           | 0    |
| 2   | captured | 2        | 96.5 ms         | 0.2 ms            | 0 ms              | 2.6 MB           | 0 ms             | 1468 ms  | 279.6 MB     | 2593 ms          | 58/58           | 0    |
