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
| p50WallMs                      | 1532     |
| p95WallMs                      | 1539     |
| p50PluginWallDeltaMs           | 8        |
| p95PluginWallDeltaMs           | 15       |
| maxPluginPeakRssDeltaMb        | 16.9 MB  |
| maxPluginCpuDeltaMsEstimate    | 56 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 107.9 ms |
| p95OpenClawImportMs            | 109.5 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 271.5 MB |
| maxCpuMsEstimate               | 2810 ms  |
| baselineReferenceWallMs        | 1524 ms  |
| baselineReferencePeakRssMb     | 254.6 MB |
| baselineReferenceCpuMsEstimate | 2754 ms  |
| statSampleCount                | 181      |
| rssSampleCount                 | 181      |
| cpuSampleCount                 | 181      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1524 ms                                  |
| referencePeakRssMb     | 254.6 MB                                 |
| referenceCpuMsEstimate | 2754 ms                                  |
| maxWallMs              | 2079 ms                                  |
| maxPeakRssMb           | 278.9 MB                                 |
| maxCpuMsEstimate       | 3531 ms                                  |
| statSampleCount        | 199                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 107.9 ms        | 0.4 ms            | 8 ms              | 0 MB             | 56 ms            | 1532 ms  | 253 MB       | 2810 ms          | 61/61           | 0    |
| 1   | captured | 2        | 109.5 ms        | 0.3 ms            | 15 ms             | 16.9 MB          | 56 ms            | 1539 ms  | 271.5 MB     | 2810 ms          | 61/61           | 0    |
| 2   | captured | 2        | 106.6 ms        | 0.5 ms            | 0 ms              | 4.1 MB           | 0 ms             | 1488 ms  | 258.7 MB     | 2735 ms          | 59/59           | 0    |
