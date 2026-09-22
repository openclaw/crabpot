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
| p50WallMs                      | 3094     |
| p95WallMs                      | 3102     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 66 ms    |
| p95OpenClawImportMs            | 68.4 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.8 ms   |
| maxPeakRssMb                   | 422.1 MB |
| maxCpuMsEstimate               | 4235 ms  |
| baselineReferenceWallMs        | 3159 ms  |
| baselineReferencePeakRssMb     | 423 MB   |
| baselineReferenceCpuMsEstimate | 4319 ms  |
| statSampleCount                | 369      |
| rssSampleCount                 | 369      |
| cpuSampleCount                 | 369      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3159 ms                                  |
| referencePeakRssMb     | 423 MB                                   |
| referenceCpuMsEstimate | 4319 ms                                  |
| maxWallMs              | 7108 ms                                  |
| maxPeakRssMb           | 581 MB                                   |
| maxCpuMsEstimate       | 6713 ms                                  |
| statSampleCount        | 530                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 68.4 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 3094 ms  | 420.7 MB     | 4187 ms          | 123/123         | 0    |
| 1   | captured | 2        | 66 ms           | 0.8 ms            | 0 ms              | 0 MB             | 0 ms             | 3102 ms  | 422.1 MB     | 4235 ms          | 123/123         | 0    |
| 2   | captured | 2        | 61.7 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 3078 ms  | 419.3 MB     | 4156 ms          | 123/123         | 0    |
