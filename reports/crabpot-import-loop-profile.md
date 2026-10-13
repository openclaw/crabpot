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
| p50WallMs                      | 2497     |
| p95WallMs                      | 2619     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 102      |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 70.5 ms  |
| p95OpenClawImportMs            | 73.6 ms  |
| p50OpenClawActivationMs        | 0.8 ms   |
| p95OpenClawActivationMs        | 0.8 ms   |
| maxPeakRssMb                   | 510 MB   |
| maxCpuMsEstimate               | 3694 ms  |
| baselineReferenceWallMs        | 2517 ms  |
| baselineReferencePeakRssMb     | 532.6 MB |
| baselineReferenceCpuMsEstimate | 3709 ms  |
| statSampleCount                | 301      |
| rssSampleCount                 | 301      |
| cpuSampleCount                 | 301      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2517 ms                                  |
| referencePeakRssMb     | 532.6 MB                                 |
| referenceCpuMsEstimate | 3709 ms                                  |
| maxWallMs              | 5881 ms                                  |
| maxPeakRssMb           | 735.3 MB                                 |
| maxCpuMsEstimate       | 5753 ms                                  |
| statSampleCount        | 433                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 63.6 ms         | 0.8 ms            | 0 ms              | 0 MB             | 0 ms             | 2461 ms  | 510 MB       | 3580 ms          | 98/98           | 0    |
| 1   | captured | 2        | 73.6 ms         | 0.8 ms            | 102 ms            | 0 MB             | 0 ms             | 2619 ms  | 507.7 MB     | 3694 ms          | 104/104         | 0    |
| 2   | captured | 2        | 70.5 ms         | 0.8 ms            | 0 ms              | 0 MB             | 0 ms             | 2497 ms  | 507 MB       | 3641 ms          | 99/99           | 0    |
