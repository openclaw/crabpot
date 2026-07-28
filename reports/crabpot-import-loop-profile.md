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
| p50WallMs                      | 3085     |
| p95WallMs                      | 3288     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 203      |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 349 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 126 ms   |
| p95OpenClawImportMs            | 133.5 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 342.1 MB |
| maxCpuMsEstimate               | 6519 ms  |
| baselineReferenceWallMs        | 3085 ms  |
| baselineReferencePeakRssMb     | 345.5 MB |
| baselineReferenceCpuMsEstimate | 6170 ms  |
| statSampleCount                | 374      |
| rssSampleCount                 | 374      |
| cpuSampleCount                 | 374      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3085 ms                                  |
| referencePeakRssMb     | 345.5 MB                                 |
| referenceCpuMsEstimate | 6170 ms                                  |
| maxWallMs              | 4237 ms                                  |
| maxPeakRssMb           | 359.6 MB                                 |
| maxCpuMsEstimate       | 7588 ms                                  |
| statSampleCount        | 407                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 126 ms          | 0.4 ms            | 0 ms              | 0 MB             | 5 ms             | 3085 ms  | 342.1 MB     | 6175 ms          | 122/122         | 0    |
| 1   | captured | 2        | 133.5 ms        | 0.4 ms            | 203 ms            | 0 MB             | 349 ms           | 3288 ms  | 336.6 MB     | 6519 ms          | 131/131         | 0    |
| 2   | captured | 2        | 124.7 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 3054 ms  | 338.2 MB     | 6041 ms          | 121/121         | 0    |
