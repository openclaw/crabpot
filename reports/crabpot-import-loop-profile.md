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
| p50WallMs                      | 2480     |
| p95WallMs                      | 2487     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 124 ms   |
| p95OpenClawImportMs            | 124.3 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 303.7 MB |
| maxCpuMsEstimate               | 4982 ms  |
| baselineReferenceWallMs        | 2578 ms  |
| baselineReferencePeakRssMb     | 310.5 MB |
| baselineReferenceCpuMsEstimate | 5093 ms  |
| statSampleCount                | 294      |
| rssSampleCount                 | 294      |
| cpuSampleCount                 | 294      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2578 ms                                  |
| referencePeakRssMb     | 310.5 MB                                 |
| referenceCpuMsEstimate | 5093 ms                                  |
| maxWallMs              | 3528 ms                                  |
| maxPeakRssMb           | 316.7 MB                                 |
| maxCpuMsEstimate       | 6248 ms                                  |
| statSampleCount        | 334                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 124.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2480 ms  | 301.4 MB     | 4982 ms          | 98/98           | 0    |
| 1   | captured | 2        | 120.4 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2471 ms  | 303.7 MB     | 4872 ms          | 98/98           | 0    |
| 2   | captured | 2        | 124 ms          | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2487 ms  | 303.7 MB     | 4925 ms          | 98/98           | 0    |
