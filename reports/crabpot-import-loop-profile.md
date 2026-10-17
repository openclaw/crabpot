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
| p50WallMs                      | 2443     |
| p95WallMs                      | 2519     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 2 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 69.8 ms  |
| p95OpenClawImportMs            | 73.8 ms  |
| p50OpenClawActivationMs        | 0.7 ms   |
| p95OpenClawActivationMs        | 0.8 ms   |
| maxPeakRssMb                   | 508.4 MB |
| maxCpuMsEstimate               | 3711 ms  |
| baselineReferenceWallMs        | 2539 ms  |
| baselineReferencePeakRssMb     | 507.9 MB |
| baselineReferenceCpuMsEstimate | 3709 ms  |
| statSampleCount                | 293      |
| rssSampleCount                 | 293      |
| cpuSampleCount                 | 293      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2539 ms                                  |
| referencePeakRssMb     | 507.9 MB                                 |
| referenceCpuMsEstimate | 3709 ms                                  |
| maxWallMs              | 6015 ms                                  |
| maxPeakRssMb           | 736 MB                                   |
| maxCpuMsEstimate       | 5841 ms                                  |
| statSampleCount        | 435                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 69.2 ms         | 0.7 ms            | 0 ms              | 0 MB             | 2 ms             | 2519 ms  | 507.9 MB     | 3711 ms          | 100/100         | 0    |
| 1   | captured | 2        | 69.8 ms         | 0.8 ms            | 0 ms              | 0 MB             | 0 ms             | 2443 ms  | 505.8 MB     | 3630 ms          | 97/97           | 0    |
| 2   | captured | 2        | 73.8 ms         | 0.7 ms            | 0 ms              | 0.5 MB           | 0 ms             | 2419 ms  | 508.4 MB     | 3529 ms          | 96/96           | 0    |
