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
| p50WallMs                      | 2163     |
| p95WallMs                      | 2181     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 17       |
| maxPluginPeakRssDeltaMb        | 11.7 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 109 ms   |
| p95OpenClawImportMs            | 110.5 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 304.4 MB |
| maxCpuMsEstimate               | 4362 ms  |
| baselineReferenceWallMs        | 2164 ms  |
| baselineReferencePeakRssMb     | 292.7 MB |
| baselineReferenceCpuMsEstimate | 4373 ms  |
| statSampleCount                | 252      |
| rssSampleCount                 | 252      |
| cpuSampleCount                 | 252      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2164 ms                                  |
| referencePeakRssMb     | 292.7 MB                                 |
| referenceCpuMsEstimate | 4373 ms                                  |
| maxWallMs              | 3029 ms                                  |
| maxPeakRssMb           | 310.4 MB                                 |
| maxCpuMsEstimate       | 5445 ms                                  |
| statSampleCount        | 292                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 110.5 ms        | 0.3 ms            | 0 ms              | 11.7 MB          | 0 ms             | 2163 ms  | 304.4 MB     | 4311 ms          | 85/85           | 0    |
| 1   | captured | 2        | 109 ms          | 0.3 ms            | 17 ms             | 0 MB             | 0 ms             | 2181 ms  | 291.3 MB     | 4362 ms          | 85/85           | 0    |
| 2   | captured | 2        | 108.1 ms        | 0.3 ms            | 0 ms              | 6.5 MB           | 0 ms             | 2126 ms  | 299.2 MB     | 4224 ms          | 82/82           | 0    |
