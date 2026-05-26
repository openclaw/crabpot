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
| p50WallMs                      | 1537     |
| p95WallMs                      | 1556     |
| p50PluginWallDeltaMs           | 21       |
| p95PluginWallDeltaMs           | 40       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 150 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 109.4 ms |
| p95OpenClawImportMs            | 111.1 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 255.9 MB |
| maxCpuMsEstimate               | 2885 ms  |
| baselineReferenceWallMs        | 1516 ms  |
| baselineReferencePeakRssMb     | 264.6 MB |
| baselineReferenceCpuMsEstimate | 2735 ms  |
| statSampleCount                | 180      |
| rssSampleCount                 | 180      |
| cpuSampleCount                 | 180      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1516 ms                                  |
| referencePeakRssMb     | 264.6 MB                                 |
| referenceCpuMsEstimate | 2735 ms                                  |
| maxWallMs              | 2030 ms                                  |
| maxPeakRssMb           | 269.3 MB                                 |
| maxCpuMsEstimate       | 3594 ms                                  |
| statSampleCount        | 197                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 111.1 ms        | 0.3 ms            | 21 ms             | 0 MB             | 56 ms            | 1537 ms  | 255.9 MB     | 2791 ms          | 61/61           | 0    |
| 1   | captured | 2        | 109.1 ms        | 0.3 ms            | 40 ms             | 0 MB             | 150 ms           | 1556 ms  | 255 MB       | 2885 ms          | 61/61           | 0    |
| 2   | captured | 2        | 109.4 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1481 ms  | 255 MB       | 2702 ms          | 58/58           | 0    |
