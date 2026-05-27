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
| p50WallMs                      | 1511     |
| p95WallMs                      | 1517     |
| p50PluginWallDeltaMs           | 40       |
| p95PluginWallDeltaMs           | 46       |
| maxPluginPeakRssDeltaMb        | 9.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 79 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112.3 ms |
| p95OpenClawImportMs            | 113.6 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 264.7 MB |
| maxCpuMsEstimate               | 2795 ms  |
| baselineReferenceWallMs        | 1471 ms  |
| baselineReferencePeakRssMb     | 255 MB   |
| baselineReferenceCpuMsEstimate | 2716 ms  |
| statSampleCount                | 177      |
| rssSampleCount                 | 177      |
| cpuSampleCount                 | 177      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1471 ms                                  |
| referencePeakRssMb     | 255 MB                                   |
| referenceCpuMsEstimate | 2716 ms                                  |
| maxWallMs              | 2136 ms                                  |
| maxPeakRssMb           | 272.1 MB                                 |
| maxCpuMsEstimate       | 3701 ms                                  |
| statSampleCount        | 196                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 111 ms          | 0.3 ms            | 46 ms             | 9.7 MB           | 79 ms            | 1517 ms  | 264.7 MB     | 2795 ms          | 59/59           | 0    |
| 1   | captured | 2        | 112.3 ms        | 0.3 ms            | 39 ms             | 0 MB             | 64 ms            | 1510 ms  | 253.4 MB     | 2780 ms          | 59/59           | 0    |
| 2   | captured | 2        | 113.6 ms        | 0.4 ms            | 40 ms             | 0 MB             | 66 ms            | 1511 ms  | 254.8 MB     | 2782 ms          | 59/59           | 0    |
