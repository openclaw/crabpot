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
| p50WallMs                      | 4183     |
| p95WallMs                      | 4236     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 14       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 63 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 103.9 ms |
| p95OpenClawImportMs            | 109.1 ms |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 529.4 MB |
| maxCpuMsEstimate               | 5940 ms  |
| baselineReferenceWallMs        | 4222 ms  |
| baselineReferencePeakRssMb     | 531.6 MB |
| baselineReferenceCpuMsEstimate | 5877 ms  |
| statSampleCount                | 499      |
| rssSampleCount                 | 499      |
| cpuSampleCount                 | 499      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4222 ms                                  |
| referencePeakRssMb     | 531.6 MB                                 |
| referenceCpuMsEstimate | 5877 ms                                  |
| maxWallMs              | 9324 ms                                  |
| maxPeakRssMb           | 714.9 MB                                 |
| maxCpuMsEstimate       | 8828 ms                                  |
| statSampleCount        | 705                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 109.1 ms        | 1.1 ms            | 14 ms             | 0 MB             | 63 ms            | 4236 ms  | 528.7 MB     | 5940 ms          | 168/168         | 0    |
| 1   | captured | 2        | 102.3 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4183 ms  | 529.4 MB     | 5723 ms          | 166/166         | 0    |
| 2   | captured | 2        | 103.9 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4157 ms  | 504.5 MB     | 5804 ms          | 165/165         | 0    |
