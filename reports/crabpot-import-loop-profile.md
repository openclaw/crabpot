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
| p50WallMs                      | 4336     |
| p95WallMs                      | 4341     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 109.3 ms |
| p95OpenClawImportMs            | 112.8 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.4 ms   |
| maxPeakRssMb                   | 530 MB   |
| maxCpuMsEstimate               | 6077 ms  |
| baselineReferenceWallMs        | 4361 ms  |
| baselineReferencePeakRssMb     | 527.5 MB |
| baselineReferenceCpuMsEstimate | 6090 ms  |
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
| referenceWallMs        | 4361 ms                                  |
| referencePeakRssMb     | 527.5 MB                                 |
| referenceCpuMsEstimate | 6090 ms                                  |
| maxWallMs              | 9751 ms                                  |
| maxPeakRssMb           | 728.8 MB                                 |
| maxCpuMsEstimate       | 9098 ms                                  |
| statSampleCount        | 735                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 112.8 ms        | 1.3 ms            | 0 ms              | 0.3 MB           | 0 ms             | 4336 ms  | 527.8 MB     | 6077 ms          | 172/172         | 0    |
| 1   | captured | 2        | 107.2 ms        | 1.4 ms            | 0 ms              | 2.5 MB           | 0 ms             | 4341 ms  | 530 MB       | 5988 ms          | 173/173         | 0    |
| 2   | captured | 2        | 109.3 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4323 ms  | 526.4 MB     | 5994 ms          | 172/172         | 0    |
