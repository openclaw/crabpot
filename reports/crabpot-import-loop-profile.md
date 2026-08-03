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
| p50WallMs                      | 2925     |
| p95WallMs                      | 3013     |
| p50PluginWallDeltaMs           | 6        |
| p95PluginWallDeltaMs           | 94       |
| maxPluginPeakRssDeltaMb        | 11.3 MB  |
| maxPluginCpuDeltaMsEstimate    | 240 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 126.3 ms |
| p95OpenClawImportMs            | 128.8 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 348 MB   |
| maxCpuMsEstimate               | 6017 ms  |
| baselineReferenceWallMs        | 2919 ms  |
| baselineReferencePeakRssMb     | 336.7 MB |
| baselineReferenceCpuMsEstimate | 5777 ms  |
| statSampleCount                | 349      |
| rssSampleCount                 | 349      |
| cpuSampleCount                 | 349      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2919 ms                                  |
| referencePeakRssMb     | 336.7 MB                                 |
| referenceCpuMsEstimate | 5777 ms                                  |
| maxWallMs              | 4077 ms                                  |
| maxPeakRssMb           | 350.8 MB                                 |
| maxCpuMsEstimate       | 7326 ms                                  |
| statSampleCount        | 381                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 128.8 ms        | 0.3 ms            | 6 ms              | 2.2 MB           | 25 ms            | 2925 ms  | 338.9 MB     | 5802 ms          | 116/116         | 0    |
| 1   | captured | 2        | 122.8 ms        | 0.4 ms            | 0 ms              | 11.3 MB          | 12 ms            | 2886 ms  | 348 MB       | 5789 ms          | 114/114         | 0    |
| 2   | captured | 2        | 126.3 ms        | 0.3 ms            | 94 ms             | 0 MB             | 240 ms           | 3013 ms  | 331.3 MB     | 6017 ms          | 119/119         | 0    |
