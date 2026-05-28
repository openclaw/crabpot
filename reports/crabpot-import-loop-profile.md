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
| p50WallMs                      | 1866     |
| p95WallMs                      | 1896     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 8.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 110.7 ms |
| p95OpenClawImportMs            | 113.8 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 295.1 MB |
| maxCpuMsEstimate               | 3655 ms  |
| baselineReferenceWallMs        | 1947 ms  |
| baselineReferencePeakRssMb     | 287 MB   |
| baselineReferenceCpuMsEstimate | 3768 ms  |
| statSampleCount                | 221      |
| rssSampleCount                 | 221      |
| cpuSampleCount                 | 221      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1947 ms                                  |
| referencePeakRssMb     | 287 MB                                   |
| referenceCpuMsEstimate | 3768 ms                                  |
| maxWallMs              | 2506 ms                                  |
| maxPeakRssMb           | 292.9 MB                                 |
| maxCpuMsEstimate       | 4469 ms                                  |
| statSampleCount        | 249                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 113.8 ms        | 0.3 ms            | 0 ms              | 8.1 MB           | 0 ms             | 1846 ms  | 295.1 MB     | 3618 ms          | 73/73           | 0    |
| 1   | captured | 2        | 110.7 ms        | 0.3 ms            | 0 ms              | 0.2 MB           | 0 ms             | 1866 ms  | 287.2 MB     | 3655 ms          | 73/73           | 0    |
| 2   | captured | 2        | 98.8 ms         | 0.4 ms            | 0 ms              | 1.1 MB           | 0 ms             | 1896 ms  | 288.1 MB     | 3651 ms          | 75/75           | 0    |
