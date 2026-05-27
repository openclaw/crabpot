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
| p50WallMs                      | 1539     |
| p95WallMs                      | 1546     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 12.9 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 106.8 ms |
| p95OpenClawImportMs            | 111 ms   |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 273.3 MB |
| maxCpuMsEstimate               | 2831 ms  |
| baselineReferenceWallMs        | 1569 ms  |
| baselineReferencePeakRssMb     | 260.4 MB |
| baselineReferenceCpuMsEstimate | 2853 ms  |
| statSampleCount                | 182      |
| rssSampleCount                 | 182      |
| cpuSampleCount                 | 182      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1569 ms                                  |
| referencePeakRssMb     | 260.4 MB                                 |
| referenceCpuMsEstimate | 2853 ms                                  |
| maxWallMs              | 2106 ms                                  |
| maxPeakRssMb           | 263.2 MB                                 |
| maxCpuMsEstimate       | 3699 ms                                  |
| statSampleCount        | 206                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 111 ms          | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 1539 ms  | 255.8 MB     | 2785 ms          | 61/61           | 0    |
| 1   | captured | 2        | 106.8 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1546 ms  | 257 MB       | 2831 ms          | 61/61           | 0    |
| 2   | captured | 2        | 106.3 ms        | 0.4 ms            | 0 ms              | 12.9 MB          | 0 ms             | 1528 ms  | 273.3 MB     | 2798 ms          | 60/60           | 0    |
