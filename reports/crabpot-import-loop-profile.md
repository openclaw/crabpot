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
| p50WallMs                      | 2439     |
| p95WallMs                      | 2447     |
| p50PluginWallDeltaMs           | 28       |
| p95PluginWallDeltaMs           | 36       |
| maxPluginPeakRssDeltaMb        | 9.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 76 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.7 ms |
| p95OpenClawImportMs            | 119.9 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 308.7 MB |
| maxCpuMsEstimate               | 4898 ms  |
| baselineReferenceWallMs        | 2411 ms  |
| baselineReferencePeakRssMb     | 299.2 MB |
| baselineReferenceCpuMsEstimate | 4822 ms  |
| statSampleCount                | 287      |
| rssSampleCount                 | 287      |
| cpuSampleCount                 | 287      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2411 ms                                  |
| referencePeakRssMb     | 299.2 MB                                 |
| referenceCpuMsEstimate | 4822 ms                                  |
| maxWallMs              | 3235 ms                                  |
| maxPeakRssMb           | 313 MB                                   |
| maxCpuMsEstimate       | 5816 ms                                  |
| statSampleCount        | 312                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.7 ms        | 0.4 ms            | 28 ms             | 2.8 MB           | 12 ms            | 2439 ms  | 302 MB       | 4834 ms          | 96/96           | 0    |
| 1   | captured | 2        | 119.9 ms        | 0.5 ms            | 36 ms             | 9.5 MB           | 76 ms            | 2447 ms  | 308.7 MB     | 4898 ms          | 96/96           | 0    |
| 2   | captured | 2        | 113.5 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2408 ms  | 287.7 MB     | 4780 ms          | 95/95           | 0    |
