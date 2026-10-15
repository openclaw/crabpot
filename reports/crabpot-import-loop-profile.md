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
| p50WallMs                      | 4345     |
| p95WallMs                      | 4373     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 19       |
| maxPluginPeakRssDeltaMb        | 1.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 16 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112.4 ms |
| p95OpenClawImportMs            | 116.3 ms |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 531 MB   |
| maxCpuMsEstimate               | 6028 ms  |
| baselineReferenceWallMs        | 4354 ms  |
| baselineReferencePeakRssMb     | 529.6 MB |
| baselineReferenceCpuMsEstimate | 6012 ms  |
| statSampleCount                | 517      |
| rssSampleCount                 | 517      |
| cpuSampleCount                 | 517      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4354 ms                                  |
| referencePeakRssMb     | 529.6 MB                                 |
| referenceCpuMsEstimate | 6012 ms                                  |
| maxWallMs              | 9680 ms                                  |
| maxPeakRssMb           | 748.4 MB                                 |
| maxCpuMsEstimate       | 9208 ms                                  |
| statSampleCount        | 728                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 112.4 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4300 ms  | 529.1 MB     | 5881 ms          | 171/171         | 0    |
| 1   | captured | 2        | 105.8 ms        | 1.2 ms            | 19 ms             | 1.4 MB           | 0 ms             | 4373 ms  | 531 MB       | 6002 ms          | 173/173         | 0    |
| 2   | captured | 2        | 116.3 ms        | 1.2 ms            | 0 ms              | 0.1 MB           | 16 ms            | 4345 ms  | 529.7 MB     | 6028 ms          | 173/173         | 0    |
