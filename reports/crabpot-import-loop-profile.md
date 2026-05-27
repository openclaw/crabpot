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
| p50WallMs                      | 1916     |
| p95WallMs                      | 1945     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 3.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 102.3 ms |
| p95OpenClawImportMs            | 107.6 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 293.3 MB |
| maxCpuMsEstimate               | 3773 ms  |
| baselineReferenceWallMs        | 2115 ms  |
| baselineReferencePeakRssMb     | 289.7 MB |
| baselineReferenceCpuMsEstimate | 4002 ms  |
| statSampleCount                | 226      |
| rssSampleCount                 | 226      |
| cpuSampleCount                 | 226      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2115 ms                                  |
| referencePeakRssMb     | 289.7 MB                                 |
| referenceCpuMsEstimate | 4002 ms                                  |
| maxWallMs              | 2923 ms                                  |
| maxPeakRssMb           | 298.1 MB                                 |
| maxCpuMsEstimate       | 4979 ms                                  |
| statSampleCount        | 280                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 107.6 ms        | 0.4 ms            | 0 ms              | 0.6 MB           | 0 ms             | 1945 ms  | 290.3 MB     | 3773 ms          | 76/76           | 0    |
| 1   | captured | 2        | 100 ms          | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1913 ms  | 268.6 MB     | 3659 ms          | 75/75           | 0    |
| 2   | captured | 2        | 102.3 ms        | 0.5 ms            | 0 ms              | 3.6 MB           | 0 ms             | 1916 ms  | 293.3 MB     | 3742 ms          | 75/75           | 0    |
