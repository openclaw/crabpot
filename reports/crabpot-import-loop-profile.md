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
| p50WallMs                      | 2245     |
| p95WallMs                      | 2276     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 1        |
| maxPluginPeakRssDeltaMb        | 15.6 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 113.6 ms |
| p95OpenClawImportMs            | 124.2 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 299.6 MB |
| maxCpuMsEstimate               | 4491 ms  |
| baselineReferenceWallMs        | 2275 ms  |
| baselineReferencePeakRssMb     | 284 MB   |
| baselineReferenceCpuMsEstimate | 4507 ms  |
| statSampleCount                | 266      |
| rssSampleCount                 | 266      |
| cpuSampleCount                 | 266      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2275 ms                                  |
| referencePeakRssMb     | 284 MB                                   |
| referenceCpuMsEstimate | 4507 ms                                  |
| maxWallMs              | 3103 ms                                  |
| maxPeakRssMb           | 312 MB                                   |
| maxCpuMsEstimate       | 5564 ms                                  |
| statSampleCount        | 296                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 124.2 ms        | 0.4 ms            | 0 ms              | 15.6 MB          | 0 ms             | 2221 ms  | 299.6 MB     | 4432 ms          | 88/88           | 0    |
| 1   | captured | 2        | 109.7 ms        | 0.4 ms            | 1 ms              | 2.8 MB           | 0 ms             | 2276 ms  | 286.8 MB     | 4491 ms          | 90/90           | 0    |
| 2   | captured | 2        | 113.6 ms        | 0.3 ms            | 0 ms              | 13.6 MB          | 0 ms             | 2245 ms  | 297.6 MB     | 4403 ms          | 88/88           | 0    |
