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
| p50WallMs                      | 1480     |
| p95WallMs                      | 1489     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 106.6 ms |
| p95OpenClawImportMs            | 110.8 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 257.7 MB |
| maxCpuMsEstimate               | 2721 ms  |
| baselineReferenceWallMs        | 1514 ms  |
| baselineReferencePeakRssMb     | 270.7 MB |
| baselineReferenceCpuMsEstimate | 2787 ms  |
| statSampleCount                | 174      |
| rssSampleCount                 | 174      |
| cpuSampleCount                 | 174      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1514 ms                                  |
| referencePeakRssMb     | 270.7 MB                                 |
| referenceCpuMsEstimate | 2787 ms                                  |
| maxWallMs              | 2078 ms                                  |
| maxPeakRssMb           | 286.6 MB                                 |
| maxCpuMsEstimate       | 3573 ms                                  |
| statSampleCount        | 200                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 110.8 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1480 ms  | 250 MB       | 2721 ms          | 58/58           | 0    |
| 1   | captured | 2        | 106.6 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1489 ms  | 255.5 MB     | 2713 ms          | 59/59           | 0    |
| 2   | captured | 2        | 105.7 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1463 ms  | 257.7 MB     | 2662 ms          | 57/57           | 0    |
