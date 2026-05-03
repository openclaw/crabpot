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
| p50WallMs                      | 2269     |
| p95WallMs                      | 2301     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 17.6 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 56 ms    |
| p95OpenClawImportMs            | 57 ms    |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 350.6 MB |
| maxCpuMsEstimate               | 4573 ms  |
| baselineReferenceWallMs        | 2325 ms  |
| baselineReferencePeakRssMb     | 333 MB   |
| baselineReferenceCpuMsEstimate | 4627 ms  |
| statSampleCount                | 269      |
| rssSampleCount                 | 269      |
| cpuSampleCount                 | 269      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2325 ms                                  |
| referencePeakRssMb     | 333 MB                                   |
| referenceCpuMsEstimate | 4627 ms                                  |
| maxWallMs              | 2853 ms                                  |
| maxPeakRssMb           | 335.2 MB                                 |
| maxCpuMsEstimate       | 5104 ms                                  |
| statSampleCount        | 291                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 57 ms           | 0.3 ms            | 0 ms              | 8.7 MB           | 0 ms             | 2268 ms  | 341.7 MB     | 4449 ms          | 90/90           | 0    |
| 1   | captured | 2        | 55.3 ms         | 0.3 ms            | 0 ms              | 10.9 MB          | 0 ms             | 2269 ms  | 343.9 MB     | 4512 ms          | 89/89           | 0    |
| 2   | captured | 2        | 56 ms           | 0.3 ms            | 0 ms              | 17.6 MB          | 0 ms             | 2301 ms  | 350.6 MB     | 4573 ms          | 90/90           | 0    |
