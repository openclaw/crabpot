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
| p50WallMs                      | 3026     |
| p95WallMs                      | 3039     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 2        |
| maxPluginPeakRssDeltaMb        | 2.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 61.6 ms  |
| p95OpenClawImportMs            | 62.2 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 422.4 MB |
| maxCpuMsEstimate               | 4078 ms  |
| baselineReferenceWallMs        | 3037 ms  |
| baselineReferencePeakRssMb     | 419.5 MB |
| baselineReferenceCpuMsEstimate | 4182 ms  |
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
| referenceWallMs        | 3037 ms                                  |
| referencePeakRssMb     | 419.5 MB                                 |
| referenceCpuMsEstimate | 4182 ms                                  |
| maxWallMs              | 6745 ms                                  |
| maxPeakRssMb           | 599.3 MB                                 |
| maxCpuMsEstimate       | 6333 ms                                  |
| statSampleCount        | 508                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 61.6 ms         | 0.5 ms            | 0 ms              | 2.9 MB           | 0 ms             | 3026 ms  | 422.4 MB     | 4078 ms          | 120/120         | 0    |
| 1   | captured | 2        | 58.6 ms         | 0.5 ms            | 2 ms              | 0 MB             | 0 ms             | 3039 ms  | 419.4 MB     | 4077 ms          | 121/121         | 0    |
| 2   | captured | 2        | 62.2 ms         | 0.5 ms            | 0 ms              | 2.5 MB           | 0 ms             | 3005 ms  | 422 MB       | 4042 ms          | 120/120         | 0    |
