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
| p50WallMs                      | 1676     |
| p95WallMs                      | 1681     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 104.3 ms |
| p95OpenClawImportMs            | 106.6 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 290.8 MB |
| maxCpuMsEstimate               | 3364 ms  |
| baselineReferenceWallMs        | 1748 ms  |
| baselineReferencePeakRssMb     | 297.2 MB |
| baselineReferenceCpuMsEstimate | 3494 ms  |
| statSampleCount                | 198      |
| rssSampleCount                 | 198      |
| cpuSampleCount                 | 198      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1748 ms                                  |
| referencePeakRssMb     | 297.2 MB                                 |
| referenceCpuMsEstimate | 3494 ms                                  |
| maxWallMs              | 2378 ms                                  |
| maxPeakRssMb           | 303.1 MB                                 |
| maxCpuMsEstimate       | 4298 ms                                  |
| statSampleCount        | 232                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 106.6 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1666 ms  | 287.4 MB     | 3336 ms          | 66/66           | 0    |
| 1   | captured | 2        | 103.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1681 ms  | 287.1 MB     | 3364 ms          | 66/66           | 0    |
| 2   | captured | 2        | 104.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1676 ms  | 290.8 MB     | 3363 ms          | 66/66           | 0    |
