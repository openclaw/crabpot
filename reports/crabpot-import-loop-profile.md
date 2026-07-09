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
| p50WallMs                      | 2120     |
| p95WallMs                      | 2150     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 11.6 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 105.7 ms |
| p95OpenClawImportMs            | 108 ms   |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 310.8 MB |
| maxCpuMsEstimate               | 4289 ms  |
| baselineReferenceWallMs        | 2171 ms  |
| baselineReferencePeakRssMb     | 299.2 MB |
| baselineReferenceCpuMsEstimate | 4355 ms  |
| statSampleCount                | 251      |
| rssSampleCount                 | 251      |
| cpuSampleCount                 | 251      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2171 ms                                  |
| referencePeakRssMb     | 299.2 MB                                 |
| referenceCpuMsEstimate | 4355 ms                                  |
| maxWallMs              | 3117 ms                                  |
| maxPeakRssMb           | 318.4 MB                                 |
| maxCpuMsEstimate       | 5495 ms                                  |
| statSampleCount        | 289                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 108 ms          | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2150 ms  | 289.8 MB     | 4285 ms          | 85/85           | 0    |
| 1   | captured | 2        | 103.6 ms        | 0.3 ms            | 0 ms              | 11.6 MB          | 0 ms             | 2073 ms  | 310.8 MB     | 4239 ms          | 82/82           | 0    |
| 2   | captured | 2        | 105.7 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2120 ms  | 290 MB       | 4289 ms          | 84/84           | 0    |
