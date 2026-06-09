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
| p50WallMs                      | 2422     |
| p95WallMs                      | 2423     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 115 ms   |
| p95OpenClawImportMs            | 126.1 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 305.1 MB |
| maxCpuMsEstimate               | 4822 ms  |
| baselineReferenceWallMs        | 2462 ms  |
| baselineReferencePeakRssMb     | 305 MB   |
| baselineReferenceCpuMsEstimate | 4890 ms  |
| statSampleCount                | 286      |
| rssSampleCount                 | 286      |
| cpuSampleCount                 | 286      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2462 ms                                  |
| referencePeakRssMb     | 305 MB                                   |
| referenceCpuMsEstimate | 4890 ms                                  |
| maxWallMs              | 3266 ms                                  |
| maxPeakRssMb           | 313.3 MB                                 |
| maxCpuMsEstimate       | 5830 ms                                  |
| statSampleCount        | 316                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 109.7 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2422 ms  | 292.5 MB     | 4822 ms          | 96/96           | 0    |
| 1   | captured | 2        | 126.1 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2407 ms  | 284 MB       | 4791 ms          | 95/95           | 0    |
| 2   | captured | 2        | 115 ms          | 0.4 ms            | 0 ms              | 0.1 MB           | 0 ms             | 2423 ms  | 305.1 MB     | 4818 ms          | 95/95           | 0    |
