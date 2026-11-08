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
| p50WallMs                      | 6927     |
| p95WallMs                      | 7004     |
| p50PluginWallDeltaMs           | 29       |
| p95PluginWallDeltaMs           | 106      |
| maxPluginPeakRssDeltaMb        | 3.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 175 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 93.6 ms  |
| p95OpenClawImportMs            | 99.6 ms  |
| p50OpenClawActivationMs        | 1.4 ms   |
| p95OpenClawActivationMs        | 1.5 ms   |
| maxPeakRssMb                   | 814.7 MB |
| maxCpuMsEstimate               | 9960 ms  |
| baselineReferenceWallMs        | 6898 ms  |
| baselineReferencePeakRssMb     | 810.8 MB |
| baselineReferenceCpuMsEstimate | 9785 ms  |
| statSampleCount                | 822      |
| rssSampleCount                 | 822      |
| cpuSampleCount                 | 822      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 6898 ms                                  |
| referencePeakRssMb     | 810.8 MB                                 |
| referenceCpuMsEstimate | 9785 ms                                  |
| maxWallMs              | 15083 ms                                 |
| maxPeakRssMb           | 1029.2 MB                                |
| maxCpuMsEstimate       | 13714 ms                                 |
| statSampleCount        | 1138                                     |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 93.3 ms         | 1.3 ms            | 29 ms             | 2.1 MB           | 96 ms            | 6927 ms  | 812.9 MB     | 9881 ms          | 274/274         | 0    |
| 1   | captured | 2        | 93.6 ms         | 1.4 ms            | 0 ms              | 3.9 MB           | 10 ms            | 6888 ms  | 814.7 MB     | 9795 ms          | 271/271         | 0    |
| 2   | captured | 2        | 99.6 ms         | 1.5 ms            | 106 ms            | 0 MB             | 175 ms           | 7004 ms  | 794.9 MB     | 9960 ms          | 277/277         | 0    |

## Capture cleanup

removed: `crabpot-lifecycle-capture-4xmR5N` in the system temp directory.
