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
| p50WallMs                      | 2212     |
| p95WallMs                      | 2284     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 41       |
| maxPluginPeakRssDeltaMb        | 6 MB     |
| maxPluginCpuDeltaMsEstimate    | 105 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112.2 ms |
| p95OpenClawImportMs            | 115.1 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 292.6 MB |
| maxCpuMsEstimate               | 4544 ms  |
| baselineReferenceWallMs        | 2243 ms  |
| baselineReferencePeakRssMb     | 286.6 MB |
| baselineReferenceCpuMsEstimate | 4439 ms  |
| statSampleCount                | 264      |
| rssSampleCount                 | 264      |
| cpuSampleCount                 | 264      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2243 ms                                  |
| referencePeakRssMb     | 286.6 MB                                 |
| referenceCpuMsEstimate | 4439 ms                                  |
| maxWallMs              | 3162 ms                                  |
| maxPeakRssMb           | 319.4 MB                                 |
| maxCpuMsEstimate       | 5679 ms                                  |
| statSampleCount        | 293                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 115.1 ms        | 0.3 ms            | 0 ms              | 6 MB             | 0 ms             | 2212 ms  | 292.6 MB     | 4396 ms          | 87/87           | 0    |
| 1   | captured | 2        | 112.2 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2207 ms  | 282.3 MB     | 4417 ms          | 87/87           | 0    |
| 2   | captured | 2        | 107.1 ms        | 0.5 ms            | 41 ms             | 0.7 MB           | 105 ms           | 2284 ms  | 287.3 MB     | 4544 ms          | 90/90           | 0    |
