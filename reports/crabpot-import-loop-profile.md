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
| p50WallMs                      | 2308     |
| p95WallMs                      | 2322     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.3 ms |
| p95OpenClawImportMs            | 114.8 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 294.1 MB |
| maxCpuMsEstimate               | 4675 ms  |
| baselineReferenceWallMs        | 2361 ms  |
| baselineReferencePeakRssMb     | 296.1 MB |
| baselineReferenceCpuMsEstimate | 4728 ms  |
| statSampleCount                | 273      |
| rssSampleCount                 | 273      |
| cpuSampleCount                 | 273      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2361 ms                                  |
| referencePeakRssMb     | 296.1 MB                                 |
| referenceCpuMsEstimate | 4728 ms                                  |
| maxWallMs              | 3295 ms                                  |
| maxPeakRssMb           | 319.5 MB                                 |
| maxCpuMsEstimate       | 5904 ms                                  |
| statSampleCount        | 314                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 113.2 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2322 ms  | 289.4 MB     | 4675 ms          | 91/91           | 0    |
| 1   | captured | 2        | 114.8 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2298 ms  | 289.2 MB     | 4581 ms          | 91/91           | 0    |
| 2   | captured | 2        | 114.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2308 ms  | 294.1 MB     | 4587 ms          | 91/91           | 0    |
