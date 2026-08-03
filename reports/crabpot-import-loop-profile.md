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
| p50WallMs                      | 3047     |
| p95WallMs                      | 3054     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 5        |
| maxPluginPeakRssDeltaMb        | 0.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 38 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 123.2 ms |
| p95OpenClawImportMs            | 124.7 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 348.3 MB |
| maxCpuMsEstimate               | 6089 ms  |
| baselineReferenceWallMs        | 3049 ms  |
| baselineReferencePeakRssMb     | 347.4 MB |
| baselineReferenceCpuMsEstimate | 6051 ms  |
| statSampleCount                | 361      |
| rssSampleCount                 | 361      |
| cpuSampleCount                 | 361      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3049 ms                                  |
| referencePeakRssMb     | 347.4 MB                                 |
| referenceCpuMsEstimate | 6051 ms                                  |
| maxWallMs              | 4118 ms                                  |
| maxPeakRssMb           | 353.6 MB                                 |
| maxCpuMsEstimate       | 7390 ms                                  |
| statSampleCount        | 399                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 124.7 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 3047 ms  | 345.1 MB     | 6028 ms          | 120/120         | 0    |
| 1   | captured | 2        | 120.7 ms        | 0.4 ms            | 5 ms              | 0 MB             | 38 ms            | 3054 ms  | 340.4 MB     | 6089 ms          | 121/121         | 0    |
| 2   | captured | 2        | 123.2 ms        | 0.4 ms            | 0 ms              | 0.9 MB           | 0 ms             | 3015 ms  | 348.3 MB     | 5985 ms          | 120/120         | 0    |
