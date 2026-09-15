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
| p50WallMs                      | 2905     |
| p95WallMs                      | 2908     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 56.7 ms  |
| p95OpenClawImportMs            | 61.5 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 421.4 MB |
| maxCpuMsEstimate               | 3907 ms  |
| baselineReferenceWallMs        | 2935 ms  |
| baselineReferencePeakRssMb     | 420.3 MB |
| baselineReferenceCpuMsEstimate | 3948 ms  |
| statSampleCount                | 347      |
| rssSampleCount                 | 347      |
| cpuSampleCount                 | 347      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2935 ms                                  |
| referencePeakRssMb     | 420.3 MB                                 |
| referenceCpuMsEstimate | 3948 ms                                  |
| maxWallMs              | 6412 ms                                  |
| maxPeakRssMb           | 593.6 MB                                 |
| maxCpuMsEstimate       | 6070 ms                                  |
| statSampleCount        | 487                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 61.5 ms         | 0.6 ms            | 0 ms              | 0 MB             | 0 ms             | 2908 ms  | 418.2 MB     | 3900 ms          | 116/116         | 0    |
| 1   | captured | 2        | 56.7 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2905 ms  | 418 MB       | 3907 ms          | 116/116         | 0    |
| 2   | captured | 2        | 56.7 ms         | 0.5 ms            | 0 ms              | 1.1 MB           | 0 ms             | 2891 ms  | 421.4 MB     | 3869 ms          | 115/115         | 0    |
