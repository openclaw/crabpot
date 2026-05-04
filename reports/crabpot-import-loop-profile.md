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
| p50WallMs                      | 1738     |
| p95WallMs                      | 1754     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 16       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 28 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 41.6 ms  |
| p95OpenClawImportMs            | 44.5 ms  |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 344.9 MB |
| maxCpuMsEstimate               | 3431 ms  |
| baselineReferenceWallMs        | 1738 ms  |
| baselineReferencePeakRssMb     | 345.3 MB |
| baselineReferenceCpuMsEstimate | 3403 ms  |
| statSampleCount                | 206      |
| rssSampleCount                 | 206      |
| cpuSampleCount                 | 206      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1738 ms                                  |
| referencePeakRssMb     | 345.3 MB                                 |
| referenceCpuMsEstimate | 3403 ms                                  |
| maxWallMs              | 2152 ms                                  |
| maxPeakRssMb           | 349.4 MB                                 |
| maxCpuMsEstimate       | 3884 ms                                  |
| statSampleCount        | 222                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 44.5 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1699 ms  | 336 MB       | 3337 ms          | 67/67           | 0    |
| 1   | captured | 2        | 41.6 ms         | 0.2 ms            | 0 ms              | 0 MB             | 28 ms            | 1738 ms  | 344.9 MB     | 3431 ms          | 69/69           | 0    |
| 2   | captured | 2        | 41.4 ms         | 0.2 ms            | 16 ms             | 0 MB             | 26 ms            | 1754 ms  | 343.3 MB     | 3429 ms          | 70/70           | 0    |
