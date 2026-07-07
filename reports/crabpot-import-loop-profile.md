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
| p50WallMs                      | 2439     |
| p95WallMs                      | 2492     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 14       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 116.2 ms |
| p95OpenClawImportMs            | 119.4 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 307.5 MB |
| maxCpuMsEstimate               | 4860 ms  |
| baselineReferenceWallMs        | 2478 ms  |
| baselineReferencePeakRssMb     | 307.7 MB |
| baselineReferenceCpuMsEstimate | 4909 ms  |
| statSampleCount                | 290      |
| rssSampleCount                 | 290      |
| cpuSampleCount                 | 290      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2478 ms                                  |
| referencePeakRssMb     | 307.7 MB                                 |
| referenceCpuMsEstimate | 4909 ms                                  |
| maxWallMs              | 3463 ms                                  |
| maxPeakRssMb           | 315.9 MB                                 |
| maxCpuMsEstimate       | 6103 ms                                  |
| statSampleCount        | 326                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 119.4 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2439 ms  | 307.5 MB     | 4745 ms          | 96/96           | 0    |
| 1   | captured | 2        | 116.2 ms        | 0.4 ms            | 14 ms             | 0 MB             | 0 ms             | 2492 ms  | 291.8 MB     | 4860 ms          | 98/98           | 0    |
| 2   | captured | 2        | 113.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2435 ms  | 296.9 MB     | 4786 ms          | 96/96           | 0    |
