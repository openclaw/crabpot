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
| p50WallMs                      | 2613     |
| p95WallMs                      | 2641     |
| p50PluginWallDeltaMs           | 16       |
| p95PluginWallDeltaMs           | 44       |
| maxPluginPeakRssDeltaMb        | 24 MB    |
| maxPluginCpuDeltaMsEstimate    | 12 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 75.3 ms  |
| p95OpenClawImportMs            | 76.6 ms  |
| p50OpenClawActivationMs        | 0.7 ms   |
| p95OpenClawActivationMs        | 0.7 ms   |
| maxPeakRssMb                   | 531.8 MB |
| maxCpuMsEstimate               | 3872 ms  |
| baselineReferenceWallMs        | 2597 ms  |
| baselineReferencePeakRssMb     | 507.8 MB |
| baselineReferenceCpuMsEstimate | 3860 ms  |
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
| referencePeakRssMb     | 507.8 MB                                 |
| referenceCpuMsEstimate | 3860 ms                                  |
| maxWallMs              | 6197 ms                                  |
| maxPeakRssMb           | 734.2 MB                                 |
| maxCpuMsEstimate       | 6108 ms                                  |
| statSampleCount        | 453                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 72.7 ms         | 0.7 ms            | 16 ms             | 24 MB            | 0 ms             | 2613 ms  | 531.8 MB     | 3790 ms          | 104/104         | 0    |
| 1   | captured | 2        | 75.3 ms         | 0.7 ms            | 0 ms              | 0.8 MB           | 0 ms             | 2534 ms  | 508.6 MB     | 3699 ms          | 101/101         | 0    |
| 2   | captured | 2        | 76.6 ms         | 0.7 ms            | 44 ms             | 1.3 MB           | 12 ms            | 2641 ms  | 509.1 MB     | 3872 ms          | 104/104         | 0    |
