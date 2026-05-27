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
| p50WallMs                      | 1597     |
| p95WallMs                      | 1610     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 29 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 110.5 ms |
| p95OpenClawImportMs            | 115.5 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 257.6 MB |
| maxCpuMsEstimate               | 2967 ms  |
| baselineReferenceWallMs        | 1613 ms  |
| baselineReferencePeakRssMb     | 258.4 MB |
| baselineReferenceCpuMsEstimate | 2938 ms  |
| statSampleCount                | 189      |
| rssSampleCount                 | 189      |
| cpuSampleCount                 | 189      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1613 ms                                  |
| referencePeakRssMb     | 258.4 MB                                 |
| referenceCpuMsEstimate | 2938 ms                                  |
| maxWallMs              | 2175 ms                                  |
| maxPeakRssMb           | 271.8 MB                                 |
| maxCpuMsEstimate       | 3784 ms                                  |
| statSampleCount        | 214                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 115.5 ms        | 0.4 ms            | 0 ms              | 0 MB             | 20 ms            | 1597 ms  | 257.6 MB     | 2958 ms          | 63/63           | 0    |
| 1   | captured | 2        | 109.8 ms        | 0.4 ms            | 0 ms              | 0 MB             | 29 ms            | 1610 ms  | 254.8 MB     | 2967 ms          | 64/64           | 0    |
| 2   | captured | 2        | 110.5 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1577 ms  | 256.5 MB     | 2918 ms          | 62/62           | 0    |
