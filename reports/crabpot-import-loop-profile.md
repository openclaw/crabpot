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
| p50WallMs                      | 2557     |
| p95WallMs                      | 2560     |
| p50PluginWallDeltaMs           | 5        |
| p95PluginWallDeltaMs           | 8        |
| maxPluginPeakRssDeltaMb        | 3.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 72 ms    |
| p95OpenClawImportMs            | 75 ms    |
| p50OpenClawActivationMs        | 0.8 ms   |
| p95OpenClawActivationMs        | 0.8 ms   |
| maxPeakRssMb                   | 510 MB   |
| maxCpuMsEstimate               | 3792 ms  |
| baselineReferenceWallMs        | 2552 ms  |
| baselineReferencePeakRssMb     | 506.2 MB |
| baselineReferenceCpuMsEstimate | 3793 ms  |
| statSampleCount                | 304      |
| rssSampleCount                 | 304      |
| cpuSampleCount                 | 304      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2552 ms                                  |
| referencePeakRssMb     | 506.2 MB                                 |
| referenceCpuMsEstimate | 3793 ms                                  |
| maxWallMs              | 6238 ms                                  |
| maxPeakRssMb           | 725.4 MB                                 |
| maxCpuMsEstimate       | 6033 ms                                  |
| statSampleCount        | 450                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 72 ms           | 0.8 ms            | 0 ms              | 3.8 MB           | 0 ms             | 2542 ms  | 510 MB       | 3742 ms          | 101/101         | 0    |
| 1   | captured | 2        | 70.7 ms         | 0.7 ms            | 8 ms              | 3.8 MB           | 0 ms             | 2560 ms  | 510 MB       | 3749 ms          | 102/102         | 0    |
| 2   | captured | 2        | 75 ms           | 0.8 ms            | 5 ms              | 1.6 MB           | 0 ms             | 2557 ms  | 507.8 MB     | 3792 ms          | 101/101         | 0    |
