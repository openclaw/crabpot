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
| p50WallMs                      | 3743     |
| p95WallMs                      | 3780     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 17.9 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 56.6 ms  |
| p95OpenClawImportMs            | 59 ms    |
| p50OpenClawActivationMs        | 0.7 ms   |
| p95OpenClawActivationMs        | 0.7 ms   |
| maxPeakRssMb                   | 834.8 MB |
| maxCpuMsEstimate               | 5727 ms  |
| baselineReferenceWallMs        | 3892 ms  |
| baselineReferencePeakRssMb     | 816.9 MB |
| baselineReferenceCpuMsEstimate | 5951 ms  |
| statSampleCount                | 446      |
| rssSampleCount                 | 446      |
| cpuSampleCount                 | 446      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3892 ms                                  |
| referencePeakRssMb     | 816.9 MB                                 |
| referenceCpuMsEstimate | 5951 ms                                  |
| maxWallMs              | 8729 ms                                  |
| maxPeakRssMb           | 1034.8 MB                                |
| maxCpuMsEstimate       | 8220 ms                                  |
| statSampleCount        | 652                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 56.6 ms         | 0.7 ms            | 0 ms              | 17.9 MB          | 0 ms             | 3739 ms  | 834.8 MB     | 5641 ms          | 148/148         | 0    |
| 1   | captured | 2        | 56.4 ms         | 0.6 ms            | 0 ms              | 1 MB             | 0 ms             | 3743 ms  | 817.9 MB     | 5682 ms          | 148/148         | 0    |
| 2   | captured | 2        | 59 ms           | 0.7 ms            | 0 ms              | 0 MB             | 0 ms             | 3780 ms  | 806.5 MB     | 5727 ms          | 150/150         | 0    |

## Capture cleanup

removed: `crabpot-lifecycle-capture-0d5cqt` in the system temp directory.
