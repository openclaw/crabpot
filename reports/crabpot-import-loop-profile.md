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
| p50WallMs                      | 2220     |
| p95WallMs                      | 2232     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 35.5 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 103.1 ms |
| p95OpenClawImportMs            | 106.9 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 349.8 MB |
| maxCpuMsEstimate               | 4517 ms  |
| baselineReferenceWallMs        | 2333 ms  |
| baselineReferencePeakRssMb     | 314.3 MB |
| baselineReferenceCpuMsEstimate | 4685 ms  |
| statSampleCount                | 265      |
| rssSampleCount                 | 265      |
| cpuSampleCount                 | 265      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2333 ms                                  |
| referencePeakRssMb     | 314.3 MB                                 |
| referenceCpuMsEstimate | 4685 ms                                  |
| maxWallMs              | 3374 ms                                  |
| maxPeakRssMb           | 339 MB                                   |
| maxCpuMsEstimate       | 6103 ms                                  |
| statSampleCount        | 312                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 103.1 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2232 ms  | 309.1 MB     | 4511 ms          | 89/89           | 0    |
| 1   | captured | 2        | 99.1 ms         | 0.3 ms            | 0 ms              | 4.1 MB           | 0 ms             | 2214 ms  | 318.4 MB     | 4434 ms          | 88/88           | 0    |
| 2   | captured | 2        | 106.9 ms        | 0.3 ms            | 0 ms              | 35.5 MB          | 0 ms             | 2220 ms  | 349.8 MB     | 4517 ms          | 88/88           | 0    |
