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
| p50WallMs                      | 1758     |
| p95WallMs                      | 1806     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 16.6 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 43.2 ms  |
| p95OpenClawImportMs            | 46.3 ms  |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.2 ms   |
| maxPeakRssMb                   | 348.2 MB |
| maxCpuMsEstimate               | 3522 ms  |
| baselineReferenceWallMs        | 1829 ms  |
| baselineReferencePeakRssMb     | 331.6 MB |
| baselineReferenceCpuMsEstimate | 3561 ms  |
| statSampleCount                | 210      |
| rssSampleCount                 | 210      |
| cpuSampleCount                 | 210      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1829 ms                                  |
| referencePeakRssMb     | 331.6 MB                                 |
| referenceCpuMsEstimate | 3561 ms                                  |
| maxWallMs              | 2150 ms                                  |
| maxPeakRssMb           | 338.9 MB                                 |
| maxCpuMsEstimate       | 3908 ms                                  |
| statSampleCount        | 225                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 46.3 ms         | 0.2 ms            | 0 ms              | 7.3 MB           | 0 ms             | 1758 ms  | 338.9 MB     | 3401 ms          | 69/69           | 0    |
| 1   | captured | 2        | 41.7 ms         | 0.2 ms            | 0 ms              | 10.3 MB          | 0 ms             | 1756 ms  | 341.9 MB     | 3464 ms          | 70/70           | 0    |
| 2   | captured | 2        | 43.2 ms         | 0.2 ms            | 0 ms              | 16.6 MB          | 0 ms             | 1806 ms  | 348.2 MB     | 3522 ms          | 71/71           | 0    |
