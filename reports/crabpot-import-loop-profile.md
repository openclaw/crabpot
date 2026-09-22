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
| p50WallMs                      | 2612     |
| p95WallMs                      | 2624     |
| p50PluginWallDeltaMs           | 15       |
| p95PluginWallDeltaMs           | 27       |
| maxPluginPeakRssDeltaMb        | 2 MB     |
| maxPluginCpuDeltaMsEstimate    | 22 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 54.1 ms  |
| p95OpenClawImportMs            | 56.5 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 420.8 MB |
| maxCpuMsEstimate               | 3680 ms  |
| baselineReferenceWallMs        | 2597 ms  |
| baselineReferencePeakRssMb     | 418.8 MB |
| baselineReferenceCpuMsEstimate | 3658 ms  |
| statSampleCount                | 309      |
| rssSampleCount                 | 309      |
| cpuSampleCount                 | 309      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2597 ms                                  |
| referencePeakRssMb     | 418.8 MB                                 |
| referenceCpuMsEstimate | 3658 ms                                  |
| maxWallMs              | 6243 ms                                  |
| maxPeakRssMb           | 594.9 MB                                 |
| maxCpuMsEstimate       | 5803 ms                                  |
| statSampleCount        | 445                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 56.5 ms         | 0.4 ms            | 27 ms             | 1.6 MB           | 0 ms             | 2624 ms  | 420.4 MB     | 3657 ms          | 104/104         | 0    |
| 1   | captured | 2        | 53.9 ms         | 0.4 ms            | 15 ms             | 2 MB             | 22 ms            | 2612 ms  | 420.8 MB     | 3680 ms          | 104/104         | 0    |
| 2   | captured | 2        | 54.1 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2553 ms  | 415.9 MB     | 3525 ms          | 101/101         | 0    |
