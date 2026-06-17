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
| p50WallMs                      | 2390     |
| p95WallMs                      | 2436     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 8 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.9 ms |
| p95OpenClawImportMs            | 115.2 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 307.9 MB |
| maxCpuMsEstimate               | 4798 ms  |
| baselineReferenceWallMs        | 2442 ms  |
| baselineReferencePeakRssMb     | 299.9 MB |
| baselineReferenceCpuMsEstimate | 4821 ms  |
| statSampleCount                | 284      |
| rssSampleCount                 | 284      |
| cpuSampleCount                 | 284      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2442 ms                                  |
| referencePeakRssMb     | 299.9 MB                                 |
| referenceCpuMsEstimate | 4821 ms                                  |
| maxWallMs              | 3254 ms                                  |
| maxPeakRssMb           | 319.3 MB                                 |
| maxCpuMsEstimate       | 5772 ms                                  |
| statSampleCount        | 319                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.9 ms        | 0.4 ms            | 0 ms              | 8 MB             | 0 ms             | 2390 ms  | 307.9 MB     | 4728 ms          | 95/95           | 0    |
| 1   | captured | 2        | 111.6 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2368 ms  | 286.9 MB     | 4732 ms          | 93/93           | 0    |
| 2   | captured | 2        | 115.2 ms        | 0.3 ms            | 0 ms              | 3.7 MB           | 0 ms             | 2436 ms  | 303.6 MB     | 4798 ms          | 96/96           | 0    |
