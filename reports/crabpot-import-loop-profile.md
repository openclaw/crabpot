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
| p50WallMs                      | 4918     |
| p95WallMs                      | 5007     |
| p50PluginWallDeltaMs           | 1589     |
| p95PluginWallDeltaMs           | 1678     |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 262 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 346.7 ms |
| p95OpenClawImportMs            | 375.8 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 349.6 MB |
| maxCpuMsEstimate               | 2520 ms  |
| baselineReferenceWallMs        | 3329 ms  |
| baselineReferencePeakRssMb     | 353.2 MB |
| baselineReferenceCpuMsEstimate | 2258 ms  |
| statSampleCount                | 44       |
| rssSampleCount                 | 44       |
| cpuSampleCount                 | 44       |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3329 ms                                  |
| referencePeakRssMb     | 353.2 MB                                 |
| referenceCpuMsEstimate | 2258 ms                                  |
| maxWallMs              | 3924 ms                                  |
| maxPeakRssMb           | 360.3 MB                                 |
| maxCpuMsEstimate       | 2513 ms                                  |
| statSampleCount        | 28                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 375.8 ms        | 0.4 ms            | 1678 ms           | 0 MB             | 262 ms           | 5007 ms  | 334.3 MB     | 2520 ms          | 15/15           | 0    |
| 1   | captured | 2        | 346.7 ms        | 0.3 ms            | 1589 ms           | 0 MB             | 223 ms           | 4918 ms  | 349.6 MB     | 2481 ms          | 15/15           | 0    |
| 2   | captured | 2        | 335.9 ms        | 0.2 ms            | 1345 ms           | 0 MB             | 35 ms            | 4674 ms  | 329.9 MB     | 2293 ms          | 14/14           | 0    |
