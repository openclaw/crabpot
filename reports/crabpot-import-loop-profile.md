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
| p50WallMs                      | 2427     |
| p95WallMs                      | 2497     |
| p50PluginWallDeltaMs           | 11       |
| p95PluginWallDeltaMs           | 81       |
| maxPluginPeakRssDeltaMb        | 15.4 MB  |
| maxPluginCpuDeltaMsEstimate    | 113 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 113.8 ms |
| p95OpenClawImportMs            | 114.7 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 309.7 MB |
| maxCpuMsEstimate               | 4929 ms  |
| baselineReferenceWallMs        | 2416 ms  |
| baselineReferencePeakRssMb     | 294.3 MB |
| baselineReferenceCpuMsEstimate | 4816 ms  |
| statSampleCount                | 288      |
| rssSampleCount                 | 288      |
| cpuSampleCount                 | 288      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2416 ms                                  |
| referencePeakRssMb     | 294.3 MB                                 |
| referenceCpuMsEstimate | 4816 ms                                  |
| maxWallMs              | 3313 ms                                  |
| maxPeakRssMb           | 319.4 MB                                 |
| maxCpuMsEstimate       | 5927 ms                                  |
| statSampleCount        | 317                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.7 ms        | 0.4 ms            | 11 ms             | 15.4 MB          | 0 ms             | 2427 ms  | 309.7 MB     | 4796 ms          | 95/95           | 0    |
| 1   | captured | 2        | 113.8 ms        | 0.4 ms            | 81 ms             | 0 MB             | 113 ms           | 2497 ms  | 290.7 MB     | 4929 ms          | 99/99           | 0    |
| 2   | captured | 2        | 113.4 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2366 ms  | 287.9 MB     | 4672 ms          | 94/94           | 0    |
