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
| p50WallMs                      | 1489     |
| p95WallMs                      | 1489     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 107.9 ms |
| p95OpenClawImportMs            | 111.3 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 260.2 MB |
| maxCpuMsEstimate               | 2706 ms  |
| baselineReferenceWallMs        | 1547 ms  |
| baselineReferencePeakRssMb     | 260.6 MB |
| baselineReferenceCpuMsEstimate | 2811 ms  |
| statSampleCount                | 175      |
| rssSampleCount                 | 175      |
| cpuSampleCount                 | 175      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1547 ms                                  |
| referencePeakRssMb     | 260.6 MB                                 |
| referenceCpuMsEstimate | 2811 ms                                  |
| maxWallMs              | 2102 ms                                  |
| maxPeakRssMb           | 267.9 MB                                 |
| maxCpuMsEstimate       | 3658 ms                                  |
| statSampleCount        | 204                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 111.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1489 ms  | 258.9 MB     | 2696 ms          | 58/58           | 0    |
| 1   | captured | 2        | 107.9 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1489 ms  | 260.2 MB     | 2706 ms          | 59/59           | 0    |
| 2   | captured | 2        | 105.4 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1486 ms  | 257.7 MB     | 2684 ms          | 58/58           | 0    |
