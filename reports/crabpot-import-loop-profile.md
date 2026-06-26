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
| p50WallMs                      | 2450     |
| p95WallMs                      | 2465     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 14       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 81 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 117 ms   |
| p95OpenClawImportMs            | 119 ms   |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 306.8 MB |
| maxCpuMsEstimate               | 4933 ms  |
| baselineReferenceWallMs        | 2451 ms  |
| baselineReferencePeakRssMb     | 314.2 MB |
| baselineReferenceCpuMsEstimate | 4852 ms  |
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
| referenceWallMs        | 2451 ms                                  |
| referencePeakRssMb     | 314.2 MB                                 |
| referenceCpuMsEstimate | 4852 ms                                  |
| maxWallMs              | 3312 ms                                  |
| maxPeakRssMb           | 329.8 MB                                 |
| maxCpuMsEstimate       | 5917 ms                                  |
| statSampleCount        | 321                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 115.4 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2383 ms  | 296.5 MB     | 4791 ms          | 94/94           | 0    |
| 1   | captured | 2        | 119 ms          | 0.4 ms            | 14 ms             | 0 MB             | 61 ms            | 2465 ms  | 306.8 MB     | 4913 ms          | 97/97           | 0    |
| 2   | captured | 2        | 117 ms          | 0.4 ms            | 0 ms              | 0 MB             | 81 ms            | 2450 ms  | 294.8 MB     | 4933 ms          | 97/97           | 0    |
