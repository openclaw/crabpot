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
| p50WallMs                      | 1546     |
| p95WallMs                      | 1608     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 3.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 100.1 ms |
| p95OpenClawImportMs            | 101.6 ms |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 282.6 MB |
| maxCpuMsEstimate               | 2840 ms  |
| baselineReferenceWallMs        | 1608 ms  |
| baselineReferencePeakRssMb     | 279.5 MB |
| baselineReferenceCpuMsEstimate | 2888 ms  |
| statSampleCount                | 185      |
| rssSampleCount                 | 185      |
| cpuSampleCount                 | 185      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1608 ms                                  |
| referencePeakRssMb     | 279.5 MB                                 |
| referenceCpuMsEstimate | 2888 ms                                  |
| maxWallMs              | 2120 ms                                  |
| maxPeakRssMb           | 289.7 MB                                 |
| maxCpuMsEstimate       | 3697 ms                                  |
| statSampleCount        | 208                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 101.6 ms        | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1608 ms  | 274.4 MB     | 2840 ms          | 63/63           | 0    |
| 1   | captured | 2        | 100.1 ms        | 0.3 ms            | 0 ms              | 3.1 MB           | 0 ms             | 1539 ms  | 282.6 MB     | 2724 ms          | 61/61           | 0    |
| 2   | captured | 2        | 99.6 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1546 ms  | 276.7 MB     | 2765 ms          | 61/61           | 0    |
