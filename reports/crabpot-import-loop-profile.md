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
| p50WallMs                      | 3309     |
| p95WallMs                      | 3348     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 15       |
| maxPluginPeakRssDeltaMb        | 2.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 87.9 ms  |
| p95OpenClawImportMs            | 90.5 ms  |
| p50OpenClawActivationMs        | 0.9 ms   |
| p95OpenClawActivationMs        | 0.9 ms   |
| maxPeakRssMb                   | 531.4 MB |
| maxCpuMsEstimate               | 4674 ms  |
| baselineReferenceWallMs        | 3333 ms  |
| baselineReferencePeakRssMb     | 529.1 MB |
| baselineReferenceCpuMsEstimate | 4694 ms  |
| statSampleCount                | 396      |
| rssSampleCount                 | 396      |
| cpuSampleCount                 | 396      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3333 ms                                  |
| referencePeakRssMb     | 529.1 MB                                 |
| referenceCpuMsEstimate | 4694 ms                                  |
| maxWallMs              | 7340 ms                                  |
| maxPeakRssMb           | 747.1 MB                                 |
| maxCpuMsEstimate       | 6977 ms                                  |
| statSampleCount        | 555                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 87.9 ms         | 0.9 ms            | 15 ms             | 2.3 MB           | 0 ms             | 3348 ms  | 531.4 MB     | 4674 ms          | 133/133         | 0    |
| 1   | captured | 2        | 90.5 ms         | 0.9 ms            | 0 ms              | 0 MB             | 0 ms             | 3296 ms  | 508.7 MB     | 4661 ms          | 131/131         | 0    |
| 2   | captured | 2        | 84.4 ms         | 0.9 ms            | 0 ms              | 1.6 MB           | 0 ms             | 3309 ms  | 530.7 MB     | 4626 ms          | 132/132         | 0    |
