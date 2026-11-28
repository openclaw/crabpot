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
| p50WallMs                      | 4449     |
| p95WallMs                      | 4482     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 9        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 64.5 ms  |
| p95OpenClawImportMs            | 65.8 ms  |
| p50OpenClawActivationMs        | 0.8 ms   |
| p95OpenClawActivationMs        | 0.9 ms   |
| maxPeakRssMb                   | 816.8 MB |
| maxCpuMsEstimate               | 6560 ms  |
| baselineReferenceWallMs        | 4473 ms  |
| baselineReferencePeakRssMb     | 817.9 MB |
| baselineReferenceCpuMsEstimate | 6600 ms  |
| statSampleCount                | 529      |
| rssSampleCount                 | 529      |
| cpuSampleCount                 | 529      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4473 ms                                  |
| referencePeakRssMb     | 817.9 MB                                 |
| referenceCpuMsEstimate | 6600 ms                                  |
| maxWallMs              | 10005 ms                                 |
| maxPeakRssMb           | 1033.6 MB                                |
| maxCpuMsEstimate       | 9103 ms                                  |
| statSampleCount        | 750                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 64.5 ms         | 0.9 ms            | 9 ms              | 0 MB             | 0 ms             | 4482 ms  | 812.4 MB     | 6560 ms          | 178/178         | 0    |
| 1   | captured | 2        | 65.8 ms         | 0.8 ms            | 0 ms              | 0 MB             | 0 ms             | 4449 ms  | 816.8 MB     | 6548 ms          | 176/176         | 0    |
| 2   | captured | 2        | 64.5 ms         | 0.8 ms            | 0 ms              | 0 MB             | 0 ms             | 4406 ms  | 806.3 MB     | 6475 ms          | 175/175         | 0    |

## Capture cleanup

removed: `crabpot-lifecycle-capture-ICRYog` in the system temp directory.
