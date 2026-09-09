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
| p50WallMs                      | 2463     |
| p95WallMs                      | 2472     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 22 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 109.1 ms |
| p95OpenClawImportMs            | 109.3 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 281 MB   |
| maxCpuMsEstimate               | 3539 ms  |
| baselineReferenceWallMs        | 2477 ms  |
| baselineReferencePeakRssMb     | 284.9 MB |
| baselineReferenceCpuMsEstimate | 3517 ms  |
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
| referenceWallMs        | 2477 ms                                  |
| referencePeakRssMb     | 284.9 MB                                 |
| referenceCpuMsEstimate | 3517 ms                                  |
| maxWallMs              | 6294 ms                                  |
| maxPeakRssMb           | 346.6 MB                                 |
| maxCpuMsEstimate       | 5613 ms                                  |
| statSampleCount        | 445                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 109.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2460 ms  | 277.7 MB     | 3471 ms          | 98/98           | 0    |
| 1   | captured | 2        | 109.1 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2472 ms  | 280.1 MB     | 3487 ms          | 98/98           | 0    |
| 2   | captured | 2        | 100.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 22 ms            | 2463 ms  | 281 MB       | 3539 ms          | 98/98           | 0    |
