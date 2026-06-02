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
| p50WallMs                      | 1034     |
| p95WallMs                      | 1077     |
| p50PluginWallDeltaMs           | 10       |
| p95PluginWallDeltaMs           | 53       |
| maxPluginPeakRssDeltaMb        | 1.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 112 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 74.7 ms  |
| p95OpenClawImportMs            | 75.9 ms  |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.2 ms   |
| maxPeakRssMb                   | 294.4 MB |
| maxCpuMsEstimate               | 2153 ms  |
| baselineReferenceWallMs        | 1024 ms  |
| baselineReferencePeakRssMb     | 292.6 MB |
| baselineReferenceCpuMsEstimate | 2041 ms  |
| statSampleCount                | 123      |
| rssSampleCount                 | 123      |
| cpuSampleCount                 | 123      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1024 ms                                  |
| referencePeakRssMb     | 292.6 MB                                 |
| referenceCpuMsEstimate | 2041 ms                                  |
| maxWallMs              | 1439 ms                                  |
| maxPeakRssMb           | 300.9 MB                                 |
| maxCpuMsEstimate       | 2520 ms                                  |
| statSampleCount        | 136                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 74.7 ms         | 0.2 ms            | 53 ms             | 1.8 MB           | 112 ms           | 1077 ms  | 294.4 MB     | 2153 ms          | 43/43           | 0    |
| 1   | captured | 2        | 75.9 ms         | 0.2 ms            | 10 ms             | 0 MB             | 0 ms             | 1034 ms  | 291 MB       | 2029 ms          | 40/40           | 0    |
| 2   | captured | 2        | 72.4 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1003 ms  | 290.1 MB     | 2021 ms          | 40/40           | 0    |
