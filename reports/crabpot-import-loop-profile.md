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
| p95WallMs                      | 2520     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 14.4 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 120.6 ms |
| p95OpenClawImportMs            | 126.7 ms |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 306.3 MB |
| maxCpuMsEstimate               | 5024 ms  |
| baselineReferenceWallMs        | 2610 ms  |
| baselineReferencePeakRssMb     | 291.9 MB |
| baselineReferenceCpuMsEstimate | 5106 ms  |
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
| referenceWallMs        | 2610 ms                                  |
| referencePeakRssMb     | 291.9 MB                                 |
| referenceCpuMsEstimate | 5106 ms                                  |
| maxWallMs              | 3471 ms                                  |
| maxPeakRssMb           | 308.4 MB                                 |
| maxCpuMsEstimate       | 6078 ms                                  |
| statSampleCount        | 337                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 120.6 ms        | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2497 ms  | 281.8 MB     | 4984 ms          | 99/99           | 0    |
| 1   | captured | 2        | 119.4 ms        | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2437 ms  | 286.5 MB     | 4811 ms          | 96/96           | 0    |
| 2   | captured | 2        | 126.7 ms        | 0.4 ms            | 0 ms              | 14.4 MB          | 0 ms             | 2520 ms  | 306.3 MB     | 5024 ms          | 99/99           | 0    |
