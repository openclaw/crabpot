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
| p50WallMs                      | 1514     |
| p95WallMs                      | 1566     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 34       |
| maxPluginPeakRssDeltaMb        | 1.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 59 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 99.2 ms  |
| p95OpenClawImportMs            | 100.7 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 271.9 MB |
| maxCpuMsEstimate               | 2895 ms  |
| baselineReferenceWallMs        | 1532 ms  |
| baselineReferencePeakRssMb     | 270.6 MB |
| baselineReferenceCpuMsEstimate | 2836 ms  |
| statSampleCount                | 180      |
| rssSampleCount                 | 180      |
| cpuSampleCount                 | 180      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1532 ms                                  |
| referencePeakRssMb     | 270.6 MB                                 |
| referenceCpuMsEstimate | 2836 ms                                  |
| maxWallMs              | 1993 ms                                  |
| maxPeakRssMb           | 279.7 MB                                 |
| maxCpuMsEstimate       | 3508 ms                                  |
| statSampleCount        | 197                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 92.8 ms         | 0.3 ms            | 34 ms             | 0 MB             | 59 ms            | 1566 ms  | 263.5 MB     | 2895 ms          | 62/62           | 0    |
| 1   | captured | 2        | 100.7 ms        | 0.4 ms            | 0 ms              | 1.3 MB           | 0 ms             | 1454 ms  | 271.9 MB     | 2677 ms          | 58/58           | 0    |
| 2   | captured | 2        | 99.2 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1514 ms  | 256.3 MB     | 2783 ms          | 60/60           | 0    |
