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
| p50WallMs                      | 1558     |
| p95WallMs                      | 1558     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 110.3 ms |
| p95OpenClawImportMs            | 115.5 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 260.3 MB |
| maxCpuMsEstimate               | 2880 ms  |
| baselineReferenceWallMs        | 1602 ms  |
| baselineReferencePeakRssMb     | 260.3 MB |
| baselineReferenceCpuMsEstimate | 2914 ms  |
| statSampleCount                | 184      |
| rssSampleCount                 | 184      |
| cpuSampleCount                 | 184      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1602 ms                                  |
| referencePeakRssMb     | 260.3 MB                                 |
| referenceCpuMsEstimate | 2914 ms                                  |
| maxWallMs              | 2078 ms                                  |
| maxPeakRssMb           | 264.3 MB                                 |
| maxCpuMsEstimate       | 3684 ms                                  |
| statSampleCount        | 205                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 110.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1558 ms  | 256.1 MB     | 2880 ms          | 62/62           | 0    |
| 1   | captured | 2        | 115.5 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1556 ms  | 258.1 MB     | 2824 ms          | 61/61           | 0    |
| 2   | captured | 2        | 107.1 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1558 ms  | 260.3 MB     | 2819 ms          | 61/61           | 0    |
