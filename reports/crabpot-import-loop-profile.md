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
| p50WallMs                      | 2467     |
| p95WallMs                      | 2484     |
| p50PluginWallDeltaMs           | 258      |
| p95PluginWallDeltaMs           | 275      |
| maxPluginPeakRssDeltaMb        | 3.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 238 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 315.9 ms |
| p95OpenClawImportMs            | 316.1 ms |
| p50OpenClawActivationMs        | 0.1 ms   |
| p95OpenClawActivationMs        | 0.2 ms   |
| maxPeakRssMb                   | 352.2 MB |
| maxCpuMsEstimate               | 2037 ms  |
| baselineReferenceWallMs        | 2209 ms  |
| baselineReferencePeakRssMb     | 348.7 MB |
| baselineReferenceCpuMsEstimate | 1799 ms  |
| statSampleCount                | 20       |
| rssSampleCount                 | 20       |
| cpuSampleCount                 | 20       |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2209 ms                                  |
| referencePeakRssMb     | 348.7 MB                                 |
| referenceCpuMsEstimate | 1799 ms                                  |
| maxWallMs              | 2442 ms                                  |
| maxPeakRssMb           | 351.8 MB                                 |
| maxCpuMsEstimate       | 1838 ms                                  |
| statSampleCount        | 19                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 311.6 ms        | 0.2 ms            | 275 ms            | 3.5 MB           | 238 ms           | 2484 ms  | 352.2 MB     | 2037 ms          | 7/7             | 0    |
| 1   | captured | 2        | 316.1 ms        | 0.1 ms            | 258 ms            | 2.4 MB           | 224 ms           | 2467 ms  | 351.1 MB     | 2023 ms          | 7/7             | 0    |
| 2   | captured | 2        | 315.9 ms        | 0.1 ms            | 0 ms              | 2.9 MB           | 0 ms             | 2151 ms  | 351.6 MB     | 1757 ms          | 6/6             | 0    |
