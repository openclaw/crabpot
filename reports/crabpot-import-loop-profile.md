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
| p50WallMs                      | 2023     |
| p95WallMs                      | 2049     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 19 MB    |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 104.1 ms |
| p95OpenClawImportMs            | 107.1 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 312.4 MB |
| maxCpuMsEstimate               | 4013 ms  |
| baselineReferenceWallMs        | 2094 ms  |
| baselineReferencePeakRssMb     | 293.4 MB |
| baselineReferenceCpuMsEstimate | 4127 ms  |
| statSampleCount                | 240      |
| rssSampleCount                 | 240      |
| cpuSampleCount                 | 240      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2094 ms                                  |
| referencePeakRssMb     | 293.4 MB                                 |
| referenceCpuMsEstimate | 4127 ms                                  |
| maxWallMs              | 2684 ms                                  |
| maxPeakRssMb           | 294.8 MB                                 |
| maxCpuMsEstimate       | 4751 ms                                  |
| statSampleCount        | 265                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 104.1 ms        | 0.5 ms            | 0 ms              | 2.8 MB           | 0 ms             | 2049 ms  | 296.2 MB     | 4013 ms          | 81/81           | 0    |
| 1   | captured | 2        | 100.6 ms        | 0.3 ms            | 0 ms              | 19 MB            | 0 ms             | 1992 ms  | 312.4 MB     | 3898 ms          | 79/79           | 0    |
| 2   | captured | 2        | 107.1 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2023 ms  | 289.1 MB     | 3946 ms          | 80/80           | 0    |
