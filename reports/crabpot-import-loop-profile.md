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
| p50WallMs                      | 2413     |
| p95WallMs                      | 2439     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 11.6 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.3 ms |
| p95OpenClawImportMs            | 114.6 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 313 MB   |
| maxCpuMsEstimate               | 4822 ms  |
| baselineReferenceWallMs        | 2446 ms  |
| baselineReferencePeakRssMb     | 301.4 MB |
| baselineReferenceCpuMsEstimate | 4885 ms  |
| statSampleCount                | 287      |
| rssSampleCount                 | 287      |
| cpuSampleCount                 | 287      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2446 ms                                  |
| referencePeakRssMb     | 301.4 MB                                 |
| referenceCpuMsEstimate | 4885 ms                                  |
| maxWallMs              | 3253 ms                                  |
| maxPeakRssMb           | 312.7 MB                                 |
| maxCpuMsEstimate       | 5835 ms                                  |
| statSampleCount        | 320                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.6 ms        | 0.4 ms            | 0 ms              | 11.6 MB          | 0 ms             | 2439 ms  | 313 MB       | 4822 ms          | 97/97           | 0    |
| 1   | captured | 2        | 110.4 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2413 ms  | 288.2 MB     | 4768 ms          | 96/96           | 0    |
| 2   | captured | 2        | 114.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2363 ms  | 298.7 MB     | 4713 ms          | 94/94           | 0    |
