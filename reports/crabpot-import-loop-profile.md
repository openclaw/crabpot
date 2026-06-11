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
| p50WallMs                      | 1721     |
| p95WallMs                      | 1748     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 87.6 ms  |
| p95OpenClawImportMs            | 88.4 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 299.9 MB |
| maxCpuMsEstimate               | 3480 ms  |
| baselineReferenceWallMs        | 1752 ms  |
| baselineReferencePeakRssMb     | 302.5 MB |
| baselineReferenceCpuMsEstimate | 3480 ms  |
| statSampleCount                | 205      |
| rssSampleCount                 | 205      |
| cpuSampleCount                 | 205      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1752 ms                                  |
| referencePeakRssMb     | 302.5 MB                                 |
| referenceCpuMsEstimate | 3480 ms                                  |
| maxWallMs              | 2317 ms                                  |
| maxPeakRssMb           | 302.7 MB                                 |
| maxCpuMsEstimate       | 4118 ms                                  |
| statSampleCount        | 228                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 88.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1715 ms  | 299.9 MB     | 3391 ms          | 68/68           | 0    |
| 1   | captured | 2        | 87 ms           | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1721 ms  | 294.1 MB     | 3480 ms          | 68/68           | 0    |
| 2   | captured | 2        | 87.6 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1748 ms  | 285.9 MB     | 3476 ms          | 69/69           | 0    |
