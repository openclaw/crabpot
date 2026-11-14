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
| p50WallMs                      | 6881     |
| p95WallMs                      | 6913     |
| p50PluginWallDeltaMs           | 43       |
| p95PluginWallDeltaMs           | 75       |
| maxPluginPeakRssDeltaMb        | 3.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 89 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 93.1 ms  |
| p95OpenClawImportMs            | 99.4 ms  |
| p50OpenClawActivationMs        | 1.4 ms   |
| p95OpenClawActivationMs        | 1.4 ms   |
| maxPeakRssMb                   | 815.9 MB |
| maxCpuMsEstimate               | 9770 ms  |
| baselineReferenceWallMs        | 6838 ms  |
| baselineReferencePeakRssMb     | 812 MB   |
| baselineReferenceCpuMsEstimate | 9681 ms  |
| statSampleCount                | 814      |
| rssSampleCount                 | 814      |
| cpuSampleCount                 | 814      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 6838 ms                                  |
| referencePeakRssMb     | 812 MB                                   |
| referenceCpuMsEstimate | 9681 ms                                  |
| maxWallMs              | 15582 ms                                 |
| maxPeakRssMb           | 1057.9 MB                                |
| maxCpuMsEstimate       | 13420 ms                                 |
| statSampleCount        | 1158                                     |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 93.1 ms         | 1.4 ms            | 75 ms             | 0 MB             | 89 ms            | 6913 ms  | 808.2 MB     | 9770 ms          | 272/272         | 0    |
| 1   | captured | 2        | 92.1 ms         | 1.4 ms            | 0 ms              | 0 MB             | 78 ms            | 6809 ms  | 806.9 MB     | 9759 ms          | 269/269         | 0    |
| 2   | captured | 2        | 99.4 ms         | 1.3 ms            | 43 ms             | 3.9 MB           | 65 ms            | 6881 ms  | 815.9 MB     | 9746 ms          | 273/273         | 0    |

## Capture cleanup

removed: `crabpot-lifecycle-capture-iUmJU4` in the system temp directory.
