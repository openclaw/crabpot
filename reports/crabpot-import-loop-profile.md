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
| p50WallMs                      | 1501     |
| p95WallMs                      | 1540     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 5        |
| maxPluginPeakRssDeltaMb        | 2.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 108.1 ms |
| p95OpenClawImportMs            | 109.1 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 263.2 MB |
| maxCpuMsEstimate               | 2827 ms  |
| baselineReferenceWallMs        | 1535 ms  |
| baselineReferencePeakRssMb     | 260.9 MB |
| baselineReferenceCpuMsEstimate | 2827 ms  |
| statSampleCount                | 178      |
| rssSampleCount                 | 178      |
| cpuSampleCount                 | 178      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1535 ms                                  |
| referencePeakRssMb     | 260.9 MB                                 |
| referenceCpuMsEstimate | 2827 ms                                  |
| maxWallMs              | 2023 ms                                  |
| maxPeakRssMb           | 279.4 MB                                 |
| maxCpuMsEstimate       | 3609 ms                                  |
| statSampleCount        | 198                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 105.9 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1493 ms  | 258.4 MB     | 2722 ms          | 59/59           | 0    |
| 1   | captured | 2        | 109.1 ms        | 0.4 ms            | 5 ms              | 0.3 MB           | 0 ms             | 1540 ms  | 261.2 MB     | 2827 ms          | 60/60           | 0    |
| 2   | captured | 2        | 108.1 ms        | 0.3 ms            | 0 ms              | 2.3 MB           | 0 ms             | 1501 ms  | 263.2 MB     | 2718 ms          | 59/59           | 0    |
