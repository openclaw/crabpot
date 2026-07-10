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
| p50WallMs                      | 2397     |
| p95WallMs                      | 2449     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112.9 ms |
| p95OpenClawImportMs            | 118.1 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 304.8 MB |
| maxCpuMsEstimate               | 4847 ms  |
| baselineReferenceWallMs        | 2463 ms  |
| baselineReferencePeakRssMb     | 315 MB   |
| baselineReferenceCpuMsEstimate | 4874 ms  |
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
| referenceWallMs        | 2463 ms                                  |
| referencePeakRssMb     | 315 MB                                   |
| referenceCpuMsEstimate | 4874 ms                                  |
| maxWallMs              | 3387 ms                                  |
| maxPeakRssMb           | 328.1 MB                                 |
| maxCpuMsEstimate       | 6055 ms                                  |
| statSampleCount        | 325                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 118.1 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2449 ms  | 299.4 MB     | 4847 ms          | 97/97           | 0    |
| 1   | captured | 2        | 112 ms          | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2392 ms  | 304.8 MB     | 4745 ms          | 95/95           | 0    |
| 2   | captured | 2        | 112.9 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2397 ms  | 289.5 MB     | 4784 ms          | 94/94           | 0    |
