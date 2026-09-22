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
| p50WallMs                      | 3181     |
| p95WallMs                      | 3277     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 15       |
| maxPluginPeakRssDeltaMb        | 2.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 93 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 65.9 ms  |
| p95OpenClawImportMs            | 69.7 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 422.1 MB |
| maxCpuMsEstimate               | 4506 ms  |
| baselineReferenceWallMs        | 3262 ms  |
| baselineReferencePeakRssMb     | 419.3 MB |
| baselineReferenceCpuMsEstimate | 4413 ms  |
| statSampleCount                | 381      |
| rssSampleCount                 | 381      |
| cpuSampleCount                 | 381      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3262 ms                                  |
| referencePeakRssMb     | 419.3 MB                                 |
| referenceCpuMsEstimate | 4413 ms                                  |
| maxWallMs              | 8220 ms                                  |
| maxPeakRssMb           | 594.9 MB                                 |
| maxCpuMsEstimate       | 7509 ms                                  |
| statSampleCount        | 579                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 69.7 ms         | 0.5 ms            | 15 ms             | 2.7 MB           | 93 ms            | 3277 ms  | 422 MB       | 4506 ms          | 130/130         | 0    |
| 1   | captured | 2        | 64.9 ms         | 0.5 ms            | 0 ms              | 2.8 MB           | 0 ms             | 3149 ms  | 422.1 MB     | 4296 ms          | 125/125         | 0    |
| 2   | captured | 2        | 65.9 ms         | 0.6 ms            | 0 ms              | 0 MB             | 0 ms             | 3181 ms  | 417.6 MB     | 4380 ms          | 126/126         | 0    |
