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
| p50WallMs                      | 2277     |
| p95WallMs                      | 2283     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114 ms   |
| p95OpenClawImportMs            | 114.4 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 302.5 MB |
| maxCpuMsEstimate               | 4516 ms  |
| baselineReferenceWallMs        | 2310 ms  |
| baselineReferencePeakRssMb     | 300.1 MB |
| baselineReferenceCpuMsEstimate | 4582 ms  |
| statSampleCount                | 268      |
| rssSampleCount                 | 268      |
| cpuSampleCount                 | 268      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2310 ms                                  |
| referencePeakRssMb     | 300.1 MB                                 |
| referenceCpuMsEstimate | 4582 ms                                  |
| maxWallMs              | 3266 ms                                  |
| maxPeakRssMb           | 315.3 MB                                 |
| maxCpuMsEstimate       | 5810 ms                                  |
| statSampleCount        | 309                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114 ms          | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2258 ms  | 292.5 MB     | 4461 ms          | 89/89           | 0    |
| 1   | captured | 2        | 113.7 ms        | 0.3 ms            | 0 ms              | 2.1 MB           | 0 ms             | 2283 ms  | 302.2 MB     | 4516 ms          | 90/90           | 0    |
| 2   | captured | 2        | 114.4 ms        | 0.4 ms            | 0 ms              | 2.4 MB           | 0 ms             | 2277 ms  | 302.5 MB     | 4448 ms          | 89/89           | 0    |
