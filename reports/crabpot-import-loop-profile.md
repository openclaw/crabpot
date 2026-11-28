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
| p50WallMs                      | 5084     |
| p95WallMs                      | 5086     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 4.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 69.1 ms  |
| p95OpenClawImportMs            | 69.8 ms  |
| p50OpenClawActivationMs        | 1 ms     |
| p95OpenClawActivationMs        | 1.1 ms   |
| maxPeakRssMb                   | 812.5 MB |
| maxCpuMsEstimate               | 7293 ms  |
| baselineReferenceWallMs        | 5127 ms  |
| baselineReferencePeakRssMb     | 808.4 MB |
| baselineReferenceCpuMsEstimate | 7317 ms  |
| statSampleCount                | 602      |
| rssSampleCount                 | 602      |
| cpuSampleCount                 | 602      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 5127 ms                                  |
| referencePeakRssMb     | 808.4 MB                                 |
| referenceCpuMsEstimate | 7317 ms                                  |
| maxWallMs              | 10799 ms                                 |
| maxPeakRssMb           | 997.5 MB                                 |
| maxCpuMsEstimate       | 9849 ms                                  |
| statSampleCount        | 832                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 69.1 ms         | 1.1 ms            | 0 ms              | 1.1 MB           | 0 ms             | 5084 ms  | 809.5 MB     | 7211 ms          | 201/201         | 0    |
| 1   | captured | 2        | 69.8 ms         | 0.9 ms            | 0 ms              | 0 MB             | 0 ms             | 5086 ms  | 803.4 MB     | 7293 ms          | 201/201         | 0    |
| 2   | captured | 2        | 68.8 ms         | 1 ms              | 0 ms              | 4.1 MB           | 0 ms             | 5056 ms  | 812.5 MB     | 7269 ms          | 200/200         | 0    |

## Capture cleanup

removed: `crabpot-lifecycle-capture-kdIeIO` in the system temp directory.
