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
| p50WallMs                      | 1770     |
| p95WallMs                      | 1772     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 43.2 ms  |
| p95OpenClawImportMs            | 46 ms    |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.2 ms   |
| maxPeakRssMb                   | 337.4 MB |
| maxCpuMsEstimate               | 3506 ms  |
| baselineReferenceWallMs        | 1822 ms  |
| baselineReferencePeakRssMb     | 340.5 MB |
| baselineReferenceCpuMsEstimate | 3590 ms  |
| statSampleCount                | 208      |
| rssSampleCount                 | 208      |
| cpuSampleCount                 | 208      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1822 ms                                  |
| referencePeakRssMb     | 340.5 MB                                 |
| referenceCpuMsEstimate | 3590 ms                                  |
| maxWallMs              | 2167 ms                                  |
| maxPeakRssMb           | 341.6 MB                                 |
| maxCpuMsEstimate       | 3972 ms                                  |
| statSampleCount        | 227                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 46 ms           | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1772 ms  | 332.5 MB     | 3462 ms          | 70/70           | 0    |
| 1   | captured | 2        | 43.2 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1756 ms  | 333.1 MB     | 3436 ms          | 68/68           | 0    |
| 2   | captured | 2        | 42.1 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1770 ms  | 337.4 MB     | 3506 ms          | 70/70           | 0    |
