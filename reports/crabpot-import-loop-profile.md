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
| p50WallMs                      | 4363     |
| p95WallMs                      | 4396     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.6 ms |
| p95OpenClawImportMs            | 116.9 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.5 ms   |
| maxPeakRssMb                   | 530.1 MB |
| maxCpuMsEstimate               | 6078 ms  |
| baselineReferenceWallMs        | 4413 ms  |
| baselineReferencePeakRssMb     | 529.7 MB |
| baselineReferenceCpuMsEstimate | 6132 ms  |
| statSampleCount                | 521      |
| rssSampleCount                 | 521      |
| cpuSampleCount                 | 521      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4413 ms                                  |
| referencePeakRssMb     | 529.7 MB                                 |
| referenceCpuMsEstimate | 6132 ms                                  |
| maxWallMs              | 10170 ms                                 |
| maxPeakRssMb           | 728.6 MB                                 |
| maxCpuMsEstimate       | 9419 ms                                  |
| statSampleCount        | 754                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 109.5 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4360 ms  | 528.3 MB     | 5954 ms          | 173/173         | 0    |
| 1   | captured | 2        | 114.6 ms        | 1.5 ms            | 0 ms              | 0 MB             | 0 ms             | 4396 ms  | 527.6 MB     | 6078 ms          | 175/175         | 0    |
| 2   | captured | 2        | 116.9 ms        | 1.3 ms            | 0 ms              | 0.4 MB           | 0 ms             | 4363 ms  | 530.1 MB     | 6056 ms          | 173/173         | 0    |
