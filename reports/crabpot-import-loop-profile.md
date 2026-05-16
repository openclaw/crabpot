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
| p50WallMs                      | 1428     |
| p95WallMs                      | 1485     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 83.2 ms  |
| p95OpenClawImportMs            | 97.3 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 252.2 MB |
| maxCpuMsEstimate               | 2636 ms  |
| baselineReferenceWallMs        | 1504 ms  |
| baselineReferencePeakRssMb     | 255.1 MB |
| baselineReferenceCpuMsEstimate | 2764 ms  |
| statSampleCount                | 169      |
| rssSampleCount                 | 169      |
| cpuSampleCount                 | 169      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1504 ms                                  |
| referencePeakRssMb     | 255.1 MB                                 |
| referenceCpuMsEstimate | 2764 ms                                  |
| maxWallMs              | 2245 ms                                  |
| maxPeakRssMb           | 272.9 MB                                 |
| maxCpuMsEstimate       | 3724 ms                                  |
| statSampleCount        | 205                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 83.2 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1395 ms  | 245.3 MB     | 2526 ms          | 55/55           | 0    |
| 1   | captured | 2        | 81.7 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1485 ms  | 242.7 MB     | 2580 ms          | 58/58           | 0    |
| 2   | captured | 2        | 97.3 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1428 ms  | 252.2 MB     | 2636 ms          | 56/56           | 0    |
