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
| p50WallMs                      | 2940     |
| p95WallMs                      | 2967     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 7        |
| maxPluginPeakRssDeltaMb        | 1.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 4 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 58.1 ms  |
| p95OpenClawImportMs            | 59.6 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 422.9 MB |
| maxCpuMsEstimate               | 4002 ms  |
| baselineReferenceWallMs        | 2960 ms  |
| baselineReferencePeakRssMb     | 421.3 MB |
| baselineReferenceCpuMsEstimate | 3998 ms  |
| statSampleCount                | 352      |
| rssSampleCount                 | 352      |
| cpuSampleCount                 | 352      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2960 ms                                  |
| referencePeakRssMb     | 421.3 MB                                 |
| referenceCpuMsEstimate | 3998 ms                                  |
| maxWallMs              | 6832 ms                                  |
| maxPeakRssMb           | 594.5 MB                                 |
| maxCpuMsEstimate       | 6227 ms                                  |
| statSampleCount        | 506                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 59.6 ms         | 0.5 ms            | 7 ms              | 0 MB             | 0 ms             | 2967 ms  | 420.5 MB     | 3951 ms          | 118/118         | 0    |
| 1   | captured | 2        | 58.1 ms         | 0.5 ms            | 0 ms              | 1.6 MB           | 0 ms             | 2934 ms  | 422.9 MB     | 3917 ms          | 117/117         | 0    |
| 2   | captured | 2        | 57 ms           | 0.5 ms            | 0 ms              | 0 MB             | 4 ms             | 2940 ms  | 418.8 MB     | 4002 ms          | 117/117         | 0    |
