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
| p50WallMs                      | 2486     |
| p95WallMs                      | 2602     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 45       |
| maxPluginPeakRssDeltaMb        | 6.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 122 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 115.9 ms |
| p95OpenClawImportMs            | 118 ms   |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 318.9 MB |
| maxCpuMsEstimate               | 5164 ms  |
| baselineReferenceWallMs        | 2557 ms  |
| baselineReferencePeakRssMb     | 312.1 MB |
| baselineReferenceCpuMsEstimate | 5042 ms  |
| statSampleCount                | 297      |
| rssSampleCount                 | 297      |
| cpuSampleCount                 | 297      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2557 ms                                  |
| referencePeakRssMb     | 312.1 MB                                 |
| referenceCpuMsEstimate | 5042 ms                                  |
| maxWallMs              | 3317 ms                                  |
| maxPeakRssMb           | 337.8 MB                                 |
| maxCpuMsEstimate       | 5840 ms                                  |
| statSampleCount        | 325                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 115.9 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2486 ms  | 311.8 MB     | 4921 ms          | 98/98           | 0    |
| 1   | captured | 2        | 112.3 ms        | 0.4 ms            | 0 ms              | 6.8 MB           | 0 ms             | 2460 ms  | 318.9 MB     | 4857 ms          | 96/96           | 0    |
| 2   | captured | 2        | 118 ms          | 0.4 ms            | 45 ms             | 0 MB             | 122 ms           | 2602 ms  | 310 MB       | 5164 ms          | 103/103         | 0    |
