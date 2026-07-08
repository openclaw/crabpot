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
| p50WallMs                      | 2446     |
| p95WallMs                      | 2458     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 116.5 ms |
| p95OpenClawImportMs            | 119.3 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 309.7 MB |
| maxCpuMsEstimate               | 4856 ms  |
| baselineReferenceWallMs        | 2489 ms  |
| baselineReferencePeakRssMb     | 309.8 MB |
| baselineReferenceCpuMsEstimate | 4874 ms  |
| statSampleCount                | 290      |
| rssSampleCount                 | 290      |
| cpuSampleCount                 | 290      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2489 ms                                  |
| referencePeakRssMb     | 309.8 MB                                 |
| referenceCpuMsEstimate | 4874 ms                                  |
| maxWallMs              | 3400 ms                                  |
| maxPeakRssMb           | 330.3 MB                                 |
| maxCpuMsEstimate       | 6053 ms                                  |
| statSampleCount        | 329                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.2 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2446 ms  | 292 MB       | 4831 ms          | 97/97           | 0    |
| 1   | captured | 2        | 116.5 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2458 ms  | 306.7 MB     | 4856 ms          | 98/98           | 0    |
| 2   | captured | 2        | 119.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2415 ms  | 309.7 MB     | 4838 ms          | 95/95           | 0    |
