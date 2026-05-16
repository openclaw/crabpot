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
| p50WallMs                      | 1354     |
| p95WallMs                      | 1357     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 13.1 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 88.3 ms  |
| p95OpenClawImportMs            | 93.4 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 272 MB   |
| maxCpuMsEstimate               | 2507 ms  |
| baselineReferenceWallMs        | 1376 ms  |
| baselineReferencePeakRssMb     | 258.9 MB |
| baselineReferenceCpuMsEstimate | 2579 ms  |
| statSampleCount                | 160      |
| rssSampleCount                 | 160      |
| cpuSampleCount                 | 160      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1376 ms                                  |
| referencePeakRssMb     | 258.9 MB                                 |
| referenceCpuMsEstimate | 2579 ms                                  |
| maxWallMs              | 2011 ms                                  |
| maxPeakRssMb           | 269.5 MB                                 |
| maxCpuMsEstimate       | 3270 ms                                  |
| statSampleCount        | 184                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 93.4 ms         | 0.5 ms            | 0 ms              | 3.7 MB           | 0 ms             | 1357 ms  | 262.6 MB     | 2455 ms          | 54/54           | 0    |
| 1   | captured | 2        | 72.4 ms         | 0.3 ms            | 0 ms              | 3.3 MB           | 0 ms             | 1325 ms  | 262.2 MB     | 2458 ms          | 52/52           | 0    |
| 2   | captured | 2        | 88.3 ms         | 0.3 ms            | 0 ms              | 13.1 MB          | 0 ms             | 1354 ms  | 272 MB       | 2507 ms          | 54/54           | 0    |
