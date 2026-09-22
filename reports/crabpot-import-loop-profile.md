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
| p50WallMs                      | 2977     |
| p95WallMs                      | 3022     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 61 ms    |
| p95OpenClawImportMs            | 61.3 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 422.3 MB |
| maxCpuMsEstimate               | 4082 ms  |
| baselineReferenceWallMs        | 3050 ms  |
| baselineReferencePeakRssMb     | 422.3 MB |
| baselineReferenceCpuMsEstimate | 4132 ms  |
| statSampleCount                | 356      |
| rssSampleCount                 | 356      |
| cpuSampleCount                 | 356      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3050 ms                                  |
| referencePeakRssMb     | 422.3 MB                                 |
| referenceCpuMsEstimate | 4132 ms                                  |
| maxWallMs              | 6663 ms                                  |
| maxPeakRssMb           | 580.3 MB                                 |
| maxCpuMsEstimate       | 6280 ms                                  |
| statSampleCount        | 505                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 61.3 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2977 ms  | 419.4 MB     | 4069 ms          | 118/118         | 0    |
| 1   | captured | 2        | 61 ms           | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2975 ms  | 422.3 MB     | 4058 ms          | 118/118         | 0    |
| 2   | captured | 2        | 60 ms           | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 3022 ms  | 419.5 MB     | 4082 ms          | 120/120         | 0    |
