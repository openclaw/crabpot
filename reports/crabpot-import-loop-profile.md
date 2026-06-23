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
| p50WallMs                      | 1777     |
| p95WallMs                      | 1789     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 91.4 ms  |
| p95OpenClawImportMs            | 96.4 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 292.8 MB |
| maxCpuMsEstimate               | 3566 ms  |
| baselineReferenceWallMs        | 1824 ms  |
| baselineReferencePeakRssMb     | 297.6 MB |
| baselineReferenceCpuMsEstimate | 3686 ms  |
| statSampleCount                | 211      |
| rssSampleCount                 | 211      |
| cpuSampleCount                 | 211      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1824 ms                                  |
| referencePeakRssMb     | 297.6 MB                                 |
| referenceCpuMsEstimate | 3686 ms                                  |
| maxWallMs              | 2584 ms                                  |
| maxPeakRssMb           | 301.4 MB                                 |
| maxCpuMsEstimate       | 4645 ms                                  |
| statSampleCount        | 245                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 96.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1765 ms  | 292.8 MB     | 3544 ms          | 70/70           | 0    |
| 1   | captured | 2        | 91.1 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1777 ms  | 284.2 MB     | 3514 ms          | 70/70           | 0    |
| 2   | captured | 2        | 91.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1789 ms  | 284.6 MB     | 3566 ms          | 71/71           | 0    |
