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
| p50WallMs                      | 2935     |
| p95WallMs                      | 2952     |
| p50PluginWallDeltaMs           | 8        |
| p95PluginWallDeltaMs           | 25       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 21 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 58 ms    |
| p95OpenClawImportMs            | 62.6 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 422.9 MB |
| maxCpuMsEstimate               | 4004 ms  |
| baselineReferenceWallMs        | 2927 ms  |
| baselineReferencePeakRssMb     | 423.9 MB |
| baselineReferenceCpuMsEstimate | 3983 ms  |
| statSampleCount                | 350      |
| rssSampleCount                 | 350      |
| cpuSampleCount                 | 350      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2927 ms                                  |
| referencePeakRssMb     | 423.9 MB                                 |
| referenceCpuMsEstimate | 3983 ms                                  |
| maxWallMs              | 6565 ms                                  |
| maxPeakRssMb           | 593.8 MB                                 |
| maxCpuMsEstimate       | 6123 ms                                  |
| statSampleCount        | 493                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 62.6 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2920 ms  | 419.9 MB     | 3972 ms          | 116/116         | 0    |
| 1   | captured | 2        | 57.8 ms         | 0.5 ms            | 8 ms              | 0 MB             | 0 ms             | 2935 ms  | 422.9 MB     | 3950 ms          | 117/117         | 0    |
| 2   | captured | 2        | 58 ms           | 0.5 ms            | 25 ms             | 0 MB             | 21 ms            | 2952 ms  | 422.3 MB     | 4004 ms          | 117/117         | 0    |
