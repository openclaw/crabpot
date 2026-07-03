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
| p50WallMs                      | 2453     |
| p95WallMs                      | 2477     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 3 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 117.8 ms |
| p95OpenClawImportMs            | 126.6 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 310.8 MB |
| maxCpuMsEstimate               | 4902 ms  |
| baselineReferenceWallMs        | 2568 ms  |
| baselineReferencePeakRssMb     | 307.8 MB |
| baselineReferenceCpuMsEstimate | 4982 ms  |
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
| referenceWallMs        | 2568 ms                                  |
| referencePeakRssMb     | 307.8 MB                                 |
| referenceCpuMsEstimate | 4982 ms                                  |
| maxWallMs              | 3429 ms                                  |
| maxPeakRssMb           | 318.5 MB                                 |
| maxCpuMsEstimate       | 6177 ms                                  |
| statSampleCount        | 326                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 117.6 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2453 ms  | 302.7 MB     | 4902 ms          | 96/96           | 0    |
| 1   | captured | 2        | 117.8 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2477 ms  | 302.3 MB     | 4888 ms          | 98/98           | 0    |
| 2   | captured | 2        | 126.6 ms        | 0.4 ms            | 0 ms              | 3 MB             | 0 ms             | 2444 ms  | 310.8 MB     | 4892 ms          | 96/96           | 0    |
