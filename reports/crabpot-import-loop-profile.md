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
| p50WallMs                      | 2243     |
| p95WallMs                      | 2270     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 8.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.5 ms |
| p95OpenClawImportMs            | 119.1 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 299.7 MB |
| maxCpuMsEstimate               | 4531 ms  |
| baselineReferenceWallMs        | 2297 ms  |
| baselineReferencePeakRssMb     | 291.1 MB |
| baselineReferenceCpuMsEstimate | 4564 ms  |
| statSampleCount                | 263      |
| rssSampleCount                 | 263      |
| cpuSampleCount                 | 263      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2297 ms                                  |
| referencePeakRssMb     | 291.1 MB                                 |
| referenceCpuMsEstimate | 4564 ms                                  |
| maxWallMs              | 3064 ms                                  |
| maxPeakRssMb           | 310.8 MB                                 |
| maxCpuMsEstimate       | 5560 ms                                  |
| statSampleCount        | 295                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 119.1 ms        | 0.3 ms            | 0 ms              | 8.6 MB           | 0 ms             | 2243 ms  | 299.7 MB     | 4461 ms          | 88/88           | 0    |
| 1   | captured | 2        | 114.5 ms        | 0.3 ms            | 0 ms              | 4.2 MB           | 0 ms             | 2178 ms  | 295.3 MB     | 4329 ms          | 86/86           | 0    |
| 2   | captured | 2        | 113.2 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2270 ms  | 289.3 MB     | 4531 ms          | 89/89           | 0    |
