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
| p50WallMs                      | 2374     |
| p95WallMs                      | 2393     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112.6 ms |
| p95OpenClawImportMs            | 115.6 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 303.3 MB |
| maxCpuMsEstimate               | 4774 ms  |
| baselineReferenceWallMs        | 2433 ms  |
| baselineReferencePeakRssMb     | 301.9 MB |
| baselineReferenceCpuMsEstimate | 4846 ms  |
| statSampleCount                | 282      |
| rssSampleCount                 | 282      |
| cpuSampleCount                 | 282      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2433 ms                                  |
| referencePeakRssMb     | 301.9 MB                                 |
| referenceCpuMsEstimate | 4846 ms                                  |
| maxWallMs              | 3179 ms                                  |
| maxPeakRssMb           | 313.3 MB                                 |
| maxCpuMsEstimate       | 5755 ms                                  |
| statSampleCount        | 311                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 115.6 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2356 ms  | 292.2 MB     | 4662 ms          | 93/93           | 0    |
| 1   | captured | 2        | 111.3 ms        | 0.4 ms            | 0 ms              | 1.4 MB           | 0 ms             | 2374 ms  | 303.3 MB     | 4692 ms          | 94/94           | 0    |
| 2   | captured | 2        | 112.6 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2393 ms  | 292.8 MB     | 4774 ms          | 95/95           | 0    |
