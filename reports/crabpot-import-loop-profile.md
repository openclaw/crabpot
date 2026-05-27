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
| p50WallMs                      | 1505     |
| p95WallMs                      | 1507     |
| p50PluginWallDeltaMs           | 20       |
| p95PluginWallDeltaMs           | 22       |
| maxPluginPeakRssDeltaMb        | 3.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 40 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 107.3 ms |
| p95OpenClawImportMs            | 122.3 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 266 MB   |
| maxCpuMsEstimate               | 2752 ms  |
| baselineReferenceWallMs        | 1485 ms  |
| baselineReferencePeakRssMb     | 262.1 MB |
| baselineReferenceCpuMsEstimate | 2712 ms  |
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
| referenceWallMs        | 1485 ms                                  |
| referencePeakRssMb     | 262.1 MB                                 |
| referenceCpuMsEstimate | 2712 ms                                  |
| maxWallMs              | 2034 ms                                  |
| maxPeakRssMb           | 263.8 MB                                 |
| maxCpuMsEstimate       | 3586 ms                                  |
| statSampleCount        | 195                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 122.3 ms        | 0.3 ms            | 4 ms              | 0 MB             | 0 ms             | 1489 ms  | 259.5 MB     | 2701 ms          | 59/59           | 0    |
| 1   | captured | 2        | 104.5 ms        | 0.4 ms            | 22 ms             | 3.9 MB           | 27 ms            | 1507 ms  | 266 MB       | 2739 ms          | 60/60           | 0    |
| 2   | captured | 2        | 107.3 ms        | 0.3 ms            | 20 ms             | 0 MB             | 40 ms            | 1505 ms  | 257.3 MB     | 2752 ms          | 59/59           | 0    |
