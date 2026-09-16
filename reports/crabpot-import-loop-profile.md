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
| p50WallMs                      | 3048     |
| p95WallMs                      | 3092     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 18       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 142 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 62.8 ms  |
| p95OpenClawImportMs            | 64 ms    |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.7 ms   |
| maxPeakRssMb                   | 419.2 MB |
| maxCpuMsEstimate               | 4226 ms  |
| baselineReferenceWallMs        | 3074 ms  |
| baselineReferencePeakRssMb     | 424.2 MB |
| baselineReferenceCpuMsEstimate | 4084 ms  |
| statSampleCount                | 365      |
| rssSampleCount                 | 365      |
| cpuSampleCount                 | 365      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3074 ms                                  |
| referencePeakRssMb     | 424.2 MB                                 |
| referenceCpuMsEstimate | 4084 ms                                  |
| maxWallMs              | 6654 ms                                  |
| maxPeakRssMb           | 594 MB                                   |
| maxCpuMsEstimate       | 6337 ms                                  |
| statSampleCount        | 506                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 64 ms           | 0.5 ms            | 18 ms             | 0 MB             | 142 ms           | 3092 ms  | 419.2 MB     | 4226 ms          | 123/123         | 0    |
| 1   | captured | 2        | 62.8 ms         | 0.5 ms            | 0 ms              | 0 MB             | 57 ms            | 3048 ms  | 417.5 MB     | 4141 ms          | 121/121         | 0    |
| 2   | captured | 2        | 62.1 ms         | 0.7 ms            | 0 ms              | 0 MB             | 59 ms            | 3043 ms  | 417.1 MB     | 4143 ms          | 121/121         | 0    |
