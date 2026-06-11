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
| p50WallMs                      | 2489     |
| p95WallMs                      | 2501     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 12.3 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 115.7 ms |
| p95OpenClawImportMs            | 116.5 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 305.1 MB |
| maxCpuMsEstimate               | 4967 ms  |
| baselineReferenceWallMs        | 2541 ms  |
| baselineReferencePeakRssMb     | 292.8 MB |
| baselineReferenceCpuMsEstimate | 5043 ms  |
| statSampleCount                | 294      |
| rssSampleCount                 | 294      |
| cpuSampleCount                 | 294      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2541 ms                                  |
| referencePeakRssMb     | 292.8 MB                                 |
| referenceCpuMsEstimate | 5043 ms                                  |
| maxWallMs              | 3275 ms                                  |
| maxPeakRssMb           | 308.6 MB                                 |
| maxCpuMsEstimate       | 5932 ms                                  |
| statSampleCount        | 319                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 116.5 ms        | 0.4 ms            | 0 ms              | 12.3 MB          | 0 ms             | 2501 ms  | 305.1 MB     | 4943 ms          | 98/98           | 0    |
| 1   | captured | 2        | 115.7 ms        | 0.4 ms            | 0 ms              | 4.1 MB           | 0 ms             | 2478 ms  | 296.9 MB     | 4967 ms          | 98/98           | 0    |
| 2   | captured | 2        | 113.2 ms        | 0.4 ms            | 0 ms              | 0.4 MB           | 0 ms             | 2489 ms  | 293.2 MB     | 4932 ms          | 98/98           | 0    |
