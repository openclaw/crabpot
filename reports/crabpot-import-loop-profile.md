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
| p50WallMs                      | 1460     |
| p95WallMs                      | 1488     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 16 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 94.8 ms  |
| p95OpenClawImportMs            | 94.9 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 264.3 MB |
| maxCpuMsEstimate               | 2716 ms  |
| baselineReferenceWallMs        | 1494 ms  |
| baselineReferencePeakRssMb     | 266 MB   |
| baselineReferenceCpuMsEstimate | 2700 ms  |
| statSampleCount                | 174      |
| rssSampleCount                 | 174      |
| cpuSampleCount                 | 174      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1494 ms                                  |
| referencePeakRssMb     | 266 MB                                   |
| referenceCpuMsEstimate | 2700 ms                                  |
| maxWallMs              | 1971 ms                                  |
| maxPeakRssMb           | 267.3 MB                                 |
| maxCpuMsEstimate       | 3456 ms                                  |
| statSampleCount        | 192                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 94.9 ms         | 0.3 ms            | 0 ms              | 0 MB             | 16 ms            | 1488 ms  | 264.3 MB     | 2716 ms          | 59/59           | 0    |
| 1   | captured | 2        | 94.8 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1434 ms  | 256.8 MB     | 2630 ms          | 57/57           | 0    |
| 2   | captured | 2        | 89.6 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1460 ms  | 263.9 MB     | 2633 ms          | 58/58           | 0    |
