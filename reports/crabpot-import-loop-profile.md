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
| p50WallMs                      | 1802     |
| p95WallMs                      | 1823     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 31.1 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 85.2 ms  |
| p95OpenClawImportMs            | 86.9 ms  |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 352.4 MB |
| maxCpuMsEstimate               | 3662 ms  |
| baselineReferenceWallMs        | 1880 ms  |
| baselineReferencePeakRssMb     | 321.3 MB |
| baselineReferenceCpuMsEstimate | 3782 ms  |
| statSampleCount                | 214      |
| rssSampleCount                 | 214      |
| cpuSampleCount                 | 214      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1880 ms                                  |
| referencePeakRssMb     | 321.3 MB                                 |
| referenceCpuMsEstimate | 3782 ms                                  |
| maxWallMs              | 2747 ms                                  |
| maxPeakRssMb           | 330.7 MB                                 |
| maxCpuMsEstimate       | 5072 ms                                  |
| statSampleCount        | 253                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 86.9 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1823 ms  | 319.2 MB     | 3662 ms          | 73/73           | 0    |
| 1   | captured | 2        | 84.3 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1761 ms  | 315.8 MB     | 3518 ms          | 70/70           | 0    |
| 2   | captured | 2        | 85.2 ms         | 0.2 ms            | 0 ms              | 31.1 MB          | 0 ms             | 1802 ms  | 352.4 MB     | 3573 ms          | 71/71           | 0    |
