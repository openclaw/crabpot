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
| p50WallMs                      | 1988     |
| p95WallMs                      | 2034     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 15.6 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 102.7 ms |
| p95OpenClawImportMs            | 103.9 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 298.6 MB |
| maxCpuMsEstimate               | 3937 ms  |
| baselineReferenceWallMs        | 2061 ms  |
| baselineReferencePeakRssMb     | 283 MB   |
| baselineReferenceCpuMsEstimate | 4049 ms  |
| statSampleCount                | 236      |
| rssSampleCount                 | 236      |
| cpuSampleCount                 | 236      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2061 ms                                  |
| referencePeakRssMb     | 283 MB                                   |
| referenceCpuMsEstimate | 4049 ms                                  |
| maxWallMs              | 2620 ms                                  |
| maxPeakRssMb           | 300.4 MB                                 |
| maxCpuMsEstimate       | 4724 ms                                  |
| statSampleCount        | 263                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 103.9 ms        | 0.3 ms            | 0 ms              | 10.3 MB          | 0 ms             | 1988 ms  | 293.3 MB     | 3861 ms          | 79/79           | 0    |
| 1   | captured | 2        | 102.7 ms        | 0.4 ms            | 0 ms              | 15.4 MB          | 0 ms             | 2034 ms  | 298.4 MB     | 3937 ms          | 80/80           | 0    |
| 2   | captured | 2        | 100.9 ms        | 0.4 ms            | 0 ms              | 15.6 MB          | 0 ms             | 1941 ms  | 298.6 MB     | 3889 ms          | 77/77           | 0    |
