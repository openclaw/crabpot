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
| p50WallMs                      | 1913     |
| p95WallMs                      | 1970     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 3.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 42.6 ms  |
| p95OpenClawImportMs            | 43.6 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 421.2 MB |
| maxCpuMsEstimate               | 2693 ms  |
| baselineReferenceWallMs        | 2010 ms  |
| baselineReferencePeakRssMb     | 417.4 MB |
| baselineReferenceCpuMsEstimate | 2779 ms  |
| statSampleCount                | 230      |
| rssSampleCount                 | 230      |
| cpuSampleCount                 | 230      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2010 ms                                  |
| referencePeakRssMb     | 417.4 MB                                 |
| referenceCpuMsEstimate | 2779 ms                                  |
| maxWallMs              | 4846 ms                                  |
| maxPeakRssMb           | 575.5 MB                                 |
| maxCpuMsEstimate       | 4612 ms                                  |
| statSampleCount        | 347                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 43.6 ms         | 0.3 ms            | 0 ms              | 3.8 MB           | 0 ms             | 1913 ms  | 421.2 MB     | 2639 ms          | 76/76           | 0    |
| 1   | captured | 2        | 42.6 ms         | 0.3 ms            | 0 ms              | 2 MB             | 0 ms             | 1908 ms  | 419.4 MB     | 2693 ms          | 76/76           | 0    |
| 2   | captured | 2        | 42.5 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1970 ms  | 416.8 MB     | 2685 ms          | 78/78           | 0    |
