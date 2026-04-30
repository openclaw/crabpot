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
| p50WallMs                      | 1534     |
| p95WallMs                      | 1576     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 18       |
| maxPluginPeakRssDeltaMb        | 1.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 61 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 100.7 ms |
| p95OpenClawImportMs            | 101.5 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 279.7 MB |
| maxCpuMsEstimate               | 2852 ms  |
| baselineReferenceWallMs        | 1558 ms  |
| baselineReferencePeakRssMb     | 278.2 MB |
| baselineReferenceCpuMsEstimate | 2791 ms  |
| statSampleCount                | 183      |
| rssSampleCount                 | 183      |
| cpuSampleCount                 | 183      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1558 ms                                  |
| referencePeakRssMb     | 278.2 MB                                 |
| referenceCpuMsEstimate | 2791 ms                                  |
| maxWallMs              | 2132 ms                                  |
| maxPeakRssMb           | 300.1 MB                                 |
| maxCpuMsEstimate       | 3584 ms                                  |
| statSampleCount        | 202                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 101.5 ms        | 0.2 ms            | 18 ms             | 0 MB             | 61 ms            | 1576 ms  | 271.5 MB     | 2852 ms          | 62/62           | 0    |
| 1   | captured | 2        | 99 ms           | 0.3 ms            | 0 ms              | 1.5 MB           | 0 ms             | 1530 ms  | 279.7 MB     | 2733 ms          | 60/60           | 0    |
| 2   | captured | 2        | 100.7 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1534 ms  | 276.4 MB     | 2716 ms          | 61/61           | 0    |
