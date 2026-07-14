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
| p95WallMs                      | 2402     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 123.6 ms |
| p95OpenClawImportMs            | 124.8 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 297 MB   |
| maxCpuMsEstimate               | 4762 ms  |
| baselineReferenceWallMs        | 2425 ms  |
| baselineReferencePeakRssMb     | 306.3 MB |
| baselineReferenceCpuMsEstimate | 4808 ms  |
| statSampleCount                | 280      |
| rssSampleCount                 | 280      |
| cpuSampleCount                 | 280      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2425 ms                                  |
| referencePeakRssMb     | 306.3 MB                                 |
| referenceCpuMsEstimate | 4808 ms                                  |
| maxWallMs              | 3271 ms                                  |
| maxPeakRssMb           | 313.6 MB                                 |
| maxCpuMsEstimate       | 5826 ms                                  |
| statSampleCount        | 314                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 124.8 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2314 ms  | 286.6 MB     | 4626 ms          | 91/91           | 0    |
| 1   | captured | 2        | 123.6 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2374 ms  | 296.2 MB     | 4720 ms          | 94/94           | 0    |
| 2   | captured | 2        | 122.8 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2402 ms  | 297 MB       | 4762 ms          | 95/95           | 0    |
