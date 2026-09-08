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
| p50WallMs                      | 2646     |
| p95WallMs                      | 2690     |
| p50PluginWallDeltaMs           | 18       |
| p95PluginWallDeltaMs           | 62       |
| maxPluginPeakRssDeltaMb        | 1.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 83 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 107 ms   |
| p95OpenClawImportMs            | 109.2 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 283.4 MB |
| maxCpuMsEstimate               | 3738 ms  |
| baselineReferenceWallMs        | 2628 ms  |
| baselineReferencePeakRssMb     | 281.9 MB |
| baselineReferenceCpuMsEstimate | 3655 ms  |
| statSampleCount                | 315      |
| rssSampleCount                 | 315      |
| cpuSampleCount                 | 315      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2628 ms                                  |
| referencePeakRssMb     | 281.9 MB                                 |
| referenceCpuMsEstimate | 3655 ms                                  |
| maxWallMs              | 5834 ms                                  |
| maxPeakRssMb           | 345.9 MB                                 |
| maxCpuMsEstimate       | 5262 ms                                  |
| statSampleCount        | 440                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 105.2 ms        | 0.4 ms            | 18 ms             | 0 MB             | 11 ms            | 2646 ms  | 267.5 MB     | 3666 ms          | 105/105         | 0    |
| 1   | captured | 2        | 109.2 ms        | 0.6 ms            | 62 ms             | 1.5 MB           | 83 ms            | 2690 ms  | 283.4 MB     | 3738 ms          | 107/107         | 0    |
| 2   | captured | 2        | 107 ms          | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2585 ms  | 281.5 MB     | 3591 ms          | 103/103         | 0    |
