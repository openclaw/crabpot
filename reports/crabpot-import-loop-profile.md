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
| p50WallMs                      | 2158     |
| p95WallMs                      | 2241     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 79       |
| maxPluginPeakRssDeltaMb        | 9.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 168 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 94.1 ms  |
| p95OpenClawImportMs            | 97.8 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 346.5 MB |
| maxCpuMsEstimate               | 4502 ms  |
| baselineReferenceWallMs        | 2162 ms  |
| baselineReferencePeakRssMb     | 337.4 MB |
| baselineReferenceCpuMsEstimate | 4334 ms  |
| statSampleCount                | 260      |
| rssSampleCount                 | 260      |
| cpuSampleCount                 | 260      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2162 ms                                  |
| referencePeakRssMb     | 337.4 MB                                 |
| referenceCpuMsEstimate | 4334 ms                                  |
| maxWallMs              | 3065 ms                                  |
| maxPeakRssMb           | 361.1 MB                                 |
| maxCpuMsEstimate       | 5490 ms                                  |
| statSampleCount        | 291                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 97.8 ms         | 0.3 ms            | 79 ms             | 9.1 MB           | 168 ms           | 2241 ms  | 346.5 MB     | 4502 ms          | 89/89           | 0    |
| 1   | captured | 2        | 93.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2158 ms  | 328.4 MB     | 4311 ms          | 86/86           | 0    |
| 2   | captured | 2        | 94.1 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2130 ms  | 335.9 MB     | 4268 ms          | 85/85           | 0    |
