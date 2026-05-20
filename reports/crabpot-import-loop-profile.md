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
| p50WallMs                      | 1527     |
| p95WallMs                      | 1539     |
| p50PluginWallDeltaMs           | 9        |
| p95PluginWallDeltaMs           | 21       |
| maxPluginPeakRssDeltaMb        | 1.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 48 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 83.7 ms  |
| p95OpenClawImportMs            | 88 ms    |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 258.3 MB |
| maxCpuMsEstimate               | 2793 ms  |
| baselineReferenceWallMs        | 1518 ms  |
| baselineReferencePeakRssMb     | 257.2 MB |
| baselineReferenceCpuMsEstimate | 2745 ms  |
| statSampleCount                | 181      |
| rssSampleCount                 | 181      |
| cpuSampleCount                 | 181      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1518 ms                                  |
| referencePeakRssMb     | 257.2 MB                                 |
| referenceCpuMsEstimate | 2745 ms                                  |
| maxWallMs              | 2051 ms                                  |
| maxPeakRssMb           | 270.3 MB                                 |
| maxCpuMsEstimate       | 3678 ms                                  |
| statSampleCount        | 201                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 82.1 ms         | 0.4 ms            | 9 ms              | 0 MB             | 48 ms            | 1527 ms  | 252.4 MB     | 2793 ms          | 60/60           | 0    |
| 1   | captured | 2        | 88 ms           | 0.4 ms            | 21 ms             | 0 MB             | 41 ms            | 1539 ms  | 257.1 MB     | 2786 ms          | 61/61           | 0    |
| 2   | captured | 2        | 83.7 ms         | 0.4 ms            | 3 ms              | 1.1 MB           | 45 ms            | 1521 ms  | 258.3 MB     | 2790 ms          | 60/60           | 0    |
