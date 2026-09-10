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
| p50WallMs                      | 2788     |
| p95WallMs                      | 2794     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 8 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112.5 ms |
| p95OpenClawImportMs            | 121.9 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 280.9 MB |
| maxCpuMsEstimate               | 3871 ms  |
| baselineReferenceWallMs        | 2800 ms  |
| baselineReferencePeakRssMb     | 281.1 MB |
| baselineReferenceCpuMsEstimate | 3863 ms  |
| statSampleCount                | 333      |
| rssSampleCount                 | 333      |
| cpuSampleCount                 | 333      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2800 ms                                  |
| referencePeakRssMb     | 281.1 MB                                 |
| referenceCpuMsEstimate | 3863 ms                                  |
| maxWallMs              | 6190 ms                                  |
| maxPeakRssMb           | 340.4 MB                                 |
| maxCpuMsEstimate       | 5677 ms                                  |
| statSampleCount        | 468                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 121.9 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2788 ms  | 280.9 MB     | 3831 ms          | 111/111         | 0    |
| 1   | captured | 2        | 112.5 ms        | 0.4 ms            | 0 ms              | 0 MB             | 8 ms             | 2779 ms  | 275.1 MB     | 3871 ms          | 111/111         | 0    |
| 2   | captured | 2        | 111.2 ms        | 0.4 ms            | 0 ms              | 0 MB             | 6 ms             | 2794 ms  | 276.5 MB     | 3869 ms          | 111/111         | 0    |
