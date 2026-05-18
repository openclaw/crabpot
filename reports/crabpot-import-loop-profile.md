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
| p50WallMs                      | 1484     |
| p95WallMs                      | 1515     |
| p50PluginWallDeltaMs           | 33       |
| p95PluginWallDeltaMs           | 64       |
| maxPluginPeakRssDeltaMb        | 1 MB     |
| maxPluginCpuDeltaMsEstimate    | 59 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 92 ms    |
| p95OpenClawImportMs            | 95.1 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 269.7 MB |
| maxCpuMsEstimate               | 2743 ms  |
| baselineReferenceWallMs        | 1451 ms  |
| baselineReferencePeakRssMb     | 268.7 MB |
| baselineReferenceCpuMsEstimate | 2684 ms  |
| statSampleCount                | 178      |
| rssSampleCount                 | 178      |
| cpuSampleCount                 | 178      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1451 ms                                  |
| referencePeakRssMb     | 268.7 MB                                 |
| referenceCpuMsEstimate | 2684 ms                                  |
| maxWallMs              | 2015 ms                                  |
| maxPeakRssMb           | 280.8 MB                                 |
| maxCpuMsEstimate       | 3593 ms                                  |
| statSampleCount        | 193                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 95.1 ms         | 0.3 ms            | 33 ms             | 1 MB             | 29 ms            | 1484 ms  | 269.7 MB     | 2713 ms          | 59/59           | 0    |
| 1   | captured | 2        | 83.7 ms         | 0.4 ms            | 64 ms             | 0 MB             | 59 ms            | 1515 ms  | 259.9 MB     | 2743 ms          | 60/60           | 0    |
| 2   | captured | 2        | 92 ms           | 0.4 ms            | 29 ms             | 0 MB             | 46 ms            | 1480 ms  | 264.2 MB     | 2730 ms          | 59/59           | 0    |
