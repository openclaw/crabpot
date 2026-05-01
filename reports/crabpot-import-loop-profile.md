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
| p50WallMs                      | 1401     |
| p95WallMs                      | 1502     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 80       |
| maxPluginPeakRssDeltaMb        | 3.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 175 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 96 ms    |
| p95OpenClawImportMs            | 98.6 ms  |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.2 ms   |
| maxPeakRssMb                   | 285.9 MB |
| maxCpuMsEstimate               | 2768 ms  |
| baselineReferenceWallMs        | 1422 ms  |
| baselineReferencePeakRssMb     | 282.6 MB |
| baselineReferenceCpuMsEstimate | 2593 ms  |
| statSampleCount                | 169      |
| rssSampleCount                 | 169      |
| cpuSampleCount                 | 169      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1422 ms                                  |
| referencePeakRssMb     | 282.6 MB                                 |
| referenceCpuMsEstimate | 2593 ms                                  |
| maxWallMs              | 1986 ms                                  |
| maxPeakRssMb           | 287.6 MB                                 |
| maxCpuMsEstimate       | 3441 ms                                  |
| statSampleCount        | 189                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 96 ms           | 0.2 ms            | 0 ms              | 0.1 MB           | 0 ms             | 1401 ms  | 282.7 MB     | 2530 ms          | 55/55           | 0    |
| 1   | captured | 2        | 98.6 ms         | 0.2 ms            | 80 ms             | 3.3 MB           | 175 ms           | 1502 ms  | 285.9 MB     | 2768 ms          | 60/60           | 0    |
| 2   | captured | 2        | 93.5 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1366 ms  | 280.7 MB     | 2497 ms          | 54/54           | 0    |
