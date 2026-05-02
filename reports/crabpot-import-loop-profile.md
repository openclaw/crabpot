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
| p50WallMs                      | 1571     |
| p95WallMs                      | 1573     |
| p50PluginWallDeltaMs           | 5        |
| p95PluginWallDeltaMs           | 7        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 99.1 ms  |
| p95OpenClawImportMs            | 101.2 ms |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 281 MB   |
| maxCpuMsEstimate               | 2835 ms  |
| baselineReferenceWallMs        | 1566 ms  |
| baselineReferencePeakRssMb     | 281 MB   |
| baselineReferenceCpuMsEstimate | 2839 ms  |
| statSampleCount                | 185      |
| rssSampleCount                 | 185      |
| cpuSampleCount                 | 185      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1566 ms                                  |
| referencePeakRssMb     | 281 MB                                   |
| referenceCpuMsEstimate | 2839 ms                                  |
| maxWallMs              | 2134 ms                                  |
| maxPeakRssMb           | 283.3 MB                                 |
| maxCpuMsEstimate       | 3629 ms                                  |
| statSampleCount        | 206                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 99.1 ms         | 0.2 ms            | 7 ms              | 0 MB             | 0 ms             | 1573 ms  | 281 MB       | 2819 ms          | 62/62           | 0    |
| 1   | captured | 2        | 97.5 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1562 ms  | 275.4 MB     | 2820 ms          | 62/62           | 0    |
| 2   | captured | 2        | 101.2 ms        | 0.3 ms            | 5 ms              | 0 MB             | 0 ms             | 1571 ms  | 278.3 MB     | 2835 ms          | 61/61           | 0    |
