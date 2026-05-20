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
| p50WallMs                      | 1541     |
| p95WallMs                      | 1544     |
| p50PluginWallDeltaMs           | 35       |
| p95PluginWallDeltaMs           | 38       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 106 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 79.3 ms  |
| p95OpenClawImportMs            | 83.8 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 256.2 MB |
| maxCpuMsEstimate               | 2849 ms  |
| baselineReferenceWallMs        | 1506 ms  |
| baselineReferencePeakRssMb     | 261.7 MB |
| baselineReferenceCpuMsEstimate | 2743 ms  |
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
| referenceWallMs        | 1506 ms                                  |
| referencePeakRssMb     | 261.7 MB                                 |
| referenceCpuMsEstimate | 2743 ms                                  |
| maxWallMs              | 2030 ms                                  |
| maxPeakRssMb           | 266.6 MB                                 |
| maxCpuMsEstimate       | 3631 ms                                  |
| statSampleCount        | 198                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 83.8 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 1456 ms  | 255.9 MB     | 2695 ms          | 58/58           | 0    |
| 1   | captured | 2        | 79.3 ms         | 0.4 ms            | 38 ms             | 0 MB             | 47 ms            | 1544 ms  | 252.1 MB     | 2790 ms          | 61/61           | 0    |
| 2   | captured | 2        | 78.7 ms         | 0.5 ms            | 35 ms             | 0 MB             | 106 ms           | 1541 ms  | 256.2 MB     | 2849 ms          | 61/61           | 0    |
