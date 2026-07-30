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
| p50WallMs                      | 3065     |
| p95WallMs                      | 3067     |
| p50PluginWallDeltaMs           | 31       |
| p95PluginWallDeltaMs           | 33       |
| maxPluginPeakRssDeltaMb        | 3.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 72 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 124 ms   |
| p95OpenClawImportMs            | 125.1 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 343.8 MB |
| maxCpuMsEstimate               | 6121 ms  |
| baselineReferenceWallMs        | 3034 ms  |
| baselineReferencePeakRssMb     | 340.1 MB |
| baselineReferenceCpuMsEstimate | 6049 ms  |
| statSampleCount                | 361      |
| rssSampleCount                 | 361      |
| cpuSampleCount                 | 361      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3034 ms                                  |
| referencePeakRssMb     | 340.1 MB                                 |
| referenceCpuMsEstimate | 6049 ms                                  |
| maxWallMs              | 4083 ms                                  |
| maxPeakRssMb           | 352.2 MB                                 |
| maxCpuMsEstimate       | 7337 ms                                  |
| statSampleCount        | 396                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 125.1 ms        | 0.4 ms            | 33 ms             | 3.5 MB           | 72 ms            | 3067 ms  | 343.6 MB     | 6121 ms          | 121/121         | 0    |
| 1   | captured | 2        | 120.5 ms        | 0.4 ms            | 0 ms              | 0.4 MB           | 0 ms             | 3034 ms  | 340.5 MB     | 6012 ms          | 119/119         | 0    |
| 2   | captured | 2        | 124 ms          | 0.4 ms            | 31 ms             | 3.7 MB           | 8 ms             | 3065 ms  | 343.8 MB     | 6057 ms          | 121/121         | 0    |
