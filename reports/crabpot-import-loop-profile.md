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
| p95WallMs                      | 2249     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 10.4 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 111.5 ms |
| p95OpenClawImportMs            | 115 ms   |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 303.6 MB |
| maxCpuMsEstimate               | 4478 ms  |
| baselineReferenceWallMs        | 2280 ms  |
| baselineReferencePeakRssMb     | 293.2 MB |
| baselineReferenceCpuMsEstimate | 4541 ms  |
| statSampleCount                | 262      |
| rssSampleCount                 | 262      |
| cpuSampleCount                 | 262      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2280 ms                                  |
| referencePeakRssMb     | 293.2 MB                                 |
| referenceCpuMsEstimate | 4541 ms                                  |
| maxWallMs              | 3077 ms                                  |
| maxPeakRssMb           | 313.8 MB                                 |
| maxCpuMsEstimate       | 5511 ms                                  |
| statSampleCount        | 294                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 111.5 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2249 ms  | 290.8 MB     | 4478 ms          | 89/89           | 0    |
| 1   | captured | 2        | 115 ms          | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2220 ms  | 285.3 MB     | 4451 ms          | 88/88           | 0    |
| 2   | captured | 2        | 109.8 ms        | 0.5 ms            | 0 ms              | 10.4 MB          | 0 ms             | 2158 ms  | 303.6 MB     | 4286 ms          | 85/85           | 0    |
