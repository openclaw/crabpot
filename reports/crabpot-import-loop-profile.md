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
| p50WallMs                      | 2547     |
| p95WallMs                      | 2566     |
| p50PluginWallDeltaMs           | 2        |
| p95PluginWallDeltaMs           | 21       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 119.6 ms |
| p95OpenClawImportMs            | 131.1 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 309.9 MB |
| maxCpuMsEstimate               | 5095 ms  |
| baselineReferenceWallMs        | 2545 ms  |
| baselineReferencePeakRssMb     | 311.3 MB |
| baselineReferenceCpuMsEstimate | 5096 ms  |
| statSampleCount                | 299      |
| rssSampleCount                 | 299      |
| cpuSampleCount                 | 299      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2545 ms                                  |
| referencePeakRssMb     | 311.3 MB                                 |
| referenceCpuMsEstimate | 5096 ms                                  |
| maxWallMs              | 3433 ms                                  |
| maxPeakRssMb           | 324.5 MB                                 |
| maxCpuMsEstimate       | 6134 ms                                  |
| statSampleCount        | 332                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 131.1 ms        | 0.4 ms            | 2 ms              | 0 MB             | 0 ms             | 2547 ms  | 303.7 MB     | 5067 ms          | 101/101         | 0    |
| 1   | captured | 2        | 119.6 ms        | 0.3 ms            | 21 ms             | 0 MB             | 0 ms             | 2566 ms  | 296.7 MB     | 5095 ms          | 101/101         | 0    |
| 2   | captured | 2        | 118.4 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2493 ms  | 309.9 MB     | 4958 ms          | 97/97           | 0    |
