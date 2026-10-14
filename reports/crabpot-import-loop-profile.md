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
| p50WallMs                      | 2703     |
| p95WallMs                      | 2711     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 8        |
| maxPluginPeakRssDeltaMb        | 21.8 MB  |
| maxPluginCpuDeltaMsEstimate    | 73 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 81.5 ms  |
| p95OpenClawImportMs            | 86.3 ms  |
| p50OpenClawActivationMs        | 0.7 ms   |
| p95OpenClawActivationMs        | 0.8 ms   |
| maxPeakRssMb                   | 532.2 MB |
| maxCpuMsEstimate               | 4014 ms  |
| baselineReferenceWallMs        | 2703 ms  |
| baselineReferencePeakRssMb     | 510.4 MB |
| baselineReferenceCpuMsEstimate | 3941 ms  |
| statSampleCount                | 320      |
| rssSampleCount                 | 320      |
| cpuSampleCount                 | 320      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2703 ms                                  |
| referencePeakRssMb     | 510.4 MB                                 |
| referenceCpuMsEstimate | 3941 ms                                  |
| maxWallMs              | 6728 ms                                  |
| maxPeakRssMb           | 744 MB                                   |
| maxCpuMsEstimate       | 6519 ms                                  |
| statSampleCount        | 479                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 86.3 ms         | 0.7 ms            | 8 ms              | 21.8 MB          | 73 ms            | 2711 ms  | 532.2 MB     | 4014 ms          | 108/108         | 0    |
| 1   | captured | 2        | 77.4 ms         | 0.7 ms            | 0 ms              | 20.6 MB          | 48 ms            | 2703 ms  | 531 MB       | 3989 ms          | 107/107         | 0    |
| 2   | captured | 2        | 81.5 ms         | 0.8 ms            | 0 ms              | 0 MB             | 0 ms             | 2646 ms  | 508.8 MB     | 3925 ms          | 105/105         | 0    |
