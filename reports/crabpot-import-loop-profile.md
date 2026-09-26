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
| p50WallMs                      | 4396     |
| p95WallMs                      | 4401     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 113.9 ms |
| p95OpenClawImportMs            | 114.1 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 531.6 MB |
| maxCpuMsEstimate               | 6222 ms  |
| baselineReferenceWallMs        | 4481 ms  |
| baselineReferencePeakRssMb     | 530.3 MB |
| baselineReferenceCpuMsEstimate | 6232 ms  |
| statSampleCount                | 524      |
| rssSampleCount                 | 524      |
| cpuSampleCount                 | 524      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4481 ms                                  |
| referencePeakRssMb     | 530.3 MB                                 |
| referenceCpuMsEstimate | 6232 ms                                  |
| maxWallMs              | 10331 ms                                 |
| maxPeakRssMb           | 736.8 MB                                 |
| maxCpuMsEstimate       | 9553 ms                                  |
| statSampleCount        | 764                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 109.7 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4401 ms  | 528.8 MB     | 6088 ms          | 174/174         | 0    |
| 1   | captured | 2        | 113.9 ms        | 1.3 ms            | 0 ms              | 1.3 MB           | 0 ms             | 4396 ms  | 531.6 MB     | 6222 ms          | 175/175         | 0    |
| 2   | captured | 2        | 114.1 ms        | 1.3 ms            | 0 ms              | 0.7 MB           | 0 ms             | 4394 ms  | 531 MB       | 6040 ms          | 175/175         | 0    |
