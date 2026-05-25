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
| p50WallMs                      | 1590     |
| p95WallMs                      | 1592     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 21 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 107.9 ms |
| p95OpenClawImportMs            | 120.3 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 260.1 MB |
| maxCpuMsEstimate               | 2942 ms  |
| baselineReferenceWallMs        | 1598 ms  |
| baselineReferencePeakRssMb     | 259.2 MB |
| baselineReferenceCpuMsEstimate | 2921 ms  |
| statSampleCount                | 187      |
| rssSampleCount                 | 187      |
| cpuSampleCount                 | 187      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1598 ms                                  |
| referencePeakRssMb     | 259.2 MB                                 |
| referenceCpuMsEstimate | 2921 ms                                  |
| maxWallMs              | 2110 ms                                  |
| maxPeakRssMb           | 268.5 MB                                 |
| maxCpuMsEstimate       | 3738 ms                                  |
| statSampleCount        | 208                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 120.3 ms        | 0.6 ms            | 0 ms              | 0 MB             | 0 ms             | 1590 ms  | 251.5 MB     | 2878 ms          | 63/63           | 0    |
| 1   | captured | 2        | 107.9 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1556 ms  | 253.1 MB     | 2819 ms          | 61/61           | 0    |
| 2   | captured | 2        | 106.2 ms        | 0.4 ms            | 0 ms              | 0.9 MB           | 21 ms            | 1592 ms  | 260.1 MB     | 2942 ms          | 63/63           | 0    |
