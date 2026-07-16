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
| p50WallMs                      | 1853     |
| p95WallMs                      | 1873     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 95.7 ms  |
| p95OpenClawImportMs            | 95.8 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 303.1 MB |
| maxCpuMsEstimate               | 3760 ms  |
| baselineReferenceWallMs        | 1887 ms  |
| baselineReferencePeakRssMb     | 309.1 MB |
| baselineReferenceCpuMsEstimate | 3796 ms  |
| statSampleCount                | 219      |
| rssSampleCount                 | 219      |
| cpuSampleCount                 | 219      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1887 ms                                  |
| referencePeakRssMb     | 309.1 MB                                 |
| referenceCpuMsEstimate | 3796 ms                                  |
| maxWallMs              | 2520 ms                                  |
| maxPeakRssMb           | 311.4 MB                                 |
| maxCpuMsEstimate       | 4561 ms                                  |
| statSampleCount        | 246                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 95.8 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1853 ms  | 286.7 MB     | 3663 ms          | 74/74           | 0    |
| 1   | captured | 2        | 95.7 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1873 ms  | 303.1 MB     | 3760 ms          | 74/74           | 0    |
| 2   | captured | 2        | 94 ms           | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1809 ms  | 291 MB       | 3654 ms          | 71/71           | 0    |
