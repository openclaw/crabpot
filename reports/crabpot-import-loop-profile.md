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
| p50WallMs                      | 2273     |
| p95WallMs                      | 2319     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 29       |
| maxPluginPeakRssDeltaMb        | 0.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 91.6 ms  |
| p95OpenClawImportMs            | 100.2 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 335.3 MB |
| maxCpuMsEstimate               | 4397 ms  |
| baselineReferenceWallMs        | 2290 ms  |
| baselineReferencePeakRssMb     | 334.7 MB |
| baselineReferenceCpuMsEstimate | 4456 ms  |
| statSampleCount                | 266      |
| rssSampleCount                 | 266      |
| cpuSampleCount                 | 266      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2290 ms                                  |
| referencePeakRssMb     | 334.7 MB                                 |
| referenceCpuMsEstimate | 4456 ms                                  |
| maxWallMs              | 2785 ms                                  |
| maxPeakRssMb           | 340.7 MB                                 |
| maxCpuMsEstimate       | 4944 ms                                  |
| statSampleCount        | 288                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 100.2 ms        | 0.3 ms            | 29 ms             | 0.4 MB           | 0 ms             | 2319 ms  | 335.1 MB     | 4384 ms          | 88/88           | 0    |
| 1   | captured | 2        | 91.6 ms         | 0.4 ms            | 0 ms              | 0.6 MB           | 0 ms             | 2273 ms  | 335.3 MB     | 4397 ms          | 90/90           | 0    |
| 2   | captured | 2        | 87.8 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2245 ms  | 332.4 MB     | 4332 ms          | 88/88           | 0    |
