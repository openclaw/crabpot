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
| p50WallMs                      | 2332     |
| p95WallMs                      | 2376     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 113.9 ms |
| p95OpenClawImportMs            | 114.7 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 5.4 ms   |
| maxPeakRssMb                   | 300.6 MB |
| maxCpuMsEstimate               | 4671 ms  |
| baselineReferenceWallMs        | 2413 ms  |
| baselineReferencePeakRssMb     | 303.8 MB |
| baselineReferenceCpuMsEstimate | 4825 ms  |
| statSampleCount                | 277      |
| rssSampleCount                 | 277      |
| cpuSampleCount                 | 277      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2413 ms                                  |
| referencePeakRssMb     | 303.8 MB                                 |
| referenceCpuMsEstimate | 4825 ms                                  |
| maxWallMs              | 3263 ms                                  |
| maxPeakRssMb           | 313.8 MB                                 |
| maxCpuMsEstimate       | 5772 ms                                  |
| statSampleCount        | 311                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.7 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2332 ms  | 299.6 MB     | 4589 ms          | 92/92           | 0    |
| 1   | captured | 2        | 111 ms          | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2302 ms  | 295 MB       | 4583 ms          | 91/91           | 0    |
| 2   | captured | 2        | 113.9 ms        | 5.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2376 ms  | 300.6 MB     | 4671 ms          | 94/94           | 0    |
